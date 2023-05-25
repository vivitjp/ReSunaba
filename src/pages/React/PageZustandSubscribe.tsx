import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandSubscribe } from "../../features/React/zustandSubscribe/UseZustandSubscribe"
import { UseZustandSubscribeComponent } from "../../features/React/zustandSubscribe/UseZustandSubscribeCompo"
import { UseZustandSubscribeCompoTransient } from "../../features/React/zustandSubscribe/UseZustandSubscribeCompoTransient"

const codes: (() => UseReturnType)[] = [
  UseZustandSubscribe,
  UseZustandSubscribeComponent,
  UseZustandSubscribeCompoTransient,
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
