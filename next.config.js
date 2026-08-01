const path = require('node:path');

// 追加しても既存の描画を壊さないヘッダのみを設定している。
// Content-Security-Policy は Google Analytics / Vercel Analytics / HeroUI の
// インラインスタイルを許可する必要があり、内容の検証なしに入れると表示が壊れるため
// ここでは意図的に設定していない。導入する場合は nonce 付きで段階的に。
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 親ディレクトリにも lockfile があると Turbopack がそちらをワークスペースルートと
  // 誤認するため、明示的にこのディレクトリを指定する。
  turbopack: {
    root: path.join(__dirname),
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
