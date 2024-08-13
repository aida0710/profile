import React from 'react';
import Link from 'next/link';
import {Button} from '@nextui-org/react';
import {AppWindowIcon, AwardIcon, PenToolIcon} from 'lucide-react';

export const SelectionButton: () => React.JSX.Element = () => {
    return (
        <div className='mb-4 flex justify-center gap-3'>
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
    );
};
