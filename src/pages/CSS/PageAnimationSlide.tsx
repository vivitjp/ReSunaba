import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { useAnimationSlide } from "../../features/css/animation/useSlide"

const codes: (() => UseReturnType)[] = [useAnimationSlide]

export const PageAnimationSlide = () => {
  return (
    <Column padding={6} gap={40}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
