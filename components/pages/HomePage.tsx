import Image from 'next/image';
import Link from 'next/link';

import { AwardsAccordion } from '@/components/features/awards/AwardsAccordion';
import { CellGrid } from '@/components/grid/CellGrid';
import { GridPaper } from '@/components/grid/GridPaper';
import { GridSection } from '@/components/grid/GridSection';
import { SectionHeader } from '@/components/grid/SectionHeader';
import { siteConfig } from '@/config/site';
import { affiliations, background } from '@/data/profile';
import { projects } from '@/data/projects';
import { type DictionaryKey, formatT, t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized, withLocale } from '@/libs/i18n/locale';

// 紹介文が左に長く伸びるため、方眼は Projects / Photos より左から出す。
const HOME_HERO_FADE_START_PERCENT = 30;

interface ProfileCell {
  labelKey: DictionaryKey;
  lines: string[];
  isMuted: boolean;
}

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const profileCells: ProfileCell[] = [
    { labelKey: 'home.affiliations', lines: pickLocalized(affiliations, locale), isMuted: false },
    { labelKey: 'home.background', lines: pickLocalized(background, locale), isMuted: true },
  ];
  const featuredProjects = projects.filter((project) => project.featured);
  const projectsPath = withLocale('/projects', locale);

  return (
    <>
      <GridSection>
        <GridPaper fadeStartPercent={HOME_HERO_FADE_START_PERCENT} />
        <div className="relative flex flex-wrap items-start gap-8 px-10 pt-20 pb-[72px] max-sm:px-5 max-sm:pt-12 max-sm:pb-12">
          <Image
            src="/neko.jpg"
            alt={t(locale, 'common.profilePhotoAlt')}
            width={72}
            height={72}
            priority
            className="size-[72px] flex-none rounded-full border border-line bg-bg object-cover"
          />
          <div className="min-w-[min(280px,100%)] flex-1">
            <h1 className="m-0 text-[32px] leading-[1.2] font-semibold tracking-[-0.03em]">
              Masaki Aida <span className="text-xl font-normal tracking-normal text-faint">相田 優希</span>
            </h1>
            <p className="mt-3 mb-0 max-w-[560px] text-base text-pretty text-sub">
              {t(locale, 'home.intro')}
              <br />
              {t(locale, 'home.intro.interests')}
            </p>
            <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
              {siteConfig.socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line2 bg-bg px-3 text-[13px] font-medium transition-colors duration-150 hover:bg-bg2"
                  >
                    {social.label}
                    <span aria-hidden="true" className="text-faint">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GridSection>

      <GridSection>
        <CellGrid minColumnWidth={260} columnMode="fit">
          {profileCells.map((cell) => (
            <div key={cell.labelKey} className="px-8 py-7 max-sm:px-5">
              <h2 className="m-0 mb-3 font-mono text-xs font-normal text-faint uppercase">
                {t(locale, cell.labelKey)}
              </h2>
              {cell.lines.map((line) => (
                <p key={line} className={cell.isMuted ? 'm-0 mb-1.5 text-sub' : 'm-0 mb-2 text-pretty'}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </CellGrid>
      </GridSection>

      <GridSection aria-labelledby="home-projects-title">
        <SectionHeader
          id="home-projects-title"
          title={t(locale, 'home.projects')}
          aside={
            <Link href={projectsPath} className="text-[13px] text-sub hover:text-ink">
              {formatT(locale, 'home.seeAllProjects', { count: projects.length })} →
            </Link>
          }
        />
        <CellGrid minColumnWidth={200} columnMode="fit">
          {featuredProjects.map((project) => {
            const title = pickLocalized(project.title, locale);
            return (
              <Link
                key={project.id}
                href={`${projectsPath}#${project.id}`}
                className="flex flex-col gap-3.5 p-5 transition-colors duration-150 hover:bg-bg2"
              >
                <Image
                  src={`/images/projects/${project.image}`}
                  alt={title}
                  width={640}
                  height={400}
                  className="block aspect-[16/10] w-full border border-line bg-bg2 object-cover object-top-left"
                />
                <span className="flex flex-col gap-0.5">
                  <span className="font-semibold">{title}</span>
                  <span className="font-mono text-xs text-faint">{project.language}</span>
                </span>
              </Link>
            );
          })}
        </CellGrid>
      </GridSection>

      <AwardsAccordion locale={locale} />
    </>
  );
}
