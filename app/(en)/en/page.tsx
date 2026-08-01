import { HomePage } from '@/components/pages/HomePage';

// メタデータは app/(en)/layout.tsx の buildRootMetadata('en') が提供する。
// 以前はここで英語版の description を直書きしていたが、config/site.ts に集約した。
export default function Page() {
  return <HomePage locale="en" />;
}
