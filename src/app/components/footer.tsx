import React from 'react';
import {Divider} from '@nextui-org/divider';
import {Link} from '@nextui-org/link';
import getLastCommitTime from '@/app/fetch/getLastCommitTime';

export default async function Footer() {
    return (
        <footer className='w-full'>
            <Divider className='my-5' />
            <div className='m-5'>
                <Link
                    href='https://github.com/aida0710/profile/commits/master'
                    isBlock
                    showAnchorIcon
                    className='mb-3 text-medium font-normal'>
                    <p>Last Commit: {await getLastCommitTime()}</p>
                </Link>
                <Link
                    href='https://twitter.com/aida_0710'
                    isBlock
                    showAnchorIcon
                    className='mb-3 text-medium font-normal'>
                    <p>© 2023 Masaki Aida. All Rights Reserved.</p>
                </Link>
            </div>
        </footer>
    );
}
