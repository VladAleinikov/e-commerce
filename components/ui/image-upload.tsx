"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { useCoverImage } from "@/hooks/use-cover-image";

interface ImageUploadProps {
  isDisabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export const ImageUpload = ({
  isDisabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { onOpen: onOpenCoverImage, setOnChange } = useCoverImage();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onClick = () => {
    setOnChange(onChange);
    onOpenCoverImage();
  }

  return (
    <div>
      <div className="md-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image className="object-cover" alt="Image" src={url} fill/>
          </div>
        ))}
      </div>
      <Button
        type="button"
        disabled={isDisabled}
        variant="secondary"
        onClick={onClick}
      >
        <ImagePlus className="w-4 h-4 mr-2" />
        Загрузить изображение
      </Button>
    </div>
  );
};
