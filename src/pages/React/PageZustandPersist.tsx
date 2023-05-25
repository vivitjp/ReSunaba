import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandPersistSession } from "../../features/React/zustandMiddleware/UseZustandPersistSession"
import { UseZustandPersistJsonLocalStorage } from "../../features/React/zustandMiddleware/UseZustandPersistJsonLocalStorage"

const codes: (() => UseReturnType)[] = [
  UseZustandPersistSession,
  UseZustandPersistJsonLocalStorage,
]

export const PageZustandPersist = () => {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
