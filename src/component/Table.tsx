import { ReactElement } from "react"
import { Column, Row } from "../common/styleDiv"

type Table<T> = {
  data: T[] | undefined
  callback: (item: T) => ReactElement
}

export const Table = <T,>({ data, callback }: Table<T>) => {
  return (
    <>
      {!!data?.length && (
        <Column width="160px" border="1px solid #aaa" padding="10px">
          {data.map((item, index) => (
            <Row key={index}>{callback(item)}</Row>
          ))}
        </Column>
      )}
    </>
  )
}
