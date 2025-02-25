'use client';

import React from 'react';
import Link from 'next/link';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from '@heroui/modal';
import {Button} from '@heroui/button';

import {ProjectCard} from './ProjectCard';

import {Project} from '@/types';

interface ProjectCardModalProps {
    project: Project;
}

export function ProjectCardModal({project}: ProjectCardModalProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <ProjectCard
                project={project}
                onOpen={onOpen}
            />
            <Modal
                isOpen={isOpen}
                placement='center'
                size='xl'
                onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>{project.title}</ModalHeader>
                            <ModalBody>
                                <div className='mb-1'>
                                    {project.description.map((item, index) => (
                                        <p
                                            key={index}
                                            className='text-md'>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                {Object.entries(project.links).map(([key, link]) => (
                                    <Link
                                        key={key}
                                        className='block w-full'
                                        href={link.url}
                                        target='_blank'>
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
