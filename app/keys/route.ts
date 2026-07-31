import { publicKeys } from '@/data/publicKeys';

// SSH 公開鍵を text/plain で 1 行ずつ返すエンドポイント。
// authorized_keys にそのまま追記できる形式（末尾に改行あり）。
//   例: curl https://www.aida0710.work/keys >> ~/.ssh/authorized_keys
export function GET(): Response {
  const body = `${publicKeys.map((entry) => entry.key).join('\n')}\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

// データは静的なのでビルド時に生成する。
export const dynamic = 'force-static';
