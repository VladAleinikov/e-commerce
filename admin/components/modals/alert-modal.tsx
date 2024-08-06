"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const AlertModal = ({
  isOpen,
  isLoading,
  onClose,
  onConfirm,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Вы уверены?"
      description="Это действие нельзя отменить."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={isLoading} variant="outline" onClick={onClose}>
          Отменить
        </Button>
        <Button disabled={isLoading} variant="destructive" onClick={onConfirm}>
          Продолжить
        </Button>
      </div>
    </Modal>
  );
};
