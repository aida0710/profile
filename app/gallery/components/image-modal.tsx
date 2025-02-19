import type {ImageData} from '@/app/gallery/types/gallery';

import React, {useEffect, useState} from 'react';
import {X} from 'lucide-react';
import Image from 'next/image';
import {Modal, ModalBody, ModalContent} from '@heroui/modal';
import {Button} from '@heroui/button';
import {Spinner} from '@heroui/spinner';

import {galleryDirectory} from '@/app/gallery/data-store';

interface ImageModalProps {
    image: ImageData | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({image, isOpen, onClose}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen && image) {
            setIsLoading(true);
        }
    }, [isOpen, galleryDirectory + image?.src]);

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setIsLoading(true);
        }, 300);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        // クリックされた要素がオーバーレイ自体（section要素）の場合のみ閉じる
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!image) return null;

    return (
        <Modal
            hideCloseButton
            className='bg-transparent'
            isOpen={isOpen}
            size='full'
            onClose={handleClose}>
            <ModalContent className='bg-transparent shadow-none'>
                {() => (
                    <ModalBody className='p-0'>
                        <section
                            aria-label='画像詳細'
                            className='fixed inset-0 flex flex-col items-center justify-center bg-black/75'
                            onClick={handleOverlayClick}>
                            <Button
                                isIconOnly
                                aria-label='閉じる'
                                className='absolute right-4 top-4 z-50 bg-black/50 text-white hover:bg-black/70'
                                onPress={handleClose}>
                                <X size={24} />
                            </Button>
                            <div className='relative h-full max-h-[80vh] w-full max-w-5xl'>
                                {isLoading && (
                                    <div className='absolute inset-0 z-10 flex items-center justify-center'>
                                        <div
                                            className='flex flex-col items-center gap-4'
                                            role='status'>
                                            <Spinner
                                                color='white'
                                                size='lg'
                                            />
                                            <p className='text-lg text-white'>読み込み中...</p>
                                        </div>
                                    </div>
                                )}
                                <Image
                                    key={galleryDirectory + image.src}
                                    fill
                                    priority
                                    alt={image.description || '写真'}
                                    className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                    quality={100}
                                    sizes='100vw'
                                    src={galleryDirectory + image.src}
                                    onLoadingComplete={() => setIsLoading(false)}
                                />
                            </div>
                            <div className='mt-4 max-w-2xl p-4 text-center text-lg text-white'>
                                <p>{image.description}</p>
                                <p>撮影日: {image.date}</p>
                                {image.detail && <p>{image.detail}</p>}
                            </div>
                        </section>
                    </ModalBody>
                )}
            </ModalContent>
        </Modal>
    );
};
