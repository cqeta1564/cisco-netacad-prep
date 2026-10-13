/**
 * Cisco Networking Academy - Authentic Question Bank
 * Obsahuje reálné testové otázky z certifikačních zkoušek:
 * 1. HTML Essentials (OpenEDG / Cisco NetAcad)
 * 2. CSS Essentials (OpenEDG / Cisco NetAcad)
 * 3. JavaScript Essentials 1 - JSE 1 (OpenEDG JS Institute / Cisco NetAcad)
 */

const CERTIFICATE_CATEGORIES = {
  web: {
    id: "web",
    name: "Webové aplikace",
    shortName: "Web",
    icon: "fas fa-globe",
    color: "#38bdf8",
    description: "HTML5, CSS3 a moderní JavaScript (JSE 1 & 2)",
    certs: ["html", "css", "js", "js2"]
  },
  db: {
    id: "db",
    name: "Databázové systémy",
    shortName: "Databáze",
    icon: "fas fa-database",
    color: "#f87171",
    description: "Oracle Database Design & Database Programming With SQL",
    certs: ["oracle_dd", "oracle_sql"]
  },
  systems: {
    id: "systems",
    name: "Počítačové systémy a sítě",
    shortName: "Sítě & Systémy",
    icon: "fas fa-network-wired",
    color: "#00bceb",
    description: "NDG Linux Essentials & Cisco CCNA (ITN + SRWE)",
    certs: ["linux", "ccna_itn", "ccna_srwe"]
  },
  software: {
    id: "software",
    name: "Programové vybavení",
    shortName: "Programování",
    icon: "fab fa-python",
    color: "#3776ab",
    description: "Cisco Python Essentials 1 (PCEP)",
    certs: ["python"]
  }
};

