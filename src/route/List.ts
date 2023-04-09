import { Home } from "~/Home"
import { PageBasic } from "~/pages"

type MenuGroup = { [key: string]: Menu[] }

type FCCompo = React.FunctionComponent<{}>
type FixedElement = () => JSX.Element

export type Menu = {
  name: string
  path: string
  element: FCCompo | FixedElement
}

export const menuGroup: MenuGroup = {
  Home: [{ name: "Home", path: "/", element: Home }],

  PlayGround: [
    //{ name: "Playground", path: "/playground", element: PagePlayground },
  ],
  Basic: [{ name: "基礎", path: "/basic", element: PageBasic }],
}
