import { UseReturnType } from "../../../component/type/type"
import { Column } from "../../../common/styleDiv"

import {
  PDFDownloadLink,
  //PDFViewer, --> Downloadが即座に開始する
  Page,
  Text,
  View,
  Font,
  Document,
  StyleSheet,
} from "@react-pdf/renderer"
import fontRegular from "../../../assets/font/Nasu-Regular.ttf" //ttfファイル参照
import fontBold from "../../../assets/font/Nasu-Bold.ttf" //ttfファイル参照

/*
■ インストール
yarn add @react-pdf/renderer
*/

export function UsePDF(): UseReturnType {
  const title = `React-PDF`
  const subTitle = ``

  const jsx = <PDF />
  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const PDF = () => {
  return (
    <Column padding="10px">
      <OutputComponent />
    </Column>
  )
}

const code = `import fontRegular from "../../../assets/font/Nasu-Regular.ttf"
import fontBold from "../../../assets/font/Nasu-Bold.ttf"
 
const style = StyleSheet.create({
  body: {
    fontSize: "11pt",
    textAlign: "left",
    padding: "3px",
  },
  view: {
    textAlign: "left",
    position: "absolute",
    top: "100px",
    left: "35px",
    width: "300px",
    height: "300px",
    borderWidth: "0.1mm",
    borderStyle: "solid",
  },
  title: { fontSize: "11pt", fontFamily: "Nasu-Bold" },
  subTitle: { fontSize: "8pt", fontFamily: "Nasu-Regular" },
  bodyText: { fontSize: "7pt", fontFamily: "Nasu-Regular" },
})
 
Font.register({ family: "Nasu-Regular", src: fontRegular })
Font.register({ family: "Nasu-Bold", src: fontBold })
Font.registerHyphenationCallback((word) =>
  Array.from(word).flatMap((char) => [char, ""])
)
 
const fileName = "sample1.pdf"
const longText = \`test 本文文字列、本文文字列、本文文字列、本文文字列、本文文字列、本文文字列本文文字列、本文文字列本文文字列、本文文字列本文文字列、本文文字列
本文文字列、本文文字列、本文文字列本文文字列、本文文字列、本文文字列\`
 
const DocumentComponent = () => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={style.body}>
        <View style={style.view}>
          <Text style={style.title}>1行目タイトル</Text>
          <Text style={style.subTitle}>サブタイトル文字列やや長め</Text>
          <Text style={style.bodyText}>{longText}</Text>
        </View>
      </Page>
    </Document>
  )
}
 
const OutputComponent = () => {
 return (
    <PDFDownloadLink document={<DocumentComponent />} fileName={fileName}>
      {({ loading }) => (loading ? "Loading..." : "Download PDF")}
    </PDFDownloadLink>
  )
}`

const style = StyleSheet.create({
  body: {
    fontSize: "11pt",
    textAlign: "left",
    padding: "3px",
  },
  view: {
    textAlign: "left",
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "300px",
    height: "300px",
    padding: "8px",
    borderWidth: "0.1mm",
    //borderStyle: "solid",
  },
  title: { fontSize: "11pt", fontFamily: "Nasu-Bold" },
  subTitle: { fontSize: "8pt", fontFamily: "Nasu-Regular" },
  bodyText: {
    // width: "300px", 作用せず
    fontSize: "7pt",
    fontFamily: "Nasu-Regular",
    //whiteSpace: "wrap",
    //hyphens: "none", //"none", "auto", "manual"
    lineBreak: "normal", //"anywhere", "normal", "loose"
    //textDecoration: "none",
    //textOverflow:
  },
})

Font.register({
  family: "Nasu-Regular",
  src: fontRegular,
})
Font.register({
  family: "Nasu-Bold",
  src: fontBold,
})

Font.registerHyphenationCallback((word) =>
  Array.from(word).flatMap((char) => [char, ""])
)

const fileName = "sample1.pdf"
const longText = `test 本文文字列、本文文字列、本文文字列、本文文字列、本文文字列、本文文字列本文文字列、本文文字列本文文字列、本文文字列本文文字列、本文文字列
本文文字列、本文文字列、本文文字列本文文字列、本文文字列、本文文字列`

const DocumentComponent = () => {
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={style.body}>
        <View style={style.view}>
          <Text style={style.title}>1行目タイトル</Text>
          <Text style={style.subTitle}>サブタイトル文字列やや長め</Text>
          <Text style={style.bodyText}>{longText}</Text>
        </View>
      </Page>
    </Document>
  )
}

const OutputComponent = () => {
  return (
    <PDFDownloadLink document={<DocumentComponent />} fileName={fileName}>
      {({ loading }) => (loading ? "Loading..." : "Download PDF")}
    </PDFDownloadLink>
  )
}

/*
// PDFをビューアーで表示する(動作せず)
<PDFViewer>
  <DocumentComponent />
</PDFViewer>
*/