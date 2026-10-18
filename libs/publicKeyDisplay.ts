// 一覧で見せる鍵本体の先頭・末尾の文字数。種類の区別と見た目の照合ができ、1 行に収まる長さ。
const KEY_HEAD_LENGTH = 24;
const KEY_TAIL_LENGTH = 12;

/** 'ssh-ed25519 AAAA…末尾 comment' を 'ssh-ed25519 AAAA…末尾12字' に縮める。 */
export function abbreviatePublicKey(key: string): string {
  const [type, body = ''] = key.split(' ');
  if (body.length <= KEY_HEAD_LENGTH + KEY_TAIL_LENGTH) return `${type} ${body}`;
  return `${type} ${body.slice(0, KEY_HEAD_LENGTH)}…${body.slice(-KEY_TAIL_LENGTH)}`;
}
