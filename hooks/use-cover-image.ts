import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  setUrl: (url: string) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
  onChange: (value: string) => void;
  setOnChange: (onChange: (value: string) => void) => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  setUrl: (url: string) => set({ url }),
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url }),
  onChange: () =>{},
  setOnChange: (onChange) => set({onChange})
}));
