import { UseReturnType } from "../../../component/type/type"
import { Column, Row } from "../../../common/styleDiv"

export function UseTSClass(): UseReturnType {
  return {
    title: `TypeScript: Class`,
    subTitle: "",
    code,
    options: [],
    jsx: <Component />,
    codeKeyType: "JSTS",
  }
}

class Example {
  private _name: string
  public address: string

  //public zip: string 値がなく、constructorでも割り当てられていない
  public age: number = 0

  constructor(name: string, address: string) {
    this._name = name
    this.address = address
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  public matchName(key: string) {
    return key === this.name ? "true" : "false"
  }
}

class More extends Example {
  // constructor() {
  //   super("Jeff", "Nagoya") 親に値を渡す
  // }
  public matchAddress(key: string) {
    return key === this.address ? "true" : "false"
  }
}

class Further extends More {
  private _phone: string
  public zip: string = "abc"

  //親のコンストラクタを上書き
  constructor(phone: string) {
    super("", "") // <--- super 必須
    this._phone = phone
  }
  get phone(): string {
    return this._phone
  }

  set phone(phone: string) {
    this._phone = phone
  }
}

class StaticClass {
  static abc = "ABC"
}

const Component = () => {
  const example = new Example("John", "Tokyo")
  example.age = 10

  const more = new More("Smith", "Osaka") // 親のコンストラクタが呼ばれる
  more.age = 11

  const further = new Further("Karen") // 親の親のコンストラクタが呼ばれる
  further.age = 12
  further.phone = "AFBN"

  const staticAbc = StaticClass.abc
  //                            ^?

  console.log(example)
  console.log(more)
  console.log(further)
  console.log(staticAbc)

  return (
    <Column gap="10px">
      <Row padding="10px">
        {example.name} & {example.address} & {example.matchName("John")}
      </Row>
      <Row padding="10px">
        {more.name} & {more.address} & {more.matchAddress("Osakas")}
      </Row>
    </Column>
  )
}

const code = `
`
