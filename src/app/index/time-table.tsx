'use client';

import React from 'react';
import {TableBody, Table, TableCell, TableHeader, TableColumn, TableRow} from '@nextui-org/react';
import {timeTableData} from '@/app/index/data-store';
import {Link} from '@nextui-org/link';
import {TableDate} from '@/app/index/utils/table-date';

export interface TimeTableData {
    date: TableDate;
    content: string[];
    link?: string;
}

export function TimeTable() {
    return (
        <div className=''>
            <Table
                className="p-4"
                classNames={{
                    wrapper: 'max-w-3xl bg-transparent border border-divider rounded-md overflow-y-auto',
                    th: 'bg-transparent text-default-500 border-b border-divider',
                    td: "bg-transparent text-default-900 border-b border-divider",
                    tbody: 'bg-transparent',
                }}
                aria-label='time table'
                topContentPlacement="outside">
                <TableHeader>
                    <TableColumn>年月日</TableColumn>
                    <TableColumn>何をしたか</TableColumn>
                </TableHeader>
                <TableBody>
                    {timeTableData().map((data: TimeTableData, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{data.date.getDate()}</TableCell>
                            {data.link ? (
                                <TableCell>
                                    <Link
                                        anchorIcon
                                        href={data.link}>
                                        {data.content.map((content: string, index: number) => (
                                            <p key={index}>{content}</p>
                                        ))}
                                    </Link>
                                </TableCell>
                            ) : (
                                <TableCell>
                                    {data.content.map((content: string, index: number) => (
                                        <p key={index}>{content}</p>
                                    ))}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
