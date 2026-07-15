import type { PublicKey } from '@/types';

// SSH 公開鍵の一覧。
// 公開鍵は秘密情報ではないため、そのままコミット・公開して問題ありません。
// 鍵を追加する場合はこの配列に要素を追加してください（増えても UI / `/keys` は自動で追従します）。
//   label: 端末名や用途など、人間が識別するためのラベル
//   key:   authorized_keys にそのまま貼り付けられる 1 行の公開鍵文字列
//
// TODO: 下記はプレースホルダーです。実際の公開鍵に置き換えてください。
export const publicKeys: PublicKey[] = [
  {
    label: 'MacBook Pro',
    key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPLACEHOLDERReplaceWithYourRealKey0001 aida@macbook',
  },
  {
    label: 'Desktop',
    key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPLACEHOLDERReplaceWithYourRealKey0002 aida@desktop',
  },
];
