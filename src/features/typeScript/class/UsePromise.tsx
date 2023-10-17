import { UseReturnType } from "../../../component/type/type"
import { Column, Row } from "../../../common/styleDiv"
import { useEffect, useState } from "react"

type Props = { resolved?: string; rejected?: string; ms?: number; TF?: boolean }
const sleepResRej = async ({
  resolved,
  rejected,
  ms = 1000,
  TF = true,
}: Props) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(
      () =>
        TF ? resolve(`${resolved ?? "OK"}`) : reject(`${rejected ?? "NG"}`),
      ms
    )
  }).catch((e) => {
    console.log("e.message", e.message)
    return "NA"
  })
}

export function UsePromise(): UseReturnType {
  return {
    title: `Promise.All()`,
    subTitle: "",
    code,
    options: [],
    jsx: <Component />,
    codeKeyType: "JSTS",
  }
}

const Component = () => {
  const [result, setResult] = useState<string[]>()

  useEffect(() => {
    ;(async () => {
      const promise = await Promise.all([
        sleepResRej({ ms: 1000, TF: true, resolved: "1" }),
        sleepResRej({ ms: 500, TF: false, resolved: "2" }),
        sleepResRej({ ms: 200, TF: true, resolved: "3" }),
      ])
      setResult(promise)
    })()
  }, [])

  console.log(result)

  return (
    <Column gap="10px">
      <Row padding="10px">{JSON.stringify(result)}</Row>
      <Row padding="10px"></Row>
    </Column>
  )
}

const code = `
`
