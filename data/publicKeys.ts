import type { PublicKey } from '@/types';

// SSH 公開鍵の一覧。
// 公開鍵は秘密情報ではないため、そのままコミット・公開して問題ありません。
// 鍵を追加する場合はこの配列に要素を追加してください（増えても UI / `/keys` は自動で追従します）。
//   label: 端末名や用途など、人間が識別するためのラベル
//   key:   authorized_keys にそのまま貼り付けられる 1 行の公開鍵文字列
export const publicKeys: PublicKey[] = [
  {
    label: 'Ed25519 (2026-07-15)',
    key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJ8am/z773v2ITl1lLVRIy1FJyANl+wGJB5FYaPerYBZ ed25519_2026_07_15@aida0710.work',
  },
  {
    label: 'RSA 4096 (2026-07-15)',
    key: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDvjua4+374w+APYNlJAzNBRmWk7OT1yLY9U3mVnD8QNL0SJiVXNc3wtKzwlhZdT6e9eczmsuq0YGemfXYYgLXN7ghkEjCMCoP6ZD8hv4Wd3fStqNYOIa4NrHMXhjtZVSJYroRKxf5sCqiX8t0/kcrk0CK+9V90yHOvgc3EBIuq0Kas34F4Kn9nfpyewOcB7TG1kTujfcNxvtlJoZD50P80wgDPRKqh0CDmxlHR3B899cWkEpnJQ+n88egtmcrFYUlbPrWIgOFK30b9LpDkIZ887Oeb3niAueDV42jlo/u4p11aedm+atyo2iJNShnCK2zrteNXjX+SQqu6h3O52VSLTmmevzKXAuwTDvmYLrizIqkKcjTAdM0x4qQ4TBbDcQTxmkzhWg9YQS079m9aCSzK8F+Lm0NiOAx/uGzuWTqq9UkqNRptD+Q370DCJJEP6hQ6jwtFJQFAzLGXDAQLHRlOzm4BFL32iHe2ov6lPp/lXohV89KX/OQs0tDlfe4cmoe+LzvjO+Zx3rDeTfvy9aLxvSdY8ko2E5FcaK0yIN7+Z/faQqs7flCSqvyVyg08oh0APhLcKfRS8IMmYb7mYKAxiUDWCIlBV1bEs6lemTc5zSkaW28Q5SICM01dqg6GshxzmQxcW7xv5mJQrxhTBR92+xhUMHKmJFfDSJNWG+kK5w== rsa_2026_07_15@aida0710.work',
  },
];
