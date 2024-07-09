'use client';
import { ClassAttributes, HTMLAttributes, useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
  Select,
  SelectItem,
  SelectSection,
  Spacer,
  Tooltip
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { cn } from '../lib/cn';
import Sidebar from '../ui/sidebars/sidebar-1';
import { sectionItemsWithTeams } from '../lib/sidebar-items';
import { Image } from '@nextui-org/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { signIn, signOut, useSession } from 'next-auth/react';
import { NavbarSearch } from '../ui/navbar-search';
import NotificationsCard from '../ui/notifications-card';
import { WorkSpaceButton } from '../ui/work-space-button';

export default function Component(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { data: session } = useSession();
  const user = session?.user;

  const isCompact = isCollapsed || isMobile;

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex flex-row h-dvh w-full">
      <motion.div
        animate={{
          width: isCompact ? '75px' : '250px'
        }}
        transition={{ ease: 'easeInOut', duration: 0.05 }}
        className={cn(
          'flex h-full w-72 flex-col !border-r-small border-divider p-6 transition-width items-start'
          // {
          //   "w-16 items-center px-2 py-6": isCompact,
          // },
        )}
      >
        <a href="/" className="flex items-center gap-2">
          <div
            className={cn(
              'flex items-center gap-3 px-2',

              {
                'justify-center gap-0': isCompact
              }
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full">
              <Image src="favicon.ico" alt="Mitech" className="h-8" />
            </div>
            <span
              className={cn('text-small font-bold uppercase opacity-100', {
                'w-0 opacity-0': isCompact
              })}
            >
              Mitech
            </span>
          </div>
        </a>
        <Spacer y={8} />
        {/* <div className="flex items-center gap-3 px-2">
          <Avatar
            isBordered
            className="flex-none"
            size="sm"
            src={user?.image ?? "https://i.pravatar.cc/150?u=a04258114e29026708c"}
          />
          <div className={cn("flex max-w-full flex-col", { hidden: isCompact })}>
            <p className="text-small font-medium text-default-600">{user?.name ?? user?.email}</p>
            <p className="text-tiny text-default-400">Owner</p>
          </div>
        </div> */}
        <WorkSpaceButton isCompact={isCompact}></WorkSpaceButton>
        <ScrollShadow
          className={cn('-mr-6 h-full max-h-full py-4 pr-6', {
            'px-1': isCompact
          })}
        >
          <Sidebar
            defaultSelectedKey="home"
            isCompact={isCompact}
            items={sectionItemsWithTeams}
          />
        </ScrollShadow>
        <div
          className={cn('mt-auto flex flex-col', {
            'items-center': isCompact
          })}
        >
          <Tooltip
            content="Help & Feedback"
            isDisabled={!isCompact}
            placement="right"
          >
            <Button
              fullWidth
              className={cn(
                'justify-start truncate text-default-500 data-[hover=true]:text-foreground',
                {
                  'justify-center': isCompact
                }
              )}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none text-default-500"
                    icon="solar:info-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
              href="/help"
              aria-label="Help & Information"
            >
              {isCompact ? (
                <Icon
                  className="text-default-500"
                  icon="solar:info-circle-line-duotone"
                  width={24}
                />
              ) : (
                'Help & Information'
              )}
            </Button>
          </Tooltip>
          <Tooltip content="Log Out" isDisabled={!isCompact} placement="right">
            <Button
              className={cn(
                'justify-start text-default-500 data-[hover=true]:text-foreground',
                {
                  'justify-center': isCompact
                }
              )}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none rotate-180 text-default-500"
                    icon="solar:minus-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
              onClick={() => signOut()}
            >
              {isCompact ? (
                <Icon
                  className="rotate-180 text-default-500"
                  icon="solar:minus-circle-line-duotone"
                  width={24}
                />
              ) : (
                'Log Out'
              )}
            </Button>
          </Tooltip>
        </div>
      </motion.div>
      <div className="w-full flex-col p-4 grow">
        <header className="flex justify-between items-center gap-3 rounded-medium border-small border-divider p-4">
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={onToggle}
            aria-hidden
          >
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:sidebar-minimalistic-outline"
              width={24}
            />
          </Button>
          <NavbarSearch />
          <Popover offset={12} placement="bottom-start">
            <PopoverTrigger>
              <Button
                disableRipple
                isIconOnly
                className="overflow-visible"
                radius="full"
                variant="light"
              >
                <Badge color="danger" content="5" showOutline={false} size="md">
                  <Icon
                    className="text-default-500"
                    icon="solar:bell-linear"
                    width={22}
                  />
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
              <NotificationsCard className="w-full shadow-none" />
            </PopoverContent>
          </Popover>
          {user && (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  variant="light"
                  aria-label="Profile Menu"
                >
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src={
                      user.image ??
                      'https://i.pravatar.cc/150?u=a042581f4e29026704d'
                    }
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  key="profile"
                  className="h-14 gap-2"
                  href="/user/profile"
                >
                  <p className="font-semibold">Signed in as</p>
                  {user?.name && <p className="font-semibold">{user?.name}</p>}
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings" href="/user/setting">
                  My Settings
                </DropdownItem>
                <DropdownItem key="team_settings" href="/team/setting">
                  Team Settings
                </DropdownItem>
                <DropdownItem key="help_and_feedback" href="/help">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => signOut()}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
          {!user && (
            <Button
              as={Link}
              color="primary"
              onClick={() => signIn()}
              variant="flat"
            >
              Login/Sign Up
            </Button>
          )}
        </header>
        <main className="mt-4 h-full w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-divider">
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
}
