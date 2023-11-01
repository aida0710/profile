'use client';

import SkillCard from "@/components/home/skill-card";
import {
    achievements,
    amazonWebSystem,
    dataBase,
    frameWork,
    javaScriptLibrary,
    programmingLanguage, qualifications,
    uiFrameWork
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
                    <SkillCard title="Programming Languages" contents={programmingLanguage()}/>
                    <SkillCard title="FrameWork (広義)" contents={frameWork()}/>
                    <SkillCard title="UI FrameWork" contents={uiFrameWork()}/>
                    <SkillCard title="JavaScriptLibrary" contents={javaScriptLibrary()}/>
                    <SkillCard title="DataBase" contents={dataBase()}/>
                    <SkillCard title="AmazonWebSystem" contents={amazonWebSystem()}/>
                    <SkillCard title="Qualifications" contents={qualifications()}/>
                    <SkillCard title="Achievements" contents={achievements()}/>
                </div>
            </div>
        </section>
    );
}
