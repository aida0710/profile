import { Button } from '@heroui/button';
import { Modal, ModalBody, ModalContent } from '@heroui/modal';
import { Spinner } from '@heroui/spinner';
import { X } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import { useCallback, useState } from 'react';
import { GALLERY_DIRECTORY } from '@/data/gallery';
import { t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';
import type { GalleryImage } from '@/types';

interface ImageModalProps {
  image: GalleryImage | null;
  isOpen: boolean;
  locale: Locale;
  onClose: () => void;
}

export function ImageModal({ image, isOpen, locale, onClose }: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleBackdropInteraction = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent | React.TouchEvent) => {
      if (
        e.target === e.currentTarget &&
        (e.type === 'click' ||
          e.type === 'touchend' ||
          (e.type === 'keydown' &&
            ((e as React.KeyboardEvent).key === 'Enter' ||
              (e as React.KeyboardEvent).key === ' ' ||
              (e as React.KeyboardEvent).key === 'Escape')))
      ) {
        onClose();
      }
    },
    [onClose],
  );

  if (!image) return null;

  const description = pickLocalized(image.description, locale);
  const detail = pickLocalized(image.detail, locale);

  return (
    <Modal
      hideCloseButton
      backdrop="opaque"
      className="bg-black/75 overscroll-contain"
      isOpen={isOpen}
      size="full"
      onClose={onClose}
    >
      <ModalContent>
        <ModalBody>
          {/* biome-ignore lint/a11y/useSemanticElements: モーダル背景全体をクリック可能にするためdivを使用 */}
          <div
            role="button"
            tabIndex={0}
            className="fixed inset-0 flex flex-col items-center justify-center"
            onClick={handleBackdropInteraction}
            onKeyDown={handleBackdropInteraction}
            onTouchEnd={handleBackdropInteraction}
          >
            <Button
              isIconOnly
              aria-label={t(locale, 'common.close')}
              className="absolute right-4 top-4 z-50 bg-black/50 text-white hover:bg-black/70"
              onPress={onClose}
            >
              <X size={24} />
            </Button>

            <div className="relative h-full max-h-[80vh] w-full max-w-5xl">
              <div aria-live="polite">
                {isLoading && <Spinner className="absolute inset-0 z-50" color="white" size="lg" role="status" />}
              </div>

              <div className="relative h-full w-full">
                <Image
                  fill
                  priority
                  alt={description || t(locale, 'gallery.imageAlt')}
                  className={`object-contain transition-opacity duration-300 motion-reduce:transition-none ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  quality={100}
                  src={GALLERY_DIRECTORY + image.src}
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>

            <div className="mt-4 max-w-2xl p-4 text-center text-lg text-white">
              {description && <p>{description}</p>}
              {image.date && (
                <p>
                  {t(locale, 'gallery.shotDate')}: {image.date}
                </p>
              )}
              {detail && <p>{detail}</p>}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
