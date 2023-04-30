import { Column } from "~/common"
import { UseReturnType } from "~/component"
import { FeaturePresenter } from "~/featureCommon"
import { UseZustandStore, UseZustandStoreSlice } from "~/features"

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
