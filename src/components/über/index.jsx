import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mother-kid.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
    
            </div> 
            <div>
              <Title> Ich bin Andrea </Title>
              <Text> Eine ausgebildete <b className="text-primary">Babymasseurin</b> aus Lippstadt. </Text>
              <Text> Von ganzem Herzen begleite ich seit 15 Jahren Frauen durch ihre Schwangerschaft; Paare auf dem Weg Eltern zu werden, eine Familie zu gründen und junge Mütter in der Zeit der Rückbildung. Sie mit all meinem Wissen individuell und persönlich zu begleiten sowie zu unterstützen ist der wichtigste Bestandteil meiner Arbeit und mir eine Herzenssache.</Text>
              <Text> Nach zwei Jahren Erfahrung als Kinderkrankenschwester in der Kölner Unikinderklinik erfüllte sich mein Wunsch Hebamme werden zu dürfen in Marburg/Lahn. In verschiedenen Kliniken in Köln sowie meiner Heimat durfte ich mein geburtshilfliches Wissen erweitern und dem Wunder Geburt zur Seite stehen. 2011 erfüllte sich ein weiterer Wunsch mit dem Start in meine Selbständigkeit und dem Eintritt in die Hebammenpraxis Geburt & Leben. In den Jahren 2018 – 2021 habe ich meine eigene Praxis mit viel Freude geleitet und biete ab 2021 meine Kurse in verschiedenen Einrichtungen an.
              </Text>
              {/* <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton> */}
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
