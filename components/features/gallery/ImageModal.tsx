'use client';

import { Button } from '@heroui/button';
import { Modal, ModalBody, ModalContent } from '@heroui/modal';
import { Spinner } from '@heroui/spinner';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { GALLERY_DIRECTORY } from '@/data/gallery';
import { formatDate } from '@/libs/i18n/date';
import { t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';
import type { GalleryImage } from '@/types';

interface ImageModalProps {
  image: GalleryImage | null;
  isOpen: boolean;
  locale: Locale;
  onClose: () => void;
}

interface ModalImageProps {
  src: string;
  alt: string;
  loadingLabel: string;
}

// 画像ごとに key を変えてマウントし直すことで、
// 別の画像を開いたときに isLoading が確実に初期化されるようにしている。
function ModalImage({ src, alt, loadingLabel }: ModalImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <Spinner aria-label={loadingLabel} className="absolute inset-0 z-10" color="white" role="status" size="lg" />
      )}
      <Image
        fill
        priority
        alt={alt}
        className={`object-contain transition-opacity duration-300 motion-reduce:transition-none ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        quality={100}
        src={src}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
}

export function ImageModal({ image, isOpen, locale, onClose }: ImageModalProps) {
  if (!image) return null;

  const description = pickLocalized(image.description, locale);
  const detail = pickLocalized(image.detail, locale);
  const alt = description || t(locale, 'gallery.imageAlt');

  return (
    // Escape キーによる閉じる操作は Modal 自身が担当する。
    // size="full" では画面全体がダイアログになりバックドロップ領域が存在しないため、
    // 背景クリックで閉じる操作は下の全画面 <button> で提供している。
    <Modal
      hideCloseButton
      aria-label={alt}
      backdrop="opaque"
      classNames={{
        // 暗い背景は base（全画面）に載せる。HeroUI の backdrop スロットは
        // variant 側のクラスに負けることがあるため、ここでは頼らない。
        base: 'm-0 h-dvh max-h-dvh w-screen max-w-full rounded-none bg-black/90 shadow-none',
        body: 'relative flex h-full flex-col items-center justify-center overscroll-contain p-0',
      }}
      isOpen={isOpen}
      size="full"
      onClose={onClose}
    >
      <ModalContent>
        <ModalBody>
          {/* 背景クリックで閉じるための領域。
              以前は role="button" の div が閉じるボタンや画像を内包していて不正な ARIA だったため、
              コンテンツを含まない実際の <button> に置き換えた。
              支援技術には下の閉じるボタンと Escape キーで同じ操作を提供済みなので、
              この要素はフォーカス対象から外し読み上げ対象からも隠す。 */}
          <button
            aria-hidden="true"
            className="absolute inset-0 z-0 cursor-default"
            onClick={onClose}
            tabIndex={-1}
            type="button"
          />

          <Button
            isIconOnly
            aria-label={t(locale, 'common.close')}
            className="absolute right-4 top-4 z-20 bg-black/50 text-white hover:bg-black/70"
            onPress={onClose}
          >
            <X aria-hidden="true" size={24} />
          </Button>

          <div className="pointer-events-none relative z-10 h-full max-h-[80vh] w-full max-w-5xl">
            <ModalImage
              key={image.src}
              alt={alt}
              loadingLabel={t(locale, 'gallery.loading')}
              src={GALLERY_DIRECTORY + image.src}
            />
          </div>

          <div className="pointer-events-none relative z-10 mt-4 max-w-2xl p-4 text-center text-lg text-white">
            {description && <p>{description}</p>}
            {image.date && (
              <p>
                {t(locale, 'gallery.shotDate')}: {formatDate(image.date, locale)}
              </p>
            )}
            {detail && <p>{detail}</p>}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
