import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandStore } from "../../features/React/zustand/UseZustandStore"
import { UseZustandStoreSlice } from "../../features/React/zustand/UseZustandStoreSlice"

const codes: (() => UseReturnType)[] = [UseZustandStore, UseZustandStoreSlice]

export const PageZustandStore = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
