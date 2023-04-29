import { useRef, useState } from "react"
import { Column } from "~/common"
import { UseReturnType } from "~/component"
import { CodeKeyType } from "~/library"
import { Container } from "./Container"
import styled from "styled-components"

export function useIntersectionObserverFeature(): UseReturnType {
  const title = `Intersection Observer`
  const subTitle = ""

  const code = ``

  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const intersectCallback = (index: number) => {
    setProgress(index)
  }
  const items = [1, 2, 3, 4, 5]

  const jsx = (
    <Column width="100%" borderGray>
      <h1>{progress} まで読んだ</h1>
      <Section>
        {items.map((i) => (
          <Container key={i} index={i} onIntersect={intersectCallback}>
            <div ref={ref} data-testid={`Trigger-${i}`}>
              {[...Array(10)].fill("").map((_, k) => (
                <div key={k}>{k}</div>
              ))}
            </div>
          </Container>
        ))}
      </Section>
    </Column>
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-height: 300px;
  border: 1px solid #aaa;
  overflow-y: scroll;
`
