"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();
  return (
    <Modal
      title="Добавить магазин"
      description="Добавьте магазин чтобы управлять товарами и категориями"
      isOpen={isOpen}
      onClose={onClose}
    >
      
    </Modal>
  );
};
