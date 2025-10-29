import { Card, CardBody } from "@heroui/card";
import Image from "next/image";

import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <Card
      isHoverable
      isPressable
      className="h-full transition-transform hover:scale-[1.02]"
      onPress={onOpen}
    >
      <CardBody>
        <h2 className="text-sm">言語：{project.language}</h2>
        <h3 className="my-2 font-semibold">{project.title}</h3>
        <div className="mb-1">
          {project.description.map((item) => (
            <p key={item} className="text-md">
              {item}
            </p>
          ))}
        </div>
        <Image
          alt={project.title}
          className="mt-auto aspect-video rounded-lg"
          height={1080}
          src={`/images/projects/${project.image}`}
          width={1920}
        />
      </CardBody>
    </Card>
  );
}
