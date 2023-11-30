import { create } from 'zustand';

import { Cabinets } from '@/types';

interface CabinetStore {
  data: Cabinets[];
  setState: (state: Partial<CabinetStore>) => void;
}

const useCabinet = create<CabinetStore>((set) => ({
  data: [],
  setState: (state) => set(state),
}));

export default useCabinet;