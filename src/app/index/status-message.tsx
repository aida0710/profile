'use client';
import React from 'react';
import {useBudouX} from '@/functions/hook/useBudouX';
import {statusMessages} from '@/app/index/data-store';

export const StatusMessage: () => React.JSX.Element = () => {
    const {parse} = useBudouX();

    return (
        <div>
            {statusMessages().map((message: string) => (
                <p
                    className='text-md mb-1 font-normal tracking-wide md:text-xl'
                    key={message}>
                    {parse(message)}
                </p>
            ))}
        </div>
    );
};
