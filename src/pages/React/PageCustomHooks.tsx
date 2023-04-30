import { Column } from "~/common"
import { UseReturnType } from "~/component"
import { FeaturePresenter } from "~/featureCommon"
import { UseTable1Query, UseTable2QueryLazy } from "~/features"

const codes: (() => UseReturnType)[] = [UseTable1Query, UseTable2QueryLazy]

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
