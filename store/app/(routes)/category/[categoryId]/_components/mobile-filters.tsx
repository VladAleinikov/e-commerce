"use client"

import { Button } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import { IColor, ISize } from "@/types"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import { Filter } from "./filter"

interface MobileFiltersProps{
  sizes: ISize[],
  colors: IColor[]
}

export const MobileFilters = ({ sizes, colors}:MobileFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Фильтр
        <Plus size={20} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex w-full h-full max-w-xs flex-col overflow-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15} onClick={onClose} />} />
              </div>
              <div className="p-4">
                <Filter valueKey="sizeId" name="Размеры" data={sizes} />
                <Filter valueKey="colorId" name="Цвета" data={colors} />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
