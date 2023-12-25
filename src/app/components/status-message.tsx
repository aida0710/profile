'use client';
import React from 'react';
import {statusMessages} from '@/functions/data-store';
import {useBudouX} from '@/functions/hook/useBudouX';

export const StatusMessage: () => React.JSX.Element = () => {
    const {parse} = useBudouX();

    return (
        <div>
            {statusMessages().map((message: string) => (
                <p
                    className='text-md mb-1 font-normal md:text-xl'
                    key={message}>
                    {parse(message)}
                </p>
            ))}
        </div>
    );
};
