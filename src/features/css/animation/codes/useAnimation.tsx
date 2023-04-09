import { useId, useMemo } from "react"
import { useCheck, useRange, useSelect } from "~/library"

export function useAnimation() {
  const symbolId = useId()
  const title = `Animation`
  const subTitle = ""

  // const AspectRatio = useSelect<string>({
  //   title: "方向",
  //   subTitle: "orient",
  //   initValue: "xMinYMin meet",
  //   values: ["none", "xMinYMin meet", "xMinYMin slice"],
  // })

  // const SizeWidth = useRange({
  //   title: "コピー先サイズ(幅)",
  //   subTitle: "width",
  //   initValue: 100,
  //   range: [50, 600],
  //   step: 10,
  // })

  // const SizeHeight = useRange({
  //   title: "コピー先サイズ(高)",
  //   subTitle: "height",
  //   initValue: 100,
  //   range: [50, 360],
  //   step: 10,
  // })

  // const CheckWHSync = useCheck({
  //   title: "WidthにHeightをシンクロ",
  //   initValue: true,
  // })

  const Color = useSelect<string>({
    title: "塗り色",
    subTitle: "color",
    initValue: "red",
    values: ["green", "red", "blue", "orange"],
  })

  const code = ``

  const CSS = useMemo(
    () => ({
      color: Color.value,
    }),
    [Color.value]
  )

  const jsx = <div style={CSS}>Hello</div>

  return {
    title,
    subTitle,
    code,
    options: [Color],
    jsx,
  }
}
