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
import { PageZustandSubscribe } from "../pages/React/PageZustandSubscribe"
import { PageZustandPersist } from "../pages/React/PageZustandPersist"
import { PageZustandMapSet } from "../pages/React/PageZustandMapSet"
import { PageZustandDevTools } from "../pages/React/PageZustandDevTools"
import { PageTSClass } from "../pages/TypeScript/PageTSClass"
import { PagePromise } from "../pages/TypeScript/PagePromise"
import { PageVariables1 } from "../pages/React/PageVariables1"
import { PageVariables2 } from "../pages/React/PageVariables2"

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
    {
      name: "Class",
      path: "/class",
      element: PageTSClass,
    },
    {
      name: "Promise",
      path: "/promise",
      element: PagePromise,
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
      name: "Zustand(Store)",
      path: "/zustandStore",
      element: PageZustandStore,
    },
    {
      name: "Zustand(再描画)",
      path: "/zustand",
      element: PageZustand,
    },
    {
      name: "Zustand(Map & Set)",
      path: "/zustandMapSet",
      element: PageZustandMapSet,
    },
    {
      name: "Zustand(Subscribe)",
      path: "/zustandSubscribe",
      element: PageZustandSubscribe,
    },
    {
      name: "Zustand(Persist)",
      path: "/zustandPersist",
      element: PageZustandPersist,
    },
    {
      name: "Zustand(DevTools)",
      path: "/zustandDevTools",
      element: PageZustandDevTools,
    },
    {
      name: "PDF",
      path: "/pdf",
      element: PagePDF,
    },
    {
      name: "変数Static1",
      path: "/staticVariables1",
      element: PageVariables1,
    },
    {
      name: "変数Static2",
      path: "/staticVariables2",
      element: PageVariables2,
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
