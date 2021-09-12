import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
        <Text><b className="text-primary">Melde Dich unter:</b></Text>
        <Text>
        <table>
  <tr>
    <td><b className="text-primary">E-mail:</b></td>
    <td style={{paddingLeft:30}}>andrea@babymassage-mit-herz.de</td>
  </tr>
  <tr>
    <td ><b className="text-primary">Instagram:</b>   </td>
    <td style={{paddingLeft:30}}>babymassagemitherz</td>
  </tr>
</table>
        </Text>



        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
