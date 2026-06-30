import { Image } from '@heroui/image';

import { SocialIcons } from '@/components/features/home/SocialIcons';
import { affiliations, background } from '@/data/profile';
import { t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const affiliationItems = pickLocalized(affiliations, locale);
  const backgroundItems = pickLocalized(background, locale);

  return (
    <div className="flex min-h-screen items-start justify-center px-6 py-12 md:py-20">
      <div className="w-full max-w-2xl">
        {/* Profile hero - only shown on mobile since sidebar has it on desktop */}
        <div className="mb-10 flex flex-col items-center sm:hidden">
          <Image
            isBlurred
            alt={t(locale, 'common.profilePhotoAlt')}
            className="h-32 w-32"
            radius="full"
            src="/neko.jpg"
          />
        </div>

        <div className="mb-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">Masaki Aida</h1>
          <p className="mt-1 font-heading text-lg text-warm-subtext md:text-xl">相田 優希</p>
          <p className="mt-2 text-warm-subtext">{t(locale, 'home.jobTitle')}</p>
        </div>

        {/* Affiliations section */}
        <section className="mb-10">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent">
            {t(locale, 'home.affiliations')}
          </h2>
          <div className="space-y-2">
            {affiliationItems.map((item) => (
              <p key={item} className="leading-relaxed text-warm-text/80">
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Background section */}
        <section className="mb-10">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent">
            {t(locale, 'home.background')}
          </h2>
          <div className="space-y-2">
            {backgroundItems.map((item) => (
              <p key={item} className="leading-relaxed text-warm-text/80">
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Now section */}
        <section className="mb-10">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent">
            {t(locale, 'home.now')}
          </h2>
          <div className="space-y-2">
            <p className="leading-relaxed text-warm-text/80">{t(locale, 'home.now.body1')}</p>
            <p className="leading-relaxed text-warm-text/80">{t(locale, 'home.now.body2')}</p>
          </div>
        </section>

        {/* Links section */}
        <section>
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent">
            {t(locale, 'home.links')}
          </h2>
          <SocialIcons />
        </section>
      </div>
    </div>
  );
}
