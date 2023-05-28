import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandMap } from "../../features/React/zustand/UseZustandMap"
import { UseZustandSet } from "../../features/React/zustand/UseZustandSet"

const codes: (() => UseReturnType)[] = [UseZustandMap, UseZustandSet]

export const PageZustandMapSet = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
