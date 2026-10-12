/**
 * Cisco Networking Academy - Authentic Question Bank
 * Obsahuje reálné testové otázky z certifikačních zkoušek:
 * 1. HTML Essentials (OpenEDG / Cisco NetAcad)
 * 2. CSS Essentials (OpenEDG / Cisco NetAcad)
 * 3. JavaScript Essentials 1 - JSE 1 (OpenEDG JS Institute / Cisco NetAcad)
 */

const CERTIFICATES_DATA = {
  html: {
    id: "html",
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
};
