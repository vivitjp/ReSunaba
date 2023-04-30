import { Button, Column, Input, Row } from "~/common"
import { UseReturnType } from "~/component"
import { useCount2 } from "~/features"

export function UseZustandCascaded(): UseReturnType {
  const title = `コンポーネント分散処理`
  const subTitle = ``

  const jsx = <ZustandCascaded />
  return {
    title,
    subTitle,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const ZustandCascaded = () => {
  return (
    <Column gap="10px">
      <Row fontSize="18px" padding="5px" gap="20px">
        <CountUp />
        <Count />
      </Row>
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px" width={"100px"}>
          Name:
        </Row>
        <InputName />
        <Name />
      </Row>
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px" width={"100px"}>
          Address:
        </Row>
        <InputAddress />
      </Row>
    </Column>
  )
}

const Count = () => {
  const count = useCount2((state) => state.count)
  return (
    <Row fontSize="24px" padding="5px">
      {count}
    </Row>
  )
}

const CountUp = () => {
  const countUp = useCount2((state) => state.countUp)
  return <Button onClick={countUp}>Count Up</Button>
}

const InputName = () => {
  const name = useCount2((state) => state.name)
  const setName = useCount2((state) => state.setName)

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  return <Input onChange={handleName} value={name} width={"160px"} />
}

const Name = () => {
  const name = useCount2((state) => state.name)

  return (
    <Row fontSize="16px" padding="5px" width={"300px"}>
      {name.toUpperCase()}
    </Row>
  )
}

const InputAddress = () => {
  const address = useCount2((state) => state.address)
  const setAddress = useCount2((state) => state.setAddress)

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }

  return (
    <>
      <Input onChange={handleAddress} value={address} width={"160px"} />
      <Row fontSize="16px" padding="5px" width={"300px"}>
        {address.toUpperCase()}
      </Row>
    </>
  )
}

const code = `const ZustandCascaded = () => {
  return (
    <>
      <>
        <CountUp />
        <Count />
      </>
      <>
        Name: <InputName />
        <Name />
      </>
      <>
        Address: <InputAddress />
      </>
    </>
  )
}
 
const Count = () => {
  const count = useCount2((state) => state.count)
 
  return <>{count} <>
}
 
const CountUp = () => {
  const countUp = useCount2((state) => state.countUp)
 
  return <Button onClick={countUp}>Count Up</Button>
}
 
const InputName = () => {
  const name = useCount2((state) => state.name)
  const setName = useCount2((state) => state.setName)
  const handleName = (e) => { setName(e.currentTarget.value) }
 
  return <Input onChange={handleName} value={name} width={"160px"} />
}
 
const Name = () => {
  const name = useCount2((state) => state.name)
 
  return <> {name.toUpperCase()} </>
  )
}
 
const InputAddress = () => {
  const address = useCount2((state) => state.address)
  const setAddress = useCount2((state) => state.setAddress)
 
  const handleAddress = (e) => { setAddress(e.currentTarget.value) }
 
  return (
    <>
      <Input onChange={handleAddress} value={address} width={"160px"} />
      <> {address.toUpperCase()} </>
    </>
  )
}`
