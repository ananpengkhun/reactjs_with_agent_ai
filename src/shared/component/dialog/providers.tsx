import { useState } from "react";
import { create } from "zustand";

interface DialogContextType {
  open: boolean;
  isClosed: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

interface DialogContextTypeAction {
  onClose: () => void;
}

export const useDialog = create<DialogContextType>((set) => ({
    open: false,
    isClosed: false,
    openDialog: () => set({ open: true, isClosed: false }),
    closeDialog: () => set({ open: false, isClosed: true }),    
}))

export const useDialogCallback = create<DialogContextTypeAction>((set) => ({    
    onClose: () => set({ }),    
}))