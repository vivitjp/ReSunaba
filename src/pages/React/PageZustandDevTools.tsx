import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandDevTools } from "../../features/React/zustandDevTools/UseZustandDevTools"

const codes: (() => UseReturnType)[] = [UseZustandDevTools]

export const PageZustandDevTools = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
