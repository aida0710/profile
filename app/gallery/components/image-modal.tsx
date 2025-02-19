import React, {useCallback, useState} from 'react';
import {X} from 'lucide-react';
import Image from 'next/image';
import {Modal, ModalBody, ModalContent} from '@heroui/modal';
import {Button} from '@heroui/button';

import {ImageData} from '@/app/gallery/types/gallery';
import {galleryDirectory} from '@/app/gallery/data-store';

interface ImageModalProps {
    image: ImageData | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({image, isOpen, onClose}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleBackdropInteraction = useCallback(
        (e: React.MouseEvent | React.KeyboardEvent) => {
            if (
                e.target === e.currentTarget &&
                (e.type === 'click' ||
                    (e.type === 'keydown' &&
                        ((e as React.KeyboardEvent).key === 'Enter' || (e as React.KeyboardEvent).key === ' ' || (e as React.KeyboardEvent).key === 'Escape')))
            ) {
                onClose();
            }
        },
        [onClose],
    );

    if (!image) return null;

    return (
        <Modal
            hideCloseButton
            backdrop='opaque'
            className='bg-black/75'
            isOpen={isOpen}
            size='full'
            onClose={onClose}>
            <ModalContent>
                <ModalBody>
                    <div
                        aria-label='モーダル背景'
                        className='fixed inset-0 flex flex-col items-center justify-center'
                        role='button'
                        tabIndex={0}
                        onClick={handleBackdropInteraction}
                        onKeyDown={handleBackdropInteraction}>
                        <Button
                            isIconOnly
                            aria-label='閉じる'
                            className='absolute right-4 top-4 z-50 bg-black/50 text-white hover:bg-black/70'
                            onPress={onClose}>
                            <X size={24} />
                        </Button>

                        <div className='relative h-full max-h-[80vh] w-full max-w-5xl'>
                            {isLoading && (
                                <div
                                    aria-live='polite'
                                    className='absolute inset-0 z-10 flex items-center justify-center'
                                    role='status'>
                                    <div className='text-white'>読み込み中...</div>
                                </div>
                            )}

                            <div className='relative h-full w-full'>
                                <Image
                                    fill
                                    priority
                                    alt={image.description || '画像'}
                                    className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                    quality={100}
                                    src={galleryDirectory + image.src}
                                    onLoadingComplete={() => setIsLoading(false)}
                                />
                            </div>
                        </div>

                        <div className='mt-4 max-w-2xl p-4 text-center text-lg text-white'>
                            {image.description && <p>{image.description}</p>}
                            {image.date && <p>撮影日: {image.date}</p>}
                            {image.detail && <p>{image.detail}</p>}
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
