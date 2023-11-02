'use client';

import SkillCard from "@/components/home/skill-card";
import {
    awards,
    amazonWebServices,
    databases,
    frameworks,
    javaScriptLibraries,
    programmingLanguages, qualifications,
    uiFrameworks
} from "@/functions/data-store";
import React from "react";

export function Skills() {

    return (
        <section>
            <div className="ml-12">
                <h1 className="font-medium text-3xl md:text-4xl">Skills</h1>
                <p className="font-normal text-sm md:text-base">経験したことのある技術や出来ること</p>
            </div>
            <div className="flex justify-center w-full my-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
                    <SkillCard title="Programming Languages" contents={programmingLanguages()}/>
                    <SkillCard title="Frameworks (広義)" contents={frameworks()}/>
                    <SkillCard title="UI Frameworks" contents={uiFrameworks()}/>
                    <SkillCard title="JavaScript Libraries" contents={javaScriptLibraries()}/>
                    <SkillCard title="Databases" contents={databases()}/>
                    <SkillCard title="Amazon Web Services" contents={amazonWebServices()}/>
                    <SkillCard title="Qualifications" contents={qualifications()}/>
                    <SkillCard title="Awards" contents={awards()}/>
                </div>
            </div>
        </section>
    );
}
