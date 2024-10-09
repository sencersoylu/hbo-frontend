import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  setModal: (value: boolean) => void;
}

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  setModal: (value: boolean) => set(() => ({ isOpen: value })),
}));
