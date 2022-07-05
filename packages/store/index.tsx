import create from 'zustand';

export type Music = {
  title: string;
  image: string;
};

export interface StoreInterface {
  musics: Music[];
  addMusic: (music: Music) => void;
}

export const useStore = create<StoreInterface>((set) => ({
  musics: [],
  addMusic: (music) => set((state) => ({ musics: [...state.musics, music] })),
}));
