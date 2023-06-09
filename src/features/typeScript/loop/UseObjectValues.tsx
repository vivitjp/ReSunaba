import { useCallback } from "react"
import { UseReturnType } from "../../../component/type/type"
import { Column, Row } from "../../../common/styleDiv"
import { Table } from "../../../component/Table"
import { Data, data } from "./baseData"

export function UseObjectValues(): UseReturnType {
  const title = `TypeScript: Object.values()`
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
const code = `type GetValues<T> = T extends { [K in keyof T]: infer U } ? U : never
type Values = GetValues<Data>
 
const values = (Object.values(data) as Values[]).map((item) => item)`

type GetValues<T> = T extends { [K in keyof T]: infer U } ? U : never
type Values = GetValues<Data>

const ParentCompo = () => {
  const values = (Object.values(data) as Values[]).map((item) => item)

  const displayDataArray = useCallback((item: Values) => {
    return <>{item}</>
  }, [])

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="fit-content" gap="10px" padding="10px">
        <Row width="400px" justifyContent="space-between" alignItems="center">
          <Table<Values> data={values} callback={displayDataArray} />
        </Row>
      </Column>
    </Row>
  )
}
