import React from "react"
import {AboutSection, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout} from "../common";
import kurs1 from '../../assets/img/kurs1.jpeg'
import kurs3 from '../../assets/img/kurs3.jpeg'
import kurs4 from '../../assets/img/kurs4.jpg'
import kurs5 from '../../assets/img/kurs5.jpeg'
import kurs6 from '../../assets/img/kurs6.jpeg'


const About = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <SubTitle><b className="text-primary">Dein Baby ist zwischen vier Wochen und sechs Monaten alt?</b></SubTitle>
          <Text>Das ist der perfekte Zeitpunkt, um mit der Babymassage zu starten.</Text>
          <Text>Grundsätzlich kann man schon früh mit der Babymassage anfangen. Ich empfehle, dass der Nabel komplett abgeheilt ist und dass die Kinder ca. vier Wochen alt sind, so dass Ihr in eurem Alltag schon einen eigenen Rhythmus finden konntet. 
            Da in den ersten Lebenswochen die Säuglinge noch sehr viel schlafen, spielt es keine große Rolle, zu welchem Zeitpunkt die Babymassage durchgeführt wird. Je älter die Säuglinge sind, bzw. wenn die Säuglinge insbesondere abends unruhiger sind und versuchen, den Tag zu verarbeiten, empfiehlt es sich manchmal, in den Abendstunden zu massieren bzw. am späten Nachmittag einen Kurs zu belegen, da dies oft hilft, die Babys zu beruhigen.</Text>
          <Text>Wenn die Babys sechs Monate alt sind und ihr Bewegungsradius sich stark vergrößert, oder man merkt, dass der Säugling die Massage nicht mehr möchte, ist es meistens an der Zeit mit der Babymassage in einem Kurs aufzuhören. Man kann diese in ruhigen Minuten oder Momenten aber weiterhin gut zu Hause, eventuell in kürzeren Abschnitten mit Einverständnis des Kindes mit dem erlernten Wissen durchführen.</Text>
          <Title><b className="text-primary">Meine Angebote</b></Title>
          <Text>Du kannst zwischen unterschiedlichen Kursangeboten wählen.
Ein Kurs beinhaltet 5 Termine à 60 Minuten. Die Kurse finden in Kleingruppen bis maximal sechs Personen statt.<br/>
<b>Es gelten die aktuellen Pandemie Richtlinien und Schutzmaßnahmen.</b>
</Text>

          <Text><span role="img" aria-label="heart emoji">💜</span> <b>Eröffnungsangebot</b></Text>
          <Text>Bei Deinem ersten Kurs erhältst Du eine weitere Stunde gratis dazu!</Text>
          <Text><b>Kurse</b></Text>
          <Text><table>
  <tr>
    <td><span role="img" aria-label="heart emoji">💜</span> <b>pro Person</b></td>
    <td style={{paddingLeft:30}}>100€</td>
  </tr>
  <tr>
    <td ><span role="img" aria-label="heart emoji">💜</span> <b>Einzelkurs</b> auf Wunsch nach Absprache   </td>
    <td style={{paddingLeft:30}}>120€</td>
  </tr>
  <tr>
    <td><span role="img" aria-label="heart emoji">💜</span> <b>Zwillingsangebot</b></td>
    <td style={{paddingLeft:30}}> 150€</td>
  </tr>
</table></Text>
          <Text><b>Du hast Zwillinge und möchtest gerne die Babymassage bei mir erlernen? </b>
Mein Angebot besteht darin, dass Du und Dein Partner oder eine andere feste Begleitpersonen natürlich zusammen den Kurs besuchen können.
</Text>
          <Text>Du hast niemanden, der Dich unterstützen kann? Wenn du magst, führe ich die Babymassage nicht zur Demonstration an meiner Babymassagepuppe durch und vor, sondern an Deinem Baby!
</Text>
          <Text><span role="img" aria-label="heart emoji">💜</span> <b>Wahlgruppenangebot:</b></Text>
          <Text>Du möchtest Dich mit Deinen Freundinnen aus dem Geburtsvorbereitungskurs gemeinsam in einem Kurs anmelden? Kein Problem! Gemeinsam finden wir einen Termin am Vormittag oder Nachmittag dafür und ihr seid mit mir unter euch! </Text>
          <Text><span role="img" aria-label="heart emoji">💜</span> <b>Geschenkidee:</b></Text>
          <Text>Du möchtest jemandem einen Gutschein für einen Babymassagekurs, z. Bsp. zur Geburt schenken? Ich stelle dir gerne einen Gutschein aus.</Text>
          <Text><b>Zu eurem Kurs bringt ihr bitte mit:</b> </Text>
          <Text><ul>
            <li>Ein großes Badetuch und eine Stoffwindel</li>
            <li>Ein Kissen oder Stillkissen</li>
            <li>Eventuell Flaschennahrung</li>
            <li>Warme Socken für Dich oder die begleitende Person</li>
            <li>Wickeltasche</li>
            <li>Einmalunterlage</li>

          </ul></Text>
          <Text><b className="text-primary">Von mir erhaltet ihr das Baby Massage Öl.</b> </Text>
    
          <Text>
          <img alt="Baby Spielzeug" src={kurs1} width={500} height={700} style={{marginTop:0,  marginLeft: "auto", marginRight:"auto", display:"block"}}/>
          </Text>
          
          <Text><b className="text-primary">Kursraum:</b></Text>
          <Text>Ich habe das große Glück, im eigenen Haus in Lippstadt einen großen Raum eingerichtet zu haben, mit separatem, nach hinten gelegenen Eingang.
Unser Raum ist beheizt, daher empfehle ich bequeme Kleidung und am besten an den kalten Tagen den Zwiebel Look. 
Es wäre schön, wenn jeder die Windeln seines Kindes wieder mit nach Hause nehmen und dort entsorgen könnte. 
Der Kinderwagen kann vor dem Eingang zum Massageraum  bequem trocken untergestellt werden.
</Text>
    <AboutSection>
  <div>
    <img alt="Kursraum Foto 1" src={kurs3} width={700} height={500} style={{marginTop:0}}/>
  </div>
  <div>
    <img alt="Kursraum Foto 2" src={kurs4} width={700} height={500} style={{marginTop:0}}/>
  </div>
  <div>
    <img alt="Kursraum Foto 3" src={kurs5} width={700} height={500} style={{marginTop:0}}/>
  </div>
  <div>
    <img alt="Kursraum Foto 4" src={kurs6} width={700} height={500} style={{marginTop:0}}/>
  </div>
</AboutSection>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>


        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
