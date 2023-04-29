import { Column } from "~/common"
import { UseReturnType } from "~/component"
import { FeaturePresenter } from "~/featureCommon"
import { useIntersectionObserverFeature } from "~/features"

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
