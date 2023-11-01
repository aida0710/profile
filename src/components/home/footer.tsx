'use client';

import React from "react";
import {Divider} from "@nextui-org/divider";
import {Link} from "@nextui-org/link";

export default function Footer() {
    const [lastCommit, setLastCommit] = React.useState<string | undefined>(undefined);

    React.useEffect((): void => {
        getLastCommit().then((date): void => {
            if (date === undefined) return;
            const specifiedDateTime: Date = new Date(date);
            const japanTime: Date = new Date(specifiedDateTime.toLocaleString('en-US', {timeZone: 'Asia/Tokyo'}));
            const japanTimeFormatted: string = japanTime.toLocaleString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                weekday: 'short'
            });
            setLastCommit(japanTimeFormatted);
        });
    }, []);

    return (
        <footer className="w-full">
            <Divider className="my-5"/>
            <div className="m-5">
                <Link
                    href="https://github.com/aida0710/profile/commits/master"
                    isBlock
                    showAnchorIcon
                    className="font-normal text-medium mb-3">
                    <p>Last Commit: {lastCommit}</p>
                </Link>
                <Link
                    href="https://twitter.com/aida_0710"
                    isBlock
                    showAnchorIcon
                    className="font-normal text-medium mb-3">
                    <p>© 2023 Masaki Aida. All Rights Reserved.</p>
                </Link>
            </div>
        </footer>
    );

    async function getLastCommit() {
        try {
            const response: Response = await fetch("https://api.github.com/repos/aida0710/profile/commits", {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            if (response.status !== 200) console.error('GETリクエストが失敗しました');
            let data = await response.json();
            return data[0].commit["author"].date;
        } catch (error) {
            console.error(error);
        }
    }
}
