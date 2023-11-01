'use client';

import React from "react";
import {Divider} from "@nextui-org/divider";
import {Link} from "@nextui-org/link";

export function Footer() {

    return (
        <footer className="w-full">
            <Divider className="my-5"/>
            <div>
                <div className="flex justify-center m-5">
                    <Link
                        href="https://twitter.com/aida_0710"
                        className="font-normal text-sm md:text-base">
                        © 2023 Masaki Aida. All Rights Reserved.
                    </Link>
                </div>
            </div>
        </footer>
    );
}
