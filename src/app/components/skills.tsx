import React from 'react';

interface Props {
    title: string;
    description: string;
    children: React.ReactNode;
}

export function Skills({title, description, children}: Props) {
    return (
        <div>
            <div className='m-5 mb-12 max-md:m-0'>
                <div className='ml-5'>
                    <h1 className='text-3xl font-medium md:text-4xl'>{title}</h1>
                    <p className='text-sm font-normal md:text-base'>{description}</p>
                </div>
                <div className='my-6 w-full'>
                    <div className='m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>{children}</div>
                </div>
            </div>
        </div>
    );
}
