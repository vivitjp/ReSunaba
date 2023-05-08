import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandCascaded } from "../../features/React/zustand/UseZustandCascaded"
import { UseZustandObject } from "../../features/React/zustand/UseZustandObject"
import { UseZustandOneCompo } from "../../features/React/zustand/UseZustandOneCompo"

const codes: (() => UseReturnType)[] = [
  UseZustandOneCompo,
  UseZustandCascaded,
  UseZustandObject,
]

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
