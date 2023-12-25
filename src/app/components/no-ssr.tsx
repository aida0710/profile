import React from 'react';
import dynamic from 'next/dynamic';

interface Props {
    children: React.ReactNode;
}

export const NoSSR = dynamic(() => Promise.resolve(({children}: Props) => children), {
    ssr: false,
});
