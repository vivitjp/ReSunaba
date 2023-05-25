import { shallow } from "zustand/shallow"

import { Column, Row } from "../../../common/styleDiv"
import { Input } from "../../../common/styleInput"
import { UseReturnType } from "../../../component/type/type"
import { usePersistJsonSession } from "../../../store/usePersistJsonSession"
import { useRef } from "react"

export function UseZustandPersistSession(): UseReturnType {
  return {
    title: `Zustand: Persist(Session)`,
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
      <NameSession />
    </Column>
  )
}

const NameSession = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistJsonSession(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleClickButton = () => {
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

const code = `const usePersistJsonSession = create<PersistPerson>()(
  persist(
    (set) => ({
      name: "John",
      age: 35,
      active: false,
      setName: (name) => set({ name }),
      setAge: (age) => set({ age }),
      setActive: (flag) => set({ active: flag }),
    }),
    {
      name: "persist-session-person",   //ユニークな判別名
      getStorage: () => sessionStorage, //<-- getStorage:Deprecated
    }
  )
)

const NameSession = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistJsonSession(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleClickButton = () => {
    Person.setName(nameRef.current?.value ?? "")
  }

  return (
    <Row>
      <Row> Name: </Row>
      <Input ref={nameRef} width={"160px"} />
      <button onClick={handleClickButton} value="Save"> Submit </button>
      <Row> {Person.name} </Row>
    </Row>
  )
}`
