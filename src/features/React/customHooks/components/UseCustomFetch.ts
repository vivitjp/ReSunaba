import { useRef, useState } from "react"
import {
  ProgrammingLanguage,
  programmingLanguage,
} from "~/features/mock/programmingLanguage"

type UseCustomFetch = {
  data: ProgrammingLanguage[]
  getCount: () => number
}

export const UseCustomFetch = (): UseCustomFetch => {
  const refCounter = useRef<number>(0)
  const [data, setData] = useState<ProgrammingLanguage[]>([])

  let timeoutId: NodeJS.Timeout | null = null
  timeoutId = setTimeout(() => {
    console.log("useCustomFetch")
    refCounter.current += 1
    setData(programmingLanguage)
  }, 1000)

  const getCount = () => {
    return refCounter.current
  }

  return { data, getCount }
}
