import { Column } from "../../common/styleDiv"
import { UseReturnType } from "../../component/type/type"
import { FeaturePresenter } from "../../featureCommon"
import { UseZustandPersistSession } from "../../features/React/zustandPersist/UseZustandPersistSession"
import { UseZustandPersistLocalStorage } from "../../features/React/zustandPersist/UseZustandPersistLocalStorage"
import { UseZustandPersistIndexDB } from "../../features/React/zustandPersist/UseZustandPersistIndexDB"
import { UseZustandPersistLocalStoragePartialize } from "../../features/React/zustandPersist/UseZustandPersistLocalStoragePartialize"

const codes: (() => UseReturnType)[] = [
  UseZustandPersistSession,
  UseZustandPersistLocalStorage,
  UseZustandPersistIndexDB,
  UseZustandPersistLocalStoragePartialize,
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
