import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import React from 'react';
import {MenuIcon, XIcon} from 'lucide-react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from '@heroui/modal';
import {Divider} from '@heroui/divider';
import {Button} from '@heroui/button';

import {ProjectIcon} from '@/components/icons/project-icon';
import {NavItemProps} from '@/components/layout/navigation-bar';
import {Link} from '@heroui/link';

interface Props {
    NavItems: NavItemProps[];
}

export const PhoneMenu = ({NavItems}: Props) => {
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const pathname: string = usePathname();

    function isActive(link: string): boolean {
        return pathname === link;
    }

    return (
        <div>
            <MenuIcon
                className='h-8 w-8 sm:hidden'
                onClick={onOpen}
            />
            <Modal
                hideCloseButton
                backdrop={'blur'}
                className='sm:hidden'
                isOpen={isOpen}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut',
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: 'easeIn',
                            },
                        },
                    },
                }}
                size='full'
                onOpenChange={onOpenChange}>
                <ModalContent className='bg-opacity-70'>
                    <ModalHeader className='flex items-center'>
                        <XIcon
                            className='mr-4 h-8 w-8 sm:hidden'
                            onClick={onClose}
                        />
                        <Link
                            color='foreground'
                            href='/'>
                            <ProjectIcon />
                            <p className='ml-5 text-large font-bold text-inherit'>Profile</p>
                        </Link>
                    </ModalHeader>
                    <Divider />
                    <ModalBody>
                        {NavItems.map((item: NavItemProps) => (
                            <div
                                key={item.Link}
                                className='flex w-full items-center'>
                                <Link
                                    className={clsx('m-3 flex w-full text-4xl', {
                                        'text-primary': isActive(item.Link),
                                    })}
                                    color='foreground'
                                    href={item.Link}
                                    onPress={onClose}>
                                    {item.Icon}
                                    <span className='ml-4 text-4xl'>{item.Display}</span>
                                </Link>
                            </div>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color='primary'
                            variant='ghost'
                            onPress={onClose}>
                            閉じる
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};
