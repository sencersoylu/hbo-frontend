import { create } from "zustand";

interface sessionModal {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export const useSessionModalStore = create<sessionModal>((set) => ({
  isOpen: false,
  setOpen: (value: boolean) => set(() => ({ isOpen: value })),
}));
