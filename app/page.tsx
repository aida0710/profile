import { Image } from '@heroui/image';

import { TextBlock } from '@/components/common/TextBlock';
import { NavigationButtons } from '@/components/features/home/NavigationButtons';
import { SocialIcons } from '@/components/features/home/SocialIcons';
import { profileMessages } from '@/data/profile';

export default function HomePage() {
  return (
    <div className="text-center">
      <div className="mb-12 mt-12 flex justify-center">
        <Image
          isBlurred
          alt="profile-icon"
          className="h-56 w-56"
          height="224px"
          radius="full"
          src="/neko.jpg"
          width="224px"
        />
      </div>

      <h1 className="text-lg font-medium tracking-wide md:text-2xl">Masaki Aida / 相田 優希</h1>

      <div className="text-md my-3 font-normal tracking-wide md:text-xl">
        <p>20歳 東京都板橋区在住</p>
        <p>Frontend/Backend Engineer</p>
      </div>

      <SocialIcons />

      <TextBlock messages={profileMessages} />

      <div className="mb-12 mt-16">
        <NavigationButtons />
      </div>
    </div>
  );
}
