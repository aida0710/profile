import React from 'react';
import {AppWindowIcon, AwardIcon, ImagesIcon, PenToolIcon} from 'lucide-react';
import {Button} from '@heroui/button';
import {Link} from '@heroui/link';

export function NavigationButtons() {
    return (
        <div className='mb-4'>
            <div className='mb-3 flex justify-center gap-3'>
                <Link href='/awards'>
                    <Button
                        color='danger'
                        startContent={<AwardIcon />}
                        variant='flat'>
                        Awards
                    </Button>
                </Link>
                <Link href='/projects'>
                    <Button
                        color='success'
                        startContent={<AppWindowIcon />}
                        variant='flat'>
                        Projects
                    </Button>
                </Link>
                <Link href='/skills'>
                    <Button
                        color='warning'
                        startContent={<PenToolIcon />}
                        variant='flat'>
                        Skills
                    </Button>
                </Link>
            </div>
            <div className='flex justify-center'>
                <Link href='/gallery'>
                    <Button
                        className='w-48'
                        color='primary'
                        startContent={<ImagesIcon />}
                        variant='flat'>
                        Gallery
                    </Button>
                </Link>
            </div>
        </div>
    );
}
