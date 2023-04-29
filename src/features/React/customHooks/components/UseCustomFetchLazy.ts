import { useRef, useState } from "react"
import {
  ProgrammingLanguage,
  programmingLanguage,
} from "~/features/mock/programmingLanguage"

type UseCustomFetch = {
  data: ProgrammingLanguage[]
  getData: () => void
  getCount: () => number
}

export const UseCustomFetchLazy = (): UseCustomFetch => {
  const refCounter = useRef<number>(0)
  const [data, setData] = useState<ProgrammingLanguage[]>([])

  const getData = () => {
    let timeoutId: NodeJS.Timeout | null = null
    timeoutId = setTimeout(() => {
      console.log("useCustomFetch")
      refCounter.current += 1
      setData(programmingLanguage)
    }, 1000)
  }

  const getCount = () => {
    return refCounter.current
  }

  return { data, getData, getCount }
}
