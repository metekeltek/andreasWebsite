import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SText, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Raum.jpg" }) {
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
              <Title> Kursplan </Title>
              <Text> Yin Yoga </Text>
              <Text>Montags 10:00
              12.04.21 – 21.06.21<br/>
              10 x jeweils von 10:00 – 11:30 Uhr<br/>
              Kursgebühr bei Anmeldung 150,-€* <br/></Text>
              <Text> Yin Yoga </Text>
              <Text>Montags 10:00
              12.04.21 – 21.06.21<br/>
              10 x jeweils von 10:00 – 11:30 Uhr<br/>
              Kursgebühr bei Anmeldung 150,-€* <br/></Text>
              <Text> Yin Yoga </Text>
              <Text>Montags 10:00
              12.04.21 – 21.06.21<br/>
              10 x jeweils von 10:00 – 11:30 Uhr<br/>
              Kursgebühr bei Anmeldung 150,-€* <br/></Text>
              <Text> Yin Yoga </Text>
              <Text>Montags 10:00
              12.04.21 – 21.06.21<br/>
              10 x jeweils von 10:00 – 11:30 Uhr<br/>
              Kursgebühr bei Anmeldung 150,-€* <br/></Text>
              <Text> Yin Yoga </Text>
              <Text>Montags 10:00
              12.04.21 – 21.06.21<br/>
              10 x jeweils von 10:00 – 11:30 Uhr<br/>
              Kursgebühr bei Anmeldung 150,-€* <br/></Text>
              <Text> Yin Yoga </Text>
              <Text>Montags 10:00
              12.04.21 – 21.06.21<br/>
              10 x jeweils von 10:00 – 11:30 Uhr<br/>
              Kursgebühr bei Anmeldung 150,-€* <br/></Text>
              <Text>*Feiertage und Ferien beachten</Text>
              <Text>Alle Yoga Gruppenkurse und Workshops werden in dem schönen Studio in Lippstadt-Nord angeboten. Die Einzel- und Privatstunden je nach Absprache.</Text>

              {/* <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton> */}
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
