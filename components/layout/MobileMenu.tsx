'use client';

import { Divider } from '@heroui/divider';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@heroui/modal';
import clsx from 'clsx';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type DictionaryKey, t } from '@/libs/i18n/dictionaries';
import { localeFromPath, withLocale } from '@/libs/i18n/locale';

const MOTION_VARIANTS = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

export interface MobileMenuItem {
  path: string;
  labelKey: DictionaryKey;
  icon: React.ReactNode;
}

interface MobileMenuProps {
  navItems: MobileMenuItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  const isActive = (path: string): boolean => pathname === withLocale(path, locale);

  return (
    <>
      <button
        type="button"
        aria-label={t(locale, 'common.openMenu')}
        className="cursor-pointer text-warm-text focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:rounded-md focus-visible:outline-none"
        onClick={onOpen}
      >
        <MenuIcon aria-hidden="true" className="h-6 w-6" />
      </button>

      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        motionProps={{ variants: MOTION_VARIANTS }}
        size="full"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-warm-bg">
          <ModalHeader className="flex items-center">
            <button
              type="button"
              aria-label={t(locale, 'common.closeMenu')}
              className="mr-4 cursor-pointer text-warm-text focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:rounded-md focus-visible:outline-none"
              onClick={onClose}
            >
              <XIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <p className="font-heading text-lg font-semibold text-warm-text">{t(locale, 'common.menu')}</p>
          </ModalHeader>

          <Divider className="bg-warm-border" />

          <ModalBody className="py-6">
            {navItems.map((item) => {
              const href = withLocale(item.path, locale);
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  className={clsx(
                    'flex items-center gap-4 rounded-lg px-4 py-3 text-2xl font-medium transition-colors',
                    {
                      'text-warm-accent': active,
                      'text-warm-text hover:text-warm-accent': !active,
                    },
                  )}
                  href={href}
                  onClick={onClose}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{t(locale, item.labelKey)}</span>
                </Link>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
