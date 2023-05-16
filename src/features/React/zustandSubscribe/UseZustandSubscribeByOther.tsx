import { UseReturnType } from "../../../component/type/type"
import { Column, Row } from "../../../common/styleDiv"
import { Input } from "../../../common/styleInput"
import { useSubscribeStore } from "./UseZustandSubscribe"

// ■ 取得
const nameOutside = useSubscribeStore.getState().name

// 以下のような通常の取得は不可(error)
//const nameOutside2 = useSubscribeStore((state) => state.name)

// ■ 更新時イベント(個別) (middleware.mjs)
const unsubscribe = useSubscribeStore.subscribe(
  (state) => state.name, //CB
  console.log //Jeff Karen(元ファイルでの変化が先)
)

// ■ 更新+イベント(個別)
useSubscribeStore.setState({ name: "Jeff" })

// ■ Unsubscribe listeners
unsubscribe()

export function UseZustandSubscribeByOther(): UseReturnType {
  return {
    title: `zustand subscribe(他file store)`,
    code,
    codeFold: true,
    options: [],
    jsx: <ZustandNonReactive />,
    codeKeyType: "JSTS",
  }
}

const code = `// ■ ローカル外で生成された Store にアクセス
//Store create 時に subscribeWithSelector で巻かれている
 
//■ 取得
const nameOutside = useSubscribeStore.getState().name
 
// 以下のような通常の取得は不可(error) 以下はコンポーネント内での取得方法
//const nameOutside2 = useSubscribeStore((state) => state.name)

// ■ 更新時イベント(個別) (middleware.mjs)
const unsubscribe = useSubscribeStore.subscribe(
  (state) => state.name,   //名前のみ
  console.log              //新旧: Karen John
)
 
// ■ 更新+イベント => subscribe はこの更新に反応する
useSubscribeStore.setState({ name: "Karen" })
 
//コンポーネント
const ComponentInside = () => {
  //通常のStoreHooksとしても使用可能(注意：この場合はリアクティブ!!)
  const nameInside = useSubscribeStore((state) => state.name)
 
  return (
    <Column gap="10px" border="1px solid #aaa">
      <Row fontSize="18px" padding="5px" gap="20px">
        <Row fontSize="24px" padding="5px">
          {nameInside} {/* この値はリアクティブ */}
        </Row>
      </Row>
    </Column>
  )
}
 
const ComponentOutside = () => {
  const handleName = () => {
    useSubscribeStore.setState({ name: e.currentTarget.value })
  }
  // nameOutside を変更しても、出力は変わらず
  return (
    <Column gap="10px" border="1px solid #aaa">
      <Row fontSize="18px" padding="5px" gap="20px">
        <Input onChange={handleName} value={nameOutside} width={"160px"} />
        <Row fontSize="24px" padding="5px">
          {nameOutside} {/* この値は不変(NonReactive)  */}
        </Row>
      </Row>
    </Column>
  )
}`

const ZustandNonReactive = () => {
  return (
    <Row gap="10px">
      <ComponentInside />
      <ComponentOutside />
    </Row>
  )
}

const ComponentInside = () => {
  //通常のStoreHooksとしても使用可能(注意：この場合はリアクティブ!!)
  const nameInside = useSubscribeStore((state) => state.name)

  return (
    <Column gap="10px" border="1px solid #aaa">
      <Row fontSize="18px" padding="5px" gap="20px">
        <Row fontSize="24px" padding="5px">
          {nameInside} {/* この値はリアクティブ */}
        </Row>
      </Row>
    </Column>
  )
}

const ComponentOutside = () => {
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //値の上書きは可能
    useSubscribeStore.setState({ name: e.currentTarget.value })
  }
  // nameOutside を変更しても、出力は変わらず
  return (
    <Column gap="10px" border="1px solid #aaa">
      <Row fontSize="18px" padding="5px" gap="20px">
        <Input onChange={handleName} value={nameOutside} width={"160px"} />
        <Row fontSize="24px" padding="5px">
          {nameOutside} {/* この値は不変(NonReactive)  */}
        </Row>
      </Row>
    </Column>
  )
}
