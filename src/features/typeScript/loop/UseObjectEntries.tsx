import { useCallback } from "react"
import { UseReturnType } from "../../../component/type/type"
import { Column, Row } from "../../../common/styleDiv"
import { Table } from "../../../component/Table"
import { Data, data } from "./baseData"

export function UseObjectEntries(): UseReturnType {
  return {
    title: `TypeScript: Object.entries()`,
    subTitle: "",
    code,
    options: [],
    jsx: <ParentCompo />,
    codeKeyType: "JSTS",
  }
}

type GetValues<T> = T extends { [K in keyof T]: infer U } ? U : never
type Values = GetValues<Data>
type Entries = [keyof Data, Values]

const ParentCompo = () => {
  const entries = (Object.entries(data) as Entries[]).map(
    (item): Entries => ({
      ...item,
    })
  )

  const displayDataArray = useCallback((item: Entries) => {
    return (
      <>
        {item[0]} : {item[1]}
      </>
    )
  }, [])

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="fit-content" gap="10px" padding="10px">
        <Row width="400px" justifyContent="space-between" alignItems="center">
          <Table<Entries> data={entries} callback={displayDataArray} />
        </Row>
      </Column>
    </Row>
  )
}

const code = `type GetValues<T> = T extends { [K in keyof T]: infer U } ? U : never
type Values = GetValues<Data>
type Entries = [keyof Data, Values]

const entries = (Object.entries(data) as Entries[]).map((item) => ({
  ...item,
}))
`
