import React from 'react';

interface Props {
    arrayString: string[];
}

export const TextBlock = ({arrayString}: Props) => {
    return (
        <div className='p-6'>
            {arrayString.map((message: string, index: number) => (
                <p
                    key={index}
                    className='mb-3 text-base leading-relaxed md:text-lg'>
                    {message}
                </p>
            ))}
        </div>
    );
};
