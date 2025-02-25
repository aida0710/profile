'use client';

import React, {useEffect, useState} from 'react';
import {Input} from '@heroui/input';
import {Search, X} from 'lucide-react';
import {Button} from '@heroui/button';
import {Skeleton} from '@heroui/skeleton';

interface SearchBarProps {
    onSearchAction: (query: string) => void;
}

export function SearchBar({onSearchAction}: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearchAction(searchQuery);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, onSearchAction]);

    const clearSearch = () => {
        setSearchQuery('');
        onSearchAction('');
    };

    return (
        <div className='mx-auto mb-8 w-full max-w-xl'>
            <div className='relative'>
                {isMounted ? (
                    <Input
                        placeholder='記事を検索...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        startContent={
                            <Search
                                size={18}
                                className='text-default-400'
                            />
                        }
                        endContent={
                            searchQuery && (
                                <Button
                                    isIconOnly
                                    size='sm'
                                    variant='light'
                                    onPress={clearSearch}
                                    aria-label='検索をクリア'>
                                    <X size={16} />
                                </Button>
                            )
                        }
                        className='pr-8'
                    />
                ) : (
                    <Skeleton className='w-full rounded-md'>
                        <div className='flex h-10 w-full items-center rounded-md border border-default-200 bg-default-100 px-3'>
                            <Search
                                size={18}
                                className='mr-2 text-default-300'
                            />
                            <span className='text-default-300'>記事を検索中...</span>
                        </div>
                    </Skeleton>
                )}
            </div>
        </div>
    );
}
