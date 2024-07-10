'use client';
import { usePathname } from 'next/navigation'
import {
    LayoutDashboardIcon,
    UsersIcon,
    FileIcon,
    CreditCardIcon,
    DollarSignIcon,
    FolderIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    UserIcon,
} from '../icons';
import { useState } from "react";
import Link from 'next/link';


interface SubNavLinkData {
    href: string;
    label: string;
}

interface NavLinkData {
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    label: string;
    isActive?: boolean;
    submenu?: SubNavLinkData[];
}



const navLinks: NavLinkData[] = [
    { href: '/dashboard', icon: LayoutDashboardIcon, label: 'Dashboard' },
    {
        href: '#',
        icon: UsersIcon,
        label: 'Channels',
        submenu: [
            { href: '#', label: 'Public' },
            { href: '#', label: 'Private' },
        ],
    },
    {
        href: '/campaigns', icon: FileIcon, label: 'Campagins', submenu: [
            { href: '/campaigns', label: 'Campaigns' },
            { href: '#', label: 'Ad Group' },
            { href: '/manage', label: 'Ads' }
        ],
    },
    { href: '#', icon: FileIcon, label: 'Analytics' },
    {
        href: '/reports',
        icon: CreditCardIcon,
        label: 'Reports',
        submenu: [
            { href: '#', label: 'Export' },
            { href: '/reports/import', label: 'Import' },
            { href: '/reports', label: 'Schedule Automation' }
        ],
    },
    { href: '#', icon: DollarSignIcon, label: 'Insights' },
    { href: '/ecommerce', icon: FolderIcon, label: 'E-Commerce' },
];

interface NavLinkProps {
    href: string;
    icon: any;
    label: string;
    isActive?: boolean;
    submenu?: SubNavLinkData[];
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, label, submenu }) => {

    const pathname = usePathname();
    const isActive = pathname === href;
    const isSubMenuActive = submenu && submenu.some(subLink => pathname?.includes(subLink.href));
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div>
                <div>
                    <div
                        className={`block py-2 px-4 cursor-pointer ${isActive || isSubMenuActive ? 'bg-white text-[#ff7f00] rounded-md' : ''}`}
                        onClick={toggleSubMenu}
                    >
                        <Link href={!submenu ? href : ""} prefetch={false} className={`block py-0 px-4 cursor-pointer ${isActive || isSubMenuActive ? 'bg-white text-[#ff7f00] rounded-md py-0' : ''}`}>
                            <div className="flex items-center">
                                <Icon className="inline-block w-5 h-5 mr-2" />
                                <span>{label}</span>
                                {submenu && isOpen && <ChevronUpIcon className="ml-auto w-12 h-12" />}
                                {submenu && !isOpen && <ChevronDownIcon className="ml-auto w-12 h-12" />}
                            </div>
                        </Link>
                    </div>
                </div>
                {isOpen && submenu && (
                    <ul className="pl-4">
                        {submenu.map((submenuItem, index) => (
                            <li key={index}>
                                <Link href={submenuItem.href} prefetch={false} className={`block py-2 px-4`}>
                                    {submenuItem.label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                )}
            </div>

        </>

    );
};

export default function Sidebar() {
    return (<>
        <div className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-xl font-bold">mi.consulting</h2>
                <p className="text-sm">Owner</p>
            </div>
            <UserIcon className="w-8 h-8" />
        </div>
        <nav className="space-y-4">
            {navLinks.map((link, index) => (
                <NavLink
                    key={index}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    submenu={link.submenu}
                />
            ))}
        </nav>
        <div className="h-px bg-gray-200 mb-4 mt-4" />
        <div className="mt-auto">
            <Link href="/team-members" className="block py-2 px-4" prefetch={false}>
                Team Members
            </Link>
            <Link href="/payment" className="block py-2 px-4" prefetch={false}>
                Billing
            </Link>
            <Link href="/connect" className="block py-2 px-4" prefetch={false}>
                Integrations
            </Link>
            <Link href="/settings" className="block py-2 px-4" prefetch={false}>
                Settings
            </Link>
        </div>
    </>
    );
};