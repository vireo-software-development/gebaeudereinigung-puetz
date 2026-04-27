import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Gebäudereinigung Pütz UG",
  description: "Datenschutzerklärung der Gebäudereinigung Pütz UG. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
}

export default function DatenschutzPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <div className="prose prose-lg max-w-none">
        <h2>1. Datenschutz auf einen Blick</h2>
        
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
          wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
          werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
          aufgeführten Datenschutzerklärung.
        </p>
        
        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
          Impressum dieser Website entnehmen.
        </p>
        
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, 
          die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
          Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
          Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
        
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong><br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
          Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        
        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
          personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. 
          Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </p>
        
        <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
        
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten 
          vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
          mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben 
          und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
        </p>
        
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Gebäudereinigung Pütz UG<br />
          Brockengasse 4<br />
          52459 Inden<br />
          Deutschland
        </p>
        <p>
          Telefon: +49 2465 9983685<br />
          Fax: +49 2465 9983677<br />
          E-Mail: info@gebaeudereinigung-puetz.de
        </p>
        
        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, bleiben Ihre personenbezogenen Daten 
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine 
          Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe 
          für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten 
          Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        
        <h3>Cookies</h3>
        <p>
          Unsere Website verwendet Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. 
          Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website.
        </p>
        <p>
          Wir verwenden verschiedene Arten von Cookies auf unserer Website:
        </p>
        <ul>
          <li>
            <strong>Essentielle Cookies:</strong> Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website. Die Website kann ohne diese Cookies nicht richtig funktionieren.
          </li>
          <li>
            <strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen es uns, erweiterte Funktionalitäten und Personalisierung bereitzustellen, wie z.B. Videos oder Live-Chats. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten eingebunden haben.
          </li>
          <li>
            <strong>Analyse-Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Sie helfen uns, unsere Website zu verbessern.
          </li>
          <li>
            <strong>Marketing-Cookies:</strong> Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist, Anzeigen zu schalten, die relevant und ansprechend für den einzelnen Benutzer sind und daher wertvoller für Publisher und werbetreibende Drittparteien sind.
          </li>
        </ul>
        <p>
          Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es ist nicht gewährleistet, dass Sie auf alle Funktionen 
          dieser Website ohne Einschränkungen zugreifen können, wenn Sie entsprechende Einstellungen vornehmen.
        </p>
        <p>
          Sie können Ihre Cookie-Einstellungen jederzeit anpassen, indem Sie auf unserer Website auf "Cookie-Einstellungen" klicken oder den entsprechenden Link im Footer unserer Website verwenden.
        </p>
        
        <h2>3. Datenerfassung auf dieser Website</h2>
        
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
          die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>
        
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen 
          dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags 
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem 
          berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
          (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung 
          widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche 
          Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>
        
        <h3>Analyse-Tools und Werbung</h3>
        <p>
          Wir setzen Analyse-Tools nur mit Ihrer ausdrücklichen Einwilligung ein. Sie können diese Einwilligung jederzeit in unseren 
          Cookie-Einstellungen widerrufen.
        </p>

        <h4>Google Ads Conversion Tracking</h4>
        <p>
          Diese Website nutzt Google Ads Conversion Tracking, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, 
          Dublin 4, Irland ("Google"). Google Ads Conversion Tracking verwendet Cookies, um zu analysieren, wie Nutzer mit unserer 
          Website interagieren, wenn sie über eine Google-Anzeige auf unsere Website gelangen.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 
          lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie in unseren Cookie-Einstellungen die 
          Marketing-Cookies deaktivieren.
        </p>
        <p>
          <strong>Verarbeitete Daten:</strong> Google Ads Conversion Tracking erfasst folgende Informationen:
        </p>
        <ul>
          <li>Die Anzahl der Nutzer, die auf eine unserer Google-Anzeigen klicken</li>
          <li>Welche Aktionen Nutzer auf unserer Website durchführen (z.B. Kontaktaufnahme, Formularabgabe)</li>
          <li>Technische Informationen wie IP-Adresse, Browsertyp, Betriebssystem</li>
          <li>Informationen über das Endgerät des Nutzers</li>
        </ul>
        <p>
          <strong>Zweck:</strong> Die Daten werden verwendet, um die Wirksamkeit unserer Google-Anzeigen zu messen und zu optimieren. 
          Dies hilft uns, relevantere Anzeigen zu schalten und unsere Werbeausgaben effizienter einzusetzen.
        </p>
        <p>
          <strong>Speicherdauer:</strong> Die von Google gesammelten Daten werden in der Regel für einen Zeitraum von 90 Tagen gespeichert. 
          Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der Datenschutzerklärung von Google:{" "}
          <a 
            href="https://policies.google.com/privacy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://policies.google.com/privacy
          </a>
        </p>
        <p>
          <strong>Widerruf der Einwilligung:</strong> Sie können Ihre Einwilligung zur Verwendung von Google Ads Conversion Tracking 
          jederzeit widerrufen, indem Sie in unseren Cookie-Einstellungen die Marketing-Cookies deaktivieren. Sie finden den Link zu 
          den Cookie-Einstellungen im Footer unserer Website.
        </p>
        <p>
          <strong>Weitere Informationen:</strong> Weitere Informationen zu Google Ads Conversion Tracking finden Sie unter:{" "}
          <a 
            href="https://support.google.com/google-ads/answer/1722022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://support.google.com/google-ads/answer/1722022
          </a>
        </p>
        
        <h2>4. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. 
          Außerdem haben Sie das Recht auf Datenübertragbarkeit und Widerspruch gegen die Verarbeitung.
        </p>
        <p>
          Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen das Datenschutzrecht verstößt oder Ihre 
          datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
        </p>
        
        <div className="mt-8">
          <Link href="/" className="text-[#00C2FF] hover:underline">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
} 