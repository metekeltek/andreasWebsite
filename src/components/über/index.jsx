import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";
import andrea1 from '../../assets/img/andrea1.jpg'
import andrea2 from '../../assets/img/andrea2.jpg'
import andrea3 from '../../assets/img/andrea3.jpg'
import kid3 from '../../assets/img/kid3.jpg'


const About = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>


    
        <img src={andrea1} width={500} height={800} style={{marginTop:0, marginLeft: "auto", marginRight:"auto", display:"block"}}/>
        <Title><b className="text-primary">Hallo, ich bin Andrea!</b></Title>

<SubTitle>
<b className="text-primary">Ich freue mich, Dich und Dein Baby kennenzulernen!</b>
</SubTitle>

              <Text></Text>
              <Text>
                <ul>
                  <li><b className="text-primary">Ich bin</b></li>
                  <ul>
                    <li>verheiratet, Vollblutmama, liebe es zu schwimmen und zu joggen und würde 	mich als kreatives Energiebündel beschreiben. Seitdem ich denken kann, ist 	die Arbeit mit Kindern und das gleichzeitige Begleiten ihrer Eltern die 		allerschönste Aufgabe für mich!</li>
                  </ul> 
                  <li><b className="text-primary">Fachkinderkrankenschwester für Kinderintensiv- und Anästhesiepflege</b></li>
                  <ul>
                    <li>1999-2002 Ausbildung zur Kinderkrankenschwester im Evangelischen 			Krankenhaus Lippstadt, 2006-2008 Fachweiterbildung zur 					Fachkinderkrankenschwester für Kinderintensivpflege- und Anästhesie 
	                    an der Weiterbildungsstätte in Datteln an der Vestischen Kinder- und 			Jugendklinik</li>
                  </ul> 
                  <ul>
                    <li>Von 1999-2010 habe ich im Krankenhaus auf der Kinderintensivstation mit 			Schwerpunkt Neonatologie gearbeitet und seit Ende 2010 bis zum Beginn 			meines Mutterschutzes in der Anästhesieabteilung.</li>
                  </ul> 
                  <li><b className="text-primary">seit 2017 Aquapädagogin</b></li>
                  <ul>
                    <li>Während meiner Elternzeit habe ich mich zur Aquapädagogin für 				Wassergewöhnung und Kinderanfangsschwimmen beim Bundesverband für 		Aquapädagogik weitergebildet und seit 2017 bin ich als Aquapädagogin 			tätig.</li>
                  </ul> 
                  <li><b className="text-primary">seit 2020 Kursleiterin für Babymassage</b></li>
                  <ul>
                    <li>Im September 2020 habe ich meinen Lehrgang zur Kursleiterin für Baby 			Massage bei Heidrun Claußen absolviert.</li>
                  </ul> 
                </ul>
                </Text>
                <Text><img src={andrea2} width={550} height={800} style={{marginTop:0, marginBottom:100, marginLeft: "auto", marginRight:"auto", display:"block"}}/></Text>
        
        <AboutSection>
  <div>
    <img src={andrea3} width={700} height={500} style={{marginTop:0}}/>
  </div>
  <div>
    <img src={kid3} width={700} height={500} style={{marginTop:0}}/>
  </div>
</AboutSection>
              
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>

              {/* <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton> */}
         
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
