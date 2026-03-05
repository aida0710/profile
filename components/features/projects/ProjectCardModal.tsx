'use client';
import { Button } from '@heroui/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/modal';
import Link from 'next/link';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface ProjectCardModalProps {
  project: Project;
}

export function ProjectCardModal({ project }: ProjectCardModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ProjectCard project={project} onOpen={onOpen} />
      <Modal isOpen={isOpen} placement="center" size="xl" onOpenChange={onOpenChange} className="overscroll-contain">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{project.title}</ModalHeader>
              <ModalBody>
                <div className="mb-1">
                  {project.description.map((item) => (
                    <p key={item} className="text-md">
                      {item}
                    </p>
                  ))}
                </div>
                {Object.entries(project.links).map(([key, link]) => (
                  <Link
                    key={key}
                    className="block w-auto min-w-full whitespace-normal break-words rounded-lg bg-primary/10 px-4 py-6 text-left text-primary transition-colors hover:bg-primary/20"
                    href={link.url}
                    target="_blank"
                  >
                    {link.description}
                  </Link>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
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
