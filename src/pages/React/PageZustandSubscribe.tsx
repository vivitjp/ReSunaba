import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandSubscribe } from "../../features/React/zustandSubscribe/UseZustandSubscribe"
import { UseZustandSubscribeByOther } from "../../features/React/zustandSubscribe/UseZustandSubscribeByOther"

const codes: (() => UseReturnType)[] = [
  UseZustandSubscribe,
  UseZustandSubscribeByOther,
]

export const PageZustandSubscribe = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
