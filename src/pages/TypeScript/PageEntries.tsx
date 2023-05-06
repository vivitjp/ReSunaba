import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseBaseData } from "../../features/typeScript/loop/UseBaseData"
import { UseObjectEntries } from "../../features/typeScript/loop/UseObjectEntries"
import { UseObjectKeys } from "../../features/typeScript/loop/UseObjectKeys"
import { UseObjectValues } from "../../features/typeScript/loop/UseObjectValues"

const codes: (() => UseReturnType)[] = [
  UseBaseData,
  UseObjectKeys,
  UseObjectValues,
  UseObjectEntries,
]

export const PageEntries = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
