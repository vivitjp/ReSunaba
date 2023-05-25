import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type PersistPerson = {
  name: string
  age: number
  active: boolean
  setName: (name: string) => void
  setAge: (age: number) => void
  setActive: (flag: boolean) => void
}

export const usePersistJsonLocalStorageStore = create<PersistPerson>()(
  persist(
    (set) => ({
      name: "John",
      age: 35,
      active: false,
      setName: (name) => set({ name }),
      setAge: (age) => set({ age }),
      setActive: (flag) => set({ active: flag }),
    }),
    {
      name: "persist-json-localStorage-person", //ユニークな判別名
      storage: createJSONStorage(() => localStorage),
    }
    // partialize: (state) =>
    // Object.fromEntries(
    //   Object.entries(state).filter(([key]) => !['foo'].includes(key))
    // ),
  )
)
