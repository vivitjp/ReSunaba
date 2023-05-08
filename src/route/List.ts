import { PageAnimationSlide } from "../pages/CSS/PageAnimationSlide"
import { Home } from "../pages/Home"
import { PageCustomHooks } from "../pages/React/PageCustomHooks"
import { PageEntries } from "../pages/TypeScript/PageEntries"
import { PageIntersectionObserver } from "../pages/webAPI/PageIntersectionObserver"
import { PageIntersectionObserverHide } from "../pages/webAPI/PageIntersectionObserverHide"
import { PagePDF } from "../pages/React/PagePDF"
import { PageReactMemo } from "../pages/React/PageReactMemo"
import { PageRenderHooks } from "../pages/React/PageRenderHooks"
import { PageUseMemo } from "../pages/React/PageUseMemo"
import { PageZustand } from "../pages/React/PageZustand"
import { PageZustandStore } from "../pages/React/PageZustandStore"

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
  TypeScript: [
    {
      name: "Object.entries",
      path: "/objectEntries",
      element: PageEntries,
    },
  ],
  React: [
    {
      name: "useMemo",
      path: "/useMemo",
      element: PageUseMemo,
    },
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
    {
      name: "pdf",
      path: "/pdf",
      element: PagePDF,
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
