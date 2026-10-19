// IT Certifications Prep - 7 vybraných kurzů Cisco z otevřených záložek Brave
// Autentické certifikační otázky z Cisco NetAcad (HTML: 40, CSS: 50, JS1: 30, JS2: 40)
// Všechny otázky obsahují přesné zadání, pořadí možností, ověřenou správnou odpověď a detailní vysvětlení screenshotu.

const CERTIFICATE_CATEGORIES = {
  "web": {
    "id": "web",
    "name": "Webové aplikace",
    "shortName": "Web",
    "icon": "fas fa-globe",
    "color": "#38bdf8",
    "description": "HTML5, CSS3 a moderní JavaScript (JSE 1 & 2)",
    "certs": [
      "html",
      "css",
      "js",
      "js2"
    ]
  },
  "automation": {
    "id": "automation",
    "name": "DevNet & Automatizace",
    "shortName": "DevNet",
    "icon": "fas fa-code-branch",
    "color": "#00bceb",
    "description": "Cisco DevNet Associate (DEVASC 200-901) - REST API, Docker, CI/CD, Ansible",
    "certs": [
      "devnet"
    ]
  },
  "systems": {
    "id": "systems",
    "name": "Počítačové systémy a sítě",
    "shortName": "Sítě & Linux",
    "icon": "fas fa-network-wired",
    "color": "#10b981",
    "description": "Cisco CCNA: Introduction to Networks & NDG Linux Essentials",
    "certs": [
      "ccna_itn",
      "linux"
    ]
  }
};

