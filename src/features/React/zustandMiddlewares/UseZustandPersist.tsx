import { shallow } from "zustand/shallow"

import { Column, Row } from "../../../common/styleDiv"
import { Input } from "../../../common/styleInput"
import { UseReturnType } from "../../../component/type/type"
import { usePersistStore } from "../../../store/usePersistJsonLocalStorageStore"
import { useRef } from "react"

export function UseZustandPersist(): UseReturnType {
  return {
    title: `Zustand: Persist(Local Storage)`,
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
      <Name />
    </Column>
  )
}

const Name = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistStore(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    Person.setName(nameRef.current?.value ?? "")
  }

  return (
    <Row padding="5px" alignItems="center" gap="10px">
      <Row fontSize="16px" padding="5px" width={"100px"}>
        Name:
      </Row>
      <Input ref={nameRef} width={"160px"} />
      <button onClick={handleClickButton} value="Save">
        Submit
      </button>
      <Row fontSize="16px" padding="5px" width={"300px"}>
        {Person.name}
      </Row>
    </Row>
  )
}

const code = ``
