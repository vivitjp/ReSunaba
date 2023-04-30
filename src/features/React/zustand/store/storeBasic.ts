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
  setName: (name) => set((state) => ({ name })),
  address: "",
  setAddress: (address) => set((state) => ({ address })),
}))

// const count = useCount((state) => state.count)
// const countUp = useCount((state) => state.countUp)
// const name = useCount((state) => state.name)
// const setName = useCount((state) => state.setName)

export const useCount2 = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set((state) => ({ name })),
  address: "",
  setAddress: (address) => set((state) => ({ address })),
}))

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
