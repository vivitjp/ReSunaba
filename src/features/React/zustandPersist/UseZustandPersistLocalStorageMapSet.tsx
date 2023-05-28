import { shallow } from "zustand/shallow"

import { Column, Row } from "../../../common/styleDiv"
import { Input } from "../../../common/styleInput"
import { UseReturnType } from "../../../component/type/type"
import { usePersistLocalStorageStore } from "../../../store/usePersistLocalStorageStore"
import { useRef } from "react"

export function UseZustandPersistLocalStorageMapSet(): UseReturnType {
  return {
    title: `Zustand: Persist(Json for Local Storage, Map & Set)`,
    code,
    codeFold: true,
    options: [],
    jsx: <ZustandObject />,
    codeKeyType: "JSTS",
  }
}

const ZustandObject = () => {
  return (
    <Column gap="10px">
      <NameLocalStorage />
    </Column>
  )
}

const NameLocalStorage = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistLocalStorageStore(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleClickButton = () => {
    Person.setName(nameRef.current?.value ?? "")
  }

  return <Row padding="5px" alignItems="center" gap="10px"></Row>
}

const code = ``
