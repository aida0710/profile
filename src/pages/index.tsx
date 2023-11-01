'use client';
import type {NextPage} from "next";
import React from "react";
import {Head} from "@/functions/head";
import {Image} from "@nextui-org/image";
import {Divider} from "@nextui-org/divider";
import {useBudouX} from "@/functions/hook/useBudouX";
import {statusMessage} from "@/functions/data-store";
import {Skills} from "@/components/home/skills";
import {SnsIcons} from "@/components/home/sns-icons";
import {Footer} from "@/components/home/footer";

const Home: NextPage = () => {
    const {parse} = useBudouX()

    return (
        <div>
            <Head title={"Profile"}/>
            <div className="text-center">
                <div className="flex justify-center">
                    <Image
                        radius="full"
                        src="/neko.jpg"
                        className="mb-12 mt-12 w-56 h-56"
                    />
                </div>
                <h6 className="font-medium text-lg md:text-2xl">Masaki Aida / 相田 優希</h6>
                <p className="font-normal text-md md:text-xl mb-1">18歳 千葉県船橋市在住</p>
                <SnsIcons/>
                {statusMessage().map((message: string) => (
                    <p className="font-normal text-md md:text-xl mb-1" key={message}>{parse(message)}</p>
                ))}
            </div>
            <Divider className="my-14"/>
            <Skills/>
            <Footer/>
        </div>
    )
};

export default Home;
