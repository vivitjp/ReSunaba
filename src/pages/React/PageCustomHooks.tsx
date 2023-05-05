import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseTable1Query } from "../../features/React/customHooks/UseTable1Query"
import { UseTable2QueryLazy } from "../../features/React/customHooks/UseTable2QueryLazy"

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
