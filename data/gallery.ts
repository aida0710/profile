import type { Localized } from '@/libs/i18n/locale';
import type { GalleryImage } from '@/types';

export const GALLERY_DIRECTORY = '/images/gallery/';

export const GALLERY_INTRODUCTION: Localized<string[]> = {
  ja: ['私が撮影した写真や撮影していただいた写真を掲載しています。', '画像をクリックすると拡大表示されます。'],
  en: ['A collection of photos I have taken and photos taken of me.', 'Click an image to view it enlarged.'],
};

export const images: GalleryImage[] = [
  {
    src: '2026年6月25日_aws_summit.png',
    description: {
      ja: 'AWS Summitで発表をさせていただきました。その際の写真です。',
      en: 'A photo from when I gave a talk at AWS Summit.',
    },
    date: '2026年6月25日',
    detail: { ja: '' },
  },
  {
    src: '2025年1月4日_荒川河川敷.JPG',
    description: {
      ja: '熊谷市の荒川河川敷にて撮影した写真。',
      en: 'A photo taken along the Arakawa riverbank in Kumagaya.',
    },
    date: '2025年1月4日',
    detail: { ja: '' },
  },
  {
    src: '2024年12月18日_青の洞窟.JPG',
    description: {
      ja: '青の洞窟にて撮影した写真。イルミネーション。',
      en: 'A photo of the Aoi no Doukutsu illumination.',
    },
    date: '2024年12月18日',
    detail: { ja: '' },
  },
  {
    src: '2024年9月28日_第三回広島オフラインイベント.jpg',
    description: {
      ja: 'Sechack 365にて、運営スタッフの方より撮影していただいた写真。',
      en: 'A photo taken by the SecHack365 staff during the event.',
    },
    date: '2024年9月27日',
    detail: {
      ja: 'Sechack356 第三回広島オフラインイベント',
      en: 'SecHack365 — Third Hiroshima Offline Event',
    },
  },
  {
    src: '2024年12月7日_お台場の夕日.JPG',
    description: {
      ja: 'お台場にて撮影した写真。夕焼け。',
      en: 'A sunset shot taken in Odaiba.',
    },
    date: '2024年12月7日',
    detail: { ja: '' },
  },
  {
    src: '2024年12月7日_お台場の紅葉.JPG',
    description: {
      ja: 'お台場にて撮影した写真。紅葉。',
      en: 'Autumn leaves photographed in Odaiba.',
    },
    date: '2024年12月7日',
    detail: { ja: '' },
  },
  {
    src: '2024年12月21日_虎ノ門ヒルズのバニラアイス.JPG',
    description: {
      ja: '虎ノ門ヒルズにて食べたバニラアイス',
      en: 'Vanilla ice cream I had at Toranomon Hills.',
    },
    date: '2024年12月21日',
    detail: {
      ja: 'めちゃくちゃ良く撮影できたので、記念に。',
      en: 'The shot turned out really well, so I kept it as a souvenir.',
    },
  },
  {
    src: '2025年1月11日_古川さん会サラダ.JPG',
    description: {
      ja: '久米川の飲食店にて食べたサラダ。',
      en: 'A salad I had at a restaurant in Kumegawa.',
    },
    date: '2025年1月11日',
    detail: {
      ja: 'おいしかった。サラダ好き。',
      en: 'It was delicious. I love salads.',
    },
  },
  {
    src: '2025年2月1日_愛犬まろん.JPG',
    description: {
      ja: '実家の愛犬。',
      en: 'Our family dog.',
    },
    date: '2025年2月1日',
    detail: {
      ja: '名前は「まろん」っていうよ。',
      en: 'Her name is "Maron".',
    },
  },
  {
    src: '2025年2月1日_愛猫との.JPG',
    description: {
      ja: '実家の愛猫。アイコンの子。',
      en: 'Our family cat — the one you see in my avatar.',
    },
    date: '2025年2月1日',
    detail: {
      ja: '名前は「との」っていうよ。',
      en: 'His name is "Tono".',
    },
  },
];
