import { StateCreator, create } from "zustand"

export interface CountState {
  count: number
  countUp: () => void
  resetCount: (init: number) => void
}

export const useCount = create<CountState>()((set) => ({
  count: 1,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  resetCount: (init = 1) => set(() => ({ count: init })),
}))

// const count = useCount((state) => state.count)
// const addCount = useCount((state) => state.addCount)
// const resetCount = useCount((state) => state.resetCount)

//-----------------------------------------
// Slice Pattern (費用対効果低し)
//-----------------------------------------
export interface NameSlice {
  name: String
  setName: (name: string) => void
}
export interface AddressSlice {
  address: String
  setAddress: (address: string) => void
}

const createNameSlice: StateCreator<
  NameSlice & AddressSlice,
  [],
  [],
  NameSlice
> = (set) => ({
  name: "",
  setName: (name) => set({ name }),
})

const createAddressSlice: StateCreator<
  AddressSlice & AddressSlice,
  [],
  [],
  AddressSlice
> = (set) => ({
  address: "",
  setAddress: (address) => set({ address }),
})

export const useBoundStore = create<NameSlice & AddressSlice>()((...args) => ({
  ...createNameSlice(...args),
  ...createAddressSlice(...args),
}))
