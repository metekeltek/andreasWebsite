import React from "react"
import {AboutSection, Avatar, Title, Text} from './style';
import {SectionIntro, ContainerLayout} from "../common";

const About = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Title> Datenschutz </Title>
              <Text> Verantwortlicher für die Datenverarbeitung ist:
Für-Gründer.de GmbH
Kaiserstraße 79
60329
Frankfurt
info@fuer-gruender.de

Wir freuen uns über Ihr Interesse an unserem Online-Shop. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.

1. Zugriffsdaten und Hosting
Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert. (...)

--

2. Datenerhebung und -verwendung zur Vertragsabwicklung
Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Bestellung oder bei einer Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) mitteilen. Pflichtfelder werden als solche gekennzeichnet, da wir in diesen Fällen die Daten zwingend zur Vertragsabwicklung, bzw. zur Bearbeitung Ihrer Kontaktaufnahme benötigen und Sie ohne deren Angabe die Bestellung nicht abschließen, bzw. die Kontaktaufnahme nicht versenden können. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von ihnen mitgeteilten Daten gemäß Art. 6 Abs. 1 (...)

--

3. Datenweitergabe
Zur Vertragserfüllung gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO geben wir Ihre Daten an das mit der Lieferung beauftragte Versandunternehmen weiter, soweit dies zur Lieferung bestellter Waren erforderlich ist. Je nach dem, welchen Zahlungsdienstleister Sie im Bestellprozess auswählen, geben wir zur Abwicklung von Zahlungen die hierfür erhobenen Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut und ggf. von uns beauftragte Zahlungsdienstleister weiter  (...)

--

4. E-Mail-Newsletter
E-Mail-Werbung mit Anmeldung zum Newsletter

Wenn Sie sich zu unserem Newsletter anmelden, verwenden wir die hierfür erforderlichen oder gesondert von Ihnen mitgeteilten Daten, um Ihnen regelmäßig unseren E-Mail-Newsletter aufgrund Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO zuzusenden.

Die Abmeldung vom Newsletter ist jederzeit möglich und kann entweder durch eine Nachricht an die unten beschriebene Kontaktmöglichkeit oder über einen dafür vorgesehenen Link im Newsletter erfolgen. (...)

--

5. Cookies und Webanalyse
Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, um passende Produkte anzuzeigen oder zur Marktforschung verwenden wir auf verschiedenen Seiten sogenannte Cookies. Dies dient der Wahrung unserer im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer optimierten Darstellung unseres Angebots gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO. Cookies sind kleine Textdateien, die automatisch auf Ihrem Endgerät gespeichert werden. Einige der von uns verwendeten Cookies werden nach Ende der Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben  (...)

Einsatz von Google (Universal) Analytics zur Webanalyse
Soweit Sie hierzu Ihre Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO erteilt haben, setzt diese Website zum Zweck der Webseitenanalyse Google (Universal) Analytics ein, einen Webanalysedienst der Google LLC (www.google.de). Google (Universal) Analytics verwendet Methoden, die eine Analyse der Benutzung der Website durch Sie ermöglichen, wie zum Beispiel Cookies. Die automatisch erhobenen Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen (...)

--

6. Online-Marketing
Google AdSense
Unsere Website vermarktet über Google AdSense Platz für Anzeigen von Drittanbietern und Werbenetzwerken. Diese Anzeigen werden Ihnen an verschiedenen Stellen auf dieser Website angezeigt. Soweit Sie uns hierzu Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO erteilt haben, wird im Rahmen der Einbindung von Google AdSense das sog. DoubleClick-Cookie von Google gesetzt.
Dieses ermöglicht die Anzeige interessengerechter Werbung durch automatische Zuordnung einer pseudonymen UserID, mit deren Hilfe die Interessen anhand von Besuchen dieser (...)

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
