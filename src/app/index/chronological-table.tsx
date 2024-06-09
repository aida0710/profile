'use client';

import React from 'react';
import {TableBody, Table, TableCell, TableHeader, TableColumn, TableRow} from '@nextui-org/react';
import {chronologicalTableData} from '@/app/index/data-store';
import {Link} from '@nextui-org/link';

export interface IChronologicalTableData {
    date: string;
    content: string[];
    link?: string;
}

export function ChronologicalTable() {
    return (
        <div>
            <h2 className='text-center text-lg'>Chronological Table</h2>
            <Table
                className='px-4'
                classNames={{
                    wrapper: 'max-w-4xl bg-transparent',
                    th: 'bg-transparent border-b border-divider text-center',
                    td: 'bg-transparent border-b border-divider',
                    tbody: 'bg-transparent',
                }}
                aria-label='chronological table'>
                <TableHeader>
                    <TableColumn>年月日</TableColumn>
                    <TableColumn>活動内容</TableColumn>
                </TableHeader>
                <TableBody>
                    {chronologicalTableData().map((data: IChronologicalTableData, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{data.date}</TableCell>
                            {data.link ? (
                                <TableCell>
                                    <Link href={data.link}>
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
