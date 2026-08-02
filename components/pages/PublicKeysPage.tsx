import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PublicKeyCard } from '@/components/features/publicKeys/PublicKeyCard';
import { siteConfig } from '@/config/site';
import { publicKeys } from '@/data/publicKeys';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

interface PublicKeysPageProps {
  locale: Locale;
}

export function PublicKeysPage({ locale }: PublicKeysPageProps) {
  return (
    <div className="px-2 py-10 md:py-16">
      <section className="mx-auto w-full max-w-4xl px-6">
        <AnimatedSection>
          <header className="mb-8">
            <h1 className="mb-2 font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">
              {t(locale, 'publicKeys.title')}
            </h1>
            <p className="text-sm text-warm-subtext md:text-base">{t(locale, 'publicKeys.description')}</p>
          </header>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="mb-6 rounded-xl border border-warm-border bg-warm-surface px-5 py-4">
            <p className="mb-2 text-sm text-warm-subtext">{t(locale, 'publicKeys.rawHint')}</p>
            <pre className="overflow-x-auto font-mono text-xs text-warm-text md:text-sm">
              <code>curl {siteConfig.url}/keys</code>
            </pre>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-5">
          {publicKeys.map((publicKey, index) => (
            <AnimatedSection key={publicKey.id} delay={(index + 2) * 80}>
              <PublicKeyCard publicKey={publicKey} locale={locale} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
