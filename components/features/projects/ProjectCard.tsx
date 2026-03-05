import Image from 'next/image';
import type {Project} from '@/types';

interface ProjectCardProps {
    project: Project;
    onOpen: () => void;
}

export function ProjectCard({project, onOpen}: ProjectCardProps) {
    return (
        <button
            type='button'
            aria-label={`${project.title} の詳細を表示`}
            className='h-full w-full cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:rounded-xl focus-visible:outline-none'
            onClick={onOpen}
        >
            <article
                className='group h-full overflow-hidden rounded-xl border border-warm-border bg-warm-surface transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5'>
                <div className='p-5'>
                    <div className='mb-2 flex items-center justify-between'>
                        <h2 className='font-heading text-base font-semibold text-warm-text'>{project.title}</h2>
                        <span
                            className='rounded-full bg-warm-accent/10 px-2.5 py-0.5 font-mono text-xs text-warm-accent'>
              {project.language}
            </span>
                    </div>
                    {project.description.map((item) => (
                        <p key={item} className='text-sm leading-relaxed text-warm-subtext'>
                            {item}
                        </p>
                    ))}
                </div>
                <div className='px-5 pb-5'>
                    <Image
                        alt={project.title}
                        className='aspect-video rounded-lg'
                        height={1080}
                        src={`/images/projects/${project.image}`}
                        width={1920}
                    />
                </div>
            </article>
        </button>
    );
}
