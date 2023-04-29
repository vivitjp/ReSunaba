import { useState } from "react"
import { UseReturnType } from "~/component"
import { CodeKeyType } from "~/library"
import styled from "styled-components"
import { ContainerHidden } from "./ContainerHide"

export function useIntersectionObserverHideFeature(): UseReturnType {
  const title = `Intersection Observer`
  const subTitle = ""

  const code = ``

  const [isOpened, setIsOpened] = useState(false)
  const intersectCallback = (status: "Shown" | "Hidden") => {
    console.log(status === "Hidden")
    setIsOpened(status === "Hidden")
  }
  //  const ContainerHidden = useIObserver({ onIntersect: intersectCallback })

  const jsx = (
    <SectionWrapper>
      <Section>
        <ContainerHidden onIntersect={intersectCallback}>
          {/* <ContainerHidden> */}
          <Div>Hello World</Div>
        </ContainerHidden>
      </Section>
      <Section>
        <Div>Some Contents</Div>
      </Section>
      <FunctionArea isOpened={isOpened}>
        <Button>A</Button>
        <Button>B</Button>
      </FunctionArea>
    </SectionWrapper>
  )

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

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-height: 200px;
  border: 1px solid #aaa;
  overflow-y: scroll;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-height: 500px;
  border: 1px solid #aaa;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 200px;
`

const FunctionArea = styled.section<{
  isOpened?: boolean
}>`
  position: fixed;
  right: 0;
  bottom: 0;
  display: "flex";
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 50px;
  border: 1px solid #aaa;
  background-color: #fff;
  transition: opacity 1s ease-in-out;
  opacity: ${({ isOpened }) => (!isOpened ? "0" : "1")};
  transition: all 0.2s;
`

const Button = styled.button`
  width: 200px;
  height: 25px;
  padding: 3px 10px;
  border: 1px solid #aaa;
`
