"use client";

import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import clsx from "clsx";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { ProjectIcon } from "@/components/icons/ProjectIcon";
import type { NavItem } from "@/types";

const MOTION_VARIANTS = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1] as const, // easeOut cubic-bezier
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as const, // easeIn cubic-bezier
    },
  },
};

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <div className="sm:hidden">
      <MenuIcon className="h-8 w-8 cursor-pointer" onClick={onOpen} />

      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        motionProps={{
          variants: MOTION_VARIANTS,
        }}
        size="full"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-opacity-70">
          <ModalHeader className="flex items-center">
            <XIcon className="mr-4 h-8 w-8 cursor-pointer" onClick={onClose} />
            <Link color="foreground" href="/">
              <ProjectIcon />
              <p className="ml-5 text-large font-bold text-inherit">Profile</p>
            </Link>
          </ModalHeader>

          <Divider />

          <ModalBody>
            {navItems.map((item) => (
              <div key={item.path} className="flex w-full items-center">
                <Link
                  className={clsx("m-3 flex w-full items-center text-4xl", {
                    "text-primary": isActive(item.path),
                  })}
                  color="foreground"
                  href={item.path}
                  onPress={onClose}
                >
                  {item.icon}
                  <span className="ml-4">{item.label}</span>
                </Link>
              </div>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button color="primary" variant="ghost" onPress={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
