import React from 'react';
import {CalendarDays} from 'lucide-react';
import {Card, CardBody} from '@heroui/card';

import {timeTableData} from '@/app/index/data-store';
import {TimeLineItem} from '@/app/index/types/timeine';

export const Timeline: () => React.JSX.Element = () => {
    const timelineData: TimeLineItem[] = timeTableData();

    return (
        <div className='mx-auto w-full max-w-3xl p-4'>
            <h2 className='mb-6 text-center text-2xl font-bold'>Timeline</h2>
            <div className='space-y-4'>
                {timelineData.map((event, index) => (
                    <Card
                        key={index}
                        className='w-full'>
                        <CardBody className='flex flex-row items-start gap-4'>
                            <div className='mt-1 flex-shrink-0'>
                                <CalendarDays className='h-5 w-5' />
                            </div>
                            <div className='flex-grow'>
                                <p className='text-sm text-default-500'>{event.date}</p>
                                <h3 className='mt-1 text-lg font-semibold'>{event.title}</h3>
                                <p className='mt-1 text-default-500'>{event.description}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};
