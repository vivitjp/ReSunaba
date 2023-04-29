import { FC, ReactNode, useEffect, useRef } from "react"
import styled from "styled-components"

/*
IntersectionObserverEntry
  boundingClientRect: 対象要素の外接矩形
  intersectionRatio: intersectionRect と boundingClientRect の比率
  intersectionRect: 対象の表示領域を表す
  isIntersecting: 論理値で、対象要素が、交差を監視しているルートを超えたら true
  rootBounds: 交差を監視しているルート
  target: ルートとの交差が変化する Element
  time: IntersectionObserver の時刻の起点を基準にして、交差が記録された時刻
 */

type Props = {
  children: ReactNode
  index: number
  onIntersect?: (index: number) => void
}

export const Container: FC<Props> = ({ index, onIntersect, children }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        //配列:IntersectionObserverEntry
        console.log(entries.length)

        if (entries?.[0].isIntersecting) {
          if (onIntersect) onIntersect(index)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current === null) return

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
