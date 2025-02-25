import React from 'react';

import {TextBlockProps} from '@/types';

export function TextBlock({messages}: TextBlockProps) {
    return (
        <div className='p-6'>
            {messages.map((message, index) => (
                <p
                    key={index}
                    className='mb-3 text-base leading-relaxed md:text-lg'>
                    {message}
                </p>
            ))}
        </div>
    );
}
