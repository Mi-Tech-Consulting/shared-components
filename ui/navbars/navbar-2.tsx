'use client';

import Link from 'next/link';
import { CircleAlertIcon, SearchIcon, BellIcon, Question } from '../icons';

import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger
} from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar2() {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <header className="flex items-center justify-between border-b border-gray-300 pb-4 mt-4">
            <div className="flex items-center space-x-4">
                <CircleAlertIcon className="w-6 h-6 text-yellow-500" />
                <div className="bg-orange-100 p-4 rounded-md flex items-center justify-between">
                    <span>There are 30 days left in your trial. </span>
                    <Link href="#" className="text-blue-500 ml-2" prefetch={false}>
                        Upgrade Account
                    </Link>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <SearchIcon className="w-6 h-6" />
                <BellIcon className="w-6 h-6" />
                <Question className="w-6 h-6" />
                {user && (
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                variant="light"
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
                    <Button color="primary" onClick={() => signIn()} variant="flat">
                        Login/Sign Up
                    </Button>
                )}
            </div>
        </header>
    );
}
