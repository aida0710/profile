import React from 'react';
import {Link} from '@nextui-org/link';
import {Button} from '@nextui-org/react';
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import {SiWakatime} from 'react-icons/si';

export function SnsIcons() {
    return (
        <div className='my-6 flex w-full justify-center'>
            <div className='grid grid-cols-4 gap-4'>
                <Link
                    href='https://github.com/aida0710'
                    className='ml-5 mr-5'>
                    <Button
                        isIconOnly
                        variant='light'
                        className='hover:scale-125 hover:rounded-md'>
                        <BsGithub className='h-full w-full' />
                    </Button>
                </Link>
                <Link
                    href='https://twitter.com/aida_0710'
                    className='ml-5 mr-5'>
                    <Button
                        isIconOnly
                        variant='light'
                        className='hover:scale-125 hover:rounded-md'>
                        <BsTwitter className='h-full w-full' />
                    </Button>
                </Link>
                <Link
                    href='https://www.instagram.com/aida_07100/'
                    className='ml-5 mr-5'>
                    <Button
                        isIconOnly
                        variant='light'
                        className='hover:scale-125 hover:rounded-md'>
                        <BsInstagram className='h-full w-full' />
                    </Button>
                </Link>
                <Link
                    href='https://wakatime.com/@aida_0710'
                    className='ml-5 mr-5'>
                    <Button
                        isIconOnly
                        variant='light'
                        className='hover:scale-125 hover:rounded-md'>
                        <SiWakatime className='h-full w-full' />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
