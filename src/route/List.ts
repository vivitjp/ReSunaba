import { Home } from "~/pages/Home"
import {
  PageAnimationSlide,
  PageCustomHooks,
  PageIntersectionObserver,
  PageIntersectionObserverHide,
  PageReactMemo,
  PageZustand,
  PageZustandStore,
} from "~/pages"
import { PageRenderHooks } from "~/pages/React/PageRenderHooks"

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

  CSS: [
    {
      name: "スライドMenu",
      path: "/animation-slide-menu",
      element: PageAnimationSlide,
    },
  ],
  React: [
    {
      name: "React.memo",
      path: "/reactMemo",
      element: PageReactMemo,
    },
    {
      name: "CustomHooks",
      path: "/customHooks",
      element: PageCustomHooks,
    },
    {
      name: "RenderHooks",
      path: "/renderHooks",
      element: PageRenderHooks,
    },
    {
      name: "zustand Store",
      path: "/zustandStore",
      element: PageZustandStore,
    },
    {
      name: "zustand",
      path: "/zustand",
      element: PageZustand,
    },
  ],
  WebAPI: [
    {
      name: "Inter Observer",
      path: "/iObserver",
      element: PageIntersectionObserver,
    },
    {
      name: "Inter Observer Hide",
      path: "/iObserver-hide",
      element: PageIntersectionObserverHide,
    },
  ],
}
