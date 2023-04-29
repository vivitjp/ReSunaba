import { Column } from "~/common"
import { UseReturnType } from "~/component"
import { FeaturePresenter } from "~/featureCommon"
import { UseFetch1Normal, UseFetch2Lazy } from "~/features"

const codes: (() => UseReturnType)[] = [UseFetch1Normal, UseFetch2Lazy]

export const PageCustomHooks = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
