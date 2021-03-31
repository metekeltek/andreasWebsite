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
              <Title> Willkommen! </Title>
              <Text> Eine <b className="text-primary">Babymassage</b> hat viele Vorteile – nicht nur für die Kleinen! Denn Babys zu streicheln oder sanft zu berühren steigert das Wohlbefinden, stärkt das kindliche Immunsystem und die Eltern-Kind-Bindung. </Text>
              <Text> Die Babymassage oder Kindermassage stammt ursprünglich aus Indien und dort unter dem Namen Kumara Abhyanga im Ayurveda enthalten. Sie wurde von dem Franzosen Frédérick Leboyer, dem Begründer der „sanften Geburt“, in den 1970er-Jahren aufgegriffen und in Europa eingeführt, weswegen sie hier auch häufig Leboyer-Massage genannt wird. Babymassagen kennt man aber auch in Russland und Afrika sowie angeblich bei den Eskimos.</Text>
              <Text> Die Babymassage trägt laut ihrer Anhängerschaft zur Entspannung und zur Entwicklung des Empfindungsvermögens bei, helfe aber auch gegen Blähungen und Unruhe. Zielgruppe sind vor allem Säuglinge im Alter zwischen vier und sechs Wochen und sechs Monaten, aber auch Kleinkinder bis zum Alter von etwa zwei Jahren.
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
