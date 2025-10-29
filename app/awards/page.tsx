import type { Metadata } from "next";

import { BlockFrame } from "@/components/common/BlockFrame";
import { AwardCard } from "@/components/features/award/AwardCard";
import { awards } from "@/data/awards";

export const metadata: Metadata = {
  title: "Awards",
  description: "受賞した賞の一覧を紹介しています",
};

export default function AwardsPage() {
  return (
    <div className="pt-8">
      <BlockFrame description="頂いた賞の一覧" title="Award">
        {awards.map((award) => (
          <AwardCard
            key={`${award.organization}-${award.description}-${award.date}`}
            award={award}
          />
        ))}
      </BlockFrame>
    </div>
  );
}
