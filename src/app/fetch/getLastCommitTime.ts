'use server';
export default async function getLastCommitTime(): Promise<string | undefined> {
    const date: string = await getLastCommit().then((date: string) => {
        return date;
    });
    return await formatDate(date);
}

async function getLastCommit(): Promise<string> {
    const response: Response = await fetch('https://api.github.com/repos/aida0710/profile/commits', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    if (response.status !== 200) console.error('GETリクエストが失敗しました');
    let data = await response.json();
    return data[0].commit['author'].date;
}

async function formatDate(date: string | undefined): Promise<string | undefined> {
    if (date === undefined) return;
    const specifiedDateTime: Date = new Date(date);
    const japanTime: Date = new Date(specifiedDateTime.toLocaleString('en-US', {timeZone: 'Asia/Tokyo'}));
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
