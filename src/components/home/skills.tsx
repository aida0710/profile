"use client";

import SkillCard from "@/components/home/skill-card";
import {
  amazonWebServices,
  awards,
  databases,
  frameworks,
  javaScriptLibraries,
  others,
  programmingLanguages,
  qualifications,
  tools,
  uiFrameworks,
} from "@/functions/data-store";
import React from "react";

export function Skills() {
  return (
    <div>
      <div className="mb-12 m-5 max-md:m-0">
        <div className="ml-5">
          <h1 className="font-medium text-3xl md:text-4xl">
            Awards & Qualifications
          </h1>
          <p className="font-normal text-sm md:text-base">頂いた賞と保有資格</p>
        </div>
        <div className="w-full my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
            <SkillCard title="Awards" contents={awards()} />
            <SkillCard title="Qualifications" contents={qualifications()} />
          </div>
        </div>
      </div>
      <div className="m-5 max-md:m-0">
        <div className="ml-5">
          <h1 className="font-medium text-3xl md:text-4xl">Skills</h1>
          <p className="font-normal text-sm md:text-base">
            経験したことのある技術や出来ること
          </p>
        </div>
        <div className="w-full my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
            <SkillCard
              title="Programming Languages"
              contents={programmingLanguages()}
            />
            <SkillCard title="Frameworks (広義)" contents={frameworks()} />
            <SkillCard title="UI Frameworks" contents={uiFrameworks()} />
            <SkillCard
              title="JavaScript Libraries"
              contents={javaScriptLibraries()}
            />
            <SkillCard title="Databases" contents={databases()} />
            <SkillCard
              title="Amazon Web Services"
              contents={amazonWebServices()}
            />
            <SkillCard title="Tools" contents={tools()} />
            <SkillCard title="Other" contents={others()} />
          </div>
        </div>
      </div>
    </div>
  );
}
