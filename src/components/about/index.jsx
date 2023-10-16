import React from "react"
import {AboutSection, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout} from "../common";
import kid1 from '../../assets/img/kid1.jpg'
import kid2 from '../../assets/img/kid2.jpg'
import kid4 from '../../assets/img/kid4.jpg'
import kid5 from '../../assets/img/kid5.jpg'




const About = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
              <Title> <b className="text-primary">Die Babymassage</b> </Title>
              <Text> In Indien hat die Babymassage schon lange Tradition, in Europa wurde sie Anfang der 
              siebziger Jahre durch den französischen Frauenarzt und Geburtshelfer <b className="text-primary">Frédéric Léboyer</b> bekannt.
              Seine entspannenden Massagetechniken sind ein Ritual, um Babys durch Nähe und Zuwendung mit respektvollem Körperkontakt 
              liebevoll auf der Welt willkommen zu heißen. Die Babys erfahren Wärme, Berührung und Geborgenheit, entwickeln dadurch ein 
              positives Körpergefühl und die Fähigkeit zur Entspannung wird zudem gesteigert.
</Text>
<Text>Nach einem Lehrgang zur Kursleitung für Baby Massage bei Heidrun Claußen in Köln habe ich alle wunderschönen Aspekte zusammen geführt 
und biete die Babymassage in Kombination mit Berührungen und Bewegungen aus der <b className="text-primary">basalen Stimulation</b> (siehe unten) an.
</Text>
<Text>Mit den Händen zu massieren, zu berühren, bedeutet eine intensive tiefe Verbindung zum eigenen Baby aufzubauen.
Ein weiterer, sehr positiver Nebeneffekt der Babymassage ist das <b className="text-primary">Lindern von Blähungen, bzw. Bauchschmerzen und Koliken</b> durch einfache 
Massagegriffe sowie das Reduzieren von Unruhezuständen, Verspannungen und Schlaf– und Einschlafproblemen.
</Text>
<AboutSection>
  <div>
    <img alt="Ein Baby" src={kid2} width={500} height={700} style={{marginTop:0}}/>
  </div>
  <div>
    <img alt="Ein Baby" src={kid1} width={500} height={700} style={{marginTop:0}}/>
  </div>
</AboutSection>

<SubTitle><b className="text-primary">Bei mir sollt Ihr Euch beide wohl fühlen!</b></SubTitle>
    <img alt="Baby im Schoß" src={kid4} width={700} height={500} style={{marginTop:0, marginLeft: "auto", marginRight:"auto", display:"block"}}/>
             <Text>Deshalb geht es los mit einer kleinen Entspannungseinheit für Dich.
</Text>
             <Text>Dadurch bekommst Du im oftmals getakteten Alltag die Chance, Dich selbst wahrzunehmen und aus dieser <b className="text-primary">Entspannung</b> heraus voll und ganz in der Situation mit Deinem Säugling zu sein, um Dich auf eine gefühlvolle, berührende Babymassage einlassen zu können.
</Text>
             <Text>Während meiner Aus– und Weiterbildung habe ich nach dem Prinzip der basalen Stimulation gelernt und massiert. Die basale Stimulation definiert sich darin, dem Menschen anzubieten, sich selbst zu spüren und seine Körpergrenzen wahrzunehmen.
</Text>
             <Text>Hauptschwerpunkte sind die Bedeutung von Wahrnehmung, Bewegung und Kommunikation. Hierbei können wir die Wahrnehmung des Körpers beleben und insbesondere bei krankheitsbedingt fehlendem Körperbewusstsein und dem Gefühl der Verlorenheit entgegenwirken. Durch die berührenden, massierenden Hände werden das <b className="text-primary">Wohlbefinden und die Sicherheit durch nonverbale Kommunikation</b> gefördert.
</Text>
    <img alt="Baby Hände" src={kid5} width={350} height={550} style={{marginTop:0, marginLeft: "auto", marginRight:"auto", display:"block"}}/>


             <Text>Während meiner Zeit in der Kinderklinik habe ich damit viele positive Erfahrungen gemacht und in vielen Pflegeeinheiten selbst die allerkleinsten Babys in ihrer Wahrnehmung und Entwicklung gefördert.
</Text>
             <Text>Wir berühren unsere Kinder täglich unzählige Male, beim Waschen, beim Anziehen, beim Eincremen usw. Viele unserer Berührungen im Alltag sind schnell, routiniert und zweckmäßig. Dabei wird über die Wirkung unserer Berührungen gar nicht so oft nachgedacht, dadurch lösen sie unterschiedliche Gefühle in uns aus. <b className="text-primary">Durch Berührung fühlen wir uns entspannt, beruhigt, angenommen und beachtet.</b>
</Text>
    <img alt="Ein Baby" src={kid1} width={350} height={550} style={{marginTop:0, marginLeft: "auto", marginRight:"auto", display:"block"}}/>

             <Text>Die frühkindliche Berührung bildet die Grundlage für die Wahrnehmung von Berührungsreizen und hat z. B. Auswirkungen darauf, wie wir später berühren und ob wir Berührungen gegenüber offen sein können.
</Text>
             <Text><b className="text-primary">Schon Embryos</b> nehmen ab der zwölften Schwangerschaftswoche die Umgebung über Berührung war und auch das Kleinkind macht über Berührung Erfahrungen, positiv als auch negativ. Es gibt Untersuchungen darüber, dass Menschen, die als Säugling oft berührt wurden, nicht nur die Beweglichkeit und das Sozialverhalten, sondern ebenso auch die geistige Entwicklung, Wachstum, Abwehrfähigkeit und seelische Stabilität deutlich verbessern und aus der Berührung <b className="text-primary">– in diesem Fall durch Babymassage – wird Beziehung</b>.Durch meine jahrelange Berufserfahrung mit Früh – und Neugeborenen weiß ich, dass <b className="text-primary">negative Erfahrungen</b> wie z. Bsp.
</Text>
             <Text><ul>
               <li>eine <b className="text-primary">Trennung von Mutter und Kind nach der Geburt</b></li>
               <li>ein <b className="text-primary">Kaiserschnitt</b></li>
               <li>eine <b className="text-primary">komplizierte Entbindung</b></li>

             </ul></Text>
             <Text>sich manchmal negativ auf das Baby auswirken und bei der liebevollen Zuwendung während der Massage aufgearbeitet werden können.</Text>
             <Text>Mach meine Babymassage zu Deiner Babymassage, denn Du kannst die bei mir erlernte Massage zu Hause weiterführen. Damit Dein Baby und Du sich wohl fühlen!
</Text>
             <Text></Text>
    
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
