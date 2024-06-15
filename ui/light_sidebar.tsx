"use client"
import { ClassAttributes, Fragment, HTMLAttributes, JSX, useState } from 'react'
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion"
import { useSession } from 'next-auth/react';

const navigation = [
  { name: 'Dashboard', href: '/dash', icon: HomeIcon, current: true },
  { name: 'Insight Analysis', href: '/insight', icon: UsersIcon, current: false },
  { name: 'Channels', href: '/user/channel', icon: FolderIcon, current: false },
  { name: 'Campaigns', href: '#', icon: CalendarIcon, current: false },
  { name: 'Payment', href: '/payment', icon: DocumentDuplicateIcon, current: false },
  { name: 'Help', href: '/help', icon: ChartPieIcon, current: false },
  { name: 'Setting', href: '/user/setting', icon: Cog6ToothIcon, current: false },
]

const variants = {
  open: { width: "200px" },
  closed: { width: "75px" },
}


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  const { data: session } = useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(true)

  {/* Static sidebar for desktop */ }
  return (user ?
    <div className='flex flex-row'>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div
          className={classNames("min-h-screen border-r border-gray-200")}
        >
          <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col gap-5" {...props}>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6">
              <div className="flex flex-col py-5">
                <div className="flex flex-row items-center">
                  <button type="button" onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" />
                  </button>
                  {isOpen &&
                    <div className='flex flex-row items-center'>
                      <Image src="favicon.ico" alt="Website Logo" className="h-6 w-auto p-1" />
                      <p className="font-bold text-inherit">Mitech</p>
                    </div>
                  }
                </div>
                <div className='h-5'></div>
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-50 text-indigo-600'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-2 rounded-md py-5 text-sm leading-6 font-semibold items-center'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {isOpen && item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div >
      </motion.div>
      <div className='grow'>
        {props.children}
      </div>
    </div>
    : <div>{props.children}</div>)
}
