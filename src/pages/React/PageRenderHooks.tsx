import { Column } from "~/common"
import { UseReturnType } from "~/component"
import { FeaturePresenter } from "~/featureCommon"
import {
  useRenderHooks1AllInOne,
  useRenderHooks2Cascaded,
  useRenderHooksUseInput,
} from "~/features"

const codes: (() => UseReturnType)[] = [
  useRenderHooksUseInput,
  useRenderHooks1AllInOne,
  useRenderHooks2Cascaded,
]

export const PageRenderHooks = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
