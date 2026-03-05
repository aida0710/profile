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
      <Modal
        isOpen={isOpen}
        placement="center"
        size="xl"
        onOpenChange={onOpenChange}
        className="overscroll-contain border border-warm-border bg-warm-bg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="font-heading text-warm-text">{project.title}</ModalHeader>
              <ModalBody>
                <div className="mb-3">
                  {project.description.map((item) => (
                    <p key={item} className="text-sm leading-relaxed text-warm-text/80">
                      {item}
                    </p>
                  ))}
                </div>
                {Object.entries(project.links).map(([key, link]) => (
                  <Link
                    key={key}
                    className="block rounded-lg border border-warm-border bg-warm-surface px-4 py-3 text-sm text-warm-accent transition-colors hover:border-warm-accent/30 hover:bg-warm-accent/5 focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
                    href={link.url}
                    target="_blank"
                  >
                    {link.description}
                  </Link>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button className="text-warm-subtext" variant="light" onPress={onClose}>
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