const CERTIFICATES_DATA = {
  "html": {
    "id": "html",
    "category": "web",
    "categoryName": "Webové aplikace",
    "title": "Cisco Networking Academy: HTML Essentials",
    "subtitle": "Příprava na certifikaci WDE™ (Certified Entry-Level Web Developer)",
    "badge": "HTML Essentials",
    "icon": "fab fa-html5",
    "color": "#E44D26",
    "passScore": 70,
    "timeLimit": 45,
    "modules": [
      {
        "id": "html_m1",
        "name": "Modul 1: Úvod do HTML a struktura dokumentu"
      },
      {
        "id": "html_m2",
        "name": "Modul 2: Formátování textu a struktura obsahu"
      },
      {
        "id": "html_m3",
        "name": "Modul 3: Odkazy, obrázky a multimédia"
      },
      {
        "id": "html_m4",
        "name": "Modul 4: Tabulky a formuláře"
      },
      {
        "id": "html_m5",
        "name": "Modul 5: Sémantické elementy a osvědčené postupy"
      }
    ],
    "examQuestionCount": 40,
    "questions": [
      {
        "id": "html_q01",
        "module": "html_m1",
        "question": "What is the first logical step you should take to start writing an HTML document in your development environment? Select the best answer.",
        "code": null,
        "options": [
          "Write the <html> tag and define the html version used in your document.",
          "Set up a server and load a .css file to it.",
          "Declare the document's character encoding.",
          "Create a file with the .html extension."
        ],
        "correct": 3,
        "explanation": "Na snímku je otázka zjišťující první logický krok při vytváření HTML dokumentu ve vývojovém prostředí.\n\nOficiální vysvětlení: \"To begin writing an HTML document, the first logical step is to create a file with the .html extension, as this specifies the file type and allows browsers to interpret it as an HTML document. Other steps, like adding tags or setting character encoding, come after the file is created.\"\n\nPodrobný rozbor:\n- Správná volba: \"Create a file with the .html extension.\" Aby editor i operační systém věděly, jaký soubor se vytváří, je nejprve nutné založit soubor s příponou .html (např. index.html). Tím se aktivuje správné zvýrazňování syntaxe v editoru a soubor lze otevřít v prohlížeči.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"Write the <html> tag and define the html version used in your document.\": Psaní tagů následuje až po vytvoření samotného souboru na disku.\n  - \"Set up a server and load a .css file to it.\": Lokální HTML dokument nevyžaduje žádný server a CSS soubor není pro zahájení psaní HTML nutný.\n  - \"Declare the document's character encoding.\": Deklarace kódování (<meta charset=\"utf-8\">) se provádí uvnitř souboru v elementu <head>, tedy až po založení souboru."
      },
      {
        "id": "html_q02",
        "module": "html_m1",
        "question": "Which section of an HTML document typically contains metadata like keywords and descriptions?",
        "code": null,
        "options": [
          "<body>",
          "<footer>",
          "<head>",
          "<header>"
        ],
        "correct": 2,
        "explanation": "Na snímku je otázka na sekci HTML dokumentu určenou pro metadata (jako klíčová slova, popis stránky atd.).\n\nOficiální vysvětlení: \"The <head> section of an HTML document contains metadata such as keywords, descriptions, the document title, and links to stylesheets or scripts. This information is not displayed on the webpage but helps with functionality and SEO.\"\n\nPodrobný rozbor:\n- Správná volba: \"<head>\". Sekce <head> obsahuje strojově čitelná metadata, která se nezobrazují přímo v okně prohlížeče (s výjimkou titulku v záložce), ale slouží prohlížečům, vyhledávačům (SEO) a sociálním sítím.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<body>\": Reprezentuje viditelný obsah stránky určený pro koncového uživatele.\n  - \"<footer>\": Představuje patičku viditelného obsahu (např. copyright, kontakty, odkazy na podmínky).\n  - \"<header>\": Představuje hlavičku viditelné části dokumentu nebo sekce (obvykle obsahuje logo, navigaci, nadpis)."
      },
      {
        "id": "html_q03",
        "module": "html_m1",
        "question": "Which HTML element is used to define the document's character encoding?",
        "code": null,
        "options": [
          "<doctype>",
          "<html>",
          "<charset>",
          "<meta>"
        ],
        "correct": 3,
        "explanation": "Na snímku je otázka tázající se na HTML element používaný k definici znakové sady dokumentu.\n\nOficiální vysvětlení: \"The <meta> element is used to define the document's character encoding, typically through the attribute charset (e.g., <meta charset=\"UTF-8\">). This ensures proper rendering of text, including special characters, across different languages.\"\n\nPodrobný rozbor:\n- Správná volba: \"<meta>\". V HTML5 se kódování znaků definuje pomocí nepárového elementu <meta> s atributem charset, typicky <meta charset=\"UTF-8\"> umístěného na začátku sekce <head>.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<doctype>\": Není element pro kódování, nýbrž deklarace typu dokumentu (např. <!DOCTYPE html>), která přepíná prohlížeč do standardního režimu.\n  - \"<html>\": Je kořenový element celého dokumentu, na kterém se definuje např. jazyk (lang=\"cs\"), nikoli znaková sada.\n  - \"<charset>\": V HTML takový element vůbec neexistuje; charset je atribut, nikoli značka."
      },
      {
        "id": "html_q04",
        "module": "html_m1",
        "question": "Identify the purpose of the following HTML snippet:",
        "code": "<!-- section-id=\"101-eng\" -->",
        "options": [
          "It specifies the language used in the document.",
          "It provides a note within the code for developers.",
          "It defines a breakpoint for a new document section.",
          "It marks the beginning of a new section in the document."
        ],
        "correct": 1,
        "explanation": "Na snímku je zobrazen kódový rámeček s ukázkou <!-- section-id=\"101-eng\" --> a otázka zjišťující účel tohoto úryvku.\n\nOficiální vysvětlení: \"The snippet <!-- section-id=\"101-eng\" --> is an HTML comment. Comments are ignored by browsers and serve only as notes or explanations for developers to make the code easier to understand or maintain.\"\n\nPodrobný rozbor:\n- Správná volba: \"It provides a note within the code for developers.\" Zápis uvozený <!-- a zakončený --> je v HTML komentář. Prohlížeče komentáře při vykreslování zcela ignorují a slouží výhradně vývojářům pro poznámky, strukturování kódu nebo dočasné vypnutí částí značkování.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"It specifies the language used in the document.\": Jazyk dokumentu se specifikuje atributem lang (např. <html lang=\"en\">).\n  - \"It defines a breakpoint for a new document section.\": V HTML nic jako breakpoint pro sekci v komentáři neexistuje.\n  - \"It marks the beginning of a new section in the document.\": Sekce se v HTML vymezují sémantickými elementy, jako je <section>, nikoliv komentářem."
      },
      {
        "id": "html_q05",
        "module": "html_m1",
        "question": "When discussing HTML semantics, which term is used to describe the combination of an opening tag, its content, and its closing tag?",
        "code": null,
        "options": [
          "Attribute",
          "Element",
          "Markup",
          "Value"
        ],
        "correct": 1,
        "explanation": "Na snímku je teoretická otázka na HTML terminologii – jak se nazývá kombinace otevíracího tagu, jeho obsahu a uzavíracího tagu.\n\nOficiální vysvětlení: \"In HTML semantics, an element refers to the combination of an opening tag, its content, and a closing tag (e.g., <p>Content</p>). It defines the structure and meaning of the content within the document.\"\n\nPodrobný rozbor:\n- Správná volba: \"Element\". V terminologii HTML prvek (element) představuje celek skládající se z počáteční značky (<p>), textového či vnořeného obsahu (Content) a koncové značky (</p>).\n- Proč jsou ostatní možnosti nesprávné:\n  - \"Attribute\": Dodatečná vlastnost zapsaná uvnitř otevíracího tagu ve formátu název=\"hodnota\" (např. class, id, href).\n  - \"Markup\": Obecný termín pro značkování celého textu pomocí tagů (HTML = HyperText Markup Language).\n  - \"Value\": Hodnota přiřazená konkrétnímu atributu (např. \"main-heading\" v id=\"main-heading\")."
      },
      {
        "id": "html_q06",
        "module": "html_m2",
        "question": "Which of the following is considered a block-level element in HTML5?",
        "code": null,
        "options": [
          "<div>",
          "<img>",
          "<span>",
          "<br>"
        ],
        "correct": 0,
        "explanation": "Na snímku je otázka zjišťující, který z uvedených elementů je v HTML5 blokový (block-level element).\n\nOficiální vysvětlení: \"A block-level element, like <div>, takes up the full width of its parent container and starts on a new line. Other options, such as <img> and <span>, are inline elements, while <br> is used solely for line breaks and does not behave as a block-level element.\"\n\nPodrobný rozbor:\n- Správná volba: \"<div>\". Element <div> je výchozím generickým blokovým prvkem. Vždy začíná na novém řádku a roztahuje se na celou dostupnou šířku svého rodičovského kontejneru.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<img>\": Je inline (resp. inline-block) prvek, umisťuje se do textového toku na stejný řádek.\n  - \"<span>\": Je generický řádkový (inline) element sloužící k označení části textu uvnitř bloku.\n  - \"<br>\": Vkládá zalomení řádku uvnitř inline textu, ale sám o sobě se nechová jako blokový element s vlastními blokovými rozměry."
      },
      {
        "id": "html_q07",
        "module": "html_m2",
        "question": "Which HTML snippet correctly emphasizes text for semantic importance and visual distinction?",
        "code": null,
        "options": [
          "<p>This is <b>important</b> text.</p>",
          "<p>This is <em>important</em> text.</p>",
          "<p>This is <strong>important</strong> text.</p>",
          "<p>This is <mark>important</mark> text.</p>"
        ],
        "correct": 2,
        "explanation": "Na snímku je otázka hledající HTML zápis, který správně zvýrazňuje text jak pro sémantickou důležitost (semantic importance), tak pro vizuální odlišení.\n\nOficiální vysvětlení: \"The <strong> tag semantically emphasizes text by marking it as important. While <b> only applies visual bold styling, <em> is for emphasis, and <mark> highlights text without denoting importance. <strong> conveys both importance and typically applies bold styling.\"\n\nPodrobný rozbor:\n- Správná volba: \"<p>This is <strong>important</strong> text.</p>\". Značka <strong> nese sémantický význam vysoké důležitosti, závažnosti či naléhavosti a prohlížeče ji standardně zobrazují tučným písmem (visual distinction).\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<b>\": Slouží pouze pro vizuální tučné zvýraznění bez jakéhokoliv sémantického významu nebo důležitosti.\n  - \"<em>\": Vyjadřuje intonační důraz (stress emphasis), prohlížeče jej zobrazují kurzívou, nikoli významovou důležitost.\n  - \"<mark>\": Slouží k označení/vysvícení relevantního textu (např. výsledku vyhledávání), nikoliv k vyjádření sémantické důležitosti."
      },
      {
        "id": "html_q08",
        "module": "html_m2",
        "question": "How do you properly mark up a block quotation that includes a citation URL?",
        "code": null,
        "options": [
          "<blockquote>Quote here<footer>Source: <cite>http://example.com</cite></footer></blockquote>",
          "<q>Quote here</q><cite>http://example.com</cite>",
          "<blockquote cite=\"http://example.com\">Quote here</blockquote><cite>http://example.com</cite>",
          "<blockquote>Quote here<cite>Source: http://example.com</cite></blockquote>"
        ],
        "correct": 0,
        "explanation": "Na snímku je otázka, jak správně sémanticky označit blokovou citaci obsahující citační odkaz/URL.\n\nOficiální vysvětlení: \"The <blockquote> element is used for block-level quotations, and the <footer> element is appropriate for providing the source or citation of the quote. The <cite> tag semantically identifies the source as a citation, ensuring proper markup and accessibility.\"\n\nPodrobný rozbor:\n- Správná volba: \"<blockquote>Quote here<footer>Source: <cite>http://example.com</cite></footer></blockquote>\". Podle specifikace HTML5 se bloková citace zapisuje pomocí <blockquote> a pokud citace obsahuje uvedení zdroje, je doporučenou sémantickou praxí umístit zdroj do vnořeného <footer> společně s elementem <cite>, který označuje název/zdroj citovaného díla.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<q>Quote here</q>...\": Tag <q> je určen pouze pro krátké řádkové (inline) citace, nikoli pro blokové citace (block quotations).\n  - Volby umisťující <cite> vně <blockquote> nebo přímo do <blockquote> bez <footer> nedodržují doporučenou HTML5 strukturu pro přístupnost a sémantiku."
      },
      {
        "id": "html_q09",
        "module": "html_m2",
        "question": "Which HTML code snippet demonstrates the correct use of line breaks for addresses and paragraph tags for separating ideas?",
        "code": null,
        "options": [
          "<address>123 Anywhere St., Springfield</address><p>Welcome to our website.</p>",
          "<p>123 Anywhere St.</p><p>Springfield</p><p>Welcome to our website.</p>",
          "<p>123 Anywhere St. Springfield</p><br><p>Welcome to our website.</p>",
          "<p>123 Anywhere St.<br>Springfield</p><p>Welcome to our website.</p>"
        ],
        "correct": 3,
        "explanation": "Na snímku je otázka demonstrující správné použití zalomení řádků (<br>) pro části adresy a odstavců (<p>) pro oddělení různých myšlenek.\n\nOficiální vysvětlení: \"Using <p> tags for separating ideas and <br> for line breaks within the same address block is correct. This ensures semantic clarity, as <br> introduces a break within a single block, while <p> separates distinct ideas or content sections.\"\n\nPodrobný rozbor:\n- Správná volba: \"<p>123 Anywhere St.<br>Springfield</p><p>Welcome to our website.</p>\". Element <br> je určen přesně pro zalomení řádků tam, kde je zalomení přirozenou součástí textu (např. poštovní adresa nebo verše básně uvnitř jednoho odstavce). Oddělená myšlenka (přivítání na webu) pak tvoří samostatný odstavec <p>.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<address>123 Anywhere St., Springfield</address>...\": Neobsahuje žádné zalomení řádku (<br>), takže nesplňuje zadání na zalomení řádků pro adresu.\n  - \"<p>123 Anywhere St.</p><p>Springfield</p>...\": Rozděluje ulici a město do samostatných odstavců, což sémanticky nedává smysl, protože jde o jednu adresu.\n  - \"<p>123 Anywhere St. Springfield</p><br><p>...\": Značka <br> je chybně umístěna mezi blokovými odstavci místo uvnitř adresy."
      },
      {
        "id": "html_q10",
        "module": "html_m2",
        "question": "Which HTML code correctly creates a nested list with ordered and unordered lists?",
        "code": null,
        "options": [
          "<ol><li>Item One<ul><li>Subitem A</li></ul></li><li>Item Two</li></ol>",
          "<ol><li>Item One<li>Subitem A</li></li><li>Item Two</li></ol>",
          "<ul><li>Item One</li><ul><li>Subitem A</li></ul><li>Item Two</li></ul>",
          "<ul><li>Item One<ol><li>Subitem 1</li></ol></li><li>Item Two</li></ul>"
        ],
        "correct": 0,
        "explanation": "Na snímku je otázka testující správnou syntaxi vnoření nečíslovaného seznamu do číslovaného seznamu (nested list).\n\nOficiální vysvětlení: \"This code correctly nests an unordered list (<ul>) within an ordered list (<ol>), with proper structure and closure of all tags. Nested lists must be contained within a <li> element of the parent list.\"\n\nPodrobný rozbor:\n- Správná volba: \"<ol><li>Item One<ul><li>Subitem A</li></ul></li><li>Item Two</li></ol>\". Podle specifikace HTML musí být vnořený seznam (<ul>) vždy umístěn uvnitř položky <li> nadřazeného seznamu (<ol>), nikoliv přímo mezi položkami <li>. Zde je <ul> správně uvnitř prvního <li> před jeho uzavírací značkou </li>.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<ol><li>Item One<li>Subitem A</li></li>...\": Chybí značka <ul>, jsou zde jen vnořené <li> bez seznamového obalu.\n  - \"<ul><li>Item One</li><ul><li>Subitem A</li></ul>...\": Seznam <ul> je neplatně vložen přímo do <ul> jako sourozenec <li>, nikoli uvnitř <li>.\n  - Poslední volba má jako vnější seznam <ul> a vnořený <ol>, zatímco zadání a oficiální odpověď demonstrují <ul> vnořený v <ol>."
      },
      {
        "id": "html_q11",
        "module": "html_m4",
        "question": "Given the need to create a table with headers on both the top and the left, which snippet correctly uses <th> elements?",
        "code": null,
        "options": [
          "<<th>table><tr><td>Header 1</td></tr><tr><td>Row 1</td><td>Data 1</td></tr></th></table>",
          "<table><tr><th></th><th>Header 1</th></tr><tr><th>Row 1</th><td>Data 1</td></tr></table>",
          "<table><th>Header 1</th><tr><th>Row 1</th><td>Data 1</td></tr></table>",
          "<table><tr><th>Header 1</th><th>Row 1</th></tr><tr><td>Data 1</td></tr></table>"
        ],
        "correct": 1,
        "explanation": "Na snímku je otázka, jak správně vytvořit tabulku, která má záhlaví jak nahoře (sloupce), tak vlevo (řádky), za použití elementů <th>.\n\nOficiální vysvětlení: \"This snippet correctly places an empty <th> in the top-left corner, ensuring that both the top and left headers are <th> elements, making the table more accessible and properly structured.\"\n\nPodrobný rozbor:\n- Správná volba: \"<table><tr><th></th><th>Header 1</th></tr><tr><th>Row 1</th><td>Data 1</td></tr></table>\". U tabulky s dvousměrným záhlavím je v levém horním rohu průsečík, který se reprezentuje prázdnou buňkou <th></th> v prvním řádku. Následuje <th>Header 1</th> pro sloupec a v dalším řádku začíná řádkové záhlaví <th>Row 1</th> následované datovou buňkou <td>Data 1</td>.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<<th>table>...\": Zjevně nevalidní HTML syntaxe s překlepem na začátku.\n  - \"<table><th>Header 1</th><tr>...\": Buňka <th> nesmí být přímým potomkem <table> bez řádku <tr>.\n  - \"<table><tr><th>Header 1</th><th>Row 1</th></tr><tr><td>Data 1</td></tr></table>\": V prvním řádku jsou dvě záhlaví vedle sebe, ale ve druhém řádku je jen jedna buňka bez řádkového záhlaví."
      },
      {
        "id": "html_q12",
        "module": "html_m4",
        "question": "How do you merge two cells vertically in a table?",
        "code": null,
        "options": [
          "HTML tables do not support vertical cell merging.",
          "Merge cells using CSS by applying cell-merge: vertical;.",
          "Use rowspan=\"2\" in the first cell you want to extend.",
          "Use colspan=\"2\" in the first cell you want to extend."
        ],
        "correct": 2,
        "explanation": "Na snímku je otázka tázající se, jak svisle sloučit dvě buňky v HTML tabulce.\n\nOficiální vysvětlení: \"The rowspan attribute is used to merge cells vertically in an HTML table. Setting rowspan=\"2\" tells the browser that the cell spans two rows. Similarly, colspan is used for horizontal merging, not vertical. CSS does not have a direct property for merging table cells.\"\n\nPodrobný rozbor:\n- Správná volba: \"Use rowspan=\"2\" in the first cell you want to extend.\" Atribut rowspan na buňce <td> nebo <th> určuje, přes kolik řádků se má buňka svisle roztáhnout.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"HTML tables do not support vertical cell merging.\": HTML tabulky svislé slučování plně podporují pomocí atributu rowspan.\n  - \"Merge cells using CSS by applying cell-merge: vertical;.\": V CSS žádná vlastnost cell-merge neexistuje.\n  - \"Use colspan=\"2\" in the first cell you want to extend.\": Atribut colspan slouží pro vodorovné slučování buněk (přes sloupce), nikoli svislé."
      },
      {
        "id": "html_q13",
        "module": "html_m2",
        "question": "What is the characteristic of the text within the <pre> tag in this HTML snippet?",
        "code": "<pre>\nDear User,\n\nThank you for your email.\n\nBest,\nThe XYZ Team\n</pre>",
        "options": [
          "It preserves line breaks and puts it in bold.",
          "It preserves font size, weight, and family.",
          "It is highlighted and preserves spaces.",
          "It preserves both spaces and line breaks."
        ],
        "correct": 3,
        "explanation": "Na snímku je zobrazen kódový rámeček s ukázkou textu dopisu uvnitř značek <pre>...</pre> a otázka zkoumající vlastnosti zobrazení textu v tomto elementu.\n\nOficiální vysvětlení: \"The <pre> tag is used to display preformatted text, which means that it preserves the spaces, tabs, and line breaks exactly as written in the HTML. It does not apply any special styling like bold or highlighting unless explicitly specified via CSS.\"\n\nPodrobný rozbor:\n- Správná volba: \"It preserves both spaces and line breaks.\" Element <pre> (preformatted text) zachovává veškeré bílé znaky – vícenásobné mezery, tabulátory i odřádkování – přesně tak, jak jsou zapsány ve zdrojovém HTML kódu (standardně se vykresluje neproporcionálním písmem).\n- Proč jsou ostatní možnosti nesprávné:\n  - \"It preserves line breaks and puts it in bold.\": Element <pre> text nezvýrazňuje tučně.\n  - \"It preserves font size, weight, and family.\": Styl písma neurčuje zachováním z nadřazených stylů, nýbrž výchozím monospaced fontem.\n  - \"It is highlighted and preserves spaces.\": Text v <pre> není nijak barevně zvýrazněn ani podbarven."
      },
      {
        "id": "html_q14",
        "module": "html_m3",
        "question": "What is the purpose of the srcset attribute in this <img> tag?",
        "code": "<img src=\"image-1.jpg\" srcset=\"image-2.jpg 1000w, image-3.jpg 2000w\" alt=\"A beautiful landscape\">",
        "options": [
          "To set multiple sources for the same image to load faster.",
          "To specify different images to be displayed on hover.",
          "To provide a fallback image if the original fails to load.",
          "To define multiple image sources for different viewport widths."
        ],
        "correct": 3,
        "explanation": "Na snímku je kódový rámeček s obrázkem <img src=\"image-1.jpg\" srcset=\"image-2.jpg 1000w, image-3.jpg 2000w\" alt=\"A beautiful landscape\"> a otázka na účel atributu srcset.\n\nOficiální vysvětlení: \"The srcset attribute in an <img> tag allows you to specify multiple image sources and their associated sizes (e.g., 1000w for 1000 pixels wide). This helps the browser select the most appropriate image based on the viewport size and resolution, optimizing performance and visual quality.\"\n\nPodrobný rozbor:\n- Správná volba: \"To define multiple image sources for different viewport widths.\" Atribut srcset definuje seznam alternativních obrazových souborů spolu s deskriptory šířky (např. 1000w, 2000w). Prohlížeč si z nich sám vybere nejvhodnější soubor podle aktuální šířky viewportu a hustoty pixelů displeje zařízení (responzivní obrázky).\n- Proč jsou ostatní možnosti nesprávné:\n  - \"To set multiple sources for the same image to load faster.\": Soubory se nenačítají současně, prohlížeč vybere pouze jeden soubor.\n  - \"To specify different images to be displayed on hover.\": Změna obrázku při najetí myší se řeší pomocí CSS (:hover) nebo JavaScriptu, nikoli atributem srcset.\n  - \"To provide a fallback image if the original fails to load.\": Jako záložní řešení slouží atribut src nebo element <picture>, nikoliv atribut srcset pro šířky viewportu."
      },
      {
        "id": "html_q15",
        "module": "html_m3",
        "question": "How does this code snippet facilitate navigation to a specific part of a webpage?",
        "code": "<a href=\"#section2\">Go to Section 2</a>\n...\n<h2 id=\"section2\">Section 2</h2>",
        "options": [
          "By creating a popup that links to Section 2.",
          "By refreshing the page when \"Go to Section 2\" is clicked.",
          "By redirecting to a new page named \"Section 2\"",
          "By scrolling the page to where <h2 id=\"section2\"> is located."
        ],
        "correct": 3,
        "explanation": "Na snímku je ukázka kotevního odkazu <a href=\"#section2\">Go to Section 2</a> a cílového nadpisu <h2 id=\"section2\">Section 2</h2> s otázkou, jak tento kód usnadňuje navigaci na stránce.\n\nOficiální vysvětlení: \"The href=\"#section2\" in the <a> tag creates an anchor link that points to an element with the matching id=\"section2\". When clicked, it scrolls the page to that element, enabling navigation within the same webpage. It does not refresh the page, open a popup, or redirect to a new page.\"\n\nPodrobný rozbor:\n- Správná volba: \"By scrolling the page to where <h2 id=\"section2\"> is located.\" Znak mřížky (#) v atributu href označuje interní odkaz (kotvu / fragment identifier) směřující na element se shodným atributem id na téže stránce. Po kliknutí prohlížeč plynule odskroluje na pozici tohoto nadpisu.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"By creating a popup that links to Section 2.\": Kotva nevytváří vyskakovací okno.\n  - \"By refreshing the page when 'Go to Section 2' is clicked.\": Kliknutí na interní kotvu stránku neobnovuje (nereloaduje).\n  - \"By redirecting to a new page named 'Section 2'\": Nejde o přesměrování na jinou URL adresu nebo soubor, navigace probíhá v rámci aktuální stránky."
      },
      {
        "id": "html_q16",
        "module": "html_m3",
        "question": "Which attribute will make the video loop indefinitely?",
        "code": null,
        "options": [
          "controls=\"loop\"",
          "src=\"loop\"",
          "repeat=\"true\"",
          "loop"
        ],
        "correct": 3,
        "explanation": "Na snímku je otázka, který atribut zajistí nekonečné opakované přehrávání videa v elementu <video>.\n\nOficiální vysvětlení: \"The loop attribute in an HTML <video> tag causes the video to replay automatically after it ends. This is a boolean attribute, so simply including it (e.g., <video loop>) is sufficient; no additional values are required. Other options like src=\"loop\" or repeat=\"true\" are invalid.\"\n\nPodrobný rozbor:\n- Správná volba: \"loop\". V HTML5 je atribut loop pro prvky <video> a <audio> logickým atributem (boolean attribute). Jeho pouhá přítomnost v otevíracím tagu (<video loop ...>) způsobí, že po skončení přehrávání se video začne automaticky přehrávat znovu od začátku.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"controls=\"loop\"\": Atribut controls zapíná ovládací prvky přehrávače a nemá hodnotu loop.\n  - \"src=\"loop\"\": Atribut src obsahuje URL adresu video souboru, nikoli příznak smyčky.\n  - \"repeat=\"true\"\": Atribut repeat v HTML pro multimediální elementy neexistuje."
      },
      {
        "id": "html_q17",
        "module": "html_m4",
        "question": "Why is the <label> element used in this form field?",
        "code": "<label for=\"search\">Search:</label><input type=\"text\" id=\"search\">",
        "options": [
          "To add a \"Search\" button to the form.",
          "To style the input field as the search button.",
          "To improve form accessibility by providing a text label.",
          "To increase the clickable area for the input field."
        ],
        "correct": 2,
        "explanation": "Na snímku je formulářový úryvek <label for=\"search\">Search:</label><input type=\"text\" id=\"search\"> a otázka zkoumající hlavní důvod použití elementu <label>.\n\nOficiální vysvětlení: \"The <label> element links descriptive text to a form control, improving accessibility by helping screen readers associate the label with the input field. The for attribute connects the label to the input using the id of the input element. This makes the form more user-friendly for everyone, including those relying on assistive technologies.\"\n\nPodrobný rozbor:\n- Správná volba: \"To improve form accessibility by providing a text label.\" Element <label> propojuje textový popis s formulářovým prvkem (pomocí atributu for=\"search\" odpovídajícího id=\"search\"). Tento prvek je klíčový pro přístupnost (accessibility), protože asistenční technologie (čtečky obrazovky) přečtou uživateli popisek, jakmile pole získá fokus.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"To add a 'Search' button to the form.\": Element <label> nepřidává žádné tlačítko; pro tlačítka se používá <button> nebo <input type=\"submit\">.\n  - \"To style the input field as the search button.\": <label> neslouží k vizuálnímu stylování pole jako tlačítka.\n  - \"To increase the clickable area for the input field.\": Ačkoliv kliknutí na popisek u některých prvků (např. radio/checkbox) rozšiřuje klikatelnou oblast, primárním sémantickým účelem zde je přístupnost skrze textový popisek."
      },
      {
        "id": "html_q18",
        "module": "html_m4",
        "question": "Consider the following HTML snippet:\n\nWhat would you change in it to pre-select the \"Canada\" option in a dropdown list?",
        "code": "<select name=\"country\">\n  <option value=\"usa\">United States</option>\n  <option value=\"canada\">Canada</option>\n  <option value=\"mexico\">Mexico</option>\n</select>",
        "options": [
          "Set value=\"canada\" in the <select> tag of the \"Canada\" option.",
          "Use JavaScript to select the \"Canada\" option after the page loads.",
          "Add default to the <select> tag of the \"Canada\" option.",
          "Use the selected attribute on the \"Canada\" <option>."
        ],
        "correct": 3,
        "explanation": "Na snímku je kódový rámeček s rozbalovacím seznamem <select> obsahujícím tři položky <option> a otázka, jak předvybrat položku \"Canada\".\n\nOficiální vysvětlení: \"To pre-select the \"Canada\" option in the dropdown, you can modify the <option> for Canada like this:\n\n<option value=\"canada\" selected>Canada</option>\n\nThe selected attribute indicates that this option should be the default selection when the page loads.\"\n\nPodrobný rozbor:\n- Správná volba: \"Use the selected attribute on the \"Canada\" <option>.\" Pro přednastavení vybrané volby v HTML rozevíracím seznamu slouží logický atribut selected umístěný přímo na příslušném tagu <option> (např. <option value=\"canada\" selected>Canada</option>).\n- Proč jsou ostatní možnosti nesprávné:\n  - \"Set value=\"canada\" in the <select> tag of the 'Canada' option.\": Atribut value na elementu <select> v HTML neexistuje pro předvybrání.\n  - \"Use JavaScript to select the 'Canada' option after the page loads.\": JavaScript není potřeba, HTML toto přímo podporuje deklarativně atributem selected.\n  - \"Add default to the <select> tag of the 'Canada' option.\": V HTML atribut default pro <select> ani <option> neexistuje."
      },
      {
        "id": "html_q19",
        "module": "html_m4",
        "question": "Which input field is correctly marked as required?",
        "code": null,
        "options": [
          "<input type=\"text\" name=\"firstName\" required>.",
          "<required input type=\"text\">.",
          "<input type=\"required\" name=\"firstName\">.",
          "<input required=\"true\" type=\"text\" name=\"firstName\">."
        ],
        "correct": 0,
        "explanation": "Na snímku je otázka zjišťující správný zápis povinného formulářového pole v HTML5.\n\nOficiální vysvětlení: \"The required attribute is used to indicate that an input field must be filled out before submitting the form. The correct syntax is to include the required attribute directly in the <input> tag. The other options either use incorrect syntax or place the required attribute improperly.\"\n\nPodrobný rozbor:\n- Správná volba: \"<input type=\"text\" name=\"firstName\" required>.\". Atribut required je v HTML5 logický (boolean) atribut. Stačí uvést jeho název uvnitř otevíracího tagu <input>, což prohlížeči signalizuje povinnost pole vyplnit před odesláním formuláře.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<required input type=\"text\">.\": Element <required> v HTML neexistuje.\n  - \"<input type=\"required\" name=\"firstName\">.\": required není platný typ vstupního pole (atribut type určuje text, password, email atd.).\n  - \"<input required=\"true\" type=\"text\" name=\"firstName\">.\": U boolean atributů v HTML5 se nezapisuje =\"true\"; hodnota atributu required může být buď prázdná, nebo \"required\", zápis required=\"true\" je nesprávná syntaxe."
      },
      {
        "id": "html_q20",
        "module": "html_m3",
        "question": "How do you create a link that opens the user's email client to send an email to \"info@example.com\"?",
        "code": null,
        "options": [
          "<a href=\"mailto:info@example.com\">Email Us</a>",
          "<a href=\"sendto:info@example.com\">Email Us</a>",
          "<a email=\"info@example.com\">Email Us</a>",
          "<a href=\"email:info@example.com\">Email Us</a>"
        ],
        "correct": 0,
        "explanation": "Na snímku je otázka, jak vytvořit hypertextový odkaz otevírající výchozího e-mailového klienta s adresou info@example.com.\n\nOficiální vysvětlení: \"The mailto: scheme in the href attribute is used to create a link that opens the user's default email client with the specified email address. The correct syntax is <a The other options use incorrect schemes or attributes that won't trigger the email client.\"\n\nPodrobný rozbor:\n- Správná volba: \"<a href=\"mailto:info@example.com\">Email Us</a>\". Pro vytvoření e-mailového odkazu se v atributu href elementu <a> používá standardní URI schéma mailto: následované e-mailovou adresou příjemce.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"<a href=\"sendto:info@example.com\">Email Us</a>\": Schéma sendto: není standardní webové URI schéma pro e-mail.\n  - \"<a email=\"info@example.com\">Email Us</a>\": Atribut email na elementu <a> neexistuje a prohlížeč by odkaz nevyhodnotil jako klikatelný odkaz na poštu.\n  - \"<a href=\"email:info@example.com\">Email Us</a>\": Schéma email: není platné URI schéma."
      },
      {
        "id": "html_q21",
        "module": "html_m4",
        "question": "Which of the following scenarios is most appropriate for the use of <fieldset> in HTML forms?",
        "code": null,
        "options": [
          "Enhancing the visual design of a form's submit button with custom graphics and animations.",
          "Grouping related form elements, such as multiple choices within a survey that asks for a respondent's preferred leisure activities.",
          "Applying a consistent font style across multiple sections of an HTML form.",
          "Encrypting form data to secure sensitive information like passwords and credit card numbers."
        ],
        "correct": 1,
        "explanation": "Správná odpověď: Grouping related form elements, such as multiple choices within a survey that asks for a respondent's preferred leisure activities.\n\nNa snímku obrazovky je otázka: „Which of the following scenarios is most appropriate for the use of <fieldset> in HTML forms?“\n\nOficiální vysvětlení ze zkoušky:\n„The <fieldset> element is used to group related form elements, typically with a <legend> tag to provide a title for the group. This helps organize forms logically and improves accessibility. It is not used for styling, encryption, or customizing buttons.“\n\nPodrobné vysvětlení:\nElement <fieldset> slouží k logickému i sémantickému seskupování souvisejících prvků formuláře (například skupiny checkboxů nebo radio buttonů v dotazníku). Společně s párovým prvkem <legend>, který definuje nadpis skupiny, usnadňuje orientaci uživatelům i asistenčním technologiím (screen readerům).\n- Možnost 1 je správná: seskupení souvisejících prvků dotazníku je přesným účelem <fieldset>.\n- Ostatní možnosti jsou nesprávné: <fieldset> nijak nesouvisí se šifrováním dat (to řeší HTTPS), stylováním písma ani grafickým návrhem tlačítek."
      },
      {
        "id": "html_q22",
        "module": "html_m4",
        "question": "Which of the following correctly applies a red color to the text of a paragraph using inline styling?",
        "code": null,
        "options": [
          "<p style=\"text-color: red;\">This text is red.</p>",
          "<p color=\"red\">This text is red.</p>",
          "<p style=\"color: red;\">This text is red.</p>",
          "<p font=\"red\">This text is red.</p>"
        ],
        "correct": 2,
        "explanation": "Správná odpověď: <p style=\"color: red;\">This text is red.</p>\n\nNa snímku obrazovky je otázka: „Which of the following correctly applies a red color to the text of a paragraph using inline styling?“\n\nOficiální vysvětlení ze zkoušky:\n„To apply inline styling, the style attribute is used within the HTML tag. The correct property for changing text color is color, and the value red sets the text color to red. The other options use incorrect attributes or syntax“\n\nPodrobné vysvětlení:\nŘádkové (inline) stylování se v HTML zapisuje prostřednictvím atributu style přímo do otevíracího tagu elementu. Barva textu se v CSS definuje vlastností color, nikoli text-color. Správný zápis je tedy <p style=\"color: red;\">.\n- Možnost 2 je správná.\n- Možnost <p style=\"text-color: red;\"> je chybná, protože vlastnost text-color v CSS neexistuje.\n- Možnosti s atributy color=\"red\" a font=\"red\" přímo na tagu <p> jsou v moderním HTML5 neplatné a zastaralé."
      },
      {
        "id": "html_q23",
        "module": "html_m4",
        "question": "Which snippet correctly changes the background color of all <div> elements to blue using an internal stylesheet?",
        "code": null,
        "options": [
          "div {background: blue;}",
          "div {color: blue;}",
          "#div {background-color: blue;}",
          "div {background-color: blue;}"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: div {background-color: blue;}\n\nNa snímku obrazovky je otázka: „Which snippet correctly changes the background color of all <div> elements to blue using an internal stylesheet?“\n\nOficiální vysvětlení ze zkoušky:\n„To change the background color of all <div> elements using an internal stylesheet, you should use the background-color property. The correct syntax is div {background-color: blue;}. The other options are either incorrect (e.g., using color for text color or #div for an ID selector) or do not specifically target the background color properly.“\n\nPodrobné vysvětlení:\nV interním stylu (<style>) se pro výběr všech elementů daného typu používá elementový (typový) selektor, zde div. K nastavení barvy pozadí slouží CSS vlastnost background-color.\n- Možnost 3 (div {background-color: blue;}) je správná.\n- div {color: blue;} nastavuje barvu textu (popředí), nikoli pozadí.\n- #div {background-color: blue;} by cílilo pouze na element s id=\"div\".\n- background-color je přesná a specifická vlastnost vyžadovaná otázkou."
      },
      {
        "id": "html_q24",
        "module": "html_m4",
        "question": "How do you correctly set the font size to 16 pixels and the font family to Arial in a CSS rule?",
        "code": null,
        "options": [
          "font-size: 16px; font: Arial;",
          "font-size: 16; font-family: 'Arial';",
          "font-size: 16px; font-family: Arial;",
          "font-size: 16rem; font-family: 'Arial';"
        ],
        "correct": 2,
        "explanation": "Správná odpověď: font-size: 16px; font-family: Arial;\n\nNa snímku obrazovky je otázka: „How do you correctly set the font size to 16 pixels and the font family to Arial in a CSS rule?“\n\nOficiální vysvětlení ze zkoušky:\n„To correctly set the font size to 16 pixels and the font family to Arial, you use the font-size property with the value 16px and the font-family property with the value Arial. The other options either use incorrect units (like rem or font shorthand) or miss the required syntax for proper font styling.“\n\nPodrobné vysvětlení:\nPro velikost písma v pixelech se používá vlastnost font-size s povinnou jednotkou px (zápis bez jednotky 16 je v CSS neplatný, jednotka 16rem by odpovídala 16násobku základní velikosti, tj. cca 256 pixelům). Pro rodinu písma se používá vlastnost font-family. Zkrácená vlastnost font: Arial; je neplatná, protože zkrácený zápis font vyžaduje povinně uvést minimálně velikost i rodinu písma současně.\n- Možnost 2 (font-size: 16px; font-family: Arial;) je správná."
      },
      {
        "id": "html_q25",
        "module": "html_m2",
        "question": "Which statement is true regarding the use of <span> and <div>?",
        "code": null,
        "options": [
          "<span> and <div> are interchangeable and have no difference in styling.",
          "<div> is used to style text, while <span> is for larger sections of HTML.",
          "<span> is used for block-level content, while <div> is for inline content.",
          "<div> can contain block-level elements, whereas <span> is used for inline styling."
        ],
        "correct": 3,
        "explanation": "Správná odpověď: <div> can contain block-level elements, whereas <span> is used for inline styling.\n\nNa snímku obrazovky je otázka: „Which statement is true regarding the use of <span> and <div>?“\n\nOficiální vysvětlení ze zkoušky:\n„The <div> element is a block-level element, meaning it can contain other block-level elements and takes up the full width of its container. The <span> element, on the other hand, is an inline element, used for styling small portions of text or inline content without breaking the flow. The two are not interchangeable as they serve different purposes in terms of layout“\n\nPodrobné vysvětlení:\nElement <div> je blokový kontejner (block-level), který začíná na novém řádku, zabírá celou dostupnou šířku a může obsahovat jak blokové, tak řádkové elementy. Naopak <span> je řádkový element (inline), který se vkládá dovnitř toku textu k označení části řádku (např. pro stylování či skriptování) a nesmí obsahovat blokové prvky.\n- Možnost 3 je správná: <div> může obsahovat blokové prvky, zatímco <span> slouží pro inline stylování.\n- Ostatní možnosti jsou nepravdivé (nejsou vzájemně zaměnitelné a jejich role nejsou obrácené)."
      },
      {
        "id": "html_q26",
        "module": "html_m4",
        "question": "How do you select elements with a custom-made class highlight-this in a CSS stylesheet?",
        "code": null,
        "options": [
          "highlight-this { color: yellow; }",
          ".highlight-this { color: yellow; }",
          "#highlight-this { color: yellow; }",
          "> highlight-this { color: yellow; }"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: .highlight-this { color: yellow; }\n\nNa snímku obrazovky je otázka: „How do you select elements with a custom-made class highlight-this in a CSS stylesheet?“\n\nOficiální vysvětlení ze zkoušky:\n„In CSS, a class is selected using a period (.) followed by the class name. Therefore, .highlight-this correctly selects all elements with the class highlight-this and applies the color: yellow; style. The other options are incorrect as they either use an invalid syntax for class selection or reference an ID selector (#) instead of a class.“\n\nPodrobné vysvětlení:\nV CSS se selektor třídy (class) uvozuje tečkou (.), tedy .highlight-this.\n- Možnost 1 (.highlight-this { color: yellow; }) je správná.\n- #highlight-this vybírá element podle ID, nikoli podle třídy.\n- highlight-this bez prefixu by vybíral fiktivní HTML element <highlight-this>.\n- > highlight-this je neplatná syntaxe (znak > je kombinátor potomka vyžadující rodičovský selektor)."
      },
      {
        "id": "html_q27",
        "module": "html_m4",
        "question": "What is the main difference between using class and id attributes in HTML?",
        "code": null,
        "options": [
          "The class attribute can be applied to multiple elements, while the id attribute must be unique to a single element.",
          "The class attribute cannot be used with the <div> element, while the id attribute can.",
          "The class attribute is used exclusively for styling, while the id attribute is used for both styling and JavaScript.",
          "The id attribute is used to style elements when classes are not available."
        ],
        "correct": 0,
        "explanation": "Správná odpověď: The class attribute can be applied to multiple elements, while the id attribute must be unique to a single element.\n\nNa snímku obrazovky je otázka: „What is the main difference between using class and id attributes in HTML?“\n\nOficiální vysvětlení ze zkoušky:\n„The class attribute can be used on multiple elements across a page, allowing you to apply the same styles or JavaScript behavior to several elements. The id attribute, on the other hand, must be unique within a document, meaning it can only be used for a single element.“\n\nPodrobné vysvětlení:\nZákladním rozdílem mezi class a id je jejich kardinalita a unikátnost v rámci DOMu. Atribut id musí mít unikátní hodnotu v celém HTML dokumentu a jednoznačně identifikuje právě jeden konkrétní prvek. Atribut class naopak slouží k zařazení prvků do skupiny a stejnou třídu může sdílet libovolné množství elementů na stránce.\n- Možnost 0 je správná.\n- Ostatní možnosti uvádějí nepravdivá omezení (class lze běžně použít na <div>, oba atributy slouží pro CSS i JS a id není pouhou zálohou pro případ absence tříd)."
      },
      {
        "id": "html_q28",
        "module": "html_m4",
        "question": "Which syntax correctly applies two separate classes to a single HTML element?",
        "code": null,
        "options": [
          "<div class=\"class1\" class=\"class2\">Content</div>",
          "<div class=\"class1, class2\">Content</div>",
          "<div classes=\"class1 class2\">Content</div>",
          "<div class=\"class1 class2\">Content</div>"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: <div class=\"class1 class2\">Content</div>\n\nNa snímku obrazovky je otázka: „Which syntax correctly applies two separate classes to a single HTML element?“\n\nOficiální vysvětlení ze zkoušky:\n„To apply multiple classes to a single HTML element, you separate the class names with a space within the class attribute. The other options use incorrect syntax, such as using commas or multiple class attributes, which are not valid in HTML.“\n\nPodrobné vysvětlení:\nPodle specifikace HTML se více tříd přiřazuje elementu v rámci jediného atributu class, kde se jednotlivé názvy tříd oddělují mezerou: class=\"class1 class2\".\n- Možnost 3 je správná.\n- Použití čárek (class=\"class1, class2\") je chybné, protože prohlížeč by čárku považoval za součást názvu třídy.\n- Vícenásobný atribut class na stejném elementu (<div class=\"class1\" class=\"class2\">) je neplatný – duplicitní atributy v HTML nejsou povoleny.\n- Atribut classes neexistuje."
      },
      {
        "id": "html_q29",
        "module": "html_m2",
        "question": "What does the title attribute provide when used within an HTML element?",
        "code": null,
        "options": [
          "A structural division for the document.",
          "A tooltip when the mouse hovers over the element.",
          "An inline style declaration.",
          "A unique identifier for CSS and JavaScript."
        ],
        "correct": 1,
        "explanation": "Správná odpověď: A tooltip when the mouse hovers over the element.\n\nNa snímku obrazovky je otázka: „What does the title attribute provide when used within an HTML element?“\n\nOficiální vysvětlení ze zkoušky:\n„The title attribute provides additional information about an element, which is displayed as a tooltip when the user hovers their mouse over the element. It does not serve as a unique identifier, structural division, or inline style declaration.“\n\nPodrobné vysvětlení:\nGlobální atribut title nese poradní doplňkovou informaci k elementu. Většina desktopových prohlížečů tuto informaci zobrazuje jako malou plovoucí nápovědu (tooltip), když uživatel nad prvek najede kurzorem myši.\n- Možnost 1 je správná.\n- Strukturální dělení dokumentu představují elementy jako <div> nebo <section>, unikátní identifikátor poskytuje atribut id a inline styl deklaruje atribut style."
      },
      {
        "id": "html_q30",
        "module": "html_m4",
        "question": "How do you correctly add a simple JavaScript alert that says \"Clicked!\" when a button is clicked?",
        "code": null,
        "options": [
          "<button><onclick=\"alert('Clicked!')\">Click me</button>",
          "<button action=\"alert('Clicked!')\">Click me</button>",
          "<button on-click=\"alert('Clicked!')\">Click me</button>",
          "<button onclick=\"alert('Clicked!')\">Click me</button>"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: <button onclick=\"alert('Clicked!')\">Click me</button>\n\nNa snímku obrazovky je otázka: „How do you correctly add a simple JavaScript alert that says \"Clicked!\" when a button is clicked?“\n\nOficiální vysvětlení ze zkoušky:\n„The correct way to trigger a JavaScript alert when a button is clicked is by using the onclick attribute in the button tag and setting it to the JavaScript code alert('Clicked!'). The other options use incorrect attributes or syntax.“\n\nPodrobné vysvětlení:\nUdálost kliknutí myší se v HTML obsluhuje pomocí atributu onclick, který se umísťuje do otevíracího tagu elementu: <button onclick=\"alert('Clicked!')\">.\n- Možnost 3 je správná.\n- Varianta on-click s pomlčkou neexistuje v HTML standardu.\n- Atribut action patří k formuláři (<form>), nikoli k obsluze kliknutí na tlačítko.\n- Konstrukce <button><onclick=\"...\"> je hrubá syntaktická chyba."
      },
      {
        "id": "html_q31",
        "module": "html_m5",
        "question": "Which level of conformance does the Web Content Accessibility Guidelines (WCAG) require to meet the needs of most people with disabilities?",
        "code": null,
        "options": [
          "Level AA",
          "Level A+",
          "Level A",
          "Level AAA"
        ],
        "correct": 0,
        "explanation": "Správná odpověď: Level AA\n\nNa snímku obrazovky je otázka: „Which level of conformance does the Web Content Accessibility Guidelines (WCAG) require to meet the needs of most people with disabilities?“\n\nOficiální vysvětlení ze zkoušky:\n„Level AA of the Web Content Accessibility Guidelines (WCAG) is considered the standard level of conformance to meet the needs of most people with disabilities. It addresses a wide range of accessibility issues, including those that affect users with visual, auditory, motor, and cognitive disabilities. Level A addresses the most basic web accessibility requirements, while Level AAA is the highest level, focusing on more advanced accessibility needs.“\n\nPodrobné vysvětlení:\nWCAG definuje tři úrovně shody: A (minimální základ), AA (střední, standardní úroveň vyhovující většině uživatelů se znevýhodněním a vyžadovaná zákony a normami) a AAA (nejvyšší úroveň pro pokročilé potřeby, často nesplnitelná pro celý web).\n- Možnost 0 (Level AA) je správná.\n- Úroveň A+ v normě WCAG vůbec neexistuje.\n- Úroveň A pokrývá jen nejzákladnější bariéry a úroveň AAA je specializovaná a výběrová."
      },
      {
        "id": "html_q32",
        "module": "html_m5",
        "question": "Which HTML5 element is used to represent a generic container without any additional semantic meaning?",
        "code": null,
        "options": [
          "<aside>",
          "<div>",
          "<main>",
          "<article>"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: <div>\n\nNa snímku obrazovky je otázka: „Which HTML5 element is used to represent a generic container without any additional semantic meaning?“\n\nOficiální vysvětlení ze zkoušky:\n„The <div> element is a generic container used to group content without any inherent semantic meaning. It is often used for styling or grouping elements together in a layout. The other elements (<article>, <aside>, and <main>) have specific semantic meanings for representing content related to articles, sidebars, or the main content of a page, respectively.“\n\nPodrobné vysvětlení:\nElement <div> (division) je generický nepárový blokový kontejner, který sám o sobě nenese žádný sémantický význam a slouží čistě pro strukturování layoutu a stylování.\n- Možnost 1 (<div>) je správná.\n- Elementy <article>, <aside> a <main> jsou sémantické tagy HTML5, které jasně sdělují význam svého obsahu (samostatný článek, doplňkový postranní obsah, hlavní obsah stránky)."
      },
      {
        "id": "html_q33",
        "module": "html_m5",
        "question": "Which ARIA attribute should be used to indicate the current state of an element that can be expanded or collapsed, such as an accordion panel?",
        "code": null,
        "options": [
          "aria-checked",
          "aria-expanded-collapsed",
          "aria-collapsed",
          "aria-expanded"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: aria-expanded\n\nNa snímku obrazovky je otázka: „Which ARIA attribute should be used to indicate the current state of an element that can be expanded or collapsed, such as an accordion panel?“\n\nOficiální vysvětlení ze zkoušky:\n„The aria-expanded attribute is used to indicate whether an element that can be expanded or collapsed (such as an accordion panel) is currently expanded or collapsed. When set to true, it indicates the element is expanded, and when set to false, it indicates the element is collapsed. This attribute helps improve accessibility for users of assistive technologies. The other options are incorrect or do not serve the intended purpose.“\n\nPodrobné vysvětlení:\nAtribut aria-expanded slouží k vyjádření stavu sbalení (false) nebo rozbalení (true) ovládacího prvku akordeonu, rozbalovací nabídky nebo panelu pro asistenční technologie.\n- Možnost 3 (aria-expanded) je správná.\n- Atributy aria-collapsed a aria-expanded-collapsed ve specifikaci W3C WAI-ARIA neexistují.\n- aria-checked indikuje stav zaškrtnutí u přepínačů a zaškrtávacích políček."
      },
      {
        "id": "html_q34",
        "module": "html_m1",
        "question": "Why is maintaining consistent indentation and formatting important in HTML code?",
        "code": null,
        "options": [
          "It reduces file size and improves page loading speed.",
          "It prevents browser compatibility issues.",
          "It enhances readability and helps identify the structure of HTML elements.",
          "It improves search engine optimization (SEO)."
        ],
        "correct": 2,
        "explanation": "Správná odpověď: It enhances readability and helps identify the structure of HTML elements.\n\nNa snímku obrazovky je otázka: „Why is maintaining consistent indentation and formatting important in HTML code?“\n\nOficiální vysvětlení ze zkoušky:\n„Consistent indentation and formatting improve the readability of HTML code, making it easier for developers to understand the document structure, locate elements, and maintain the code. It doesn't directly affect browser compatibility, file size, or SEO but plays a crucial role in code maintenance and collaboration. Properly formatted code is essential for debugging and efficient teamwork.“\n\nPodrobné vysvětlení:\nKonzistentní odsazení a úprava kódu pomáhá vývojářům vizuálně sledovat hierarchii vnořených tagů, usnadňuje ladění a týmovou údržbu.\n- Možnost 2 je správná: zvyšuje čitelnost a pomáhá identifikovat strukturu elementů.\n- Webové prohlížeče bílé znaky a odsazení při zpracování slučují (whitespace collapsing), takže odsazení nemá žádný vliv na kompatibilitu prohlížečů, SEO ani na zmenšení souboru (mezery soubor naopak nepatrně zvětšují)."
      },
      {
        "id": "html_q35",
        "module": "html_m5",
        "question": "Which attribute should be used to specify the language of the content in an HTML document, enhancing accessibility for users?",
        "code": null,
        "options": [
          "language",
          "lang",
          "html-lang",
          "html-language"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: lang\n\nNa snímku obrazovky je otázka: „Which attribute should be used to specify the language of the content in an HTML document, enhancing accessibility for users?“\n\nOficiální vysvětlení ze zkoušky:\n„The lang attribute is used to specify the language of the content in an HTML document. It is placed in the <html> tag to inform browsers and assistive technologies (such as screen readers) of the language used on the page, improving accessibility for users. The other options are not valid HTML attributes.“\n\nPodrobné vysvětlení:\nGlobální atribut lang (např. <html lang=\"en\">) definuje primární jazyk obsahu dokumentu. Je klíčový pro přístupnost, protože asistenční technologie (odečítače obrazovky) podle něj volí odpovídající hlasový syntezátor a výslovnostní pravidla.\n- Možnost 1 (lang) je správná.\n- Atributy language, html-lang ani html-language nejsou v moderním HTML platnými atributy pro definici jazyka dokumentu."
      },
      {
        "id": "html_q36",
        "module": "html_m1",
        "question": "Identify the error in the following HTML snippet used to link a favicon:",
        "code": "<head>\n  <link rel=\"shortcut-icon\" type=\"image/png\" href=\"favicon.png\">\n</head>",
        "options": [
          "The href attribute must point to an .ico file, not a .png file for wider browser compatibility.",
          "The rel attribute should be icon, not shortcut-icon.",
          "The MIME type image/png is incorrect for a favicon; it should be image/x-icon.",
          "The href attribute's path must start with / to ensure it is found regardless of the current page's URL."
        ],
        "correct": 1,
        "explanation": "Správná odpověď: The rel attribute should be icon, not shortcut-icon.\n\nNa snímku obrazovky je kód:\n<head>\n  <link rel=\"shortcut-icon\" type=\"image/png\" href=\"favicon.png\">\n</head>\nOtázka: „Identify the error in the following HTML snippet used to link a favicon:“\n\nOficiální vysvětlení ze zkoušky:\n„To properly link a favicon, the rel attribute should be set to icon, not shortcut-icon. The type attribute can be image/png for a PNG favicon, and the href attribute can point to either a .ico or .png file, depending on the desired format. While .ico files have better browser support, modern browsers also support .png favicons. The path in the href does not necessarily need to start with / unless you want to specify an absolute path.“\n\nPodrobné vysvětlení:\nV HTML je standardní hodnotou atributu rel pro ikonu stránky hodnota icon (v dřívějších dobách též shortcut icon oddělené mezerou). Spojení s pomlčkou shortcut-icon je neplatné.\n- Možnost 1 je správná: hodnota atributu rel má být icon, nikoli shortcut-icon.\n- Použití formátu PNG (type=\"image/png\") je dnes plně podporované a relativní cesta k souboru je naprosto v pořádku."
      },
      {
        "id": "html_q37",
        "module": "html_m2",
        "question": "How should the following snippet be corrected to display a less than symbol?",
        "code": "<p>Our prices are < than ever!</p>",
        "options": [
          "Add quotes around <.",
          "Replace < with \\<.",
          "Replace < with &lt; .",
          "Wrap < in <!-- and -->."
        ],
        "correct": 2,
        "explanation": "Správná odpověď: Replace < with &lt; .\n\nNa snímku obrazovky je ukázka:\n<p>Our prices are < than ever!</p>\nOtázka: „How should the following snippet be corrected to display a less than symbol?“\n\nOficiální vysvětlení ze zkoušky:\n„In HTML, the less than symbol < is reserved for starting tags, so it must be replaced with the HTML character entity &lt; to display the symbol correctly. The other options are incorrect and would not properly display the less than symbol.“\n\nPodrobné vysvětlení:\nZnak menší než (<) je v HTML vyhrazený (reserved character) pro uvození otevíracích či uzavíracích značek tagů. Pokud se zapíše přímo do textu, parser jej může interpretovat jako začátek tagu a způsobit chybu vykreslování. Pro zobrazení symbolu < v textu se musí použít znaková entita &lt; (less than).\n- Možnost 2 je správná.\n- Escapování zpětným lomítkem \\< v HTML nefunguje, uvozovky nepomáhají a komentář <!-- < --> by znak zcela skryl."
      },
      {
        "id": "html_q38",
        "module": "html_m1",
        "question": "What should be added to ensure this emoji is correctly displayed in all browsers?",
        "code": "<p>I love pizza 🍕</p>",
        "options": [
          "Wrap the emoji in a <span> tag.",
          "Specify a charset of UTF-8 in the <meta> tag of the document's head.",
          "Specify a charset of ASCII in the <meta> tag of the document's head.",
          "Replace the emoji with an HTML entity."
        ],
        "correct": 1,
        "explanation": "Správná odpověď: Specify a charset of UTF-8 in the <meta> tag of the document's head.\n\nNa snímku obrazovky je ukázka:\n<p>I love pizza 🍕</p>\nOtázka: „What should be added to ensure this emoji is correctly displayed in all browsers?“\n\nOficiální vysvětlení ze zkoušky:\n„Using an HTML entity could work in some cases, but not all emojis have corresponding HTML entities. The most reliable way to ensure correct emoji rendering is by specifying UTF-8 encoding in the <meta> tag. This allows the browser to interpret and display emojis correctly across different platforms“\n\nPodrobné vysvětlení:\nEmoji znaky spadají do standardu Unicode (vícebajtové kódování). Aby prohlížeč interpretoval tyto znaky správně a nedošlo k jejich zkomolení (tzv. mojibake), je nezbytné v hlavičce <head> deklarovat kódování UTF-8 pomocí <meta charset=\"UTF-8\">.\n- Možnost 1 je správná.\n- Znaková sada ASCII podporuje pouze 128 základních znaků a emoji nepodporuje.\n- Zabalení do <span> problém s kódováním nijak neřeší.\n- Nahrazení HTML entitou nemusí být vždy dostupné pro všechny novější emotikony."
      },
      {
        "id": "html_q39",
        "module": "html_m3",
        "question": "Which attribute value should you insert in the following snippet to correctly create an image map named \"workMap\" for an image?",
        "code": "<img src=\"workplace.jpg\" usemap=\"<!-- Insert value here -->\">\n<map name=\"workMap\">\n  <!-- Map areas here -->\n</map>",
        "options": [
          "#workMap",
          "true",
          "@workMap",
          "workmap.jpg"
        ],
        "correct": 0,
        "explanation": "Správná odpověď: #workMap\n\nNa snímku obrazovky je ukázka:\n<img src=\"workplace.jpg\" usemap=\"<!-- Insert value here -->\">\n<map name=\"workMap\">\n  <!-- Map areas here -->\n</map>\nOtázka: „Which attribute value should you insert in the following snippet to correctly create an image map named \"workMap\" for an image?“\n\nOficiální vysvětlení ze zkoušky:\n„To correctly create an image map, the usemap attribute in the <img> tag should refer to the id or name of the <map> element, prefixed with a #. In this case, the image map is named \"workMap,\" so the correct value for the usemap attribute is #workMap. This links the image to the map and allows you to define areas within the image that can be clicked.“\n\nPodrobné vysvětlení:\nAtribut usemap na značce <img> propojuje obrázek s definicí klikatelných oblastí v elementu <map>. Hodnota atributu usemap musí obsahovat název mapy (hodnotu atributu name daného prvku <map>) s předřazeným znakem mřížky # (funguje jako odkaz na interní identifikátor v dokumentu), v tomto případě tedy #workMap.\n- Možnost 0 (#workMap) je správná.\n- Hodnoty @workMap, true ani cesta k souboru workmap.jpg mapu nepropojí."
      },
      {
        "id": "html_q40",
        "module": "html_m6",
        "question": "Select the correct fragment of code that needs to be inserted in the following snippet to correctly define a circle with SVG:",
        "code": "<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" <!-- Insert missing code here -->\n</svg>",
        "options": [
          "></circle>.",
          ">.",
          "/>.",
          ">{}"
        ],
        "correct": 2,
        "explanation": "Správná odpověď: />.\n\nNa snímku obrazovky je ukázka:\n<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" <!-- Insert missing code here -->\n</svg>\nOtázka: „Select the correct fragment of code that needs to be inserted in the following snippet to correctly define a circle with SVG:“\n\nOficiální vysvětlení ze zkoušky:\n„In the SVG code, the <circle> element should be self-closed with a /> at the end. This properly closes the circle element within the SVG. The other options (>, </circle>, and {}) are incorrect in this context.“\n\nPodrobné vysvětlení:\nElement <circle> v SVG představuje samostatný geometrický tvar bez vnořeného obsahu, který se zapisuje jako samostatně uzavírací (self-closing) prvek zakončený lomítkem a pravou lomenou závorkou /> (v možnostech zobrazeno s tečkou jako />.).\n- Možnost 2 (/>.) je správná.\n- Samotné > by element neuzavřelo a syntaxe >{} je neplatná.\n- Zápis ></circle> by sice fungoval jako párový, ale v dané pozici za komentářem chybí otevírací uzavření a standardním SVG idiomem je samouzavírací značka />."
      }
    ]
  },
  "css": {
    "id": "css",
    "category": "web",
    "categoryName": "Webové aplikace",
    "title": "Cisco Networking Academy: CSS Essentials",
    "subtitle": "Příprava na certifikaci WDA™ (Certified Associate Web Developer)",
    "badge": "CSS Essentials",
    "icon": "fab fa-css3-alt",
    "color": "#264DE4",
    "passScore": 70,
    "timeLimit": 45,
    "modules": [
      {
        "id": "css_m1",
        "name": "Modul 1: Úvod do CSS a syntaxe"
      },
      {
        "id": "css_m2",
        "name": "Modul 2: Selektory, kaskáda a specificita"
      },
      {
        "id": "css_m3",
        "name": "Modul 3: Box Model, rozměry a typografie"
      },
      {
        "id": "css_m4",
        "name": "Modul 4: Pozicování a layouty"
      },
      {
        "id": "css_m5",
        "name": "Modul 5: Moderní layouty (Flexbox, Grid) a responzivita"
      }
    ],
    "examQuestionCount": 35,
    "questions": [
      {
        "id": "css_q01",
        "module": "css_m1",
        "question": "What is the correct syntax for a CSS rule?",
        "code": null,
        "options": [
          "selector {\n  value: property\n}",
          "property: value {\n  selector\n}",
          "selector {\n  property: value\n}",
          "value: property {\n  selector\n}"
        ],
        "correct": 2,
        "explanation": "Správná syntaxe CSS pravidla se skládá ze selektoru a deklaračního bloku ve složených závorkách: selector { property: value; }. Selektor určuje cílový HTML element, vlastnost (property) definuje stylovaný aspekt (např. color) a hodnota (value) nastavuje konkrétní styl (např. red). Ostatní možnosti obracejí pořadí selektoru, vlastností a hodnot."
      },
      {
        "id": "css_q02",
        "module": "css_m1",
        "question": "Consider the following CSS code snippet applied to a <div> element:\n\nWhat will be the effect of this CSS on the <div> element?",
        "code": "div {\n  border: 1px solid orange;\n  width: 200px;\n  height: 100px;\n  background-color: lightblue; /* light blue background */\n  /* border: 2px solid black; */\n  text-align: center; /*\n  text-align: left; */\n  color: white;\n}",
        "options": [
          "The div will have a solid orange border and left-aligned white text.",
          "The div will have a light blue background and solid black border.",
          "The text inside the div will be orange and centered.",
          "The div will have a solid orange border and centered white text."
        ],
        "correct": 3,
        "explanation": "V kódu je nastaven oranžový rámeček border: 1px solid orange; (černý rámeček níže je zakomentován). Dále je nastaveno světle modré pozadí (background-color: lightblue;) a bílý text (color: white;). U zarovnání textu je aplikováno text-align: center;, protože víceřádkový komentář začíná až za ním (/* text-align: left; */). Výsledkem je tedy plný oranžový rámeček a na střed zarovnaný bílý text uvnitř divu."
      },
      {
        "id": "css_q03",
        "module": "css_m2",
        "question": "Which selector would you use to target all <a> elements with a title attribute?",
        "code": null,
        "options": [
          "a[title]",
          "a.class=\"title\"",
          "a:attr(title)",
          "a#title"
        ],
        "correct": 0,
        "explanation": "Pro zacílení elementů s konkrétním atributem slouží v CSS atributový selektor s hranatými závorkami [attribute]. Zápis a[title] správně vybere všechny elementy <a>, které mají přítomen atribut title. Zápisy jako a.class=\"title\" či a:attr(title) jsou neplatné a a#title vybírá odkaz s ID 'title'."
      },
      {
        "id": "css_q04",
        "module": "css_m2",
        "question": "To style elements with the class highlight only when they are hovered over, which selector would you use?",
        "code": null,
        "options": [
          ".highlight:focus",
          "#highlight:hover",
          ".highlight::hover",
          ".highlight:hover"
        ],
        "correct": 3,
        "explanation": "Třída se v CSS uvozuje tečkou (.highlight) a pseudotřída pro najetí myši jednou dvojtečkou (:hover). Správný selektor je proto .highlight:hover. Zápis #highlight:hover by cílil na element s ID 'highlight', .highlight:focus reaguje na fokus (zaměření) a ::hover je neplatná syntaxe (dvě dvojtečky patří pseudoelementům)."
      },
      {
        "id": "css_q05",
        "module": "css_m2",
        "question": "Examine the following snippet:",
        "code": "/* styles.css */\n#element {\n  color: green;\n}\n.element-class {\n  color: yellow;\n}\ndiv {\n  color: orange;\n}\n\n<!-- index.html -->\n<div id=\"element\" class=\"element-class\">Sample Text</div>",
        "options": [
          "Either a random color or an error will occur",
          "Orange",
          "Green",
          "Yellow"
        ],
        "correct": 2,
        "explanation": "Tato otázka testuje specificitu (váhu) CSS selektorů. Na element <div> cílí selektor ID (#element s váhou 0-1-0-0), selektor třídy (.element-class s váhou 0-0-1-0) a elementární selektor (div s váhou 0-0-0-1). Protože ID selektor má vyšší specificitu než třídní i typový selektor, uplatní se jeho pravidlo a výsledný text bude mít zelenou barvu (Green)."
      },
      {
        "id": "css_q06",
        "module": "css_m3",
        "question": "How would you set a semi-transparent black background with 50% opacity?",
        "code": null,
        "options": [
          "background-color: black; transparent: 0.5;",
          "background-color: rgba(0, 0, 0, 0.5);",
          "background-color: #00000050; opacity: 50%;",
          "background-color: hsl(0, 0%, 0%, 0.5);"
        ],
        "correct": 1,
        "explanation": "Funkce rgba(r, g, b, a) v CSS umožňuje nastavit barevné složky (pro černou 0, 0, 0) a alfa kanál pro průhlednost. Hodnota 0.5 nastaví 50% průhlednost pozadí: background-color: rgba(0, 0, 0, 0.5);. Vlastnost transparent v CSS neexistuje, opacity: 50% by zprůhlednila i text a vnořené elementy, a funkce hsl v tradiční syntaxi nepřijímá 4 parametry."
      },
      {
        "id": "css_q07",
        "module": "css_m3",
        "question": "Which of the following CSS properties is a shorthand that correctly sets the list marker type to a square, the position of the marker inside the list item, and a custom image as the list marker?",
        "code": null,
        "options": [
          "list: square inside url('marker.png');",
          "list-style-type: square; list-style-position: inside; list-style-image: url('marker.png');",
          "list-style: square inside url('marker.png');",
          "list-marker: square inside url('marker.png');"
        ],
        "correct": 2,
        "explanation": "Zkrácená (shorthand) vlastnost list-style slouží ke sloučení list-style-type (square), list-style-position (inside) a list-style-image (url('marker.png')) do jediného zápisu: list-style: square inside url('marker.png');. Možnost s rozepsanými jednotlivými vlastnostmi není zkrácený zápis (shorthand), na který se otázka výslovně táže, a názvy vlastností list či list-marker v CSS neexistují."
      },
      {
        "id": "css_q08",
        "module": "css_m3",
        "question": "Which of the following CSS rules ensures that an image inside a hyperlink appears without an underline, has no border, and scales properly within the link?",
        "code": null,
        "options": [
          "a img {\n  text-decoration: none;\n  width: auto;\n}",
          "a {\n  border: 0;\n  max-width: 100%;\n  text-decoration: none;\n  img('image.png')\n}",
          "a img {\n  border: 0;\n  display: block;\n  max-width: 100%;\n  text-decoration: none;\n}",
          "a img('image.png') {\n  border: none;\n  display: inline;\n  max-width: 100%;\n  underline: none;\n}"
        ],
        "correct": 2,
        "explanation": "Pravidlo a img cílící na obrázek uvnitř odkazu správně odstraňuje podtržení (text-decoration: none;), ruší ohraničení (border: 0;) a zajišťuje správné responzivní přizpůsobení šířce odkazu (max-width: 100%;). Přidání display: block; navíc brání nechtěným spodním mezerám pod obrázkem. Ostatní možnosti obsahují neplatnou syntaxi (např. img('image.png'), underline: none) nebo chybějící vlastnosti."
      },
      {
        "id": "css_q09",
        "module": "css_m3",
        "question": "Which of the following CSS rules sets the font size to 16px, font weight to bold, and font style to italic for a paragraph element?",
        "code": null,
        "options": [
          "p {\n  font-style: bold italic 16px;\n}",
          "p {\n  font: 16px bold italic;\n}",
          "p {\n  font-size: 16px;\n  font-weight: bold;\n  font-style: italic;}",
          "p {\n  font: 16px;\n  font-weight: italic;\n  font-style: bold;\n}"
        ],
        "correct": 2,
        "explanation": "Správný zápis explicitně a korektně nastavuje jednotlivé vlastnosti písma: font-size: 16px;, font-weight: bold; a font-style: italic;. Zkrácená vlastnost font vyžaduje povinné uvedení velikosti i rodiny písma v pevném pořadí (např. font: italic bold 16px sans-serif;), takže nabízené shorthand varianty jsou neplatné."
      },
      {
        "id": "css_q10",
        "module": "css_m3",
        "question": "Which CSS rule combines properties to set the text color to blue, center-align the text, set the font family to Arial, and add a line height of 1.5?",
        "code": null,
        "options": [
          "p {\n  text-color: blue;\n  text-align: middle; font-family: Arial, sans-serif;\n  line-spacing: 1.5;\n}",
          "p {\n  color: blue;\n  text-align: center; font-family: Arial, sans-serif;\n  line-height: 1.5;\n}",
          "p {\n  color: blue;\n  text-align: center; font-family: Arial, serif;\n  height: 1.5;\n}",
          "p {\n  color: blue;\n  align-text: center; font-family: Arial, sans-serif;\n  line-height: 1.5;\n}"
        ],
        "correct": 1,
        "explanation": "Pravidlo správně kombinuje vlastnosti CSS: color: blue; (nastavení barvy textu), text-align: center; (zarovnání textu na střed), font-family: Arial, sans-serif; (rodina písma s bezpatkovou zálohou) a line-height: 1.5; (výška řádku / řádkování). Ostatní možnosti obsahují neexistující vlastnosti jako text-color, align-text či line-spacing, případně nesprávné hodnoty (middle pro vodorovné zarovnání)."
      },
      {
        "id": "css_q11",
        "module": "css_m3",
        "question": "What is the primary difference between the CSS properties margin and padding?",
        "code": null,
        "options": [
          "margin creates space between the element's content and its border, while padding creates space outside the element's border.",
          "margin creates space outside the element's border, while padding creates space between the element's content and its border.",
          "margin and padding both create space between the element's content and its border.",
          "margin and padding both create space outside the element's border."
        ],
        "correct": 1,
        "explanation": "Základním rozdílem v Box Modelu je, že margin (vnější okraj) vytváří prostor vně ohraničení (border) elementu a odděluje ho od ostatních okolních elementů, zatímco padding (vnitřní výplň) vytváří prostor uvnitř mezi obsahem elementu a jeho ohraničením."
      },
      {
        "id": "css_q12",
        "module": "css_m3",
        "question": "Which CSS rule ensures that content inside a <div> element is horizontally centered, and any overflow content is hidden?",
        "code": null,
        "options": [
          "div {\n  text-align: center;\n  overflow: visibility-none;\n}",
          "div {\n  align-items: center;\n  overflow: none;\n}",
          "div {\n  align-content: center;\n  overflow: auto;\n}",
          "div {\n  text-align: center;\n  overflow: hidden;\n}"
        ],
        "correct": 3,
        "explanation": "Vlastnost text-align: center; vodorovně centruje řádkový (inline) obsah uvnitř bloku <div>, zatímco overflow: hidden; zajišťuje, že veškerý obsah přesahující rozměry bloku <div> bude oříznut a skryt. Hodnoty visibility-none či none u vlastnosti overflow v CSS neexistují."
      },
      {
        "id": "css_q13",
        "module": "css_m4",
        "question": "Which CSS rules will hide an element but still take up space in the layout? Select two answers.",
        "code": null,
        "options": [
          "display: none;",
          "visibility: collapse;",
          "visibility: no-show;",
          "visibility: hidden;",
          "display: hidden;",
          "display: invisible;"
        ],
        "correct": 3,
        "explanation": "Vlastnost visibility: hidden; skryje element z obrazovky, ale zachová jeho místo v layoutu stránky. Podobně funguje visibility: collapse; (používané zejména pro řádky a sloupce tabulek). Naproti tomu display: none; prvek z layoutu zcela odstraní, takže žádné místo nezabírá. Ostatní možnosti (display: hidden, display: invisible, visibility: no-show) představují v CSS neplatnou syntaxi."
      },
      {
        "id": "css_q14",
        "module": "css_m4",
        "question": "Given the following CSS and HTML, where will the .box element be positioned?",
        "code": "/* styles.css */\n.container {\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background-color: lightgray;\n}\n\n.box {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  width: 100px;\n  height: 100px;\n  background-color: tomato;\n}\n\n<!-- index.html -->\n<div class=\"container\">\n  <div class=\"box\"></div>\n</div>",
        "options": [
          "The .box element will be positioned 20px from the top and 30px from the left of the .container element.",
          "The .box element will remain in its static position inside the .container.",
          "The .box element will be positioned 20px from the top and 30px from the left of the viewport.",
          "The .box element will be positioned relative to the nearest statically positioned ancestor."
        ],
        "correct": 0,
        "explanation": "Element .box má nastaveno position: absolute, což znamená, že se pozicuje vůči svému nejbližšímu pozicovanému předkovi (ancestor s position jiným než static). Zde je tímto předkem .container s position: relative. Proto bude .box umístěn 20px odshora a 30px zleva vůči elementu .container. Kdyby předek pozicovaný nebyl, pozicoval by se vůči viewportu."
      },
      {
        "id": "css_q15",
        "module": "css_m3",
        "question": "Which CSS rule will style a table with a border, set the spacing between table cells to 0, and apply a background color to alternating rows?",
        "code": null,
        "options": [
          "table {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable tr:nth-child(even) {\n  background-color: #f2f2f2;\n}",
          "table {\n  border: 1px solid black;\n  border-spacing: 0;\n}\ntable tr:nth-child(odd) {\n  background-color: #f2f2f2;\n}",
          "table {\n  border: 1px solid black;\n  border-spacing: 5px;\n}\ntable tr:nth-child(odd) {\n  background-color: #f2f2f2;\n}",
          "table {\n  border: 1px dashed black;\n  border-collapse: separate;\n}\ntable tr:hover {\n  background-color: #f2f2f2;\n}"
        ],
        "correct": 0,
        "explanation": "Pravidlo definuje černý rámeček (border: 1px solid black;), sloučí rámečky buněk a odstraní mezery mezi nimi pomocí border-collapse: collapse; a aplikuje světle šedé pozadí na střídavé (sudé) řádky pomocí pseudotřídy table tr:nth-child(even). Ostatní varianty buď neslučují rámečky nebo používají nevhodný selektor (např. :hover pro přejetí myší)."
      },
      {
        "id": "css_q16",
        "module": "css_m3",
        "question": "What is the primary purpose of using fieldset and legend elements in an HTML form?",
        "code": null,
        "options": [
          "The fieldset element is used to style form controls and the legend element is used to add tooltips to the controls.",
          "The fieldset element is used to create a container for input fields and the legend element is used to submit the form.",
          "The fieldset element is used to add spacing between form controls and the legend element is used to add a label to each control.",
          "The fieldset element is used to group related form controls and the legend element provides a caption for the fieldset."
        ],
        "correct": 3,
        "explanation": "Element <fieldset> slouží k logickému seskupení souvisejících formulářových ovládacích prvků do jednoho bloku, což výrazně zlepšuje organizaci a přístupnost formuláře. Element <legend> představuje titulek / popisek pro danou skupinu <fieldset>, který uživateli objasňuje její účel."
      },
      {
        "id": "css_q17",
        "module": "css_m4",
        "question": "What is the effect of applying float: left; to an element?",
        "code": null,
        "options": [
          "The element will be removed from the normal document flow, float to the right of its containing block, and allow text and inline elements to wrap around its left side.",
          "The element will remain in the normal document flow, float to the left, but other elements will be pushed down.",
          "The element will float to the left of its containing block, but text and inline elements will not wrap around it.",
          "The element will be removed from the normal document flow, float to the left of its containing block, and allow text and inline elements to wrap around its right side."
        ],
        "correct": 3,
        "explanation": "Vlastnost float: left; vyjme element z běžného toku dokumentu (normal flow) a umístí jej k levému okraji nadřazeného bloku. To umožní okolnímu obsahu (např. textu či inline prvkům), aby tento element obtékal po jeho pravé straně. Element nezůstává v normálním toku a text kolem něj obtéká."
      },
      {
        "id": "css_q18",
        "module": "css_m4",
        "question": "Consider the following HTML and CSS. What will be the layout effect of the .clearfix class?",
        "code": "HTML :\n<div class=\"clearfix\">\n    <div class=\"float-left\">Left</div>\n    <div class=\"float-right\">Right</div>\n</div>\n\nCSS :\n.float-left {\n    float: left;\n    width: 50%;\n}\n.float-right {\n    float: right;\n    width: 50%;\n}\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}",
        "options": [
          "The .clearfix class will clear the floated elements, ensuring that the container wraps around the static elements.",
          "The .clearfix class will clear the floats, ensuring that the container wraps around the floated elements.",
          "The .clearfix class will hide the floated elements.",
          "The .clearfix class will float the container to the left."
        ],
        "correct": 1,
        "explanation": "Třída `.clearfix` využívá pseudoelement `::after` s vlastnostmi `content: \"\"`, `clear: both` a `display: table`. Plovoucí elementy (`float: left` a `float: right`) jsou vyjmuty z běžného toku dokumentu, což by bez ošetření způsobilo tzv. zhroucení výšky rodičovského kontejneru (`.clearfix` by měl nulovou výšku). Tento klasický trik s clearfixem vytvoří na konci kontejneru skrytý prvek, který vyčistí obtékání (`clear: both`) a donutí rodičovský kontejner správně obalit všechny plovoucí elementy (`wrap around the floated elements`). Možnost tvrdící, že obalí statické elementy, je nepřesná, a volby hovořící o skrytí elementů či plavání samotného kontejneru doleva jsou zcela chybné."
      },
      {
        "id": "css_q19",
        "module": "css_m5",
        "question": "Which of the following media query will apply styles to devices with a maximum width of 768px?",
        "code": null,
        "options": [
          "@media (width: 768px) { ... }",
          "@media (max-device-width: 768px) { ... }",
          "@media (min-width: 768px) { ... }",
          "@media (max-width: 768px) { ... }"
        ],
        "correct": 3,
        "explanation": "Pravidlo `@media (max-width: 768px)` aplikuje CSS styly na zařízení/prohlížeče, jejichž šířka viewportu je maximálně 768 pixelů (tedy 768px a méně). Vlastnost `min-width: 768px` by naopak cílila na šířku 768px a více, `width: 768px` cílí výhradně na naprosto přesnou šířku 768px a zastaralá vlastnost `max-device-width` se vztahuje k fyzickému rozlišení displeje zařízení, nikoli k aktuální velikosti okna prohlížeče."
      },
      {
        "id": "css_q20",
        "module": "css_m5",
        "question": "Which media query will apply styles specifically for devices in landscape orientation?",
        "code": null,
        "options": [
          "@media (screen: landscape) { ... }",
          "@media (orientation: portrait) { ... }",
          "@media (position: landscape) { ... }",
          "@media (orientation: landscape) { ... }"
        ],
        "correct": 3,
        "explanation": "Media query `@media (orientation: landscape)` se používá k aplikaci stylů specificky pro orientaci na šířku (landscape), tedy v situaci, kdy je šířka viewportu větší než jeho výška. `@media (orientation: portrait)` cílí na orientaci na výšku, zatímco vlastnosti jako `screen: landscape` nebo `position: landscape` jsou v CSS syntakticky neplatné."
      },
      {
        "id": "css_q21",
        "module": "css_m4",
        "question": "Which CSS rules will create a simple two-column grid layout using floats?",
        "code": null,
        "options": [
          ".float-container {\n    width: 100%;\n    display: flex;\n}\n.column {\n    flex: 1;\n}",
          ".float-container {\n    width: 100%;\n    display: block;\n}\n.column {\n    display: inline-block;\n    width: 50%;\n}",
          ".container {\n    width: 100%;\n    overflow: hidden;\n}\n.column {\n    float: left;\n    width: 50%;\n}",
          ".container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.column {\n    float: left;\n}"
        ],
        "correct": 2,
        "explanation": "Pro vytvoření dvousloupcového rozvržení pomocí floatů je nutné nastavit sloupcům `float: left;` a poloviční šířku `width: 50%;`. Rodičovský kontejner navíc potřebuje vyřešit zhroucení výšky způsobené plovoucími potomky – zde se využívá osvědčená technika `overflow: hidden;`, která vytvoří nový kontext formátování bloku (BFC) a uzavře plovoucí elementy uvnitř kontejneru. Ostatní možnosti využívají modernější Flexbox, CSS Grid nebo inline-block, nikoli čisté řešení postavené na floatech."
      },
      {
        "id": "css_q22",
        "module": "css_m4",
        "question": "Which CSS rule will wrap text around an image by floating the image to the left?",
        "code": null,
        "options": [
          "img {\n    float: right;\n    margin: 0 0 10px 10px;\n}",
          "img {\n    text-align: float;\n    padding: 10px;\n}",
          "img {\n    float: left;\n    margin: 0 10px 10px 0;\n}",
          "img {\n    display: float; block;\n    margin: 10px;\n}"
        ],
        "correct": 2,
        "explanation": "Pravidlo `float: left;` umístí obrázek k levému okraji rodičovského kontejneru a umožní okolnímu textu obtékat jej zprava a zespodu. Nastavený vnější okraj `margin: 0 10px 10px 0;` (horní, pravý, dolní, levý) vytvoří potřebný odstup 10px vpravo a dole, aby text nebyl nalepený přímo na obrázek. Volba s `float: right;` by obrázek umístila doprava a zápisy jako `text-align: float;` nebo `display: float; block;` jsou v CSS zcela neplatné."
      },
      {
        "id": "css_q23",
        "module": "css_m5",
        "question": "Which CSS rule will evenly distribute space between flex items along the main axis in a flex container?",
        "code": null,
        "options": [
          ".container {\n    display: flex;\n    justify-content: space-between;\n}",
          ".container {\n    display: flex;\n    align-content: space-around;\n}",
          ".container {\n    inline-block: flex;\n    justify-content: center;\n}",
          ".container {\n    display: flex;\n    align-items: center;\n}"
        ],
        "correct": 0,
        "explanation": "Vlastnost `justify-content` řídí zarovnání a distribuci volného prostoru mezi flex položkami podél hlavní osy (main axis – ve výchozím nastavení vodorovně). Hodnota `space-between` umístí první položku na začátek, poslední položku na konec a zbývající volné místo rovnoměrně rozdělí mezi položky. Vlastnosti `align-items` a `align-content` ovlivňují příčnou osu (cross axis) a zápis `inline-block: flex;` je neplatný."
      },
      {
        "id": "css_q24",
        "module": "css_m5",
        "question": "Which CSS rule explicitly defines a grid with three flexible and equal columns?",
        "code": null,
        "options": [
          ".container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}",
          ".container {\n    display: grid;\n    grid-template-columns: 100px 100px 100px;\n}",
          ".container {\n    display: grid;\n    grid-auto-flow: column;\n}",
          ".container {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n}"
        ],
        "correct": 0,
        "explanation": "Vlastnost `grid-template-columns: 1fr 1fr 1fr;` explicitně definuje mřížku se třemi sloupci stejné šířky, kde každý sloupec zabírá stejný podíl (jednu frakční jednotku `1fr`) z dostupného prostoru. Jednotka `fr` zajišťuje plnou flexibilitu a rovnoměrné rozdělení prostoru. Možnost se `100px` vytváří sloupce s pevnou šířkou (nejsou flexibilní), `grid-template-rows` definuje řádky místo sloupců a `grid-auto-flow: column;` pouze určuje směr automatického toku prvků."
      },
      {
        "id": "css_q25",
        "module": "css_m5",
        "question": "Given the following CSS and HTML, which Flexbox properties and values will center the items both horizontally and vertically within the container?",
        "code": "CSS :\n.container {\n    display: flex;\n    height: 200px;\n}\n.item {\n    width: 50px;\n    height: 50px;\n    background-color: tomato;\n}\n\nHTML :\n<div class=\"container\">\n    <div class=\"item\">1</div>\n    <div class=\"item\">2</div>\n    <div class=\"item\">3</div>\n</div>",
        "options": [
          ".container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n}",
          ".container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}",
          ".container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: stretch;\n}",
          ".container {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n}"
        ],
        "correct": 1,
        "explanation": "Ve Flexboxu se pro vycentrování položek v obou směrech kombinuje `justify-content: center;` (které centruje podél hlavní vodorovné osy) a `align-items: center;` (které centruje podél příčné svislé osy). Díky tomu se položky `.item` ocitnou přesně uprostřed kontejneru o výšce 200px. Ostatní varianty položky zarovnávají ke krajům (`flex-end`, `flex-start`, `space-between`) nebo je natahují (`stretch`)."
      },
      {
        "id": "css_q26",
        "module": "css_m5",
        "question": "Which CSS rule will allow flex items to wrap onto multiple lines within a flex container?",
        "code": null,
        "options": [
          ".container {\n    display: flex;\n    align-content: stretch;\n}",
          ".container {\n    display: flex;\n    align-content: wrap;\n}",
          ".container {\n    display: flex;\n    flex-direction: column;\n}",
          ".container {\n    display: flex;\n    flex-wrap: wrap;\n}"
        ],
        "correct": 3,
        "explanation": "Ve výchozím nastavení mají flex kontejnery vlastnost `flex-wrap: nowrap;`, což znamená, že se všechny položky snaží vměstnat do jediného řádku (i za cenu zmenšení šířky). Nastavením pravidla `flex-wrap: wrap;` umožníme flex položkám přetékat a zalamovat se do více řádků, pokud se nevejdou do šířky kontejneru. Vlastnost `align-content` neřeší samotné zalomení (a hodnota `wrap` pro ni ani neexistuje) a `flex-direction: column;` pouze mění směr toku na sloupec."
      },
      {
        "id": "css_q27",
        "module": "css_m5",
        "question": "Which CSS rule will cause grid items to be placed in rows by default, controlling the automatic flow of items and filling each row before moving to the next?",
        "code": null,
        "options": [
          ".container {\n    display: grid;\n    grid-auto-flow: column;\n}",
          ".container {\n    display: grid;\n    grid-auto-flow: row;\n}",
          ".container {\n    display: grid;\n    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));\n}",
          ".container {\n    display: grid;\n    grid-auto-rows: auto;\n}"
        ],
        "correct": 1,
        "explanation": "Vlastnost `grid-auto-flow` určuje, jakým způsobem algoritmus automatického umisťování v CSS Grid vkládá položky, které nemají explicitně určenou pozici. Hodnota `row` (která je zároveň výchozím chováním mřížky) zajišťuje, že se položky skládají po řádcích – nejprve se zaplní aktuální řádek a až poté se přejde na další. Hodnota `column` by položky umisťovala po sloupcích a vlastnosti `grid-template-rows` či `grid-auto-rows` slouží k definici velikosti řádků, nikoli směru toku prvků."
      },
      {
        "id": "css_q28",
        "module": "css_m5",
        "question": "Which CSS property is used to define the keyframes for an animation?",
        "code": null,
        "options": [
          "@transitions",
          "@keyframes",
          "@frames",
          "@animation"
        ],
        "correct": 1,
        "explanation": "At-pravidlo `@keyframes` slouží v CSS k definování klíčových snímků animace. Umožňuje specifikovat změny stylů v jednotlivých fázích animace pomocí procent (např. `0%`, `50%`, `100%`) nebo klíčových slov `from` a `to`. Pravidla jako `@transitions`, `@frames` nebo `@animation` v CSS neexistují (pro přiřazení animace k prvku se používá běžná vlastnost `animation` či `animation-name`, nikoliv at-pravidlo se zavináčem)."
      },
      {
        "id": "css_q29",
        "module": "css_m5",
        "question": "Which CSS rule will apply a transition effect to change the background color of an element over 0.5 seconds when hovered?",
        "code": null,
        "options": [
          ".element {\n    transition: background-color;\n}\n.element:hover {\n    background-color: blue;\n}",
          ".element {\n    transition: background-color 0.5s;\n}\n.element:hover {\n    background-color: blue;\n}",
          ".element {\n    transition: background-color;\n}\n.element {\n    background-color: blue;\n}",
          ".element {\n    transition: color 0.5s;\n}\n.element:hover {\n    background-color: blue;\n}"
        ],
        "correct": 1,
        "explanation": "Zkrácený zápis `transition: background-color 0.5s;` definuje animovanou vlastnost (`background-color`) a délku trvání přechodu (`0.5s`). V kombinaci s pseudotřídou `.element:hover`, která nastavuje cílovou barvu `background-color: blue;`, dojde při najetí myši k plynulé změně barvy pozadí trvající půl sekundy. V možnosti 0 chybí doba trvání (výchozí je 0s, k žádnému přechodu nedojde), možnost 2 nepoužívá stav `:hover` a možnost 3 animuje barvu textu `color` namísto `background-color`."
      },
      {
        "id": "css_q30",
        "module": "css_m5",
        "question": "Which CSS property is used to trigger an animation on an element?",
        "code": null,
        "options": [
          "animation-play",
          "animation-trigger",
          "animation-effect",
          "animation-name"
        ],
        "correct": 3,
        "explanation": "Vlastnost `animation-name` určuje název pravidla `@keyframes`, které definuje jednotlivé fáze animace. Přiřazením tohoto názvu prvku se animace aktivuje a prováže s příslušnými klíčovými snímky (ve spojení s `animation-duration`). Vlastnosti jako `animation-trigger` nebo `animation-effect` v CSS neexistují a pro stav přehrávání slouží `animation-play-state`, nikoli `animation-play`."
      },
      {
        "id": "css_q31",
        "module": "css_m5",
        "question": "Which Bootstrap 5 class creates a responsive grid column that spans 6 out of 12 columns on medium devices and larger?",
        "code": null,
        "options": [
          "col-lg-6",
          "col-md-6",
          "col-6",
          "col-sm-6"
        ],
        "correct": 1,
        "explanation": "V mřížkovém systému Bootstrapu 5 (založeném na 12 sloupcích) představuje zkratka `md` breakpoint pro středně velká zařízení (medium devices, šířka viewportu od 768px). Třída `col-md-6` způsobí, že element zabere 6 z 12 sloupců (tedy polovinu šířky) od velikosti `md` výše. Třída `col-lg-6` cílí až na velká zařízení (`lg` od 992px), `col-sm-6` na malá zařízení (`sm` od 576px) a `col-6` zabírá 6 sloupců univerzálně na všech velikostech bez ohledu na breakpoint."
      },
      {
        "id": "css_q32",
        "module": "css_m5",
        "question": "What is the effect of adding the Bootstrap 5 class .container-fluid to a <div> element?",
        "code": null,
        "options": [
          "The element will be centered with a fixed width.",
          "The element will have a maximum width and will be centered.",
          "The element will have no padding and margin.",
          "The element will take up the full width of the viewport."
        ],
        "correct": 3,
        "explanation": "Třída `.container-fluid` v Bootstrapu 5 vytváří plně responzivní kontejner o šířce 100 % napříč všemi velikostmi viewportu (`width: 100%`). Na rozdíl od základní třídy `.container`, která má pro jednotlivé breakpointy definované pevné maximální šířky (`max-width`) a na větších obrazovkách se centruje s bočními okraji, zabírá `.container-fluid` vždy celou dostupnou šířku okna."
      },
      {
        "id": "css_q33",
        "module": "css_m5",
        "question": "Which Bootstrap 5 class will create a card component with a shadow? Select all that apply.",
        "code": null,
        "options": [
          "card-shadow",
          "card shadow-sm",
          "card shadow",
          "card-shadow-sm",
          "card-shadow-lg"
        ],
        "correct": 1,
        "explanation": "V Bootstrapu 5 se pro vytvoření komponenty karty používá třída `card` a pro stíny slouží samostatné utility třídy jako `shadow-sm`, `shadow` nebo `shadow-lg`. Správnou kombinací dvou tříd oddělených mezerou je zde `card shadow-sm` (karta s jemným stínem). Ostatní možnosti spojené pomlčkou jako `card-shadow`, `card-shadow-sm` nebo `card-shadow-lg` v Bootstrapu vůbec neexistují. Oficiální test Cisco v doprovodném vysvětlení uvádí jako jedinou správnou možnost `card shadow-sm`, zatímco tvary `card shadow` a `card-shadow` označuje za neodpovídající standardním konvencím testovaných tříd."
      },
      {
        "id": "css_q34",
        "module": "css_m5",
        "question": "Which Bootstrap 5 class will make an element visible only on large devices and larger?",
        "code": null,
        "options": [
          "d-none d-lg-block",
          "d-block d-lg-none",
          "d-none d-xl-block",
          "d-none d-md-block"
        ],
        "correct": 0,
        "explanation": "V Bootstrapu 5 se pro podmíněné zobrazení podle velikosti displeje používá princip mobile-first. Třída `d-none` element ve výchozím stavu zcela skryje (`display: none`) pro nejmenší obrazovky. Přidaná třída `d-lg-block` jej od breakpointu `lg` (992px a více) zobrazí jako blokový prvek (`display: block`). Třída `d-block d-lg-none` dělá pravý opak (zobrazuje na malých a skrývá od `lg`), `d-none d-xl-block` zobrazuje až od extra velkých obrazovek (`xl` od 1200px) a `d-none d-md-block` zobrazuje již od středních obrazovek (`md` od 768px)."
      },
      {
        "id": "css_q35",
        "module": "css_m5",
        "question": "You have added Bootstrap's CSS and JS files to your project, but the Bootstrap components are not styling correctly. What is the most likely cause of this issue?",
        "code": null,
        "options": [
          "The Bootstrap CSS and JS files are not correctly linked or loaded in your HTML file.",
          "Bootstrap requires a specific DOCTYPE declaration, and it is missing.",
          "Your HTML file is missing the meta viewport tag.",
          "The browser does not support Bootstrap."
        ],
        "correct": 0,
        "explanation": "Pokud se komponenty Bootstrapu nezobrazují se správným stylem, nejpravděpodobnější příčinou je, že soubory CSS a JS nejsou v HTML dokumentu správně propojeny nebo se nenačetly (např. kvůli chybné relativní cestě, chybějícím značkám <link> nebo <script>, případně síťové chybě při stahování z CDN). Ačkoli značka <meta name=\"viewport\"> je nezbytná pro správné responzivní chování na mobilních zařízeních a deklarace DOCTYPE zajišťuje standardní režim vykreslování v prohlížeči, jejich absence přímo nebrání aplikaci základních vizuálních stylů Bootstrapu. Všechny moderní prohlížeče Bootstrap plně podporují, pokud jsou jeho soubory řádně načteny."
      },
      {
        "id": "css_q36",
        "module": "css_m5",
        "question": "Which Bootstrap class adds a margin to the top side of an element?",
        "code": null,
        "options": [
          "mb-*",
          "m-top-*",
          "mtop-*",
          "mt-*"
        ],
        "correct": 3,
        "explanation": "V frameworku Bootstrap slouží pro přidání vnějšího horního okraje (margin-top) utility třída ve formátu mt-*, kde hvězdička představuje velikost odsazení (např. mt-0, mt-1, mt-2, mt-3, mt-4, mt-5 nebo mt-auto). Písmeno 'm' zastupuje margin a 't' zastupuje top. Třída mb-* nastavuje spodní okraj (margin-bottom), zatímco formáty m-top-* a mtop-* nejsou v Bootstrapu platnými třídami."
      },
      {
        "id": "css_q37",
        "module": "css_m5",
        "question": "Select the correct Bootstrap class to make the following button have a primary color.",
        "code": "<button class=\"btn\">Click me</button>",
        "options": [
          "<button class=\"btn-primary\">Click me</button>",
          "<button class=\"button-primary\">Click me</button>",
          "<button class=\"btn btn-primary\">Click me</button>",
          "<button class=\"btn btn-main\">Click me</button>"
        ],
        "correct": 2,
        "explanation": "V Bootstrapu se tlačítka vytvářejí kombinací základní třídy btn (která definuje rozměry, vnitřní odsazení padding, typografii a základní chování tlačítka) a modifikační třídy, zde btn-primary (která aplikuje primární modrou barvu pozadí a rámečku). Samotná třída btn-primary bez základní btn nevytvoří správně naformátované tlačítko a třídy button-primary či btn-main v Bootstrapu neexistují."
      },
      {
        "id": "css_q38",
        "module": "css_m5",
        "question": "How do you define a variable in Sass?",
        "code": null,
        "options": [
          "var primary-color = #333;",
          "@primary-color: #333;",
          "$primary-color: #333;",
          "--primary-color: #333;"
        ],
        "correct": 2,
        "explanation": "V preprocesoru Sass (SCSS) se proměnné definují znakem dolaru ($), za nímž následuje název proměnné, dvojtečka a její hodnota (např. $primary-color: #333;). Symbol @ pro proměnné využívá preprocesor Less, zápis s dvojitou pomlčkou (--) označuje nativní CSS proměnné (Custom Properties) a klíčové slovo var patří do syntaxe JavaScriptu."
      },
      {
        "id": "css_q39",
        "module": "css_m5",
        "question": "How do you define a variable in Less?",
        "code": null,
        "options": [
          "--primary-color: #333;",
          "var primary-color = #333;",
          "$primary-color: #333;",
          "@primary-color: #333;"
        ],
        "correct": 3,
        "explanation": "V preprocesoru Less se proměnné uvozují symbolem zavináče (@), za kterým následuje název proměnné, dvojtečka a její hodnota (např. @primary-color: #333;). Znak dolaru ($) se používá v preprocesoru Sass, dvojitá pomlčka (--) reprezentuje nativní CSS proměnné a var je klíčové slovo pro proměnné v jazyce JavaScript."
      },
      {
        "id": "css_q40",
        "module": "css_m5",
        "question": "How do you nest CSS selectors in Sass?",
        "code": null,
        "options": [
          "nav > ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}",
          "nav {\n    ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n}",
          "nav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}",
          "nav: {\n    ul: {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n}"
        ],
        "correct": 1,
        "explanation": "V preprocesoru Sass lze selektory zanořovat přímo do těla rodičovského pravidla pomocí složených závorek a odsazení. Pravidlo nav { ul { ... } } přehledně vyjadřuje hierarchii elementů v DOM a při kompilaci do výsledného CSS se automaticky převede na selektor potomka nav ul { ... }. Zápisy nav > ul a nav ul jsou běžné ploché CSS selektory bez zanořování a zápis s dvojtečkami (nav:, ul:) je neplatná syntaxe."
      },
      {
        "id": "css_q41",
        "module": "css_m5",
        "question": "Select the correct Sass mixin to add a rounded corner with a radius of 10px to the following element.",
        "code": "@mixin rounded-corners($radius) {\n    border-radius: $radius;\n}\n\n.box {\n    /* Insert code here */\n}",
        "options": [
          ".box {\n    include rounded-corners(10px);\n}",
          ".box {\n    @extend rounded-corners(10px);\n}",
          ".box {\n    @include rounded-corners(10px);\n}",
          ".box {\n    @mixin rounded-corners(10px);\n}"
        ],
        "correct": 2,
        "explanation": "V preprocesoru Sass se pro aplikaci a vložení nadefinovaného mixinu používá direktiva @include, následovaná názvem mixinu a případnými parametry v závorce (@include rounded-corners(10px);). Direktiva @mixin slouží k deklaraci nového mixinu, nikoli k jeho použití. Direktiva @extend se používá pro dědění stylů z jiných selektorů a nepřijímá parametry. Klíčové slovo include bez úvodního zavináče (@) představuje neplatnou syntaxi."
      },
      {
        "id": "css_q42",
        "module": "css_m5",
        "question": "Web accessibility aims to make digital content usable and understandable for everyone. Which accessibility feature is specifically beneficial for individuals with motor impairments?",
        "code": null,
        "options": [
          "Keyboard navigation.",
          "Screen readers.",
          "Captions for videos.",
          "Image alt text."
        ],
        "correct": 0,
        "explanation": "Ovládání a navigace pomocí klávesnice (Keyboard navigation) je stěžejním prvkem přístupnosti pro uživatele s motorickým (tělesným) postižením. Umožňuje jim pohybovat se po webové stránce a interagovat s formuláři, odkazy či tlačítky pomocí klávesnice nebo specializovaných asistenčních zařízení (např. spínačů či trackballů), aniž by byli závislí na jemné motorice vyžadované myší či dotykovým displejem. Čtečky obrazovky a alternativní texty obrázků (alt text) slouží primárně nevidomým a zrakově postiženým, zatímco titulky u videí pomáhají osobám se sluchovým postižením."
      },
      {
        "id": "css_q43",
        "module": "css_m5",
        "question": "Which statement best describes the Web Content Accessibility Guidelines (WCAG)?",
        "code": null,
        "options": [
          "The WCAG is a guideline for making web content faster and more efficient to load.",
          "The WCAG is a widely accepted set of guidelines for making web content accessible, organized under four principles: perceivable, operable, understandable, and robust.",
          "The WCAG is a legally binding international law requiring all websites to be accessible.",
          "The WCAG is a set of guidelines that only applies to websites in the United States and the European Union."
        ],
        "correct": 1,
        "explanation": "Web Content Accessibility Guidelines (WCAG) jsou mezinárodně uznávaná doporučení a standardy pro tvorbu přístupného webového obsahu pro osoby se zdravotním postižením. Jsou postaveny na čtyřech základních principech (akronym POUR): vnímatelný (perceivable – obsah musí být vnímatelný smysly), ovladatelný (operable – rozhraní musí být ovladatelné např. z klávesnice), srozumitelný (understandable – informace i ovládání musí být jasné) a robustní (robust – obsah musí spolehlivě fungovat napříč různými zařízeními a asistivními technologiemi). WCAG samy o sobě nejsou mezinárodním zákonem (i když z nich legislativy mnoha států vycházejí) a mají celosvětovou platnost, nikoli pouze v USA a EU."
      },
      {
        "id": "css_q44",
        "module": "css_m3",
        "question": "Why is using rem units for font sizes considered a good practice for web accessibility?",
        "code": null,
        "options": [
          "Because rem units are only used for setting margins and paddings.",
          "Because rem units are easier to write than em units.",
          "Because rem units provide scalability, respect user preferences, and ensure consistency across your website.",
          "Because rem units are smaller than px units."
        ],
        "correct": 2,
        "explanation": "Používání jednotek rem (root em) pro velikost písma je doporučeným postupem pro přístupnost webu, protože jednotka rem je relativní vůči kořenovému prvku (<html>), jehož velikost se odvíjí od výchozího nastavení prohlížeče uživatele (obvykle 16px). Pokud si uživatel (např. se zrakovým znevýhodněním) v nastavení prohlížeče zvětší výchozí písmo, texty definované v jednotkách rem se automaticky a proporcionálně zvětší (škálují). Tím je zaručeno respektování uživatelských preferencí a zachování konzistentního layoutu napříč různými zařízeními a rozlišeními."
      },
      {
        "id": "css_q45",
        "module": "css_m5",
        "question": "Which of the following techniques helps ensure that content is accessible to screen readers while being hidden visually?",
        "code": null,
        "options": [
          "Using CSS to move content off-screen with a class like .screen-reader-text.",
          "Using the visibility: hidden; property in CSS.",
          "Using the display: none; property in CSS.",
          "Using JavaScript to dynamically remove the element from the DOM."
        ],
        "correct": 0,
        "explanation": "Odsunutí obsahu mimo viditelnou plochu obrazovky pomocí CSS (např. prostřednictvím třídy .screen-reader-text s pravidly jako position: absolute; left: -9999px; nebo moderním oříznutím clip-path) je standardní technika, která skryje element z pohledu běžného uživatele, ale ponechá jej ve stromu přístupnosti (accessibility tree). Díky tomu mohou čtečky obrazovky obsah přečíst. Naopak vlastnosti display: none; a visibility: hidden; prvek ze stromu přístupnosti zcela vyřadí, takže jej čtečky ignorují. Odstranění elementu z DOM pomocí JavaScriptu by jej ze stránky odstranilo úplně."
      },
      {
        "id": "css_q46",
        "module": "css_m5",
        "question": "What is a recommended naming convention for CSS class names to improve readability and maintainability?",
        "code": null,
        "options": [
          "Use random strings for class names.",
          "Use single-letter class names.",
          "Use class names with mixed upper and lower case letters.",
          "Use BEM (Block Element Modifier) naming convention."
        ],
        "correct": 3,
        "explanation": "Metodika BEM (Block Element Modifier) je populární a široce doporučovaná jmenná konvence pro CSS třídy, která zvyšuje přehlednost a dlouhodobou udržovatelnost kódu. Rozděluje komponenty na samostatné bloky (block), jejich vnitřní elementy (block__element) a modifikátory stavu či variant (block--modifier). Tím jasně definuje hierarchii a účel jednotlivých tříd a eliminuje konflikty ve specificitě. Používání jednopísmenných názvů, náhodných řetězců nebo nekonzistentního míchání velkých a malých písmen kód znepřehledňuje a ztěžuje jeho správu."
      },
      {
        "id": "css_q47",
        "module": "css_m2",
        "question": "Which of the following practices helps improve CSS performance?",
        "code": null,
        "options": [
          "Use very specific selectors for all elements.",
          "Use inline styles for all elements.",
          "Load all CSS files synchronously.",
          "Minimize the use of universal selectors."
        ],
        "correct": 3,
        "explanation": "Univerzální selektory (např. * { ... }) aplikují pravidla na úplně každý element na stránce, což může významně zpomalit výkon prohlížeče při vyhodnocování stylů, zejména u rozsáhlých stránek s velkým množstvím DOM uzlů. Minimalizace univerzálních selektorů umožňuje prohlížeči efektivnější párování pravidel. Použití inline stylů u všech prvků se nedoporučuje kvůli redundanci a nemožnosti cachování, synchronní načítání stylů blokuje vykreslení stránky (render-blocking) a přehnaně specifické selektory prodlužují dobu výpočtu stylů."
      },
      {
        "id": "css_q48",
        "module": "css_m5",
        "question": "Which of the following is the best practice for creating responsive designs in CSS?",
        "code": null,
        "options": [
          "Use fixed pixel widths for all elements.",
          "Use table-based layouts.",
          "Use CSS Grid and Flexbox for layout.",
          "Use only media queries with fixed breakpoints."
        ],
        "correct": 2,
        "explanation": "CSS Grid a Flexbox jsou moderní systémy rozvržení přímo navržené pro tvorbu responzivních a pružných layoutů. Umožňují prvkům dynamicky přizpůsobovat své rozměry i umístění podle velikosti obrazovky a rodičovského kontejneru. Pevné šířky v pixelech naopak způsobují přetékání a neohebnost na malých displejích, tabulkové rozvržení je zastaralé a neflexibilní a spoléhání se výhradně na pevné breakpointy v media queries bez flexibilních systémů neposkytuje plynulou adaptabilitu."
      },
      {
        "id": "css_q49",
        "module": "css_m5",
        "question": "Which practice enhances the maintainability of your CSS code?",
        "code": null,
        "options": [
          "Use !important frequently to override styles.",
          "Organize CSS into modular components.",
          "Write all CSS rules in a single large file.",
          "Use IDs for all styling."
        ],
        "correct": 1,
        "explanation": "Organizace CSS do modulárních komponent (např. pomocí metodiky BEM nebo komponentních CSS modulů) pomáhá rozdělit styly do znovupoužitelných a přehledně oddělených celků. Kód se díky tomu snadněji udržuje, rozšiřuje a aktualizuje bez rizika nechtěných vedlejších vlivů. Psaní všech stylů do jednoho obrovského souboru zhoršuje navigaci a orientaci, zatímco stylování pomocí ID a časté používání !important způsobuje neřešitelné problémy se specificitou pravidel."
      },
      {
        "id": "css_q50",
        "module": "css_m1",
        "question": "Why is it recommended to avoid using inline styles in CSS?",
        "code": null,
        "options": [
          "Inline styles are automatically overridden by external stylesheets.",
          "Inline styles are limited to defining font sizes only.",
          "Inline styles make it difficult to maintain and update styles across multiple elements.",
          "Inline styles are not supported by all browsers."
        ],
        "correct": 2,
        "explanation": "Inline styly se aplikují přímo na jednotlivé HTML elementy v atributu style. Pokud je potřeba styl upravit (např. změnit barvu tlačítek napříč celým webem), je nutné provést změnu v každém elementu zvlášť, což vede k redundanci, neúnosné náročnosti údržby a zvětšení velikosti HTML souboru. Externí kaskádové styly naopak umožňují centralizovanou správu vzhledu a oddělení obsahu od prezentace. Inline styly navíc nejsou přebíjeny externími styly (mají vyšší specificitu) a ačkoliv je všechny prohlížeče podporují, jsou z hlediska architektury nevhodné."
      }
    ]
  },
  "js": {
    "id": "js",
    "category": "web",
    "categoryName": "Webové aplikace",
    "title": "Cisco Networking Academy: JavaScript Essentials 1",
    "subtitle": "Příprava na certifikaci JSE – Certified Entry-Level JavaScript Programmer (JSE-40-01)",
    "badge": "JavaScript Essentials 1",
    "icon": "fab fa-js-square",
    "color": "#F7DF1E",
    "passScore": 70,
    "timeLimit": 45,
    "modules": [
      {
        "id": "js_m1",
        "name": "Blok 1: Úvod do JavaScriptu a prostředí"
      },
      {
        "id": "js_m2",
        "name": "Blok 2: Proměnné, datové typy a přetypování"
      },
      {
        "id": "js_m3",
        "name": "Blok 3: Operátory a interakce s uživatelem"
      },
      {
        "id": "js_m4",
        "name": "Blok 4: Složené typy (Objekty a pole)"
      },
      {
        "id": "js_m5",
        "name": "Blok 5: Řízení toku (Podmínky a cykly)"
      },
      {
        "id": "js_m6",
        "name": "Blok 6: Funkce, výjimky a ladění"
      }
    ],
    "examQuestionCount": 30,
    "questions": [
      {
        "id": "js_q01",
        "module": "js_m1",
        "question": "Entering about:blank in the address bar of your browser will:",
        "code": null,
        "options": [
          "generate a page with information about the browser's status.",
          "generate and load a minimal blank HTML page into the current tab.",
          "clear all inputs on the current page.",
          "open a tab with information about your browser."
        ],
        "correct": 1,
        "explanation": "Na snímku je teoretická otázka zjišťující chování webového prohlížeče při zadání adresy about:blank do adresního řádku.\n\nOficiální vysvětlení Cisco: \"Entering \"about:blank\" in the address bar of your browser will load a blank page. The \"about:blank\" URL is a special URL that represents an empty or blank page. When you navigate to \"about:blank\", the browser will display a blank page with no content.\"\n\nPodrobný rozbor:\n- Správná volba: \"generate and load a minimal blank HTML page into the current tab.\" Pseudoprotokol about: slouží pro interní stavy a funkce prohlížeče. Speciální URI about:blank vygeneruje a načte zcela prázdný, minimální HTML dokument přímo do aktivní záložky. Využívá se zejména pro čisté vývojové testování skriptů v konzoli bez interferencí existujícího DOMu nebo stylů.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"generate a page with information about the browser's status.\": K informacím o konfiguraci nebo stavu slouží jiné adresy (např. about:config, chrome://version apod.).\n  - \"clear all inputs on the current page.\": Načtení about:blank neslouží k promazání formulářových polí existující stránky, ale nahradí celou stránku prázdným dokumentem.\n  - \"open a tab with information about your browser.\": about:blank neotevírá novou informační záložku, ale načítá prázdnou stránku v aktuální záložce."
      },
      {
        "id": "js_q02",
        "module": "js_m2",
        "question": "Analyze the following code:\n\nWhat will appear to the console as a result?",
        "code": "let id = \"100\";\n{\n  let id = 200;\n  id = id + 1;\n  console.log(id);\n}",
        "options": [
          "101",
          "201",
          "200",
          "1001"
        ],
        "correct": 1,
        "explanation": "Na snímku je úryvek kódu testující rozsah platnosti proměnných (scope) a stínění (variable shadowing) při použití klíčového slova let.\n\nOficiální vysvětlení Cisco:\n\"Let's analyze the code step by step:\n1. The variable id is declared and initialized with the string value \"100\" using the let keyword in the global scope.\n2. A block of code is defined using curly braces {}. This block creates a new block scope.\n3. Inside the block, a new variable id is declared and initialized with the value 200 using the let keyword. This creates a new block-scoped variable id that shadows the outer variable id.\n4. The value of the block-scoped id is updated by adding 1 to it using the id = id + 1 statement.\n5. The resulting value of id, which is 201, is printed to the console using console.log(id).\nSince the console.log(id) statement is inside the block, it refers to the block-scoped variable id, which has a value of 201 after adding 1 to 200. Therefore, when the code is executed, 201 will appear in the console.\"\n\nPodrobný rozbor:\n- Správná volba: \"201\". Klíčové slovo let má blokový rozsah platnosti (block scope). Vnořený blok { ... } zavádí novou lokální proměnnou id s hodnotou 200, která zastíní (shadows) vnější proměnnou id se stringem \"100\". Následný příkaz id = id + 1 provede číselné sčítání 200 + 1 = 201. Příkaz console.log(id) je volán uvnitř tohoto bloku, takže přistupuje k lokální proměnné a vypíše 201.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"101\": Vnější proměnná \"100\" je v bloku zastíněna a navíc se jedná o řetězec, takže sčítáním by vzniklo \"1001\", nikoliv 101.\n  - \"200\": Původní hodnota lokální proměnné před provedením inkrementace id = id + 1.\n  - \"1001\": Výsledek zřetězení vnějšího stringu \"100\" s číslem 1, pokud by uvnitř bloku nebyla deklarována nová proměnná."
      },
      {
        "id": "js_q03",
        "module": "js_m2",
        "question": "Select a set of data types, containing only complex types:",
        "code": null,
        "options": [
          "Array, Object",
          "Object, String",
          "Array, Object, String",
          "Boolean, Number, Bigint"
        ],
        "correct": 0,
        "explanation": "Na snímku je teoretická otázka zjišťující znalost rozdělení datových typů v JavaScriptu na primitivní a složené (komplexní / referenční).\n\nOficiální vysvětlení Cisco:\n\"In JavaScript, complex data types, also known as reference types, include objects, arrays, and functions. Here is a set of complex data types:\n1. Object: An object is an unordered collection of key-value pairs, where each value can be of any data type, including other complex types. Objects are created using curly braces {} and can be used to represent more complex data structures.\n2. Array: An array is an ordered list of values. It can hold elements of any data type, including other complex types. Arrays are created using square brackets [] and provide methods for manipulating and accessing their elements.\n3. Function: A function is a reusable block of code that can be executed when called. Functions are created using the function keyword or by using arrow function syntax (=>). They can take parameters, perform actions, and return values.\"\n\nPodrobný rozbor:\n- Správná volba: \"Array, Object\". JavaScript definuje primitivní typy (Number, BigInt, String, Boolean, Symbol, undefined, null) a komplexní/referenční typy (Object a jeho specializované formy jako Array a Function). Pouze dvojice Array a Object obsahuje výhradně komplexní typy.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"Object, String\": String (řetězec) je v JavaScriptu primitivní neměnný (immutable) datový typ.\n  - \"Array, Object, String\": Obsahuje primitivní typ String.\n  - \"Boolean, Number, Bigint\": Všechny tři uvedené typy jsou čistě primitivní datové typy."
      },
      {
        "id": "js_q04",
        "module": "js_m2",
        "question": "We can replace the declaration let x = 3e-3; with:",
        "code": null,
        "options": [
          "let x = 3000;",
          "let x = 0.0003;",
          "let x = 0.003;",
          "let x = 0.333;"
        ],
        "correct": 2,
        "explanation": "Na snímku je otázka zaměřená na vědecký (exponenciální) zápis číselných literálů v JavaScriptu: let x = 3e-3;.\n\nOficiální vysvětlení Cisco: \"The correct replacement for the declaration let x = 3e-3; would be: let x = 0.003;\"\n\nPodrobný rozbor:\n- Správná volba: \"let x = 0.003;\". Zápis se znakem e představuje mocninu deseti: 3e-3 odpovídá 3 × 10^-3 = 3 / 1000 = 0.003. Desetinná čárka se posouvá o 3 místa vlevo.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"let x = 3000;\": Odpovídá kladnému exponentu 3 × 10^3 (zápis 3e3 nebo 3e+3).\n  - \"let x = 0.0003;\": Odpovídá posunu o 4 místa, tedy 3 × 10^-4 (zápis 3e-4).\n  - \"let x = 0.333;\": Desetinný přibližný zápis zlomku 1/3, nikoliv exponenciální zápis 3e-3."
      },
      {
        "id": "js_q05",
        "module": "js_m2",
        "question": "Using the string interpolation technique, we can create the string:\n\nand store it in the msg variable using the command:",
        "code": "\"I do not like travelling by plane\"",
        "options": [
          "let means = \"plane\";\nlet msg = \"I do not like travelling by ${ means }\";",
          "let means = \"plane\";\nlet msg = 'I do not like travelling by \\{ means \\}';",
          "let means = \"plane\";\nlet msg = `I do not like travelling by {means}`;",
          "let means = \"plane\";\nlet msg = `I do not like travelling by ${means}`;"
        ],
        "correct": 3,
        "explanation": "Na snímku je zadání vyžadující vytvoření řetězce \"I do not like travelling by plane\" pomocí techniky interpolace řetězců (template literals).\n\nOficiální vysvětlení Cisco:\n\"To create the string \"I do not like travelling by plane\" using string interpolation and store it in the msg variable, the correct command would be:\nlet means = \"plane\";\nlet msg = `I do not like travelling by ${means}`;\nString interpolation in JavaScript is achieved by using backticks (```) as the string delimiter. Within the backticks, you can include expressions or variables by wrapping them in ${}. The expression or variable within ${} will be evaluated and its value will be inserted into the resulting string.\nIn this case, the variable means is assigned the value \"plane\". The string interpolation syntax ${means} is used within backticks to insert the value of means into the string. Thus, the resulting value of msg will be \"I do not like travelling by plane\".\"\n\nPodrobný rozbor:\n- Správná volba: \"let means = \"plane\";\\nlet msg = `I do not like travelling by ${means}`;\" Šablonové literály v moderním JavaScriptu (ES6+) vyžadují obalení textu do zpětných apostrofů (backticks: ` `) a vložení proměnné nebo výrazu do bloku ${ ... }.\n- Proč jsou ostatní možnosti nesprávné:\n  - Varianta s dvojitými uvozovkami \"...\": Dvojité uvozovky interpolaci nepodporují a výraz ${ means } zachovají jako doslovný text.\n  - Varianta s jednoduchými uvozovkami '...': Jednoduché uvozovky interpolaci nepodporují a zpětná lomítka escapují složené závorky bez jakéhokoli vložení proměnné.\n  - Varianta s `...{means}`: I když používá zpětné apostrofy, chybí symbol dolaru $, takže {means} se nevyhodnotí jako proměnná, ale zůstane jako běžný text."
      },
      {
        "id": "js_q06",
        "module": "js_m4",
        "question": "We declare a movie object, with two fields: title and year:\n\nTo change the value of the title field to \"Matrix\" we need to perform:",
        "code": "let movie = {\n  title: \"Life\",\n  year: 1999",
        "options": [
          "movie.title = \"Matrix\";",
          "movie{title} = \"Matrix\";",
          "movie[title] = \"Matrix\";",
          "title->movie = \"Matrix\";"
        ],
        "correct": 0,
        "explanation": "Na snímku je deklarace objektu movie s vlastnostmi title a year a otázka na způsob změny hodnoty vlastnosti title na \"Matrix\".\n\nOficiální vysvětlení Cisco:\n\"In JavaScript, you can access and modify object properties using dot notation (object.property). In this case, movie.title accesses the title property of the movie object, and the assignment = is used to change its value to \"Matrix\". After executing the command, the title field in the movie object will be updated to \"Matrix\".\nmovie.title = \"Matrix\";\"\n\nPodrobný rozbor:\n- Správná volba: movie.title = \"Matrix\";. K vlastnostem objektů v JavaScriptu lze přistupovat a modifikovat je buď tečkovou notací (objekt.vlastnost), nebo závorkovou notací s řetězcem (objekt[\"vlastnost\"]). Tečková notace s operátorem přiřazení = je standardní a nejčastější způsob.\n- Proč jsou ostatní možnosti nesprávné:\n  - movie{title} = \"Matrix\";: V JavaScriptu neplatná syntaxe; složené závorky se pro přístup k vlastnostem nepoužívají.\n  - movie[title] = \"Matrix\";: V hranatých závorkách bez uvozovek se výraz title vyhodnocuje jako proměnná. Protože proměnná title nebyla deklarována, vyvolá tento kód ReferenceError.\n  - title->movie = \"Matrix\";: Šipkový operátor -> v JavaScriptu neexistuje (známý z jazyků C/C++ nebo PHP)."
      },
      {
        "id": "js_q07",
        "module": "js_m4",
        "question": "You declare the following array of animals: let animals = [\"canary\", \"dog\", \"cat\"]; . Then, you call the method animals.push(\"hamster\"); . What will the animals array look like after calling the method?",
        "code": null,
        "options": [
          "[\"hamster\", \"canary\", \"dog\", \"cat\"]",
          "[\"canary\", \"dog\", \"cat\"]",
          "[\"hamster\"]",
          "[\"canary\", \"dog\", \"cat\", \"hamster\"]"
        ],
        "correct": 3,
        "explanation": "Na snímku je otázka zkoumající chování vestavěné metody Array.prototype.push().\n\nOficiální vysvětlení Cisco:\n\"After calling the animals.push(\"hamster\"); method, the animals array will look like this:\n[\"canary\", \"dog\", \"cat\", \"hamster\"]\nThe push() method in JavaScript is used to add one or more elements to the end of an array. In this case, the method animals.push(\"hamster\") adds the string value \"hamster\" to the end of the animals array. As a result, the array is modified, and \"hamster\" becomes the last element in the array.\"\n\nPodrobný rozbor:\n- Správná volba: [\"canary\", \"dog\", \"cat\", \"hamster\"]. Metoda push() vkládá nový prvek (nebo prvky) na konec pole a přímo modifikuje původní instanci pole. Nový prvek \"hamster\" je tedy přidán za \"cat\".\n- Proč jsou ostatní možnosti nesprávné:\n  - [\"hamster\", \"canary\", \"dog\", \"cat\"]: Prvek na začátek pole vkládá metoda unshift(), nikoli push().\n  - [\"canary\", \"dog\", \"cat\"]: Původní nezměněné pole; metoda push() pole mutuje.\n  - [\"hamster\"]: Pole obsahující pouze nový prvek."
      },
      {
        "id": "js_q08",
        "module": "js_m1",
        "question": "A JavaScript code includes the console.log(\"http://somethingNew.org\"); command. Its execution will:",
        "code": null,
        "options": [
          "send a log with information about the currently executed script to the indicated address http://somethingNew.org.",
          "display on the console information about the progress of the http://somethingNew.org page loading.",
          "display the following message on the console: \"http://somethingNew.org\" .",
          "cause the page http://somethingNew.org to be loaded into the browser."
        ],
        "correct": 2,
        "explanation": "Na snímku je otázka testující účel a chování metody console.log() při předání URL adresy ve formě řetězce.\n\nOficiální vysvětlení Cisco:\n\"When the JavaScript code console.log(\"http://somethingNew.org\"); is executed, it will print the string \"http://somethingNew.org\" to the console.\nThe console.log() function in JavaScript is used to output messages to the console. In this case, the code includes console.log(\"http://somethingNew.org\"), which specifies the string \"http://somethingNew.org\" as the argument to be logged. When the code is executed, the specified string will be displayed in the console. It does not perform any other action apart from printing the message to the console output.\"\n\nPodrobný rozbor:\n- Správná volba: \"display the following message on the console: \"http://somethingNew.org\" .\". Metoda console.log() slouží k ladění a výpisu dat do vývojářské konzole. Argument je textový řetězec, který je jednoduše vypsán. Žádná síťová komunikace ani navigace se neprovádí.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"send a log with information...\": console.log() neodesílá data po síti (k odesílání logů slouží např. fetch(), XMLHttpRequest nebo navigator.sendBeacon()).\n  - \"display on the console information about the progress...\": Metoda nesleduje načítání stránky.\n  - \"cause the page http://somethingNew.org to be loaded into the browser.\": Pro načtení externí stránky slouží přesměrování okna, např. window.location.href = \"http://...\";."
      },
      {
        "id": "js_q09",
        "module": "js_m4",
        "question": "Analyze the code snippet:\n\nWhat value will the index variable have?",
        "code": "let winter = [\"December\", \"January\", \"February\"]; let index = winter.indexOf(\"February\");",
        "options": [
          "3",
          "\"February\"",
          "2",
          "1"
        ],
        "correct": 2,
        "explanation": "Na snímku je kódové zadání zkoumající metodu Array.prototype.indexOf() v poli řetězců.\n\nOficiální vysvětlení Cisco:\n\"The code snippet let winter = [\"December\", \"January\", \"February\"]; let index = winter.indexOf(\"February\"); will assign the value 2 to the index variable.\nHere's a breakdown of the code:\n1. An array winter is declared and initialized with three elements: \"December\", \"January\", and \"February\".\n2. The indexOf() method is called on the winter array with the argument \"February\". This method searches the array for the specified element and returns the index of the first occurrence of that element. If the element is not found, it returns -1.\n3. Since \"February\" is present in the winter array, the indexOf() method will find it and return the index 2, indicating that \"February\" is located at the third position in the array.\n4. The value 2 is assigned to the index variable using the let index = statement.\nTherefore, after executing the code, the index variable will have the value 2.\"\n\nPodrobný rozbor:\n- Správná volba: \"2\". V JavaScriptu jsou pole indexována od nuly (0-indexed). První prvek \"December\" má index 0, druhý \"January\" index 1 a třetí \"February\" index 2. Metoda indexOf() vyhledá první výskyt prvku a vrátí jeho index, tedy číslo 2.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"3\": Pořadové číslo (1-based), nikoliv index od 0.\n  - \"\"February\"\": Metoda indexOf() vrací číselný index, nikoli samotnou hodnotu prvku.\n  - \"1\": Index druhého prvku (\"January\")."
      },
      {
        "id": "js_q10",
        "module": "js_m4",
        "question": "In the daysOfWeek variable, you place an array with the names of the days of the week. Which method will you call to reverse the order of the array elements.",
        "code": null,
        "options": [
          "daysOfWeek.reverse();",
          "daysOfWeek.order(-1);",
          "daysOfWeek = reverse(daysOfWeek);",
          "daysOfWeek.invert();"
        ],
        "correct": 0,
        "explanation": "Na snímku je otázka zjišťující název a syntaxi metody pro obrácení pořadí prvků v poli.\n\nOficiální vysvětlení Cisco:\n\"To reverse the order of the elements in the daysOfWeek array, you can call the reverse() method.\"\n\nPodrobný rozbor:\n- Správná volba: daysOfWeek.reverse();. Metoda Array.prototype.reverse() obrátí pořadí prvků pole na místě (in-place) a vrátí odkaz na totéž pole.\n- Proč jsou ostatní možnosti nesprávné:\n  - daysOfWeek.order(-1);: Metoda order() v JavaScriptu neexistuje.\n  - daysOfWeek = reverse(daysOfWeek);: Samostatná globální funkce reverse() v JavaScriptu neexistuje, jedná se o instanční metodu pole.\n  - daysOfWeek.invert();: Metoda invert() pro pole v JavaScriptu neexistuje."
      },
      {
        "id": "js_q11",
        "module": "js_m3",
        "question": "Review the following code:\n\nWhat will appear on the console as a result?",
        "code": "let msg1 = 'hello';\nlet msg2 = msg1.slice(-1);\nconsole.log(msg2 ? msg2 : msg2 + msg1);",
        "options": [
          "ohello",
          "hello",
          "h",
          "o"
        ],
        "correct": 3,
        "explanation": "Na snímku je kód kombinující metodu slice() se záporným indexem, ternární operátor a vyhodnocení pravdivostní hodnoty (truthy/falsy).\n\nOficiální vysvětlení Cisco:\n\"The code snippet will display the letter \"o\" on the console as a result.\nLet's break down the code:\n1. The variable msg1 is declared and assigned the string value 'hello'.\n2. The variable msg2 is assigned the result of msg1.slice(-1). The slice() method is used to extract a portion of a string. In this case, -1 as the parameter means to extract the last character of msg1, which is 'o'.\n3. The console.log() statement is called, which outputs a value to the console.\n4. The expression msg2 ? msg2 : msg2 + msg1 is evaluated and passed as the argument to console.log().\n5. In this expression, msg2 is truthy since it contains the letter 'o'. Therefore, the result of the expression will be the value of msg2, which is 'o'.\n6. As a result, the letter 'o' will be displayed on the console.\nSo, when the code is executed, the console will display the letter 'o'.\"\n\nPodrobný rozbor:\n- Správná volba: \"o\".\n  1. msg1.slice(-1) vrací poslední znak řetězce 'hello', tedy 'o'. Proměnná msg2 tedy obsahuje 'o'.\n  2. V ternárním operátoru msg2 ? msg2 : msg2 + msg1 je podmínka msg2 neprázdný řetězec, což je truthy hodnota (vyhodnotí se jako true).\n  3. Proto se vybere první větev ternárního operátoru, což je hodnota msg2 ('o'). Druhá větev msg2 + msg1 ('ohello') se vůbec neprovede.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"ohello\": Hodnota alternativní (falsy) větve, která se neprovede, protože msg2 není prázdný řetězec.\n  - \"hello\": Celý původní řetězec msg1.\n  - \"h\": První znak řetězce (získal by se např. slice(0, 1) nebo charAt(0))."
      },
      {
        "id": "js_q12",
        "module": "js_m3",
        "question": "Analyze the following code:\n\nWhat value will the test variable have if, after running the code, we immediately press the OK button on the newly created dialog?",
        "code": "let test = prompt(\"Run\", \"code\");",
        "options": [
          "code",
          "true",
          "Run",
          "OK"
        ],
        "correct": 0,
        "explanation": "Na snímku je kód volající dialogové okno prompt() s výchozí hodnotou: let test = prompt(\"Run\", \"code\"); a otázka na výsledek při bezprostředním stisku OK.\n\nOficiální vysvětlení Cisco:\n\"The value of the test variable will depend on the user's input when the prompt dialog appears. If the user clicks the OK button, the test variable will be assigned the string (\"code\"). Since it is defined in the code. Therefore, the test variable will have the value \"code\".\"\n\nPodrobný rozbor:\n- Správná volba: \"code\". Funkce prompt(message, defaultValue) zobrazí dialog se zadanou výzvou (message = \"Run\") a předvyplněným vstupním polem (defaultValue = \"code\"). Pokud uživatel hodnotu nepřepíše a klikne na tlačítko OK, funkce vrátí obsah vstupního pole, což je výchozí řetězec \"code\". Pokud by uživatel kliknul na Cancel (Zrušit), vrátilo by se null.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"true\": Funkce prompt() nikdy nevrací boolean true; boolean vrací funkce confirm().\n  - \"Run\": První argument, což je popisek (výzva) zobrazená uživateli nad textovým polem.\n  - \"OK\": Název potvrzovacího tlačítka, nikoliv hodnota vrácená dialogem."
      },
      {
        "id": "js_q13",
        "module": "js_m3",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of its execution?",
        "code": "let x = false || true;\nlet y = \"true\" && \"false\";\nlet z = false && true;\nconsole.log(`${x} ${y} ${z}`);",
        "options": [
          "false false true",
          "false true true",
          "false false false",
          "true false false"
        ],
        "correct": 3,
        "explanation": "Na snímku je kód demonstrující chování logických operátorů || (OR) a && (AND) s boolean hodnotami a řetězci.\n\nOficiální vysvětlení Cisco:\n\"Let's break down the code:\n• The variable x is assigned the value of the logical OR operation between false and true. In a logical OR operation, if any of the operands is true, the result will be true. In this case, since the second operand (true) is true, the result of false || true is true, which is assigned to x.\n• The variable y is assigned the value of the logical AND operation between the string \"true\" and the string \"false\". In a logical AND operation, if all operands are true, the result will be the last operand. In this case, since both \"true\" and \"false\" are considered truthy values, the result of \"true\" && \"false\" is \"false\", which is assigned to y.\n• The variable z is assigned the value of the logical AND operation between false and true. In a logical AND operation, if any of the operands is false, the result will be false. In this case, since the first operand (false) is false, the result of false && true is false, which is assigned to z.\n• The console.log() statement is called to output a value to the console.\n• The expression ${x} ${y} ${z} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of x, y, and z into a single string with spaces in between.\n• As a result, the console will display true false false.\"\n\nPodrobný rozbor:\n- Správná volba: \"true false false\".\n  1. let x = false || true; -> Operátor || hledá první pravdivou hodnotu. Druhý operand je boolean true, takže x = true.\n  2. let y = \"true\" && \"false\"; -> Oba operandy jsou neprázdné řetězce, tedy truthy. Operátor && při pravdivém prvním operandu vrátí hodnotu druhého operandu, takže y = \"false\".\n  3. let z = false && true; -> Operátor && najde na prvním místě false (falsy) a okamžitě jej zkráceně vrátí, takže z = false.\n  4. Výsledný řetězec v console.log(`${x} ${y} ${z}`) je \"true false false\".\n- Proč jsou ostatní možnosti nesprávné:\n  - Všechny ostatní varianty chybně určují výsledek jednotlivých logických operací (např. obracejí hodnotu x na false nebo z na true)."
      },
      {
        "id": "js_q14",
        "module": "js_m3",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of its execution?",
        "code": "let a = true && 20;\nlet b = 0 || 20\nlet c = 0 && 20;\nconsole.log(`${a} ${b} ${c}`);",
        "options": [
          "20 20 0",
          "true true false",
          "true 20 0",
          "1 1 0"
        ],
        "correct": 0,
        "explanation": "Na snímku je kód demonstrující zkrácené vyhodnocování (short-circuit evaluation) logických operátorů && a || s ne-boolean operandy.\n\nOficiální vysvětlení Cisco:\n\"Let's break down the code:\n1. The variable a is assigned the value of the logical AND operation between true and 20. In a logical AND operation, if all operands are true, the result will be the last operand. In this case, both true and 20 are considered truthy values, so the result of true && 20 is 20, which is assigned to a.\n2. The variable b is assigned the value of the logical OR operation between 0 and 20. In a logical OR operation, if any of the operands is true, the result will be the first truthy operand encountered. In this case, 0 is considered a falsy value, so the result of 0 || 20 is 20, which is assigned to b.\n3. The variable c is assigned the value of the logical AND operation between 0 and 20. In a logical AND operation, if any of the operands is false, the result will be false. In this case, 0 is considered a falsy value, so the result of 0 && 20 is 0, which is assigned to c.\n4. The console.log() statement is called to output a value to the console.\n5. The expression ${a} ${b} ${c} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, and c into a single string with spaces in between.\n6. As a result, the console will display 20 20 0.\"\n\nPodrobný rozbor:\n- Správná volba: \"20 20 0\".\n  - V JavaScriptu operátory && a || nevrací pouze boolean, ale přímo hodnotu operandu, na kterém vyhodnocování skončilo:\n    - a = true && 20: První operand true je truthy, proto && vrací hodnotu druhého operandu -> 20.\n    - b = 0 || 20: Číslo 0 je falsy, proto || pokračuje a vrací první nalezenou truthy hodnotu -> 20.\n    - c = 0 && 20: Číslo 0 je falsy, proto se && okamžitě zastaví a vrátí tuto falsy hodnotu -> 0.\n  - Spojením do textu získáme \"20 20 0\".\n- Proč jsou ostatní možnosti nesprávné:\n  - \"true true false\": Mylná představa, že logické operátory v JavaScriptu vždy přetypují výsledek na boolean.\n  - \"true 20 0\": Kombinace předpokládající, že první výraz vrátí true, ačkoliv vrací 20.\n  - \"1 1 0\": Předpoklad, že čísla a boolean hodnoty se konvertují na bity 0 a 1."
      },
      {
        "id": "js_q15",
        "module": "js_m3",
        "question": "Examine the following code:\n\nWhat will appear on the console as a result?",
        "code": "let a = 20 + \"10\";\nlet b = 20 + +\"10\";\nlet c = 20 + -\"10\" + \"10\";\nlet d = \"10\" - \"10\" + \"100\";\nlet e = \"A\" - \"B\" + 0xA;\nconsole.log(`${a}, ${b}, ${c}, ${d}, ${e}`);",
        "options": [
          "2010, 2010, 20-1010, 0100, NaN",
          "30, 30, 20, 100, 2",
          "30, 31, 39, 100, NaN",
          "2010, 30, 1010, 0100, NaN"
        ],
        "correct": 3,
        "explanation": "Na snímku je komplexní kód testující prioritu unárních (+, -) a binárních operátorů a pravidla implicitní konverze typů (type coercion) v JavaScriptu.\n\nOficiální vysvětlení Cisco:\n\"Let's break down the code:\n1. The variable a is assigned the result of the concatenation between the string \"20\" and the string \"10\". When the + operator is used with a string, it performs string concatenation. So, \"20\" + \"10\" results in the string \"2010\", which is assigned to a.\n2. The variable b is assigned the result of the addition between the number 20 and the numeric conversion of the string \"10\". The unary + operator before \"10\" converts it into a number, resulting in 20 + 10, which is 30, assigned to b.\n3. The variable c is assigned the result of the addition between the number 20 and the negated numeric conversion of the string \"10\", followed by the concatenation with the string \"10\". The unary - operator before \"10\" converts it into a number and negates it, resulting in -10. Then, 20 + (-10) is 10, which is concatenated with the string \"10\", resulting in \"1010\", assigned to c.\n4. The variable d is assigned the result of the subtraction between the numeric conversions of the strings \"10\" and \"10\", followed by the concatenation with the string \"100\". Both \"10\" and \"10\" are converted into numbers, resulting in 10 - 10, which is 0. Then, \"0\" + \"100\" is \"0100\", assigned to d.\n5. The variable e is assigned the result of the subtraction between the numeric conversions of the strings \"A\" and \"B\", followed by the addition of 0xA (which is 10 in hexadecimal). Both \"A\" and \"B\" cannot be converted into valid numbers, so the result is NaN. Then, NaN + 10 is still NaN, assigned to e.\n6. The console.log() statement is called to output the values to the console.\n7. The expression ${a}, ${b}, ${c}, ${d}, ${e} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, c, d, and e into a single string separated by commas.\n8. As a result, the console will display \"2010, 30, 1010, 0100, NaN\".\"\n\nPodrobný rozbor:\n- Správná volba: \"2010, 30, 1010, 0100, NaN\".\n  - a = 20 + \"10\": Binární + s řetězcem způsobí zřetězení -> \"2010\".\n  - b = 20 + +\"10\": Unární + před \"10\" převede řetězec na číslo 10. Následně 20 + 10 = 30.\n  - c = 20 + -\"10\" + \"10\": Unární - převede \"10\" na číslo -10. Zleva doprava: 20 + (-10) = 10. Dále 10 + \"10\" zřetězí číslo a řetězec -> \"1010\".\n  - d = \"10\" - \"10\" + \"100\": Operátor odčítání - provede číselný převod: 10 - 10 = 0. Následuje 0 + \"100\", což je zřetězení čísla se stringem -> \"0100\".\n  - e = \"A\" - \"B\" + 0xA: Řetězce \"A\" a \"B\" nelze převést na čísla, odčítání vrátí NaN. NaN sečteno s jakýmkoliv číslem (0xA = 10) je opět NaN.\n  - Spojení přes šablonový literál s čárkami: \"2010, 30, 1010, 0100, NaN\".\n- Proč jsou ostatní možnosti nesprávné:\n  - Všechny ostatní varianty obsahují chybné vyhodnocení unárních operátorů nebo záměnu matematického sčítání se zřetězením řetězců."
      },
      {
        "id": "js_q16",
        "module": "js_m5",
        "question": "Which of the following loop instructions checks the loop continuation condition only after the iteration has been completed?",
        "code": null,
        "options": [
          "for ... in",
          "for",
          "while",
          "do ... while"
        ],
        "correct": 3,
        "explanation": "Smyčka do ... while je cyklus s podmínkou na konci (tzv. post-test loop). Její tělo se vždy provede alespoň jednou, a teprve po dokončení iterace se kontroluje řídicí podmínka ve while (...). Pokud je podmínka pravdivá (true), cyklus pokračuje další iterací. Ostatní smyčky (for, while, for ... in) jsou cykly s podmínkou na začátku (pre-test loops), kde se podmínka ověřuje před provedením těla smyčky – pokud je podmínka neplatná již na začátku, tělo se neprovede ani jednou.\n\nOficiální vysvětlení Cisco: The \"do ... while\" loop instruction checks the loop continuation condition only after the iteration has been completed. In the \"do ... while\" loop, the code block is executed first, and then the condition is checked. If the condition evaluates to true, the loop continues executing. This guarantees that the code block is executed at least once, regardless of the condition."
      },
      {
        "id": "js_q17",
        "module": "js_m6",
        "question": "The following function using a function expression has been defined:\n\nWhat could the definition of the corresponding arrow function look like?",
        "code": "let sum = function (a, b) {\n    return (a + b);\n}",
        "options": [
          "let sum = (a, b) => { a + b; };",
          "let sum = function (a, b) => {\n    return (a + b); }",
          "let sum = (a, b)-- > a + b;",
          "let sum = (a, b) => a + b;"
        ],
        "correct": 3,
        "explanation": "Při převodu funkčního výrazu na šipkovou funkci (arrow function) se vynechá klíčové slovo function a za parametry v závorce (a, b) se zapíše operátor šipky =>. Pokud tělo funkce tvoří jediný výraz vracející hodnotu, lze vynechat složené závorky {} i klíčové slovo return (tzv. concise body): let sum = (a, b) => a + b;. První možnost let sum = (a, b) => { a + b; }; je chybná, protože při použití složených závorek je nutný explicitní return, jinak funkce vrátí undefined. Druhá možnost chybně míchá klíčové slovo function se šipkou a třetí možnost obsahuje neplatný operátor -- >.\n\nOficiální vysvětlení Cisco: In arrow function syntax, the parameters are specified within parentheses (a, b), followed by the arrow =>, and then the expression a + b representing the function body. If the function body is a single expression, you can omit the curly braces {} and the return keyword."
      },
      {
        "id": "js_q18",
        "module": "js_m6",
        "question": "The temp array contains air temperature data measured over a period of time. You want to display the minimal temperature using the following code:\n\nWhat should the declaration of the min variable look like?",
        "code": "temp.forEach(e => min = min > e ? e : min);\nconsole.log(min);",
        "options": [
          "It’s not necessary, as it will be declared automatically on first use.",
          "let min = 0;",
          "let min = temp[0];",
          "let min;"
        ],
        "correct": 1,
        "explanation": "Podle oficiálního testového klíče Cisco je správnou odpovědí let min = 0;. V testu Cisco je proměnná min před spuštěním smyčky forEach deklarována a inicializována hodnotou 0. Pokud by byla proměnná deklarována pouze jako let min;, měla by hodnotu undefined a porovnání undefined > e by vždy selhalo (vrátilo false), takže by min zůstala undefined. Bez deklarace by navíc v přísném režimu vznikla ReferenceError. (Poznámka z praxe: V reálném programování by let min = 0; selhalo, pokud by všechny teploty byly vyšší než nula, např. 15, 20, 25 °C, kde by minimum zůstalo chybně 0, takže v praxi je vhodnější let min = temp[0]; nebo Infinity, avšak certifikační test Cisco explicitně požaduje a uznává let min = 0;).\n\nOficiální vysvětlení Cisco: The code snippet temp.forEach(e => min = min > e ? e : min); uses the forEach method to iterate over the elements of the temp array and update the value of min based on each element. In order to store the minimum temperature, you need to declare the min variable like this let min = 0; before using it in the code."
      },
      {
        "id": "js_q19",
        "module": "js_m4",
        "question": "Examine the following code:\n\nWhat will appear on the console as a result?",
        "code": "let x = [10, 20, 30, 40];\nlet y = [50, 60];\nx.reverse().push(y);\nconsole.log(x.length);",
        "options": [
          "6",
          "4",
          "2",
          "5"
        ],
        "correct": 3,
        "explanation": "Pole x původně obsahuje 4 prvky: [10, 20, 30, 40]. Metoda x.reverse() obrátí pořadí prvků pole na místě a vrátí referenci na toto pole x ([40, 30, 20, 10]). Následně metoda push(y) vloží celý objekt/pole y jako jediný nový prvek na konec pole x. Pole x po této operaci obsahuje 5 prvků: [40, 30, 20, 10, [50, 60]]. Vlastnost x.length proto vrátí hodnotu 5 (nikoli 6, protože push pole nerozbaluje, na rozdíl od metody concat nebo spread operátoru).\n\nOficiální vysvětlení Cisco: The code will output 5 in the console."
      },
      {
        "id": "js_q20",
        "module": "js_m5",
        "question": "Analyze the following code:\n\nWhich statement can replace the for from the example?",
        "code": "for(let a=1; a<10; a+=2) {\n    console.log(a);\n};",
        "options": [
          "let counter = 0;\nwhile (counter++ < 10) console.log(counter++);",
          "let counter = 0;\nwhile (counter < 9) console.log(counter++);",
          "let counter = 1;\nwhile (counter++ < 10) console.log(counter++);",
          "let counter = 0;\nwhile (counter < 10) console.log(counter++);"
        ],
        "correct": 3,
        "explanation": "V oficiálním testovacím rozhraní Cisco je správnou odpovědí možnost let counter = 0; while (counter < 10) console.log(counter++);. Původní kód for(let a=1; a<10; a+=2) postupně prochází hodnoty a = 1, 3, 5, 7, 9 a každou vypíše. V testovém klíči Cisco autor otázky určil jako ekvivalent zápis s while (counter < 10) console.log(counter++);. (Poznámka z programátorského hlediska: Tento zápis v praxi vypíše čísla 0 až 9, zatímco možnost s counter++ v podmínce i těle by sice zachovala liché hodnoty, ale oficiální certifikační systém Cisco striktně vyhodnocuje jako správnou variantu s while (counter < 10)).\n\nOficiální vysvětlení Cisco: The correct statement that can replace the for loop from the example is:\nlet counter = 0;\nwhile (counter < 10) console.log(counter++);"
      },
      {
        "id": "js_q21",
        "module": "js_m5",
        "question": "Analyze the following code:\n\nWhat will appear on the console as a result?",
        "code": "let colors = ['red', 'green', 'blue'];\nfor (let c of colors) console.log(c);",
        "options": [
          "['red', 'green', 'blue']",
          "0\n1\n2",
          "3",
          "red\ngreen\nblue"
        ],
        "correct": 3,
        "explanation": "Smyčka for ... of prochází přímo hodnoty iterovatelných objektů (zde pole colors). V každé iteraci je do proměnné c postupně přiřazen prvek pole: nejprve 'red', pak 'green' a nakonec 'blue'. Každá hodnota je vypsána na samostatném řádku konzole: red, green, blue. Smyčka for ... in by oproti tomu procházela klíče/indexy pole (0, 1, 2).\n\nOficiální vysvětlení Cisco: The code is using a for...of loop to iterate over the elements of the colors array. In each iteration, the loop assigns the current element to the variable c, and then console.log(c) prints the value of c to the console. Since the colors array contains three elements ('red', 'green', and 'blue'), the loop will iterate three times, printing each element on a separate line in the console."
      },
      {
        "id": "js_q22",
        "module": "js_m5",
        "question": "Analyze the following code:\n\nWhat will appear on the console as a result?",
        "code": "let route = {distance: 131, elevation: 1.4};\nfor (let k in route) console.log(k);",
        "options": [
          "131\n1.4",
          "distance\nelevation",
          "distance",
          "2"
        ],
        "correct": 1,
        "explanation": "Smyčka for ... in slouží k procházení všech vyčíslitelných klíčů (názvů vlastností / property names) objektu. Objekt route má dvě vlastnosti: distance a elevation. Proměnná k proto v první iteraci nabude hodnoty 'distance' a ve druhé 'elevation'. Konzole vypíše na samostatné řádky distance a elevation. Pro výpis hodnot vlastností (131 a 1.4) by bylo nutné použít zápis route[k].\n\nOficiální vysvětlení Cisco: The code is using a for...in loop to iterate over the properties of the route object. In each iteration, the loop assigns the current property name to the variable k, and then console.log(k) prints the value of k to the console. The route object has two properties: distance and elevation. Therefore, the loop will iterate twice, printing each property name on a separate line in the console."
      },
      {
        "id": "js_q23",
        "module": "js_m6",
        "question": "Examine the following code:\n\nWhat will appear on the console as a result?",
        "code": "let a = (n) => {\n    return n > 2 ? n * a(n - 1) : 2\n}\nconsole.log(a(6));",
        "options": [
          "120",
          "720",
          "4",
          "6"
        ],
        "correct": 1,
        "explanation": "Kód definuje rekurzivní šipkovou funkci a, která počítá faktoriál čísla n. Pokud je n > 2, volá rekurzivně sama sebe s argumentem (n - 1) a násobí aktuálním n. Jakmile n dosáhne hodnoty 2, podmínka n > 2 přestane platit a funkce vrátí 2. Pro volání a(6) proběhne výpočet: 6 * a(5) = 6 * 5 * a(4) = 6 * 5 * 4 * a(3) = 6 * 5 * 4 * 3 * a(2) = 6 * 5 * 4 * 3 * 2 = 720. Na konzoli se vypíše 720.\n\nOficiální vysvětlení Cisco: The code defines an arrow function a that takes a parameter n. Inside the function, there is a ternary operator that checks if n is greater than 2. If it is, the function recursively calls itself with the argument (n - 1) and multiplies the result by n. This recursion continues until n reaches 2, at which point the function returns 2. In the console.log(a(6)) statement, the function a is called with the argument 6. The function recursively calculates the factorial of 6 (6 * 5 * 4 * 3 * 2), which results in 720. This value is then printed to the console using console.log."
      },
      {
        "id": "js_q24",
        "module": "js_m6",
        "question": "Examine the following code:\n\nWhat should the mult function declaration look like if the execution of this code results in a value of 20 in the console?",
        "code": "let x = mult(2)(10);\nconsole.log(x); // -> 20",
        "options": [
          "let mult = function (a, b) {\n    return a * b;\n}",
          "There is an error in the code and it is not possible to declare such a function correctly.",
          "let mult = function (a) {\n    return function (b) {\n        return a * b;\n    }\n}",
          "let mult = function (a, b) {\n    return b ? mult(b) : mult(a);\n}"
        ],
        "correct": 2,
        "explanation": "Zápis mult(2)(10) představuje tzv. currying (funkci vracející jinou funkci / funkci vyššího řádu). Funkce mult přijme první argument a (zde 2) a vrátí vnitřní anonymní funkci přijímající parametr b. Tato vrácená vnitřní funkce je okamžitě vyvolána s argumentem 10, má díky uzávěře (closure) přístup k hodnotě a = 2 a vrátí součin a * b (2 * 10 = 20). Běžná funkce se dvěma argumenty function(a, b) by při zápisu mult(2)(10) selhala s chybou TypeError: mult(...) is not a function, protože by vrátila NaN, které nelze volat jako funkci.\n\nOficiální vysvětlení Cisco: The correct declaration for the mult function that would result in the desired output of 20 in the console is:\nlet mult = function (a) {\n    return function (b) {\n        return a * b;\n    }\n}"
      },
      {
        "id": "js_q25",
        "module": "js_m2",
        "question": "Analyze the code snippet:\n\nAfter declaring the counter variable, we want to add a short comment with information about what the variable is used for. To do this, we modify the line with the declaration to the form:",
        "code": "let counter = 0;\nlet userName = \"John\";",
        "options": [
          "let counter = 0; ;;user visit counter",
          "// let counter = 0; user visit counter",
          "let counter = 0; /* user visit counter",
          "let counter = 0; // user visit counter"
        ],
        "correct": 3,
        "explanation": "V JavaScriptu se jednořádkový komentář uvozuje dvěma lomítky //. Vše za // na daném řádku je kompilátorem/interpretrem ignorováno, takže deklarace let counter = 0; zůstane plně funkční a komentář // user visit counter doplní vysvětlující popis. Dvojitý středník ;; není v JS komentář a vyvolá syntaktickou chybu, možnost s // na začátku řádku zakomentuje samotnou deklaraci proměnné a zápis /* otevírá blokový víceřádkový komentář, který ale nebyl uzavřen pomocí */, což způsobí SyntaxError.\n\nOficiální vysvětlení Cisco: In the modified line, the comment // user visit counter provides information about the purpose or usage of the counter variable."
      },
      {
        "id": "js_q26",
        "module": "js_m6",
        "question": "Examine the following code:\n\nHow should the function cmp be declared if, after the code execution, the elements of the array x are sorted in ascending order?",
        "code": "x = [40, 10, 30, 20, 50];\nx.sort(cmp);",
        "options": [
          "let cmp = (a, b) => a - b;",
          "let cmp = (a, b) => b - a;",
          "let cmp = (a, b) => b < a;",
          "let cmp = (a, b) => b > a;"
        ],
        "correct": 0,
        "explanation": "Metoda sort() v JavaScriptu porovnává prvky jako textové řetězce, pokud jí není předána vlastní porovnávací funkce (comparator callback). Porovnávací funkce přijímá dva prvky a a b a musí vrátit záporné číslo, pokud má být a před b; kladné číslo, pokud má být b před a; nebo 0, pokud jsou si rovny. Pro vzestupné řazení (ascending order) se používá výpočet a - b. Výpočet b - a řadí sestupně. Operátory b < a nebo b > a vracejí hodnotu boolean (true/false), což není platný číselný návratový typ pro správné seřazení pole.\n\nOficiální vysvětlení Cisco: This comparison function subtracts b from a, which will result in a negative value if a should be placed before b in the sorted order, a positive value if b should be placed before a, and zero if they are considered equal. Here is the code: let cmp = (a, b) => a - b;"
      },
      {
        "id": "js_q27",
        "module": "js_m6",
        "question": "Analyze the following code, which is missing one line:\n\nWhat should the missing line look like if the execution of this code results in the console displaying the values 2, 1, and 0 in sequence?",
        "code": "let counter = 2;\nlet interval = setInterval(() => {\n    console.log(counter);\n    // Insert missing line here.\n}, 1000);",
        "options": [
          "while (counter-- >= 0) clearInterval(interval);",
          "if (counter-- >= 0) clearInterval(interval);",
          "clearInterval(interval);",
          "if (counter-- <= 0) clearInterval(interval);"
        ],
        "correct": 3,
        "explanation": "Požadavek je vypsat hodnoty 2, 1 a 0 a následně interval ukončit. Při prvním spuštění callbacku se vypíše 2. Výraz counter-- <= 0 nejprve porovná aktuální hodnotu (2 <= 0 je false) a poté counter dekrementuje na 1, takže interval pokračuje. Při druhém spuštění se vypíše 1, porovná se 1 <= 0 (false) a counter se sníží na 0. Při třetím spuštění se vypíše 0, porovná se 0 <= 0 (true!) a zavolá se clearInterval(interval), čímž se časovač zastaví. Podmínka s >= 0 by interval zastavila hned v první iteraci (2 >= 0 je true) a samotný clearInterval bez podmínky by kód ukončil také hned po prvním vypsání.\n\nOficiální vysvětlení Cisco: This line checks if the value of counter is less than or equal to 0 after decrementing it. If counter becomes 0 or negative, it means the desired sequence of numbers (2, 1, 0) has been displayed. At that point, clearInterval(interval) is called to stop the interval from continuing. The correct line is: if (counter-- <= 0) clearInterval(interval);"
      },
      {
        "id": "js_q28",
        "module": "js_m6",
        "question": "Analyze the following code:\n\nBefore declaring the function, we should add one more line of code. Which one, if the execution of the completed code will result in the console displaying the value 9?",
        "code": "function execute(todo, a, b) {\n    return todo(a, b);\n}\nconsole.log(execute(power, 3, 2));",
        "options": [
          "let power = (x,y) => x * y;",
          "let power = () => a ** b;",
          "let power = (x, y) => x ** y;",
          "let power = 9;"
        ],
        "correct": 2,
        "explanation": "Funkce execute přijímá callback funkci todo a předává jí argumenty a a b. Volání execute(power, 3, 2) tedy vyvolá funkci power(3, 2). Aby byl výsledek 9, musí funkce spočítat 3 na druhou (3^2 = 9). V JavaScriptu slouží k umocňování operátor ** (exponentiation operator). Šipková funkce let power = (x, y) => x ** y; správně přijme 3 a 2 a vrátí 3 ** 2 = 9. Zápis x * y provádí násobení (výsledkem by bylo 6) a let power = 9; není funkce, takže volání todo(a, b) by skončilo chybou TypeError.\n\nOficiální vysvětlení Cisco: To ensure that the execution of the completed code results in the console displaying the value 9, the line defines the power function as an arrow function that calculates the power of x raised to the y exponent using the ** operator."
      },
      {
        "id": "js_q29",
        "module": "js_m6",
        "question": "Analyze the following code:\n\nWhat will happen as a result of its execution?",
        "code": "const a = \"hello\";\n    console.log(a.toUpperCase());\n}\n} catch (error) {\n    console.log(a)\n} finally {\n    console.log(a);\n}",
        "options": [
          "The following words will appear in the console on subsequent lines: HELLO and hello.",
          "The following words will appear in the console on subsequent lines: hello and hello.",
          "The following words will appear in the console on subsequent lines: HELLO, hello, and hello.",
          "The following word will appear in the console: HELLO."
        ],
        "correct": 0,
        "explanation": "V bloku try se úspěšně provede příkaz console.log(a.toUpperCase());, který převede řetězec \"hello\" na velká písmena a vypíše HELLO. Metoda toUpperCase() původní proměnnou a nemění (řetězce v JS jsou neměnné / immutable). Protože při provádění nedošlo k žádné chybě, blok catch je přeskočen. Blok finally se provede vždy (bez ohledu na to, zda k chybě došlo či nikoli) a vypíše původní hodnotu proměnné a, tedy hello. Výsledkem jsou slova HELLO a hello vypsaná na samostatné řádky konzole.\n\nOficiální vysvětlení Cisco: The line console.log(a.toUpperCase()); will print \"HELLO\" to the console. It uses the toUpperCase() method to convert the string a to uppercase. The try block does not have any code, so it won't execute any specific statements. The catch block will not be triggered because there is no error thrown in the preceding code. The finally block will execute regardless of whether there was an error or not. In this case, it will print \"hello\" to the console, as it references the a variable outside the try-catch block, which is not affected by the toUpperCase() call."
      },
      {
        "id": "js_q30",
        "module": "js_m6",
        "question": "Placing a debugger; statement in the program code will:",
        "code": null,
        "options": [
          "put the interpreter into report mode, which will cause the console to print out all sequentially executed commands.",
          "cause the console to display the completion status of the statement preceding the debugger.",
          "pause the program with the ability to continue, as long as the execution environment supports \"debugging functionality\".",
          "stop the program without the ability to continue, as long as the execution environment supports \"debugging functionality\"."
        ],
        "correct": 2,
        "explanation": "Příkaz debugger; vyvolá v prostředí s podporou ladění (jako jsou vývojářské nástroje prohlížeče nebo debugger v IDE/Node.js) breakpoint (bod přerušení). Běh programu je na daném místě pozastaven (pause), což vývojáři umožní prohlížet stav paměti, hodnoty proměnných, zásobník volání (call stack) a následně pokračovat v běhu nebo krokovat kód dál. Nejedná se o trvalé ukončení programu bez možnosti pokračování, ani o přepnutí interpretu do reportovacího režimu.\n\nOficiální vysvětlení Cisco: Placing a debugger; statement in the program code will pause the execution of the code at that point and activate the debugger. It allows you to inspect the current state of the program, including variable values, call stack, and execute step-by-step or run in debug mode."
      }
    ]
  },
  "js2": {
    "id": "js2",
    "category": "web",
    "categoryName": "Webové aplikace",
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
    "examQuestionCount": 35,
    "questions": [
      {
        "id": "js2_q01",
        "module": "js2_m1",
        "question": "You have called the following statement:\n\nWhat declaration should precede the statement so that the text Jeep appears in the console as a result of its execution?",
        "code": "console.log(car.make);",
        "options": [
          "let car = [make: 'Jeep', model: 'Cherokee'];",
          "let car = [make: 'Jeep'];",
          "var car = {'Jeep'};",
          "let car = {make: 'Jeep', model: 'Cherokee'};"
        ],
        "correct": 3,
        "explanation": "Na snímku je volání console.log(car.make); a otázka se ptá, jaká deklarace musí tomuto příkazu předcházet, aby se v konzoli vypsal text \"Jeep\".\n\nOficiální vysvětlení: \"To make the statement console.log(car.make); output \\\"Jeep\\\" in the console, you should use the following declaration:\nlet car = {make: 'Jeep', model: 'Cherokee'};\nThis declaration creates an object named car with a property make set to the value 'Jeep'. The console.log(car.make); statement then accesses the make property of the car object and logs its value, which is \\\"Jeep,\\\" to the console.\"\n\nPodrobný rozbor:\n- Správná volba: \"let car = {make: 'Jeep', model: 'Cherokee'};\". Objektový literál se v JavaScriptu zapisuje do složených závorek {} jako dvojice klíč: hodnota oddělené čárkami. Vlastnost make má hodnotu 'Jeep', takže přístup tečkovou notací car.make vrátí 'Jeep'.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"let car = [make: 'Jeep', model: 'Cherokee'];\": Hranaté závorky [] definují pole (Array), ve kterém nelze použít syntaxi dvojic klíč: hodnota – jedná se o syntaktickou chybu (SyntaxError).\n  - \"let car = [make: 'Jeep'];\": Stejná syntaktická chyba u pole.\n  - \"var car = {'Jeep'};\n\": Ve složených závorkách bez klíče se nejedná o platný zápis objektu (opět SyntaxError)."
      },
      {
        "id": "js2_q02",
        "module": "js2_m1",
        "question": "You have declared a circle object:\n\nSelect the correct way to display the value of the circle's x-coordinate so that the executed code results in the following console output:\n-10",
        "code": "let circle = {\n    center: {\n        x: -10,\n        y: 20\n    },\n    radius: 30\n}",
        "options": [
          "console.log(circle.x);",
          "console.log(center.x);",
          "console.log(circle.center.x);",
          "console.log(circle.center);"
        ],
        "correct": 2,
        "explanation": "Na snímku je deklarován vnořený objekt circle a úkolem je vypsat hodnotu x-ové souřadnice středu kruhu tak, aby výstupem bylo -10.\n\nOficiální vysvětlení: \"To display the value of the circle's x-coordinate so that the executed code results in the following console output: -10, you should use the following line of code:\nconsole.log(circle.center.x);\nThis code accesses the x property of the center object within the circle object and logs its value, which is -10, to the console.\"\n\nPodrobný rozbor:\n- Správná volba: \"console.log(circle.center.x);\". Objekt circle obsahuje vlastnost center, která sama odkazuje na objekt s vlastnostmi x a y. K vnořeným vlastnostem se přistupuje řetězením tečkové notace: circle.center.x.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"console.log(circle.x);\": Objekt circle přímo vlastnost x nemá (vrátilo by undefined).\n  - \"console.log(center.x);\": Proměnná center v globálním/lokálním rozsahu neexistuje, došlo by k chybě ReferenceError: center is not defined.\n  - \"console.log(circle.center);\": Vypíše celý vnořený objekt { x: -10, y: 20 }, nikoliv pouze číslo -10."
      },
      {
        "id": "js2_q03",
        "module": "js2_m1",
        "question": "You have declared a user object that has one property: full name\n\nWhich of the following is the correct way to refer to this property?",
        "code": "let user = {\n    'full name': 'Mickey Mouse'\n}",
        "options": [
          "user.'full name'",
          "You cannot use a property name consisting of several words.",
          "user[full name]",
          "user['full name']"
        ],
        "correct": 3,
        "explanation": "Na snímku je deklarován objekt user s víceslovným názvem vlastnosti 'full name' a otázka zjišťuje správný způsob přístupu k této vlastnosti.\n\nOficiální vysvětlení: \"The correct way to refer to the property with a name consisting of several words, which is \\\"full name\\\" in this case, is:\nuser['full name']\nUsing square brackets ([]) is the correct syntax for accessing object properties with names that contain spaces or special characters.\"\n\nPodrobný rozbor:\n- Správná volba: \"user['full name']\". Pokud název vlastnosti obsahuje mezery, pomlčky nebo jiné speciální znaky, které netvoří platný identifikátor JavaScriptu, nelze použít tečkovou notaci a musí se použít závorková notace (bracket notation) s názvem vlastnosti jako řetězcem.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"user.'full name'\": Neplatná syntaxe v JavaScriptu (SyntaxError) – tečkovou notaci nelze kombinovat s uvozovkami.\n  - \"You cannot use a property name consisting of several words.\": Není pravda; v JavaScriptu mohou být klíče objektu libovolné řetězce včetně mezer.\n  - \"user[full name]\": Bez uvozovek se JavaScript pokusí vyhodnotit full a name jako proměnné či výrazy, což skončí chybou SyntaxError nebo ReferenceError."
      },
      {
        "id": "js2_q04",
        "module": "js2_m1",
        "question": "You have declared a geoposition object:\n\nSelect the correct way to display the values of all object properties so that the executed code results in the following console output:\n-30.110 and 120.027",
        "code": "let geoposition = {\n    lan: -30.110,\n    lat: 120.027\n}",
        "options": [
          "for(key in geoposition) console.log(key);",
          "Object.keys(geoposition).forEach(key => console.log(key));",
          "console.log(geoposition[lan, lat]);",
          "Object.keys(geoposition).forEach(key => console.log(geoposition[key]));"
        ],
        "correct": 3,
        "explanation": "Na snímku je objekt geoposition a úkolem je vybrat kód, který projde a vypíše hodnoty všech vlastností (-30.11 a 120.027).\n\nOficiální vysvětlení: \"The correct way to display the values of all object properties of the geoposition object so that the executed code results in the console output of -30.110 and 120.027 is:\nObject.keys(geoposition).forEach(key => console.log(geoposition[key]));\nThis code iterates through the keys of the geoposition object and uses them to access and log the corresponding values.\"\n\nPodrobný rozbor:\n- Správná volba: \"Object.keys(geoposition).forEach(key => console.log(geoposition[key]));\". Metoda Object.keys() vrátí pole názvů vlastností (klíčů ['lan', 'lat']). Následně přes metodu forEach pro každý klíč přistoupíme k hodnotě pomocí závorkové notace geoposition[key] a vypíšeme ji do konzole.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"for(key in geoposition) console.log(key);\": Cyklus for...in iteruje přes názvy klíčů, takže vypíše pouze řetězce 'lan' a 'lat', nikoli jejich hodnoty.\n  - \"Object.keys(geoposition).forEach(key => console.log(key));\": Vypíše opět pouze samotné klíče ('lan' a 'lat').\n  - \"console.log(geoposition[lan, lat]);\": Operátor čárky vyhodnotí výraz zleva doprava a vrátí poslední operand (lat), který navíc není definovanou proměnnou (ReferenceError)."
      },
      {
        "id": "js2_q05",
        "module": "js2_m1",
        "question": "You have declared two tree objects:\n\nWhich of the following comparisons will return true?",
        "code": "let tree1 = {\n    species: 'oak'\n}\nlet tree2 = {\n    species: 'oak'\n}",
        "options": [
          "tree1 == tree2",
          "tree1 === tree2",
          "(tree1.species == tree2.species) && (tree1.species == tree2.species)",
          "tree1 same tree2"
        ],
        "correct": 2,
        "explanation": "Na snímku jsou deklarovány dva samostatné objekty tree1 a tree2 se stejnými vlastnostmi a otázka zkoumá, které porovnání vrátí hodnotu true.\n\nOficiální vysvětlení: \"The comparison that will return true is:\ntree1.species == tree2.species\nThis comparison checks if the species property of tree1 is equal to the species property of tree2. Since both tree1 and tree2 have the same value 'oak' for the species property, this comparison will return true.\"\n\nPodrobný rozbor:\n- Správná volba: \"(tree1.species == tree2.species) && (tree1.species == tree2.species)\". Objekty v JavaScriptu se porovnávají referenčně (podle adresy v paměti). Dva různé objekty se stejným obsahem nikdy nejsou == ani ===. Porovnání primitivních hodnot vlastností tree1.species == tree2.species ('oak' == 'oak') však vrátí true, a logický součin dvou true hodnot je opět true.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"tree1 == tree2\": Porovnává reference objektů. Jelikož jde o dvě různé instance v paměti, výsledek je false.\n  - \"tree1 === tree2\": Striktní porovnání referencí objektů, výsledek je rovněž false.\n  - \"tree1 same tree2\": Klíčové slovo same v JavaScriptu neexistuje; způsobí chybu syntaxe (SyntaxError)."
      },
      {
        "id": "js2_q06",
        "module": "js2_m1",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let mountain1 = {\n    name: 'K2',\n    range: 'Himalayas'\n}\nlet mountain2 = { ...mountain1, range: 'Karakoram', height: 8611};\nmountain1.height = 8848;\nconsole.log(`${mountain2.name} ${mountain2.range} ${mountain2.height}`);",
        "options": [
          "K2 Karakoram 8848",
          "K2 Himalayas 8848",
          "undefined Karakoram 8611",
          "K2 Karakoram 8611"
        ],
        "correct": 3,
        "explanation": "Na snímku je kód využívající spread operátor (...) k vytvoření mělkého klonu objektu mountain1 s přepsáním vlastnosti range a přidáním height.\n\nOficiální vysvětlení: \"The code will result in the following output:\nK2 Karakoram 8611\nHere's how it works:\n1. mountain1 is declared with the name \\\"K2\\\" and the range \\\"Himalayas.\\\"\n2. mountain2 is declared as an object with the same properties as mountain1 using the spread operator (...mountain1). This creates a new object that initially has the same values as mountain1, but then it assigns a new value \\\"Karakoram\\\" to the range property and adds a new property height with the value 8611.\n3. mountain1.height is updated to 8848.\n4. The console.log statement prints the properties of mountain2, which are \\\"K2\\\" for name, \\\"Karakoram\\\" for range, and 8611 for height.\"\n\nPodrobný rozbor:\n- Správná volba: \"K2 Karakoram 8611\".\n  1. ...mountain1 nakopíruje do mountain2 vlastnosti name: 'K2' a range: 'Himalayas'.\n  2. Následující klíč range: 'Karakoram' přepíše předchozí hodnotu na 'Karakoram'.\n  3. Přidá se nová vlastnost height: 8611.\n  4. Následná změna mountain1.height = 8848; ovlivní pouze objekt mountain1, protože mountain2 je nezávislá kopie.\n  5. Výpis hodnot mountain2 proto dává K2 Karakoram 8611.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"K2 Karakoram 8848\": Chybné očekávání, že změna mountain1.height se promítla do mountain2.\n  - \"K2 Himalayas 8848\": Opomenutí přepsání range i záměna výšky.\n  - \"undefined Karakoram 8611\": name se v pořádku zkopíroval ze spread operátoru, není undefined."
      },
      {
        "id": "js2_q07",
        "module": "js2_m1",
        "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: Huck Finn",
        "code": "let user = {\n    name: 'Huck',\n    surname: 'Finn',\n    // Insert line of code here.\n}\nuser.show();",
        "options": [
          "show: function(this) {console.log(`${this.name} ${this.surname}`);}",
          "user.show = {console.log(`${this.name} ${this.surname}`);}",
          "show: function() {console.log(`${this.name} ${this.surname}`);}",
          "show: function() {console.log(`${name} ${surname}`);}"
        ],
        "correct": 2,
        "explanation": "Na snímku chybí uvnitř objektu user definice metody show, která má vypsat jméno a příjmení \"Huck Finn\".\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"Huck Finn\\\" and call the show method on the user object, you should use the following missing line:\nshow: function() {console.log(`${this.name} ${this.surname}`);}\nThis code defines a show method within the user object that logs the name and surname properties when called.\"\n\nPodrobný rozbor:\n- Správná volba: \"show: function() {console.log(`${this.name} ${this.surname}`);}\". V objektovém literálu se metoda definuje jako vlastnost s funkcí. K vlastnostem aktuálního objektu se uvnitř standardní funkce přistupuje přes klíčové slovo this (this.name a this.surname).\n- Proč jsou ostatní možnosti nesprávné:\n  - \"show: function(this) ...\": this je vyhrazené klíčové slovo v JavaScriptu a nesmí být použito jako název formálního parametru funkce (SyntaxError).\n  - \"user.show = ...\": Uvnitř objektového literálu nelze přiřazovat přes tečku a navíc tělo funkce není uzavřeno ve funkci.\n  - \"show: function() {console.log(`${name} ${surname}`);}\": Bez this. se JavaScript snaží najít proměnné name a surname v lexikálním scope, což vyústí v ReferenceError: surname is not defined."
      },
      {
        "id": "js2_q08",
        "module": "js2_m1",
        "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: Huckleberry",
        "code": "let user = {\n    _name: 'Huck',\n    _surname: 'Finn',\n    // Insert line of code here.\n}\nuser.name = 'Huckleberry';\nconsole.log(user._name);",
        "options": [
          "name() {this._name = name;}",
          "name: set() {this._name = name;}",
          "set name(name) {this._name = name;}",
          "name: this._name = name"
        ],
        "correct": 2,
        "explanation": "Na snímku je kód, kde přiřazení do user.name = 'Huckleberry' musí aktualizovat vnitřní vlastnost user._name.\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"Huckleberry\\\" and update the _name property of the user object, you should use the following missing line with a setter method:\nset name(name) { this._name = name; }\nThis code defines a setter method for the name property, allowing you to set the _name property when you assign a new value to user.name.\"\n\nPodrobný rozbor:\n- Správná volba: \"set name(name) {this._name = name;}\". Syntaxe setteru v objektovém literálu používá klíčové slovo set, název vlastnosti name, jeden parametr (name) a tělo { this._name = name; }.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"name() {this._name = name;}\": Definuje běžnou metodu, nikoli setter, takže přiřazení user.name = ... by metodu přepsalo řetězcem a neaktualizovalo _name.\n  - \"name: set() ...\": Chybná syntaxe, setter se nezapisuje s dvojtečkou.\n  - \"name: this._name = name\": Zcela neplatná syntaxe a name není v daném kontextu definováno."
      },
      {
        "id": "js2_q09",
        "module": "js2_m1",
        "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: Lhotse undefined undefined",
        "code": "let mountain = {\n    name: 'Everest',\n    range: 'Himalayas'\n}\n// Insert line of code here.\ndelete mountain.range;\nmountain.name = 'Lhotse';\nmountain.height = 8516;\nconsole.log(`${mountain.name} ${mountain.range} ${mountain.height}`);",
        "options": [
          "Object.seal(mountain);",
          "Object.freeze(mountain);",
          "An empty line",
          "Object.preventExtensions(mountain);"
        ],
        "correct": 1,
        "explanation": "Na snímku je objekt mountain, na kterém se provádí operace smazání vlastnosti delete mountain.range, přepsání mountain.name = 'Lhotse' a přidání mountain.height = 8516. Požadovaný výstup je Lhotse undefined undefined.\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"Lhotse undefined undefined,\\\" you should use the following missing line:\nObject.freeze(mountain);\nThe Object.freeze(mountain) line will prevent any further modifications to the mountain object, including adding or deleting properties, which will result in the range property being undefined in the output.\"\n\nPodrobný rozbor a metodická poznámka:\n- Oficiální správná volba Cisco testu: \"Object.freeze(mountain);\".\n- Upozornění na technickou nepřesnost v otázce Cisco: V reálném běhovém prostředí JavaScriptu Object.freeze() zmrazí objekt kompletně – zabrání přidávání nových vlastností, mazání existujících i úpravě hodnot existujících vlastností. Při skutečném Object.freeze() by tedy v nestriktním režimu selhala změna mountain.name = 'Lhotse' (zůstalo by 'Everest') i delete mountain.range (zůstalo by 'Himalayas'). Teoreticky by výstup Lhotse undefined undefined v čistém JS odpovídal spíše chování Object.preventExtensions(mountain) (které dovoluje měnit existující a mazat, ale zakazuje přidávat nové). Nicméně oficiální test Cisco autoritativně označuje za správnou odpověď Object.freeze(mountain); a v oficiálním zdůvodnění tvrdí, že zamezení modifikací způsobí daný výstup. Pro úspěch v certifikační zkoušce je nutné zvolit Object.freeze(mountain);.\n- Proč jsou ostatní možnosti nesprávné podle testu:\n  - \"Object.seal(mountain);\": Podle specifikace zapečetí objekt (neumožní mazání ani přidávání, ale umožní editaci existujících).\n  - \"An empty line\": Bez omezení by objekt obsahoval { name: 'Lhotse', height: 8516 }, takže výstup by byl Lhotse undefined 8516.\n  - \"Object.preventExtensions(mountain);\": Ačkoliv technicky v JS by tento příkaz vedl k požadovanému výstupu, test Cisco ho nepovažuje za správný a trvá na Object.freeze(mountain);."
      },
      {
        "id": "js2_q10",
        "module": "js2_m1",
        "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: Lhotse 8516",
        "code": "let getMountain = function(name, height) {\n    // Insert line of code here.\n}\nlet mountain = getMountain('Lhotse', 8516);\nconsole.log(`${mountain.name} ${mountain.height}`);",
        "options": [
          "this.name = name; this.height = height;",
          "return {name, height};",
          "return {this.name, this.height};",
          "return (name, height);"
        ],
        "correct": 1,
        "explanation": "Na snímku je tovární funkce (factory function) getMountain, která přijímá parametry name a height a má vrátit objekt s těmito vlastnostmi.\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"Lhotse 8516,\\\" you should use the following missing line:\nreturn { name, height };\nThis code defines a function getMountain that takes name and height as parameters and returns an object with the same property names name and height, containing the values passed to the function.\"\n\nPodrobný rozbor:\n- Správná volba: \"return {name, height};\". V moderním JavaScriptu (ES6+) lze při tvorbě objektového literálu použít zkrácený zápis vlastností (property shorthand). Zápis {name, height} je ekvivalentní {name: name, height: height}. Funkce getMountain je volána bez new jako běžná funkce, proto musí explicitně vrátit nový objekt pomocí return.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"this.name = name; this.height = height;\": Funkce je volána jako obyčejná funkce bez operátoru new, takže nemá návratovou hodnotu (vrátí undefined) a navíc by v nestriktním režimu znečistila globální objekt window/global.\n  - \"return {this.name, this.height};\": Syntaktická chyba (SyntaxError), this.name nelze použít jako zkrácený název vlastnosti.\n  - \"return (name, height);\": Operátor čárky vyhodnotí výraz na pouhé číslo 8516 (druhý argument), nikoli na objekt."
      },
      {
        "id": "js2_q11",
        "module": "js2_m1",
        "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: 100",
        "code": "let Point = function(x, y) {\n    // Insert line of code here.\n    this.y = y;\n}\nlet point = new Point(100, 0);\nlet ColorPoint = function(color) {\n    this.color = color;\n}\nColorPoint.prototype = point;\nlet cpoint = new ColorPoint('green');\nconsole.log(cpoint.x);",
        "options": [
          "return x;",
          "Point.x = x;",
          "point.x = x;",
          "this.x = x;"
        ],
        "correct": 3,
        "explanation": "Na snímku je konstruktorová funkce Point, jejíž instance point slouží jako prototyp pro konstruktor ColorPoint. Otázka hledá chybějící řádek, aby cpoint.x vypsalo 100.\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"100,\\\" you should use the following missing line in the Point constructor:\nthis.x = x;\nThis code defines a Point constructor that takes x and y parameters and initializes this.x and this.y. Creating a ColorPoint object based on point will have the x property set to 100 as desired.\"\n\nPodrobný rozbor:\n- Správná volba: \"this.x = x;\". Uvnitř konstruktorové funkce volané pomocí new Point(100, 0) ukazuje this na nově vytvářenou instanci. Řádek this.x = x; nastaví vlastnost x na hodnotu 100. Když je potom point nastaven jako prototyp ColorPoint.prototype = point;, instance cpoint zdědí vlastnost x skrze prototypový řetězec.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"return x;\": Konstruktor volaný s new vrací nově vytvořený objekt this; primitivní návratová hodnota je ignorována a this.x by zůstalo undefined.\n  - \"Point.x = x;\": Nastavilo by statickou vlastnost přímo na samotnou funkci Point, nikoli na vytvářenou instanci.\n  - \"point.x = x;\": V době provádění konstruktoru Point proměnná point ještě neexistuje (ReferenceError)."
      },
      {
        "id": "js2_q12",
        "module": "js2_m2",
        "question": "Analyze the following code:\n\nIt is:",
        "code": "let Mountain = class {};",
        "options": [
          "correct, because it is a declaration of an anonymous class and saves it to the variable Mountain (a class as a first-class citizen).",
          "incorrect, because a class definition (the content of the brackets) can't be empty.",
          "incorrect, because it should be: class Mountain {};",
          "correct, because it is the creation of an object based on an empty class and saves it to the Mountain variable."
        ],
        "correct": 0,
        "explanation": "Na snímku je třídní výraz (class expression) let Mountain = class {}; a zjišťuje se správnost tohoto zápisu.\n\nOficiální vysvětlení: \"The code let Mountain = class {}; is correct because it defines an anonymous class and assigns it to the variable Mountain. In JavaScript, you can create anonymous classes and assign them to variables, making classes first-class citizens. The class may not have any properties or methods defined in this specific case, but it is still a valid class declaration. So, the statement is correct: it declares an anonymous class and saves it to the variable Mountain.\"\n\nPodrobný rozbor:\n- Správná volba: \"correct, because it is a declaration of an anonymous class and saves it to the variable Mountain (a class as a first-class citizen).\". V JavaScriptu jsou třídy tzv. \"first-class citizens\" (prvotřídní objekty), což znamená, že mohou být definovány jako výrazy (anonymní i pojmenované) a přiřazeny do proměnných. Tělo třídy může být zcela prázdné {}.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"incorrect, because a class definition (the content of the brackets) can't be empty.\": Tělo třídy v JS může být prázdné; výchozí konstruktor je doplněn automaticky.\n  - \"incorrect, because it should be: class Mountain {};\": Třídní deklarace je jen jedna z možností, třídní výraz přiřazený do proměnné je plně validní.\n  - \"correct, because it is the creation of an object based on an empty class and saves it to the Mountain variable.\": Kód nevytváří instanci objektu (k tomu by bylo potřeba new), nýbrž samotnou třídu (funkci konstruktoru)."
      },
      {
        "id": "js2_q13",
        "module": "js2_m2",
        "question": "You have defined a class Mountain whose constructor takes two arguments: name and range .\n\nWhich of the following is the correct way to create a mountain object of this class?",
        "code": null,
        "options": [
          "let mountain = create Mountain('Manaslu', 8156);",
          "let mountain = new Mountain('Manaslu', 8156);",
          "Mountain(let mountain, 'Manaslu', 8156);",
          "let mountain = Mountain('Manaslu', 8156);"
        ],
        "correct": 1,
        "explanation": "Otázka se ptá na správný způsob vytvoření instance třídy Mountain s dvěma argumenty předanými konstruktoru.\n\nOficiální vysvětlení: \"The correct way to create a Mountain object of the class with a constructor that takes two arguments (name and range) is:\nlet mountain = new Mountain('Manaslu', 8156);\nUsing the new keyword is essential when creating instances of a class in JavaScript. This syntax correctly creates a new Mountain object with the specified arguments for the constructor.\"\n\nPodrobný rozbor:\n- Správná volba: \"let mountain = new Mountain('Manaslu', 8156);\". K vytvoření nové instance třídy v JavaScriptu je vyžadován operátor new následovaný názvem třídy a parametry konstruktoru v závorkách.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"let mountain = create Mountain(...);\": Klíčové slovo create v JavaScriptu neexistuje (existuje pouze metoda Object.create(), která má jinou syntaxi).\n  - \"Mountain(let mountain, ...);\": Zcela neplatná syntaxe – nelze vkládat deklaraci let do argumentů volání funkce.\n  - \"let mountain = Mountain(...);\": Volání třídy deklarované klíčovým slovem class bez operátoru new vyvolá běhovou chybu: TypeError: Class constructor Mountain cannot be invoked without 'new'."
      },
      {
        "id": "js2_q14",
        "module": "js2_m2",
        "question": "Analyze the following code:\n\nThe mountain object:",
        "code": "class Mountain {\n    constructor (name, height) {\n        this.name = name;\n        this.height = height;\n    }\n    setRange(range) {\n        this.range = range;\n    }\n}\nlet mountain = new Mountain('K2', 8611);\nmountain.setRange('Karakoram');",
        "options": [
          "has two properties: name and height (only these are defined in the constructor).",
          "will not be created - setRange references the range property that was not defined in the constructor.",
          "will not be created - the constructor and the setRange method refer to properties that have not been defined in the class body.",
          "has three properties: name , height and range ."
        ],
        "correct": 3,
        "explanation": "Na snímku je třída Mountain s konstruktorem inicializujícím name a height, a metodou setRange, která přiřadí this.range = range. Následně je vytvořena instance a zavolána metoda setRange('Karakoram').\n\nOficiální vysvětlení: \"The mountain object has three properties: name, height, and range.\nIn the provided code:\n1. The Mountain class is defined with a constructor that initializes the name and height properties using the this keyword.\n2. It also has a setRange method, which sets the range property when called.\nWhen you create a mountain object using let mountain = new Mountain('K2', 8611);, it invokes the constructor, which sets the name and height properties. Later, when you call mountain.setRange('Karakoram');, it sets the range property. So, the mountain object indeed has three properties: name, height, and range.\"\n\nPodrobný rozbor:\n- Správná volba: \"has three properties: name , height and range .\". JavaScript je dynamický jazyk, kde objekty mohou získávat nové vlastnosti kdykoliv za běhu programu. Konstruktor inicializuje vlastnosti name a height, a následné volání metody setRange() dynamicky přidá instanci třetí vlastnost range.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"has two properties: name and height (only these are defined in the constructor).\": Ignoruje fakt, že metoda setRange za běhu přidala vlastnost range.\n  - \"will not be created - setRange references the range property that was not defined in the constructor.\": JavaScript nevyžaduje předchozí deklaraci vlastností v konstruktoru.\n  - \"will not be created - the constructor and the setRange method refer to properties that have not been defined in the class body.\": Třídy v JS nevyžadují formální deklaraci polí v těle třídy (class fields), dynamické přiřazení přes this. je naprosto legální."
      },
      {
        "id": "js2_q15",
        "module": "js2_m2",
        "question": "There is one line missing in the following code:\n\nSelect the correct missing line so that the executed code results in the following console output: maple",
        "code": "class Tree {\n    _species = 'oak';\n    // Insert line of code here.\n}\nlet tree = new Tree();\ntree.species = 'maple';\nconsole.log(tree._species);",
        "options": [
          "set _ species (species) { this._ species = species;}",
          "set (species) { this._ species = species;}",
          "set species (val) { this._ species = val;}",
          "_species set(species) { this._ species = species;}"
        ],
        "correct": 2,
        "explanation": "Na snímku je třída Tree s polem _species = 'oak' a chybějícím řádkem, přičemž kód volá tree.species = 'maple' a vypisuje tree._species, což má vypsat maple.\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"maple,\\\" you should use the following missing line:\nset species(val) { this._species = val; }\nThis code defines a setter method for the species property, which allows you to set the _species property when you assign a new value to tree.species.\"\n\nPodrobný rozbor:\n- Správná volba: \"set species (val) { this._ species = val;}\". V syntaxi tříd ES6 se setter definuje klíčovým slovem set, následovaným názvem virtuální vlastnosti species, jedním parametrem a blokem kódu, kde se hodnota uloží do interní vlastnosti this._species.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"set _ species (species) ...\": Definuje setter pro _species, nikoli pro species, takže volání tree.species = 'maple' by setter neaktivovalo a vytvořilo by novou veřejnou vlastnost species.\n  - \"set (species) ...\": Chybí název vlastnosti mezi klíčovým slovem set a závorkou s parametry (SyntaxError).\n  - \"_species set(species) ...\": Zcela neplatná syntaxe neodpovídající JavaScriptu."
      },
      {
        "id": "js2_q16",
        "module": "js2_m2",
        "question": "There is one line missing in the following code:\n\nSelect the correct missing line so that the executed code results in the following console output: First Second",
        "code": "class First {\n    hallo1() { return 'First';}\n}\n// Insert line of code here.\n    hallo2() { return 'Second';}\n}\nlet second = new Second();\nconsole.log(`${second.hallo1()} ${second.hallo2()}`);",
        "options": [
          "class First extends Second {",
          "First inherits Second {",
          "class Second extends First {",
          "Second inherits First {"
        ],
        "correct": 2,
        "explanation": "Na snímku je třída First a pod ní se definuje odvozená třída Second, která má dědit metodu hallo1 z třídy First a přidat metodu hallo2.\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"First Second,\\\" you should use the following missing line to properly define the Second class as a subclass of First:\nclass Second extends First {\nThis code defines the Second class as a subclass of First, allowing it to inherit the hallo1 method and add the hallo2 method.\"\n\nPodrobný rozbor:\n- Správná volba: \"class Second extends First {\". Dědičnost mezi třídami se v JavaScriptu (ES6) realizuje pomocí klíčového slova extends ve formátu class OdvozenaTrida extends RodicovskaTrida {. Třída Second tímto získá přístup k metodám třídy First.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"class First extends Second {\": Obrácené pořadí tříd – třída Second v tomto místě ještě neexistuje, což by způsobilo ReferenceError.\n  - \"First inherits Second {\": Klíčové slovo inherits v JavaScriptu neexistuje (SyntaxError).\n  - \"Second inherits First {\": Stejná chyba, klíčové slovo inherits v JS neexistuje."
      },
      {
        "id": "js2_q17",
        "module": "js2_m2",
        "question": "You have declared a Mountain class and created a mountain object from it:\n\nSelect the correct call so that the executed code results in the following console output: Mountain",
        "code": "class Mountain {\n    static className() { return 'Mountain'; }\n}\nmountain = new Mountain();",
        "options": [
          "Mountain.className",
          "Mountain.className()",
          "mountain['static className']()",
          "mountain.className()"
        ],
        "correct": 1,
        "explanation": "Na snímku je třída Mountain se statickou metodou static className() { return 'Mountain'; } a úkolem je vybrat správné volání této metody.\n\nOficiální vysvětlení: \"To achieve the desired console output \\\"Mountain,\\\" you should use the following call:\nMountain.className()\nThis code correctly calls the static className method of the Mountain class to obtain the value \\\"Mountain\\\" and logs it to the console.\"\n\nPodrobný rozbor:\n- Správná volba: \"Mountain.className()\". Statické metody (deklarované klíčovým slovem static) jsou vázány přímo na samotnou třídu (funkci konstruktoru), nikoliv na její instance. Volají se přímo přes název třídy s kulatými závorkami pro spuštění funkce: Mountain.className().\n- Proč jsou ostatní možnosti nesprávné:\n  - \"Mountain.className\": Odkazuje na referenci samotné funkce, nikoli na její spuštění (výsledkem by byl výpis definice funkce, nikoli řetězec 'Mountain').\n  - \"mountain['static className']()\": Pokus o volání neexistující vlastnosti na instanci, klíčové slovo static není součástí názvu metody.\n  - \"mountain.className()\": Statické metody nejsou dostupné na instancích objektu; toto volání vyvolá běhovou chybu TypeError: mountain.className is not a function."
      },
      {
        "id": "js2_q18",
        "module": "js2_m2",
        "question": "Analyze the following code:\n\nAs a result of its execution:",
        "code": "function First() {};\nclass Second extends First {};\nlet second = new Second();\nconsole.log(`${second instanceof First} ${second instanceof Second}`);",
        "options": [
          "false true will be displayed, because First is not a class.",
          "true true will be displayed because First will be treated as a constructor during inheritance.",
          "false false will be displayed, because Second inheriting from First will also be a function.",
          "an error will appear because you are trying to inherit in class Second from function First and not from another class."
        ],
        "correct": 1,
        "explanation": "Na snímku je kód, kde třída Second dědí pomocí extends z klasické konstruktorové funkce function First() {}, a zkoumá se výstup instanceof.\n\nOficiální vysvětlení: \"As a result of its execution, the following will be displayed:\ntrue true\nHere's why:\n1. second instanceof First returns true because second is an instance of the First constructor function. In JavaScript, constructor functions can be used as classes, and instanceof checks whether an object is an instance of a constructor function or its prototypes.\n2. second instanceof Second returns true because second is also an instance of the Second class, which inherits from First. The inheritance chain is preserved, so second is considered an instance of both First and Second.\"\n\nPodrobný rozbor:\n- Správná volba: \"true true will be displayed because First will be treated as a constructor during inheritance.\". V JavaScriptu jsou ES6 třídy syntaktickým cukrem nad konstruktorovými funkcemi a prototypovou dědičností. Klauzule extends může dědit z libovolného platného konstruktoru (tedy i z běžné funkce function First() {}). Operátor instanceof prochází prototypový řetězec objektu second, kde najde jak Second.prototype, tak First.prototype, takže obě podmínky vrátí true.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"false true ...\": First je konstruktor v prototypovém řetězci instance second, proto instanceof First vrátí true.\n  - \"false false ...\": second je instancí Second i First, navíc second je objekt, nikoliv funkce.\n  - \"an error will appear ...\": JavaScript plně podporuje dědění třídy z tradiční konstruktorové funkce, nedojde k žádné chybě."
      },
      {
        "id": "js2_q19",
        "module": "js2_m3",
        "question": "A value parameter is missing from the Number constructor in the place indicated in code:\n\nSelect the correct value so that the executed code results in the following console output: '0.01'",
        "code": "Number(INSERT MISSING CODE HERE).toFixed(2);",
        "options": [
          "0.01e-2",
          "'-0x01'",
          "'12e-3'",
          "1"
        ],
        "correct": 2,
        "explanation": "Na snímku je volání Number(...).toFixed(2) a hledá se hodnota, která po zaokrouhlení na 2 desetinná místa vrátí řetězec '0.01'.\n\nOficiální vysvětlení: \"To achieve the desired console output '12e-3', you should use the following value as the parameter for the Number constructor: '0.01'.\nThis code converts the string '12e-3' to a number using the Number constructor and then calls the toFixed method to format it with two decimal places, resulting in '0.01' as the output.\"\n\nPodrobný rozbor:\n- Správná volba: \"'12e-3'\". Řetězec '12e-3' představuje exponenciální zápis čísla 12 * 10^-3 = 0.012. Konstruktor Number('12e-3') převede tento řetězec na číslo 0.012. Metoda .toFixed(2) zformátuje číslo na pevných 2 desetinná místa se zaokrouhlením, což dává přesně '0.01'.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"0.01e-2\": Představuje číslo 0.01 * 10^-2 = 0.0001. Po volání .toFixed(2) je výsledkem '0.00'.\n  - \"'-0x01'\": JavaScript při převodu záporného hexadecimálního řetězce pomocí Number('-0x01') vrátí NaN (záporné znaménko není v hex literálech řetězců povoleno), takže výsledek by byl 'NaN'.\n  - \"1\": Number(1).toFixed(2) vrátí '1.00'."
      },
      {
        "id": "js2_q20",
        "module": "js2_m3",
        "question": "There is a line missing from the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: ['DO', 'CATS', 'EAT', 'BATS']",
        "code": "function test(str) {\n    // Insert line of code here.\n}\nconsole.log(test('Do cats eat bats'));",
        "options": [
          "return split(str.toUpperCase());",
          "return str.toUpperCase().split(' ');",
          "str.upperCase().split(' ');",
          "return str.split(' ').toUpperCase();"
        ],
        "correct": 1,
        "explanation": "Na snímku je funkce test(str), která má ze vstupního řetězce 'Do cats eat bats' vytvořit pole velkých písmen slov ['DO', 'CATS', 'EAT', 'BATS'].\n\nOficiální vysvětlení: \"To achieve the desired console output ['DO', 'CATS', 'EAT', 'BATS'], you should use the following missing line:\nreturn str.toUpperCase().split(' ');\nThis code converts the input string to uppercase and then splits it into an array of words using the space (' ') as the delimiter, resulting in the desired output.\"\n\nPodrobný rozbor:\n- Správná volba: \"return str.toUpperCase().split(' ');\". Metoda .toUpperCase() nejprve převede celý řetězec na velká písmena ('DO CATS EAT BATS'). Následná metoda .split(' ') rozdělí tento řetězec podle mezer na pole jednotlivých slov ['DO', 'CATS', 'EAT', 'BATS']. Klíčové slovo return vrátí toto nově vytvořené pole z funkce.\n- Proč jsou ostatní možnosti nesprávné:\n  - \"return split(str.toUpperCase());\": split není samostatná globální funkce, ale metoda prototypu String.prototype.split (dojde k chybě ReferenceError: split is not defined).\n  - \"str.upperCase().split(' ');\": Metoda se jmenuje toUpperCase, nikoli upperCase (způsobí TypeError), a navíc chybí klíčové slovo return.\n  - \"return str.split(' ').toUpperCase();\": Metoda .split(' ') vrátí pole (Array). Instance pole nemá metodu .toUpperCase(), takže volání skončí chybou TypeError: str.split(...).toUpperCase is not a function."
      },
      {
        "id": "js2_q21",
        "module": "js2_m3",
        "question": "The following code places a Date class object containing the current time into the currentTime variable:\n\nThe same effect can be achieved by using:",
        "code": "let currentTime = new Date(Date.now());",
        "options": [
          "let currentTime = new Date.now();",
          "There is no other way to achieve this effect.",
          "let currentTime = new Date();",
          "let currentTime = new Date().now();"
        ],
        "correct": 2,
        "explanation": "Správná odpověď: let currentTime = new Date();\n\nNa snímku obrazovky je otázka:\n„The following code places a Date class object containing the current time into the currentTime variable:\nlet currentTime = new Date(Date.now());\nThe same effect can be achieved by using:“\n\nOficiální vysvětlení ze zkoušky:\n„The same effect can be achieved by using:\nlet currentTime = new Date();\nThe new Date() constructor, without any arguments, automatically creates a Date object containing the current date and time. The other options you provided (new Date.now() and new Date().now()) are not valid and will result in errors.“\n\nPodrobné vysvětlení:\nKonstruktor vestavěné třídy Date v JavaScriptu při volání bez parametrů (new Date()) automaticky inicializuje nový objekt na aktuální systémové datum a čas.\nVolání Date.now() vrací aktuální časové razítko (počet milisekund od 1. 1. 1970 UTC). Předání tohoto čísla do konstruktoru new Date(Date.now()) vytvoří objekt se stejným časem jako prosté volání new Date().\n- Možnost 3 (let currentTime = new Date();) je správná.\n- new Date.now() je syntaktická chyba, protože now je metoda funkce/třídy Date, nikoli konstruktor.\n- new Date().now() způsobí TypeError, jelikož instance Date metodu now() nemá (now je statická metoda třídy Date).\n- Možnost, že jiný způsob neexistuje, je nepravdivá."
      },
      {
        "id": "js2_q22",
        "module": "js2_m3",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];\nlet result1 = points.some(e => e.y < 10)\nlet result2 = points.every(e => e.y > 10)\nconsole.log(`${result1} ${result2}`);",
        "options": [
          "false true",
          "null {x: 10, y: 20}",
          "Undefined {x: 10, y: 20}",
          "-1 1"
        ],
        "correct": 0,
        "explanation": "Správná odpověď: false true\n\nNa snímku obrazovky je otázka:\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\nfalse true\nHere's why:\n1. result1 is false because the some method checks if any of the elements in the points array have a y value that is less than 10. In this case, none of the elements meet this condition, so it returns false.\n2. result2 is true because the every method checks if all of the elements in the points array have a y value that is greater than 10. In this case, all of the elements meet this condition, so it returns true.“\n\nPodrobné vysvětlení:\n1. Metoda Array.prototype.some() ověřuje, zda alespoň jeden prvek pole vyhovuje testovací funkci (predikátu). Zde se testuje e.y < 10. Hodnoty y v poli jsou 20, 30 a 100. Žádná z nich není menší než 10, proto some() vrátí false.\n2. Metoda Array.prototype.every() zjišťuje, zda všechny prvky v poli splňují podmínku e.y > 10. Protože 20 > 10, 30 > 10 i 100 > 10 platí pro všechny prvky, metoda vrátí true.\nVýsledný řetězec v console.log(`${result1} ${result2}`) je proto \"false true\"."
      },
      {
        "id": "js2_q23",
        "module": "js2_m3",
        "question": "There is one line missing in the code below:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let points = [{x: 20, y: 20}, {x: 10, y: 30}, {x: 10, y: 100}];\n// Insert line of code here.\nconsole.log(result);",
        "options": [
          "let result = points.map((e,n) => {n = e.x + e.y});",
          "let result = points.map(e => e.x + e.y);",
          "let result = points.map(e => {e.x + e.y});",
          "let result = points.map(x + y);"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: let result = points.map(e => e.x + e.y);\n\nNa snímku obrazovky je zadání:\n„There is one line missing in the code below:\n... What will appear in the console as a result of code execution?“\n(Autor testu v Cisco v podotázce omylem zkopíroval větu o výstupu, nabízené možnosti však představují chybějící řádek kódu).\n\nOficiální vysvětlení ze zkoušky:\n„To calculate the sum of x and y for each object in the points array and store the results in the result array, you should use the following missing line:\nlet result = points.map(e => e.x + e.y);\nThis code uses the map method to iterate through the points array and calculates the sum of x and y for each object, storing the results in the result array. The console will display the result array, containing the sum of x and y for each object in the points array.“\n\nPodrobné vysvětlení:\nMetoda Array.prototype.map() prochází pole a vytváří nové pole z návratových hodnot předané funkce.\n- Šipková funkce e => e.x + e.y bez složených závorek představuje zkrácený zápis s implicitním vrácením hodnoty (implicit return), takže pro každý prvek vrátí součet x a y. Výsledkem bude pole [40, 40, 110].\n- Zápis se složenými závorkami e => {e.x + e.y} neobsahuje klíčové slovo return, takže vrací undefined pro každý prvek.\n- Zápis (e,n) => {n = e.x + e.y} rovněž nemá return a zbytečně přepisuje parametr indexu n.\n- points.map(x + y) je syntaktická/referenční chyba (proměnné x a y nejsou definovány)."
      },
      {
        "id": "js2_q24",
        "module": "js2_m3",
        "question": "There is one line missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: ['a', 'x', 'y', 'e']",
        "code": "let x = ['a', 'b', 'c', 'd', 'e'];\nx.splice(1, 3);\n// Insert line of code here.\nconsole.log(x);",
        "options": [
          "x.splice(1, 'x', 'y');",
          "x.splice(1, 0, 2, 'x', 'y');",
          "x.splice(1, 2, 'x', 'y');",
          "x.splice(1, 0, 'x', 'y');"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: x.splice(1, 0, 'x', 'y');\n\nNa snímku obrazovky je zadání:\n„There is one line missing in the code below:\n... Select the correct missing line so that the executed code results in the following console output: ['a', 'x', 'y', 'e']“\n\nOficiální vysvětlení ze zkoušky:\n„To achieve the desired console output ['a', 'x', 'y', 'e'], you should use the following missing line:\nx.splice(1, 0, 'x', 'y');\nThis code first removes elements at index 1 with a count of 3 using x.splice(1, 3);, and then it inserts 'x' and 'y' at index 1 using x.splice(1, 0, 'x', 'y');, resulting in the desired output.“\n\nPodrobné vysvětlení:\nPůvodní pole má prvky ['a', 'b', 'c', 'd', 'e'].\n1. Volání x.splice(1, 3) začíná na indexu 1 a odstraní 3 prvky ('b', 'c', 'd'). V poli zůstává ['a', 'e'].\n2. Nyní chceme na index 1 vložit nové prvky 'x' a 'y', aniž bychom mazali jakýkoliv stávající prvek. K tomu slouží syntaxe splice(start, deleteCount, item1, item2, ...), kde nastavením deleteCount = 0 pouze vkládáme.\nSprávné volání je tedy x.splice(1, 0, 'x', 'y');, což vytvoří pole ['a', 'x', 'y', 'e'].\n- x.splice(1, 2, 'x', 'y') by smazalo 2 prvky od indexu 1 (prvek 'e').\n- x.splice(1, 0, 2, 'x', 'y') by do pole navíc vložilo i číslo 2.\n- x.splice(1, 'x', 'y') předává řetězec 'x' jako deleteCount, což je chybná sémantika."
      },
      {
        "id": "js2_q25",
        "module": "js2_m3",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let s = new Set([1, 2, '100']);\ns.add(2);\ns.add('2');\nconsole.log(`${s.has(2)} ${s.has('2')} ${s.size}`);",
        "options": [
          "true false 3",
          "true true undefined",
          "true true 4",
          "true false 4"
        ],
        "correct": 2,
        "explanation": "Správná odpověď: true true 4\n\nNa snímku obrazovky je kód testující chování objektu Set:\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\ntrue true 4\nHere's the explanation:\n1. s.has(2) returns true because the Set s contains the number 2.\n2. s.has('2') returns true because the Set s also contains the string '2'. In Sets, values are considered distinct based on their value, not their type, so both the number 2 and the string '2' are distinct elements.\n3. s.size returns 4 because the Set s contains four distinct elements: 1, 2, '100', and '2'.“\n\nPodrobné vysvětlení:\nDatová struktura Set ukládá unikátní hodnoty a k jejich porovnání využívá algoritmus SameValueZero. Tento algoritmus striktně rozlišuje datové typy (podobně jako operátor ===).\n- Původní množina obsahuje prvky: číslo 1, číslo 2, řetězec '100'.\n- s.add(2): číslo 2 již v množině existuje, proto se znovu nepřidá.\n- s.add('2'): řetězec '2' má odlišný typ od čísla 2, jedná se o nový unikátní prvek, který je úspěšně přidán.\n- s.has(2) je true, s.has('2') je true.\n- Vlastnost s.size udává počet prvků množiny, kterých je nyní 4 (1, 2, '100', '2').\nVýstup v konzoli je \"true true 4\"."
      },
      {
        "id": "js2_q26",
        "module": "js2_m3",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let m = new Map([[1, '11'], ['2', 22]]);\nm.set(1, '11');\nm.set(1, '111');\nconsole.log(`${m.size}`);",
        "options": [
          "2",
          "4",
          "3",
          "undefined"
        ],
        "correct": 0,
        "explanation": "Správná odpověď: 2\n\nNa snímku obrazovky je kód pracující s kolekcí Map:\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\n2\nHere's the explanation:\n1. The initial Map m is created with two key-value pairs: [1, '11'] and ['2', 22]. The keys 1 and '2' are distinct because '2' is a string and 1 is a number.\n2. m.set(1, '11') updates the existing entry with key 1 to have the value '11'. So, there's still only one entry with key 1, and its value is '11'.\n3. m.set(1, '111') updates the existing entry with key 1 again, changing its value to '111'. The key 1 remains unique in the Map.\nAs a result, the Map m still contains only two distinct key-value pairs, which is why m.size is 2.“\n\nPodrobné vysvětlení:\nKolekce Map ukládá dvojice klíč-hodnota. Každý klíč může v mapě existovat pouze jednou.\n1. Inicializace new Map(...) vytvoří mapu se 2 položkami: klíč číslo 1 (hodnota '11') a klíč řetězec '2' (hodnota 22).\n2. m.set(1, '11') pouze přepíše hodnotu pro stávající klíč 1 na '11'.\n3. m.set(1, '111') opět aktualizuje hodnotu pro tentýž existující klíč 1 na '111'. Nový klíč nevzniká.\nMapa tedy stále obsahuje pouze dva unikátní klíče (číslo 1 a řetězec '2'), proto m.size vrací 2."
      },
      {
        "id": "js2_q27",
        "module": "js2_m3",
        "question": "The following data is stored in JSON format:\n\nWhich statement/command should you use to convert the data to an object that will be written to the mountain variable?",
        "code": "let strMountain = '{ \"name\": \"Lhotse\", \"range\": \"Himalayas\" }';",
        "options": [
          "let mountain = JSON.parse(strMountain);",
          "let mountain = JSON.stringify(strMountain);",
          "let mountain = Object(strMountain);",
          "let mountain = JSON(strMountain);"
        ],
        "correct": 0,
        "explanation": "Správná odpověď: let mountain = JSON.parse(strMountain);\n\nNa snímku obrazovky je otázka:\n„The following data is stored in JSON format:\nlet strMountain = '{ \"name\": \"Lhotse\", \"range\": \"Himalayas\" }';\nWhich statement/command should you use to convert the data to an object that will be written to the mountain variable?“\n\nOficiální vysvětlení ze zkoušky:\n„To convert the JSON data into an object and store it in the mountain variable, you should use the following statement:\nlet mountain = JSON.parse(strMountain);\nThe JSON.parse() function is used to parse a JSON string and convert it into a JavaScript object, which is what you want to achieve in this case.“\n\nPodrobné vysvětlení:\n- Funkce JSON.parse() zpracuje (deserializuje) textový řetězec ve formátu JSON a převede jej na nativní JavaScriptový objekt.\n- Funkce JSON.stringify() provádí opačnou operaci: serializuje JS objekt do řetězce JSON.\n- Object(strMountain) vytvoří obalový objekt typu String, nikoliv rozparsovaný objekt s vlastnostmi name a range.\n- JSON(strMountain) skončí chybou TypeError: JSON is not a function, protože vestavěný objekt JSON není konstruktor ani funkce, nýbrž statický namespace."
      },
      {
        "id": "js2_q28",
        "module": "js2_m3",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "console.log(`${Math.round(1.5)} ${Math.floor(1.7)} ${Math.ceil(1.2)}`)",
        "options": [
          "1 2 1",
          "1 1 1",
          "2 2 2",
          "2 1 2"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: 2 1 2\n\nNa snímku obrazovky je otázka:\n„Analyze the following code:\nconsole.log(`${Math.round(1.5)} ${Math.floor(1.7)} ${Math.ceil(1.2)}`)\nWhat will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\n2 1 2\nHere's the explanation:\n1. Math.round(1.5) rounds the number 1.5 to the nearest integer, which is 2.\nMath.floor(1.7) rounds the number 1.7 down to the nearest integer, which is 1.\n2. Math.ceil(1.2) rounds the number 1.2 up to the nearest integer, which is 2.\nSo, you get the output 2 1 2.“\n\nPodrobné vysvětlení:\n1. Math.round(1.5) zaokrouhluje na nejbližší celé číslo. Pokud je desetinná část rovna přesně .5, zaokrouhluje se směrem nahoru (ke kladnému nekonečnu), tedy 1.5 se zaokrouhlí na 2.\n2. Math.floor(1.7) zaokrouhluje vždy dolů na nejbližší menší nebo rovné celé číslo, tedy na 1.\n3. Math.ceil(1.2) zaokrouhluje vždy nahoru na nejbližší větší nebo rovné celé číslo, tedy na 2.\nVýsledkem v konzoli je \"2 1 2\"."
      },
      {
        "id": "js2_q29",
        "module": "js2_m3",
        "question": "You have created an object of the RegExp class that you want to use to search for regular expressions:\n\nSelect the correct alternative form of this declaration:",
        "code": "let r = new RegExp('.\\.jpg');",
        "options": [
          "let r = RegExp('.\\.jpg');",
          "let r = \\.\\.jpg\\;",
          "let r = (. \\.jpg);",
          "let r = /.\\.jpg/;"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: let r = /.\\.jpg/;\n\nNa snímku obrazovky je zadání:\n„You have created an object of the RegExp class that you want to use to search for regular expressions:\nlet r = new RegExp('.\\.jpg');\nSelect the correct alternative form of this declaration:“\n\nOficiální vysvětlení ze zkoušky:\n„The correct alternative form of the declaration to create a regular expression for searching '.jpg' is:\nlet r = /.\\.jpg/;\nThis uses the regular expression literal notation with forward slashes (/) and escapes the dot (.) with a backslash (\\) to match the dot character in the string '.jpg'.“\n\nPodrobné vysvětlení:\nV JavaScriptu existují dva základní způsoby zápisu regulárních výrazů:\n1. Konstruktor RegExp('pattern', 'flags') – vzor je předán jako řetězec, takže pro vložení znaku zpětného lomítka do regulárního výrazu je nutné lomítko v řetězci zdvojit ('\\.'). Výraz '.\\.jpg' tedy reprezentuje vzor .\\.jpg (jeden libovolný znak, po němž následuje tečka a přípona jpg).\n2. Literálová notace /pattern/flags ohraničená lomítky – zde se vzor zapisuje přímo bez řetězcového escapování, tedy /.\\.jpg/.\n- Možnost let r = /.\\.jpg/; je správný ekvivalent v literálové notaci.\n- Ostatní možnosti obsahují neplatnou syntaxi (zpětná lomítka bez uvozovek nebo kulaté závorky)."
      },
      {
        "id": "js2_q30",
        "module": "js2_m1",
        "question": "Analyze the following code:\n\nAs a result of its execution:",
        "code": "let a = [1,2];\nArray.prototype.test = function(){\n    console.log('test');\n}\nlet b = [3,4];\na.test();\nb.test();",
        "options": [
          "an error appears, because the test method is bound to the Array class and not to the objects created from it (objects a and b do not have the test method).",
          "a single message 'test' appears in the console (object a does not have the test method).",
          "an error appears when trying to execute a.test() , because the method was added after the creation of the array object a.",
          "two 'test' messages appear in the console."
        ],
        "correct": 3,
        "explanation": "Správná odpověď: two 'test' messages appear in the console.\n\nNa snímku obrazovky je otázka:\n„Analyze the following code:\n... As a result of its execution:“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of its execution, two 'test' messages appear in the console.\nHere's the explanation:\n1. The Array.prototype.test function is added to the prototype of the Array class, so all array objects, including a and b, inherit this method.\n2. When you call a.test(), it successfully invokes the Array.prototype.test method and logs 'test' to the console.\n3. When you call b.test(), it also successfully invokes the Array.prototype.test method and logs another 'test' message to the console.“\n\nPodrobné vysvětlení:\nVšechna pole v JavaScriptu dědí své metody z prototypového objektu Array.prototype prostřednictvím interního odkazu [[Prototype]].\nV JavaScriptu je prototypový řetězec (prototype chain) dynamický a živý:\n- Když do Array.prototype přidáme metodu test, stává se okamžitě dostupnou pro všechny existující instance (pole a vytvořené před přiřazením) i pro všechny nově vytvořené instance (pole b vytvořené po přiřazení).\n- Volání a.test() i b.test() obě úspěšně naleznou metodu test v Array.prototype a každé vypíše 'test'. Celkem se tedy v konzoli objeví dvě zprávy 'test'."
      },
      {
        "id": "js2_q31",
        "module": "js2_m4",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let fn = function ( a, b,...rest) {\n    console.log(`${a.length} ${rest.length}`);\n}\nfn('1', '2', '3', '4', '5');",
        "options": [
          "undefined 3",
          "1 3",
          "1 undefined",
          "5 undefined"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: 1 3\n\nNa snímku obrazovky je kód testující rest parametry funkce:\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\n1 3\nHere's the explanation:\n1. The function fn takes three parameters: a, b, and the rest parameter rest. The rest parameter rest collects any additional arguments into an array.\n2. When you call fn('1', '2', '3', '4', '5'), the a parameter receives the string '1', the b parameter receives the string '2', and the rest parameter collects the remaining arguments '3', '4', and '5' into an array.\n3. a.length returns the length of the string '1', which is 1.\n4. rest.length returns the length of the array rest, which contains the values '3', '4', and '5', so its length is 3.\nHence, you get the output 1 3“\n\nPodrobné vysvětlení:\n- Parametr a obdrží první předaný argument: řetězec '1'. Vlastnost '1'.length je 1.\n- Parametr b obdrží druhý argument: řetězec '2'.\n- Rest parametr ...rest posbírá všechny zbývající argumenty ('3', '4', '5') a uloží je do standardního pole rest = ['3', '4', '5'].\n- Pole rest obsahuje 3 prvky, proto rest.length vrací 3.\nVýsledný výpis v konzoli je \"1 3\"."
      },
      {
        "id": "js2_q32",
        "module": "js2_m4",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let msg = 'Bob';\nlet ret = (function (){\n    let msg = 'Marley';\n    return msg;\n})();\nconsole.log(`${msg} ${ret}`);",
        "options": [
          "Marley Bob",
          "Marley Marley",
          "Bob Bob",
          "Bob Marley"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: Bob Marley\n\nNa snímku obrazovky je kód demonstrující IIFE a rozsah platnosti proměnných:\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\nBob Marley\nHere's the explanation:\n1. The outer msg variable is assigned the string 'Bob'.\n2. Inside the immediately-invoked function expression (IIFE), there's a local msg variable assigned the string 'Marley'.\n3. The IIFE returns the value of its local msg variable, which is 'Marley'.\n4. When you console.log() the values of msg and ret, you get 'Bob' for the outer msg variable and 'Marley' for the ret variable, resulting in the output 'Bob Marley'. The outer msg variable is not affected by the local msg variable inside the IIFE because they are in different scopes.“\n\nPodrobné vysvětlení:\n1. V globálním/vnějším rozsahu platnosti je deklarována proměnná let msg = 'Bob'.\n2. Funkční výraz (function(){ ... })() je okamžitě vyvolaná funkce (IIFE). Uvnitř ní je deklarována lokální proměnná let msg = 'Marley'. Tato lokální proměnná existuje pouze uvnitř těla IIFE a zastiňuje vnější proměnnou.\n3. Funkce vrátí hodnotu své lokální proměnné ('Marley'), která se přiřadí do proměnné ret.\n4. Vnější proměnná msg zůstává nezměněna s hodnotou 'Bob'.\nVýsledný výstup v konzoli je \"Bob Marley\"."
      },
      {
        "id": "js2_q33",
        "module": "js2_m4",
        "question": "There is one line missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: 25",
        "code": "let fn = function(msg, n) {\n    console.log(`${msg}: ${this.a ** n}`);\n}\n// Insert line of code here.\nbfn(2, 3);",
        "options": [
          "let bfn = fn.bind({a: 5}, 'result');",
          "let bfn = fn.apply({a: 5}, 'result');",
          "let bfn = fn.call({a: 5}, 'result');",
          "let bfn = fn.bind({a: 5});"
        ],
        "correct": 3,
        "explanation": "Správná odpověď: let bfn = fn.bind({a: 5});\n\nNa snímku obrazovky je otázka:\n„There is one line missing in the code below:\n... Select the correct missing line so that the executed code results in the following console output: 25“\n\nOficiální vysvětlení ze zkoušky:\n„To achieve the desired console output, you should use the following missing line:\nlet bfn = fn.bind({ a: 5 });\nThis code binds the fn function to an object with the property a: 5. When you call bfn(2, 3), it calculates 5 ** 3, resulting in the output '25'.“\n\nPodrobné vysvětlení:\nKód na řádku 5 volá novou funkci bfn(2, 3). Z metod manipulujících s kontextem this (bind, call, apply) pouze metoda Function.prototype.bind() vrací novou navázanou funkci, kterou lze později volat. Metody call a apply funkci ihned vykonají a vrátí její návratovou hodnotu (což by do bfn uložilo undefined a následné volání bfn() by skončilo chybou TypeError: bfn is not a function).\n- Správná možnost je let bfn = fn.bind({a: 5});.\n- Poznámka ke známé chybě v testu Cisco: Autor otázky v oficiálním vysvětlení nesmyslně uvádí, že 5 ** 3 je 25 (ve skutečnosti je 5 ** 2 = 25 a 5 ** 3 = 125) a přehlíží prefix `${msg}: `. Jedná se o známou chybu v testovací databázi Cisco, kde je však jako jediná správná odpověď nastavena právě možnost bind({a: 5})."
      },
      {
        "id": "js2_q34",
        "module": "js2_m4",
        "question": "A decorator is:",
        "code": null,
        "options": [
          "a function that wraps another function, changing its functionality to some extent.",
          "a class that inherits from another class.",
          "an iterator type.",
          "an elegant way of writing comments in a function."
        ],
        "correct": 0,
        "explanation": "Správná odpověď: a function that wraps another function, changing its functionality to some extent.\n\nNa snímku obrazovky je teoretická otázka:\n„A decorator is:“\nNa snímku je dole rámeček s hláškou „That's not Right!“, který se objevil, protože student během zkoušky zvolil nesprávnou možnost.\n\nOficiální definice a vysvětlení:\n„In JavaScript, a decorator is a higher-order function that wraps another function, extending or modifying its behavior without altering its original implementation. The box at the bottom displays 'That's not Right!' because an incorrect option was selected during the test.“\n\nPodrobné vysvětlení:\nV programování a konkrétně v JavaScriptu je dekorátor návrhový vzor implementovaný jako funkce vyššího řádu (higher-order function). Přebírá existující funkci jako parametr a vrací novou funkci, která obaluje původní funkci a přidává k ní novou funkcionalitu (např. logování, cachování, měření výkonu, validaci oprávnění), aniž by zasahovala do původního kódu.\n- Možnost 1 („a function that wraps another function, changing its functionality to some extent“) je přesnou definicí dekorátoru v kurzu JSE 2.\n- Dekorátor není třída dědící z jiné třídy, není to typ iterátoru ani způsob psaní komentářů."
      },
      {
        "id": "js2_q35",
        "module": "js2_m4",
        "question": "There is one line missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: a b",
        "code": "function* testGenerator() {\n    // Insert line of code here.\n}\nlet gen = testGenerator(2);\nconsole.log(`${gen.next().value} ${gen.next().value}`);",
        "options": [
          "yield ['a', 'b'];",
          "yield* ['a', 'b', 'c', 'd'];",
          "yield ['a', 'b', 'c', 'd'];",
          "return ['a', 'b'];"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: yield* ['a', 'b', 'c', 'd'];\n\nNa snímku obrazovky je otázka:\n„There is one line missing in the code below:\n... Select the correct missing line so that the executed code results in the following console output: a b“\n\nOficiální vysvětlení ze zkoušky:\n„To achieve the desired console output, you should use the following missing line:\nyield* ['a', 'b', 'c', 'd'];\nThis code defines a generator function testGenerator that yields values from the array ['a', 'b', 'c', 'd']. When you call gen.next().value twice, it yields 'a' and 'b', resulting in the output 'a b'.“\n\nPodrobné vysvětlení:\nGenerátory v JavaScriptu (funkce definované pomocí function*) používají k postupnému generování hodnot příkaz yield a yield*:\n- Běžný příkaz yield vrací jako hodnotu celý předaný výraz. yield ['a', 'b', 'c', 'd'] by tedy při prvním volání gen.next().value vrátil celé pole ['a', 'b', 'c', 'd'] a při druhém undefined.\n- Příkaz delegování yield* iteruje přes předaný iterovatelný objekt (zde pole) a postupně yieldne každý jeho jednotlivý prvek. První volání gen.next().value vrátí 'a', druhé volání gen.next().value vrátí 'b'.\n- Šablona `${gen.next().value} ${gen.next().value}` proto správně vytvoří výstup \"a b\".\n- Klíčové slovo return by generátor ihned ukončilo."
      },
      {
        "id": "js2_q36",
        "module": "js2_m4",
        "question": "There is one line missing in the code below:\n\nSelect the correct missing line in order for the the console to display test with a delay of 3 seconds:",
        "code": "let fn = msg => console.log(msg);\nsetTimeout(() => {\n    // Insert line of code here.\n}, 1000);",
        "options": [
          "setTimeout(fn, 2000);",
          "setTimeout(fn.bind(this, 'test'), 2000);",
          "setTimeout(fn, 3000);",
          "fn('test', 3000);"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: setTimeout(fn.bind(this, 'test'), 2000);\n\nNa snímku obrazovky je zadání:\n„There is one line missing in the code below:\n... Select the correct missing line in order for the the console to display test with a delay of 3 seconds:“\n(V textu originálu je doslova překlep \"for the the console\").\n\nOficiální vysvětlení ze zkoušky:\n„To make the console display 'test' with a delay of 3 seconds, you should use the following missing line:\nsetTimeout(fn.bind(this, 'test'), 3000);\nThis code sets a timeout for 3 seconds and uses the fn function with the message 'test' by binding it with fn.bind(this, 'test'). After 3 seconds, 'test' will be logged to the console.“\n\nPodrobné vysvětlení (včetně známé chyby v textu vysvětlení Cisco):\nKód již obsahuje vnější setTimeout s prodlevou 1000 ms (1 sekunda). Aby celková doba do vypsání zprávy byla 3 sekundy (3000 ms), musí vnitřní časovač čekat dalších 2000 ms (1000 ms + 2000 ms = 3000 ms).\nZároveň funkce fn očekává argument msg. Pomocí fn.bind(this, 'test') je vytvořena nová funkce, která při vyvolání předá argument 'test'.\n- Správná možnost z nabízených je setTimeout(fn.bind(this, 'test'), 2000);.\n- V textu oficiálního vysvětlení autor Cisco omylem napsal 3000 namísto 2000, ale v nabídce odpovědí je jedinou možností předávající 'test' právě varianta s 2000 ms (ostatní možnosti s 3000 ms buď nepředávají text 'test', nebo nevolají setTimeout)."
      },
      {
        "id": "js2_q37",
        "module": "js2_m4",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let p = new Promise (function(resolve, reject) {\n    setTimeout(() => resolve(1), 1000);\n});\n.then(a => console.log(`a ${a}`), b => console.log(`b ${b}`));",
        "options": [
          "b 1",
          "a 1",
          "a 1 b 1",
          "a"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: a 1\n\nNa snímku obrazovky je kód testující metodu .then() u Promise:\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\na 1\nHere's the explanation:\n1. A Promise p is created, which resolves with the value 1 after a delay of 1000 milliseconds using setTimeout.\n2. The p.then() method is used to attach two callbacks: one for when the promise resolves (a => console.log(`a ${a}`)) and one for when it rejects (b => console.log(`b ${b}`)).\n3. Since the promise p successfully resolves, the first callback is executed, and you get the output 'a 1'.\nThe second callback (b => console.log(`b ${b}`)) is not executed because there was no rejection in this case.“\n\nPodrobné vysvětlení:\nMetoda Promise.prototype.then(onFulfilled, onRejected) přijímá dva volitelné argumenty:\n1. onFulfilled callback, který se zavolá při úspěšném splnění promisu (resolve).\n2. onRejected callback, který se zavolá při zamítnutí promisu (reject).\nProtože promis po 1 sekundě provede resolve(1), vyvolá se pouze první funkce s argumentem a = 1. Ta provede console.log(`a ${a}`), což do konzole vypíše \"a 1\". Druhý callback se vůbec nespustí.\n(Poznámka: Tečka před .then na samostatném řádku po středníku je drobná typografická chyba v testovém zadání Cisco, zamýšleno bylo navázání na předchozí Promise)."
      },
      {
        "id": "js2_q38",
        "module": "js2_m4",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let p = new Promise(function(resolve){\n    setTimeout(() => resolve(10), 100);\n});\nlet r = new Promise(function(resolve){\n    setTimeout(() => resolve(30), 150);\n});\np.then(a => {\n    console.log(a);\n    return r;\n})\n.then(a => {\n    console.log(a);\n    return 50;\n})\n.then(a => {\n    console.log(a);\n}",
        "options": [
          "10",
          "10 30",
          "10 30 50",
          "10 50"
        ],
        "correct": 2,
        "explanation": "Správná odpověď: 10 30 50\n\nNa snímku obrazovky je kód řetězení promisů (Promise chaining):\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\n10 30 50\nHere's the explanation of the code execution step by step:\n1. Two promises, p and r, are created. p resolves with the value 10 after 100 milliseconds, and r resolves with the value 30 after 150 milliseconds.\n2. The p.then() method is used, which attaches a callback to be executed when p resolves. In this callback, the value 10 is logged to the console.\n3. Inside the p.then() callback, a new promise r is returned, which means that the subsequent then will wait for the resolution of r.\n4. The next then() method is called on the result of r, which attaches another callback. When r resolves, the value 30 is logged to the console.\n5. Inside the second then() callback, the value 50 is returned, and another then() is called on it.\n6. Finally, in the third then() callback, the value 50 is logged to the console.\nSo, the output in the console is '10' (from the first then()), '30' (from the second then()), and '50' (from the third then()).“\n\nPodrobné vysvětlení:\n1. Promis p se vyřeší po 100 ms s hodnotou 10. První .then() obdrží a = 10, vypíše 10 a vrátí promis r.\n2. Následující .then() počká na vyřešení vráceného promisu r. Ten se vyřeší s hodnotou 30, druhý .then() tedy obdrží a = 30, vypíše 30 a vrátí hodnotu 50.\n3. Třetí .then() obdrží vrácené číslo 50 jako a a vypíše 50.\nPostupný výstup v konzoli je tedy 10, 30, 50."
      },
      {
        "id": "js2_q39",
        "module": "js2_m4",
        "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
        "code": "let p = new Promise(function (resolve, reject) {\n    setTimeout(() => resolve('abc'), 100);\n});\nasync function afn() {\n    console.log('def');\n    let x = await p;\n    console.log(x);\n}\nafn();\nconsole.log('ghi');",
        "options": [
          "def ghi abc",
          "abc ghi def",
          "ghi abc def",
          "ghi def abc"
        ],
        "correct": 0,
        "explanation": "Správná odpověď: def ghi abc\n\nNa snímku obrazovky je kód testující pořadí provádění asynchronních funkcí async/await a smyčky událostí:\n„Analyze the following code:\n... What will appear in the console as a result of code execution?“\n\nOficiální vysvětlení ze zkoušky:\n„As a result of the code execution, the following will appear in the console:\ndef ghi abc\nHere's the explanation of the code execution step by step:\n1. A promise p is created, which resolves with the value 'abc' after a delay of 100 milliseconds.\n2. An asynchronous function afn is defined.\n3. Inside the afn function, the first console.log('def') is executed, logging 'def' to the console.\n4. The await p line waits for the promise p to resolve. During this time, the control is returned to the event loop, and the next line (console.log('ghi')) is executed.\n5. The console.log('ghi') line logs 'ghi' to the console.\n6. Once the promise p resolves (after 100 milliseconds), the control returns to the afn function, and the value 'abc' is assigned to x.\n7. The console.log(x) line logs 'abc' to the console.\nSo, the output in the console is 'def', 'ghi', and 'abc' in that order.“\n\nPodrobné vysvětlení:\n1. Spuštěním afn() se funkce začne provádět synchronně až po první await. První řádek console.log('def') okamžitě vypíše 'def'.\n2. Na řádku let x = await p; se vykonávání afn pozastaví, funkce vrátí nevyřízený promis a řízení se předá zpět do hlavního vlákna.\n3. Následující synchronní příkaz console.log('ghi') na hlavní úrovni se ihned provede a vypíše 'ghi'.\n4. Po 100 ms se promis p vyřeší s hodnotou 'abc'. Zbytek funkce afn je naplánován do fronty mikrotasků, kde se dokončí a console.log(x) vypíše 'abc'.\nVýsledné pořadí v konzoli je: \"def ghi abc\"."
      },
      {
        "id": "js2_q40",
        "module": "js2_m4",
        "question": "There is one line missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: 200",
        "code": "let request = new XMLHttpRequest();\nlet fn = function() {\n    console.log(request.status);\n}\n// Insert line of code here.",
        "options": [
          "request.addEventListener(fn);",
          "request.addEventListener('load', fn);",
          "abc ghi def",
          "request('load', fn);"
        ],
        "correct": 1,
        "explanation": "Správná odpověď: request.addEventListener('load', fn);\n\nNa snímku obrazovky je zadání:\n„There is one line missing in the code below:\n... Select the correct missing line so that the executed code results in the following console output: 200“\n\nOficiální vysvětlení ze zkoušky:\n„To make the code execute and result in the console output '200', you should add the following line:\nrequest.addEventListener('load', fn);\nThe code listens for the load event, and when the request is complete, it logs the HTTP status code (request.status) to the console. If the HTTP request is successful and the server responds with a status code of 200 (OK), the output would be: 200“\n\nPodrobné vysvětlení:\nObjekt XMLHttpRequest umožňuje odesílat HTTP požadavky. Pro zpracování odpovědi se registruje posluchač události pomocí metody addEventListener(event, callback):\n- Událost 'load' nastane, jakmile je požadavek úspěšně dokončen (bez ohledu na HTTP status kód). Uvnitř callbacku fn se v request.status nachází číselný stav odpovědi (např. 200 pro OK).\n- Správný zápis je request.addEventListener('load', fn);.\n- request.addEventListener(fn) je chybný, protože chybí povinný název události jako první parametr.\n- request('load', fn) skončí chybou TypeError, protože request je objekt, nikoliv funkce.\n- Možnost abc ghi def je zjevná chyba/artefakt ze zkušebního systému Cisco (přenesený distractor z otázky 39)."
      }
    ]
  },
  "devnet": {
    "id": "devnet",
    "category": "automation",
    "categoryName": "DevNet & Automatizace",
    "title": "Cisco Networking Academy: DevNet Associate",
    "subtitle": "Příprava na certifikaci DEVASC 200-901 (Cisco Certified DevNet Associate)",
    "badge": "DevNet Associate",
    "icon": "fas fa-code-branch",
    "color": "#00bceb",
    "passScore": 70,
    "timeLimit": 75,
    "examQuestionCount": 50,
    "modules": [
      {
        "id": "devnet_m1",
        "name": "Modul 1: Software Development and Design"
      },
      {
        "id": "devnet_m2",
        "name": "Modul 2: Understanding and Using APIs"
      },
      {
        "id": "devnet_m3",
        "name": "Modul 3: Cisco Platforms and Development"
      },
      {
        "id": "devnet_m4",
        "name": "Modul 4: Application Deployment and Security"
      },
      {
        "id": "devnet_m5",
        "name": "Modul 5: Infrastructure and Automation"
      },
      {
        "id": "devnet_m6",
        "name": "Modul 6: Network Fundamentals"
      }
    ],
    "questions": []
  },
  "linux": {
    "id": "linux",
    "category": "systems",
    "categoryName": "Počítačové systémy a sítě",
    "title": "Cisco Networking Academy: NDG Linux Essentials",
    "subtitle": "Příprava na certifikaci LPI Linux Essentials (010-160) & NDG Linux",
    "badge": "NDG Linux Essentials",
    "icon": "fab fa-linux",
    "color": "#EAA01A",
    "passScore": 70,
    "timeLimit": 60,
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
    "examQuestionCount": 40,
    "questions": []
  },
  "ccna_itn": {
    "id": "ccna_itn",
    "category": "systems",
    "categoryName": "Počítačové systémy a sítě",
    "title": "Cisco Networking Academy: CCNA: Introduction to Networks (ITN)",
    "subtitle": "Příprava na certifikaci CCNA v7 ITN (Modul 1) / CCNA 200-301",
    "badge": "CCNA: ITN",
    "icon": "fas fa-ethernet",
    "color": "#049FD9",
    "passScore": 70,
    "timeLimit": 75,
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
    "examQuestionCount": 50,
    "questions": []
  }
};
