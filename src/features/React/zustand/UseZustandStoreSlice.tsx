import { UseReturnType } from "~/component"

export function UseZustandStoreSlice(): UseReturnType {
  const title = `zustand store: Slice パターン`

  return {
    title,
    code,
    codeKeyType: "JSTS",
  }
}

const code = `export interface NameSlice {
  name: String
  setName: (name: string) => void
}
 
export interface AddressSlice {
  address: String
  setAddress: (address: string) => void
}
 
const createNameSlice: StateCreator<
  NameSlice & AddressSlice, [], [], NameSlice <--この型が煩雑
> = (set) => ({
  name: "",
  setName: (name) => set({ name }),
})
 
const createAddressSlice: StateCreator<
  AddressSlice & AddressSlice, [], [], AddressSlice <--この型が煩雑
> = (set) => ({
  address: "",
  setAddress: (address) => set({ address }),
})
 
export const useBoundStore = create<NameSlice & AddressSlice>()((...args) => ({
  ...createNameSlice(...args),
  ...createAddressSlice(...args),
}))`
