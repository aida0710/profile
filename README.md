# Aida Profile

Masaki Aida（[@aida_0710](https://twitter.com/aida_0710)）の個人プロフィールサイトです。

[https://www.aida0710.work](https://www.aida0710.work)

## 技術スタック

- [Next.js 16](https://nextjs.org/)（App Router / Turbopack）
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) + [HeroUI](https://www.heroui.com/)
- [Biome](https://biomejs.dev/)（lint / format）

日本語（デフォルト）と英語（`/en` 配下）に対応し、全ページを静的生成しています。

## セットアップ

```sh
npm install
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## コマンド

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバー（Turbopack） |
| `npm run build` | 本番ビルド（型チェックも実行） |
| `npm run start` | 本番サーバー |
| `npm run lint` | Biome チェック + 自動修正 |
| `npm run format` | Biome 整形のみ |
| `npm run typecheck` | 型チェック（`tsc --noEmit`） |

## ドキュメント

アーキテクチャやデータ定義の詳細は [CLAUDE.md](./CLAUDE.md) を参照してください。

## License

[MIT License](./LICENSE)
