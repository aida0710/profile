import type { Metadata } from "next";

import { TextBlock } from "@/components/common/TextBlock";
import { ImageGallery } from "@/components/features/gallery/ImageGallery";
import { GALLERY_INTRODUCTION, images } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "私が撮影した写真や撮影していただいた写真を掲載しています。",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-8">
        <div className="text-center">
          <h1 className="text-3xl font-medium md:text-4xl">Photo Gallery</h1>
          <TextBlock messages={GALLERY_INTRODUCTION} />
        </div>

        <ImageGallery images={images} />
      </div>
    </main>
  );
}
