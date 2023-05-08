import { StateCreator, create } from "zustand"

export interface CountState {
  count: number
  countUp: () => void
  name: string
  setName: (name: string) => void
  address: string
  setAddress: (address: string) => void
}

export const useCount = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

export const useCount2 = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

export const useCount3 = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

//-----------------------------------------
// Slice Pattern
//-----------------------------------------
export interface NameSlice {
  name: String
  setName: (name: string) => void
}
const createNameSlice: StateCreator<NameSlice> = (set) => ({
  name: "",
  setName: (name) => set({ name }),
})

export interface AddressSlice {
  address: String
  setAddress: (address: string) => void
}
const createAddressSlice: StateCreator<AddressSlice> = (set) => ({
  address: "",
  setAddress: (address) => set({ address }),
})

export const useBoundStore = create<NameSlice & AddressSlice>()((...args) => ({
  ...createNameSlice(...args),
  ...createAddressSlice(...args),
}))
