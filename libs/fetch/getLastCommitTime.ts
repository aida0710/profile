const COMMITS_API = 'https://api.github.com/repos/aida0710/profile/commits?per_page=1';

// 1 時間キャッシュする。
// 未認証の GitHub API は 60 リクエスト/時/IP しかないため、
// ページ表示のたびに叩くと共有 IP ではすぐ 403 になる。
const REVALIDATE_SECONDS = 3600;

interface GitHubCommit {
  commit?: {
    author?: {
      date?: string;
    };
  };
}

/**
 * 取得結果。
 * エラーメッセージを文字列で返すと UI にそのまま出てしまい、
 * ロケールに関係なく日本語が表示されてしまうため、成否だけを返して
 * 表示文言は呼び出し側が辞書から引く。
 */
export type LastCommitResult = { ok: true; isoDate: string } | { ok: false };

export async function getLastCommitTime(): Promise<LastCommitResult> {
  try {
    const response = await fetch(COMMITS_API, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) return { ok: false };

    const commits = (await response.json()) as GitHubCommit[];
    const isoDate = commits?.[0]?.commit?.author?.date;
    if (!isoDate) return { ok: false };

    return { ok: true, isoDate };
  } catch {
    return { ok: false };
  }
}
