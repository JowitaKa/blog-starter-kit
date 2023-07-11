import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllPosts} from '../lib/api'
import Head from 'next/head'
import {CMS_NAME, EXAMPLE_PATH} from '../lib/constants'
import Post from '../interfaces/post'
import Header from "../components/header";
import ImpressumTitle from "../components/impressum-title";
import ImpressumHeadlineSmall from "../components/impressum-headline-small";
import ImpressumHeadlineBig from "../components/impressum-headline-big";

export default function Impressum() {

  return (
    <>
      <Layout>
        <Head>
          <title>{`Jowita's Impressum`}</title>
        </Head>
        <Container>
          <Header/>
          <ImpressumTitle>
            Impressum
          </ImpressumTitle>


          <ImpressumHeadlineSmall>Angaben gemäß § 5 TMG</ImpressumHeadlineSmall>

          <p>
            Jowita Eisenblätter <br/>
            Gertigstrasse 24<br/>
            22303 Hamburg <br/>
          </p><br/>

          <p>
            Vertreten durch:<br/>
            Jowita Eisenblätter<br/>
          </p><br/>

          <p>
            Kontakt:<br/>
            Telefon: 015161511230<br/>
            E-Mail: info@teck-meck.de<br/>
          </p>
          <br/><br/><br/>

          <ImpressumHeadlineBig>Haftungsausschluss:</ImpressumHeadlineBig>
          <ImpressumHeadlineSmall>Haftung für Inhalte</ImpressumHeadlineSmall>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
          § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
          8 bis
          10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
          einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
          wir diese
          Inhalte umgehend entfernen.<br/><br/><br/>
          <ImpressumHeadlineSmall>Haftung für Links</ImpressumHeadlineSmall>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
          haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten
          wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
          waren zum
          Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
          Seiten ist
          jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br/><br/><br/>

          <ImpressumHeadlineSmall>Urheberrecht</ImpressumHeadlineSmall>

          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
          der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit
          die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet.
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
          Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend
          entfernen.<br/><br/><br/>


          <ImpressumHeadlineSmall>Datenschutz</ImpressumHeadlineSmall>

          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit
          auf
          unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben
          werden,
          erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
          ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. <br/>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht
          möglich. <br/>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
          Übersendung
          von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
          widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
          unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br/>
          <br/><br/><br/>

          Website Impressum von <a href="https://www.impressum-generator.de">impressum-generator.de</a>

          <br/><br/><br/>


          This website was created out of a starter blog next.js template. For original source code visit
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-3 font-bold hover:underline"
          >GitHub
          </a>
          <br/><br/><br/>
        </Container>
      </Layout>
    </>
  )
}
