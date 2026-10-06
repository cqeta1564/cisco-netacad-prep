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
  }
};
