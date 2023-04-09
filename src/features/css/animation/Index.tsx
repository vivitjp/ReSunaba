import { Column, Section } from "~/common"
import { useAnimation } from "./codes/useAnimation"
import { FeaturePresenter } from "~/features"

const codes = [useAnimation]

export const FeatureAnimation = () => {
  return (
    <Section>
      <Column padding={6} gap={40}>
        {codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
      </Column>
    </Section>
  )
}
