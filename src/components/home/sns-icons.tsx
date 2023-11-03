"use client";

import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function SnsIcons() {
  return (
    <div className="flex justify-center w-full my-6">
      <div className="grid grid-cols-3 gap-4">
        <Link href="https://github.com/aida0710" className="ml-5 mr-5">
          <Button
            isIconOnly
            variant="light"
            className="hover:scale-125 hover:rounded-md"
          >
            <BsGithub className="w-full h-full" />
          </Button>
        </Link>
        <Link href="https://twitter.com/aida_0710" className="ml-5 mr-5">
          <Button
            isIconOnly
            variant="light"
            className="hover:scale-125 hover:rounded-md"
          >
            <BsTwitter className="w-full h-full" />
          </Button>
        </Link>
        <Link
          href="https://www.instagram.com/aida_07100/"
          className="ml-5 mr-5"
        >
          <Button
            isIconOnly
            variant="light"
            className="hover:scale-125 hover:rounded-md"
          >
            <BsInstagram className="w-full h-full" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
