import { create } from "zustand";

type States = {
  name: string;
  address: {
    logradouro: string;
    numero: string;
    complemento?: string | undefined;
    bairro: string;
    localidade: string;
    uf: string;
  };
};
type Actions = {
  setName: (name: States["name"]) => void;
  setAddress: (address: States["address"]) => void;
};

const inicialStates: States = {
  name: "",
  address: {
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
  ...inicialStates,
  setName: (name) => set((state) => ({ ...state, name })),
  setAddress: (address) => set((state) => ({ ...state, address })),
}));
