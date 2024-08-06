"use client";

import { useCoverImage } from "@/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "../single-image-dropzone";

export const UploadImageModal = () => {
  const { isOpen, onClose: onCloseModal, onChange: onChangeImg } = useCoverImage();
  const { edgestore } = useEdgeStore();

  const [file, setFile] = useState<File>();
  const [isSubmiting, setIsSubmiting] = useState(false);


  const onClose = () => {
    setFile(undefined);
    setIsSubmiting(false);
    onCloseModal();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmiting(true);
      setFile(file);

      let res = await edgestore.publicFiles.upload({
        file,
      });

      onChangeImg(res.url);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Изображение</h2>
          <SingleImageDropzone
            className="w-full outline-none"
            disabled={isSubmiting}
            value={file}
            onChange={onChange}
            height={200}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
