import { Column } from "~/common"
import { UseReturnType } from "~/component"
import { FeaturePresenter } from "~/featureCommon"
import { UseZustandOneCompo, UseZustandCascaded } from "~/features"

const codes: (() => UseReturnType)[] = [UseZustandOneCompo, UseZustandCascaded]

export const PageZustand = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
