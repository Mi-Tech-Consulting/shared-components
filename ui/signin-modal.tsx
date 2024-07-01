'use client';





import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Checkbox,
    Link
} from "@nextui-org/react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession, SessionProvider } from 'next-auth/react';
import { useState } from "react";






export default function SigninModal({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return <Modal
        size={'lg'}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalContent>
            {(onClose) => (<>
                <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
                <ModalBody>
                    <Input
                        autoFocus
                        endContent={
                            <EnvelopeIcon
                                width={20}
                                height={20}
                                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                            />
                        }
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    // onKeyDown={(e) => e.key === 'Enter' && onClose()}
                    />
                    <Input
                        endContent={
                            <LockClosedIcon
                                width={20}
                                height={20}
                                className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex py-2 px-1 justify-between">
                        <Checkbox
                            classNames={{
                                label: "text-small",
                            }}
                        >
                            Remember me
                        </Checkbox>
                        <Link color="primary" href="#">
                            Forgot password?
                        </Link>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        onPress={() => signIn("credentials", { email, password })}>
                        Sign in
                    </Button>
                </ModalFooter>
            </>
            )}
        </ModalContent>
    </Modal>

}