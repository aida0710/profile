import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  AppWindowIcon,
  AwardIcon,
  BookOpenIcon,
  ImagesIcon,
} from "lucide-react";

export function NavigationButtons() {
  return (
    <div className="mb-4">
      <div className="mb-3 flex flex-wrap justify-center gap-3">
        <Link href="/awards">
          <Button color="danger" startContent={<AwardIcon />} variant="flat">
            Awards
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            color="success"
            startContent={<AppWindowIcon />}
            variant="flat"
          >
            Projects
          </Button>
        </Link>
        <Link href="/blog">
          <Button
            color="secondary"
            startContent={<BookOpenIcon />}
            variant="flat"
          >
            Blog
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/gallery">
          <Button
            className="w-44"
            color="primary"
            startContent={<ImagesIcon />}
            variant="flat"
          >
            Gallery
          </Button>
        </Link>
      </div>
    </div>
  );
}
