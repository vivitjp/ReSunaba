import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { useIntersectionObserverFeature } from "../../features/webAPI/IntersectionObserver/useIntersectionObserverFeature"

const codes: (() => UseReturnType)[] = [useIntersectionObserverFeature]

export const PageIntersectionObserver = () => {
  return (
    <Column padding={6} gap={40}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
