import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { useRenderHooksUseInput } from "../../features/React/renderHooks/useRenderHooks0"
import { useRenderHooks1AllInOne } from "../../features/React/renderHooks/useRenderHooks1AllInOne"
import { useRenderHooks2Cascaded } from "../../features/React/renderHooks/useRenderHooks2Cascaded"

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
