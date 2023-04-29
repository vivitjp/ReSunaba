import { FC, ReactNode, useEffect, useRef } from "react"
import styled from "styled-components"

type Props = {
  children: ReactNode
  onIntersect: (status: "Shown" | "Hidden") => void
}

export const ContainerHidden: FC<Props> = ({ onIntersect, children }) => {
  const ref = useRef<HTMLDivElement>(null!)

  console.log("ContainerHidden")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect("Shown")
        if (!entry.isIntersecting) onIntersect("Hidden")
      },
      { threshold: 0.2 }
    )
    observer.observe(ref.current)
    const { current } = ref
    return () => {
      observer.unobserve(current)
    }
  }, [])

  return <Section ref={ref}>{children}</Section>
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  //min-height: 400px;
  border: 1px solid #aaa;
`
