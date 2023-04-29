import { Column, Div, Row } from "~/common"
import { UseReturnType } from "~/component"
import { CodeKeyType } from "~/library"
import { UseCustomFetch, ProgrammingLanguage } from "~/features"
import { useState } from "react"

export function UseFetch1Normal(): UseReturnType {
  const title = `CustomHooks`
  const subTitle = ``

  const jsx = <CustomFetch />
  const codeKeyType: CodeKeyType = "JSTS"
  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: codeKeyType,
  }
}

const CustomFetch = () => {
  return (
    <Column padding="10px">
      <MainComponent />
    </Column>
  )
}

const code = ``

const MainComponent = () => {
  const [count, setCount] = useState(0)
  const { data, getCount } = UseCustomFetch()

  const handleCount = () => {
    setCount(getCount())
  }

  return (
    <Row width="100%" padding="10px" justifyContent="space-between">
      <Table data={data} />
      <Row
        width="200px"
        border="1px solid #aaa"
        padding="10px"
        gap="10px"
        alignItems="center"
      >
        <button onClick={handleCount}>カウント</button>
        <Div fontSize="24px">{count}</Div>
      </Row>
    </Row>
  )
}

const Table = ({ data }: { data: ProgrammingLanguage[] }) => {
  console.log("UseFetch1Normal: Table", data !== undefined)

  return (
    <>
      {!!data?.length && (
        <Column width="300px" border="1px solid #aaa" padding="10px">
          {data.map((item, index) => (
            <Row key={index} borderBottom="1px solid #aaa">
              {item.name} : {item.difficulty}
            </Row>
          ))}
        </Column>
      )}
    </>
  )
}
