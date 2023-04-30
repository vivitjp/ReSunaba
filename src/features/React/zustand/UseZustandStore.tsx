import { UseReturnType } from "~/component"

export function UseZustandStore(): UseReturnType {
  const title = `zustand store`

  return {
    title,
    code,
    codeKeyType: "JSTS",
  }
}

const code = `export interface CountState {
  count: number
  countUp: () => void
  resetCount: (init: number) => void
}

export const useCount = create<CountState>()((set) => ({
  count: 1,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  resetCount: (init = 1) => set(() => ({ count: init })),
}))`
