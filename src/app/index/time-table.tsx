import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { CalendarDays } from "lucide-react";
import {timeTableData, TimeLineItem} from '@/app/index/data-store';

export const Timeline: () => React.JSX.Element = () => {
    const timelineData: TimeLineItem[] = timeTableData();

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Timeline</h2>
            <div className="space-y-4">
                {timelineData.map((event, index) => (
                    <Card key={index} className="w-full">
                        <CardBody className="flex flex-row items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <CalendarDays className="w-5 h-5" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm text-default-500">{event.date}</p>
                                <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
                                <p className="text-default-500 mt-1">{event.description}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};
