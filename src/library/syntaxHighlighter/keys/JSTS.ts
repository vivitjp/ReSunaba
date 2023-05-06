import { KeyDef } from "../syntaxHighlighter"

export const keysJSTS: KeyDef[] = [
  {
    color: "IndianRed",
    keys: [
      "React",
      "export",
      "return",
      "children",
      "styled",
      "interface",
      "type",
    ],
  },
  // ■ Hooks / Packages
  {
    color: "LightSeaGreen",
    keys: [
      "useState",
      "useEffect",
      "useRef",
      "memo",
      "IntersectionObserver",
      "zustand",
    ],
  },
  // ■ TypeScript
  {
    color: "LightSeaGreen",
    keys: ["as", "extends", "infer", "never", "keyof", "typeof"],
  },
  // ■ WebAPI
  {
    color: "Goldenrod",
    keys: [
      "isIntersecting",
      "unobserve",
      "observe",
      "StateCreator",
      "set",
      "get",
      "create",
    ],
  },
  {
    color: "RoyalBlue",
    keys: ["number", "string", "boolean", "SVGElement"],
  },
  {
    color: "ForestGreen",
    keys: ["const", "let"],
  },
  // ■ HTML TAG
  {
    color: "DodgerBlue",
    keys: ["input", "section"],
  },
  // ■ JS Methods
  {
    color: "CadetBlue",
    keys: ["map", "forEach", "reduce", "filter", "find", "fill"],
  },
  {
    color: "SteelBlue",
    keys: ["value", "key", "Object", "keys", "values", "ref", "current"],
  },
  //Event
  {
    color: "darkOrange",
    keys: [
      "onChange",
      "onClick",
      "onPointerDown",
      "onPointerUp",
      "onPointerMove",
    ],
  },
  {
    color: "CadetBlue",
    keys: ["currentTarget", "clientX", "clientY", "pointerId"],
  },
  {
    color: "Sienna",
    keys: [
      "getBoundingClientRect",
      "setPointerCapture",
      "releasePointerCapture",
      "left",
      "top",
      "right",
      "bottom",
      "height",
      "width",
      "opacity",
      "position",
      "transition",
      "hover",
      "fontSize",
      "padding",
      "margin",
      "pointer-events",
    ],
  },
  {
    color: "#555",
    keys: ["false", "true", "fixed", "null", "undefined", "void"],
  },
]
