import { ReactElement, useCallback, useMemo, useState } from "react"
import { UseReturnType } from "../../../component/type/type"
import { Column, Div, Row } from "../../../common/styleDiv"
import { Button } from "../../../common/styleInput"
import {
  ProgrammingLanguage,
  programmingLanguage,
} from "../../mock/programmingLanguage"
import { useFetchMock } from "../components/UseFetchMock"
import { useInputForMemo } from "./components/useInputForMemo"

export function UseMemo(): UseReturnType {
  const title = `useMemo`
  const subTitle = ``

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}
const code = `const { data } = useFetchMock({ id: 1 })
 
const reData1 = useMemo(() => {
  countUndefined1++
  if (!data) return undefined
  countWithData1++
  return data.map((item) => ({ ...item }))
}, [data]) <-- 依存配列がオブジェクト
 
const reData2 = useMemo(() => {
  countUndefined2++
  if (!data) return undefined
  countWithData2++
  return data.map((item) => ({ ...item }))
}, [data?.[0].id]) <--依存配列に最下層の変数を入れても同じ`

let countUndefined1 = 0
let countWithData1 = 0
let countUndefined2 = 0
let countWithData2 = 0

const ParentCompo = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0])

  const { RenderInput, inputValue } = useInputForMemo()

  const { data } = useFetchMock<ProgrammingLanguage>({
    id: 1,
    incomingData: programmingLanguage,
  })

  const reData1 = useMemo(() => {
    countUndefined1++
    if (!data) return undefined
    countWithData1++
    return data.map((item) => ({ ...item, id: item.id * 2 }))
  }, [data])

  const reData2 = useMemo(() => {
    countUndefined2++
    if (!data) return undefined
    countWithData2++
    return data.map((item) => ({ ...item, id: item.id * 2 }))
  }, [data?.[0].id])

  const handle = () => {
    setCounters([
      countUndefined1,
      countWithData1,
      countUndefined2,
      countWithData2,
    ])
  }

  const displayCB = useCallback((item: ProgrammingLanguage) => {
    return (
      <>
        {item.id} : {item.name} : {item.difficulty}
      </>
    )
  }, [])

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column gap="10px">
        <Column width="200px">{RenderInput}</Column>
        <Column width="200px">{inputValue}</Column>
        <Column width="200px">
          <Button onClick={handle}>回数表示</Button>
        </Column>
      </Column>
      <Column width="fit-content" gap="10px" padding="10px">
        <Row width="500px" justifyContent="space-between" alignItems="center">
          <Table<ProgrammingLanguage> data={reData1} callback={displayCB} />
          <Column>
            <Div fontSize="18px">回数(Undefined): {counters[0]}</Div>
            <Div fontSize="18px">回数(Dataあり): {counters[1]}</Div>
          </Column>
        </Row>
        <Row width="500px" justifyContent="space-between" alignItems="center">
          <Table<ProgrammingLanguage> data={reData2} callback={displayCB} />
          <Column>
            <Div fontSize="18px">回数(Undefined): {counters[2]}</Div>
            <Div fontSize="18px">回数(Dataあり): {counters[3]}</Div>
          </Column>
        </Row>
      </Column>
    </Row>
  )
}

type Table<T> = {
  data: T[] | undefined
  callback: (item: T) => ReactElement
}

const Table = <T,>({ data, callback }: Table<T>) => {
  return (
    <>
      {!!data?.length && (
        <Column width="300px" border="1px solid #aaa" padding="10px">
          {data.map((item, index) => (
            <Row key={index} borderBottom="1px solid #aaa">
              {callback(item)}
            </Row>
          ))}
        </Column>
      )}
    </>
  )
}
