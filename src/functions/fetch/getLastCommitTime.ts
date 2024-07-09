'use server';

type CommitResult = {
    success: boolean;
    data: Date | string;
};

export default async function getLastCommitTime(): Promise<string> {
    const result: CommitResult = await getLastCommit();

    if (!result.success) return result.data as string;

    return await formatDate(result.data as Date);
}

async function getLastCommit(): Promise<CommitResult> {
    try {
        const response: Response = await fetch('https://api.github.com/repos/aida0710/profile/commits', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            return {
                success: false,
                data: `GETリクエストが失敗しました: ${response.status}`,
            };
        }

        const data = await response.json();

        if (!data[0]) {
            return {
                success: false,
                data: 'データが取得できませんでした',
            };
        }

        return {
            success: true,
            data: new Date(data[0].commit.author.date),
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            data: error instanceof Error ? error.message : '不明なエラーが発生しました',
        };
    }
}

async function formatDate(date: Date): Promise<string> {
    const japanTime: Date = new Date(date.toLocaleString('en-US', {timeZone: 'Asia/Tokyo'}));
    return japanTime.toLocaleString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'short',
    });
}
