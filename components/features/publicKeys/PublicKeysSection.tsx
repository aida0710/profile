import { CopyButton } from '@/components/common/CopyButton';
import { GridSection } from '@/components/grid/GridSection';
import { SectionHeader } from '@/components/grid/SectionHeader';
import { siteConfig } from '@/config/site';
import { publicKeys } from '@/data/publicKeys';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import { abbreviatePublicKey } from '@/libs/publicKeyDisplay';

const INSTALL_COMMAND = `curl -s ${siteConfig.url}/keys >> ~/.ssh/authorized_keys`;

const ROW_ACTION_CLASS = 'flex-none cursor-pointer text-xs text-sub hover:text-ink';

interface PublicKeysSectionProps {
  locale: Locale;
}

export function PublicKeysSection({ locale }: PublicKeysSectionProps) {
  return (
    <GridSection aria-labelledby="public-keys-title">
      <SectionHeader
        id="public-keys-title"
        title={t(locale, 'publicKeys.title')}
        aside={
          <a href="/keys" className="font-mono text-xs text-faint hover:text-ink">
            /keys
          </a>
        }
      />
      <div className="flex items-center gap-3 border-b border-line bg-bg2 px-8 py-3.5 font-mono text-[13px] max-sm:px-5">
        <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-sub">
          <span className="text-faint">$ </span>
          {INSTALL_COMMAND}
        </code>
        <CopyButton
          text={INSTALL_COMMAND}
          label={t(locale, 'publicKeys.copy')}
          copiedLabel={t(locale, 'publicKeys.copied')}
          className="flex-none cursor-pointer rounded-md border border-line2 bg-bg px-3 py-1 font-sans text-xs font-medium hover:border-ink"
        />
      </div>
      {publicKeys.map((publicKey) => (
        <div
          key={publicKey.id}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-dashed border-line px-8 py-3 last:border-b-0 max-sm:px-5"
        >
          <span className="min-w-40 flex-none font-medium">{publicKey.label}</span>
          <span className="min-w-[200px] flex-1 truncate font-mono text-xs text-faint">
            {abbreviatePublicKey(publicKey.key)}
          </span>
          <CopyButton
            text={publicKey.key}
            label={t(locale, 'publicKeys.copy')}
            copiedLabel={t(locale, 'publicKeys.copied')}
            className={ROW_ACTION_CLASS}
          />
          <a href={`/keys/${publicKey.id}`} download={`${publicKey.id}.pub`} className={ROW_ACTION_CLASS}>
            {t(locale, 'publicKeys.download')}
          </a>
        </div>
      ))}
    </GridSection>
  );
}
