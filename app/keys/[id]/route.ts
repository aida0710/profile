import { publicKeys } from '@/data/publicKeys';

// 公開鍵 1 件を .pub ファイルとしてダウンロードさせるエンドポイント。
// Content-Disposition: attachment を付けているので、ブラウザは表示ではなく保存を行う。
//   例: /keys/ed25519-2026-07-15  ->  ed25519-2026-07-15.pub
export function generateStaticParams() {
  return publicKeys.map((entry) => ({ id: entry.id }));
}

// generateStaticParams に無い id はビルド時に 404 にする（動的生成しない）。
export const dynamicParams = false;

// データは静的なのでビルド時に生成する。
export const dynamic = 'force-static';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }): Promise<Response> {
  const { id } = await params;
  const entry = publicKeys.find((publicKey) => publicKey.id === id);

  if (!entry) {
    return new Response('Not Found', { status: 404 });
  }

  // authorized_keys にそのまま追記できるよう末尾に改行を付ける
  return new Response(`${entry.key}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `attachment; filename="${entry.id}.pub"`,
    },
  });
}
