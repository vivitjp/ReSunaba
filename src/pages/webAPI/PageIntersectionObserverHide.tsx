import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { useIntersectionObserverHideFeature } from "../../features/webAPI/IntersectionObserverHidden/useIntersectionObserverHIddenFeature"

const codes: (() => UseReturnType)[] = [useIntersectionObserverHideFeature]

export const PageIntersectionObserverHide = () => {
  return (
    <Column padding={6} gap={40}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
