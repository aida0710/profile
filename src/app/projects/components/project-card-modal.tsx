'use client';

import React from 'react';
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from '@nextui-org/react';
import {ProjectsProps} from '@/app/projects/data-store';
import ProjectCard from './project-card';
import Link from 'next/link';

export default function ProjectCardModal(props: ProjectsProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <ProjectCard
                {...props}
                onOpen={onOpen}
            />
            <Modal
                size='xl'
                placement='center'
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>{props.title}</ModalHeader>
                            <ModalBody>
                                <div className='mb-1'>
                                    {props.description.map((item: string, index: number) => (
                                        <p
                                            key={index}
                                            className='text-md'>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                {Object.entries(props.links).map(([key, link]) => (
                                    <Link
                                        target='_blank'
                                        key={key}
                                        className='block w-full'
                                        href={link.url}>
                                        <Button
                                            className='w-auto min-w-full whitespace-normal break-words px-4 py-6 text-left'
                                            color='primary'
                                            variant='flat'>
                                            {link.description}
                                        </Button>
                                    </Link>
                                ))}
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color='danger'
                                    variant='flat'
                                    onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
