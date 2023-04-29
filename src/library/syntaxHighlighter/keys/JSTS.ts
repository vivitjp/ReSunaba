import { KeyDef } from "~/library/syntaxHighlighter/syntaxHighlighter"

export const keysJSTS: KeyDef[] = [
  { color: "IndianRed", keys: ["React", "export", "return"] },
  {
    color: "DarkViolet",
    keys: ["useState"],
  },
  {
    color: "RoyalBlue",
    keys: ["number", "string", "boolean", "SVGElement"],
  },
  {
    color: "ForestGreen",
    keys: ["const"],
  },
  // ■ HTML TAG
  {
    color: "DodgerBlue",
    keys: ["input"],
  },
  {
    color: "LightSeaGreen",
    keys: ["value"],
  },
  {
    color: "darkOrange",
    keys: [
      "onChange",
      "onClick",
      "PointerEvent",
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
    ],
  },
  {
    color: "#555",
    keys: ["false", "true", "fixed"],
  },
]
