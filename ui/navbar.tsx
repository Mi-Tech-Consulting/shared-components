'use client';

import { Image } from "@nextui-org/image";

import {
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";
import { signIn, signOut, useSession } from 'next-auth/react';
import { NavbarSearch } from "./navbar-search";
import { useRouter } from "next/navigation";


export default function Navbar() {
    const { data: session } = useSession();
    const user = session?.user;
    const router = useRouter();
    return (
        <Nav >
            <NavbarContent justify="start">

                <NavbarBrand>
                    <a href="/" className="flex items-center gap-2">
                        <Image src="favicon.ico" alt="Website Logo" className="h-8 p-1" />
                        <p className="font-bold text-inherit">Mitech</p>
                    </a>
                </NavbarBrand>
            </NavbarContent>
            {!user &&
                <NavbarContent className="hidden sm:flex gap-3 items-center">
                    <NavbarItem>
                        <Link color="foreground" href="/about">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/pricing" aria-current="page" color="secondary">
                            Pricing
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/help">
                            Help
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            }
            <NavbarContent as="div" className="items-center" justify="end">
                <NavbarSearch />
                {user &&
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
                                    src={user.image ?? "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
                                />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2" href="/user/profile">
                                <p className="font-semibold">Signed in as</p>
                                {user?.name && <p className="font-semibold">{user?.name}</p>}
                                <p className="font-semibold">{user.email}</p>
                            </DropdownItem>
                            <DropdownItem key="settings" href="/user/setting">My Settings</DropdownItem>
                            <DropdownItem key="team_settings" href='/team/setting'>Team Settings</DropdownItem>
                            <DropdownItem key="help_and_feedback" href='/help'>Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu></Dropdown>
                }
                {!user &&
                    <NavbarItem>
                        <Button as={Link} color="primary" onClick={() => signIn()} variant="flat">
                            Login/Sign Up
                        </Button>
                    </NavbarItem>
                }
            </NavbarContent>
        </Nav >
    )
}