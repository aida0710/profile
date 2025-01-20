import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalBody, ModalContent, Spinner} from '@nextui-org/react';
import {X} from 'lucide-react';
import Image from 'next/image';
import type {ImageData} from '@/app/gallery/types/gallery';

interface ImageModalProps {
    image: ImageData | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({image, isOpen, onClose}) => {
    const [isLoading, setIsLoading] = useState(true);

    // モーダルが開かれた時、または画像が変更された時に loading 状態をリセット
    useEffect(() => {
        if (isOpen && image) {
            setIsLoading(true);
        }
    }, [isOpen, image?.src]);

    // モーダルが閉じられた時に loading 状態をリセット
    const handleClose = () => {
        onClose();
        // モーダルのアニメーション後に loading 状態をリセット
        setTimeout(() => {
            setIsLoading(true);
        }, 300);
    };

    if (!image) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            size='full'
            className='bg-transparent'>
            <ModalContent className='bg-transparent shadow-none'>
                <ModalBody className='p-0'>
                    <div
                        className='fixed inset-0 flex flex-col items-center justify-center bg-black/75'
                        onClick={handleClose}>
                        <Button
                            isIconOnly
                            aria-label='閉じる'
                            className='absolute right-4 top-4 z-50 bg-black/50 text-white hover:bg-black/70'
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClose();
                            }}>
                            <X size={24} />
                        </Button>
                        <div className='relative h-full max-h-[80vh] w-full max-w-5xl'>
                            {isLoading && (
                                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                                    <div className='flex flex-col items-center gap-4'>
                                        <Spinner
                                            color='white'
                                            size='lg'
                                        />
                                        <p className='text-lg text-white'>読み込み中...</p>
                                    </div>
                                </div>
                            )}
                            <Image
                                key={image.src} // 画像が変更された時に強制的に再レンダリング
                                src={image.src}
                                alt='写真'
                                fill
                                className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                sizes='100vw'
                                quality={100}
                                priority
                                onLoadingComplete={() => setIsLoading(false)}
                            />
                        </div>
                        <div className='mt-4 max-w-2xl p-4 text-center text-lg text-white'>
                            <p>{image.description}</p>
                            <p>撮影日: {image.date}</p>
                            {image.detail && <p>{image.detail}</p>}
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