const CERTIFICATES_DATA = {
  html: {
    id: "html",
    category: "web",
    categoryName: "Webové aplikace",
    title: "Cisco Networking Academy: HTML Essentials",
    subtitle: "Příprava na certifikaci WDE™ (Certified Entry-Level Web Developer)",
    badge: "HTML Essentials",
    icon: "fab fa-html5",
    color: "#E44D26",
    passScore: 70, // %
    timeLimit: 45, // minut
    modules: [
      { id: "html_m1", name: "Modul 1: Úvod do HTML a struktura dokumentu" },
      { id: "html_m2", name: "Modul 2: Formátování textu a struktura obsahu" },
      { id: "html_m3", name: "Modul 3: Odkazy, obrázky a multimédia" },
      { id: "html_m4", name: "Modul 4: Tabulky a formuláře" },
      { id: "html_m5", name: "Modul 5: Sémantické elementy a osvědčené postupy" }
    ],
    questions: [
      {
        id: "html_q01",
        module: "html_m1",
        question: "What does HTML stand for?",
        code: null,
        options: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Tool Machine Language"
        ],
        correct: 0,
        explanation: "HTML znamená 'HyperText Markup Language'. Je to standardní značkovací jazyk pro vytváření webových stránek."
      },
      {
        id: "html_q02",
        module: "html_m1",
        question: "Which declaration must be the very first line in an HTML5 document?",
        code: "<!DOCTYPE html>",
        options: [
          "<!DOCTYPE html>",
          "<html version=\"5.0\">",
          "<?xml version=\"1.0\"?>",
          "<doctype html5>"
        ],
        correct: 0,
        explanation: "V HTML5 je deklarace typu dokumentu velmi jednoduchá a bez rozlišování velkých/malých písmen: <!DOCTYPE html>."
      },
      {
        id: "html_q03",
        module: "html_m1",
        question: "Which element serves as the root element of an HTML document?",
        code: null,
        options: [
          "<body>",
          "<head>",
          "<html>",
          "<root>"
        ],
        correct: 2,
        explanation: "Element <html> je kořenovým (root) elementem celého HTML dokumentu. Všechny ostatní elementy jsou jeho potomky."
      },
      {
        id: "html_q04",
        module: "html_m1",
        question: "Which element contains metadata, document title, and links to stylesheets, and is NOT directly displayed in the browser viewport?",
        code: null,
        options: [
          "<body>",
          "<head>",
          "<header>",
          "<meta>"
        ],
        correct: 1,
        explanation: "Element <head> obsahuje strojově čitelná metadata, název stránky (<title>), propojení se styly (<link>) a skripty (<script>), která se nezobrazují v těle stránky."
      },
      {
        id: "html_q05",
        module: "html_m1",
        question: "Which element contains all the visible content of an HTML document that is rendered in the browser window?",
        code: null,
        options: [
          "<main>",
          "<body>",
          "<html>",
          "<content>"
        ],
        correct: 1,
        explanation: "Element <body> představuje tělo dokumentu a obsahuje veškerý viditelný obsah stránky (text, obrázky, tabulky, videa)."
      },
      {
        id: "html_q06",
        module: "html_m1",
        question: "Which of the following is the correct syntax for a comment in HTML?",
        code: null,
        options: [
          "// This is a comment",
          "/* This is a comment */",
          "<!-- This is a comment -->",
          "# This is a comment"
        ],
        correct: 2,
        explanation: "Komentáře v HTML začínají značkou <!-- a končí značkou -->. Syntaxe // a /* */ patří do JavaScriptu/CSS."
      },
      {
        id: "html_q07",
        module: "html_m1",
        question: "Which character is used to indicate an end (closing) tag in HTML?",
        code: "</p>",
        options: [
          "\\ (backslash)",
          "/ (forward slash)",
          "* (asterisk)",
          "! (exclamation mark)"
        ],
        correct: 1,
        explanation: "Ukončovací značka v HTML se zapisuje s lomítkem (forward slash '/') před názvem elementu, například </p> nebo </div>."
      },
      {
        id: "html_q08",
        module: "html_m1",
        question: "Which of the following is an example of an empty (void) element that does NOT have a closing tag in HTML5?",
        code: null,
        options: [
          "<p>",
          "<img>",
          "<a>",
          "<span>"
        ],
        correct: 1,
        explanation: "Element <img> je prázdný (void) element. Nemá ukončovací tag </img>, protože nemůže obsahovat vnořený textový ani jiný obsah."
      },
      {
        id: "html_q09",
        module: "html_m2",
        question: "Select the correct HTML element for the largest heading:",
        code: null,
        options: [
          "<h6>",
          "<head>",
          "<h1>",
          "<heading>"
        ],
        correct: 2,
        explanation: "Tag <h1> reprezentuje nejvyšší úroveň nadpisu (největší a sémanticky nejvýznamnější). <h6> je naopak nejmenší úroveň nadpisu."
      },
      {
        id: "html_q10",
        module: "html_m2",
        question: "Which HTML element is used to define a paragraph of text?",
        code: null,
        options: [
          "<para>",
          "<p>",
          "<pg>",
          "<text>"
        ],
        correct: 1,
        explanation: "Standardní tag pro odstavec textu je <p>."
      },
      {
        id: "html_q11",
        module: "html_m2",
        question: "Which of the following is the correct HTML element for inserting a single line break without creating a new paragraph?",
        code: null,
        options: [
          "<break>",
          "<lb>",
          "<br>",
          "<newline>"
        ],
        correct: 2,
        explanation: "Element <br> (break) vloží řádkový zlom na místě, kde je použit, aniž by vytvářel mezeru mezi odstavci."
      },
      {
        id: "html_q12",
        module: "html_m2",
        question: "Which tag produces a horizontal dividing line (thematic break) in an HTML document?",
        code: null,
        options: [
          "<line>",
          "<hr>",
          "<divider>",
          "<border>"
        ],
        correct: 1,
        explanation: "Element <hr> představuje horizontální čáru neboli tématický předěl mezi odstavci."
      },
      {
        id: "html_q13",
        module: "html_m2",
        question: "Which HTML tag is used to indicate strong importance, seriousness, or urgency, typically rendered in bold?",
        code: null,
        options: [
          "<bold>",
          "<b>",
          "<strong>",
          "<important>"
        ],
        correct: 2,
        explanation: "Element <strong> sémanticky označuje text vysoké důležitosti (čtečky obrazovky jej zvýrazní hlasem). Tag <b> představuje pouze stylistické ztučnění."
      },
      {
        id: "html_q14",
        module: "html_m2",
        question: "Which HTML tag is used to mark emphasized text with semantic stress, typically displayed in italics?",
        code: null,
        options: [
          "<i>",
          "<italic>",
          "<em>",
          "<stress>"
        ],
        correct: 2,
        explanation: "Element <em> představuje sémantický důraz (emphasis). Pro pouhou kurzívu bez sémantického významu se používá <i>."
      },
      {
        id: "html_q15",
        module: "html_m2",
        question: "Which tag is used to preserve both spaces and line breaks exactly as written in the HTML code?",
        code: null,
        options: [
          "<code>",
          "<pre>",
          "<format>",
          "<verbatim>"
        ],
        correct: 1,
        explanation: "Element <pre> (preformatted text) zachovává všechny mezery, tabulátory i odřádkování přesně tak, jak jsou zapsány ve zdrojovém kódu."
      },
      {
        id: "html_q16",
        module: "html_m3",
        question: "Which HTML tag is used to create a hyperlink?",
        code: null,
        options: [
          "<link>",
          "<a>",
          "<href>",
          "<url>"
        ],
        correct: 1,
        explanation: "Element <a> (anchor) se používá k vytváření hypertextových odkazů na jiné stránky nebo kotvy."
      },
      {
        id: "html_q17",
        module: "html_m3",
        question: "Which attribute specifies the destination URL of a hyperlink?",
        code: "<a [???]=\"https://cisco.com\">Visit Cisco</a>",
        options: [
          "src",
          "url",
          "href",
          "link"
        ],
        correct: 2,
        explanation: "Atribut 'href' (hypertext reference) určuje cílovou adresu URL odkazu."
      },
      {
        id: "html_q18",
        module: "html_m3",
        question: "Which attribute and value opens a hyperlink in a new browser tab or window?",
        code: null,
        options: [
          "target=\"_new\"",
          "target=\"_blank\"",
          "window=\"new\"",
          "open=\"blank\""
        ],
        correct: 1,
        explanation: "Hodnota target=\"_blank\" způsobí otevření odkazu v nové záložce nebo okně prohlížeče."
      },
      {
        id: "html_q19",
        module: "html_m3",
        question: "Which attribute is REQUIRED for the <img> element to provide alternative text for accessibility and screen readers?",
        code: "<img src=\"logo.png\" [???]=\"Cisco Logo\">",
        options: [
          "title",
          "alt",
          "description",
          "caption"
        ],
        correct: 1,
        explanation: "Atribut 'alt' je povinný pro přístupnost (accessibility). Poskytuje textový popis obrázku pro asistenční technologie a pro případy, kdy se obrázek nenačte."
      },
      {
        id: "html_q20",
        module: "html_m3",
        question: "Which tag is used to create an ordered (numbered) list?",
        code: null,
        options: [
          "<ul>",
          "<ol>",
          "<nl>",
          "<list type=\"ordered\">"
        ],
        correct: 1,
        explanation: "Tag <ol> označuje 'ordered list' (číslovaný seznam). Položky jsou automaticky číslovány."
      },
      {
        id: "html_q21",
        module: "html_m3",
        question: "Which tag is used to create an unordered (bulleted) list?",
        code: null,
        options: [
          "<ol>",
          "<ul>",
          "<bl>",
          "<bullet>"
        ],
        correct: 1,
        explanation: "Tag <ul> označuje 'unordered list' (nečíslovaný/odrážkový seznam)."
      },
      {
        id: "html_q22",
        module: "html_m3",
        question: "Which tag defines each individual item inside an ordered or unordered list?",
        code: null,
        options: [
          "<item>",
          "<li>",
          "<it>",
          "<list-item>"
        ],
        correct: 1,
        explanation: "Tag <li> (list item) reprezentuje jednotlivou položku v seznamu <ol> i <ul>."
      },
      {
        id: "html_q23",
        module: "html_m3",
        question: "Which HTML5 tag is used to embed video files natively in the browser?",
        code: null,
        options: [
          "<media>",
          "<movie>",
          "<video>",
          "<film>"
        ],
        correct: 2,
        explanation: "V HTML5 se pro přehrávání videa používá nativní element <video>."
      },
      {
        id: "html_q24",
        module: "html_m3",
        question: "Which attribute adds video playback features such as play, pause, volume, and fullscreen buttons?",
        code: "<video src=\"clip.mp4\" [???]></video>",
        options: [
          "buttons",
          "controls",
          "player",
          "interface"
        ],
        correct: 1,
        explanation: "Atribut 'controls' zapíná zobrazení standardních ovládacích prvků přehrávače v prohlížeči."
      },
      {
        id: "html_q25",
        module: "html_m3",
        question: "Which tag is used to embed another HTML document (or external web page) inside the current document?",
        code: null,
        options: [
          "<embed-page>",
          "<frame>",
          "<iframe>",
          "<window>"
        ],
        correct: 2,
        explanation: "Element <iframe> (inline frame) umožňuje vložit do stránky cizí HTML dokument, mapu, video z YouTube apod."
      },
      {
        id: "html_q26",
        module: "html_m4",
        question: "Which tag is used to create a table in HTML?",
        code: null,
        options: [
          "<grid>",
          "<table>",
          "<tab>",
          "<tbl>"
        ],
        correct: 1,
        explanation: "Element <table> je základním kontejnerem pro definici tabulky."
      },
      {
        id: "html_q27",
        module: "html_m4",
        question: "Which tag defines a row in an HTML table?",
        code: null,
        options: [
          "<row>",
          "<td>",
          "<tr>",
          "<th>"
        ],
        correct: 2,
        explanation: "Element <tr> (table row) definuje řádek tabulky."
      },
      {
        id: "html_q28",
        module: "html_m4",
        question: "Which tag defines a standard data cell in an HTML table?",
        code: null,
        options: [
          "<cell>",
          "<td>",
          "<tr>",
          "<tc>"
        ],
        correct: 1,
        explanation: "Element <td> (table data) definuje běžnou datovou buňku v řádku tabulky."
      },
      {
        id: "html_q29",
        module: "html_m4",
        question: "Which tag defines a table header cell (usually displayed in bold and centered by default)?",
        code: null,
        options: [
          "<head>",
          "<header>",
          "<th>",
          "<theader>"
        ],
        correct: 2,
        explanation: "Element <th> (table header) definuje hlavičkovou buňku, která je ve výchozím stavu tučná a zarovnaná na střed."
      },
      {
        id: "html_q30",
        module: "html_m4",
        question: "Which attribute is used to make a table cell span across multiple columns?",
        code: "<td [???]=\"2\">Merged Columns</td>",
        options: [
          "rowspan",
          "colspan",
          "colmerge",
          "span"
        ],
        correct: 1,
        explanation: "Atribut 'colspan' slouží ke sloučení více sloupců v rámci jedné buňky. 'rowspan' slouží ke sloučení řádků."
      },
      {
        id: "html_q31",
        module: "html_m4",
        question: "Which tag is used to create an interactive form for collecting user input?",
        code: null,
        options: [
          "<input-group>",
          "<form>",
          "<fieldset>",
          "<submit>"
        ],
        correct: 1,
        explanation: "Element <form> vytváří formulář, který sdružuje ovládací prvky (inputy, selecty, tlačítka) pro odeslání dat na server."
      },
      {
        id: "html_q32",
        module: "html_m4",
        question: "Which attribute of the <form> element specifies the URL destination where submitted form data will be processed?",
        code: "<form [???]=\"/submit-form.php\" method=\"POST\">",
        options: [
          "href",
          "target",
          "action",
          "destination"
        ],
        correct: 2,
        explanation: "Atribut 'action' udává adresu URL skriptu na serveru, který má zpracovat odeslaná data formuláře."
      },
      {
        id: "html_q33",
        module: "html_m4",
        question: "Which <input> type creates a masked text field where entered characters are hidden (obscured)?",
        code: null,
        options: [
          "<input type=\"secret\">",
          "<input type=\"hidden\">",
          "<input type=\"password\">",
          "<input type=\"mask\">"
        ],
        correct: 2,
        explanation: "<input type=\"password\"> maskuje zadávané znaky (zobrazuje tečky nebo hvězdičky) kvůli ochraně hesla před zrakem okolí."
      },
      {
        id: "html_q34",
        module: "html_m4",
        question: "Which <input> type allows a user to select multiple independent options from a group?",
        code: null,
        options: [
          "radio",
          "checkbox",
          "select",
          "multiple"
        ],
        correct: 1,
        explanation: "Typ 'checkbox' (zaškrtávací pole) umožňuje uživateli vybrat libovolný počet možností (včetně žádné nebo všech). 'radio' dovoluje vybrat pouze jednu možnost."
      },
      {
        id: "html_q35",
        module: "html_m4",
        question: "Which attribute associates a <label> with a specific form control by referencing the control's unique ID?",
        code: "<label [???]=\"username\">Username</label>\n<input type=\"text\" id=\"username\">",
        options: [
          "for",
          "id",
          "name",
          "target"
        ],
        correct: 0,
        explanation: "Atribut 'for' v elementu <label> propojuje popisek s konkrétním formulářovým prvkem pomocí jeho hodnoty v atributu 'id'."
      },
      {
        id: "html_q36",
        module: "html_m4",
        question: "Which attribute specifies that an input field MUST be filled out before submitting the form?",
        code: "<input type=\"text\" [???]>",
        options: [
          "validate",
          "mandatory",
          "required",
          "must-fill"
        ],
        correct: 2,
        explanation: "Atribut 'required' je boolean atribut, který prohlížeči nařizuje nedovolit odeslání formuláře, pokud je toto pole prázdné."
      },
      {
        id: "html_q37",
        module: "html_m4",
        question: "Which attribute provides a temporary hint or example text inside an input field that disappears when the user starts typing?",
        code: "<input type=\"email\" [???]=\"user@example.com\">",
        options: [
          "value",
          "tooltip",
          "placeholder",
          "hint"
        ],
        correct: 2,
        explanation: "Atribut 'placeholder' zobrazuje šedý nápovědný text uvnitř pole, který po kliknutí a psaní zmizí."
      },
      {
        id: "html_q38",
        module: "html_m4",
        question: "Which tag creates a drop-down selection list in an HTML form?",
        code: null,
        options: [
          "<dropdown>",
          "<list>",
          "<select>",
          "<picker>"
        ],
        correct: 2,
        explanation: "Tag <select> vytváří rozbalovací nabídku, jejíž položky jsou definovány pomocí značek <option>."
      },
      {
        id: "html_q39",
        module: "html_m4",
        question: "Which tag is used to group related form controls together visually and semantically?",
        code: null,
        options: [
          "<group>",
          "<formgroup>",
          "<fieldset>",
          "<container>"
        ],
        correct: 2,
        explanation: "Element <fieldset> seskupuje související formulářové prvky a vizuálně je ohraničuje rámečkem."
      },
      {
        id: "html_q40",
        module: "html_m4",
        question: "Which tag provides a caption or title for a <fieldset> element?",
        code: null,
        options: [
          "<title>",
          "<caption>",
          "<legend>",
          "<label>"
        ],
        correct: 2,
        explanation: "Element <legend> slouží jako popisek (nadpis) ohraničené skupiny prvků uvnitř <fieldset>."
      },
      {
        id: "html_q41",
        module: "html_m5",
        question: "Which semantic element is specifically designed to contain major navigation links for a website?",
        code: null,
        options: [
          "<navigate>",
          "<menu>",
          "<nav>",
          "<links>"
        ],
        correct: 2,
        explanation: "Element <nav> sémanticky označuje sekci obsahující navigační odkazy na jiné části webu nebo stránky."
      },
      {
        id: "html_q42",
        module: "html_m5",
        question: "Which semantic element represents a self-contained composition that could be independently distributed or reused (such as a blog post or news story)?",
        code: null,
        options: [
          "<section>",
          "<article>",
          "<post>",
          "<block>"
        ],
        correct: 1,
        explanation: "Element <article> představuje samostatný, nezávislý obsah (článek na blogu, zprávu, komentář), který dává smysl i vytržený z kontextu stránky."
      },
      {
        id: "html_q43",
        module: "html_m5",
        question: "Which semantic element represents content tangentially related to the content around it, such as a sidebar or pull quote?",
        code: null,
        options: [
          "<sidebar>",
          "<aside>",
          "<secondary>",
          "<extra>"
        ],
        correct: 1,
        explanation: "Element <aside> označuje obsah nepřímo související s hlavním obsahem (postranní panel, vysvětlivky, reklamy)."
      },
      {
        id: "html_q44",
        module: "html_m5",
        question: "What is the primary difference between a <div> and a <span> element?",
        code: null,
        options: [
          "<div> is an inline container, while <span> is a block container",
          "<div> is a block-level container, while <span> is an inline container",
          "<div> has semantic meaning, while <span> does not",
          "<span> can contain <div>, but <div> cannot contain <span>"
        ],
        correct: 1,
        explanation: "<div> je nesémantický blokový kontejner (začíná na novém řádku a zabírá celou šířku), zatímco <span> je řádkový (inline) kontejner pro část textu."
      },
      {
        id: "html_q45",
        module: "html_m5",
        question: "Which attribute is used to uniquely identify exactly ONE element within the entire HTML document?",
        code: null,
        options: [
          "class",
          "name",
          "id",
          "key"
        ],
        correct: 2,
        explanation: "Atribut 'id' musí být unikátní v celém dokumentu — žádné dva elementy na jedné stránce nesmí mít stejné id. Atribut 'class' naopak může sdílet více elementů."
      }
    ]
  },

  css: {
    id: "css",
    category: "web",
    categoryName: "Webové aplikace",
    title: "Cisco Networking Academy: CSS Essentials",
    subtitle: "Příprava na certifikaci WDA™ (Certified Associate Web Developer)",
    badge: "CSS Essentials",
    icon: "fab fa-css3-alt",
    color: "#264DE4",
    passScore: 70, // %
    timeLimit: 45, // minut
    modules: [
      { id: "css_m1", name: "Modul 1: Úvod do CSS a syntaxe" },
      { id: "css_m2", name: "Modul 2: Selektory, kaskáda a specificita" },
      { id: "css_m3", name: "Modul 3: Box Model, rozměry a typografie" },
      { id: "css_m4", name: "Modul 4: Pozicování a layouty" },
      { id: "css_m5", name: "Modul 5: Moderní layouty (Flexbox, Grid) a responzivita" }
    ],
    questions: [
      {
        id: "css_q01",
        module: "css_m1",
        question: "What does CSS stand for?",
        code: null,
        options: [
          "Cascading Style Sheets",
          "Colorful Style Sheets",
          "Computer Style Sheets",
          "Creative Styling Syntax"
        ],
        correct: 0,
        explanation: "CSS znamená 'Cascading Style Sheets' (kaskádové styly). Slouží k vizuálnímu formátování a rozvržení HTML dokumentů."
      },
      {
        id: "css_q02",
        module: "css_m1",
        question: "Where in an HTML document is the correct place to reference an external style sheet using the <link> tag?",
        code: null,
        options: [
          "At the end of the <body> section",
          "In the <head> section",
          "Immediately before the <html> tag",
          "In the <footer> section"
        ],
        correct: 1,
        explanation: "Externí styly se správně připojují uvnitř sekce <head> pomocí značky <link rel=\"stylesheet\" href=\"styles.css\">."
      },
      {
        id: "css_q03",
        module: "css_m1",
        question: "Which HTML tag is used to define an internal style sheet?",
        code: null,
        options: [
          "<css>",
          "<script>",
          "<style>",
          "<styling>"
        ],
        correct: 2,
        explanation: "Interní styly se zapisují do elementu <style>, který bývá typicky umístěn v hlavičce <head>."
      },
      {
        id: "css_q04",
        module: "css_m1",
        question: "Which HTML attribute is used to define inline styles directly on a specific element?",
        code: "<h1 [???]=\"color: blue;\">Hello</h1>",
        options: [
          "class",
          "font",
          "style",
          "styles"
        ],
        correct: 2,
        explanation: "Pro přímý inline styl se používá HTML atribut 'style'."
      },
      {
        id: "css_q05",
        module: "css_m1",
        question: "Which of the following demonstrates the correct CSS syntax?",
        code: null,
        options: [
          "body:color=black;",
          "{body;color:black;}",
          "body {color: black;}",
          "style: {body:color=black;}"
        ],
        correct: 2,
        explanation: "Správná syntaxe CSS je: selektor { vlastnost: hodnota; }. Tedy např. body {color: black;}."
      },
      {
        id: "css_q06",
        module: "css_m1",
        question: "How do you insert a comment in a CSS file?",
        code: null,
        options: [
          "// this is a comment",
          "/* this is a comment */",
          "<!-- this is a comment -->",
          "# this is a comment"
        ],
        correct: 1,
        explanation: "V CSS se komentáře píší výhradně mezi značky /* a */."
      },
      {
        id: "css_q07",
        module: "css_m1",
        question: "Which property is used to change the background color of an element?",
        code: null,
        options: [
          "bgcolor",
          "color",
          "background-color",
          "background-style"
        ],
        correct: 2,
        explanation: "Vlastnost 'background-color' nastavuje barvu pozadí. Vlastnost 'color' nastavuje barvu popředí (textu)."
      },
      {
        id: "css_q08",
        module: "css_m1",
        question: "Which CSS property is used to change the text color of an element?",
        code: null,
        options: [
          "text-color",
          "fgcolor",
          "color",
          "font-color"
        ],
        correct: 2,
        explanation: "V CSS se barva textu definuje jednoduše vlastností 'color'."
      },
      {
        id: "css_q09",
        module: "css_m2",
        question: "How do you select an element with id=\"intro\" in CSS?",
        code: null,
        options: [
          ".intro",
          "#intro",
          "*intro",
          "id.intro"
        ],
        correct: 1,
        explanation: "ID selektor se v CSS zapisuje se symbolem mřížky (#), tedy #intro."
      },
      {
        id: "css_q10",
        module: "css_m2",
        question: "How do you select all elements with the class name \"button\" in CSS?",
        code: null,
        options: [
          "#button",
          ".button",
          "button",
          "*button"
        ],
        correct: 1,
        explanation: "Třídový selektor (class) se v CSS uvozuje tečkou (.), tedy .button. Zápis bez tečky 'button' by cílil na HTML tag <button>."
      },
      {
        id: "css_q11",
        module: "css_m2",
        question: "Which selector matches ALL elements on a web page?",
        code: null,
        options: [
          "all",
          "%",
          "*",
          ":root"
        ],
        correct: 2,
        explanation: "Hvězdička (*) je univerzální selektor (universal selector), který vybere všechny elementy v dokumentu."
      },
      {
        id: "css_q12",
        module: "css_m2",
        question: "How do you select all <p> elements that are descendants inside a <div> element?",
        code: null,
        options: [
          "div + p",
          "div > p",
          "div p",
          "div.p"
        ],
        correct: 2,
        explanation: "Selektor potomka (descendant selector) se zapisuje mezerou mezi selektory: 'div p'. Vybere všechny <p> na libovolné úrovni zanoření v <div>."
      },
      {
        id: "css_q13",
        module: "css_m2",
        question: "Which combinator selects only <p> elements that are DIRECT children of a <div> element?",
        code: null,
        options: [
          "div p",
          "div > p",
          "div + p",
          "div ~ p"
        ],
        correct: 1,
        explanation: "Znak '>' je selektor přímého potomka (child combinator). Vybere pouze ty <p>, jejichž bezprostředním rodičem je <div>."
      },
      {
        id: "css_q14",
        module: "css_m2",
        question: "Which combinator selects a <p> element that immediately follows an <h1> element as an adjacent sibling?",
        code: null,
        options: [
          "h1 > p",
          "h1 ~ p",
          "h1 + p",
          "h1 & p"
        ],
        correct: 2,
        explanation: "Kombinátor '+' (adjacent sibling) vybere element <p>, který bezprostředně sousedí a následuje po <h1>."
      },
      {
        id: "css_q15",
        module: "css_m2",
        question: "Which pseudo-class is used to apply styles when a user points their mouse cursor over an element?",
        code: "a[???] { color: red; }",
        options: [
          ":active",
          ":focus",
          ":hover",
          ":visited"
        ],
        correct: 2,
        explanation: "Pseudotřída ':hover' se aktivuje, jakmile uživatel najede myší nad prvek."
      },
      {
        id: "css_q16",
        module: "css_m2",
        question: "Which pseudo-class applies when an interactive element (such as a text input or button) receives keyboard or click focus?",
        code: "input[???] { border-color: blue; }",
        options: [
          ":hover",
          ":active",
          ":focus",
          ":target"
        ],
        correct: 2,
        explanation: "Pseudotřída ':focus' se aktivuje v okamžiku, kdy prvek získá fokus (např. kliknutím nebo klávesou Tab)."
      },
      {
        id: "css_q17",
        module: "css_m2",
        question: "In CSS specificity, which of the following has the HIGHEST specificity value?",
        code: null,
        options: [
          "ID selector (#nav)",
          "Class selector (.nav)",
          "Element selector (nav)",
          "Inline style attribute (style=\"...\")"
        ],
        correct: 3,
        explanation: "Inline styl zapsaný přímo v HTML atributu style=\"...\" má vyšší specificitu než selektory ID, třídy i elementy."
      },
      {
        id: "css_q18",
        module: "css_m2",
        question: "Which keyword can be added to a CSS declaration to give it top priority, overriding regular cascade specificity?",
        code: "p { color: red [???]; }",
        options: [
          "!override",
          "!important",
          "!priority",
          "!default"
        ],
        correct: 1,
        explanation: "Klíčové slovo '!important' přebíjí běžná pravidla kaskády a dává dané deklaraci nejvyšší možnou přednost."
      },
      {
        id: "css_q19",
        module: "css_m3",
        question: "What are the four components of the CSS Box Model, listed from the innermost to the outermost layer?",
        code: null,
        options: [
          "Margin, Border, Padding, Content",
          "Content, Padding, Border, Margin",
          "Content, Border, Padding, Margin",
          "Padding, Content, Border, Margin"
        ],
        correct: 1,
        explanation: "CSS Box Model se skládá z vrstev: Content (obsah) -> Padding (vnitřní výplň) -> Border (rámeček) -> Margin (vnější okraj)."
      },
      {
        id: "css_q20",
        module: "css_m3",
        question: "Which property is used to create space INSIDE an element, between the content and the border?",
        code: null,
        options: [
          "margin",
          "spacing",
          "padding",
          "gap"
        ],
        correct: 2,
        explanation: "Vlastnost 'padding' nastavuje vnitřní odsazení mezi samotným obsahem a rámečkem elementu."
      },
      {
        id: "css_q21",
        module: "css_m3",
        question: "Which property is used to create space OUTSIDE an element's border, separating it from adjacent elements?",
        code: null,
        options: [
          "padding",
          "margin",
          "offset",
          "border-spacing"
        ],
        correct: 1,
        explanation: "Vlastnost 'margin' vytváří vnější odstup mezi rámečkem elementu a okolními sousedními prvky."
      },
      {
        id: "css_q22",
        module: "css_m3",
        question: "What is the effect of setting 'box-sizing: border-box;' on an element?",
        code: "box-sizing: border-box;",
        options: [
          "Width and height include content only; padding and border add to the total size",
          "Width and height include content, padding, and border within the specified size",
          "It adds a visible border to every side of the element",
          "It removes all margins from the element"
        ],
        correct: 1,
        explanation: "Při 'box-sizing: border-box' se zadaná šířka a výška (width/height) počítá včetně paddingu a rámečku. Element se tedy při přidání paddingu neroztahuje."
      },
      {
        id: "css_q23",
        module: "css_m3",
        question: "How do you horizontally center a block-level element with a specified width inside its parent?",
        code: null,
        options: [
          "text-align: center;",
          "align: center;",
          "margin: 0 auto;",
          "position: center;"
        ],
        correct: 2,
        explanation: "Nastavením 'margin: 0 auto;' (nebo 'margin: auto;') na blokovém elementu se zadanou šířkou se automaticky vycentruje horizontálně."
      },
      {
        id: "css_q24",
        module: "css_m3",
        question: "Which CSS property is used to change the font typeface of text?",
        code: null,
        options: [
          "font-style",
          "font-family",
          "font-weight",
          "typeface"
        ],
        correct: 1,
        explanation: "Vlastnost 'font-family' určuje rodinu písma (např. Arial, Helvetica, sans-serif)."
      },
      {
        id: "css_q25",
        module: "css_m3",
        question: "Which property makes text bold in CSS?",
        code: null,
        options: [
          "font-style: bold;",
          "font-weight: bold;",
          "text-weight: bold;",
          "font-bold: true;"
        ],
        correct: 1,
        explanation: "Tučnost písma se nastavuje vlastností 'font-weight: bold;' (nebo numericky 700)."
      },
      {
        id: "css_q26",
        module: "css_m3",
        question: "Which property is used to control the size of text in CSS?",
        code: null,
        options: [
          "text-size",
          "font-size",
          "font-height",
          "size"
        ],
        correct: 1,
        explanation: "Velikost písma se nastavuje vlastností 'font-size' (např. 16px, 1.2rem, 100%)."
      },
      {
        id: "css_q27",
        module: "css_m3",
        question: "Which CSS unit is relative to the font-size of the ROOT (<html>) element?",
        code: null,
        options: [
          "em",
          "rem",
          "vh",
          "px"
        ],
        correct: 1,
        explanation: "'rem' znamená 'root em' a je relativní vůči velikosti písma kořenového elementu <html>. Na rozdíl od 'em' se nekumuluje zanořováním."
      },
      {
        id: "css_q28",
        module: "css_m3",
        question: "Which property is used to add rounded corners to an element's border?",
        code: null,
        options: [
          "corner-radius",
          "border-style",
          "border-radius",
          "border-curve"
        ],
        correct: 2,
        explanation: "Vlastnost 'border-radius' definuje zaoblení rohů rámečku elementu."
      },
      {
        id: "css_q29",
        module: "css_m4",
        question: "What is the DEFAULT value of the 'position' property in CSS?",
        code: null,
        options: [
          "relative",
          "absolute",
          "static",
          "fixed"
        ],
        correct: 2,
        explanation: "Výchozí hodnotou vlastnosti position je 'static'. Element je umístěn v běžném toku dokumentu a nereaguje na vlastnosti top, bottom, left, right."
      },
      {
        id: "css_q30",
        module: "css_m4",
        question: "Which position value positions an element relative to the browser VIEWPORT, keeping it at the exact same screen location during scrolling?",
        code: null,
        options: [
          "absolute",
          "sticky",
          "fixed",
          "relative"
        ],
        correct: 2,
        explanation: "Při 'position: fixed;' je element pozicován vůči oknu prohlížeče (viewportu) a zůstává na stejném místě i při posouvání stránky."
      },
      {
        id: "css_q31",
        module: "css_m4",
        question: "Which position value positions an element relative to its closest positioned ancestor (an ancestor with position other than static)?",
        code: null,
        options: [
          "relative",
          "fixed",
          "absolute",
          "sticky"
        ],
        correct: 2,
        explanation: "'position: absolute;' vyjme element z běžného toku a umístí jej vůči nejbližšímu předkovi, který má position jinou než static."
      },
      {
        id: "css_q32",
        module: "css_m4",
        question: "Which property is used to control the 3D stacking order of overlapping positioned elements?",
        code: null,
        options: [
          "layer",
          "z-index",
          "stack-order",
          "depth"
        ],
        correct: 1,
        explanation: "Vlastnost 'z-index' určuje pořadí překrývání pozicovaných elementů podél osy Z. Vyšší hodnota znamená zobrazení více v popředí."
      },
      {
        id: "css_q33",
        module: "css_m4",
        question: "What is the crucial difference between 'display: none;' and 'visibility: hidden;'?",
        code: null,
        options: [
          "'display: none;' makes text transparent, while 'visibility: hidden;' collapses the element",
          "'display: none;' completely removes the element from document layout flow, while 'visibility: hidden;' hides it but preserves its space",
          "There is no difference between them",
          "'visibility: hidden;' only works on images"
        ],
        correct: 1,
        explanation: "'display: none' element zcela odstraní z layoutu (nezabírá žádné místo). 'visibility: hidden' element pouze zneviditelní, ale jeho původní místo v layoutu zůstane vyhrazené."
      },
      {
        id: "css_q34",
        module: "css_m4",
        question: "Which property defines how content that exceeds an element's defined width or height should be handled?",
        code: null,
        options: [
          "clip",
          "overflow",
          "scroll-behavior",
          "exceed"
        ],
        correct: 1,
        explanation: "Vlastnost 'overflow' (hodnoty visible, hidden, scroll, auto) určuje, jak naložit s obsahem, který přeteče přes rozměry elementu."
      },
      {
        id: "css_q35",
        module: "css_m4",
        question: "Which property is used to specify that no floating elements are allowed on either side of an element?",
        code: null,
        options: [
          "float: none;",
          "clear: both;",
          "clearfix: true;",
          "overflow: clear;"
        ],
        correct: 1,
        explanation: "Pravidlo 'clear: both;' zabrání tomu, aby kolem elementu obtékaly jakékoliv předchozí plovoucí prvky zleva i zprava."
      },
      {
        id: "css_q36",
        module: "css_m5",
        question: "Which declaration turns an HTML container element into a Flex container?",
        code: null,
        options: [
          "display: flexbox;",
          "flex: true;",
          "display: flex;",
          "layout: flex;"
        ],
        correct: 2,
        explanation: "'display: flex;' přemění rodičovský element na flexbox kontejner a jeho bezprostřední potomky na flex prvky."
      },
      {
        id: "css_q37",
        module: "css_m5",
        question: "In CSS Flexbox, which property aligns items along the MAIN axis?",
        code: null,
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "main-align"
        ],
        correct: 1,
        explanation: "Vlastnost 'justify-content' zarovnává flex prvky podél hlavní osy (hlavní osa je ve výchozím stavu vodorovná řada)."
      },
      {
        id: "css_q38",
        module: "css_m5",
        question: "In CSS Flexbox, which property aligns items along the CROSS axis?",
        code: null,
        options: [
          "justify-content",
          "align-items",
          "cross-align",
          "flex-cross"
        ],
        correct: 1,
        explanation: "Vlastnost 'align-items' zarovnává položky podél příčné osy (cross axis, ve výchozím nastavení svislé)."
      },
      {
        id: "css_q39",
        module: "css_m5",
        question: "Which Flexbox property specifies the direction of the main axis (e.g., in a row or in a column)?",
        code: null,
        options: [
          "flex-orientation",
          "flex-direction",
          "flex-flow-axis",
          "direction"
        ],
        correct: 1,
        explanation: "Vlastnost 'flex-direction' určuje směr hlavní osy (možné hodnoty: row, row-reverse, column, column-reverse)."
      },
      {
        id: "css_q40",
        module: "css_m5",
        question: "Which modern CSS property defines the spacing (gutters) between grid cells or flex items?",
        code: null,
        options: [
          "spacing",
          "margin-between",
          "gap",
          "gutter"
        ],
        correct: 2,
        explanation: "Vlastnost 'gap' (dříve grid-gap) nastavuje mezeru mezi řádky a sloupci ve Flexboxu a CSS Gridu."
      },
      {
        id: "css_q41",
        module: "css_m5",
        question: "Which rule is used in CSS to apply styles only when certain device characteristics (such as screen width) match?",
        code: null,
        options: [
          "@device",
          "@responsive",
          "@media",
          "@screen"
        ],
        correct: 2,
        explanation: "Pravidlo '@media' (media query) slouží k tvorbě responzivního designu podle rozlišení obrazovky a typu zařízení."
      },
      {
        id: "css_q42",
        module: "css_m5",
        question: "Which media query syntax correctly targets screens with a maximum width of 768px?",
        code: null,
        options: [
          "@media (max-width: 768px)",
          "@media screen <= 768px",
          "@media {width: 768px}",
          "@media query (screen-width: 768px)"
        ],
        correct: 0,
        explanation: "Správný zápis je: @media (max-width: 768px) { ... } nebo @media screen and (max-width: 768px)."
      },
      {
        id: "css_q43",
        module: "css_m5",
        question: "In CSS Grid, which property is used to define the number and sizes of the columns?",
        code: null,
        options: [
          "grid-columns",
          "grid-template-columns",
          "grid-column-layout",
          "columns-template"
        ],
        correct: 1,
        explanation: "Vlastnost 'grid-template-columns' definuje počet a rozměry jednotlivých sloupců v gridovém kontejneru."
      },
      {
        id: "css_q44",
        module: "css_m5",
        question: "Which property in CSS can be used to display or hide the border around an empty table cell with no content?",
        code: null,
        options: [
          "empty-cells",
          "border-collapse",
          "table-layout",
          "cell-spacing"
        ],
        correct: 0,
        explanation: "Vlastnost 'empty-cells' (s hodnotami show / hide) určuje, zda se má kolem prázdné buňky bez obsahu vykreslit rámeček."
      },
      {
        id: "css_q45",
        module: "css_m5",
        question: "Which color representation allows setting transparency using an Alpha channel value between 0.0 and 1.0?",
        code: null,
        options: [
          "rgb(255, 0, 0)",
          "rgba(255, 0, 0, 0.5)",
          "#FF0000",
          "cmyk(0, 100, 100, 0)"
        ],
        correct: 1,
        explanation: "Funkce 'rgba()' přidává čtvrtý parametr pro alfa kanál (průhlednost) od 0.0 (zcela průhledný) do 1.0 (zcela neprůhledný)."
      }
    ]
  },

  js: {
    id: "js",
    category: "web",
    categoryName: "Webové aplikace",
    title: "Cisco Networking Academy: JavaScript Essentials 1",
    subtitle: "Příprava na certifikaci JSE – Certified Entry-Level JavaScript Programmer (JSE-40-01)",
    badge: "JavaScript Essentials 1",
    icon: "fab fa-js-square",
    color: "#F7DF1E",
    passScore: 70, // %
    timeLimit: 40, // minut (30 otázek v reálné zkoušce)
    modules: [
      { id: "js_m1", name: "Blok 1: Úvod do JavaScriptu a prostředí" },
      { id: "js_m2", name: "Blok 2: Proměnné, datové typy a přetypování" },
      { id: "js_m3", name: "Blok 3: Operátory a interakce s uživatelem" },
      { id: "js_m4", name: "Blok 4: Složené typy (Objekty a pole)" },
      { id: "js_m5", name: "Blok 5: Řízení toku (Podmínky a cykly)" },
      { id: "js_m6", name: "Blok 6: Funkce, výjimky a ladění" }
    ],
    questions: [
      {
        id: "js_q01",
        module: "js_m5",
        question: "Which of the following loop instructions checks the loop continuation condition only after the iteration has been completed?",
        code: null,
        options: [
          "for",
          "while",
          "do ... while",
          "for ... of"
        ],
        correct: 2,
        explanation: "Cyklus 'do ... while' je tzv. post-test cyklus. Tělo cyklu proběhne nejprve a podmínka se vyhodnocuje až na konci každé iterace. Tělo cyklu proto proběhne vždy alespoň jednou."
      },
      {
        id: "js_q02",
        module: "js_m2",
        question: "What operator do we use to check the data type of a variable or expression in JavaScript?",
        code: null,
        options: [
          "type",
          "typeof",
          "variabletype",
          "showtype"
        ],
        correct: 1,
        explanation: "Operátor 'typeof' je unární operátor, který vrací řetězec indikující datový typ předaného operandu (např. 'number', 'string', 'boolean', 'undefined', 'object')."
      },
      {
        id: "js_q03",
        module: "js_m2",
        question: "What is the return value of 'typeof null' in JavaScript?",
        code: "console.log(typeof null);",
        options: [
          "\"null\"",
          "\"undefined\"",
          "\"object\"",
          "\"boolean\""
        ],
        correct: 2,
        explanation: "typeof null vrací řetězec \"object\". Jde o známou historickou chybu v návrhu jazyka JavaScript, která byla kvůli zpětné kompatibilitě zachována."
      },
      {
        id: "js_q04",
        module: "js_m2",
        question: "What is the return value of 'typeof NaN' in JavaScript?",
        code: "console.log(typeof NaN);",
        options: [
          "\"NaN\"",
          "\"undefined\"",
          "\"number\"",
          "\"null\""
        ],
        correct: 2,
        explanation: "NaN (Not-a-Number) je speciální numerická hodnota reprezentující neplatný výsledek matematické operace. Její typ je \"number\"."
      },
      {
        id: "js_q05",
        module: "js_m2",
        question: "Which of the following declarations using the String type is incorrect and results in a SyntaxError?",
        code: null,
        options: [
          "let msg = \"The vessel 'Mars' called at the port\";",
          "let msg = 'The vessel \"Mars\" called at the port\';",
          "let msg = `The vessel \"Mars\" called at the port`;",
          "let msg = 'The vessel \"Mars\" called at the port\";"
        ],
        correct: 3,
        explanation: "Možnost let msg = 'The vessel \"Mars\" called at the port\"; začíná jednoduchou uvozovkou ('), ale končí dvojitou uvozovkou (\"). Uvozovky musí být stejného typu."
      },
      {
        id: "js_q06",
        module: "js_m2",
        question: "What is the output of the following code snippet?",
        code: "let a = 1 / 0;\nconsole.log(a);\nconsole.log(typeof a);",
        options: [
          "Error / undefined",
          "NaN / number",
          "Infinity / number",
          "0 / number"
        ],
        correct: 2,
        explanation: "Dělení nulou v JavaScriptu nevyhazuje výjimku, ale vrací hodnotu Infinity. Její typeof je \"number\"."
      },
      {
        id: "js_q07",
        module: "js_m2",
        question: "What is the output of the following code snippet?",
        code: "let s = \"it's definitely not a number\";\nlet n = s * 10;\nconsole.log(n);",
        options: [
          "0",
          "undefined",
          "NaN",
          "TypeError"
        ],
        correct: 2,
        explanation: "Při násobení řetězce, který nelze převést na číslo, vrátí operace NaN (Not-a-Number)."
      },
      {
        id: "js_q08",
        module: "js_m3",
        question: "What is the result of the strict comparison '10 === \"10\"'?",
        code: "console.log(10 === \"10\");",
        options: [
          "true",
          "false",
          "undefined",
          "NaN"
        ],
        correct: 1,
        explanation: "Operátor striktní rovnosti === porovnává hodnotu i datový typ bez přetypování. Protože number !== string, výsledek je false."
      },
      {
        id: "js_q09",
        module: "js_m3",
        question: "What is the result of the loose comparison '10 == \"10\"'?",
        code: "console.log(10 == \"10\");",
        options: [
          "true",
          "false",
          "TypeError",
          "NaN"
        ],
        correct: 0,
        explanation: "Operátor volné rovnosti == provádí implicitní přetypování operandů. Řetězec \"10\" převede na číslo 10, takže 10 == 10 je true."
      },
      {
        id: "js_q10",
        module: "js_m3",
        question: "What is the output of comparing two strings: console.log(\"abcd\" > \"Abcd\");?",
        code: "console.log(\"abcd\" > \"Abcd\");",
        options: [
          "false",
          "true",
          "undefined",
          "TypeError"
        ],
        correct: 1,
        explanation: "Porovnání řetězců se v JavaScriptu provádí lexikograficky podle kódových bodů Unicode. Malé písmeno 'a' má kód 97, zatímco velké 'A' má kód 65. Jelikož 97 > 65, výraz je true."
      },
      {
        id: "js_q11",
        module: "js_m3",
        question: "What is printed to the console when evaluating the following expression?",
        code: "let x = 20 + \"10\";\nconsole.log(x);\nconsole.log(typeof x);",
        options: [
          "30, number",
          "\"2010\", string",
          "NaN, number",
          "Error"
        ],
        correct: 1,
        explanation: "Pokud je jeden z operandů operátoru + řetězec, JavaScript provede zřetězení (konkatenaci). Výsledkem je řetězec \"2010\"."
      },
      {
        id: "js_q12",
        module: "js_m3",
        question: "What is printed to the console when evaluating subtraction with a numeric string?",
        code: "let x = \"20\" - 10;\nconsole.log(x);\nconsole.log(typeof x);",
        options: [
          "\"10\", string",
          "10, number",
          "NaN, number",
          "TypeError"
        ],
        correct: 1,
        explanation: "Operátor mínus (-) neexistuje pro řetězce, proto JavaScript automaticky převede \"20\" na číslo 20. 20 - 10 = 10 (typ number)."
      },
      {
        id: "js_q13",
        module: "js_m3",
        question: "What is the output of the following arithmetic expression with booleans?",
        code: "console.log(true + true);",
        options: [
          "\"truetrue\"",
          "true",
          "2",
          "NaN"
        ],
        correct: 2,
        explanation: "Při matematické operaci + se booleovské hodnoty převedou na čísla: true se převede na 1. 1 + 1 = 2."
      },
      {
        id: "js_q14",
        module: "js_m3",
        question: "Which of the following values is FALSY in JavaScript?",
        code: null,
        options: [
          "\"0\"",
          "\"false\"",
          "[] (empty array)",
          "0 (number zero)"
        ],
        correct: 3,
        explanation: "V JavaScriptu je číslo 0 (a také \"\", null, undefined, NaN, false, 0n) falsy. Neprázdné řetězce jako \"0\" i prázdné objekty/pole [] jsou truthy!"
      },
      {
        id: "js_q15",
        module: "js_m3",
        question: "What is the result of the following logical expression?",
        code: "console.log(!(true && false || true));",
        options: [
          "true",
          "false",
          "undefined",
          "NaN"
        ],
        correct: 1,
        explanation: "Operátor && má vyšší prioritu než ||: true && false je false. Následně false || true je true. Negace !(true) dává false."
      },
      {
        id: "js_q16",
        module: "js_m3",
        question: "What is the output of the logical OR short-circuit expression?",
        code: "console.log(false || \"false\");",
        options: [
          "false",
          "true",
          "\"false\"",
          "undefined"
        ],
        correct: 2,
        explanation: "Operátor || vrátí první truthy hodnotu, nebo poslední hodnotu. Protože první operand je false, vyhodnotí a vrátí druhý operand: řetězec \"false\"."
      },
      {
        id: "js_q17",
        module: "js_m3",
        question: "Given the following code, what values are assigned to a and b?",
        code: "let a = 10;\nlet b = ++a;",
        options: [
          "a = 10, b = 11",
          "a = 11, b = 10",
          "a = 11, b = 11",
          "a = 10, b = 10"
        ],
        correct: 2,
        explanation: "Prefixový inkrement (++a) nejprve zvýší hodnotu proměnné a na 11 a teprve poté vrátí novou hodnotu do b. Obě proměnné mají hodnotu 11."
      },
      {
        id: "js_q18",
        module: "js_m3",
        question: "Given the following code, what values are assigned to a and b?",
        code: "let a = 10;\nlet b = a++;",
        options: [
          "a = 11, b = 10",
          "a = 11, b = 11",
          "a = 10, b = 11",
          "a = 10, b = 10"
        ],
        correct: 0,
        explanation: "Postfixový inkrement (a++) nejprve vrátí původní hodnotu (10) do proměnné b a až následně zvýší hodnotu a na 11."
      },
      {
        id: "js_q19",
        module: "js_m3",
        question: "Which of the following statements about window.alert(), window.confirm(), and window.prompt() is NOT true?",
        code: null,
        options: [
          "They are methods of the window object in browsers",
          "They are synchronous and pause (block) code execution until the dialog is dismissed",
          "window.alert() returns true if the user clicks OK",
          "window.confirm() returns true when OK is clicked and false when Cancel is clicked"
        ],
        correct: 2,
        explanation: "window.alert() nevrací žádnou hodnotu (vrací undefined). Booleovskou hodnotu true/false vrací metoda window.confirm()."
      },
      {
        id: "js_q20",
        module: "js_m3",
        question: "What does window.prompt() return if the user clicks the 'Cancel' button or presses the Escape key?",
        code: "let name = window.prompt(\"Enter your name:\");",
        options: [
          "\"\"",
          "undefined",
          "false",
          "null"
        ],
        correct: 3,
        explanation: "Pokud uživatel v dialogu prompt() klikne na Zrušit (Cancel), metoda vrátí speciální hodnotu null."
      },
      {
        id: "js_q21",
        module: "js_m4",
        question: "In the daysOfWeek variable, we place an array with the names of the days of the week. To reverse the order of the array elements in place, we should call:",
        code: "let daysOfWeek = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];",
        options: [
          "daysOfWeek.invert();",
          "daysOfWeek.reverse();",
          "daysOfWeek.sort(reverse);",
          "daysOfWeek.backwards();"
        ],
        correct: 1,
        explanation: "Metoda 'reverse()' otočí pořadí prvků v poli přímo na místě (in-place) a vrátí odkaz na toto pole."
      },
      {
        id: "js_q22",
        module: "js_m4",
        question: "What is the result of the slice() call on the following string?",
        code: "let text = \"abcdefg\";\nconsole.log(text.slice(2, 4));",
        options: [
          "\"bc\"",
          "\"cd\"",
          "\"cde\"",
          "\"bcd\""
        ],
        correct: 1,
        explanation: "Metoda slice(beginIndex, endIndex) extrahuje znaky od indexu 2 včetně ('c') do indexu 4 bez něj (index 2 je 'c', index 3 je 'd'). Výsledek je \"cd\"."
      },
      {
        id: "js_q23",
        module: "js_m4",
        question: "Which operator is used to remove a property and its value from a JavaScript object?",
        code: "let user = { name: \"Alice\", age: 25 };\n// How to remove property 'age'?",
        options: [
          "remove user.age;",
          "delete user.age;",
          "user.age = undefined;",
          "erase user.age;"
        ],
        correct: 1,
        explanation: "Operátor 'delete' smaže vlastnost z objektu: delete user.age; Po smazání vrací čtení user.age hodnotu undefined a vlastnost již v objektu neexistuje."
      },
      {
        id: "js_q24",
        module: "js_m4",
        question: "What is the output of the following array operations?",
        code: "let arr = [10, 20];\narr.push(30);\narr.unshift(5);\nconsole.log(arr);",
        options: [
          "[10, 20, 30, 5]",
          "[5, 10, 20, 30]",
          "[30, 10, 20, 5]",
          "[5, 30, 10, 20]"
        ],
        correct: 1,
        explanation: "push() přidá prvek na konec pole ([10, 20, 30]). unshift() vloží prvek na začátek pole ([5, 10, 20, 30])."
      },
      {
        id: "js_q25",
        module: "js_m4",
        question: "What is the output of the following array modification using the length property?",
        code: "let arr = [1, 2, 3, 4, 5];\narr.length = 2;\nconsole.log(arr);",
        options: [
          "[1, 2, 3, 4, 5]",
          "[1, 2]",
          "[4, 5]",
          "TypeError: length is read-only"
        ],
        correct: 1,
        explanation: "Vlastnost length u pole v JavaScriptu je zapisovatelná. Její zmenšení pole ořízne (zkrátí) na zadaný počet prvků, takže v poli zbydou jen prvky [1, 2]."
      },
      {
        id: "js_q26",
        module: "js_m5",
        question: "What happens in a switch statement if a matching case does NOT have a break statement at the end?",
        code: "let x = 1;\nswitch (x) {\n  case 1: console.log(\"One\");\n  case 2: console.log(\"Two\");\n}",
        options: [
          "It throws a SyntaxError",
          "It prints only \"One\" and stops",
          "Execution falls through and also executes the code in case 2",
          "It re-evaluates the condition"
        ],
        correct: 2,
        explanation: "Bez příkazu break dojde k propadnutí (fall-through). Po vykonání kódu case 1 se bez kontroly podmínky vykoná i kód case 2 (vytiskne se \"One\" a následně \"Two\")."
      },
      {
        id: "js_q27",
        module: "js_m5",
        question: "What comparison operator does a switch statement use internally when matching the expression against case clauses?",
        code: null,
        options: [
          "Loose equality (==)",
          "Strict equality (===)",
          "Object.is()",
          "Type coercion"
        ],
        correct: 1,
        explanation: "Konstrukce switch používá striktní porovnání (===). Shodovat se musí jak hodnota, tak datový typ (např. '1' se neshoduje s číslem 1)."
      },
      {
        id: "js_q28",
        module: "js_m5",
        question: "What is printed to the console by the following loop?",
        code: "for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  if (i === 4) break;\n  console.log(i);\n}",
        options: [
          "0, 1, 2, 3",
          "0, 1, 3",
          "0, 1, 3, 4",
          "0, 1, 2, 3, 4"
        ],
        correct: 1,
        explanation: "Při i = 2 příkaz continue přeskočí zbytek těla a pokračuje na i = 3. Při i = 4 příkaz break cyklus úplně ukončí. Vypíše se tedy 0, 1, 3."
      },
      {
        id: "js_q29",
        module: "js_m5",
        question: "Which loop construct is specifically designed to iterate over the keys (enumerable property names) of an object?",
        code: null,
        options: [
          "for ... of",
          "for ... in",
          "forEach()",
          "while ... in"
        ],
        correct: 1,
        explanation: "Cyklus 'for ... in' prochází názvy vlastností (klíče) objektu. Cyklus 'for ... of' prochází hodnoty iterovatelných objektů (např. polí)."
      },
      {
        id: "js_q30",
        module: "js_m6",
        question: "The following function using a function expression has been defined: let sum = function (a, b) { return a + b; }; What could the definition of the equivalent arrow function look like?",
        code: "let sum = function (a, b) {\n  return a + b;\n};",
        options: [
          "let sum = (a, b) => a + b;",
          "let sum = (a, b) -> a + b;",
          "let sum = function(a, b) => { a + b; };",
          "let sum = arrow(a, b) { return a + b; };"
        ],
        correct: 0,
        explanation: "Syntaxe šipkové funkce (arrow function) s implicitním returnem pro jednorázový výraz je: let sum = (a, b) => a + b;."
      },
      {
        id: "js_q31",
        module: "js_m6",
        question: "What value is returned by a JavaScript function that does NOT contain an explicit return statement?",
        code: "function test() {\n  let x = 10;\n}\nconsole.log(test());",
        options: [
          "null",
          "0",
          "undefined",
          "void"
        ],
        correct: 2,
        explanation: "Pokud funkce neobsahuje příkaz return (nebo je zapsán pouze prázdný 'return;'), vrací implicitně hodnotu undefined."
      },
      {
        id: "js_q32",
        module: "js_m2",
        question: "What occurs when a local variable declared inside an inner block shares the exact same name as a variable in an outer global scope?",
        code: "let x = 10;\n{\n  let x = 20;\n  console.log(x); // 20\n}\nconsole.log(x); // 10",
        options: [
          "Variable Hoisting",
          "Variable Shadowing",
          "SyntaxError: Identifier 'x' has already been declared",
          "Global Pollution"
        ],
        correct: 1,
        explanation: "Tento jev se nazývá zastínění proměnné (variable shadowing). Vnitřní proměnná dočasně překryje (zastíní) vnější proměnnou stejného jména."
      },
      {
        id: "js_q33",
        module: "js_m2",
        question: "What happens when you assign a value to an undeclared variable when \"use strict\"; is active?",
        code: "\"use strict\";\nx = 100;",
        options: [
          "It implicitly creates a global variable 'x'",
          "It throws a ReferenceError: x is not defined",
          "It creates a local variable 'x'",
          "It throws a TypeError"
        ],
        correct: 1,
        explanation: "Ve striktním módu (\"use strict\";) je zakázáno implicitní vytváření globálních proměnných. Pokus o přiřazení do nedeklarované proměnné vyvolá ReferenceError."
      },
      {
        id: "js_q34",
        module: "js_m6",
        question: "Which block in a try ... catch ... finally structure is GUARANTEED to execute whether an error occurred or not?",
        code: null,
        options: [
          "try",
          "catch",
          "finally",
          "always"
        ],
        correct: 2,
        explanation: "Blok 'finally' se vykoná vždy — jak při úspěšném průchodu blokem try, tak i po zachycení výjimky v bloku catch (dokonce i když byl v catch zavolán return)."
      },
      {
        id: "js_q35",
        module: "js_m6",
        question: "What is the purpose of the 'debugger;' statement in JavaScript?",
        code: "function compute(data) {\n  debugger;\n  return data * 2;\n}",
        options: [
          "It logs the current call stack to the console",
          "It halts execution and invokes any available debugging functionality (breakpoint) in DevTools",
          "It tests the syntax of the function and throws on errors",
          "It suppresses all runtime exceptions"
        ],
        correct: 1,
        explanation: "Příkaz 'debugger;' funguje jako programový breakpoint. Pokud jsou otevřeny vývojářské nástroje prohlížeče, pozastaví na tomto řádku vykonávání skriptu."
      },
      {
        id: "js_q36",
        module: "js_m3",
        question: "What is the output of the exponentiation operator in the following expression?",
        code: "console.log(2 ** 3 * 2 - 1);",
        options: [
          "15",
          "63",
          "11",
          "31"
        ],
        correct: 0,
        explanation: "Operátor umocnění (**) má nejvyšší prioritu: 2 ** 3 = 8. Následuje násobení: 8 * 2 = 16. Nakonec odčítání: 16 - 1 = 15."
      },
      {
        id: "js_q37",
        module: "js_m2",
        question: "What are the return values of Number(null) and Number(undefined)?",
        code: "console.log(Number(null));\nconsole.log(Number(undefined));",
        options: [
          "0 and 0",
          "NaN and NaN",
          "0 and NaN",
          "null and undefined"
        ],
        correct: 2,
        explanation: "Převod Number(null) vrací 0, zatímco Number(undefined) vrací NaN. Jedná se o velmi častou testovací otázku."
      },
      {
        id: "js_q38",
        module: "js_m6",
        question: "What error type is raised when attempting to reassign a variable declared with 'const'?",
        code: "const PI = 3.14;\nPI = 3.14159;",
        options: [
          "ReferenceError",
          "TypeError",
          "SyntaxError",
          "RangeError"
        ],
        correct: 1,
        explanation: "Přiřazení nové hodnoty do konstanty vyvolá výjimku TypeError: Assignment to constant variable."
      },
      {
        id: "js_q39",
        module: "js_m6",
        question: "What error type is raised when calling a function that has not been declared or defined?",
        code: "calculateTotals();",
        options: [
          "ReferenceError",
          "TypeError",
          "SyntaxError",
          "RangeError"
        ],
        correct: 0,
        explanation: "Pokus o přístup k neexistujícímu identifikátoru vyvolá ReferenceError: calculateTotals is not defined."
      },
      {
        id: "js_q40",
        module: "js_m4",
        question: "How can you reliably check if a variable holds an Array in modern JavaScript?",
        code: "let data = [1, 2, 3];",
        options: [
          "typeof data === \"array\"",
          "Array.isArray(data)",
          "data.type() === \"Array\"",
          "isarray(data)"
        ],
        correct: 1,
        explanation: "typeof data vrací \"object\". Správný a spolehlivý způsob je použít metodu Array.isArray(data), která vrací true."
      }
    ]
  },

  oracle_dd: {
  "id": "oracle_dd",
    category: "db",
    categoryName: "Databázové systémy",
  "title": "Oracle Academy: Database Design",
  "subtitle": "Příprava na certifikační zkoušku Oracle Academy Database Design",
  "badge": "Oracle Database Design",
  "icon": "fas fa-project-diagram",
  "color": "#F80000",
  "passScore": 70,
  "timeLimit": 45,
  "modules": [
    {
      "id": "dd_m1",
      "name": "Sekce 1 & 2: Úvod do databází, podnikové potřeby a analýza"
    },
    {
      "id": "dd_m2",
      "name": "Sekce 3 & 4: Entity, atributy a vztahy (ERD)"
    },
    {
      "id": "dd_m3",
      "name": "Sekce 5: Subtypy, supertypy a pokročilé vztahy"
    },
    {
      "id": "dd_m4",
      "name": "Sekce 6 & 7: Normalizace (1NF, 2NF, 3NF) a integritní pravidla"
    },
    {
      "id": "dd_m5",
      "name": "Sekce 8 & 9: Fyzický model, mapování na tabulky a integrita dat"
    }
  ],
  "questions": [
    {
      "id": "dd_q01",
      "module": "dd_m1",
      "question": "Which of the following best defines an Entity in data modeling?",
      "code": null,
      "options": [
        "A piece of software used to manage databases",
        "A thing of significance about which information needs to be held",
        "A specific row inside a database table",
        "A connection between two physical database servers"
      ],
      "correct": 1,
      "explanation": "V datovém modelování je entita 'věc o níž má význam uchovávat informace' (obvykle podstatné jméno v jednotném čísle, např. EMPLOYEE, PRODUCT)."
    },
    {
      "id": "dd_q02",
      "module": "dd_m2",
      "question": "In an Entity Relationship Diagram (ERD) using Oracle Academy conventions, how is a mandatory attribute represented?",
      "code": null,
      "options": [
        "With a small circle (o)",
        "With an asterisk (*)",
        "With a hash / pound sign (#)",
        "With an underline"
      ],
      "correct": 1,
      "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný (mandatory) atribut, který musí mít vždy hodnotu."
    },
    {
      "id": "dd_q03",
      "module": "dd_m2",
      "question": "In an Entity Relationship Diagram (ERD), how is an optional attribute represented?",
      "code": null,
      "options": [
        "With an asterisk (*)",
        "With a small circle (o)",
        "With a hash / pound sign (#)",
        "With a question mark (?)"
      ],
      "correct": 1,
      "explanation": "Kolečko (o) označuje volitelný (optional) atribut, který může obsahovat hodnotu NULL."
    },
    {
      "id": "dd_q04",
      "module": "dd_m2",
      "question": "In an Entity Relationship Diagram (ERD), how is a Primary Unique Identifier (UID) attribute represented?",
      "code": null,
      "options": [
        "With a hash / pound sign (#)",
        "With an asterisk (*)",
        "With a small circle (o)",
        "With a bold font only"
      ],
      "correct": 0,
      "explanation": "Znak mřížky (#) označuje atribut, který je součástí primárního unikátního identifikátoru (Primary UID) entity."
    },
    {
      "id": "dd_q05",
      "module": "dd_m1",
      "question": "True or False: Entities are transformed into Tables during the database design process.",
      "code": null,
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Při přechodu z konceptuálního modelu (ERD) do fyzického návrhu databáze se každá entita mapuje na relační tabulku (Table)."
    },
    {
      "id": "dd_q06",
      "module": "dd_m1",
      "question": "True or False: Data Modeling is the last step in the database development process.",
      "code": null,
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Tvrzení je nepravdivé (False). Datové modelování probíhá v raných fázích (analýza a návrh), nikoliv na konci vývojového cyklu."
    },
    {
      "id": "dd_q07",
      "module": "dd_m1",
      "question": "True or False: An Entity Relationship model is independent of the hardware or software used for implementation.",
      "code": null,
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Konceptuální ER model je zcela nezávislý na použitém databázovém stroji (RDBMS), operačním systému i hardwaru."
    },
    {
      "id": "dd_q08",
      "module": "dd_m3",
      "question": "In Oracle Academy subtype modeling, which of the following rules is MANDATORY for subtypes?",
      "code": null,
      "options": [
        "A supertype can have only one subtype",
        "Subtypes must be mutually exclusive and collectively exhaustive",
        "Subtypes never inherit attributes from their supertype",
        "Subtypes must each have their own separate Primary UID"
      ],
      "correct": 1,
      "explanation": "V modelu Oracle Academy musí být subtypy vzájemně výlučné (instance nemůže patřit do více subtypů současně) a vyčerpávající (každá instance supertypu musí patřit do jednoho ze subtypů; musí existovat alespoň 2 subtypy)."
    },
    {
      "id": "dd_q09",
      "module": "dd_m2",
      "question": "True or False: An entity can have multiple candidate UIDs, but only one Primary UID.",
      "code": null,
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Entita může mít více kandidátních identifikátorů (např. rodné číslo, číslo pasu, email), ale právě jeden z nich je vybrán jako primární (Primary UID)."
    },
    {
      "id": "dd_q10",
      "module": "dd_m2",
      "question": "If an entity has no natural attribute suitable to be a Primary UID, what can be created?",
      "code": null,
      "options": [
        "An Artificial (Surrogate) UID",
        "A Foreign Key",
        "A Secondary Table",
        "A Volatile Attribute"
      ],
      "correct": 0,
      "explanation": "Pokud entita nemá vhodný přirozený identifikátor, vytvoří se umělý identifikátor (Artificial / Surrogate UID), například generované ID (číslo zaměstnance, ID objednávky)."
    },
    {
      "id": "dd_q11",
      "module": "dd_m2",
      "question": "What type of relationship CANNOT be directly implemented in a relational database without an intersection (associative) entity?",
      "code": null,
      "options": [
        "One-to-One (1:1)",
        "One-to-Many (1:M)",
        "Many-to-Many (M:M)",
        "Recursive 1:M"
      ],
      "correct": 2,
      "explanation": "Vztah M:M (Many-to-Many) nelze přímo fyzicky realizovat v relační databázi a musí být rozložen pomocí vazební (intersection) tabulky na dva vztahy 1:M."
    },
    {
      "id": "dd_q12",
      "module": "dd_m2",
      "question": "A Many-to-Many (M:M) relationship between STUDENT and COURSE is resolved into:",
      "code": null,
      "options": [
        "One 1:1 relationship with a shared Primary Key",
        "Two 1:M relationships connected to an intersection entity (e.g. ENROLLMENT)",
        "A single table containing both student and course columns repeated",
        "A recursive relationship on STUDENT"
      ],
      "correct": 1,
      "explanation": "Vztah M:M mezi studenty a kurzy se rozpadá na dva 1:M vztahy: jeden student má mnoho zápisů a jeden kurz má mnoho zápisů ve vazební entitě ENROLLMENT."
    },
    {
      "id": "dd_q13",
      "module": "dd_m2",
      "question": "What does a barred relationship (relationship line with a crossbar '|') indicate in an ERD?",
      "code": null,
      "options": [
        "The relationship is non-transferable",
        "The relationship contributes to the Unique Identifier (UID) of the entity at the many end",
        "The relationship is optional on both sides",
        "The relationship is an arc"
      ],
      "correct": 1,
      "explanation": "Přeškrtnutí vazby čárkou (|) označuje identifikační vztah (barred relationship). Znamená to, že cizí klíč se stává součástí primárního UID dceřiné entity."
    },
    {
      "id": "dd_q14",
      "module": "dd_m2",
      "question": "What symbol is used on a relationship line in an Oracle ERD to represent a NON-TRANSFERABLE relationship?",
      "code": null,
      "options": [
        "A crossbar (|)",
        "A diamond symbol",
        "A circle (o)",
        "A dotted line"
      ],
      "correct": 1,
      "explanation": "Kosočtverec (diamond) na lince vztahu značí nepřenosný (non-transferable) vztah — jakmile je instance provázána, nelze vazbu změnit na jinou instanci."
    },
    {
      "id": "dd_q15",
      "module": "dd_m2",
      "question": "Which term describes a relationship where an entity is related to itself (e.g., an EMPLOYEE manages other EMPLOYEEs)?",
      "code": null,
      "options": [
        "Recursive relationship",
        "Redundant relationship",
        "Arc relationship",
        "Intersecting relationship"
      ],
      "correct": 0,
      "explanation": "Rekurzivní vztah (rekurze) nastává tehdy, když má entita vazbu sama na sebe (např. nadřízený a podřízený v téže entitě ZAMĚSTNANEC)."
    },
    {
      "id": "dd_q16",
      "module": "dd_m4",
      "question": "Which integrity constraint rule states that no part of a Primary Key can contain a NULL value?",
      "code": null,
      "options": [
        "Referential Integrity",
        "Entity Integrity",
        "Domain Integrity",
        "User-defined Integrity"
      ],
      "correct": 1,
      "explanation": "Integrita entit (Entity Integrity) vyžaduje, aby každá hodnota primárního klíče byla unikátní a žádná jeho složka nebyla NULL."
    },
    {
      "id": "dd_q17",
      "module": "dd_m4",
      "question": "Which integrity rule ensures that a Foreign Key value must either match an existing Primary Key in the parent table or be NULL?",
      "code": null,
      "options": [
        "Entity Integrity",
        "Referential Integrity",
        "Cardinality Rule",
        "Normalization Rule"
      ],
      "correct": 1,
      "explanation": "Referenční integrita (Referential Integrity) zajišťuje platnost cizích klíčů a zamezuje existenci 'osiřelých' záznamů v dceřiných tabulkách."
    },
    {
      "id": "dd_q18",
      "module": "dd_m4",
      "question": "Which normal form requires that all attributes contain only atomic (indivisible) values and that there are no repeating groups?",
      "code": null,
      "options": [
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "Boyce-Codd Normal Form (BCNF)"
      ],
      "correct": 0,
      "explanation": "První normální forma (1NF) vyžaduje atomické hodnoty v každé buňce a zákaz opakujících se skupin sloupců."
    },
    {
      "id": "dd_q19",
      "module": "dd_m4",
      "question": "Which normal form requires the model to be in 1NF and have all non-UID attributes fully functionally dependent on the ENTIRE Primary UID (eliminating partial dependencies)?",
      "code": null,
      "options": [
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "Fourth Normal Form (4NF)"
      ],
      "correct": 1,
      "explanation": "Druhá normální forma (2NF) odstraňuje částečné závislosti: každý neklíčový atribut musí záviset na celém složeném primárním klíči, nikoliv pouze na jeho části."
    },
    {
      "id": "dd_q20",
      "module": "dd_m4",
      "question": "Which normal form requires 2NF and that no non-UID attribute is dependent on another non-UID attribute (eliminating transitive dependencies)?",
      "code": null,
      "options": [
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "Denormalized Form"
      ],
      "correct": 2,
      "explanation": "Třetí normální forma (3NF) odstraňuje tranzitivní závislosti: neklíčový atribut nesmí záviset na jiném neklíčovém atributu ('každý atribut závisí na klíči, celém klíči a ničem jiném než klíči')."
    },
    {
      "id": "dd_q21",
      "module": "dd_m4",
      "question": "A table has a composite primary key (StudentID, CourseID). The attribute CourseName depends ONLY on CourseID. Which normal form does this violate?",
      "code": "Table: ENROLLMENT\nPK: (StudentID, CourseID)\nAttributes: Grade, CourseName",
      "options": [
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "It violates no normal form"
      ],
      "correct": 1,
      "explanation": "Protože CourseName závisí pouze na části složeného primárního klíče (CourseID), jedná se o částečnou závislost, což porušuje 2NF."
    },
    {
      "id": "dd_q22",
      "module": "dd_m4",
      "question": "An EMPLOYEES table with Primary Key EmployeeID contains columns DepartmentID and DepartmentName. DepartmentName depends on DepartmentID. Which normal form does this violate?",
      "code": "Table: EMPLOYEES\nPK: EmployeeID\nColumns: FirstName, DepartmentID, DepartmentName",
      "options": [
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "Fourth Normal Form (4NF)"
      ],
      "correct": 2,
      "explanation": "Zde DepartmentName závisí na DepartmentID, což je neklíčový atribut. Jedná se o tranzitivní závislost, která porušuje 3NF."
    },
    {
      "id": "dd_q23",
      "module": "dd_m5",
      "question": "When transforming a conceptual ER model into a physical database design, what does an Entity become?",
      "code": null,
      "options": [
        "A Column",
        "A Table",
        "A View",
        "A Foreign Key"
      ],
      "correct": 1,
      "explanation": "Při fyzickém mapování se konceptuální entita stává databázovou tabulkou (Table)."
    },
    {
      "id": "dd_q24",
      "module": "dd_m5",
      "question": "When transforming a conceptual ER model into a physical database design, what does an Attribute become?",
      "code": null,
      "options": [
        "A Column",
        "A Table",
        "A Constraint",
        "A Row"
      ],
      "correct": 0,
      "explanation": "Atribut entity se v relační tabulce stává sloupcem (Column)."
    },
    {
      "id": "dd_q25",
      "module": "dd_m5",
      "question": "When transforming a conceptual ER model into a physical database design, what does a Relationship become?",
      "code": null,
      "options": [
        "A Primary Key",
        "A Foreign Key Constraint",
        "An Index",
        "A Sequence"
      ],
      "correct": 1,
      "explanation": "Vztah mezi entitami se mapuje na cizí klíč (Foreign Key constraint) v tabulce na straně 'Many'."
    },
    {
      "id": "dd_q26",
      "module": "dd_m3",
      "question": "What is an Arc relationship in an Entity Relationship diagram?",
      "code": null,
      "options": [
        "A relationship that loops back to the same entity",
        "An exclusive-OR relationship where an instance can be related to only one of several entities at a time",
        "A relationship connecting more than three entities simultaneously",
        "A relationship that has been deleted"
      ],
      "correct": 1,
      "explanation": "Obloukový vztah (Arc) modeluje vzájemně se vylučující vztahy (exclusive OR): instance entity může mít vazbu buď na entitu A, NEBO na entitu B, ale nikdy na obě současně."
    },
    {
      "id": "dd_q27",
      "module": "dd_m2",
      "question": "Which of the following is considered a 'volatile attribute' that is generally discouraged from being stored directly?",
      "code": null,
      "options": [
        "Birth Date",
        "Age",
        "Social Security Number",
        "Employee ID"
      ],
      "correct": 1,
      "explanation": "Věk (Age) se neustále mění (je nestálý / volatile). V databázi se ukládá datum narození (Birth Date) a věk se dynamicky dopočítává."
    },
    {
      "id": "dd_q28",
      "module": "dd_m2",
      "question": "What is a 'derived attribute' in data modeling?",
      "code": null,
      "options": [
        "An attribute imported from an external database",
        "An attribute whose value can be calculated from other existing attributes",
        "The primary unique identifier of a subtype",
        "An attribute that accepts only numeric values"
      ],
      "correct": 1,
      "explanation": "Odvozený atribut (derived attribute) lze vypočítat z jiných uložených dat (např. Celková cena = Cena * Počet kusů) a v konceptuálním modelu se obvykle neukládá."
    },
    {
      "id": "dd_q29",
      "module": "dd_m4",
      "question": "What is the primary risk of structural redundancy in an unnormalized database design?",
      "code": null,
      "options": [
        "Queries execute too quickly",
        "Insertion, update, and deletion anomalies leading to inconsistent data",
        "The database cannot be backed up",
        "Foreign keys are disabled automatically"
      ],
      "correct": 1,
      "explanation": "Strukturální redundance vede k anomáliím při vkládání, aktualizaci a mazání dat (Update/Insert/Delete anomalies), což způsobuje nekonzistenci databáze."
    },
    {
      "id": "dd_q30",
      "module": "dd_m2",
      "question": "In an ERD, what does 'cardinality' describe?",
      "code": null,
      "options": [
        "Whether a relationship is mandatory or optional",
        "The quantitative ratio of instances involved in the relationship (one or many)",
        "The physical size of the table on disk",
        "The datatype of the foreign key column"
      ],
      "correct": 1,
      "explanation": "Kardinalita určuje kvantitativní poměr instancí v relaci: 1:1 (One-to-One), 1:M (One-to-Many), nebo M:M (Many-to-Many)."
    },
    {
      "id": "dd_q31",
      "module": "dd_m2",
      "question": "In an ERD, what does 'optionality' describe?",
      "code": null,
      "options": [
        "Whether each instance MUST or MAY participate in the relationship",
        "The maximum number of rows a table can store",
        "Whether the database engine supports transactions",
        "The collation of text fields"
      ],
      "correct": 0,
      "explanation": "Opionalita popisuje povinnost účasti: zda instance MUSÍ (must / mandatory) nebo MŮŽE (may / optional) v relaci vystupovat."
    },
    {
      "id": "dd_q32",
      "module": "dd_m1",
      "question": "Which of the following is NOT a standard stage of the classic System Development Life Cycle (SDLC)?",
      "code": null,
      "options": [
        "Analysis",
        "Design",
        "Compilation",
        "Production"
      ],
      "correct": 2,
      "explanation": "Fáze SDLC v metodice Oracle Academy jsou: Strategy, Analysis, Design, Build, Transition a Production. 'Compilation' je krok překladače, nikoliv fáze SDLC."
    },
    {
      "id": "dd_q33",
      "module": "dd_m2",
      "question": "What is a 'Candidate UID'?",
      "code": null,
      "options": [
        "A foreign key in a child table",
        "One of several attributes or attribute combinations capable of uniquely identifying an instance",
        "An attribute awaiting approval by the database administrator",
        "A column that contains duplicate values"
      ],
      "correct": 1,
      "explanation": "Kandidátní UID je jakýkoliv atribut (či skupina atributů), který by mohl jednoznačně identifikovat instanci entity."
    },
    {
      "id": "dd_q34",
      "module": "dd_m2",
      "question": "What is a 'Composite Attribute'?",
      "code": null,
      "options": [
        "An attribute composed of multiple sub-components (e.g. Address made of Street, City, ZIP)",
        "An attribute that is calculated from a formula",
        "An attribute that stores an array of values",
        "An attribute that references a foreign key"
      ],
      "correct": 0,
      "explanation": "Složený atribut (Composite Attribute) se skládá z několika menších smysluplných částí (např. Celé jméno = Jméno + Příjmení; Adresa = Ulice + Město + PSČ)."
    },
    {
      "id": "dd_q35",
      "module": "dd_m1",
      "question": "In ER modeling, what is an 'Instance'?",
      "code": null,
      "options": [
        "The overall schema definition",
        "A single specific occurrence of an entity (e.g., employee 'Jan Novák')",
        "A physical copy of the database software running on a server",
        "An SQL query execution plan"
      ],
      "correct": 1,
      "explanation": "Instance je konkrétní výskyt entity (např. konkrétní student v entitě STUDENT nebo konkrétní produkt v entitě PRODUCT)."
    },
    {
      "id": "dd_q36",
      "module": "dd_m5",
      "question": "When converting a 1:M relationship from an ERD into relational tables, where is the Foreign Key column placed?",
      "code": null,
      "options": [
        "In the table on the 'One' side",
        "In the table on the 'Many' side",
        "In both tables equally",
        "In a newly generated lookup table"
      ],
      "correct": 1,
      "explanation": "Cizí klíč (Foreign Key) se vždy umisťuje do tabulky na straně 'Many' (mnoho), kde odkazuje na primární klíč tabulky na straně 'One' (jedna)."
    },
    {
      "id": "dd_q37",
      "module": "dd_m3",
      "question": "In subtype / supertype modeling, which attributes belong to the supertype?",
      "code": null,
      "options": [
        "Attributes that are unique to only one subtype",
        "Attributes that are common to all subtypes",
        "Foreign key columns only",
        "Derived attributes only"
      ],
      "correct": 1,
      "explanation": "Atributy společné pro všechny podtypy se umisťují do nadtypu (supertype), odkud je všechny podtypy dědí."
    },
    {
      "id": "dd_q38",
      "module": "dd_m3",
      "question": "In subtype / supertype modeling, which attributes belong to a specific subtype?",
      "code": null,
      "options": [
        "Attributes that apply only to that specific subtype",
        "Attributes common to all instances",
        "The Primary UID of the entire entity",
        "No attributes are allowed in subtypes"
      ],
      "correct": 0,
      "explanation": "Specifické atributy, které dávají smysl pouze pro daný konkrétní podtyp, se umisťují výhradně do tohoto podtypu."
    },
    {
      "id": "dd_q39",
      "module": "dd_m5",
      "question": "What is the primary motivation for intentional 'denormalization' in physical database design?",
      "code": null,
      "options": [
        "To save storage space on disk",
        "To improve query read performance and reduce expensive joins",
        "To eliminate the need for primary keys",
        "To ensure compliance with Third Normal Form"
      ],
      "correct": 1,
      "explanation": "Záměrná denormalizace se provádí za účelem zrychlení čtecích dotazů tím, že se omezí nutnost spojování mnoha tabulek (JOIN) za cenu řízené redundance."
    },
    {
      "id": "dd_q40",
      "module": "dd_m5",
      "question": "In relational mapping, how is a barred relationship (identifying relationship) represented in the child table?",
      "code": null,
      "options": [
        "The foreign key is ignored",
        "The foreign key column becomes part of the composite primary key of the child table",
        "A trigger is created instead of a foreign key",
        "The child table cannot have any primary key"
      ],
      "correct": 1,
      "explanation": "Při mapování barred relationship se cizí klíč stává součástí složeného primárního klíče (Composite PK) dceřiné tabulky."
    }
  ]
},

  oracle_sql: {
  "id": "oracle_sql",
    category: "db",
    categoryName: "Databázové systémy",
  "title": "Oracle Academy: Database Programming with SQL",
  "subtitle": "Příprava na certifikační zkoušku Oracle Academy Database Programming with SQL",
  "badge": "Oracle SQL Programming",
  "icon": "fas fa-database",
  "color": "#C74634",
  "passScore": 70,
  "timeLimit": 45,
  "modules": [
    {
      "id": "sql_m1",
      "name": "Sekce 1 & 2: Základní dotazy SELECT, operátory a řazení (WHERE, ORDER BY)"
    },
    {
      "id": "sql_m2",
      "name": "Sekce 3 & 4: Jednořádkové funkce (Znakové, Číselné, Datové a Konverzní)"
    },
    {
      "id": "sql_m3",
      "name": "Sekce 5 & 6: Agregační funkce a seskupování (GROUP BY, HAVING)"
    },
    {
      "id": "sql_m4",
      "name": "Sekce 7 & 8: Spojování tabulek (ANSI JOINs, INNER, OUTER, CROSS)"
    },
    {
      "id": "sql_m5",
      "name": "Sekce 9 & 10: Poddotazy (Subqueries) a množinové operátory"
    },
    {
      "id": "sql_m6",
      "name": "Sekce 11 & 12: DDL, DML, řízení transakcí a integritní omezení"
    }
  ],
  "questions": [
    {
      "id": "sql_q01",
      "module": "sql_m1",
      "question": "Which SQL command is used to retrieve data rows from one or more tables in a database?",
      "code": null,
      "options": [
        "FETCH",
        "GET",
        "SELECT",
        "EXTRACT"
      ],
      "correct": 2,
      "explanation": "Příkaz SELECT je základním dotazovacím příkazem v SQL pro čtení a výběr dat z tabulek."
    },
    {
      "id": "sql_q02",
      "module": "sql_m1",
      "question": "Which SQL clause is used to filter rows returned by a query based on specified search criteria?",
      "code": "SELECT first_name, salary \nFROM employees \n[???] salary > 5000;",
      "options": [
        "ORDER BY",
        "HAVING",
        "WHERE",
        "FILTER"
      ],
      "correct": 2,
      "explanation": "Klauzule WHERE filtruje řádky před provedením agregace podle stanovených podmínek."
    },
    {
      "id": "sql_q03",
      "module": "sql_m1",
      "question": "Which operator is used to concatenate two or more character strings or columns in Oracle SQL?",
      "code": "SELECT first_name [???] ' ' [???] last_name AS full_name \nFROM employees;",
      "options": [
        "+",
        "CONCAT_WS",
        "||",
        "&"
      ],
      "correct": 2,
      "explanation": "V Oracle SQL slouží ke spojování řetězců operátor dvou svislých čar (||)."
    },
    {
      "id": "sql_q04",
      "module": "sql_m1",
      "question": "Which keyword is used in a SELECT statement to suppress and eliminate duplicate rows from the query output?",
      "code": "SELECT [???] department_id FROM employees;",
      "options": [
        "UNIQUE_ROW",
        "DISTINCT",
        "DIFFERENT",
        "SINGLE"
      ],
      "correct": 1,
      "explanation": "Klíčové slovo DISTINCT (nebo synonymum UNIQUE v Oracle) odstraní z výsledku duplicitní řádky."
    },
    {
      "id": "sql_q05",
      "module": "sql_m1",
      "question": "True or False: A column alias defined in the SELECT list can be used in an ORDER BY clause.",
      "code": "SELECT salary * 12 AS annual_sal \nFROM employees \nORDER BY annual_sal DESC;",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Klauzule ORDER BY se vyhodnocuje až po klauzuli SELECT, proto v ní lze použít alias sloupce (annual_sal)."
    },
    {
      "id": "sql_q06",
      "module": "sql_m1",
      "question": "True or False: A column alias defined in the SELECT list can be used in a WHERE clause.",
      "code": "SELECT salary * 12 AS annual_sal \nFROM employees \nWHERE annual_sal > 50000;",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Tvrzení je False! Klauzule WHERE se vyhodnocuje PŘED klauzulí SELECT, takže v okamžiku filtrování alias ještě neexistuje. Výraz v WHERE vyhodí chybu ORA-00904."
    },
    {
      "id": "sql_q07",
      "module": "sql_m1",
      "question": "Which operator tests whether a value falls within an inclusive numerical or date range in SQL?",
      "code": "SELECT * FROM employees WHERE salary [???] 3000 AND 6000;",
      "options": [
        "IN",
        "BETWEEN",
        "WITHIN",
        "LIKE"
      ],
      "correct": 1,
      "explanation": "Operátor BETWEEN ... AND ... testuje rozsah včetně mezních hodnot (inclusive)."
    },
    {
      "id": "sql_q08",
      "module": "sql_m1",
      "question": "In a SQL LIKE condition, which wildcard character matches zero or more characters?",
      "code": "SELECT * FROM employees WHERE last_name LIKE 'S[???]';",
      "options": [
        "_",
        "%",
        "*",
        "?"
      ],
      "correct": 1,
      "explanation": "Znak procenta (%) v operátoru LIKE odpovídá libovolnému počtu (nula nebo více) znaků."
    },
    {
      "id": "sql_q09",
      "module": "sql_m1",
      "question": "In a SQL LIKE condition, which wildcard character matches exactly ONE character?",
      "code": "SELECT * FROM employees WHERE last_name LIKE '_o[???]';",
      "options": [
        "%",
        "_",
        "?",
        "#"
      ],
      "correct": 1,
      "explanation": "Podtržítko (_) v operátoru LIKE odpovídá přesně jednomu znaku na dané pozici."
    },
    {
      "id": "sql_q10",
      "module": "sql_m1",
      "question": "Which comparison condition must be used to test for missing (empty) values in a column?",
      "code": "SELECT * FROM employees WHERE commission_pct [???];",
      "options": [
        "= NULL",
        "IS NULL",
        "== NULL",
        "EQUALS NULL"
      ],
      "correct": 1,
      "explanation": "Hodnotu NULL nelze porovnávat pomocí rovná se (= NULL vrátí vždy UNKNOWN). Správný operátor je IS NULL (nebo IS NOT NULL)."
    },
    {
      "id": "sql_q11",
      "module": "sql_m1",
      "question": "Without parentheses, what is the default order of evaluation for logical operators in SQL?",
      "code": null,
      "options": [
        "OR, then AND, then NOT",
        "AND, then OR, then NOT",
        "NOT, then AND, then OR",
        "From left to right strictly"
      ],
      "correct": 2,
      "explanation": "Pravidla priority logických operátorů jsou: 1. NOT, 2. AND, 3. OR."
    },
    {
      "id": "sql_q12",
      "module": "sql_m1",
      "question": "In Oracle SQL, what is the default sort order for an ORDER BY clause, and where do NULL values appear by default in ascending order?",
      "code": "SELECT * FROM employees ORDER BY commission_pct;",
      "options": [
        "Ascending (ASC); NULLs appear FIRST",
        "Ascending (ASC); NULLs appear LAST",
        "Descending (DESC); NULLs appear LAST",
        "Descending (DESC); NULLs appear FIRST"
      ],
      "correct": 1,
      "explanation": "Výchozí řazení je vzestupné (ASC) a v Oracle SQL se hodnoty NULL ve vzestupném řazení standardně zobrazují na konci (NULLS LAST)."
    },
    {
      "id": "sql_q13",
      "module": "sql_m2",
      "question": "Which single-row character function converts the first letter of each word to uppercase and all other letters to lowercase?",
      "code": "SELECT [???]('oracle academy database') FROM dual;",
      "options": [
        "UPPER",
        "CAPITALIZE",
        "INITCAP",
        "PROPER"
      ],
      "correct": 2,
      "explanation": "Funkce INITCAP převede první písmeno každého slova na velké a zbytek na malá písmena ('Oracle Academy Database')."
    },
    {
      "id": "sql_q14",
      "module": "sql_m2",
      "question": "What is the return value of ROUND(45.926, 2) in Oracle SQL?",
      "code": "SELECT ROUND(45.926, 2) FROM dual;",
      "options": [
        "45.92",
        "45.93",
        "46",
        "45.926"
      ],
      "correct": 1,
      "explanation": "Funkce ROUND zaokrouhlí číslo na 2 desetinná místa. Číslice 6 zaokrouhlí 2 nahoru na 3, výsledek je 45.93."
    },
    {
      "id": "sql_q15",
      "module": "sql_m2",
      "question": "What is the return value of TRUNC(45.926, 2) in Oracle SQL?",
      "code": "SELECT TRUNC(45.926, 2) FROM dual;",
      "options": [
        "45.93",
        "45.92",
        "45.9",
        "46"
      ],
      "correct": 1,
      "explanation": "Funkce TRUNC ořízne (odsekne) desetinná místa bez zaokrouhlování, výsledek je 45.92."
    },
    {
      "id": "sql_q16",
      "module": "sql_m2",
      "question": "What is the return value of the modulus function MOD(13, 5)?",
      "code": "SELECT MOD(13, 5) FROM dual;",
      "options": [
        "2",
        "3",
        "2.6",
        "1"
      ],
      "correct": 1,
      "explanation": "Funkce MOD vrací zbytek po celočíselném dělení: 13 / 5 = 2 se zbytkem 3."
    },
    {
      "id": "sql_q17",
      "module": "sql_m2",
      "question": "Which SQL function returns the current date and time of the database server?",
      "code": "SELECT [???] FROM dual;",
      "options": [
        "CURRENT_TIME",
        "TODAY()",
        "SYSDATE",
        "NOW()"
      ],
      "correct": 2,
      "explanation": "V Oracle SQL vrací pseudofunkce SYSDATE aktuální datum a čas databázového serveru."
    },
    {
      "id": "sql_q18",
      "module": "sql_m2",
      "question": "What does subtracting two dates (date1 - date2) return in Oracle SQL?",
      "code": "SELECT sysdate - hire_date FROM employees;",
      "options": [
        "An interval datatype string",
        "The number of days (and fractions of a day) between the dates",
        "The number of months between the dates",
        "An error (arithmetic on dates is not supported)"
      ],
      "correct": 1,
      "explanation": "Odečtením dvou dat v Oracle SQL získáte počet dní (jako numerickou hodnotu, kde zlomky reprezentují hodiny/minuty)."
    },
    {
      "id": "sql_q19",
      "module": "sql_m2",
      "question": "Which function is used to convert a date or number to a formatted character string?",
      "code": "SELECT [???](hire_date, 'DD-Month-YYYY') FROM employees;",
      "options": [
        "TO_DATE",
        "TO_CHAR",
        "CONVERT",
        "CAST_CHAR"
      ],
      "correct": 1,
      "explanation": "Funkce TO_CHAR převádí datum nebo číslo na formátovaný textový řetězec podle zadané formátovací masky."
    },
    {
      "id": "sql_q20",
      "module": "sql_m2",
      "question": "Which function replaces a NULL value with a specified substitute expression in Oracle SQL?",
      "code": "SELECT salary + (salary * [???](commission_pct, 0)) FROM employees;",
      "options": [
        "IFNULL",
        "ISNULL",
        "NVL",
        "NULLIF"
      ],
      "correct": 2,
      "explanation": "Funkce NVL(expr1, expr2) nahradí hodnotu NULL v prvním argumentu hodnotou druhého argumentu."
    },
    {
      "id": "sql_q21",
      "module": "sql_m2",
      "question": "What does the function NVL2(expr1, expr2, expr3) return when expr1 is NOT NULL?",
      "code": "SELECT NVL2(commission_pct, 'Commissioned', 'Salary Only') FROM employees;",
      "options": [
        "expr1",
        "expr2",
        "expr3",
        "NULL"
      ],
      "correct": 1,
      "explanation": "Funkce NVL2 testuje první argument: pokud NENÍ null, vrátí druhý argument (expr2). Pokud JE null, vrátí třetí argument (expr3)."
    },
    {
      "id": "sql_q22",
      "module": "sql_m2",
      "question": "What does NULLIF(expr1, expr2) return if expr1 is equal to expr2?",
      "code": "SELECT NULLIF(length(first_name), length(last_name)) FROM employees;",
      "options": [
        "expr1",
        "0",
        "NULL",
        "true"
      ],
      "correct": 2,
      "explanation": "Funkce NULLIF porovná dva výrazy: pokud se sobě rovnají, vrátí NULL. Pokud se nerovnají, vrátí expr1."
    },
    {
      "id": "sql_q23",
      "module": "sql_m2",
      "question": "Which function evaluates a list of expressions and returns the FIRST non-null value among them?",
      "code": "SELECT [???](commission_pct, salary, 0) FROM employees;",
      "options": [
        "NVL",
        "COALESCE",
        "FIRST_VALUE",
        "DECODE"
      ],
      "correct": 1,
      "explanation": "Funkce COALESCE přijímá proměnný počet argumentů a vrací první z nich, který není NULL."
    },
    {
      "id": "sql_q24",
      "module": "sql_m3",
      "question": "Which SQL clause is used to filter GROUPS after aggregate functions have been applied?",
      "code": "SELECT department_id, AVG(salary) \nFROM employees \nGROUP BY department_id \n[???] AVG(salary) > 5000;",
      "options": [
        "WHERE",
        "HAVING",
        "FILTER",
        "RESTRICT"
      ],
      "correct": 1,
      "explanation": "Klauzule HAVING slouží k filtrování agregovaných skupin (výsledků skupinových funkcí). Klauzule WHERE filtruje jednotlivé řádky před seskupením."
    },
    {
      "id": "sql_q25",
      "module": "sql_m3",
      "question": "True or False: Group functions (such as AVG, SUM, MAX) can be used directly in a WHERE clause.",
      "code": "SELECT first_name FROM employees WHERE salary > AVG(salary);",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Tvrzení je False! Skupinové funkce nelze použít v klauzuli WHERE (vyvolá ORA-00934: group function is not allowed here). Musí se použít poddotaz nebo HAVING."
    },
    {
      "id": "sql_q26",
      "module": "sql_m3",
      "question": "How does COUNT(*) differ from COUNT(commission_pct) in SQL?",
      "code": null,
      "options": [
        "COUNT(*) ignores duplicates, while COUNT(column) includes them",
        "COUNT(*) counts all rows including NULLs, while COUNT(column) ignores NULL values",
        "COUNT(*) counts only numeric columns",
        "There is no difference in output"
      ],
      "correct": 1,
      "explanation": "COUNT(*) započítá všechny řádky v tabulce bez ohledu na null hodnoty, zatímco COUNT(sloupec) ignoruje řádky, kde je daný sloupec NULL."
    },
    {
      "id": "sql_q27",
      "module": "sql_m3",
      "question": "If a query contains both aggregate functions and individual columns in the SELECT list, what rule MUST be followed?",
      "code": "SELECT department_id, job_id, AVG(salary) \nFROM employees \n[???];",
      "options": [
        "The individual columns must also be listed in the GROUP BY clause",
        "The individual columns must be enclosed in NVL",
        "An ORDER BY clause is required",
        "The query will execute without a GROUP BY clause automatically"
      ],
      "correct": 0,
      "explanation": "Všechny sloupce v SELECT seznamu, které nejsou vnořené do skupinové funkce, MUSÍ být uvedeny v klauzuli GROUP BY (jinak nastane chyba ORA-00937)."
    },
    {
      "id": "sql_q28",
      "module": "sql_m3",
      "question": "Which GROUP BY extension creates subtotals from right to left in a hierarchy, along with a final grand total?",
      "code": "SELECT department_id, job_id, SUM(salary) \nFROM employees \nGROUP BY [???](department_id, job_id);",
      "options": [
        "CUBE",
        "ROLLUP",
        "GROUPING SETS",
        "TOTAL"
      ],
      "correct": 1,
      "explanation": "ROLLUP vytváří hierarchické mezisoučty zprava doleva a na závěr celkový součet (grand total)."
    },
    {
      "id": "sql_q29",
      "module": "sql_m3",
      "question": "Which GROUP BY extension produces subtotals for ALL possible cross-dimensional combinations of the specified columns?",
      "code": "SELECT department_id, job_id, SUM(salary) \nFROM employees \nGROUP BY [???](department_id, job_id);",
      "options": [
        "ROLLUP",
        "CUBE",
        "AGGREGATE ALL",
        "CROSS_TOTAL"
      ],
      "correct": 1,
      "explanation": "CUBE generuje mezisoučty pro všechny možné kombinace dimenzí (2^n kombinací pro n sloupců)."
    },
    {
      "id": "sql_q30",
      "module": "sql_m4",
      "question": "Which type of join returns all rows from the left table even if there are no matching rows in the right table?",
      "code": "SELECT e.last_name, d.department_name \nFROM employees e \n[???] departments d ON e.department_id = d.department_id;",
      "options": [
        "INNER JOIN",
        "RIGHT OUTER JOIN",
        "LEFT OUTER JOIN",
        "CROSS JOIN"
      ],
      "correct": 2,
      "explanation": "LEFT OUTER JOIN vrátí všechny záznamy z levé tabulky; pokud pro ně neexistuje shoda v pravé tabulce, doplní sloupce pravé tabulky hodnotami NULL."
    },
    {
      "id": "sql_q31",
      "module": "sql_m4",
      "question": "In an ANSI SQL join using the USING clause, what restriction applies to the join column in the SELECT list?",
      "code": "SELECT department_id, department_name \nFROM employees JOIN departments USING (department_id);",
      "options": [
        "The join column must be prefixed with both table names",
        "The join column cannot have a table name or table alias qualifier",
        "The join column must be converted with TO_CHAR",
        "The column must be sorted with ORDER BY"
      ],
      "correct": 1,
      "explanation": "Při spojení pomocí klauzule USING nesmí mít spojovaný sloupec v SELECTu žádný prefix ani alias tabulky (zápis e.department_id vyvolá ORA-25154)."
    },
    {
      "id": "sql_q32",
      "module": "sql_m4",
      "question": "What is a Cartesian product (CROSS JOIN) in SQL?",
      "code": "SELECT * FROM employees CROSS JOIN departments;",
      "options": [
        "A join that matches only identical primary keys",
        "A join where every row of the first table is paired with every row of the second table",
        "A join that produces an empty result set",
        "A join that deletes non-matching rows"
      ],
      "correct": 1,
      "explanation": "Kartézský součin (CROSS JOIN) kombinuje každý řádek první tabulky s každým řádkem druhé tabulky (výsledný počet řádků je N * M)."
    },
    {
      "id": "sql_q33",
      "module": "sql_m5",
      "question": "Which operator can be used with a multiple-row subquery to test if a value is equal to ANY value returned by the subquery?",
      "code": "SELECT * FROM employees \nWHERE department_id [???] (SELECT department_id FROM departments WHERE location_id = 1700);",
      "options": [
        "=",
        "IN",
        "LIKE",
        "EXISTS_ALL"
      ],
      "correct": 1,
      "explanation": "Pro víceřádkové poddotazy se používá operátor IN (případně = ANY). Běžný operátor rovná se (=) selže s chybou ORA-01427."
    },
    {
      "id": "sql_q34",
      "module": "sql_m5",
      "question": "What happens if a multiple-row subquery evaluated with the NOT IN operator returns a result set containing a NULL value?",
      "code": "SELECT * FROM employees \nWHERE employee_id NOT IN (SELECT manager_id FROM employees);",
      "options": [
        "The NULL values are automatically ignored",
        "The entire outer query returns ZERO rows",
        "An exception ORA-01400 is raised",
        "Only non-matching rows are returned"
      ],
      "correct": 1,
      "explanation": "Záludnost operátoru NOT IN: pokud poddotaz vrátí alespoň jednu hodnotu NULL, výraz 'val != NULL' je UNKNOWN a celý vnější dotaz nevrátí vůbec žádný řádek!"
    },
    {
      "id": "sql_q35",
      "module": "sql_m6",
      "question": "What is the crucial difference between DELETE FROM table_name and TRUNCATE TABLE table_name?",
      "code": null,
      "options": [
        "DELETE cannot use a WHERE clause, while TRUNCATE can",
        "DELETE is DML (can be rolled back, fires triggers); TRUNCATE is DDL (fast, resets storage, cannot be rolled back)",
        "TRUNCATE deletes the table definition, while DELETE preserves it",
        "There is no difference in behavior"
      ],
      "correct": 1,
      "explanation": "DELETE je DML operace (lze odvolat pomocí ROLLBACK a aktivuje triggery). TRUNCATE je DDL operace (rychlá, uvolní místo, nespouští triggery a nelze ji vrátit zpět)."
    },
    {
      "id": "sql_q36",
      "module": "sql_m6",
      "question": "Which command permanently saves all uncommitted DML changes made in the current database transaction?",
      "code": null,
      "options": [
        "SAVE",
        "COMMIT",
        "PERSIST",
        "STORE"
      ],
      "correct": 1,
      "explanation": "Příkaz COMMIT trvale potvrdí a zapíše všechny změny provedené v aktuální transakci do databáze."
    },
    {
      "id": "sql_q37",
      "module": "sql_m6",
      "question": "Which command cancels and undoes all uncommitted changes in the current transaction?",
      "code": null,
      "options": [
        "UNDO",
        "ROLLBACK",
        "CANCEL",
        "REVERT"
      ],
      "correct": 1,
      "explanation": "Příkaz ROLLBACK zruší všechny neuložené změny v transakci od posledního COMMITu nebo k zadanému SAVEPOINTu."
    },
    {
      "id": "sql_q38",
      "module": "sql_m6",
      "question": "Which table constraint enforces both uniqueness and a NOT NULL rule on the specified column(s)?",
      "code": null,
      "options": [
        "UNIQUE",
        "CHECK",
        "PRIMARY KEY",
        "FOREIGN KEY"
      ],
      "correct": 2,
      "explanation": "Omezení PRIMARY KEY automaticky vyžaduje unikátnost (UNIQUE) i nepřípustnost prázdné hodnoty (NOT NULL)."
    },
    {
      "id": "sql_q39",
      "module": "sql_m6",
      "question": "Which option on a FOREIGN KEY constraint automatically deletes dependent child rows when a referenced parent row is deleted?",
      "code": "FOREIGN KEY (dept_id) REFERENCES departments(department_id) [???]",
      "options": [
        "ON DELETE REMOVE",
        "ON DELETE CASCADE",
        "ON DELETE PURGE",
        "AUTO CASCADE DELETE"
      ],
      "correct": 1,
      "explanation": "Klauzule ON DELETE CASCADE zajistí kaskádové smazání všech podřízených řádků v dceřiné tabulce při smazání rodičovského záznamu."
    },
    {
      "id": "sql_q40",
      "module": "sql_m6",
      "question": "Which pseudocolumn is used to generate and return the NEXT sequential integer value from an Oracle sequence object?",
      "code": "INSERT INTO employees (emp_id, first_name) \nVALUES (emp_seq.[???], 'David');",
      "options": [
        "CURRVAL",
        "NEXTVAL",
        "INCREMENT",
        "NEWVAL"
      ],
      "correct": 1,
      "explanation": "Pseudokolona NEXTVAL inkrementuje sekvenci a vrátí nové vygenerované unikátní číslo. CURRVAL vrátí aktuální již vygenerovanou hodnotu."
    }
  ]
}
,
  python: {
  "id": "python",
    category: "software",
    categoryName: "Programové vybavení",
  "title": "Cisco Networking Academy: Python Essentials 1",
  "subtitle": "Příprava na certifikaci PCEP-30-02 (Certified Entry-Level Python Programmer)",
  "badge": "Python Essentials 1",
  "icon": "fab fa-python",
  "color": "#3776AB",
  "passScore": 70,
  "timeLimit": 45,
  "modules": [
    {
      "id": "py_m1",
      "name": "PE1-M1: Úvod do programování & Základní syntaxe"
    },
    {
      "id": "py_m2",
      "name": "PE1-M2: Datové typy, Operátory & Vstup/Výstup"
    },
    {
      "id": "py_m3",
      "name": "PE1-M3: Řízení toku, Cykly & Seznamy (Lists)"
    },
    {
      "id": "py_m4",
      "name": "PE1-M4: Funkce, N-tice (Tuples), Slovníky & Výjimky"
    }
  ],
  "questions": [
    {
      "id": "py_q01",
      "module": "py_m1",
      "question": "What is an interpreter in the context of computer programming?",
      "code": null,
      "options": [
        "A program that translates and executes high-level source code line-by-line on the fly without producing a separate machine code file",
        "A hardware processor component that directly executes Python syntax without translation",
        "A compiler that translates the entire source code into a standalone binary executable file before execution",
        "A text editor specialized for writing and formatting Python scripts"
      ],
      "correct": 0,
      "explanation": "Interpret (interpretátor) je program, který načítá zdrojový kód a postupně řádek po řádku jej překládá a rovnou vykonává. Nevytváří samostatný spustitelný soubor se strojovým kódem (jak to dělá kompilátor)."
    },
    {
      "id": "py_q02",
      "module": "py_m1",
      "question": "What is CPython?",
      "code": null,
      "options": [
        "A Python program compiled exclusively to C language headers",
        "The default, reference, and most widely used implementation of the Python programming language, written in C",
        "A specialized Python compiler designed only for embedded microcontroller circuits",
        "A superset of Python that enforces static typing for high-performance computing"
      ],
      "correct": 1,
      "explanation": "CPython je výchozí a nejrozšířenější referenční implementace Pythonu, kterou vytvořil Guido van Rossum a která je naprogramována v jazyce C."
    },
    {
      "id": "py_q03",
      "module": "py_m1",
      "question": "Which of the following statements about Python's creator and development history is true?",
      "code": null,
      "options": [
        "Python was created by Bjarne Stroustrup in 1985 as an extension to C",
        "Python was named after the Monty Python comedy troupe and created by Guido van Rossum",
        "Python was designed by James Gosling at Sun Microsystems in 1995",
        "Python was created by Dennis Ritchie at Bell Labs"
      ],
      "correct": 1,
      "explanation": "Python vytvořil Guido van Rossum na přelomu 80. a 90. let a pojmenoval jej po slavné britské komediální skupině Monty Python (nikoliv podle hada)."
    },
    {
      "id": "py_q04",
      "module": "py_m1",
      "question": "What is the expected output of the following code snippet?",
      "code": "print(2 ** 3 ** 2)",
      "options": [
        "512",
        "64",
        "72",
        "SyntaxError"
      ],
      "correct": 0,
      "explanation": "Operátor umocnění (**) má v Pythonu asociativitu zprava doleva (right-to-left binding). Výraz se tedy vyhodnocuje jako 2 ** (3 ** 2) = 2 ** 9 = 512. Pokud by se vyhodnocoval zleva doprava jako (2 ** 3) ** 2, vyšlo by 64."
    },
    {
      "id": "py_q05",
      "module": "py_m1",
      "question": "What is the expected output of the following code snippet?",
      "code": "print(1 // 2 * 3)",
      "options": [
        "0",
        "1.5",
        "0.0",
        "1"
      ],
      "correct": 0,
      "explanation": "Operátory celočíselného dělení (//) a násobení (*) mají stejnou prioritu a vyhodnocují se zleva doprava. Nejprve 1 // 2 dává celočíselně 0 (protože 0.5 se zaokrouhlí dolů na 0). Následně 0 * 3 dává 0."
    },
    {
      "id": "py_q06",
      "module": "py_m1",
      "question": "What is the expected output of the following code snippet?",
      "code": "print(0o10 + 0x10 + 0b10)",
      "options": [
        "26",
        "30",
        "101010",
        "ValueError"
      ],
      "correct": 0,
      "explanation": "Python podporuje různé číselné soustavy: 0o10 je osmičkově (8 v desítkové), 0x10 je šestnáctkově (16 v desítkové) a 0b10 je dvojkově (2 v desítkové). Součet je 8 + 16 + 2 = 26."
    },
    {
      "id": "py_q07",
      "module": "py_m1",
      "question": "What is the expected result of the following expression in Python 3?",
      "code": "print(type(1 / 1))",
      "options": [
        "<class 'float'>",
        "<class 'int'>",
        "<class 'number'>",
        "1.0"
      ],
      "correct": 0,
      "explanation": "V Pythonu 3 operátor standardního dělení (/) vždy vrací číslo s plovoucí řadovou čárkou (float), a to i v případě, že se dělí beze zbytku (1 / 1 dává 1.0, což je typ float)."
    },
    {
      "id": "py_q08",
      "module": "py_m1",
      "question": "What does the following print() invocation display on the console?",
      "code": "print(\"H\", \"E\", \"X\", sep=\"*\", end=\"!\")",
      "options": [
        "H*E*X!",
        "H E X*!",
        "H*E*X\\n!",
        "HEX*!"
      ],
      "correct": 0,
      "explanation": "Argument sep definuje oddělovač mezi jednotlivými hodnotami (zde '*') a argument end definuje zakončení celého výpisu (zde '!' místo výchozího nového řádku '\\n'). Výsledkem je H*E*X!."
    },
    {
      "id": "py_q09",
      "module": "py_m1",
      "question": "The \\n digraph in a Python string literal forces the print() function to:",
      "code": null,
      "options": [
        "break the output line and move subsequent printing to a new line",
        "cancel printing and flush the stream buffer",
        "print a literal lowercase letter 'n'",
        "insert a horizontal tabulation space"
      ],
      "correct": 0,
      "explanation": "Znak '\\n' je escape sekvence (newline), která způsobí odřádkování — přechod na nový řádek výstupu."
    },
    {
      "id": "py_q10",
      "module": "py_m1",
      "question": "Which of the following numbers is represented using scientific floating-point notation in Python?",
      "code": null,
      "options": [
        "3e8",
        "3^8",
        "3**8",
        "0x38"
      ],
      "correct": 0,
      "explanation": "V Pythonu se vědecký (exponenciální) zápis čísel s plovoucí řadovou čárkou zapisuje pomocí písmene 'e' nebo 'E' (např. 3e8 odpovídá 3 * 10^8 = 300000000.0)."
    },
    {
      "id": "py_q11",
      "module": "py_m2",
      "question": "What is the output of the following snippet?",
      "code": "z = y = x = 1\nprint(x, y, z, sep='*')",
      "options": [
        "1*1*1",
        "1 1 1",
        "x*y*z",
        "1*1*1*"
      ],
      "correct": 0,
      "explanation": "Hromadné přiřazení z = y = x = 1 nastaví všechny tři proměnné na hodnotu 1. Funkce print s argumentem sep='*' je vytiskne oddělené hvězdičkou: 1*1*1."
    },
    {
      "id": "py_q12",
      "module": "py_m2",
      "question": "What will happen when you execute the following code?",
      "code": "y = 2 + 3 * 5\nprint(Y)",
      "options": [
        "The snippet will cause a NameError runtime exception",
        "It will print 17",
        "It will print 25",
        "It will print None"
      ],
      "correct": 0,
      "explanation": "Python je striktně 'case-sensitive' (rozlišuje velká a malá písmena). Proměnná byla definována malým písmenem 'y', ale funkce print volá velké 'Y', což vyvolá NameError: name 'Y' is not defined."
    },
    {
      "id": "py_q13",
      "module": "py_m2",
      "question": "What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?",
      "code": "x = int(input())\ny = int(input())\nprint(x + y)",
      "options": [
        "6",
        "24",
        "2 4",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Funkce input() načítá textový řetězec (str). Funkce int() oba vstupy převede na celá čísla 2 a 4. Operátor + pak provede matematické sčítání: 2 + 4 = 6."
    },
    {
      "id": "py_q14",
      "module": "py_m2",
      "question": "What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?",
      "code": "x = input()\ny = input()\nprint(x + y)",
      "options": [
        "24",
        "6",
        "2 4",
        "ValueError"
      ],
      "correct": 0,
      "explanation": "Funkce input() vrací hodnoty jako řetězce (str: '2' a '4'). Operátor + mezi dvěma řetězci provádí zřetězení (konkatenaci), nikoli aritmetické sčítání. Výsledkem je spojení řetězců na '24'."
    },
    {
      "id": "py_q15",
      "module": "py_m2",
      "question": "What is the output of the following snippet?",
      "code": "x = 1\ny = 2\nx, y, z = x, x, y\nz, y, z = x, y, z\nprint(x, y, z)",
      "options": [
        "1 1 2",
        "1 2 1",
        "2 1 1",
        "1 2 2"
      ],
      "correct": 0,
      "explanation": "Po 1. kroku: (x, y, z) = (1, 1, 2), tedy x=1, y=1, z=2. Po 2. kroku: pravá strana je (1, 1, 2); levá strana postupně přiřadí z=1, y=1 a následně z=2 (přepíše předchozí z). Výsledné hodnoty jsou x=1, y=1, z=2."
    },
    {
      "id": "py_q16",
      "module": "py_m2",
      "question": "What is the output of the following snippet if the user enters 3 and 2 on consecutive lines?",
      "code": "x = int(input())\ny = int(input())\nx = x % y\nx = x % y\ny = y % x\nprint(y)",
      "options": [
        "0",
        "1",
        "2",
        "ZeroDivisionError"
      ],
      "correct": 0,
      "explanation": "Vstupy jsou x=3, y=2. 1) x = 3 % 2 = 1. 2) x = 1 % 2 = 1. 3) y = 2 % 1 = 0 (2 děleno 1 je 2 se zbytkem 0). Výsledné y je 0."
    },
    {
      "id": "py_q17",
      "module": "py_m2",
      "question": "What is the output of the following snippet?",
      "code": "print(\"3\" * 2 + \"2\" * 3)",
      "options": [
        "33222",
        "12",
        "323232",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Operátor * mezi řetězcem a celým číslem replikuje text: '3' * 2 je '33' a '2' * 3 je '222'. Operátor + je následně spojí (konkatenace) do '33222'."
    },
    {
      "id": "py_q18",
      "module": "py_m2",
      "question": "Which of the following is an ILLEGAL identifier / variable name in Python?",
      "code": null,
      "options": [
        "1st_score",
        "_score_1",
        "score_1st",
        "Score"
      ],
      "correct": 0,
      "explanation": "V Pythonu identifikátory (názvy proměnných, funkcí atd.) nesmí začínat číslicí. Název '1st_score' je proto neplatný a způsobí SyntaxError."
    },
    {
      "id": "py_q19",
      "module": "py_m2",
      "question": "What is the expected output of the following bitwise shift operation?",
      "code": "print(1 << 3)",
      "options": [
        "8",
        "4",
        "3",
        "1"
      ],
      "correct": 0,
      "explanation": "Bitový posun doleva (<<) posune bity čísla 1 o 3 pozice doleva (0b0001 -> 0b1000). To odpovídá vynásobení 1 * (2 ** 3) = 8."
    },
    {
      "id": "py_q20",
      "module": "py_m2",
      "question": "What is the output of the following snippet involving bitwise XOR?",
      "code": "a = 1\nb = 0\na = a ^ b\nb = a ^ b\na = a ^ b\nprint(a, b)",
      "options": [
        "0 1",
        "1 0",
        "1 1",
        "0 0"
      ],
      "correct": 0,
      "explanation": "Tento kód představuje klasický algoritmus pro prohození hodnot dvou proměnných pomocí bitového XOR (XOR swap): a=1, b=0 -> a=1^0=1 -> b=1^0=1 -> a=1^1=0. Výsledné hodnoty jsou a=0, b=1."
    },
    {
      "id": "py_q21",
      "module": "py_m3",
      "question": "What is the output of the following snippet?",
      "code": "x = 1\nx = x == x\nprint(x)",
      "options": [
        "True",
        "1",
        "False",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Relační operátor rovnosti (==) má na pravé straně vyšší prioritu než přiřazení (=). Výraz x == x (1 == 1) je pravdivý a vrací booleovskou hodnotu True, která je následně uložena do x."
    },
    {
      "id": "py_q22",
      "module": "py_m3",
      "question": "What is the output of the following snippet?",
      "code": "i = 0\nwhile i < i + 2:\n    i += 1\n    print(\"*\", end=\"\")\n    if i == 2:\n        break\nelse:\n    print(\"*\", end=\"\")",
      "options": [
        "**",
        "***",
        "*",
        "An infinite loop"
      ],
      "correct": 0,
      "explanation": "Cyklus provede dvě iterace (vytiskne dvě hvězdičky), a když i dosáhne hodnoty 2, provede se příkaz break. Větev else u cyklu while/for se vykoná POUZE tehdy, pokud cyklus doběhne přirozeně (nikoli přerušením pomocí break). Proto se větev else přeskočí a vytisknou se pouze 2 hvězdičky: **."
    },
    {
      "id": "py_q23",
      "module": "py_m3",
      "question": "How many hashes (#) will the following snippet send to the console?",
      "code": "var = 0\nwhile var < 6:\n    var += 1\n    if var % 2 == 0:\n        continue\n    print(\"#\")",
      "options": [
        "3",
        "6",
        "2",
        "0"
      ],
      "correct": 0,
      "explanation": "Proměnná var postupně nabývá hodnot 1, 2, 3, 4, 5, 6. Pro sudá čísla (2, 4, 6) podmínka var % 2 == 0 způsobí vykonání continue, což přeskočí zbytek těla cyklu. Příkaz print('#') se tak zavolá pouze pro lichá čísla 1, 3 a 5, tedy celkem 3krát."
    },
    {
      "id": "py_q24",
      "module": "py_m3",
      "question": "How many elements does the lst list contain after execution of this snippet?",
      "code": "lst = [i for i in range(-1, -2)]\nprint(len(lst))",
      "options": [
        "0",
        "1",
        "2",
        "SyntaxError"
      ],
      "correct": 0,
      "explanation": "Funkce range(start, stop) má výchozí krok step = +1. Pokud začínáme na -1 a chceme jít do -2 s kladným krokem (+1), podmínka konce je okamžitě splněna a sekvence je prázdná. Seznam má tedy délku 0."
    },
    {
      "id": "py_q25",
      "module": "py_m3",
      "question": "What is the output of the following snippet?",
      "code": "vals = [0, 1, 2]\nvals.insert(0, 1)\ndel vals[1]\nprint(sum(vals))",
      "options": [
        "4",
        "3",
        "2",
        "5"
      ],
      "correct": 0,
      "explanation": "Původní seznam: [0, 1, 2]. 1) vals.insert(0, 1) vloží prvek 1 na index 0 -> seznam je [1, 0, 1, 2]. 2) del vals[1] smaže prvek na indexu 1 (kterým je 0) -> seznam je [1, 1, 2]. 3) sum([1, 1, 2]) = 1 + 1 + 2 = 4."
    },
    {
      "id": "py_q26",
      "module": "py_m3",
      "question": "What does the second line of the following snippet do to the vals list?",
      "code": "vals = [0, 1, 2]\nvals[0], vals[2] = vals[2], vals[0]",
      "options": [
        "It reverses the list to [2, 1, 0]",
        "It leaves the list completely unchanged",
        "It raises an IndexError exception",
        "It doubles the first element"
      ],
      "correct": 0,
      "explanation": "Přiřazení vals[0], vals[2] = vals[2], vals[0] prohodí prvek na indexu 0 (první prvek) a indexu 2 (třetí prvek). Seznam [0, 1, 2] se tak změní na [2, 1, 0], což jej v tomto případě obrátí (reverzuje)."
    },
    {
      "id": "py_q27",
      "module": "py_m3",
      "question": "What is the output of the following snippet?",
      "code": "my_list = [1, 2]\nfor v in range(2):\n    my_list.insert(-1, my_list[v])\nprint(my_list)",
      "options": [
        "[1, 1, 1, 2]",
        "[1, 2, 1, 2]",
        "[2, 1, 1, 2]",
        "[1, 2, 2, 2]"
      ],
      "correct": 0,
      "explanation": "Metoda insert(-1, x) vkládá prvek před poslední prvek seznamu! 1) v=0: vloží my_list[0] (1) před prvek 2 -> [1, 1, 2]. 2) v=1: vloží my_list[1] (1) před prvek 2 -> [1, 1, 1, 2]. Výsledkem je [1, 1, 1, 2]."
    },
    {
      "id": "py_q28",
      "module": "py_m3",
      "question": "What is the output of the following snippet?",
      "code": "nums = [1, 2, 3]\nvals = nums\ndel vals[:]\nprint(nums, vals)",
      "options": [
        "[] []",
        "[1, 2, 3] []",
        "[] [1, 2, 3]",
        "[1, 2, 3] [1, 2, 3]"
      ],
      "correct": 0,
      "explanation": "Přiřazení vals = nums nevytváří novou kopii, ale pouze další referenci (odkaz) na tentýž objekt seznamu v paměti. Příkaz del vals[:] smaže všechny prvky v tomto společném objektu. Obě proměnné nums i vals proto ukazují na stejný prázdný seznam []."
    },
    {
      "id": "py_q29",
      "module": "py_m3",
      "question": "What is the output of the following snippet?",
      "code": "my_list = [3, 1, -2]\nprint(my_list[my_list[-1]])",
      "options": [
        "1",
        "3",
        "-2",
        "IndexError"
      ],
      "correct": 0,
      "explanation": "Index my_list[-1] vrací poslední prvek seznamu, což je hodnota -2. Následně se vyhodnotí my_list[-2], což je předposlední prvek seznamu, tedy hodnota 1."
    },
    {
      "id": "py_q30",
      "module": "py_m3",
      "question": "What is the output of the following snippet?",
      "code": "t = [[3-i for i in range(3)] for j in range(3)]\ns = 0\nfor i in range(3):\n    s += t[i][i]\nprint(s)",
      "options": [
        "6",
        "9",
        "3",
        "0"
      ],
      "correct": 0,
      "explanation": "Každý řádek matice t je vytvořen jako [3-0, 3-1, 3-2] = [3, 2, 1]. V cyklu se sčítají prvky na hlavní diagonále: t[0][0] = 3, t[1][1] = 2, t[2][2] = 1. Součet je s = 3 + 2 + 1 = 6."
    },
    {
      "id": "py_q31",
      "module": "py_m4",
      "question": "The meaning of a positional argument in a function call is determined by:",
      "code": null,
      "options": [
        "its position within the argument list",
        "its name assigned in the function definition",
        "its data type and memory footprint",
        "the return statement of the function"
      ],
      "correct": 0,
      "explanation": "Význam pozičního argumentu je určen výhradně jeho pozicí (pořadím) v seznamu předávaných argumentů při volání funkce, nikoli jeho názvem."
    },
    {
      "id": "py_q32",
      "module": "py_m4",
      "question": "Which of the following function invocations will raise a TypeError for a function defined as: def fun(a, b=2, c=3):",
      "code": "def fun(a, b=2, c=3):\n    return a + b + c",
      "options": [
        "fun(b=1, c=2)",
        "fun(1)",
        "fun(1, c=5)",
        "fun(a=1, b=2, c=3)"
      ],
      "correct": 0,
      "explanation": "Parametr 'a' nemá výchozí hodnotu (default value) a je povinný. Volání fun(b=1, c=2) nepředává povinný parametr 'a', což okamžitě vyvolá TypeError: fun() missing 1 required positional argument: 'a'."
    },
    {
      "id": "py_q33",
      "module": "py_m4",
      "question": "What is the expected result of the following code snippet?",
      "code": "def fun(x):\n    if x % 2 == 0:\n        return 1\n    else:\n        return\n\nprint(fun(fun(2)) + 1)",
      "options": [
        "It causes a runtime TypeError exception",
        "It prints 2",
        "It prints 1",
        "It prints None"
      ],
      "correct": 0,
      "explanation": "Volání fun(2) splní podmínku (2 % 2 == 0) a vrátí 1. Následně se volá fun(1). Protože 1 % 2 != 0, provede se větev else s příkazem 'return' bez hodnoty, což vrátí None. Pokus o sečtení None + 1 skončí chybou: TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'."
    },
    {
      "id": "py_q34",
      "module": "py_m4",
      "question": "What is the output of the following snippet?",
      "code": "def any():\n    print(var + 1, end=\"\")\n\nvar = 1\nany()\nprint(var)",
      "options": [
        "21",
        "22",
        "11",
        "UnboundLocalError"
      ],
      "correct": 0,
      "explanation": "Uvnitř funkce any() není proměnná var lokálně přiřazena, takže Python bezpečně přečte globální proměnnou var (1). Příkaz vytiskne var + 1 (2). Následně hlavní program vytiskne globální var (1). Výsledný výpis je '21'."
    },
    {
      "id": "py_q35",
      "module": "py_m4",
      "question": "What is the output of the following snippet?",
      "code": "def fun(inp=2, out=3):\n    return inp * out\n\nprint(fun(out=2))",
      "options": [
        "4",
        "6",
        "9",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Funkce má výchozí parametry inp=2 a out=3. Při volání fun(out=2) je parametru out explicitně předána hodnota 2 a parametr inp použije svou výchozí hodnotu 2. Funkce vrátí 2 * 2 = 4."
    },
    {
      "id": "py_q36",
      "module": "py_m4",
      "question": "What is the output of the following snippet?",
      "code": "tup = (1, 2, 4, 8)\ntup = tup[-2:-1]\ntup = tup[-1]\nprint(tup)",
      "options": [
        "4",
        "(4,)",
        "8",
        "(4, 8)"
      ],
      "correct": 0,
      "explanation": "1) tup = (1, 2, 4, 8). 2) tup[-2:-1] vyřízne z n-tice prvek od indexu -2 (4) do indexu -1 (8, neobsahuje se). Vznikne jednoprvková n-tice (4,). 3) tup[-1] vybere poslední prvek této n-tice, čímž získá celé číslo 4. print(tup) tedy vytiskne 4."
    },
    {
      "id": "py_q37",
      "module": "py_m4",
      "question": "What will happen when you run the following code?",
      "code": "my_tuple = (1, 2)\nmy_tuple[1] = my_tuple[1] + my_tuple[0]",
      "options": [
        "The code will raise a TypeError exception",
        "The tuple becomes (1, 3)",
        "The tuple becomes (3, 2)",
        "The code will execute without any output"
      ],
      "correct": 0,
      "explanation": "N-tice (tuples) jsou v Pythonu neměnné (immutable). Pokus o změnu nebo přiřazení prvku podle indexu (my_tuple[1] = ...) je nepřípustný a vyvolá TypeError: 'tuple' object does not support item assignment."
    },
    {
      "id": "py_q38",
      "module": "py_m4",
      "question": "What is the output of the following snippet?",
      "code": "dct = {'one': 'two', 'three': 'one', 'two': 'three'}\nv = dct['three']\nfor k in range(len(dct)):\n    v = dct[v]\nprint(v)",
      "options": [
        "one",
        "two",
        "three",
        "KeyError"
      ],
      "correct": 0,
      "explanation": "Počáteční v = dct['three'] = 'one'. Délka slovníku je 3 (k = 0, 1, 2). 1. iterace: v = dct['one'] = 'two'. 2. iterace: v = dct['two'] = 'three'. 3. iterace: v = dct['three'] = 'one'. Po skončení cyklu je v rovno 'one'."
    },
    {
      "id": "py_q39",
      "module": "py_m4",
      "question": "What is the output of the following snippet?",
      "code": "d1 = {'Adam Smith': 'A', 'Judy Goode': 'B+'}\nd2 = {'Judy Goode': 'A', 'William Simon': 'C-'}\nd3 = {}\n\nfor item in (d1, d2):\n    d3.update(item)\n\nprint(d3['Judy Goode'])",
      "options": [
        "A",
        "B+",
        "None",
        "KeyError"
      ],
      "correct": 0,
      "explanation": "Metoda dict.update() vloží nebo aktualizuje klíče v cílovém slovníku d3. Při procházení slovníku d2 hodnota klíče 'Judy Goode' přepíše původní hodnotu 'B+' z d1 novou hodnotou 'A'. Proto d3['Judy Goode'] vrátí 'A'."
    },
    {
      "id": "py_q40",
      "module": "py_m4",
      "question": "What is the output of the following snippet?",
      "code": "try:\n    print(1/0)\nexcept ArithmeticError:\n    print(\"Arithmetic\")\nexcept ZeroDivisionError:\n    print(\"Zero\")",
      "options": [
        "Arithmetic",
        "Zero",
        "ZeroDivisionError",
        "SyntaxError"
      ],
      "correct": 0,
      "explanation": "Třída ZeroDivisionError je přímým potomkem obecnější třídy ArithmeticError v hierarchii výjimek Pythonu. Python testuje bloky except shora dolů. Protože ArithmeticError zachytí i všechny své podtřídy, první blok zachytí dělení nulou a vytiskne 'Arithmetic'. Blok ZeroDivisionError je nedosažitelný."
    }
  ]
}
,
  js2: {
  "id": "js2",
    category: "web",
    categoryName: "Webové aplikace",
  "title": "Cisco Networking Academy: JavaScript Essentials 2",
  "subtitle": "Příprava na certifikaci JSA – Certified Associate JavaScript Programmer",
  "badge": "JavaScript Essentials 2",
  "icon": "fab fa-js",
  "color": "#E5A91E",
  "passScore": 70,
  "timeLimit": 45,
  "modules": [
    {
      "id": "js2_m1",
      "name": "JSE2-M1: Bezřídové objekty & Prototypy (Classless Objects)"
    },
    {
      "id": "js2_m2",
      "name": "JSE2-M2: Třídy & Objektově orientovaný přístup (Classes & OOP)"
    },
    {
      "id": "js2_m3",
      "name": "JSE2-M3: Vestavěné objekty & Datové struktury (Built-In Objects)"
    },
    {
      "id": "js2_m4",
      "name": "JSE2-M4: Pokročilé funkce & Asynchronní programování"
    }
  ],
  "questions": [
    {
      "id": "js2_q01",
      "module": "js2_m1",
      "question": "Which notation is strictly required to access a property whose key contains spaces, hyphens, or begins with a number (e.g., 'first name')?",
      "code": "let user = { 'first name': 'Alice' };",
      "options": [
        "user['first name'] (bracket notation)",
        "user.'first name' (quoted dot notation)",
        "user->'first name' (arrow notation)",
        "user::first name (scope resolution notation)"
      ],
      "correct": 0,
      "explanation": "Tečková notace (dot notation) vyžaduje platný JavaScript identifikátor bez mezer a pomlček. Pokud klíč obsahuje mezery, pomlčky nebo začíná číslicí, je nutné použít závorkovou notaci (bracket notation): user['first name']."
    },
    {
      "id": "js2_q02",
      "module": "js2_m1",
      "question": "What is the result of executing the following snippet?",
      "code": "let book = { title: 'JS Guide', pages: 300 };\ndelete book.pages;\nconsole.log(book.pages);",
      "options": [
        "undefined",
        "null",
        "0",
        "ReferenceError"
      ],
      "correct": 0,
      "explanation": "Operátor delete odstraní vlastnost 'pages' z objektu 'book'. Pokus o přístup k neexistující vlastnosti objektu v JavaScriptu vrací hodnotu undefined (nevyvolá chybu)."
    },
    {
      "id": "js2_q03",
      "module": "js2_m1",
      "question": "What is the key difference between using the 'in' operator and the 'hasOwnProperty()' method when checking for property existence?",
      "code": null,
      "options": [
        "The 'in' operator checks the object and its entire prototype chain, while 'hasOwnProperty()' checks only the object's direct (own) properties",
        "'hasOwnProperty()' checks the prototype chain, while 'in' checks only direct properties",
        "The 'in' operator only works on arrays, while 'hasOwnProperty()' works only on plain objects",
        "There is no difference; they are exact aliases"
      ],
      "correct": 0,
      "explanation": "Operátor 'in' prochází celý prototypový řetězec (prototype chain) a vrátí true, i když je vlastnost zděděná z prototypu. Metoda hasOwnProperty() testuje výhradně přímé (vlastní) vlastnosti daného objektu bez procházení prototypu."
    },
    {
      "id": "js2_q04",
      "module": "js2_m1",
      "question": "What will the following loop iterate over?",
      "code": "let car = { make: 'Toyota', model: 'Corolla' };\nfor (let prop in car) {\n  console.log(prop);\n}",
      "options": [
        "The names of the enumerable properties ('make', 'model')",
        "The values of the properties ('Toyota', 'Corolla')",
        "Both keys and values as arrays [key, value]",
        "The indices of the properties as numbers (0, 1)"
      ],
      "correct": 0,
      "explanation": "Cyklus for...in v JavaScriptu iteruje přes názvy (klíče) všech vyčíslitelných (enumerable) vlastností objektu, nikoli přes jejich hodnoty."
    },
    {
      "id": "js2_q05",
      "module": "js2_m1",
      "question": "What is the output of the following code snippet?",
      "code": "let point1 = { x: 10, y: 20 };\nlet point2 = point1;\npoint2.x = 99;\nconsole.log(point1.x);",
      "options": [
        "99",
        "10",
        "undefined",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Objekty jsou v JavaScriptu referenční datové typy. Přiřazení point2 = point1 nevytváří nezávislou kopii, nýbrž druhou referenci ukazující na tentýž objekt v paměti. Změna přes point2.x se proto projeví i v point1.x."
    },
    {
      "id": "js2_q06",
      "module": "js2_m1",
      "question": "When defining a new property using Object.defineProperty() without explicitly providing descriptor attributes, what are the default values of writable, enumerable, and configurable?",
      "code": "let obj = {};\nObject.defineProperty(obj, 'test', { value: 100 });",
      "options": [
        "writable: false, enumerable: false, configurable: false",
        "writable: true, enumerable: true, configurable: true",
        "writable: true, enumerable: false, configurable: false",
        "writable: false, enumerable: true, configurable: true"
      ],
      "correct": 0,
      "explanation": "Při definici vlastnosti pomocí Object.defineProperty() mají všechny vynechané booleovské příznaky (writable, enumerable, configurable) výchozí hodnotu false (na rozdíl od běžného přiřazení obj.test = 100, kde jsou nastaveny na true)."
    },
    {
      "id": "js2_q07",
      "module": "js2_m1",
      "question": "What will the following code snippet output?",
      "code": "let config = {};\nObject.defineProperty(config, 'mode', {\n  value: 'strict',\n  writable: false\n});\nconfig.mode = 'lenient';\nconsole.log(config.mode);",
      "options": [
        "'strict'",
        "'lenient'",
        "undefined",
        "null"
      ],
      "correct": 0,
      "explanation": "Příznak writable: false způsobí, že vlastnost je pouze pro čtení (read-only). Pokus o přepsání v běžném režimu tiše selže a hodnota zůstane 'strict' (ve striktním režimu 'use strict' by vyvolal TypeError)."
    },
    {
      "id": "js2_q08",
      "module": "js2_m1",
      "question": "What effect does Object.freeze() have on an object?",
      "code": null,
      "options": [
        "It prevents adding new properties, removing existing properties, and modifying existing property values",
        "It only prevents deleting properties, but existing values can still be changed",
        "It converts all object properties into private variables",
        "It deep-freezes all nested objects recursively"
      ],
      "correct": 0,
      "explanation": "Metoda Object.freeze() objekt zmrazí (mělká neměnnost / shallow freeze): nelze přidávat nové vlastnosti, mazat existující ani měnit jejich hodnoty či konfigurovat jejich deskriptory."
    },
    {
      "id": "js2_q09",
      "module": "js2_m1",
      "question": "What is the difference between Object.seal() and Object.freeze()?",
      "code": null,
      "options": [
        "Object.seal() allows modifying the values of existing writable properties, whereas Object.freeze() makes all properties read-only",
        "Object.freeze() allows adding new properties, while Object.seal() does not",
        "Object.seal() operates recursively, while Object.freeze() is shallow",
        "There is no difference; they are identical methods"
      ],
      "correct": 0,
      "explanation": "Zapečetěný objekt (Object.seal) neumožňuje přidávat ani mazat vlastnosti, ale stávající hodnoty lze stále přepisovat (pokud jsou writable: true). Zmrazený objekt (Object.freeze) navíc nastaví všechny vlastnosti na writable: false."
    },
    {
      "id": "js2_q10",
      "module": "js2_m1",
      "question": "What will be printed to the console?",
      "code": "let vehicle = { wheels: 4 };\nlet truck = Object.create(vehicle);\ntruck.capacity = '5T';\nconsole.log(truck.wheels);",
      "options": [
        "4",
        "undefined",
        "null",
        "ReferenceError"
      ],
      "correct": 0,
      "explanation": "Metoda Object.create(vehicle) vytvoří nový objekt 'truck', jehož prototypem je 'vehicle'. Protože 'truck' nemá vlastní vlastnost 'wheels', vyhledá ji JavaScript po prototypovém řetězci (prototype chain) u prototypu a vrátí 4."
    },
    {
      "id": "js2_q11",
      "module": "js2_m2",
      "question": "What is the primary role of the constructor method in a JavaScript ES6 class?",
      "code": null,
      "options": [
        "It is a special method automatically executed when an instance of the class is created with the new keyword",
        "It is an optional destructor executed when an object is removed by garbage collection",
        "It is a static method used to register the class in the global scope",
        "It converts the class into an abstract prototype interface"
      ],
      "correct": 0,
      "explanation": "Metoda constructor je speciální metoda třídy, která se automaticky spustí při vytváření nové instance pomocí operátoru 'new'. Třída může obsahovat pouze jeden constructor."
    },
    {
      "id": "js2_q12",
      "module": "js2_m2",
      "question": "What will be the output of the following code snippet?",
      "code": "class Device {}\nclass Phone extends Device {}\nlet myPhone = new Phone();\nconsole.log(myPhone instanceof Device);",
      "options": [
        "true",
        "false",
        "undefined",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Operátor instanceof ověřuje, zda se Device.prototype nachází kdekoliv v prototypovém řetězci objektu myPhone. Protože Phone dědí z Device, výraz vrátí true."
    },
    {
      "id": "js2_q13",
      "module": "js2_m2",
      "question": "What will happen when running the following code snippet?",
      "code": "class Animal {\n  constructor(name) { this.name = name; }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    this.breed = breed;\n    super(name);\n  }\n}\nlet d = new Dog('Rex', 'Shepherd');",
      "options": [
        "It throws a ReferenceError because super() must be called before accessing this",
        "It executes successfully and creates the Dog instance",
        "It prints undefined",
        "It throws a SyntaxError because constructor cannot take two parameters"
      ],
      "correct": 0,
      "explanation": "V odvozené třídě (subclass) s explicitním konstruktorem MUSÍ být volání super() provedeno před jakýmkoliv použitím klíčového slova 'this'. Pokus o přístup k this před super() vyvolá ReferenceError."
    },
    {
      "id": "js2_q14",
      "module": "js2_m2",
      "question": "How can a method in a subclass invoke the overridden method of its superclass?",
      "code": null,
      "options": [
        "super.methodName()",
        "parent.methodName()",
        "this.super.methodName()",
        "base.methodName()"
      ],
      "correct": 0,
      "explanation": "Klíčové slovo super v těle metody umožňuje přímý přístup k původní metodě rodičovské třídy: super.methodName()."
    },
    {
      "id": "js2_q15",
      "module": "js2_m2",
      "question": "What will the following code output?",
      "code": "class Calculator {\n  static multiply(a, b) {\n    return a * b;\n  }\n}\nlet calc = new Calculator();\nconsole.log(calc.multiply(3, 4));",
      "options": [
        "TypeError: calc.multiply is not a function",
        "12",
        "undefined",
        "NaN"
      ],
      "correct": 0,
      "explanation": "Statické metody (static) jsou navázány na samotnou třídu (funkci konstruktoru), nikoli na její vytvořené instance. Správné volání je Calculator.multiply(3, 4). Na instanci calc metoda multiply neexistuje, což vyvolá TypeError."
    },
    {
      "id": "js2_q16",
      "module": "js2_m2",
      "question": "What is the expected output of the following code snippet?",
      "code": "class Rectangle {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nlet r = new Rectangle(5, 4);\nconsole.log(r.area);",
      "options": [
        "20",
        "undefined",
        "TypeError: r.area is not a function",
        "NaN"
      ],
      "correct": 0,
      "explanation": "Gettery (definované klíčovým slovem 'get') se v JavaScriptu čtou jako běžné vlastnosti bez kulatých závorek. Výraz r.area tedy zavolá getter a vrátí 5 * 4 = 20."
    },
    {
      "id": "js2_q17",
      "module": "js2_m2",
      "question": "How are private field members declared in modern JavaScript ES6+ classes?",
      "code": null,
      "options": [
        "By prefixing the field name with a hash symbol # (e.g. #secret)",
        "By using the private keyword (e.g. private secret)",
        "By starting the field name with an underscore _ (e.g. _secret)",
        "By placing the field inside a Symbol() constructor"
      ],
      "correct": 0,
      "explanation": "Standardní privátní vlastnosti tříd v moderním JavaScriptu začínají znakem mřížky '#' (např. #balance). Jsou zcela nepřístupné mimo tělo dané třídy (pokus o přístup zvnějšku skončí SyntaxError). Podtržítko '_' bylo pouze neoficiální konvencí."
    },
    {
      "id": "js2_q18",
      "module": "js2_m2",
      "question": "Which statement is true regarding class declaration hoisting in JavaScript?",
      "code": null,
      "options": [
        "Class declarations are not hoisted like function declarations; accessing a class before its declaration throws a ReferenceError",
        "Classes are fully hoisted to the top of the scope and can be instantiated before declaration",
        "Only classes declared with the export keyword are hoisted",
        "Classes are hoisted and initialized to null"
      ],
      "correct": 0,
      "explanation": "Třídy v JavaScriptu nepodléhají hoistingu jako běžné funkce. Nacházejí se v tzv. Temporal Dead Zone (TDZ), takže pokus o jejich použití před řádkem deklarace vyvolá ReferenceError."
    },
    {
      "id": "js2_q19",
      "module": "js2_m2",
      "question": "Which of the following is the correct syntax for declaring a method inside an ES6 class?",
      "code": null,
      "options": [
        "display() { console.log(this.name); }",
        "function display() { console.log(this.name); }",
        "display: function() { console.log(this.name); },",
        "def display(self): { console.log(this.name); }"
      ],
      "correct": 0,
      "explanation": "V těle třídy ES6 se metody definují moderní zkrácenou syntaxí: nazevMetody(parametry) { ... } bez klíčového slova function a bez oddělovacích čárek."
    },
    {
      "id": "js2_q20",
      "module": "js2_m2",
      "question": "What is the relationship between ES6 classes and prototype-based inheritance?",
      "code": null,
      "options": [
        "ES6 classes are syntactical sugar built over JavaScript's existing prototype-based inheritance model",
        "ES6 classes completely replace the prototype engine and introduce traditional class-based memory tables",
        "Classes cannot have prototypes; prototype is undefined for classes",
        "Classes require a special WebAssembly module to emulate OOP"
      ],
      "correct": 0,
      "explanation": "Třídy v JavaScriptu (ES6 class) představují syntaktický cukr (syntactic sugar) nad prototypovým modelem jazyka. Pod kapotou stále fungují prototypové vazby (prototype chain)."
    },
    {
      "id": "js2_q21",
      "module": "js2_m3",
      "question": "What is the output of the following check in JavaScript?",
      "code": "console.log(Number.isInteger(10.0));\nconsole.log(Number.isInteger(10.5));",
      "options": [
        "true false",
        "false true",
        "true true",
        "false false"
      ],
      "correct": 0,
      "explanation": "V JavaScriptu jsou čísla reprezentována podle standardu IEEE-754. Hodnota 10.0 nemá žádnou desetinnou část a v paměti je reprezentována stejně jako celé číslo 10. Proto Number.isInteger(10.0) vrací true, zatímco pro 10.5 vrací false."
    },
    {
      "id": "js2_q22",
      "module": "js2_m3",
      "question": "What will be printed to the console?",
      "code": "console.log(isNaN('Hello'));\nconsole.log(Number.isNaN('Hello'));",
      "options": [
        "true false",
        "true true",
        "false false",
        "false true"
      ],
      "correct": 0,
      "explanation": "Globální isNaN() nejprve svůj argument implicitně převede na číslo; Number('Hello') je NaN, takže vrátí true. Naproti tomu Number.isNaN() neprovádí žádnou typovou konverzi a vrátí true POUZE tehdy, pokud je hodnota typu Number a současně je rovna NaN. Řetězec 'Hello' tedy vrátí false."
    },
    {
      "id": "js2_q23",
      "module": "js2_m3",
      "question": "What is the result of the following string slice operation?",
      "code": "let str = 'JavaScript';\nconsole.log(str.slice(-6));",
      "options": [
        "'Script'",
        "'JavaSc'",
        "''",
        "IndexError"
      ],
      "correct": 0,
      "explanation": "Metoda String.prototype.slice() se záporným indexem počítá pozici od konce řetězce. Pozice -6 odpovídá začátku slova 'Script' (index 4). Výsledkem je 'Script'."
    },
    {
      "id": "js2_q24",
      "module": "js2_m3",
      "question": "Which month does the following Date object represent in JavaScript?",
      "code": "let d = new Date(2025, 0, 15);",
      "options": [
        "January (Leden)",
        "February (Únor)",
        "December (Prosinec)",
        "October (Říjen)"
      ],
      "correct": 0,
      "explanation": "V objektu Date v JavaScriptu jsou měsíce indexovány od 0 (0 = leden, 1 = únor, ..., 11 = prosinec). Číslo 0 tedy představuje leden."
    },
    {
      "id": "js2_q25",
      "module": "js2_m3",
      "question": "What is the primary difference between Array.prototype.map() and Array.prototype.forEach()?",
      "code": null,
      "options": [
        "map() returns a new array containing the transformed elements, while forEach() always returns undefined",
        "forEach() creates a new array, while map() mutates the original array in place",
        "map() can only be used with numbers, while forEach() works with any data type",
        "forEach() executes asynchronously, while map() executes synchronously"
      ],
      "correct": 0,
      "explanation": "Metoda map() vytvoří a vrátí nový pole s výsledky volání předané callback funkce pro každý prvek. Metoda forEach() provede operaci pro každý prvek, ale vždy vrací hodnotu undefined."
    },
    {
      "id": "js2_q26",
      "module": "js2_m3",
      "question": "What is the output of the following reduce operation?",
      "code": "let numbers = [1, 2, 3, 4];\nlet result = numbers.reduce((acc, curr) => acc + curr, 10);\nconsole.log(result);",
      "options": [
        "20",
        "10",
        "14",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Druhým argumentem reduce() je počáteční hodnota akumulátoru (10). K této hodnotě se postupně přičtou prvky pole: 10 + 1 + 2 + 3 + 4 = 20."
    },
    {
      "id": "js2_q27",
      "module": "js2_m3",
      "question": "What is the output of the following code snippet?",
      "code": "let set = new Set([1, 2, 2, 3, 3, 4]);\nset.add(4);\nconsole.log(set.size);",
      "options": [
        "4",
        "6",
        "7",
        "undefined"
      ],
      "correct": 0,
      "explanation": "Objekt Set ukládá pouze unikátní hodnoty. Duplicitní prvky (2, 3 i opakovaně přidaný 4) jsou automaticky ignorovány. Set obsahuje prvky {1, 2, 3, 4}, takže jeho vlastnost size je 4."
    },
    {
      "id": "js2_q28",
      "module": "js2_m3",
      "question": "Which feature distinguishes a JavaScript Map from a standard Object?",
      "code": null,
      "options": [
        "Map keys can be of any data type (objects, functions, primitives), whereas standard Object keys are only strings or symbols",
        "Standard Objects are ordered by insertion, while Maps are unordered",
        "Maps can only store primitive data types as values",
        "Objects have a built-in .size property, while Maps do not"
      ],
      "correct": 0,
      "explanation": "Základním rozdílem je, že v Map mohou být klíče jakéhokoliv datového typu (včetně objektů a funkcí). Běžné objekty převádějí všechny klíče na řetězce nebo symboly. Map navíc garantuje pořadí vkládání a má přímou vlastnost .size."
    },
    {
      "id": "js2_q29",
      "module": "js2_m3",
      "question": "What is the output of the following JSON serialization?",
      "code": "let user = {\n  name: 'Bob',\n  age: undefined,\n  greet: function() { return 'hi'; }\n};\nconsole.log(JSON.stringify(user));",
      "options": [
        "'{\"name\":\"Bob\"}'",
        "'{\"name\":\"Bob\",\"age\":null,\"greet\":\"hi\"}'",
        "'{\"name\":\"Bob\",\"age\":undefined}'",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Metoda JSON.stringify() při serializaci objektů automaticky vynechává vlastnosti, jejichž hodnotou je undefined, funkce nebo Symbol. Výsledkem je pouze řetězec '{\"name\":\"Bob\"}'."
    },
    {
      "id": "js2_q30",
      "module": "js2_m3",
      "question": "What is the output of the following mathematical operations?",
      "code": "console.log(Math.trunc(-3.7));\nconsole.log(Math.floor(-3.7));",
      "options": [
        "-3 -4",
        "-4 -3",
        "-3 -3",
        "-4 -4"
      ],
      "correct": 0,
      "explanation": "Math.trunc() jednoduše odřízne desetinnou část čísla směrem k nule, takže z -3.7 vznikne -3. Math.floor() zaokrouhluje dolů (směrem k menšímu číslu / zápornému nekonečnu), takže z -3.7 vznikne -4."
    },
    {
      "id": "js2_q31",
      "module": "js2_m4",
      "question": "What is the output of the following function invocation?",
      "code": "function fn(a, b, ...rest) {\n  return rest.length;\n}\nconsole.log(fn(1, 2, 3, 4, 5));",
      "options": [
        "3",
        "5",
        "2",
        "undefined"
      ],
      "correct": 0,
      "explanation": "Parametr 'a' obdrží hodnotu 1, 'b' obdrží 2. Zbylé argumenty (3, 4, 5) jsou uloženy do pole 'rest' pomocí rest parametru. Pole rest má tedy délku 3."
    },
    {
      "id": "js2_q32",
      "module": "js2_m4",
      "question": "What will the following code output?",
      "code": "function makeCounter() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\nlet c1 = makeCounter();\nconsole.log(c1(), c1());",
      "options": [
        "1 2",
        "1 1",
        "0 1",
        "ReferenceError"
      ],
      "correct": 0,
      "explanation": "Vnitřní anonymní funkce tvoří uzávěru (closure) a uchovává si referenci na proměnnou 'count' ve svém vnějším lexikálním prostředí. Při každém volání c1() se count inkrementuje a vrátí: nejprve 1 a poté 2."
    },
    {
      "id": "js2_q33",
      "module": "js2_m4",
      "question": "What is the primary purpose of an Immediately Invoked Function Expression (IIFE)?",
      "code": "(function() {\n  let temp = 42;\n})();",
      "options": [
        "To create a new private scope and prevent variables from polluting the outer/global scope",
        "To run the function asynchronously in a background web worker thread",
        "To optimize function execution speed by compiling directly to bytecode",
        "To create an immutable singleton class"
      ],
      "correct": 0,
      "explanation": "IIFE se provede okamžitě po své definici a jejím hlavním účelem je vytvořit izolovaný privátní lexikální rozsah (scope), aby lokální proměnné (jako 'temp') neznečišťovaly globální jmenný prostor."
    },
    {
      "id": "js2_q34",
      "module": "js2_m4",
      "question": "What is the difference between Function.prototype.call() and Function.prototype.apply()?",
      "code": null,
      "options": [
        "call() accepts additional arguments individually (comma-separated), while apply() accepts them as an array",
        "apply() binds this permanently, while call() binds it temporarily",
        "call() executes asynchronously, while apply() is synchronous",
        "apply() cannot accept a thisArg context"
      ],
      "correct": 0,
      "explanation": "Obě metody okamžitě zavolají funkci s explicitně nastaveným kontextem 'this'. Rozdíl je v předávání dalších argumentů: call(thisArg, arg1, arg2) bere argumenty jednotlivě, zatímco apply(thisArg, [arg1, arg2]) je přijímá v poli."
    },
    {
      "id": "js2_q35",
      "module": "js2_m4",
      "question": "What is the output of the following code snippet?",
      "code": "let user = {\n  name: 'Charlie',\n  getName() { return this.name; }\n};\nlet fn = user.getName;\nlet boundFn = user.getName.bind(user);\nconsole.log(boundFn());",
      "options": [
        "'Charlie'",
        "undefined",
        "null",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Metoda bind() vytvoří novou funkci s trvale navázaným kontextem this na zadaný objekt (zde 'user'). Při jejím volání boundFn() je 'this' stále 'user', takže vrátí 'Charlie'."
    },
    {
      "id": "js2_q36",
      "module": "js2_m4",
      "question": "Which statement is true regarding the 'this' binding in arrow functions?",
      "code": null,
      "options": [
        "Arrow functions do not have their own 'this'; they inherit 'this' lexically from the enclosing scope",
        "Arrow functions bind 'this' to the global window/global object regardless of scope",
        "Arrow functions can rebind their 'this' using call() or apply()",
        "Arrow functions bind 'this' to the DOM element that fired the event"
      ],
      "correct": 0,
      "explanation": "Šipkové funkce (arrow functions) nemají vlastní kontext 'this', 'arguments' ani 'super'. Přebírají hodnotu 'this' lexikálně z okolního kontextu, ve kterém byly vytvořeny, a nelze ji změnit pomocí call, apply ani bind."
    },
    {
      "id": "js2_q37",
      "module": "js2_m4",
      "question": "What is the output of the following generator snippet?",
      "code": "function* idGenerator() {\n  yield 1;\n  yield 2;\n  return 3;\n}\nlet gen = idGenerator();\nconsole.log(gen.next().value, gen.next().value, gen.next().value);",
      "options": [
        "1 2 3",
        "1 2 undefined",
        "undefined undefined 3",
        "TypeError"
      ],
      "correct": 0,
      "explanation": "Generátor pozastavuje běh na každém příkazu yield. První gen.next() vrátí { value: 1, done: false }, druhý { value: 2, done: false }, a třetí narazí na return 3, což vrátí { value: 3, done: true }. Výstupem vlastností value je 1 2 3."
    },
    {
      "id": "js2_q38",
      "module": "js2_m4",
      "question": "What is the initial state of a newly created Promise instance before resolution or rejection?",
      "code": "let p = new Promise((resolve, reject) => {});",
      "options": [
        "'pending'",
        "'fulfilled'",
        "'rejected'",
        "'settled'"
      ],
      "correct": 0,
      "explanation": "Při vytvoření se Promise nachází v počátečním stavu 'pending' (čekající). Teprve po zavolání funkce resolve() přejde do stavu 'fulfilled', nebo po reject() do stavu 'rejected'."
    },
    {
      "id": "js2_q39",
      "module": "js2_m4",
      "question": "How does Promise.all() behave if one of the promises in the iterable rejects?",
      "code": null,
      "options": [
        "It immediately rejects with the reason of the first promise that rejected (fail-fast)",
        "It waits for all other promises to resolve and ignores the rejection",
        "It returns an array containing null in place of the rejected promise",
        "It automatically retries the rejected promise up to 3 times"
      ],
      "correct": 0,
      "explanation": "Metoda Promise.all() se chová podle principu fail-fast: jakmile kterýkoliv z předaných Promisů selže (reject), Promise.all okamžitě zamítne celý výsledek s chybou prvního selhání, aniž by čekal na dokončení ostatních."
    },
    {
      "id": "js2_q40",
      "module": "js2_m4",
      "question": "What does an async function in JavaScript always return?",
      "code": "async function test() {\n  return 42;\n}",
      "options": [
        "A Promise that resolves with the return value",
        "The raw primitive value directly (number 42)",
        "A generator iterator object",
        "undefined"
      ],
      "correct": 0,
      "explanation": "Klíčové slovo async zaručuje, že funkce vždy vrátí Promise. Pokud funkce vrací běžnou hodnotu (např. 42), JavaScript ji automaticky zabalí do vyřešeného Promisu (Promise.resolve(42))."
    }
  ]
}
,
  linux: {
  "id": "linux",
    category: "systems",
    categoryName: "Počítačové systémy a sítě",
  "title": "Cisco Networking Academy: NDG Linux Essentials",
  "subtitle": "Příprava na certifikaci LPI Linux Essentials (010-160) & NDG Linux",
  "badge": "NDG Linux Essentials",
  "icon": "fab fa-linux",
  "color": "#EAA01A",
  "passScore": 70,
  "timeLimit": 45,
  "modules": [
    {
      "id": "linux_m1",
      "name": "LE-M1: Úvod do Linuxu, Open Source & Licence"
    },
    {
      "id": "linux_m2",
      "name": "LE-M2: Souborový systém, Práce se soubory & Cesty"
    },
    {
      "id": "linux_m3",
      "name": "LE-M3: Příkazový řádek, Přesměrování & Vyhledávání (Grep)"
    },
    {
      "id": "linux_m4",
      "name": "LE-M4: Uživatelé, Oprávnění (chmod) & Správa systému"
    }
  ],
  "questions": [
    {
      "id": "linux_q01",
      "module": "linux_m1",
      "question": "Which of the following is the primary role of the Linux kernel?",
      "code": null,
      "options": [
        "Managing hardware resources, memory, and process execution",
        "Rendering the graphical desktop user interface (GUI)",
        "Compiling C source code into executable binary files",
        "Managing web browser extensions and HTML rendering"
      ],
      "correct": 0,
      "explanation": "Jádro (kernel) Linuxu je základní vrstva operačního systému, která zprostředkovává komunikaci mezi softwarem a hardwarem a spravuje CPU, operační paměť (RAM), procesy a disková zařízení."
    },
    {
      "id": "linux_q02",
      "module": "linux_m1",
      "question": "Who created the original Linux kernel in 1991?",
      "code": null,
      "options": [
        "Linus Torvalds",
        "Richard Stallman",
        "Ken Thompson",
        "Dennis Ritchie"
      ],
      "correct": 0,
      "explanation": "Linus Torvalds oznámil a vydal první verzi jádra Linuxu v roce 1991 jako student Helsinské univerzity."
    },
    {
      "id": "linux_q03",
      "module": "linux_m1",
      "question": "Which open source license requires that any modified versions and derivative works must also be distributed under the same license (the 'copyleft' principle)?",
      "code": null,
      "options": [
        "GNU General Public License (GPL)",
        "MIT License",
        "BSD License",
        "Apache 2.0 License"
      ],
      "correct": 0,
      "explanation": "Licence GNU GPL (General Public License) obsahuje klauzuli copyleft: jakýkoliv odvozený software musí být šířen se zdrojovým kódem pod stejnou licencí GPL."
    },
    {
      "id": "linux_q04",
      "module": "linux_m1",
      "question": "Which Linux distribution family uses the Debian package format (.deb) and the 'apt' package manager?",
      "code": null,
      "options": [
        "Ubuntu, Linux Mint, Debian",
        "Red Hat Enterprise Linux, CentOS, Fedora",
        "openSUSE, SUSE Linux Enterprise",
        "Arch Linux, Manjaro"
      ],
      "correct": 0,
      "explanation": "Debian a jeho odvozeniny (včetně Ubuntu a Linux Mint) využívají balíčkovací formát .deb a nástroje dpkg a apt/apt-get. RHEL a Fedora používají .rpm."
    },
    {
      "id": "linux_q05",
      "module": "linux_m1",
      "question": "Which environment variable contains a colon-separated list of directories searched by the shell to find executable programs?",
      "code": null,
      "options": [
        "$PATH",
        "$HOME",
        "$SHELL",
        "$EXEC"
      ],
      "correct": 0,
      "explanation": "Proměnná prostředí $PATH obsahuje seznam adresářů oddělených dvojtečkou (např. /usr/bin:/bin:/usr/local/bin), ve kterých shell postupně hledá spustitelné programy."
    },
    {
      "id": "linux_q06",
      "module": "linux_m1",
      "question": "Which open source operating system component project was founded by Richard Stallman in 1983 to create a completely free Unix-like system?",
      "code": null,
      "options": [
        "The GNU Project",
        "The Apache Software Foundation",
        "The Linux Foundation",
        "The BSD Initiative"
      ],
      "correct": 0,
      "explanation": "Projekt GNU (GNU's Not Unix) založil Richard Stallman v roce 1983 za účelem vytvoření svobodného operačního systému. V kombinaci s jádrem Linuxu vytvořil kompletní systém GNU/Linux."
    },
    {
      "id": "linux_q07",
      "module": "linux_m1",
      "question": "Which of the following describes embedded Linux?",
      "code": null,
      "options": [
        "Linux customized and built to run on specialized hardware devices like routers, smart TVs, and IoT appliances",
        "Linux running exclusively inside a virtual machine on a cloud server",
        "A standalone text editor embedded directly into the Linux kernel",
        "A distribution that requires at least 16 GB of RAM to boot"
      ],
      "correct": 0,
      "explanation": "Vestavěný (embedded) Linux je ořezaná a optimalizovaná verze Linuxu běžící na jednoúčelových zařízeních, jako jsou síťové směrovače (OpenWrt), chytré televize, automobily a IoT senzory."
    },
    {
      "id": "linux_q08",
      "module": "linux_m1",
      "question": "What does the command 'which' do when passed a program name as an argument?",
      "code": "$ which python3",
      "options": [
        "Locates and prints the full path to the executable file by searching the directories in $PATH",
        "Prints the version and developer information of the specified command",
        "Installs the specified program from the official software repository",
        "Lists all active background processes running that command"
      ],
      "correct": 0,
      "explanation": "Příkaz 'which' prohledá adresáře uvedené v proměnné prostředí $PATH a vypíše plnou absolutní cestu k nalezenému spustitelnému souboru (např. /usr/bin/python3)."
    },
    {
      "id": "linux_q09",
      "module": "linux_m1",
      "question": "What command displays the current working directory path in the terminal?",
      "code": null,
      "options": [
        "pwd",
        "cwd",
        "dir",
        "path"
      ],
      "correct": 0,
      "explanation": "Příkaz 'pwd' znamená 'print working directory' a vypíše absolutní cestu k aktuálnímu pracovnímu adresáři."
    },
    {
      "id": "linux_q10",
      "module": "linux_m1",
      "question": "Which key combination is used in the Bash shell to terminate the currently running foreground command immediately?",
      "code": null,
      "options": [
        "Ctrl + C",
        "Ctrl + Z",
        "Ctrl + D",
        "Ctrl + L"
      ],
      "correct": 0,
      "explanation": "Klávesová zkratka Ctrl + C pošle běžícímu procesu signál SIGINT (přerušení), který proces okamžitě ukončí. Ctrl + Z proces pouze pozastaví (SIGTSTP), Ctrl + D signalizuje EOF."
    },
    {
      "id": "linux_q11",
      "module": "linux_m2",
      "question": "According to the Filesystem Hierarchy Standard (FHS), which directory contains system-wide configuration files?",
      "code": null,
      "options": [
        "/etc",
        "/var",
        "/bin",
        "/dev"
      ],
      "correct": 0,
      "explanation": "Adresář /etc obsahuje konfigurační soubory pro celý systém a nainstalované služby (např. /etc/passwd, /etc/hosts, /etc/network/interfaces)."
    },
    {
      "id": "linux_q12",
      "module": "linux_m2",
      "question": "What is the difference between an absolute path and a relative path in Linux?",
      "code": null,
      "options": [
        "An absolute path starts from the root directory (/) and uniquely identifies a location regardless of current directory; a relative path starts from the current directory",
        "An absolute path can only point to files, while relative paths can only point to directories",
        "An absolute path must begin with the tilde symbol (~), while relative paths begin with dot (.)",
        "Relative paths are only valid for the root user"
      ],
      "correct": 0,
      "explanation": "Absolutní cesta začíná vždy kořenovým lomítkem '/' (např. /var/log/syslog). Relativní cesta se vztahuje k aktuálnímu pracovnímu adresáři (např. ../docs/readme.txt)."
    },
    {
      "id": "linux_q13",
      "module": "linux_m2",
      "question": "Which command with option lists all files in a directory, including hidden files (files beginning with a dot)?",
      "code": null,
      "options": [
        "ls -a",
        "ls -l",
        "ls -h",
        "ls -d"
      ],
      "correct": 0,
      "explanation": "Přepínač '-a' (all) u příkazu ls zobrazí všechny soubory včetně skrytých souborů a adresářů začínajících tečkou (např. .bashrc, .profile)."
    },
    {
      "id": "linux_q14",
      "module": "linux_m2",
      "question": "What does the command 'cd ~' (or simply 'cd') do?",
      "code": "$ cd ~",
      "options": [
        "Changes the working directory to the current user's home directory",
        "Changes to the root directory (/)",
        "Changes to the previous directory visited",
        "Changes to the parent directory (..)"
      ],
      "correct": 0,
      "explanation": "Znak tildy '~' představuje domovský adresář přihlášeného uživatele (uložený v proměnné $HOME). Příkaz 'cd' bez argumentu nebo 'cd ~' vás okamžitě přesune do vašeho domovského adresáře."
    },
    {
      "id": "linux_q15",
      "module": "linux_m2",
      "question": "Which command creates an empty file if it does not exist, or updates its modification timestamp if it already exists?",
      "code": null,
      "options": [
        "touch",
        "create",
        "mkfile",
        "new"
      ],
      "correct": 0,
      "explanation": "Příkaz 'touch soubor.txt' vytvoří prázdný soubor, pokud ještě neexistuje. Pokud již existuje, aktualizuje jeho časové razítko posledního přístupu a změny."
    },
    {
      "id": "linux_q16",
      "module": "linux_m2",
      "question": "Which command and option is used to recursively copy an entire directory and all its contents?",
      "code": null,
      "options": [
        "cp -r source/ destination/",
        "mv -r source/ destination/",
        "copy -all source/ destination/",
        "cp -f source/ destination/"
      ],
      "correct": 0,
      "explanation": "Přepínač '-r' nebo '-R' (recursive) u příkazu 'cp' je nezbytný pro kopírování celých adresářů včetně všech jejich podsložek a souborů."
    },
    {
      "id": "linux_q17",
      "module": "linux_m2",
      "question": "What is the key difference between a hard link and a symbolic (soft) link?",
      "code": "$ ln file hardlink\n$ ln -s file symlink",
      "options": [
        "A hard link points directly to the file's inode and remains valid if the original file is deleted; a symbolic link points to the pathname and breaks if the target is moved or deleted",
        "A hard link can span across different filesystems, while a soft link cannot",
        "A soft link cannot link to directories, while a hard link can link to directories",
        "Hard links take up twice as much disk space as the original file"
      ],
      "correct": 0,
      "explanation": "Pevný odkaz (hard link) sdílí stejný inod (číslo inodu) a datové bloky jako původní soubor — smazáním původního jména data nezmizí. Symbolický odkaz (symlink vytvořený přes ln -s) obsahuje pouze cestu k cíli; po smazání či přesunutí cíle odkaz přestane fungovat (tzv. dangling symlink)."
    },
    {
      "id": "linux_q18",
      "module": "linux_m2",
      "question": "Which command is used to remove an empty directory?",
      "code": null,
      "options": [
        "rmdir",
        "rm -f",
        "deldir",
        "erase"
      ],
      "correct": 0,
      "explanation": "Příkaz 'rmdir' bezpečně odstraní prázdný adresář. Pokud adresář obsahuje soubory, příkaz selže, čímž chrání před nechtěným smazáním dat."
    },
    {
      "id": "linux_q19",
      "module": "linux_m2",
      "question": "What does the wildcard '?' match in bash shell globbing?",
      "code": "$ ls test?.txt",
      "options": [
        "Exactly one single arbitrary character",
        "Zero or more arbitrary characters",
        "Any numeric digit only",
        "Any non-alphanumeric special symbol"
      ],
      "correct": 0,
      "explanation": "V shell globbingu otazník '?' zastupuje právě jeden libovolný znak. Hvězdička '*' zastupuje libovolný počet (0 a více) znaků."
    },
    {
      "id": "linux_q20",
      "module": "linux_m2",
      "question": "Which directory in the Filesystem Hierarchy Standard contains device nodes (virtual files representing hardware devices like disks and terminals)?",
      "code": null,
      "options": [
        "/dev",
        "/proc",
        "/sys",
        "/boot"
      ],
      "correct": 0,
      "explanation": "Adresář /dev obsahuje speciální soubory zařízení (device files), které reprezentují hardware (např. /dev/sda pro disk, /dev/null pro zahazování výstupu, /dev/tty pro terminál)."
    },
    {
      "id": "linux_q21",
      "module": "linux_m3",
      "question": "Which operator is used to redirect the standard output (STDOUT) of a command and append it to an existing file without overwriting?",
      "code": "$ echo 'New entry' [???] log.txt",
      "options": [
        ">>",
        ">",
        "<",
        "2>"
      ],
      "correct": 0,
      "explanation": "Operátor '>>' připojí standardní výstup na konec souboru (append). Samostatné '>' soubor před zápisem přepíše (truncate)."
    },
    {
      "id": "linux_q22",
      "module": "linux_m3",
      "question": "What are the standard file descriptor numbers for STDIN, STDOUT, and STDERR in Linux?",
      "code": null,
      "options": [
        "STDIN = 0, STDOUT = 1, STDERR = 2",
        "STDIN = 1, STDOUT = 2, STDERR = 3",
        "STDIN = 0, STDOUT = 2, STDERR = 1",
        "STDIN = 2, STDOUT = 1, STDERR = 0"
      ],
      "correct": 0,
      "explanation": "V Linuxu má standardní vstup (STDIN) číslo 0, standardní výstup (STDOUT) číslo 1 a chybový výstup (STDERR) číslo 2 (proto např. 2> redirectuje chyby)."
    },
    {
      "id": "linux_q23",
      "module": "linux_m3",
      "question": "What does the pipe operator (|) do in the command line?",
      "code": "$ ls -l /etc | grep 'conf'",
      "options": [
        "Sends the standard output of the command on the left into the standard input of the command on the right",
        "Executes both commands simultaneously in the background",
        "Executes the second command only if the first command succeeds",
        "Combines the output of two files into a single text file"
      ],
      "correct": 0,
      "explanation": "Roura (pipe, '|') propojí standardní výstup prvního příkazu se standardním vstupem druhého příkazu, což umožňuje skládání výkonných příkazových řetězců."
    },
    {
      "id": "linux_q24",
      "module": "linux_m3",
      "question": "Which command searches for a specific pattern or regular expression within text files?",
      "code": null,
      "options": [
        "grep",
        "find",
        "locate",
        "search"
      ],
      "correct": 0,
      "explanation": "Příkaz 'grep' (Global Regular Expression Print) prohledává obsah souborů nebo vstup ze STDIN a vypisuje řádky odpovídající zadanému vzoru či regulárnímu výrazu."
    },
    {
      "id": "linux_q25",
      "module": "linux_m3",
      "question": "Which command is used to display the first 10 lines of a file by default?",
      "code": null,
      "options": [
        "head",
        "tail",
        "cat",
        "top"
      ],
      "correct": 0,
      "explanation": "Příkaz 'head soubor.txt' standardně vypíše prvních 10 řádků souboru. Příkaz 'tail' naopak vypíše posledních 10 řádků."
    },
    {
      "id": "linux_q26",
      "module": "linux_m3",
      "question": "What does the command 'wc -l file.txt' output?",
      "code": "$ wc -l file.txt",
      "options": [
        "The total number of lines in file.txt",
        "The total number of words in file.txt",
        "The total number of bytes in file.txt",
        "The longest line length in file.txt"
      ],
      "correct": 0,
      "explanation": "Příkaz 'wc' (word count) s přepínačem '-l' spočítá a zobrazí počet nových řádků (lines) v souboru."
    },
    {
      "id": "linux_q27",
      "module": "linux_m3",
      "question": "Which command is used to find files and directories in the filesystem based on criteria such as name, size, type, or modification time?",
      "code": "$ find /home -name '*.conf'",
      "options": [
        "find",
        "grep",
        "whereis",
        "ls"
      ],
      "correct": 0,
      "explanation": "Příkaz 'find' prochází strom adresářů a vyhledává soubory na základě metadat (jméno, velikost, oprávnění, datum změny atd.)."
    },
    {
      "id": "linux_q28",
      "module": "linux_m3",
      "question": "How can you view the manual documentation page for a specific Linux command (e.g., ls)?",
      "code": null,
      "options": [
        "man ls",
        "help ls",
        "doc ls",
        "info -m ls"
      ],
      "correct": 0,
      "explanation": "Příkaz 'man' (manual) zobrazí oficiální manuálovou stránku pro zadaný příkaz či systémové volání."
    },
    {
      "id": "linux_q29",
      "module": "linux_m3",
      "question": "What is the purpose of the command 'sort' when used in a command pipeline?",
      "code": "$ cat names.txt | sort -u",
      "options": [
        "Sorts the incoming lines alphabetically or numerically and with -u removes duplicate lines",
        "Filters out lines containing numbers",
        "Inverts the case of all characters",
        "Compresses the text into a zip archive"
      ],
      "correct": 0,
      "explanation": "Příkaz 'sort' seřadí řádky textu (abecedně nebo číselně). Přepínač '-u' (unique) zajistí, že duplicitní řádky budou po seřazení vynechány."
    },
    {
      "id": "linux_q30",
      "module": "linux_m3",
      "question": "What does the command 'export VAR=value' do in a bash shell session?",
      "code": "$ export SERVER_IP=192.168.1.1",
      "options": [
        "Makes the environment variable available to child processes and subshells started from the current shell",
        "Saves the variable permanently into the /etc/environment configuration file",
        "Prints the variable value to all connected network clients",
        "Encrypts the variable value in RAM"
      ],
      "correct": 0,
      "explanation": "Příkaz 'export' označí proměnnou jako exportovanou proměnnou prostředí, což znamená, že její hodnota bude zděděna všemi nově spuštěnými dceřinými procesy a skripty."
    },
    {
      "id": "linux_q31",
      "module": "linux_m4",
      "question": "What is the User ID (UID) of the root superuser in all Linux systems?",
      "code": null,
      "options": [
        "0",
        "1",
        "1000",
        "-1"
      ],
      "correct": 0,
      "explanation": "Správcovský účet root má v Linuxu vždy pevně přiřazen UID (User ID) rovno 0."
    },
    {
      "id": "linux_q32",
      "module": "linux_m4",
      "question": "Which file contains the encrypted passwords of user accounts and is readable only by the root user?",
      "code": null,
      "options": [
        "/etc/shadow",
        "/etc/passwd",
        "/etc/security",
        "/etc/keys"
      ],
      "correct": 0,
      "explanation": "Soubor /etc/shadow uchovává šifrované hashe hesel uživatelů a informace o expiraci hesel. Na rozdíl od veřejně čitelného /etc/passwd má práva nastavená tak, že jej může číst pouze root."
    },
    {
      "id": "linux_q33",
      "module": "linux_m4",
      "question": "What permissions do the octal numbers 7, 5, and 0 represent in the chmod command (chmod 750 script.sh)?",
      "code": "$ chmod 750 script.sh",
      "options": [
        "Owner: rwx (7), Group: r-x (5), Others: --- (0)",
        "Owner: r-x (7), Group: rw- (5), Others: --- (0)",
        "Owner: rw- (7), Group: r-- (5), Others: r-x (0)",
        "Owner: rwx (7), Group: --- (5), Others: r-x (0)"
      ],
      "correct": 0,
      "explanation": "Hodnoty oprávnění jsou součtem vah: čtení (r = 4), zápis (w = 2), spuštění (x = 1). 7 = 4+2+1 (rwx), 5 = 4+1 (r-x), 0 = žádná práva (---)."
    },
    {
      "id": "linux_q34",
      "module": "linux_m4",
      "question": "Which command is used to change the owner and group ownership of a file?",
      "code": "$ chown alice:developers report.pdf",
      "options": [
        "chown",
        "chmod",
        "chgrp",
        "usermod"
      ],
      "correct": 0,
      "explanation": "Příkaz 'chown' (change owner) slouží ke změně vlastníka a volitelně i skupiny souboru (např. chown uzivatel:skupina soubor)."
    },
    {
      "id": "linux_q35",
      "module": "linux_m4",
      "question": "Which command is used to monitor active processes dynamically in real time, displaying CPU and memory usage updated continuously?",
      "code": null,
      "options": [
        "top",
        "ps",
        "df",
        "free"
      ],
      "correct": 0,
      "explanation": "Příkaz 'top' poskytuje dynamický živý přehled běžících procesů, vytížení procesoru (CPU), paměti (RAM) a zátěže systému (load average)."
    },
    {
      "id": "linux_q36",
      "module": "linux_m4",
      "question": "What signal does the command 'kill -9 <PID>' send to a process?",
      "code": "$ kill -9 1234",
      "options": [
        "SIGKILL (forced immediate termination that cannot be caught or ignored)",
        "SIGTERM (polite termination request allowing cleanup)",
        "SIGHUP (hangup / configuration reload)",
        "SIGINT (interrupt signal from keyboard)"
      ],
      "correct": 0,
      "explanation": "Signál 9 je SIGKILL — nepodmíněné a okamžité ukončení procesu přímo jádrem operačního systému, které proces nemůže zachytit ani ignorovat."
    },
    {
      "id": "linux_q37",
      "module": "linux_m4",
      "question": "Which command and options are used to create a new gzip-compressed archive named backup.tar.gz from a directory called /data?",
      "code": null,
      "options": [
        "tar -czvf backup.tar.gz /data",
        "tar -xzvf backup.tar.gz /data",
        "gzip -c backup.tar.gz /data",
        "zip -tar backup.tar.gz /data"
      ],
      "correct": 0,
      "explanation": "Příkaz tar s přepínači -c (create), -z (gzip komprese), -v (verbose výpis) a -f (název souboru archivu) vytvoří komprimovaný archiv .tar.gz."
    },
    {
      "id": "linux_q38",
      "module": "linux_m4",
      "question": "Which package management command is used on Debian and Ubuntu systems to install a package and its dependencies from remote repositories?",
      "code": null,
      "options": [
        "apt-get install <package> (or apt install)",
        "rpm -ivh <package>",
        "dpkg -i <package>",
        "yum install <package>"
      ],
      "correct": 0,
      "explanation": "Nástroj 'apt' nebo 'apt-get' vyhledá balíček v repozitářích, stáhne jej a automaticky vyřeší a nainstaluje všechny jeho závislosti. Samotný 'dpkg -i' závislosti z repozitářů nestahuje."
    },
    {
      "id": "linux_q39",
      "module": "linux_m4",
      "question": "What command displays information about available and used disk space on mounted filesystems in human-readable format?",
      "code": "$ df -h",
      "options": [
        "df -h",
        "du -h",
        "free -m",
        "fdisk -l"
      ],
      "correct": 0,
      "explanation": "Příkaz 'df -h' (disk filesystem human-readable) zobrazí využití diskového prostoru (volné a obsazené místo v GB/MB) na všech připojených souborových systémech."
    },
    {
      "id": "linux_q40",
      "module": "linux_m4",
      "question": "What command temporarily elevates privileges to execute a single administrative command as the root superuser?",
      "code": "$ sudo apt update",
      "options": [
        "sudo",
        "su",
        "admin",
        "runas"
      ],
      "correct": 0,
      "explanation": "Příkaz 'sudo' (superuser do) umožňuje oprávněným uživatelům (definovaným v /etc/sudoers) spustit konkrétní příkaz s právy superuživatele root."
    }
  ]
},
  ccna_srwe: {
  "id": "ccna_srwe",
    category: "systems",
    categoryName: "Počítačové systémy a sítě",
  "title": "Cisco NetAcad CCNA: Switching, Routing, and Wireless Essentials",
  "subtitle": "Příprava na certifikaci CCNA 200-301 (Kurz CCNAv7 SRWE)",
  "badge": "CCNA: SRWE",
  "icon": "fas fa-network-wired",
  "color": "#00BCEB",
  "passScore": 70,
  "timeLimit": 45,
  "modules": [
    {
      "id": "srwe_m1",
      "name": "SRWE-M1: Přepínání, VLANy & Inter-VLAN směrování"
    },
    {
      "id": "srwe_m2",
      "name": "SRWE-M2: Spanning Tree Protocol (STP & RSTP)"
    },
    {
      "id": "srwe_m3",
      "name": "SRWE-M3: EtherChannel, DHCPv4, SLAAC & Zabezpečení LAN"
    },
    {
      "id": "srwe_m4",
      "name": "SRWE-M4: Bezdrátové sítě (WLAN, WLC) & Statické směrování"
    }
  ],
  "questions": [
    {
      "id": "srwe_q01",
      "module": "srwe_m1",
      "question": "Which type of VLAN is designated to carry user-generated untagged traffic across an 802.1Q trunk link?",
      "code": null,
      "options": [
        "Native VLAN",
        "Management VLAN",
        "Default VLAN 1",
        "Voice VLAN"
      ],
      "correct": 0,
      "explanation": "Nativní VLAN (Native VLAN) na trunk lince 802.1Q přenáší rámce bez 802.1Q tagu (untagged traffic). Výchozí hodnotou je VLAN 1, ale z bezpečnostních důvodů se doporučuje změnit ji na nepoužívanou VLAN."
    },
    {
      "id": "srwe_q02",
      "module": "srwe_m1",
      "question": "Which Cisco IOS command configures a switch port as an 802.1Q trunk link?",
      "code": "Switch(config-if)# [???]",
      "options": [
        "switchport mode trunk",
        "switchport trunk encapsulation dot1q",
        "switchport mode access",
        "switchport trunk enable"
      ],
      "correct": 0,
      "explanation": "Příkaz 'switchport mode trunk' přepne rozhraní do trvalého trunkového režimu a začne vyjednávat trunking přes DTP (Dynamic Trunking Protocol)."
    },
    {
      "id": "srwe_q03",
      "module": "srwe_m1",
      "question": "In a 'router-on-a-stick' inter-VLAN routing configuration, how is each subinterface associated with a specific VLAN ID?",
      "code": "Router(config-subif)# [???] 10",
      "options": [
        "encapsulation dot1q 10",
        "switchport access vlan 10",
        "ip vlan 10",
        "dot1q vlan 10"
      ],
      "correct": 0,
      "explanation": "Příkaz 'encapsulation dot1q <vlan-id>' na podrozhraní směrovače (např. G0/0.10) konfiguruje IEEE 802.1Q zapouzdření a přiřadí dané podrozhraní k příslušné VLAN."
    },
    {
      "id": "srwe_q04",
      "module": "srwe_m1",
      "question": "What is the function of a Switch Virtual Interface (SVI) on a Layer 2 or Layer 3 switch?",
      "code": "Switch(config)# interface vlan 10\nSwitch(config-if)# ip address 192.168.10.1 255.255.255.0",
      "options": [
        "It provides Layer 3 IP addressing for remote management (Layer 2) or acts as a default gateway for inter-VLAN routing (Layer 3)",
        "It connects a physical cable to a wireless access point",
        "It secures access ports against MAC address flooding",
        "It acts as a backup physical port when FastEthernet0/1 goes down"
      ],
      "correct": 0,
      "explanation": "SVI (Switch Virtual Interface) je virtuální rozhraní přiřazené k určité VLAN. Na L2 switchi slouží k IP správě (management), na L3 vícevrstvém přepínači funguje jako výchozí brána pro směrování mezi VLANami."
    },
    {
      "id": "srwe_q05",
      "module": "srwe_m1",
      "question": "What happens to switch ports assigned to a VLAN when that VLAN is deleted from the switch configuration?",
      "code": null,
      "options": [
        "The ports become inactive and cannot communicate with any device until reassigned to an active VLAN",
        "The ports are automatically reassigned to default VLAN 1",
        "The ports are shut down administratively",
        "The ports are automatically converted to trunk ports"
      ],
      "correct": 0,
      "explanation": "Pokud je VLAN smazána příkazem 'no vlan <id>', všechny přístupové porty přiřazené k této VLAN se stanou neaktivními (zůstanou ve smazané VLAN) a přestanou předávat data, dokud nejsou přiřazeny k jiné platné VLAN."
    },
    {
      "id": "srwe_q06",
      "module": "srwe_m1",
      "question": "What is required on a Cisco multilayer switch to enable inter-VLAN routing between SVIs?",
      "code": "Switch(config)# [???]",
      "options": [
        "ip routing",
        "router inter-vlan",
        "enable routing",
        "switchport routing"
      ],
      "correct": 0,
      "explanation": "Na L3 vícevrstvém switchi (např. Catalyst 3560/3650) je směrování ve výchozím stavu vypnuté. K jeho aktivaci v globálním konfiguračním režimu je nutné zadat příkaz 'ip routing'."
    },
    {
      "id": "srwe_q07",
      "module": "srwe_m1",
      "question": "What command converts a physical Layer 2 switchport into a routed Layer 3 port on a multilayer switch?",
      "code": "Switch(config-if)# [???]",
      "options": [
        "no switchport",
        "ip routing port",
        "switchport mode routed",
        "layer3 enable"
      ],
      "correct": 0,
      "explanation": "Příkaz 'no switchport' odebere přepínací L2 funkce z fyzického portu a umožní na něm nakonfigurovat přímou IP adresu příkazem 'ip address', čímž se z portu stane směrovaný L3 port."
    },
    {
      "id": "srwe_q08",
      "module": "srwe_m1",
      "question": "What information is added to an Ethernet frame header by IEEE 802.1Q encapsulation?",
      "code": null,
      "options": [
        "A 4-byte VLAN tag containing a 12-bit VLAN ID (VID)",
        "A 32-byte Cisco proprietary encryption header",
        "A 2-byte trailer at the end of the FCS",
        "An IP header with source and destination IP addresses"
      ],
      "correct": 0,
      "explanation": "Standard 802.1Q vkládá do hlavičky Ethernet rámce 4bajtový tag, jehož součástí je 12bitové pole VLAN ID (podporující rozsah 1 až 4094)."
    },
    {
      "id": "srwe_q09",
      "module": "srwe_m1",
      "question": "Which command displays the VLAN assignment status and all active ports associated with each VLAN on a Cisco switch?",
      "code": null,
      "options": [
        "show vlan brief",
        "show interfaces trunk",
        "show vlan summary",
        "show ip vlan"
      ],
      "correct": 0,
      "explanation": "Příkaz 'show vlan brief' přehledně zobrazí seznam všech nakonfigurovaných VLAN, jejich stav (active) a seznam přiřazených přístupových portů."
    },
    {
      "id": "srwe_q10",
      "module": "srwe_m1",
      "question": "What is the recommended practice for the Native VLAN on 802.1Q trunk links to prevent VLAN hopping attacks?",
      "code": null,
      "options": [
        "Change the native VLAN to an unused VLAN ID other than VLAN 1 on both ends of the trunk",
        "Set the native VLAN to VLAN 1002 on one switch and VLAN 1003 on the other",
        "Disable 802.1Q tagging entirely",
        "Configure the native VLAN on access ports only"
      ],
      "correct": 0,
      "explanation": "Doporučenou bezpečnostní praxí Cisco je změnit Native VLAN z výchozí VLAN 1 na jinou, nepoužívanou VLAN (např. VLAN 999) na obou koncích trunk linky, aby se zabránilo útokům typu VLAN Hopping (Double Tagging)."
    },
    {
      "id": "srwe_q11",
      "module": "srwe_m2",
      "question": "What is the primary purpose of the Spanning Tree Protocol (STP, IEEE 802.1D) in a switched Ethernet network?",
      "code": null,
      "options": [
        "To prevent Layer 2 switching loops and broadcast storms in redundant topologies",
        "To encrypt Ethernet frames between switches",
        "To dynamically assign IP addresses to hosts",
        "To combine multiple physical links into one logical link"
      ],
      "correct": 0,
      "explanation": "Primárním účelem STP je eliminovat smyčky na druhé vrstvě (L2 loops) v redundantních topologiích selektivním blokováním redundantních portů a zabránit tak všesměrovým bouřím (broadcast storms)."
    },
    {
      "id": "srwe_q12",
      "module": "srwe_m2",
      "question": "Which switch is elected as the Root Bridge in an STP topology?",
      "code": null,
      "options": [
        "The switch with the lowest Bridge ID (BID), which combines priority and MAC address",
        "The switch with the highest MAC address",
        "The switch with the fastest Ethernet interfaces",
        "The switch with the highest IP address"
      ],
      "correct": 0,
      "explanation": "Jako Root Bridge je zvolen přepínač s nejnižším Bridge ID (BID). BID se skládá z Bridge Priority (výchozí 32768 + VLAN ID) a MAC adresy přepínače. Nejnižší hodnota vyhrává."
    },
    {
      "id": "srwe_q13",
      "module": "srwe_m2",
      "question": "What is the default STP bridge priority on Cisco Catalyst switches?",
      "code": null,
      "options": [
        "32768",
        "4096",
        "1",
        "65535"
      ],
      "correct": 0,
      "explanation": "Výchozí priorita mostu (Bridge Priority) je 32768. Při použití PVST+ se k prioritě přičítá číslo VLAN (Extended System ID), takže pro VLAN 1 je výsledná priorita 32769."
    },
    {
      "id": "srwe_q14",
      "module": "srwe_m2",
      "question": "Which port role is assigned to the switch port that provides the lowest path cost back to the Root Bridge on a non-root switch?",
      "code": null,
      "options": [
        "Root Port",
        "Designated Port",
        "Alternate / Blocking Port",
        "Disabled Port"
      ],
      "correct": 0,
      "explanation": "Root Port (kořenový port) je port na non-root přepínači, který má nejnižší kumulativní cenu cesty (Root Path Cost) k Root Bridge. Každý non-root přepínač má právě jeden Root Port."
    },
    {
      "id": "srwe_q15",
      "module": "srwe_m2",
      "question": "What are the port states in Rapid Spanning Tree Protocol (RSTP, 802.1w)?",
      "code": null,
      "options": [
        "Discarding, Learning, Forwarding",
        "Blocking, Listening, Learning, Forwarding, Disabled",
        "Active, Standby, Listening",
        "Down, Negotiation, Forwarding"
      ],
      "correct": 0,
      "explanation": "RSTP (802.1w) zjednodušil stavy portů na pouhé tři: Discarding (sloučil stavy Disabled, Blocking a Listening z 802.1D), Learning a Forwarding."
    },
    {
      "id": "srwe_q16",
      "module": "srwe_m2",
      "question": "What is the benefit of configuring Cisco PortFast on access switch ports connected to end-user workstations?",
      "code": "Switch(config-if)# spanning-tree portfast",
      "options": [
        "It bypasses the Listening and Learning states, transitioning the port immediately to the Forwarding state",
        "It increases the port bandwidth to full Gigabit speed",
        "It automatically disables STP processing on the switch",
        "It prevents unauthorized devices from connecting by checking MAC addresses"
      ],
      "correct": 0,
      "explanation": "Funkce PortFast přeskakuje stavy Listening a Learning a přepne přístupový port okamžitě do stavu Forwarding. To zabrání zpoždění při získávání IP adresy přes DHCP při zapnutí PC."
    },
    {
      "id": "srwe_q17",
      "module": "srwe_m2",
      "question": "What action does BPDU Guard take if a BPDU packet is received on a PortFast-enabled switch interface?",
      "code": "Switch(config-if)# spanning-tree bpduguard enable",
      "options": [
        "It immediately places the interface into the err-disabled state to protect against rogue switches",
        "It forwards the BPDU to the Root Bridge without inspecting it",
        "It decreases the interface priority by 4096",
        "It converts the port into a trunk port"
      ],
      "correct": 0,
      "explanation": "BPDU Guard chrání topologii před připojením neautorizovaného switche: jakmile na chráněném portu zachytí BPDU rámec, port okamžitě vypne a uvede jej do stavu 'err-disabled'."
    },
    {
      "id": "srwe_q18",
      "module": "srwe_m2",
      "question": "Which command configures a Cisco switch to use Rapid Per-VLAN Spanning Tree?",
      "code": "Switch(config)# [???]",
      "options": [
        "spanning-tree mode rapid-pvst",
        "spanning-tree mode rstp",
        "spanning-tree rapid-pvst enable",
        "spanning-tree protocol 802.1w"
      ],
      "correct": 0,
      "explanation": "Cisco implementace standardu 802.1w se nazývá Rapid PVST+ a konfiguruje se příkazem 'spanning-tree mode rapid-pvst'."
    },
    {
      "id": "srwe_q19",
      "module": "srwe_m2",
      "question": "What is the purpose of the Bridge Protocol Data Unit (BPDU) in STP networks?",
      "code": null,
      "options": [
        "It is a specialized management frame sent between switches to elect the Root Bridge and exchange topology information",
        "It synchronizes clock time across all switches via NTP",
        "It authenticates administrative SSH logins on switch ports",
        "It carries VoIP voice traffic over trunk links"
      ],
      "correct": 0,
      "explanation": "BPDU (Bridge Protocol Data Unit) je zpráva STP odesílaná každé 2 sekundy, pomocí níž si přepínače vyměňují informace o BID, cenách cest a stavu topologie a volí Root Bridge."
    },
    {
      "id": "srwe_q20",
      "module": "srwe_m2",
      "question": "Which command lowers a switch's bridge priority to make it the Root Bridge for VLAN 10?",
      "code": "Switch(config)# [???]",
      "options": [
        "spanning-tree vlan 10 root primary",
        "spanning-tree vlan 10 priority 0",
        "spanning-tree root-bridge enable",
        "spanning-tree vlan 10 root master"
      ],
      "correct": 0,
      "explanation": "Příkaz 'spanning-tree vlan 10 root primary' automaticky sníží prioritu switche (na hodnotu 24576 nebo o 4096 méně než aktuální root), aby se switch stal kořenovým mostem pro danou VLAN."
    },
    {
      "id": "srwe_q21",
      "module": "srwe_m3",
      "question": "Which open-standard protocol is defined in IEEE 802.3ad to dynamically negotiate and form an EtherChannel bundle?",
      "code": null,
      "options": [
        "LACP (Link Aggregation Control Protocol)",
        "PAgP (Port Aggregation Protocol)",
        "DTP (Dynamic Trunking Protocol)",
        "CDP (Cisco Discovery Protocol)"
      ],
      "correct": 0,
      "explanation": "LACP (IEEE 802.3ad) je otevřený průmyslový standard pro agregaci linek (EtherChannel), který funguje mezi zařízeními různých výrobců. PAgP je proprietární protokol Cisco."
    },
    {
      "id": "srwe_q22",
      "module": "srwe_m3",
      "question": "Which combination of EtherChannel modes will successfully establish an LACP channel between two switches?",
      "code": null,
      "options": [
        "active on Switch A and active (or passive) on Switch B",
        "passive on Switch A and passive on Switch B",
        "auto on Switch A and desirable on Switch B",
        "on on Switch A and active on Switch B"
      ],
      "correct": 0,
      "explanation": "V protokolu LACP musí alespoň jedna strana iniciovat vyjednávání v režimu 'active'. Kombinace active-active nebo active-passive linku sestaví. Kombinace passive-passive kanál nesestaví (obě strany pouze čekají)."
    },
    {
      "id": "srwe_q23",
      "module": "srwe_m3",
      "question": "What parameters must strictly match across all member interfaces before an EtherChannel can form?",
      "code": null,
      "options": [
        "Speed, duplex, and VLAN settings (access VLAN or trunk native/allowed VLANs)",
        "Interface description and MAC address",
        "IP address and subnet mask on each physical port",
        "Cable length and physical port numbers"
      ],
      "correct": 0,
      "explanation": "Všechny fyzické porty v EtherChannelu musí mít stejnou rychlost (speed), duplexní režim a identické nastavení VLAN (buď stejná přístupová VLAN, nebo stejná Native VLAN a povolené VLANy na trunku)."
    },
    {
      "id": "srwe_q24",
      "module": "srwe_m3",
      "question": "Which command configures a DHCP relay agent on a router interface to forward client DHCP broadcast requests to a central DHCP server?",
      "code": "Router(config-if)# [???] 192.168.1.100",
      "options": [
        "ip helper-address 192.168.1.100",
        "ip dhcp-relay 192.168.1.100",
        "ip dhcp server 192.168.1.100",
        "ip forward dhcp 192.168.1.100"
      ],
      "correct": 0,
      "explanation": "Příkaz 'ip helper-address <ip-adresa>' na rozhraní směrovače zachytí klientské DHCP všesměrové vysílání (broadcast na portech 67/68) a přepošle jej jako unicast na zadanou adresu DHCP serveru."
    },
    {
      "id": "srwe_q25",
      "module": "srwe_m3",
      "question": "How does an IPv6 host obtain an IPv6 address using Stateless Address Autoconfiguration (SLAAC)?",
      "code": null,
      "options": [
        "It listens for ICMPv6 Router Advertisement (RA) messages from the local router and combines the prefix with its own interface ID",
        "It contacts a centralized DHCPv6 server and receives a leased address and lease time",
        "It generates a random 128-bit address without consulting any router",
        "It uses ARP to request an address from the default gateway"
      ],
      "correct": 0,
      "explanation": "Při SLAAC hostitel odešle zprávu Router Solicitation (RS) a ze zprávy Router Advertisement (RA) od lokálního směrovače získá síťový prefix (/64). K prefixu připojí svůj 64bitový Interface ID (vygenerovaný náhodně nebo přes EUI-64)."
    },
    {
      "id": "srwe_q26",
      "module": "srwe_m3",
      "question": "What is the default violation mode when port security is enabled on a Cisco switch interface?",
      "code": "Switch(config-if)# switchport port-security",
      "options": [
        "shutdown",
        "restrict",
        "protect",
        "drop"
      ],
      "correct": 0,
      "explanation": "Výchozím režimem narušení (violation mode) u port security je 'shutdown': port je při neoprávněné MAC adrese okamžitě vypnut a uveden do stavu err-disabled, odešle se SNMP trap a počítadlo narušení se inkrementuje."
    },
    {
      "id": "srwe_q27",
      "module": "srwe_m3",
      "question": "Which port security violation mode drops unauthorized traffic, increments the security violation counter, and generates a syslog message WITHOUT shutting down the port?",
      "code": null,
      "options": [
        "restrict",
        "protect",
        "shutdown",
        "disabled"
      ],
      "correct": 0,
      "explanation": "V režimu 'restrict' přepínač zahazuje neoprávněné rámce, generuje syslog zprávu a SNMP trap a navyšuje čítač porušení, ale port zůstává v provozu pro povolenou MAC adresu."
    },
    {
      "id": "srwe_q28",
      "module": "srwe_m3",
      "question": "What security feature mitigates rogue DHCP servers by categorizing switch ports as either trusted or untrusted?",
      "code": "Switch(config)# ip dhcp snooping",
      "options": [
        "DHCP Snooping",
        "Dynamic ARP Inspection (DAI)",
        "Port Security",
        "BPDU Guard"
      ],
      "correct": 0,
      "explanation": "Funkce DHCP Snooping rozlišuje důvěryhodné (trusted) porty (připojené k legitimnímu DHCP serveru nebo uplinku) a nedůvěryhodné (untrusted) porty (přístupové porty klientů). Odpovědi DHCP serveru (DHCPOFFER, DHCPACK) na untrusted portech zahazuje."
    },
    {
      "id": "srwe_q29",
      "module": "srwe_m3",
      "question": "What security mechanism relies on the DHCP Snooping binding database to prevent ARP poisoning and ARP spoofing attacks?",
      "code": "Switch(config)# ip arp inspection vlan 10",
      "options": [
        "Dynamic ARP Inspection (DAI)",
        "IP Source Guard (IPSG)",
        "MAC Limiting",
        "Private VLANs"
      ],
      "correct": 0,
      "explanation": "Dynamic ARP Inspection (DAI) zachycuje všechny ARP požadavky a odpovědi na nedůvěryhodných portech a ověřuje jejich platnost vůči databázi vazeb DHCP Snooping (porovnává IP a MAC adresu). Neplatné pakety zahazuje."
    },
    {
      "id": "srwe_q30",
      "module": "srwe_m3",
      "question": "Which command automatically learns dynamic MAC addresses on an interface and saves them permanently into the running-config?",
      "code": "Switch(config-if)# [???]",
      "options": [
        "switchport port-security mac-address sticky",
        "switchport port-security mac-address dynamic",
        "switchport port-security learn auto",
        "switchport port-security mac-save"
      ],
      "correct": 0,
      "explanation": "Příkaz 'switchport port-security mac-address sticky' dynamicky naučí první příchozí MAC adresy na portu a zapíše je přímo do běžící konfigurace (running-config) jako trvalé záznamy."
    },
    {
      "id": "srwe_q31",
      "module": "srwe_m4",
      "question": "Which protocol is used to establish secure control and data encapsulation tunnels between lightweight Access Points (APs) and a Wireless LAN Controller (WLC)?",
      "code": null,
      "options": [
        "CAPWAP (Control and Provisioning of Wireless Access Points)",
        "SNMPv3",
        "IPsec",
        "LWAPP v1"
      ],
      "correct": 0,
      "explanation": "Protokol CAPWAP (Control and Provisioning of Wireless Access Points) vytváří tunel mezi lehkým AP (Lightweight AP) a WLC kontrolérem: CAPWAP Control tunel (šifrovaný UDP port 5246) a CAPWAP Data tunel (UDP port 5247)."
    },
    {
      "id": "srwe_q32",
      "module": "srwe_m4",
      "question": "What is the difference between an Autonomous Access Point and a Lightweight Access Point (LAP)?",
      "code": null,
      "options": [
        "Autonomous APs manage all RF and security functions independently; Lightweight APs require a WLC for central management via CAPWAP",
        "Autonomous APs support only 2.4 GHz, while LAPs support only 5 GHz",
        "Lightweight APs cannot connect wireless clients directly",
        "Autonomous APs require cloud subscriptions to operate"
      ],
      "correct": 0,
      "explanation": "Autonomní AP je samostatné zařízení, které konfigurujete přímo na něm (tzv. fat AP). Lehký AP (Lightweight / fit AP) spolupracuje s centrálním WLC řadičem, ze kterého stahuje konfiguraci, firmware a zásady zabezpečení."
    },
    {
      "id": "srwe_q33",
      "module": "srwe_m4",
      "question": "Which Wi-Fi wireless standard operates in both the 2.4 GHz and 5 GHz frequency bands, introducing OFDMA and MU-MIMO for high-density environments (branded as Wi-Fi 6)?",
      "code": null,
      "options": [
        "802.11ax",
        "802.11ac",
        "802.11n",
        "802.11g"
      ],
      "correct": 0,
      "explanation": "Standard IEEE 802.11ax (známý pod komerčním označením Wi-Fi 6) pracuje v obou pásmech (2.4 GHz i 5 GHz, a 6 GHz u Wi-Fi 6E) a využívá technologii OFDMA a obousměrné MU-MIMO."
    },
    {
      "id": "srwe_q34",
      "module": "srwe_m4",
      "question": "Which wireless security standard uses the SAE (Simultaneous Authentication of Equals) handshake to prevent dictionary and offline brute-force attacks?",
      "code": null,
      "options": [
        "WPA3 Personal",
        "WPA2 Personal (PSK)",
        "WPA Enterprise",
        "WEP 128-bit"
      ],
      "correct": 0,
      "explanation": "WPA3 Personal nahrazuje zranitelné čtyřcestné podání ruky s předsdíleným klíčem (WPA2 PSK) robustním protokolem SAE (Simultaneous Authentication of Equals / Dragonfly), který znemožňuje offline slovníkové útoky."
    },
    {
      "id": "srwe_q35",
      "module": "srwe_m4",
      "question": "What constitutes a Basic Service Set (BSS) in an 802.11 wireless network?",
      "code": null,
      "options": [
        "A single Access Point and all associated wireless client devices",
        "Multiple interconnected Access Points sharing a common SSID",
        "Two client stations communicating directly without an AP (ad-hoc)",
        "A switch trunk connected to a router-on-a-stick"
      ],
      "correct": 0,
      "explanation": "BSS (Basic Service Set) tvoří jeden přístupový bod (Access Point) a bezdrátoví klienti, kteří jsou k němu připojeni. Identifikátorem BSS je BSSID (zpravidla MAC adresa rádia AP). Spojení více BSS tvoří ESS (Extended Service Set)."
    },
    {
      "id": "srwe_q36",
      "module": "srwe_m4",
      "question": "What is the syntax for configuring an IPv4 default static route on a Cisco router using next-hop IP 192.168.1.1?",
      "code": "Router(config)# [???]",
      "options": [
        "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
        "ip route default 192.168.1.1",
        "ip default-network 192.168.1.1",
        "route 0.0.0.0 255.255.255.255 192.168.1.1"
      ],
      "correct": 0,
      "explanation": "Výchozí statická cesta (default static route / quad-zero route) odpovídá všem cílům a zadává se příkazem 'ip route 0.0.0.0 0.0.0.0 <next-hop-ip | exit-interface>'."
    },
    {
      "id": "srwe_q37",
      "module": "srwe_m4",
      "question": "What is a 'floating static route' and how is it configured in Cisco IOS?",
      "code": "Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.2 10",
      "options": [
        "A backup static route configured with an administrative distance higher than the primary route so it is only installed in the routing table when the primary route fails",
        "A route that automatically changes its next-hop based on ping latency",
        "A route that dynamically floats between different VLANs",
        "A multicast route with an administrative distance of 1"
      ],
      "correct": 0,
      "explanation": "Plovoucí statická cesta (floating static route) slouží jako záložní trasa. Konfiguruje se s vyšší administrativní vzdáleností (AD > 1, např. 5 nebo 10). Do směrovací tabulky se nainstaluje pouze tehdy, když primární trasa vypadne."
    },
    {
      "id": "srwe_q38",
      "module": "srwe_m4",
      "question": "What is the Administrative Distance (AD) of a directly connected network, a static route, and OSPF respectively in Cisco IOS?",
      "code": null,
      "options": [
        "Directly connected = 0, Static route = 1, OSPF = 110",
        "Directly connected = 1, Static route = 0, OSPF = 90",
        "Directly connected = 0, Static route = 5, OSPF = 100",
        "Directly connected = 10, Static route = 20, OSPF = 120"
      ],
      "correct": 0,
      "explanation": "Administrativní vzdálenost (AD) určuje důvěryhodnost zdroje směrování: Přímo připojená síť (Connected) má AD 0, Statická cesta (Static) má AD 1, eBGP má 20, EIGRP má 90, OSPF má 110 a RIP má 120."
    },
    {
      "id": "srwe_q39",
      "module": "srwe_m4",
      "question": "When a router receives a packet, how does it choose the best matching route from the routing table?",
      "code": null,
      "options": [
        "By the Longest Prefix Match (the route with the highest number of matching leading bits / longest subnet mask)",
        "By the lowest metric alone, regardless of prefix length",
        "By the first route listed in alphabetical order",
        "By the route that was configured most recently"
      ],
      "correct": 0,
      "explanation": "Směrovač vždy preferuje shodu s nejdelším prefixem (Longest Prefix Match). Například pro cíl 10.1.1.5 má přednost trasa /28 před trasou /24 a před výchozí trasou /0."
    },
    {
      "id": "srwe_q40",
      "module": "srwe_m4",
      "question": "What Cisco IOS command displays the IPv4 routing table on a router or Layer 3 switch?",
      "code": null,
      "options": [
        "show ip route",
        "show ip routing-table",
        "display ip route",
        "show routes"
      ],
      "correct": 0,
      "explanation": "Příkaz 'show ip route' v privilegovaném režimu EXEC zobrazí kompletní směrovací tabulku IPv4 včetně kódů zdrojů (C = Connected, S = Static, O = OSPF, D = EIGRP, * = candidate default)."
    }
  ]
}
,

  ccna_itn: {
  "id": "ccna_itn",
    category: "systems",
    categoryName: "Počítačové systémy a sítě",
  "title": "Cisco Networking Academy: CCNA: Introduction to Networks (ITN)",
  "subtitle": "Příprava na certifikaci CCNA v7 ITN (Modul 1) / CCNA 200-301",
  "badge": "CCNA: ITN",
  "icon": "fas fa-ethernet",
  "color": "#049FD9",
  "passScore": 70,
  "timeLimit": 60,
  "modules": [
    {
      "id": "itn_m1",
      "name": "ITN-M1: Základy sítí, Modely OSI / TCP-IP & Cisco IOS"
    },
    {
      "id": "itn_m2",
      "name": "ITN-M2: Fyzická vrstva, Ethernet & Linková vrstva (L2)"
    },
    {
      "id": "itn_m3",
      "name": "ITN-M3: Síťová vrstva, IPv4 adresace & Subnetting"
    },
    {
      "id": "itn_m4",
      "name": "ITN-M4: IPv6, Transportní vrstva (TCP/UDP) & Aplikační služby"
    }
  ],
  "questions": [
    {
      "id": "itn_q1",
      "module": "itn_m1",
      "question": "What is the primary function of the kernel in an operating system?",
      "options": [
        "The kernel provisions hardware resources to meet software requirements.",
        "The kernel provides a graphical user interface for end users to request application tasks.",
        "The kernel compiles high-level programming language code into assembly language.",
        "The kernel manages user authentication and remote network firewall policies."
      ],
      "correct": 0,
      "explanation": "Jádro operačního systému (kernel) tvoří přímý most mezi softwarem (aplikacemi / shellem) a fyzickým hardwarem počítače. Zajišťuje alokaci a správu hardwarových prostředků (CPU, operační paměť RAM, I/O řadiče a disky)."
    },
    {
      "id": "itn_q2",
      "module": "itn_m1",
      "question": "What is the Protocol Data Unit (PDU) called at the Network layer (Layer 3) of the OSI model?",
      "options": [
        "Frame",
        "Segment",
        "Packet",
        "Bits"
      ],
      "correct": 2,
      "explanation": "V OSI modelu se PDU (Protocol Data Unit) nazývá: Vrstva 4 (Transport) = Segment, Vrstva 3 (Network) = Packet (paket), Vrstva 2 (Data Link) = Frame (rámec) a Vrstva 1 (Physical) = Bits (bity)."
    },
    {
      "id": "itn_q3",
      "module": "itn_m1",
      "question": "Which command prompt indicates that a network administrator is operating in Privileged EXEC mode on a Cisco switch?",
      "options": [
        "Switch>",
        "Switch#",
        "Switch(config)#",
        "Switch(config-if)#"
      ],
      "correct": 1,
      "explanation": "Výzva s mřížkou (Switch#) značí Privileged EXEC mode (povolený příkazem enable). Znak '>' značí omezený User EXEC mode a '(config)#' Global Configuration mode."
    },
    {
      "id": "itn_q4",
      "module": "itn_m1",
      "question": "Which command should be used to configure a secure, encrypted password for accessing Privileged EXEC mode on a Cisco router?",
      "options": [
        "enable password <password>",
        "enable secret <password>",
        "service password-encryption",
        "line console 0 password <password>"
      ],
      "correct": 1,
      "explanation": "Příkaz 'enable secret <heslo>' nastavuje heslo pro Privileged EXEC mode a automaticky jej zahešuje silným jednosměrným algoritmem (MD5/SHA-256). Starší příkaz 'enable password' ukládal heslo v čitelném textu nebo slabé reverzibilní šifře."
    },
    {
      "id": "itn_q5",
      "module": "itn_m1",
      "question": "What is the purpose of entering the 'login' command under 'line vty 0 4' configuration mode on a Cisco switch?",
      "options": [
        "It configures the line to prompt for password authentication when a user initiates a remote Telnet or SSH session.",
        "It creates a new local administrator account in the NVRAM security database.",
        "It automatically encrypts all passwords stored in the startup-configuration file.",
        "It activates SSH version 2 and completely disables unencrypted Telnet traffic."
      ],
      "correct": 0,
      "explanation": "Bez příkazu 'login' pod virtuálními linkami VTY Cisco zařízení odmítne vzdálené připojení, neboť není aktivováno ověřování. Příkaz 'login' instruuje zařízení, aby při pokusu o relaci Telnet/SSH vyžadovalo zadání hesla."
    },
    {
      "id": "itn_q6",
      "module": "itn_m1",
      "question": "What is the effect of configuring the 'service password-encryption' command on a Cisco router?",
      "options": [
        "It encrypts all plain-text passwords in the configuration file using Cisco Type 7 encryption.",
        "It creates a 2048-bit RSA key pair for secure cryptographic SSH transport.",
        "It locks the console port after three consecutive failed password attempts.",
        "It prevents unauthorized users from rebooting the router into ROMMON mode."
      ],
      "correct": 0,
      "explanation": "Příkaz 'service password-encryption' v globální konfiguraci zašifruje všechna dosud nezašifrovaná hesla v konfiguračním souboru (např. console a vty hesla) pomocí Type 7 šifrování, čímž zabrání jejich přečtení 'přes rameno'."
    },
    {
      "id": "itn_q7",
      "module": "itn_m1",
      "question": "Which command copies the active configuration from RAM to non-volatile memory (NVRAM) so that it persists across device reboots?",
      "options": [
        "copy startup-config running-config",
        "copy running-config startup-config",
        "write erase",
        "reload /save"
      ],
      "correct": 1,
      "explanation": "Běžící konfigurace se nachází v paměti RAM ('running-config'). Aby se změny neztratily po vypnutí nebo restartu, musí se zkopírovat do NVRAM ('startup-config') pomocí 'copy running-config startup-config'."
    },
    {
      "id": "itn_q8",
      "module": "itn_m1",
      "question": "What happens if a host PC has an incorrectly configured default gateway IP address?",
      "options": [
        "The host can communicate with other devices on the local subnet, but cannot communicate with devices on remote networks or the internet.",
        "The host cannot communicate with any device on the network, including local subnet hosts.",
        "The host automatically falls back to an APIPA address (169.254.x.x) and disables its NIC.",
        "The local switch automatically places the host's switchport into an err-disabled state."
      ],
      "correct": 0,
      "explanation": "Výchozí brána (default gateway) je rozhraní směrovače používané výhradně pro komunikaci mimo lokální podsíť. V rámci stejné podsítě PC komunikuje přímo přes MAC adresy a ARP protokol bez potřeby brány."
    },
    {
      "id": "itn_q9",
      "module": "itn_m1",
      "question": "What is the primary operational and legal purpose of configuring a 'banner motd' on Cisco network devices?",
      "options": [
        "To display a legal warning message stating that unauthorized access is strictly prohibited before a user logs in.",
        "To greet authorized employees with a friendly welcome message and company contact information.",
        "To display the current IP routing table and active interface summary to connecting administrators.",
        "To automatically authenticate console sessions without requiring a password."
      ],
      "correct": 0,
      "explanation": "V souladu s bezpečnostními a právními standardy Cisco NetAcad musí zpráva dne (banner motd) jasně deklarovat, že neoprávněný přístup je zakázán. Vítací texty (jako 'Welcome') mohou právně zkomplikovat stíhání útočníka."
    },
    {
      "id": "itn_q10",
      "module": "itn_m1",
      "question": "Which memory component in a Cisco router stores the startup configuration file and retains its contents when power is turned off?",
      "options": [
        "RAM (Random Access Memory)",
        "NVRAM (Non-Volatile RAM)",
        "Flash memory",
        "ROM (Read-Only Memory)"
      ],
      "correct": 1,
      "explanation": "NVRAM uchovává konfigurační soubor 'startup-config' i po odpojení napájení. RAM uchovává dočasnou běžící konfiguraci ('running-config') a směrovací tabulku, Flash uchovává Cisco IOS image a ROM obsahuje bootstrap kód."
    },
    {
      "id": "itn_q11",
      "module": "itn_m2",
      "question": "Which technique is used by Unshielded Twisted-Pair (UTP) cables to reduce the electromagnetic effects of crosstalk between wire pairs?",
      "options": [
        "Wrapping each copper pair in metallic shielding foil and grounding wire",
        "Twisting opposing wire pairs together with varying twist rates per pair",
        "Increasing the copper wire diameter to heavy 10 AWG solid conductors",
        "Encoding the electrical pulses using high-frequency Manchester modulation only"
      ],
      "correct": 1,
      "explanation": "Kroucení vodičů (twisting) využívá efektu vzájemného rušení protichůdných magnetických polí (cancellation). Každý pár v UTP kabelu má navíc odlišnou hustotu zkroucení (twist rate), což dramaticky omezuje přeslechy (crosstalk)."
    },
    {
      "id": "itn_q12",
      "module": "itn_m2",
      "question": "What is a primary characteristic of Single-Mode Fiber (SMF) compared to Multimode Fiber (MMF)?",
      "options": [
        "SMF uses a smaller glass core and a laser light source to transmit data over significantly longer distances.",
        "SMF uses inexpensive Light Emitting Diodes (LEDs) and a larger core diameter for short LAN runs.",
        "SMF suffers from greater modal dispersion than MMF across distances over 500 meters.",
        "SMF allows multiple different angles of light rays to travel simultaneously through the core."
      ],
      "correct": 0,
      "explanation": "Jednomodové vlákno (SMF) má velmi tenké jádro (cca 9 µm) a laserový zdroj, díky čemuž se světlo šíří v jediném paprsku bez modální disperze. Umožňuje přenos na desítky kilometrů, zatímco MMF (50/62.5 µm) využívá LED na kratší vzdálenosti."
    },
    {
      "id": "itn_q13",
      "module": "itn_m2",
      "question": "What is the function of the Auto-MDIX feature when enabled on Cisco switch interfaces?",
      "options": [
        "It automatically detects the cable connection type and internally configures the transmit and receive pairs accordingly.",
        "It dynamically negotiates the highest possible speed and duplex setting with the neighboring device.",
        "It automatically assigns a valid IPv4 address and subnet mask to the connected host.",
        "It converts incoming half-duplex CSMA/CD frames into full-duplex Ethernet frames without buffering."
      ],
      "correct": 0,
      "explanation": "Funkce Auto-MDIX (Automatic Medium-Dependent Interface Crossover) automaticky detekuje typ kabelu a interně přizpůsobí vysílací (Tx) a přijímací (Rx) páry. Umožňuje bezproblémové použití přímého (straight-through) i kříženého (crossover) kabelu."
    },
    {
      "id": "itn_q14",
      "module": "itn_m2",
      "question": "Which two functions are performed at the MAC sublayer of the OSI Data Link layer? (Choose the statement that best describes MAC responsibilities.)",
      "options": [
        "Adding physical source and destination MAC addresses and appending a Frame Check Sequence (FCS) trailer for error detection.",
        "Communicating directly with upper-layer network protocols and identifying protocol types using EtherType.",
        "Reordering TCP segments received out of sequence and negotiating receive window sizes.",
        "Routing packets across multiple logical subnets based on destination IP addresses."
      ],
      "correct": 0,
      "explanation": "Linková vrstva (Layer 2) se dělí na LLC (802.2) a MAC (802.3). MAC podvrstva řídí přístup k fyzickému médiu, přidává zdrojovou a cílovou MAC adresu a na konec rámce vkládá kontrolní součet FCS (CRC) pro detekci chyb."
    },
    {
      "id": "itn_q15",
      "module": "itn_m2",
      "question": "An Ethernet MAC address is 48 bits long. What does the first 24 bits (6 hexadecimal digits) represent?",
      "options": [
        "The Organizationally Unique Identifier (OUI) assigned to the manufacturer by the IEEE",
        "The unique vendor-assigned device serial number",
        "The broadcast and multicast network filter mask",
        "The logical subnet prefix of the local physical LAN segment"
      ],
      "correct": 0,
      "explanation": "Prvních 24 bitů (3 bajty / 6 hex znaků) MAC adresy tvoří OUI (Organizationally Unique Identifier), které výrobci síťové karty přiděluje organizace IEEE. Zbývajících 24 bitů je unikátní sériové číslo přiřazené samotným výrobcem."
    },
    {
      "id": "itn_q16",
      "module": "itn_m2",
      "question": "What is the minimum valid Ethernet frame size (from Destination MAC through the FCS), and what happens when a switch receives a frame smaller than this threshold?",
      "options": [
        "64 bytes; frames smaller than 64 bytes are called runts and are automatically dropped by the switch.",
        "46 bytes; frames smaller than 46 bytes are buffered in RAM until additional data arrives.",
        "128 bytes; frames smaller than 128 bytes are padded with zeros up to 1518 bytes.",
        "1518 bytes; frames smaller than 1518 bytes are marked with an error flag and forwarded to the router."
      ],
      "correct": 0,
      "explanation": "Minimální platná velikost Ethernet II rámce je 64 bajtů (pokud má užitečné zatížení méně než 46 bajtů, doplní se padding). Rámce kratší než 64 bajtů se nazývají 'runt frames' (obvykle způsobené kolizí) a přepínače je okamžitě zahazují."
    },
    {
      "id": "itn_q17",
      "module": "itn_m2",
      "question": "Which Ethernet switching method provides the lowest forwarding latency by beginning to transmit the frame immediately after reading the destination MAC address?",
      "options": [
        "Store-and-forward",
        "Cut-through (Fast-forward)",
        "Fragment-free",
        "Adaptive buffering"
      ],
      "correct": 1,
      "explanation": "Metoda Cut-through (Fast-forward) nabízí nejnižší latenci, protože začne rámec přeposílat okamžitě po přečtení cílové MAC adresy (prvních 6 bajtů po preambuli). Store-and-forward načte celý rámec a zkontroluje FCS, což zvyšuje zpoždění."
    },
    {
      "id": "itn_q18",
      "module": "itn_m2",
      "question": "What action does an Ethernet switch take when it receives a unicast frame whose destination MAC address is not currently found in its MAC address table?",
      "options": [
        "It floods the frame out of all ports except the incoming port on which the frame was received.",
        "It drops the frame immediately and sends an ICMP Host Unreachable message to the source.",
        "It forwards the frame exclusively to the switch's default gateway IP address.",
        "It holds the frame in a queue until the destination host sends an ARP broadcast."
      ],
      "correct": 0,
      "explanation": "Pokud přepínač nezná cílovou MAC adresu (tzv. unknown unicast), provede zaplavení (unknown unicast flooding) — rozešle rámec všemi aktivními porty v dané VLAN kromě portu, na kterém rámec přijal."
    },
    {
      "id": "itn_q19",
      "module": "itn_m2",
      "question": "In a legacy half-duplex Ethernet network, what action is taken by transmitting hosts immediately after a collision is detected by CSMA/CD?",
      "options": [
        "The transmitting hosts transmit a jam signal, cease transmission, and wait for a random backoff period before attempting retransmission.",
        "The hosts immediately negotiate a full-duplex session with the central hub.",
        "The hosts increase electrical voltage on the copper cable to overpower the conflicting signal.",
        "The hosts immediately forward the colliding frames to the default gateway router."
      ],
      "correct": 0,
      "explanation": "Při kolizi v síti CSMA/CD vyšlou vysílající uzly rušicí signál (jam signal), aby upozornily všechny stanice na kolizi, okamžitě zastaví vysílání a vyčkají náhodnou dobu (backoff algorithm) před novým pokusem o vysílání."
    },
    {
      "id": "itn_q20",
      "module": "itn_m2",
      "question": "What symptom is typically observed when one side of a point-to-point Ethernet link is manually configured for Full-Duplex and the connecting switch port is set to Half-Duplex?",
      "options": [
        "Late collisions, CRC errors, and degraded network throughput on the half-duplex port.",
        "The switch automatically places the port into an err-disabled state and turns off the link LED.",
        "The half-duplex device automatically clones the MAC address table of the full-duplex peer.",
        "Continuous broadcast storms are generated across the entire local broadcast domain."
      ],
      "correct": 0,
      "explanation": "Při 'duplex mismatch' full-duplex strana vysílá a přijímá současně bez ohledu na linku. Half-duplex strana však detekuje tento souběžný provoz jako kolize, což generuje pozdní kolize (late collisions), CRC chyby a obrovskou ztrátovost paketů."
    },
    {
      "id": "itn_q21",
      "module": "itn_m3",
      "question": "Which two characteristics accurately describe the fundamental design of the Internet Protocol (IP)?",
      "options": [
        "Connectionless and Best-effort",
        "Connection-oriented and Reliable",
        "Media-dependent and Error-free",
        "Flow-controlled and Guaranteed delivery"
      ],
      "correct": 0,
      "explanation": "Internet Protocol (IP) je ze své podstaty: 1) Connectionless (nespojovaný – nepředchází žádné navazování relace) a 2) Best-effort (nespolehlivý – sám o sobě nekontroluje doručení ani nezajišťuje retransmise; spolehlivost řeší vyšší vrstva, např. TCP)."
    },
    {
      "id": "itn_q22",
      "module": "itn_m3",
      "question": "What happens when a router receives an IPv4 packet with a Time to Live (TTL) value of 1 that is destined for a host multiple hops away?",
      "options": [
        "The router decrements the TTL to 0, discards the packet, and sends an ICMP Time Exceeded message back to the source host.",
        "The router forwards the packet with a TTL of 1 to ensure prompt delivery without delay.",
        "The router resets the TTL to 64 and forwards the packet out the default gateway interface.",
        "The router floods the packet out all active interfaces except the incoming interface."
      ],
      "correct": 0,
      "explanation": "Při průchodu směrovačem se hodnota TTL sníží o 1. Pokud hodnota klesne na 0, směrovač paket zahodí (zabraňuje nekonečným smyčkám) a odesílateli pošle zprávu ICMP Time Exceeded (Type 11). Na tomto principu funguje utilita traceroute."
    },
    {
      "id": "itn_q23",
      "module": "itn_m3",
      "question": "Which range of IPv4 addresses is defined by RFC 1918 for private networks and is not routable on the public Internet?",
      "options": [
        "172.16.0.0 to 172.31.255.255",
        "172.0.0.0 to 172.15.255.255",
        "192.169.0.0 to 192.169.255.255",
        "169.254.0.0 to 169.254.255.255"
      ],
      "correct": 0,
      "explanation": "Privátní IPv4 rozsahy dle RFC 1918: 10.0.0.0/8 (10.0.0.0 – 10.255.255.255), 172.16.0.0/12 (172.16.0.0 – 172.31.255.255) a 192.168.0.0/16 (192.168.0.0 – 192.168.255.255). Rozsah 169.254.0.0/16 je APIPA."
    },
    {
      "id": "itn_q24",
      "module": "itn_m3",
      "question": "A Windows client fails to obtain an IP configuration from a local DHCP server and automatically configures itself with the IP address 169.254.10.55. What type of IPv4 address is this?",
      "options": [
        "Automatic Private IP Addressing (APIPA) link-local address",
        "Public globally routable unicast IP address",
        "RFC 1918 Class B private corporate address",
        "Class D multicast group address"
      ],
      "correct": 0,
      "explanation": "Adresní rozsah 169.254.0.0/16 je definován jako APIPA (IPv4 Link-Local). Klientské stanice si tuto adresu přiřadí automaticky, když selže komunikace s DHCP serverem, což umožní komunikaci pouze v rámci lokálního segmentu."
    },
    {
      "id": "itn_q25",
      "module": "itn_m3",
      "question": "A network administrator needs to create a subnet that supports up to 500 usable host devices. Which subnet mask provides the minimum number of unused host IP addresses?",
      "options": [
        "255.255.255.0 (/24)",
        "255.255.254.0 (/23)",
        "255.255.252.0 (/22)",
        "255.255.248.0 (/21)"
      ],
      "correct": 1,
      "explanation": "Maska /24 (255.255.255.0) poskytuje 2^8 - 2 = 254 použitelných hostů (nestačí pro 500). Maska /23 (255.255.254.0) má 9 bitů pro hosty: 2^9 - 2 = 510 použitelných adres, což je nejmenší maska pokrývající 500 hostů."
    },
    {
      "id": "itn_q26",
      "module": "itn_m3",
      "question": "Given the IPv4 host address 192.168.10.68/26, what are the network address and directed broadcast address for this subnet?",
      "options": [
        "Network: 192.168.10.64, Broadcast: 192.168.10.127",
        "Network: 192.168.10.0, Broadcast: 192.168.10.255",
        "Network: 192.168.10.64, Broadcast: 192.168.10.69",
        "Network: 192.168.10.32, Broadcast: 192.168.10.63"
      ],
      "correct": 0,
      "explanation": "Prefix /26 má masku 255.255.255.192. Krok (velikost bloku) je 256 - 192 = 64. Podsítě jsou .0, .64, .128, .192. Host .68 spadá do podsítě 192.168.10.64. Broadcast je o 1 méně než další síť (.128 - 1 = .127), tedy 192.168.10.127."
    },
    {
      "id": "itn_q27",
      "module": "itn_m3",
      "question": "What is the primary role of the Address Resolution Protocol (ARP) in an IPv4 Ethernet network?",
      "options": [
        "To map a known destination IPv4 address to its corresponding physical MAC address on the local network",
        "To resolve a fully qualified domain name (FQDN) into an IPv4 address",
        "To dynamically assign IP configurations, subnet masks, and default gateways to booting hosts",
        "To provide secure symmetric encryption for Layer 2 Ethernet payloads"
      ],
      "correct": 0,
      "explanation": "Protokol ARP (Address Resolution Protocol) slouží k převodu (mapování) známé logické IPv4 adresy cíle na jeho fyzickou linkovou MAC adresu v rámci lokální sítě."
    },
    {
      "id": "itn_q28",
      "module": "itn_m3",
      "question": "Which statement accurately describes the transmission characteristics of an ARP request and an ARP reply?",
      "options": [
        "An ARP request is sent as a Layer 2 broadcast (FF:FF:FF:FF:FF:FF), while an ARP reply is sent as a Layer 2 unicast.",
        "Both the ARP request and the ARP reply are sent as Layer 2 broadcasts to ensure all hosts update their tables.",
        "An ARP request is sent as a Layer 2 unicast, while the ARP reply is sent as an IP multicast.",
        "An ARP request uses TCP port 67, while an ARP reply uses UDP port 68."
      ],
      "correct": 0,
      "explanation": "ARP request je odesílán jako broadcast (cílová MAC FF:FF:FF:FF:FF:FF), aby jej přijaly všechny stanice v broadcast doméně. Stanice, které daná IP patří, odpoví přímo tazateli prostřednictvím unicast rámce (ARP reply)."
    },
    {
      "id": "itn_q29",
      "module": "itn_m3",
      "question": "When a PC transmits an IP packet to a remote web server located on the public Internet, what destination MAC address is placed in the Ethernet frame departing the PC?",
      "options": [
        "The MAC address of the local router interface acting as the default gateway",
        "The MAC address of the destination web server on the remote network",
        "The Layer 2 broadcast address FF:FF:FF:FF:FF:FF",
        "The MAC address of the DNS server configured on the PC"
      ],
      "correct": 0,
      "explanation": "Cílová IP adresa v paketu zůstává nezměněna (IP web serveru). Cílová MAC adresa v ethernetovém rámci na lokálním segmentu je však MAC adresa výchozí brány (rozhraní směrovače), která paket převezme a přesměruje dál."
    },
    {
      "id": "itn_q30",
      "module": "itn_m3",
      "question": "Which two commands can be executed in the Windows Command Prompt to inspect the local computer's IP routing table?",
      "options": [
        "'route print' and 'netstat -r'",
        "'ipconfig /all' and 'ping 127.0.0.1'",
        "'tracert' and 'nslookup'",
        "'arp -a' and 'show ip route'"
      ],
      "correct": 0,
      "explanation": "Ve Windows Command Promptu lze lokální směrovací tabulku zobrazit příkazy 'route print' nebo 'netstat -r'. Příkaz 'arp -a' zobrazuje ARP mezipaměť a 'ipconfig /all' nastavení síťových karet."
    },
    {
      "id": "itn_q31",
      "module": "itn_m4",
      "question": "What is the most compressed representation of the IPv6 address 2001:0DB8:0000:0000:0000:0000:1428:57AB?",
      "options": [
        "2001:db8::1428:57ab",
        "2001:db8:0:0:0:0:1428:57ab",
        "2001:db8::0::1428:57ab",
        "2001:0db8::1428:57ab"
      ],
      "correct": 0,
      "explanation": "Pravidla komprese IPv6: 1) Vynechání úvodních nul ve skupině (0DB8 -> db8), 2) Nahrazení souvislého bloku nul dvojtečkou '::' (může být použita pouze jednou v adrese). Výsledná podoba je 2001:db8::1428:57ab."
    },
    {
      "id": "itn_q32",
      "module": "itn_m4",
      "question": "Which prefix is reserved for IPv6 Link-Local Unicast addresses that are automatically configured on all IPv6-enabled interfaces?",
      "options": [
        "FE80::/10",
        "2000::/3",
        "FC00::/7",
        "FF00::/8"
      ],
      "correct": 0,
      "explanation": "Adresy FE80::/10 (obvykle fe80::/64) jsou Link-Local unicast adresy, které se automaticky vytvářejí na každém IPv6 rozhraní pro komunikaci na jedné lokální lince (směrovače je nepřeposílají). 2000::/3 jsou GUA, FC00::/7 Unique Local a FF00::/8 Multicast."
    },
    {
      "id": "itn_q33",
      "module": "itn_m4",
      "question": "What two modifications does the EUI-64 process make when generating a 64-bit IPv6 interface ID from a 48-bit Ethernet MAC address?",
      "options": [
        "It inserts the 16-bit hexadecimal value FFFE in the middle of the MAC address and inverts the 7th bit (Universal/Local bit).",
        "It appends FFFF to the end of the MAC address and sets the high-order bit to 1.",
        "It prepends FE80 to the MAC address and computes an MD5 checksum of the payload.",
        "It replaces the OUI portion with random numbers and compresses all zero bytes."
      ],
      "correct": 0,
      "explanation": "Proces EUI-64 vezme 48bitovou MAC adresu (např. 00:11:22:33:44:55), doprostřed vloží 'FFFE' (0011:22FF:FE33:4455) a invertuje 7. bit prvního bajtu (Universal/Local bit; hodnota 00 se změní na 02)."
    },
    {
      "id": "itn_q34",
      "module": "itn_m4",
      "question": "Which global configuration command is required on a Cisco router to enable IPv6 packet routing and allow the router to send ICMPv6 Router Advertisement (RA) messages?",
      "options": [
        "ipv6 unicast-routing",
        "ip routing ipv6",
        "ipv6 enable",
        "service ipv6-forwarding"
      ],
      "correct": 0,
      "explanation": "Příkaz 'ipv6 unicast-routing' v globální konfiguraci aktivuje na směrovači směrování IPv6 paketů a umožní rozesílání zpráv ICMPv6 Router Advertisement (RA), které klienti používají pro autokonfiguraci SLAAC."
    },
    {
      "id": "itn_q35",
      "module": "itn_m4",
      "question": "Which statement accurately describes a key operational difference between TCP and UDP at the Transport layer?",
      "options": [
        "TCP provides reliable, connection-oriented data delivery with retransmission of lost segments, whereas UDP provides low-overhead, connectionless best-effort delivery.",
        "UDP performs flow control and dynamic window sizing, whereas TCP sends packets without requiring acknowledgments.",
        "TCP is primarily designed for real-time video streaming, whereas UDP is mandatory for secure web and file transfer protocols.",
        "Both TCP and UDP utilize a 3-way handshake, but UDP uses smaller 8-byte sequence numbers."
      ],
      "correct": 0,
      "explanation": "TCP je spolehlivý spojovaný protokol (connection-oriented), který garantuje doručení, řadí segmenty a řídí tok. UDP je nespojovaný (connectionless) protokol s minimální režií (hlavička 8 B vs 20 B), ideální pro DNS, DHCP a real-time aplikace (VoIP/video)."
    },
    {
      "id": "itn_q36",
      "module": "itn_m4",
      "question": "What is the correct sequence of TCP control flags exchanged between a client and a server during the 3-way handshake to establish a connection?",
      "options": [
        "SYN -> SYN-ACK -> ACK",
        "ACK -> SYN -> ACK-SYN",
        "SYN -> ACK -> FIN",
        "HELLO -> ACK -> ESTABLISHED"
      ],
      "correct": 0,
      "explanation": "Navázání TCP relace probíhá ve třech krocích (3-way handshake): 1. Klient odešle SYN (synchronizace pořadových čísel), 2. Server odpoví SYN-ACK (potvrzení a vlastní synchronizace), 3. Klient potvrdí přijetí pomocí ACK."
    },
    {
      "id": "itn_q37",
      "module": "itn_m4",
      "question": "What is the purpose of the Window field in the TCP segment header during data transmission?",
      "options": [
        "It regulates flow control by specifying the number of bytes that the destination device can receive before requiring an acknowledgment.",
        "It specifies the maximum session idle time before the connection is automatically terminated.",
        "It contains the cryptographic encryption key used to protect payload confidentiality.",
        "It counts the number of router hops traversed to prevent routing loops."
      ],
      "correct": 0,
      "explanation": "Pole Window (Window Size) v TCP hlavičce zajišťuje řízení toku (flow control). Udává velikost volného bufferu příjemce v bajtech, tj. kolik dat může odesílatel poslat, než musí počkat na potvrzení (ACK)."
    },
    {
      "id": "itn_q38",
      "module": "itn_m4",
      "question": "When TCP segments arrive at a destination host out of order due to differing network paths, how does TCP ensure the application receives the data in the correct order?",
      "options": [
        "TCP buffers the segments and uses the Sequence Numbers in the header to reassemble them into the original order before delivering them to the application layer.",
        "TCP discards all out-of-order segments and immediately forces a complete retransmission of the entire stream.",
        "TCP delivers segments to the application immediately as they arrive and delegates reordering to the user software.",
        "TCP converts out-of-order segments into UDP datagrams to bypass sequence verification."
      ],
      "correct": 0,
      "explanation": "TCP ukládá doručené segmenty do přijímacího bufferu a podle hodnot v poli Sequence Number (pořadové číslo) je poskládá do správného pořadí. Teprve po zkompletování souvislého proudu dat je předá aplikační vrstvě."
    },
    {
      "id": "itn_q39",
      "module": "itn_m4",
      "question": "A transport layer segment arrives at a server with destination port number 53. Which network service is being requested?",
      "options": [
        "Domain Name System (DNS)",
        "Simple Mail Transfer Protocol (SMTP)",
        "Hypertext Transfer Protocol (HTTP)",
        "Dynamic Host Configuration Protocol (DHCP)"
      ],
      "correct": 0,
      "explanation": "Port 53 (jak na UDP pro rychlé dotazy, tak na TCP pro zónové přenosy a velké odpovědi) je vyhrazen pro DNS (Domain Name System). SMTP používá port 25, HTTP port 80 a DHCP porty 67/68."
    },
    {
      "id": "itn_q40",
      "module": "itn_m4",
      "question": "What is the correct sequence of messages exchanged between an IPv4 client and a DHCP server during the dynamic address allocation process?",
      "options": [
        "DHCPDISCOVER -> DHCPOFFER -> DHCPREQUEST -> DHCPACK",
        "DHCPOFFER -> DHCPDISCOVER -> DHCPACK -> DHCPREQUEST",
        "DHCPREQUEST -> DHCPACK -> DHCPDISCOVER -> DHCPOFFER",
        "DHCPQUERY -> DHCPREPLY -> DHCPCONFIRM -> DHCPACK"
      ],
      "correct": 0,
      "explanation": "Proces přidělení IP adresy přes DHCPv4 se označuje mnemotechnickou pomůckou DORA: 1. DHCPDISCOVER (klient hledá server), 2. DHCPOFFER (server nabízí IP), 3. DHCPREQUEST (klient žádá o nabízenou IP), 4. DHCPACK (server potvrzuje přidělení)."
    }
  ]
}
};
