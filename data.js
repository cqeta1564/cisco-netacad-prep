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
    "examQuestionCount": 35,
    "questions": [
      {
        "id": "html_q01",
        "module": "html_m4",
        "question": "How do you correctly add a simple JavaScript alert that says \"Clicked!\" when a button is clicked?",
        "code": null,
        "options": [
          "<button onclick=\"alert('Clicked!')\">Click me</button>",
          "<button action=\"alert('Clicked!')\">Click me</button>",
          "<button on-click=\"alert('Clicked!')\">Click me</button>",
          "<button><onclick=\"alert('Clicked!')\">Click me</button>"
        ],
        "correct": 0,
        "explanation": "Klikací událost tlačítka se v HTML definuje atributem onclick=\"...\". Správná odpověď: <button onclick=\"alert('Clicked!')\">Click me</button>."
      },
      {
        "id": "html_q02",
        "module": "html_m4",
        "question": "What does the alt attribute provide when used within an <img> element?",
        "code": null,
        "options": [
          "It specifies an alternate text for an image, if the image cannot be displayed.",
          "It defines the image's size and dimensions.",
          "It adds a caption below the image.",
          "It specifies the source URL of the image."
        ],
        "correct": 0,
        "explanation": "Atribut 'alt' u tagu <img> poskytuje alternativní textový popis v případě, že se obrázek nepodaří načíst, a slouží čtečkám obrazovky pro nevidomé. Správná odpověď: It specifies an alternate text for an image, if the image cannot be displayed.."
      },
      {
        "id": "html_q03",
        "module": "html_m2",
        "question": "Which syntax correctly applies two separate classes to a single HTML element?",
        "code": null,
        "options": [
          "<div class=\"class1 class2″>Content</div>",
          "<div class=\"class1, class2″>Content</div>",
          "<div class=\"class1″ class=\"class2″>Content</div>",
          "<div classes=\"class1 class2″>Content</div>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<div class=\"class1 class2″>Content</div>'."
      },
      {
        "id": "html_q04",
        "module": "html_m4",
        "question": "What is the main difference between using class and id attributes in HTML?",
        "code": null,
        "options": [
          "The class attribute can be applied to multiple elements, while the id attribute must be unique to a single element.",
          "The class attribute is used exclusively for styling, while the id attribute is used for both styling and JavaScript.",
          "The id attribute is used to style elements when classes are not available.",
          "The class attribute cannot be used with the <div> element, while the id attribute can."
        ],
        "correct": 0,
        "explanation": "Atribut 'id' musí být na stránce unikátní pro jeden element, zatímco 'class' lze aplikovat na libovolné množství elementů. Správná odpověď: The class attribute can be applied to multiple elements, while the id attribute must be unique to a single element.."
      },
      {
        "id": "html_q05",
        "module": "html_m2",
        "question": "Which element do you use to add an internal stylesheet to your document?",
        "code": null,
        "options": [
          "<style>",
          "<css>",
          "<script>",
          "<link>"
        ],
        "correct": 0,
        "explanation": "Interní kaskádové styly se vkládají do elementu <style> uvnitř sekce <head>. Správná odpověď: <style>."
      },
      {
        "id": "html_q06",
        "module": "html_m4",
        "question": "Which statement is true regarding the use of <span> and <div>?",
        "code": null,
        "options": [
          "<div> can contain block-level elements, whereas <span> is used for inline styling.",
          "<span> is used for block-level content, while <div> is for inline content.",
          "<span> and <div> are interchangeable and have no difference in styling.",
          "<div> is used to style text, while <span> is for larger sections of HTML."
        ],
        "correct": 0,
        "explanation": "Element <div> je blokový kontejner (block-level), zatímco <span> je řádkový element (inline) určený k formátování části textu. Správná odpověď: <div> can contain block-level elements, whereas <span> is used for inline styling.."
      },
      {
        "id": "html_q07",
        "module": "html_m4",
        "question": "How do you correctly set the font family to Calibri in a CSS rule?",
        "code": null,
        "options": [
          "font-family: Calibri, sans-serif;",
          "font-face: Calibri, sans-serif;",
          "font: Calibri, sans-serif;",
          "typeface: Calibri, sans-serif;"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'font-family: Calibri, sans-serif;'."
      },
      {
        "id": "html_q08",
        "module": "html_m4",
        "question": "Which snippet correctly changes the background color of all <div> elements to blue using an internal stylesheet?",
        "code": null,
        "options": [
          "div {background-color: blue;}",
          "div {color: blue;}",
          "div {background: blue;}",
          "#div {background-color: blue;}"
        ],
        "correct": 0,
        "explanation": "Interní kaskádové styly se vkládají do elementu <style> uvnitř sekce <head>. Správná odpověď: div {background-color: blue;}."
      },
      {
        "id": "html_q09",
        "module": "html_m4",
        "question": "Which of the following correctly applies a 1-pixel wide solid blue border to a <div> element?",
        "code": null,
        "options": [
          "<div style=\"border: 1px solid blue;\"></div>",
          "<div border-style=\"1px solid blue;\"></div>",
          "<div style:\"border=1px solid blue;\"></div>",
          "<div style=\"box-sizing: border-box 1px solid blue;\"></div>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<div style=\"border: 1px solid blue;\"></div>'."
      },
      {
        "id": "html_q10",
        "module": "html_m4",
        "question": "Which of the following scenarios is most appropriate for the use of <fieldset> in HTML forms?",
        "code": null,
        "options": [
          "Grouping related form elements, such as multiple choices within a survey that asks for a respondent's preferred leisure activities.",
          "Applying a consistent font style across multiple sections of an HTML form.",
          "Enhancing the visual design of a form's submit button with custom graphics and animations.",
          "Encrypting form data to secure sensitive information like passwords and credit card numbers."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Grouping related form elements, such as multiple choices within a survey that asks for a respondent's preferred leisure activities.'."
      },
      {
        "id": "html_q11",
        "module": "html_m4",
        "question": "How do you create a link that opens the user's email client to send an email to \"[email protected]\"?",
        "code": null,
        "options": [
          "<a href=\"mailto:[email protected]\">Email Us</a>",
          "<a href=\"email:[email protected]\">Email Us</a>",
          "<a href=\"sendto:[email protected]\">Email Us</a>",
          "<a email=\"[email protected]\">Email Us</a>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<a href=\"mailto:[email protected]\">Email Us</a>'."
      },
      {
        "id": "html_q12",
        "module": "html_m4",
        "question": "Which input field is correctly marked as required?",
        "code": null,
        "options": [
          "<input type=\"text\" name=\"firstName\" required>.",
          "<input required=\"true\" type=\"text\" name=\"firstName\">.",
          "<input type=\"required\" name=\"firstName\">.",
          "<required input type=\"text\">."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<input type=\"text\" name=\"firstName\" required>.'."
      },
      {
        "id": "html_q13",
        "module": "html_m4",
        "question": "Consider the following HTML snippet:",
        "code": null,
        "options": [
          "Use the selected attribute on the \"Canada\" <option>. Add default to the <select> tag of the \"Canada\" option.",
          "Set value=\"canada\" in the <select> tag of the \"Canada\" option.",
          "Use JavaScript to select the \"Canada\" option after the page loads."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Use the selected attribute on the \"Canada\" <option>. Add default to the <select> tag of the \"Canada\" option.'."
      },
      {
        "id": "html_q14",
        "module": "html_m4",
        "question": "Which of the following is true about emojis in HTML?",
        "code": null,
        "options": [
          "Emojis can be included using their HTML entity codes or Unicode representations, but their appearance may vary across devices and browsers.",
          "Emojis can only be displayed using images, not Unicode or HTML entities.",
          "Emojis must be included as JavaScript code in HTML.",
          "Emojis will always display correctly regardless of the device or font used."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Emojis can be included using their HTML entity codes or Unicode representations, but their appearance may vary across devices and browsers.'."
      },
      {
        "id": "html_q15",
        "module": "html_m4",
        "question": "Select the correct fragment of code that needs to be inserted in the following snippet to correctly define a rectangle with SVG:",
        "code": null,
        "options": [
          "rect",
          "rectangle",
          "polygon",
          "square"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'rect'."
      },
      {
        "id": "html_q16",
        "module": "html_m4",
        "question": "Which attribute value should you insert in the following snippet to correctly create an image map named \"workMap\" for an image?",
        "code": null,
        "options": [
          "#workMap",
          "workmap.jpg",
          "@workMap",
          "true"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '#workMap'."
      },
      {
        "id": "html_q17",
        "module": "html_m4",
        "question": "Why is the <label> element used in this form field?",
        "code": null,
        "options": [
          "To improve form accessibility by providing a text label.",
          "To increase the clickable area for the input field.",
          "To style the input field as the search button.",
          "To add a \"Search\" button to the form."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'To improve form accessibility by providing a text label.'."
      },
      {
        "id": "html_q18",
        "module": "html_m4",
        "question": "How should the following snippet be corrected to display a less than symbol?",
        "code": null,
        "options": [
          "Replace < with &lt;. Add quotes around <.",
          "Replace < with \\<.",
          "Wrap < in <!-- and -->."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Replace < with &lt;. Add quotes around <.'."
      },
      {
        "id": "html_q19",
        "module": "html_m4",
        "question": "Which HTML snippet shows the correct way to link a CSS stylesheet to a website?",
        "code": null,
        "options": [
          "<link rel=\"stylesheet\" href=\"style.css\">",
          "<link type=\"stylesheet\" href=\"style.css\">",
          "<link rel=\"stylesheet\" src=\"style.css\">",
          "<link href=\"stylesheet\" rel=\"style.css\">"
        ],
        "correct": 0,
        "explanation": "Interní kaskádové styly se vkládají do elementu <style> uvnitř sekce <head>. Správná odpověď: <link rel=\"stylesheet\" href=\"style.css\">."
      },
      {
        "id": "html_q20",
        "module": "html_m5",
        "question": "Which attribute should be used to specify the language of the content in an HTML document, enhancing accessibility for users?",
        "code": null,
        "options": [
          "lang",
          "language",
          "html-lang",
          "html-language"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'lang'."
      },
      {
        "id": "html_q21",
        "module": "html_m5",
        "question": "Which of the following tools can be used to test your website for accessibility issues?",
        "code": null,
        "options": [
          "Chrome Accessibility DevTools",
          "Google Analytics",
          "Adobe Dreamweaver",
          "Photoshop"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Chrome Accessibility DevTools'."
      },
      {
        "id": "html_q22",
        "module": "html_m5",
        "question": "Which ARIA attribute should be used to indicate the current state of an element that can be expanded or collapsed, such as an accordion panel?",
        "code": null,
        "options": [
          "aria-expanded",
          "aria-collapsed",
          "aria-expanded-collapsed",
          "aria-checked"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'aria-expanded'."
      },
      {
        "id": "html_q23",
        "module": "html_m5",
        "question": "Which HTML5 element is used to represent a generic container without any additional semantic meaning?",
        "code": null,
        "options": [
          "<div>",
          "<article>",
          "<main>",
          "<aside>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<div>'."
      },
      {
        "id": "html_q24",
        "module": "html_m5",
        "question": "Which level of conformance does the Web Content Accessibility Guidelines (WCAG) require to meet the needs of most people with disabilities?",
        "code": null,
        "options": [
          "Level AA",
          "Level AAA",
          "Level A",
          "Level A+"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Level AA'."
      },
      {
        "id": "html_q25",
        "module": "html_m4",
        "question": "Which HTML code correctly creates a nested list with ordered and unordered lists?",
        "code": null,
        "options": [
          "<ol><li>Item One<ul><li>Subitem A</li></ul></li><li>Item Two</li></ol>",
          "<ul><li>Item One<ol><li>Subitem 1</li></ol></li><li>Item Two</li></ul>",
          "<ol><li>Item One<li>Subitem A</li></li><li>Item Two</li></ol>",
          "<ul><li>Item One</li><ul><li>Subitem A</li></ul><li>Item Two</li></ul>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<ol><li>Item One<ul><li>Subitem A</li></ul></li><li>Item Two</li></ol>'."
      },
      {
        "id": "html_q26",
        "module": "html_m5",
        "question": "How does this code snippet facilitate navigation to a specific part of a webpage?",
        "code": null,
        "options": [
          "By scrolling the page to where <h2 id=\"section2\"> is located.",
          "By refreshing the page when \"Go to Section 2\" is clicked.",
          "By creating a popup that links to Section 2.",
          "By redirecting to a new page named \"Section 2\""
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'By scrolling the page to where <h2 id=\"section2\"> is located.'."
      },
      {
        "id": "html_q27",
        "module": "html_m4",
        "question": "What is the purpose of the srcset attribute in this <img> tag?",
        "code": null,
        "options": [
          "To define multiple image sources for different viewport widths.",
          "To set multiple sources for the same image to load faster.",
          "To specify different images to be displayed on hover.",
          "To provide a fallback image if the original fails to load."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'To define multiple image sources for different viewport widths.'."
      },
      {
        "id": "html_q28",
        "module": "html_m4",
        "question": "What is the characteristic of the text within the <pre> tag in this HTML snippet?",
        "code": null,
        "options": [
          "It preserves both spaces and line breaks.",
          "It preserves font size, weight, and family.",
          "It preserves line breaks and puts it in bold.",
          "It is highlighted and preserves spaces."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'It preserves both spaces and line breaks.'."
      },
      {
        "id": "html_q29",
        "module": "html_m4",
        "question": "How do you merge two cells vertically in a table?",
        "code": null,
        "options": [
          "Use rowspan=\"2\" in the first cell you want to extend.",
          "Use colspan=\"2\" in the first cell you want to extend.",
          "Merge cells using CSS by applying cell-merge: vertical;.",
          "HTML tables do not support vertical cell merging."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Use rowspan=\"2\" in the first cell you want to extend.'."
      },
      {
        "id": "html_q30",
        "module": "html_m4",
        "question": "Which attribute of the <table> tag controls the space between the cell content and the cell border?",
        "code": null,
        "options": [
          "cellpadding",
          "cellspacing",
          "bgcolor",
          "align"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'cellpadding'."
      },
      {
        "id": "html_q31",
        "module": "html_m4",
        "question": "Which HTML code snippet demonstrates the correct use of line breaks for addresses and paragraph tags for separating ideas?",
        "code": null,
        "options": [
          "<p>123 Anywhere St.<br>Springfield</p><p>Welcome to our website.</p>",
          "<address>123 Anywhere St., Springfield</address><p>Welcome to our website.</p>",
          "<p>123 Anywhere St. Springfield</p><br><p>Welcome to our website.</p>",
          "<p>123 Anywhere St.</p><p>Springfield</p><p>Welcome to our website.</p>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<p>123 Anywhere St.<br>Springfield</p><p>Welcome to our website.</p>'."
      },
      {
        "id": "html_q32",
        "module": "html_m4",
        "question": "What does the <mark> tag do in HTML?",
        "code": null,
        "options": [
          "It highlights the text with a background color to indicate special importance.",
          "It changes the font color of the text.",
          "It adds a bold effect to the text.",
          "It underlines the text."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'It highlights the text with a background color to indicate special importance.'."
      },
      {
        "id": "html_q33",
        "module": "html_m5",
        "question": "Which HTML snippet correctly emphasizes text for semantic importance and visual distinction?",
        "code": null,
        "options": [
          "<p>This is <strong>important</strong> text.</p>",
          "<p>This is <em>important</em> text.</p>",
          "<p>This is <mark>important</mark> text.</p>",
          "<p>This is <b>important</b> text.</p>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<p>This is <strong>important</strong> text.</p>'."
      },
      {
        "id": "html_q34",
        "module": "html_m4",
        "question": "Which of the following is considered a block-level element in HTML5?",
        "code": null,
        "options": [
          "<div>",
          "<span>",
          "<img>",
          "<br>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<div>'."
      },
      {
        "id": "html_q35",
        "module": "html_m5",
        "question": "When discussing HTML semantics, which term is used to describe the combination of an opening tag, its content, and its closing tag?",
        "code": null,
        "options": [
          "Element",
          "Attribute",
          "Value",
          "Markup"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Element'."
      },
      {
        "id": "html_q36",
        "module": "html_m4",
        "question": "Which of the following is considered a self-closing tag?",
        "code": null,
        "options": [
          "<img>",
          "<div>",
          "<a>",
          "<p>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<img>'."
      },
      {
        "id": "html_q37",
        "module": "html_m5",
        "question": "What is the main role of the <nav> element?",
        "code": null,
        "options": [
          "To define a section for navigation links.",
          "To create a header for the webpage.",
          "To mark the main content of the webpage.",
          "To provide a footer for the webpage."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'To define a section for navigation links.'."
      },
      {
        "id": "html_q38",
        "module": "html_m5",
        "question": "Which section of an HTML document typically contains metadata like keywords and descriptions?",
        "code": null,
        "options": [
          "<head>",
          "<body>",
          "<footer>",
          "<header>"
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<head>'."
      },
      {
        "id": "html_q39",
        "module": "html_m4",
        "question": "What is the purpose of the <!DOCTYPE html> declaration?",
        "code": null,
        "options": [
          "To define the version of HTML the document is using.",
          "To specify the character encoding for the document.",
          "To link the HTML document to an external CSS file.",
          "To initialize JavaScript in the document."
        ],
        "correct": 0,
        "explanation": "Deklarace <!DOCTYPE html> musí být na prvním řádku HTML5 dokumentu a informuje prohlížeč o standardním režimu vykreslování. Správná odpověď: To define the version of HTML the document is using.."
      },
      {
        "id": "html_q40",
        "module": "html_m4",
        "question": "What is the poster attribute in the <video> tag used for?",
        "code": null,
        "options": [
          "To define the thumbnail image shown before the video plays.",
          "To specify the video file to be played.",
          "To set the video to play automatically when loaded.",
          "To loop the video indefinitely."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'To define the thumbnail image shown before the video plays.'."
      },
      {
        "id": "html_q41",
        "module": "html_m4",
        "question": "Considering the default behavior of HTML headings regarding font size, which statement accurately describes the relationship between <h1>, <h2>, and <h3> tags?",
        "code": null,
        "options": [
          "<h1> has the largest default font size, suitable for the main title of a page. <h2> is used for major section headings with a smaller font size than <h1>, and <h3> is for sub-sections, with a font size smaller than <h2>, reflecting a hierarchical document structure.",
          "HTML headings do not influence the hierarchy of content; CSS is solely responsible for defining such relationships.",
          "The font sizes for <h1>, <h2>, and <h3> are the same, with differences only in semantic importance.",
          "<h3> is the largest and should be used for the main title, while <h2> and <h1> are for subsections and minor points, respectively."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '<h1> has the largest default font size, suitable for the main title of a page. <h2> is used for major section headings with a smaller font size than <h1>, and <h3> is for sub-sections, with a font size smaller than <h2>, reflecting a hierarchical document structure.'."
      },
      {
        "id": "html_q42",
        "module": "html_m4",
        "question": "Which of the following accurately describes the function of the <p> tag in HTML?",
        "code": null,
        "options": [
          "The <p> tag defines a paragraph, automatically adding a blank line above and below the enclosed text and taking up the full width of its container.",
          "The <p> tag is used to create a new line within a paragraph without adding any space above or below.",
          "The <p> tag is an inline element that formats text without affecting its block-level structure.",
          "The <p> tag defines a paragraph, without adding any space above or below."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The <p> tag defines a paragraph, automatically adding a blank line above and below the enclosed text and taking up the full width of its container.'."
      },
      {
        "id": "html_q43",
        "module": "html_m4",
        "question": "What is the purpose of the <mark> tag in HTML?",
        "code": null,
        "options": [
          "The <mark> tag highlights the word \"Wednesday\", drawing attention to it with a background color.",
          "The <mark> tag makes the word \"Wednesday\" italic to emphasize a specific part of the paragraph.",
          "The <mark> tag underlines the word \"Wednesday\" to indicate hyperlinks without creating an actual link.",
          "The <mark> tag underlines and highlights the word \"Wednesday\", drawing attention to it with a font color."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The <mark> tag highlights the word \"Wednesday\", drawing attention to it with a background color.'."
      },
      {
        "id": "html_q44",
        "module": "html_m4",
        "question": "How does the <blockquote> tag differ from the <q> tag in HTML?",
        "code": null,
        "options": [
          "The <blockquote> tag is used for longer quotations that need to be separated from the main text, often indented or styled differently from the surrounding content.",
          "The <q> tag is deprecated and should not be used; <blockquote> is the modern replacement.",
          "<blockquote> is for inline quotations, while <q> is for block-level quotations.",
          "There is no functional difference; both tags can be used for short and long quotations."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The <blockquote> tag is used for longer quotations that need to be separated from the main text, often indented or styled differently from the surrounding content.'."
      },
      {
        "id": "html_q45",
        "module": "html_m4",
        "question": "What is the correct way to include a citation source for a block quotation in HTML?",
        "code": null,
        "options": [
          "The cite attribute should be used within the <blockquote> tag to specify the URL of the quotation's source.",
          "The source URL should be included inside the <q> tag for all quotations.",
          "Citation sources are typically not included in the HTML but rather in the accompanying CSS.",
          "The <cite> tag should be used as a container for the entire quotation and its source URL."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The cite attribute should be used within the <blockquote> tag to specify the URL of the quotation's source.'."
      },
      {
        "id": "html_q46",
        "module": "html_m4",
        "question": "Which statement is true about using quotation marks with the <q> and <blockquote> tags?",
        "code": null,
        "options": [
          "The <q> tag automatically adds quotation marks around the enclosed text, while the <blockquote> tag does not.",
          "Both <q> and <blockquote> tags automatically add double quotation marks around the text.",
          "The <blockquote> tag requires manual addition of quotation marks, but the <q> tag does not.",
          "Quotation marks must be manually added when using both <q> and <blockquote> tags for proper formatting."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The <q> tag automatically adds quotation marks around the enclosed text, while the <blockquote> tag does not.'."
      },
      {
        "id": "html_q47",
        "module": "html_m4",
        "question": "Which of the following statements accurately describes the use of the <br> and <hr> tags in HTML?",
        "code": null,
        "options": [
          "The <br> tag is used for adding a new line within a paragraph, while the <hr> tag is used to insert a visual horizontal line to separate content.",
          "Both <br> and <hr> tags are used for creating new paragraphs.",
          "<hr> is used to create a line break in text, and <br> is for drawing a horizontal line.",
          "Both tags require closing tags to function correctly in HTML documents."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The <br> tag is used for adding a new line within a paragraph, while the <hr> tag is used to insert a visual horizontal line to separate content.'."
      },
      {
        "id": "html_q48",
        "module": "html_m4",
        "question": "What is the primary purpose of the <code> tag in HTML?",
        "code": null,
        "options": [
          "The <code> tag is used to display a snippet of computer code inline with other text, highlighting it in a monospaced font to distinguish it from the surrounding text.",
          "The <code> tag is used to indicate text that should be interpreted as programming variables.",
          "The <code> tag serves as a container for embedding executable code within HTML.",
          "The <code> tag provides semantic meaning to text, indicating technical terms or identifiers outside of code contexts."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The <code> tag is used to display a snippet of computer code inline with other text, highlighting it in a monospaced font to distinguish it from the surrounding text.'."
      },
      {
        "id": "html_q49",
        "module": "html_m4",
        "question": "How does the <pre> tag affect the display of text in an HTML document?",
        "code": null,
        "options": [
          "The <pre> tag preserves the text's white space and line breaks, displaying it exactly as written within the tag, which is useful for showing code or poetry.",
          "The <pre> tag is used to pre-process text, applying automatic formatting rules.",
          "The <pre> tag organizes text into pre-defined sections for improved document structure.",
          "The <pre> tag prioritizes text for search engines, enhancing SEO for preformatted content."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'The <pre> tag preserves the text's white space and line breaks, displaying it exactly as written within the tag, which is useful for showing code or poetry.'."
      },
      {
        "id": "html_q50",
        "module": "html_m5",
        "question": "Considering accessibility and HTML semantics, what is the significance of nesting <ol> within <ul> or vice versa?",
        "code": null,
        "options": [
          "Nesting lists, such as incorporating <ol> within <ul> or vice versa, organizes information hierarchically. This enhances document structure and accessibility by delineating subcategories or sequential steps within broader categories.",
          "Nesting provides semantic clarity, enabling search engines to better understand and index the content structure, potentially improving SEO performance.",
          "By utilizing nested lists, developers can implement complex web designs more efficiently, as it simplifies the CSS needed for list customization.",
          "Nesting lists facilitates the automatic adaptation of content to various screen sizes, improving the responsive design of web pages without additional CSS."
        ],
        "correct": 0,
        "explanation": "Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: 'Nesting lists, such as incorporating <ol> within <ul> or vice versa, organizes information hierarchically. This enhances document structure and accessibility by delineating subcategories or sequential steps within broader categories.'."
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
        "module": "css_m5",
        "question": "Which class is used to create a responsive navbar in Bootstrap 5?",
        "code": null,
        "options": [
          ".navbar-expand",
          ".navbar-fixed",
          ".navbar-responsive",
          ".navbar-container"
        ],
        "correct": 0,
        "explanation": "V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: .navbar-expand."
      },
      {
        "id": "css_q02",
        "module": "css_m5",
        "question": "How does Bootstrap's responsive embed utilities help with embedding media?",
        "code": null,
        "options": [
          "It maintains a fixed aspect ratio for the media and resizes it with the content.",
          "It resizes the media to fit within any container.",
          "It automatically adjusts the media's aspect ratio to fit the screen size.",
          "It centers the media on the page."
        ],
        "correct": 0,
        "explanation": "V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: It maintains a fixed aspect ratio for the media and resizes it with the content.."
      },
      {
        "id": "css_q03",
        "module": "css_m5",
        "question": "Which Bootstrap 5 class will make an element visible only on large devices and larger?",
        "code": null,
        "options": [
          "d-none d-lg-block",
          "d-block d-lg-none",
          "d-none d-md-block",
          "d-none d-xl-block"
        ],
        "correct": 0,
        "explanation": "V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: d-none d-lg-block."
      },
      {
        "id": "css_q04",
        "module": "css_m5",
        "question": "How do you include Bootstrap in your project?",
        "code": null,
        "options": [
          "By including a link to the Bootstrap CDN for the CSS and JavaScript files in your HTML.",
          "By only downloading the Bootstrap files and linking the CSS and JavaScript files in your HTML.",
          "By linking to the Bootstrap CSS file and downloading the JavaScript file separately.",
          "By both downloading the files and using a CDN in your HTML."
        ],
        "correct": 0,
        "explanation": "V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: By including a link to the Bootstrap CDN for the CSS and JavaScript files in your HTML.."
      },
      {
        "id": "css_q05",
        "module": "css_m5",
        "question": "Which class is used to make an element hidden in Bootstrap 5?",
        "code": null,
        "options": [
          ".d-none",
          ".hidden",
          ".invisible",
          ".hide"
        ],
        "correct": 0,
        "explanation": "V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: .d-none."
      },
      {
        "id": "css_q06",
        "module": "css_m5",
        "question": "Which Bootstrap class adds a margin to the top side of an element?",
        "code": null,
        "options": [
          "mt-",
          "mb-",
          "m-top-",
          "mtop-"
        ],
        "correct": 0,
        "explanation": "V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: mt-."
      },
      {
        "id": "css_q07",
        "module": "css_m5",
        "question": "Select the correct Bootstrap class to make the following button have a primary color.",
        "code": null,
        "options": [
          "<button class=\"btn btn-primary\">Click me</button>",
          "<button class=\"btn-primary\">Click me</button>",
          "<button class=\"btn btn-main\">Click me</button>",
          "<button class=\"button-primary\">Click me</button>"
        ],
        "correct": 0,
        "explanation": "V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: <button class=\"btn btn-primary\">Click me</button>."
      },
      {
        "id": "css_q08",
        "module": "css_m1",
        "question": "Which of the following is a key benefit of using a CSS preprocessor like Sass or Less?",
        "code": null,
        "options": [
          "It allows you to use features like variables, mixins, and nested rules to make your code more maintainable and efficient.",
          "It allows you to write CSS in a more readable, unstructured way.",
          "It eliminates the need for variables or mixins.",
          "It directly compiles CSS into HTML."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'It allows you to use features like variables, mixins, and nested rules to make your code more maintainable and efficient.'."
      },
      {
        "id": "css_q09",
        "module": "css_m1",
        "question": "How do you define a variable in Less?",
        "code": null,
        "options": [
          "$primary-color: #333;",
          "@primary-color: #333;",
          "var primary-color = #333;",
          "--primary-color: #333;"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: '@primary-color: #333;'."
      },
      {
        "id": "css_q10",
        "module": "css_m5",
        "question": "Which CSS rule will cause grid items to be placed in rows by default, controlling the automatic flow of items and filling each row before moving to the next?",
        "code": null,
        "options": [
          ".container {\r\n display: grid;\r\n grid-auto-flow: row;\r\n}",
          ".container {\r\n display: grid;\r\n grid-auto-flow: column;\r\n}",
          ".container {\r\n display: grid;\r\n grid-auto-rows: auto;\r\n}",
          ".container {\r\n display: grid;\r\n grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));\r\n}"
        ],
        "correct": 0,
        "explanation": "Moderní CSS layouty využívají Flexbox (1D rozvržení po osách) a CSS Grid (2D maticové rozvržení řádků a sloupců). Správná odpověď: .container {\r\n display: grid;\r\n grid-auto-flow: row;\r\n}."
      },
      {
        "id": "css_q11",
        "module": "css_m5",
        "question": "Which CSS rule aligns flex items along the cross axis (perpendicular to the main axis)?",
        "code": null,
        "options": [
          ".container {\r\n display: flex;\r\n align-items: center;\r\n}",
          ".container {\r\n display: flex;\r\n justify-content: space-between;\r\n}",
          ".container {\r\n inline-block: flex;\r\n justify-content: center;\r\n}",
          ".container {\r\n display: flex;\r\n align-content: space-around;\r\n}"
        ],
        "correct": 0,
        "explanation": "Moderní CSS layouty využívají Flexbox (1D rozvržení po osách) a CSS Grid (2D maticové rozvržení řádků a sloupců). Správná odpověď: .container {\r\n display: flex;\r\n align-items: center;\r\n}."
      },
      {
        "id": "css_q12",
        "module": "css_m5",
        "question": "What does the Flex layout justify-content property do?",
        "code": null,
        "options": [
          "It aligns flex items along the main axis of the container.",
          "It aligns flex items along the cross axis (perpendicular to the main axis).",
          "It defines the direction in which the flex items are laid out in the container.",
          "It allows flex items to wrap onto multiple lines, from top to bottom."
        ],
        "correct": 0,
        "explanation": "Moderní CSS layouty využívají Flexbox (1D rozvržení po osách) a CSS Grid (2D maticové rozvržení řádků a sloupců). Správná odpověď: It aligns flex items along the main axis of the container.."
      },
      {
        "id": "css_q13",
        "module": "css_m5",
        "question": "Which values of the grid-template-columns allows you to create three columns with ratio 1:2:1?",
        "code": null,
        "options": [
          "grid-template-columns: 1fr 2fr 1fr;",
          "grid-template-columns: 1 2 1;",
          "grid-template-columns: 100% 200% 100%;",
          "grid-template-columns: repeat(3, 100px);"
        ],
        "correct": 0,
        "explanation": "Moderní CSS layouty využívají Flexbox (1D rozvržení po osách) a CSS Grid (2D maticové rozvržení řádků a sloupců). Správná odpověď: grid-template-columns: 1fr 2fr 1fr;."
      },
      {
        "id": "css_q14",
        "module": "css_m5",
        "question": "Which CSS rule will allow flex items to wrap onto multiple lines within a flex container?",
        "code": null,
        "options": [
          ".container {\r\n display: flex;\r\n flex-wrap: wrap;\r\n}",
          ".container {\r\n display: flex;\r\n flex-direction: column;\r\n}",
          ".container {\r\n display: flex;\r\n align-content: stretch;\r\n}",
          ".container {\r\n display: flex;\r\n align-content: wrap;\r\n}"
        ],
        "correct": 0,
        "explanation": "Moderní CSS layouty využívají Flexbox (1D rozvržení po osách) a CSS Grid (2D maticové rozvržení řádků a sloupců). Správná odpověď: .container {\r\n display: flex;\r\n flex-wrap: wrap;\r\n}."
      },
      {
        "id": "css_q15",
        "module": "css_m2",
        "question": "How do you nest CSS selectors in Sass?",
        "code": null,
        "options": [
          "nav {\r\n ul {\r\n margin: 0;\r\n padding: 0;\r\n list-style: none;\r\n }\r\n}",
          "nav > ul {\r\n margin: 0;\r\n padding: 0;\r\n list-style: none;\r\n}",
          "nav ul {\r\n margin: 0;\r\n padding: 0;\r\n list-style: none;\r\n}",
          "nav: {\r\n ul: {\r\n margin: 0;\r\n padding: 0;\r\n list-style: none;\r\n }\r\n}"
        ],
        "correct": 0,
        "explanation": "Specificita selektorů v CSS určuje prioritu pravidel: inline styl > ID selektor (#) > třída (.) / pseudo-třída > element. Správná odpověď: nav {\r\n ul {\r\n margin: 0;\r\n padding: 0;\r\n list-style: none;\r\n }\r\n}."
      },
      {
        "id": "css_q16",
        "module": "css_m1",
        "question": "What is the transition-timing-function property used for?",
        "code": null,
        "options": [
          "It describes how the intermediate values of the transition are calculated, influencing the acceleration and the overall feel of the transition.",
          "It specifies the duration over which the transition occurs.",
          "It defines the waiting time before the transition effect starts.",
          "It specifies the name of the CSS property to which the transition effect is applied."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'It describes how the intermediate values of the transition are calculated, influencing the acceleration and the overall feel of the transition.'."
      },
      {
        "id": "css_q17",
        "module": "css_m3",
        "question": "Which CSS rule will apply a transition effect to change the background color of an element over 0.5 seconds when hovered?",
        "code": null,
        "options": [
          ".element {\r\n transition: background-color 0.5s;\r\n}\r\n.element:hover {\r\n background-color: blue;\r\n}",
          ".element {\r\n transition: color 0.5s;\r\n}\r\n.element:hover {\r\n background-color: blue;\r\n}",
          ".element {\r\n transition: background-color;\r\n}\r\n.element:hover {\r\n background-color: blue;\r\n}",
          ".element {\r\n transition: background-color;\r\n}\r\n.element {\r\n background-color: blue;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: '.element {\r\n transition: background-color 0.5s;\r\n}\r\n.element:hover {\r\n background-color: blue;\r\n}'."
      },
      {
        "id": "css_q18",
        "module": "css_m1",
        "question": "Which CSS property is used to trigger an animation on an element?",
        "code": null,
        "options": [
          "animation-name",
          "animation-play",
          "animation-effect",
          "animation-trigger"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'animation-name'."
      },
      {
        "id": "css_q19",
        "module": "css_m2",
        "question": "Why is it recommended to avoid using inline styles in CSS?",
        "code": null,
        "options": [
          "Inline styles make it difficult to maintain and update styles across multiple elements.",
          "Inline styles are not supported by all browsers.",
          "Inline styles are automatically overridden by external stylesheets.",
          "Inline styles are limited to defining font sizes only."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Inline styles make it difficult to maintain and update styles across multiple elements.'."
      },
      {
        "id": "css_q20",
        "module": "css_m1",
        "question": "Which practice enhances the maintainability of your CSS code?",
        "code": null,
        "options": [
          "Organize CSS into modular components.",
          "Write all CSS rules in a single large file.",
          "Use IDs for all styling.",
          "Use !important frequently to override styles."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Organize CSS into modular components.'."
      },
      {
        "id": "css_q21",
        "module": "css_m2",
        "question": "Which of the following techniques helps ensure that content is accessible to screen readers while being hidden visually?",
        "code": null,
        "options": [
          "Using CSS to move content off-screen with a class like .screen-reader-text.",
          "Using the display: none; property in CSS.",
          "Using the visibility: hidden; property in CSS.",
          "Using JavaScript to dynamically remove the element from the DOM."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Using CSS to move content off-screen with a class like .screen-reader-text.'."
      },
      {
        "id": "css_q22",
        "module": "css_m1",
        "question": "What is the primary purpose of compiling preprocessor code (e.g., Sass or Less)?",
        "code": null,
        "options": [
          "To convert preprocessor code into regular CSS that browsers can understand.",
          "To make the code executable in a browser without any changes.",
          "To improve the speed of loading the CSS file in the browser.",
          "To convert the code into HTML tags."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'To convert preprocessor code into regular CSS that browsers can understand.'."
      },
      {
        "id": "css_q23",
        "module": "css_m1",
        "question": "Which of the following is a key goal of web accessibility?",
        "code": null,
        "options": [
          "To ensure content is understandable and usable for as many people as possible, including those with disabilities.",
          "To make websites usable only for people without disabilities.",
          "To limit website design to only a few colors and fonts for simplicity.",
          "To create websites that can be used only with a mouse and keyboard."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'To ensure content is understandable and usable for as many people as possible, including those with disabilities.'."
      },
      {
        "id": "css_q24",
        "module": "css_m1",
        "question": "Which of the following is a key legal requirement related to web accessibility in many regions?",
        "code": null,
        "options": [
          "Websites should be accessible to individuals with disabilities to comply with laws like the ADA and WCAG guidelines.",
          "Websites must be visually attractive to comply with the law.",
          "Websites must include video content to meet legal standards.",
          "Websites should only be accessible on desktop devices."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Websites should be accessible to individuals with disabilities to comply with laws like the ADA and WCAG guidelines.'."
      },
      {
        "id": "css_q25",
        "module": "css_m3",
        "question": "Why is using rem units for font sizes considered a good practice for web accessibility?",
        "code": null,
        "options": [
          "Because rem units provide scalability, respect user preferences, and ensure consistency across your website.",
          "Because rem units are smaller than px units.",
          "Because rem units are easier to write than em units.",
          "Because rem units are only used for setting margins and paddings."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Because rem units provide scalability, respect user preferences, and ensure consistency across your website.'."
      },
      {
        "id": "css_q26",
        "module": "css_m4",
        "question": "Which CSS rule will wrap text around an image by floating the image to the left?",
        "code": null,
        "options": [
          "img {\r\n float: left;\r\n margin: 0 10px 10px 0;\r\n}",
          "img {\r\n float: right;\r\n margin: 0 0 10px 10px;\r\n}",
          "img {\r\n text-align: float;\r\n padding: 10px;\r\n}",
          "img {\r\n display: float; block;\r\n margin: 10px;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'img {\r\n float: left;\r\n margin: 0 10px 10px 0;\r\n}'."
      },
      {
        "id": "css_q27",
        "module": "css_m2",
        "question": "What is a recommended naming convention for CSS class names to improve readability and maintainability?",
        "code": null,
        "options": [
          "Use BEM (Block Element Modifier) naming convention.",
          "Use single-letter class names.",
          "Use class names with mixed upper and lower case letters.",
          "Use random strings for class names."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Use BEM (Block Element Modifier) naming convention.'."
      },
      {
        "id": "css_q28",
        "module": "css_m1",
        "question": "Which of the following practices helps improve CSS performance?",
        "code": null,
        "options": [
          "Minimize the use of universal selectors.",
          "Use inline styles for all elements.",
          "Load all CSS files synchronously.",
          "Use very specific selectors for all elements."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Minimize the use of universal selectors.'."
      },
      {
        "id": "css_q29",
        "module": "css_m5",
        "question": "Which of the following is the best practice for creating responsive designs in CSS?",
        "code": null,
        "options": [
          "Use CSS Grid and Flexbox for layout.",
          "Use fixed pixel widths for all elements.",
          "Use table-based layouts.",
          "Use only media queries with fixed breakpoints."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Use CSS Grid and Flexbox for layout.'."
      },
      {
        "id": "css_q30",
        "module": "css_m1",
        "question": "In which section is the external CSS file referred to?",
        "code": null,
        "options": [
          "<head>",
          "<body>",
          "<header>",
          "<style>"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: '<head>'."
      },
      {
        "id": "css_q31",
        "module": "css_m2",
        "question": "Which of the CSS Selector definitions is correct?",
        "code": null,
        "options": [
          "It specifies which HTML elements the rule will apply to.",
          "It defines the aspect you want to style, such as color, font-size, margin, padding, background, etc.",
          "It determines the styling details.",
          "It's a set of property-value pairs enclosed in curly braces {}."
        ],
        "correct": 0,
        "explanation": "Specificita selektorů v CSS určuje prioritu pravidel: inline styl > ID selektor (#) > třída (.) / pseudo-třída > element. Správná odpověď: It specifies which HTML elements the rule will apply to.."
      },
      {
        "id": "css_q32",
        "module": "css_m2",
        "question": "What is the correct way of combining the CSS selectors?",
        "code": null,
        "options": [
          "selector1, selector2 {\r\n property: value;\r\n}",
          "selector1 selector2 {\r\n property: value;\r\n}",
          "selector1 & selector2 {\r\n property: value;\r\n}",
          "selector1 + selector2 {\r\n property: value;\r\n}"
        ],
        "correct": 0,
        "explanation": "Specificita selektorů v CSS určuje prioritu pravidel: inline styl > ID selektor (#) > třída (.) / pseudo-třída > element. Správná odpověď: selector1, selector2 {\r\n property: value;\r\n}."
      },
      {
        "id": "css_q33",
        "module": "css_m2",
        "question": "To style elements with the class highlight only when they are hovered over, which selector would you use?",
        "code": null,
        "options": [
          ".highlight:hover",
          ".highlight:focus",
          "#highlight:hover",
          ".highlight::hover"
        ],
        "correct": 0,
        "explanation": "Specificita selektorů v CSS určuje prioritu pravidel: inline styl > ID selektor (#) > třída (.) / pseudo-třída > element. Správná odpověď: .highlight:hover."
      },
      {
        "id": "css_q34",
        "module": "css_m1",
        "question": "What is the best approach to make the layout adapt to different screen sizes?",
        "code": null,
        "options": [
          "Using media queries to ensure the layout adapts to different screen sizes.",
          "Using the overflow: scroll; property to allow the user to scroll the content of the website regardless of the screen resolution.",
          "Creating different versions of the website for different devices, so they are displayed correctly on every screen.",
          "No action is needed—the layout will adapt to any screen size by default."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Using media queries to ensure the layout adapts to different screen sizes.'."
      },
      {
        "id": "css_q35",
        "module": "css_m1",
        "question": "Which property allows you to add a scrollbar to the container, allowing the user to scroll vertically and horizontally to view the entire content of the .content div, even though it overflows the container's boundaries?",
        "code": null,
        "options": [
          "overflow: scroll;",
          "text-align: scrollable;",
          "scroll: auto;",
          "overflow: auto;"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'overflow: scroll;'."
      },
      {
        "id": "css_q36",
        "module": "css_m2",
        "question": "Which CSS rules you will use to hide an element if you want an element to disappear entirely from the page layout?",
        "code": null,
        "options": [
          "display: none;",
          "display: hidden;",
          "visibility: hidden;",
          "visibility: none;"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'display: none;'."
      },
      {
        "id": "css_q37",
        "module": "css_m3",
        "question": "Which CSS rule will style a table with a border, set the spacing between table cells to 0, and apply a background color to alternating rows?",
        "code": null,
        "options": [
          "table {\r\n border: 1px solid black;\r\n border-collapse: collapse;\r\n}\r\ntable tr:nth-child(even) {\r\n background-color: #f2f2f2;\r\n}",
          "table {\r\n border: 1px solid black;\r\n border-spacing: 0;\r\n}\r\ntable tr:nth-child(odd) {\r\n background-color: #f2f2f2;\r\n}",
          "table {\r\n border: 1px dashed black;\r\n border-collapse: separate;\r\n}\r\ntable tr:hover {\r\n background-color: #f2f2f2;\r\n}",
          "table {\r\n border: 1px solid black;\r\n border-spacing: 5px;\r\n}\r\ntable tr:nth-child(odd) {\r\n background-color: #f2f2f2;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'table {\r\n border: 1px solid black;\r\n border-collapse: collapse;\r\n}\r\ntable tr:nth-child(even) {\r\n background-color: #f2f2f2;\r\n}'."
      },
      {
        "id": "css_q38",
        "module": "css_m1",
        "question": "What is the primary purpose of using fieldset and legend elements in an HTML form?",
        "code": null,
        "options": [
          "The fieldset element is used to group related form controls and the legend element provides a caption for the fieldset.",
          "The fieldset element is used to style form controls and the legend element is used to add tooltips to the controls.",
          "The fieldset element is used to create a container for input fields and the legend element is used to submit the form.",
          "The fieldset element is used to add spacing between form controls and the legend element is used to add a label to each control."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'The fieldset element is used to group related form controls and the legend element provides a caption for the fieldset.'."
      },
      {
        "id": "css_q39",
        "module": "css_m4",
        "question": "Which sentence describes the fixed layout?",
        "code": null,
        "options": [
          "It has a set width (usually measured in pixels) and does not change size based on the browser window.",
          "It stretches and contracts with the browser window, filling the available space.",
          "It scales depending on the user's font size settings, making the layout accessible.",
          "It often incorporates media queries to change styles based on different device characteristics, leading to a responsive design."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'It has a set width (usually measured in pixels) and does not change size based on the browser window.'."
      },
      {
        "id": "css_q40",
        "module": "css_m4",
        "question": "What values can the clear property take?",
        "code": null,
        "options": [
          "none, left, right, both",
          "yes, no",
          "first, second, third",
          "all, none"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'none, left, right, both'."
      },
      {
        "id": "css_q41",
        "module": "css_m5",
        "question": "Which media query will apply styles specifically for devices in landscape orientation?",
        "code": null,
        "options": [
          "@media (orientation: landscape) { ... }",
          "@media (orientation: portrait) { ... }",
          "@media (position: landscape) { ... }",
          "@media (screen: landscape) { ... }"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: '@media (orientation: landscape) { ... }'."
      },
      {
        "id": "css_q42",
        "module": "css_m5",
        "question": "Which CSS rules will create a simple two-column grid layout using floats?",
        "code": null,
        "options": [
          ".container {\r\n width: 100%;\r\n overflow: hidden;\r\n}\r\n.column {\r\n float: left;\r\n width: 50%;\r\n}",
          ".container {\r\n display: grid;\r\n grid-template-columns: 1fr 1fr;\r\n}\r\n.column {\r\n float: left;\r\n}",
          ".float-container {\r\n width: 100%;\r\n display: flex;\r\n}\r\n.column {\r\n flex: 1;\r\n}",
          ".float-container {\r\n width: 100%;\r\n display: block;\r\n}\r\n.column {\r\n display: inline-block;\r\n width: 50%;\r\n}"
        ],
        "correct": 0,
        "explanation": "Moderní CSS layouty využívají Flexbox (1D rozvržení po osách) a CSS Grid (2D maticové rozvržení řádků a sloupců). Správná odpověď: .container {\r\n width: 100%;\r\n overflow: hidden;\r\n}\r\n.column {\r\n float: left;\r\n width: 50%;\r\n}."
      },
      {
        "id": "css_q43",
        "module": "css_m3",
        "question": "Which of the following CSS rules ensures that an image inside a hyperlink appears without an underline, has no border, and scales properly within the link?",
        "code": null,
        "options": [
          "a img {\r\n border: 0;\r\n display: block;\r\n max-width: 100%;\r\n text-decoration: none;\r\n}",
          "a img {\r\n text-decoration: none;\r\n width: auto;\r\n}",
          "a {\r\n border: 0;\r\n max-width: 100%;\r\n text-decoration: none;\r\n img('image.png')\r\n}",
          "a img('image.png') {\r\n border: none;\r\n display: inline;\r\n max-width: 100%;\r\n underline: none;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'a img {\r\n border: 0;\r\n display: block;\r\n max-width: 100%;\r\n text-decoration: none;\r\n}'."
      },
      {
        "id": "css_q44",
        "module": "css_m3",
        "question": "Consider the following CSS rules and HTML. What will be the color of the element with the ID element?",
        "code": null,
        "options": [
          "Green",
          "Yellow",
          "Orange",
          "Either a random color or an error will occur"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'Green'."
      },
      {
        "id": "css_q45",
        "module": "css_m3",
        "question": "What is the correct way of setting the div background color to blue and its text color to white?",
        "code": null,
        "options": [
          "div {\r\n background: blue;\r\n color: white;\r\n}",
          "div {\r\n background-color: blue;\r\n text-color: white;\r\n}",
          "div {\r\n background: blue;\r\n text: white;\r\n}",
          "div {\r\n background: blue;\r\n font-color: white;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'div {\r\n background: blue;\r\n color: white;\r\n}'."
      },
      {
        "id": "css_q46",
        "module": "css_m3",
        "question": "What is the correct way of setting the preferred font for text elements?",
        "code": null,
        "options": [
          "p {\r\n font-family: \"Roboto\", Arial, sans-serif;\r\n}",
          "p {\r\n font: Arial;\r\n}",
          "p {\r\n font-family: \"Roboto\", 16px, bold;\r\n}",
          "p {\r\n font: \"Roboto\", Arial, sans-serif;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'p {\r\n font-family: \"Roboto\", Arial, sans-serif;\r\n}'."
      },
      {
        "id": "css_q47",
        "module": "css_m3",
        "question": "Which of the following CSS rules sets the font size to 16px, font weight to bold, and font style to italic for a paragraph element?",
        "code": null,
        "options": [
          "p {\r\n font-size: 16px;\r\n font-weight: bold;\r\n font-style: italic;\r\n}",
          "p {\r\n font: 16px bold italic;\r\n}",
          "p {\r\n font-style: bold italic 16px;\r\n}",
          "p {\r\n font: 16px;\r\n font-weight: italic;\r\n font-style: bold;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'p {\r\n font-size: 16px;\r\n font-weight: bold;\r\n font-style: italic;\r\n}'."
      },
      {
        "id": "css_q48",
        "module": "css_m3",
        "question": "Which CSS rule combines properties to set the text color to blue, center-align the text, set the font family to Arial, and add a line height of 1.5?",
        "code": null,
        "options": [
          "p {\r\n color: blue;\r\n text-align: center; font-family: Arial, sans-serif;\r\n line-height: 1.5;\r\n}",
          "p {\r\n color: blue;\r\n align-text: center; font-family: Arial, sans-serif;\r\n line-height: 1.5;\r\n}",
          "p {\r\n text-color: blue;\r\n text-align: middle; font-family: Arial, sans-serif;\r\n line-spacing: 1.5;\r\n}",
          "p {\r\n color: blue;\r\n text-align: center; font-family: Arial, serif;\r\n height: 1.5;\r\n}"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: 'p {\r\n color: blue;\r\n text-align: center; font-family: Arial, sans-serif;\r\n line-height: 1.5;\r\n}'."
      },
      {
        "id": "css_q49",
        "module": "css_m3",
        "question": "What is the primary difference between the CSS properties margin and padding?",
        "code": null,
        "options": [
          "margin creates space outside the element's border, while padding creates space between the element's content and its border.",
          "margin creates space between the element's content and its border, while padding creates space outside the element's border.",
          "margin and padding both create space outside the element's border.",
          "margin and padding both create space between the element's content and its border."
        ],
        "correct": 0,
        "explanation": "CSS Box Model se skládá z content, padding (vnitřní okraj), border (rámeček) a margin (vnější odstup). Správná odpověď: margin creates space outside the element's border, while padding creates space between the element's content and its border.."
      },
      {
        "id": "css_q50",
        "module": "css_m3",
        "question": "Measuring by the visible pink border, how wide is the .box element in the following scenario, assuming no other CSS has been applied?",
        "code": null,
        "options": [
          "244px",
          "240px",
          "200px",
          "0px"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních standardů CSS Essentials je správná volba: '244px'."
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
    "examQuestionCount": 35,
    "questions": [
      {
        "id": "js_q01",
        "module": "js_m1",
        "question": "Entering about:blank in the address bar of your browser will:",
        "code": null,
        "options": [
          "open a tab with information about your browser.",
          "generate a page with information about the browser's status and send it to the developer.",
          "reset the browser to its default settings.",
          "generate and load a minimal blank HTML page into the current tab.\n\n\n\n\nAnswers \nEntering \"about:blank\" in the address bar of your browser will generate and load a minimal blank HTML page into the current tab. It essentially creates an empty page with no content or specific information. It is commonly used as a starting point or a way to clear the current page and have a blank slate."
        ],
        "correct": 3,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'generate and load a minimal blank HTML page into the current tab.\n\n\n\n\nAnswers \nEntering \"about:blank\" in the address bar of your browser will generate and load a minimal blank HTML page into the current tab. It essentially creates an empty page with no content or specific information. It is commonly used as a starting point or a way to clear the current page and have a blank slate.'."
      },
      {
        "id": "js_q02",
        "module": "js_m2",
        "question": "The TypeScript language is:",
        "code": null,
        "options": [
          "the original name for JavaScript, which has been changed over time.",
          "a new language base on JavaScript which, among other things, introduces static typing.",
          "an alternative name for JavaScript",
          "a variant of JavaScript that is compiled rather than interpreted.\n\n\n\n\nAnswers \nThe TypeScript language is a new language based on JavaScript. It is developed by Microsoft and adds several features to JavaScript, including static typing. TypeScript introduces optional static typing, which allows developers to define types for variables, function parameters, and return values. This provides better tooling, compile-time type checking, and improved code organization and maintainability. TypeScript code is transpiled into plain JavaScript, which can then be run in any JavaScript environment. It is worth noting that TypeScript is not the original name for JavaScript, and it is not an alternative name for JavaScript."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'a new language base on JavaScript which, among other things, introduces static typing.'."
      },
      {
        "id": "js_q03",
        "module": "js_m1",
        "question": "What HTML tag is used to indicate that we are embedding JavaScript code?",
        "code": null,
        "options": [
          "<execute>",
          "<script>",
          "<source>",
          "<js>\n\n\n\n\nAnswers \nThe HTML tag used to indicate that we are embedding JavaScript code is the <script> tag. This tag is used to define or reference external JavaScript files or to include JavaScript code directly within an HTML document. Here is an example of how the <script> tag is typically used:\n\n<script>\r\n// JavaScript code goes here\r\n</script>\nAlternatively, you can also reference an external JavaScript file by specifying the source using the src attribute within the <script> tag:\n\n<script src=\"script.js\"></script>\nIn both cases, the JavaScript code within the <script> tag will be executed by the browser."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '<script>'."
      },
      {
        "id": "js_q04",
        "module": "js_m3",
        "question": "In the browser, we type into the address bar a string starting with file:///. This means that:",
        "code": null,
        "options": [
          "the rest of the string is the path to the file on our local computer that we want to open in the browser.",
          "we want the browser to create an empty page for us with the name we give as a continuation of the string.",
          "we want to save the page as a local file.",
          "we do not want to open the page, but only download a file from the remote address and save it on the local machine.\n\n\n\n\nAnswers \nWhen typing a string starting with \"file:///\" in the browser's address bar, it typically indicates that you want to open a local file on your computer in the browser. The rest of the string after \"file:///\" represents the path to the file you want to open.\n\nFor example, if you type \"file:///path/to/file.html\" in the address bar, it means you want to open the \"file.html\" file located at the specified path on your local computer.\n\nIt's important to note that modern browsers often have security restrictions in place that prevent opening arbitrary local files directly from the file system for security reasons. In such cases, you may encounter limitations or security warnings when trying to open local files using the \"file:///\" protocol."
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'the rest of the string is the path to the file on our local computer that we want to open in the browser.'."
      },
      {
        "id": "js_q05",
        "module": "js_m1",
        "question": "In a browser, we want to open a local file by typing the path to it in the address bar. The path must be preceded by:",
        "code": null,
        "options": [
          "local:///",
          "http://",
          "https://",
          "file:///\n\n\n\n\nAnswers \nTo open a local file in a browser by typing its path in the address bar, the path must be preceded by \"file:///\".\n\nFor example, if you have an HTML file named \"index.html\" located at \"C:\\Users\\Username\\Documents\\index.html\", you would type the following in the address bar:\n\nfile:///C:/Users/Username/Documents/index.html\nThe \"file:///\" prefix indicates that you want to access a file on the local file system."
        ],
        "correct": 3,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'file:///\n\n\n\n\nAnswers \nTo open a local file in a browser by typing its path in the address bar, the path must be preceded by \"file:///\".\n\nFor example, if you have an HTML file named \"index.html\" located at \"C:\\Users\\Username\\Documents\\index.html\", you would type the following in the address bar:\n\nfile:///C:/Users/Username/Documents/index.html\nThe \"file:///\" prefix indicates that you want to access a file on the local file system.'."
      },
      {
        "id": "js_q06",
        "module": "js_m5",
        "question": "Using JavaScript, we want to display the word \"test\" in the console. What statement do we use to do this?",
        "code": null,
        "options": [
          "console (log, \"test\");",
          "console.log(\"test\");",
          "console(\"test\");",
          "log(\"test\");\n\n\n\n\nAnswers \nTo display the word \"test\" in the console using JavaScript, you would use the statement:\n\n\nconsole.log(\"test\");\nThe console.log() function is a built-in function in JavaScript that outputs a message or value to the console. In this case, it will display the string \"test\" in the console."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'console.log(\"test\");'."
      },
      {
        "id": "js_q07",
        "module": "js_m3",
        "question": "A client-side JavaScript program:",
        "code": null,
        "options": [
          "runs directly in a web browser and can contain an HTML document inside it.",
          "may be embedded inside an HTML document or run standalone in the browser.",
          "requires server support to run.",
          "should be embedded inside an HTML document.\n\n\n\n\nAnswers \nA client-side JavaScript program should be embedded inside an HTML document.\n\nWhen developing a client-side JavaScript program, it is common practice to embed the JavaScript code within an HTML document. This allows the JavaScript code to interact with the HTML elements and be executed when the HTML document is loaded in a web browser.\n\nJavaScript code can be included in an HTML document using the <script> tag. The <script> tag can be placed in the <head> section or at the end of the <body> section of the HTML document. Here's an example:\n\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>Client-side JavaScript Example</title>\r\n<script>\r\n// JavaScript code goes here\r\n</script>\r\n</head>\r\n<body>\r\n<!-- HTML content -->\r\n</body>\r\n</html>\nBy embedding JavaScript code within the HTML document, you can access and manipulate the HTML elements, respond to events, perform calculations, and perform other client-side operations directly within the browser."
        ],
        "correct": 3,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'should be embedded inside an HTML document.\n\n\n\n\nAnswers \nA client-side JavaScript program should be embedded inside an HTML document.\n\nWhen developing a client-side JavaScript program, it is common practice to embed the JavaScript code within an HTML document. This allows the JavaScript code to interact with the HTML elements and be executed when the HTML document is loaded in a web browser.\n\nJavaScript code can be included in an HTML document using the <script> tag. The <script> tag can be placed in the <head> section or at the end of the <body> section of the HTML document. Here's an example:\n\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>Client-side JavaScript Example</title>\r\n<script>\r\n// JavaScript code goes here\r\n</script>\r\n</head>\r\n<body>\r\n<!-- HTML content -->\r\n</body>\r\n</html>\nBy embedding JavaScript code within the HTML document, you can access and manipulate the HTML elements, respond to events, perform calculations, and perform other client-side operations directly within the browser.'."
      },
      {
        "id": "js_q08",
        "module": "js_m3",
        "question": "The JavaScript code includes the console.log(\"http://test.org\"); command. Its execution will:",
        "code": null,
        "options": [
          "send a log with information about the currently executed script to the indicated address http://test.org.",
          "display on the console information about the progress of http://test.org page loading.",
          "display the following message on the console: \"http://test.org\".",
          "cause the page http://test.org to be loaded into the browser.\n\n\n\n\nAnswers \nThe execution of the JavaScript code console.log(\"http://test.org\"); will display the following message on the console: \"http://test.org\".\n\nThe console.log() function is used to output a message or value to the console for debugging or informational purposes. In this case, the provided message is \"http://test.org\". It will not send a log to the indicated address or load the page http://test.org into the browser. It simply logs the string \"http://test.org\" as a message in the console for you to see during development or testing."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'display the following message on the console: \"http://test.org\".'."
      },
      {
        "id": "js_q09",
        "module": "js_m5",
        "question": "The <html> tag indicates the start of the actual HTML document. What tag should appear at the end of the document?",
        "code": null,
        "options": [
          "<lmth>",
          "</html>",
          "<html/>",
          "<html>\n\n\n\n\nAnswers \nThe correct tag that should appear at the end of an HTML document is </html>. This closing </html> tag marks the end of the HTML document and is used to indicate the completion of the HTML structure.\n\nHere's an example of a basic HTML document structure:\n\n<html>\r\n<head>\r\n<title>My Webpage</title>\r\n</head>\r\n<body>\r\n<!-- Content of the webpage -->\r\n</body>\r\n</html>\nThe opening <html> tag at the beginning and the closing </html> tag at the end enclose the entire HTML document. Any HTML content, such as the <head> and <body> sections, should be placed between these tags."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '</html>'."
      },
      {
        "id": "js_q10",
        "module": "js_m1",
        "question": "Where will we definitely not be able to execute JavaScript code?",
        "code": null,
        "options": [
          "Directly in the processor.",
          "In a server environment using node.js.",
          "On a mobile device.",
          "In a web browser.\n\n\n\n\nAnswers \nJavaScript code cannot be executed directly in the processor. Processors execute machine code or instructions specific to their architecture, and JavaScript is an interpreted language that requires a JavaScript engine to run.\n\nJavaScript can be executed in various environments, including:\n\n\nIn a server environment using Node.js: Node.js allows executing JavaScript code on the server-side. It provides a runtime environment that enables server-side scripting using JavaScript.",
          "In a web browser: JavaScript is primarily executed in web browsers. Browsers have built-in JavaScript engines that interpret and execute JavaScript code embedded within HTML pages.",
          "On a mobile device: Many mobile devices, such as smartphones and tablets, have web browsers that support JavaScript execution. Mobile web browsers provide JavaScript engine support to run JavaScript code within web pages or mobile web applications."
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'Directly in the processor.'."
      },
      {
        "id": "js_q11",
        "module": "js_m5",
        "question": "What tag do we use in HTML to denote the main part of the document inside which we define the page elements?",
        "code": null,
        "options": [
          "<body>",
          "<head>",
          "<content>",
          "<main>\n\n\n\n\nAnswers \nThe tag used in HTML to denote the main part of the document inside which we define the page elements is the <body> tag.\n\nThe <body> tag represents the main content area of an HTML document. It contains all the visible elements of the webpage, such as text, images, links, forms, and more. The content placed within the <body> tag is what is displayed to the user in the web browser.\n\nHere's an example of how the <body> tag is used:\n\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>My Webpage</title>\r\n</head>\r\n<body>\r\n<h1>Welcome to my webpage!</h1>\r\n<p>This is the main content area.</p>\r\n<!-- Additional page elements -->\r\n</body>\r\n</html>\n\n\n\n\n\n\nIn the above example, the main content of the webpage, including the heading <h1> and paragraph <p>, is placed within the <body> tag."
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '<body>'."
      },
      {
        "id": "js_q12",
        "module": "js_m1",
        "question": "The basic toolkit needed to effectively develop JavaScript code consists of two elements:",
        "code": null,
        "options": [
          "interpreter, package manager.",
          "interpreter, debugger.",
          "code editor, interpreter.",
          "code editor, debugger.\n\n\n\n\nAnswers \nThe basic toolkit needed to effectively develop JavaScript code consists of a code editor and an interpreter.\n\n\nCode Editor: A code editor is a software tool that allows you to write, edit, and manage your JavaScript code. It provides features like syntax highlighting, code completion, formatting, and other productivity-enhancing features. Popular code editors for JavaScript development include Visual Studio Code, Sublime Text, Atom, and JetBrains WebStorm.",
          "Interpreter: An interpreter is responsible for executing JavaScript code. It takes the source code and interprets it line by line, executing the code in real-time. Web browsers have built-in JavaScript engines that act as interpreters, executing JavaScript code directly in the browser. Examples include V8 in Chrome, SpiderMonkey in Firefox, and JavaScriptCore in Safari."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'code editor, interpreter.'."
      },
      {
        "id": "js_q13",
        "module": "js_m1",
        "question": "What is not the task of the interpreter?",
        "code": null,
        "options": [
          "Transforming the individual commands of the source code into the target form.",
          "Creating a runtime environment for the program.",
          "Verifying the correctness of the program source code (syntax).",
          "Transforming all program code into target code before execution.\n\n\n\n\nAnswers \nThe task of the interpreter does not include transforming all program code into target code before execution.\n\nInterpreters work by executing the program code line by line, transforming each individual command from the source code into executable instructions as it encounters them. The interpreter takes care of executing these instructions directly without prior transformation of the entire program into target code. This is in contrast to compilers, which typically transform the entire program into target code before execution.\n\nThe other tasks mentioned are typically associated with interpreters:\n\n\nTransforming the individual commands of the source code into the target form: Interpreters translate each command or statement in the source code into executable instructions or bytecode as they encounter them during runtime.",
          "Creating a runtime environment for the program: Interpreters set up the necessary runtime environment, including allocating memory, managing variables and objects, handling input and output, and providing the necessary runtime libraries or APIs for program execution.",
          "Verifying the correctness of the program source code (syntax): Interpreters perform syntax checking to ensure that the program adheres to the language's syntax rules. They identify and report syntax errors in the source code before executing it."
        ],
        "correct": 3,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'Transforming all program code into target code before execution.\n\n\n\n\nAnswers \nThe task of the interpreter does not include transforming all program code into target code before execution.\n\nInterpreters work by executing the program code line by line, transforming each individual command from the source code into executable instructions as it encounters them. The interpreter takes care of executing these instructions directly without prior transformation of the entire program into target code. This is in contrast to compilers, which typically transform the entire program into target code before execution.\n\nThe other tasks mentioned are typically associated with interpreters:\n\n\nTransforming the individual commands of the source code into the target form: Interpreters translate each command or statement in the source code into executable instructions or bytecode as they encounter them during runtime.'."
      },
      {
        "id": "js_q14",
        "module": "js_m5",
        "question": "To change the value of the age field to 6 , we need to perform:",
        "code": null,
        "options": [
          "dog{age} = 6;",
          "age of dog = 6;",
          "dog.age = 6;",
          "dog[age] = 6;\n\n\n\n\nAnswers \nTo change the value of the age field to 6 in the given object, you would use the syntax:\n\n\ndog.age = 6;\n\n\n\n\n\n\n\nThis will update the age field of the dog object to 6."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'dog.age = 6;'."
      },
      {
        "id": "js_q15",
        "module": "js_m4",
        "question": "In order to check the number of elements of the array stored in the names variable, we call:",
        "code": null,
        "options": [
          "names.length",
          "names.count",
          "length of names;",
          "names.length();\n\n\n\n\nAnswers \nTo check the number of elements in the array stored in the names variable, you would use the syntax:\n\n\nnames.length\n\n\n\n\n\n\n\nThis will return the length or number of elements in the names array."
        ],
        "correct": 0,
        "explanation": "Pole v JS je indexovaný seznam hodnot s metodami jako push, pop, shift, unshift, slice a splice. Správná odpověď: names.length."
      },
      {
        "id": "js_q16",
        "module": "js_m5",
        "question": "We need to come up with a name for a variable where we will store the age of a user. All of the following variable names are formally correct, but one of them is the most readable, indicate which one:",
        "code": null,
        "options": [
          "userAge",
          "ua",
          "user",
          "age\n\n\n\n\nAnswers \nThe most readable variable name among the options provided is userAge.\n\nThis name clearly indicates that it stores the age of a user, making it more understandable and self-explanatory compared to the other options."
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'userAge'."
      },
      {
        "id": "js_q17",
        "module": "js_m2",
        "question": "We can replace the declaration let x = 0x21; with:",
        "code": null,
        "options": [
          "let x = \"0x21\"",
          "let x = 33;",
          "let x = 17;",
          "let x = 21;\n\n\n\n\nAnswers \nThe replacement for the declaration let x = 0x21; can be:\n\n\nlet x = 33;\nThe hexadecimal value 0x21 represents the decimal value 33, so assigning x to 33 achieves the same result as the original declaration."
        ],
        "correct": 1,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: let x = 33;."
      },
      {
        "id": "js_q18",
        "module": "js_m4",
        "question": "In the daysOfWeek variable, we place an array with the names of the days of the week. To reverse the order of the array elements, we should call:",
        "code": null,
        "options": [
          "reverse daysOfWeek;",
          "daysOfWeek.invert();",
          "invert(daysOfWeek);",
          "daysOfWeek.reverse();\n\n\n\n\nAnswers \nTo reverse the order of the array elements stored in the daysOfWeek variable, you should call:\n\ndaysOfWeek.reverse();\nThe reverse() method is used to reverse the order of elements in an array in JavaScript. By calling daysOfWeek.reverse(), the elements in the daysOfWeek array will be reversed."
        ],
        "correct": 3,
        "explanation": "Pole v JS je indexovaný seznam hodnot s metodami jako push, pop, shift, unshift, slice a splice. Správná odpověď: daysOfWeek.reverse();\n\n\n\n\nAnswers \nTo reverse the order of the array elements stored in the daysOfWeek variable, you should call:\n\ndaysOfWeek.reverse();\nThe reverse() method is used to reverse the order of elements in an array in JavaScript. By calling daysOfWeek.reverse(), the elements in the daysOfWeek array will be reversed.."
      },
      {
        "id": "js_q19",
        "module": "js_m6",
        "question": "By default, JavaScript allows us to write to an undeclared variable (it declares it implicitly for us). If we want the interpreter to treat such a situation as an error, we have to:",
        "code": null,
        "options": [
          "perform all writes to variables in a block of code delimited by braces.",
          "place the \"use strict\"; directive before each write we want to protect.",
          "place the \"use strict\"; directive at the beginning of the script.",
          "place the \"prevent undeclared variables\"; directive at the beginning of the script.\n\n\n\n\nAnswers \nTo treat writing to an undeclared variable as an error in JavaScript, you would need to place the \"use strict\"; directive at the beginning of the script.\n\nSo the correct option is:\n\nplace the \"use strict\"; directive at the beginning of the script.\nBy using the \"use strict\"; directive, you enable strict mode in JavaScript, which helps catch common mistakes and enforces stricter rules for variable declaration and usage. It will treat writing to an undeclared variable as an error instead of implicitly declaring it."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'place the \"use strict\"; directive at the beginning of the script.'."
      },
      {
        "id": "js_q20",
        "module": "js_m5",
        "question": "If a variable stores the value false, then the variable:",
        "code": null,
        "options": [
          "is of the Logical type.",
          "is of the Math type.",
          "is of the Boolean type.",
          "will no longer be used in the program.\n\n\n\n\nAnswers \nIf a variable stores the value false, then the variable is of the Boolean type.\n\nThe Boolean type in JavaScript represents a logical value that can have two possible states: true or false. Therefore, when a variable stores the value false, it is considered a Boolean variable. The variable can still be used in the program and can hold other Boolean values or be reassigned to different values as needed."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'is of the Boolean type.'."
      },
      {
        "id": "js_q21",
        "module": "js_m5",
        "question": "The msg variable contains a String type value. Information about the number of characters of this string can be obtained using:",
        "code": null,
        "options": [
          "msg.chars",
          "msg.charsAt()",
          "msg.length",
          "msg.length()\n\n\n\n\nAnswers \nTo obtain information about the number of characters in a string stored in the msg variable, you can use the following syntax:\n\n\nmsg.length\n\nThe length property is used to retrieve the number of characters in a string in JavaScript. By calling msg.length, you will get the length or number of characters in the msg string.\n\nNote that msg.chars, msg.charsAt(), and msg.length() are not valid ways to get the length of a string in JavaScript."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'msg.length'."
      },
      {
        "id": "js_q22",
        "module": "js_m5",
        "question": "After declaring a counter variable, we want to put a short comment with information about what the variable is used for. To do this, we modify the line declaration to the form:",
        "code": null,
        "options": [
          "// let counter = 0; user visit counter",
          "let counter = 0; // user visit counter",
          "let counter = 0; /* user visite counter",
          "let counter = 0; # user visite counter\n\n\n\n\nAnswers \nTo put a short comment with information about what the counter variable is used for, you can modify the line declaration in the following ways:\n\nlet counter = 0; // user visit counter\nor\n\n// let counter = 0; user visit counter\r\nlet counter = 0;\nBoth of these modifications achieve the desired result by adding a comment next to the declaration of the counter variable. It provides information that the variable is used for counting user visits.\n\nNote that in JavaScript, single-line comments start with //, and multi-line comments are enclosed between /* and */. The # symbol is not used for comments in JavaScript."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'let counter = 0; // user visit counter'."
      },
      {
        "id": "js_q23",
        "module": "js_m5",
        "question": "Analyze the code snippet. Identify which variables are local and which are global;",
        "code": null,
        "options": [
          "name ==> Global",
          "profession ==> Local",
          "age ==> Global",
          "height ==> Local",
          "weight ==> Local \n\n\n\n\nAnswers \nIn the given code snippet, the variables can be classified as follows:\n\nGlobal variables:\n\n\nname",
          "age"
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'name ==> Global'."
      },
      {
        "id": "js_q24",
        "module": "js_m2",
        "question": "We want to convert the string \"1024\" to type Number and store the result in variable n. Point out the correct statement",
        "code": null,
        "options": [
          "let n = Number(\"1024\");",
          "let n = String(\"1024\");",
          "let n = StringToNumber(\"1024\");",
          "let n = \"1024\" + 0;",
          "Answers \nThe correct answer is:\n\n\nlet n = Number(\"1024\");\n\n\n\n\n\n\n\nThis code converts the string \"1024\" to a number using the Number() function and stores the result in the variable n."
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'let n = Number(\"1024\");'."
      },
      {
        "id": "js_q25",
        "module": "js_m4",
        "question": "The index variable will have the value:",
        "code": null,
        "options": [
          "0",
          "1",
          "True",
          "\"June\"",
          "Answers \nThe indexOf() method is used to find the index of the first occurrence of a specified element within an array. In this case, it is used to find the index of the string \"June\" within the summer array.\n\nSince arrays in JavaScript are zero-based, meaning the first element has an index of 0, the indexOf() method will return the index of \"June\" as 0. Therefore, the variable index will have the value 0."
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '0'."
      },
      {
        "id": "js_q26",
        "module": "js_m5",
        "question": "We have declared an array of animals let animals = [\"dog\", \"cat\", \"hamster\"];. Then we call the method animals.push(\"canary\");. As a result, the animals array will look like this:",
        "code": null,
        "options": [
          "[\"dog\", \"cat\", \"hamster\"]",
          "[\"canary\", \"dog\", \"cat\", \"hamster\"]",
          "[\"canary\"]",
          "[\"dog\"], \"cat\", \"hamster\", \"canary\"]",
          "Answers \nAfter calling the method animals.push(\"canary\");, the animals array will look like this:\n\n[\"dog\", \"cat\", \"hamster\", \"canary\"]\n\nThe push() method is used to add elements to the end of an array. In this case, it adds the string \"canary\" to the end of the animals array. Therefore, the resulting array will have the elements \"dog\", \"cat\", \"hamster\", and \"canary\" in that order."
        ],
        "correct": 3,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: [\"dog\"], \"cat\", \"hamster\", \"canary\"]."
      },
      {
        "id": "js_q27",
        "module": "js_m5",
        "question": "We perform the operation: let x = \"abcdefg\".slice(2, 4). As a result, the value:",
        "code": null,
        "options": [
          "\"ab\" will be written to the variable x",
          "\"cd\" will be written to the variable x",
          "\"cdef\" will be written to the variable x",
          "\"cdefg\" will be written to the variable x",
          "Answers \nThe slice() method is used to extract a portion of a string based on the specified starting and ending indices. In this case, \"abcdefg\".slice(2,4) will extract characters starting from index 2 (inclusive) up to index 4 (exclusive).\n\nThe resulting substring will be \"cd\", and it will be assigned to the variable x."
        ],
        "correct": 1,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: \"cd\" will be written to the variable x."
      },
      {
        "id": "js_q28",
        "module": "js_m2",
        "question": "We want to declare a distance constant and initialize it with the value 120. What should such a declaration look like?",
        "code": null,
        "options": [
          "const distance = 120;",
          "const distance; distance = 120;",
          "let distance; const distance = 120;",
          "let constant distance = 120;",
          "Answers \nIn JavaScript, when declaring a constant using the const keyword, you need to provide both the constant name and its initial value in a single statement. Therefore, the correct way to declare and initialize the constant distance with the value of 120 is by using the code snippet above."
        ],
        "correct": 0,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: const distance = 120;."
      },
      {
        "id": "js_q29",
        "module": "js_m1",
        "question": "As a result of its execution:",
        "code": null,
        "options": [
          "an error will appear because JavaScript does not allow operations on fractional numbers.",
          "it will display 0.1 in the console",
          "it will display \"number\" in the console.",
          "it will display \"fraction\" in the console.",
          "Answers \nperforms the division operation 10 / 100 and assigns the result to the variable x. In JavaScript, the division operation between two numbers results in a floating-point number.\n\nThe console.log(typeof(x)) statement outputs the type of the variable x to the console. Since the result of the division is a floating-point number, the typeof operator will return \"number\". Therefore, executing the code will display \"number\" in the console."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'it will display \"number\" in the console.'."
      },
      {
        "id": "js_q30",
        "module": "js_m2",
        "question": "We have access to the weight variable:",
        "code": null,
        "options": [
          "in the part marked 1.",
          "throughout the program.",
          "nowhere, as we have no access at all (the variable has not been initialized).",
          "in the part marked 2.",
          "Answers"
        ],
        "correct": 0,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'in the part marked 1.'."
      },
      {
        "id": "js_q31",
        "module": "js_m5",
        "question": "Performing the operation: let x = 20n + 10; will:",
        "code": null,
        "options": [
          "result in the string \"20n10\" being stored in the variable x.",
          "cause the program to abort due to an error.",
          "result in a value of 30n being stored in the variable x.",
          "result in a value of 30 being stored in the variable x.",
          "Answers \n\n\n\n\n\n\n\nPerforming the operation in JavaScript will result in an Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions."
        ],
        "correct": 1,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: cause the program to abort due to an error.."
      },
      {
        "id": "js_q32",
        "module": "js_m5",
        "question": "Performing the operation: let x = 100 / 0; will result in",
        "code": null,
        "options": [
          "an Infinity value being stored in the variable x.",
          "the value NaN being stored in the variable x.",
          "the value 0 being stored in the variable x.",
          "the value 0 being stored in the variable x.",
          "Answers \nIn JavaScript, dividing a non-zero number by zero results in a special value called Infinity. Therefore, when performing the operation let x = 100/0;, the value Infinity will be stored in the variable x.\n\nIt's important to note that dividing zero by zero (0/0) results in NaN (Not a Number), but dividing a non-zero number by zero results in Infinity."
        ],
        "correct": 0,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: an Infinity value being stored in the variable x.."
      },
      {
        "id": "js_q33",
        "module": "js_m3",
        "question": "As a result of its execution, the following should appear in the console:",
        "code": null,
        "options": [
          "undefined",
          "32",
          "error message: \"uncaught ReferenceError: Age is not defined\" .",
          "33",
          "Answers \nIn the code snippet provided, there is a mismatch in the variable names. The variable age is declared and assigned the value 32. Then, it is incremented by 1 using age = age + 1;. However, when attempting to console.log(Age);, it refers to a variable Age with a capital \"A\", which has not been declared or assigned any value.\n\nJavaScript is case-sensitive, so Age and age are considered as separate variables. Since Age is not defined, it will result in an \"uncaught ReferenceError\" when trying to access it."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'error message: \"uncaught ReferenceError: Age is not defined\" .'."
      },
      {
        "id": "js_q34",
        "module": "js_m5",
        "question": "Performing the operation: let x = \"Alice\" + 10; will result in:",
        "code": null,
        "options": [
          "the program execution to abort due to an error.",
          "the value NaN of Number type to be stored in the variable x .",
          "the value 15 of Number type to be stored in the variable x .",
          "the value \"Alice10\" of String type to be stored in the variable x .",
          "Answers \nIn JavaScript, when you use the + operator with a string and a number, the number is implicitly converted to a string, and the concatenation of the two values is performed.\n\nIn the code snippet let x = \"Alice\" + 10;, the string \"Alice\" is concatenated with the number 10. The result of this operation is the string \"Alice10\", which is then stored in the variable x."
        ],
        "correct": 3,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: the value \"Alice10\" of String type to be stored in the variable x .."
      },
      {
        "id": "js_q35",
        "module": "js_m2",
        "question": "Complex (or composite) data types:",
        "code": null,
        "options": [
          "is an alternative name for primitive types.",
          "may consist of multiple elements, of which is of a primitive type.",
          "may consist of multiple elements, each of which may be of a primitive or composite type.",
          "are not used in JavaScript.",
          "Answers \nComplex (or composite) data types in JavaScript can consist of multiple elements, and each element can be of a primitive type or another complex data type. Examples of complex data types in JavaScript include arrays, objects, and functions.\n\nPrimitive types, on the other hand, are not complex data types. They are basic data types that represent simple values, such as numbers, strings, booleans, null, and undefined.\n\nTherefore, complex data types can have multiple elements, each of which can be either a primitive type or another complex data type, making them more versatile and flexible in storing and representing data."
        ],
        "correct": 2,
        "explanation": "V JavaScriptu mezi složené (referenční) typy patří objekty (Object) a pole (Array), zatímco primitivní jsou např. number, string, boolean. Správná odpověď: may consist of multiple elements, each of which may be of a primitive or composite type.."
      },
      {
        "id": "js_q36",
        "module": "js_m4",
        "question": "We have declared an array of selected month names let summer = [\"June\", \"July\", \"August\"];. We want to change the value \"July\" stored in the array to the number 7:",
        "code": null,
        "options": [
          "summer[1] = 7;",
          "We cannot do this (an array can only contain elements of the same type).",
          "summer.July = 7;",
          "summer[0] = 7;",
          "Answers \nTo change the value \"July\" stored in the array summer to the number 7, you can use the index notation ([]) and assign the new value to the corresponding index.\n\nIn JavaScript arrays, elements can be of different types, so you can replace an element in the array with a value of a different type. By using summer[1] = 7;, you are accessing the element at index 1 (which is \"July\") and assigning the value 7 to it, effectively changing the element to the number 7.\n\nTherefore, after executing summer[1] = 7;, the summer array will become [\"June\", 7, \"August\"], with the element at index 1 being replaced by the number 7."
        ],
        "correct": 0,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: summer[1] = 7;."
      },
      {
        "id": "js_q37",
        "module": "js_m5",
        "question": "We have declared an array let animals = [\"dog\", \"cat\", \"hamster\"];. We want to temporarily comment out the element \"cat\", and to do this, we can modify the declaration as follows:",
        "code": null,
        "options": [
          "let animals = [\"dog\", \"hamster\"];",
          "let animals = [\"dog\", #\"cat\",# \"hamster\"];",
          "let animals = [\"dog\", //\"cat\",// \"hamster\"];",
          "let animals = [\"dog\", /*\"cat\",*/ \"hamster\"];",
          "Answers \nIn JavaScript, you can use the /* */ syntax for multiline comments. By placing the /* before the element you want to comment out and the */ after it, you effectively turn that part of the code into a comment.\n\nTherefore, modifying the declaration of the animals array as shown above will temporarily comment out the element \"cat\", resulting in an array with only the elements \"dog\" and \"hamster\"."
        ],
        "correct": 3,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: let animals = [\"dog\", /*\"cat\",*/ \"hamster\"];."
      },
      {
        "id": "js_q38",
        "module": "js_m2",
        "question": "Point out the correct declaration of the height variable:",
        "code": null,
        "options": [
          "height;",
          "height is variable;",
          "let height;",
          "variable height;",
          "Answers \nIn JavaScript, variables are typically declared using the let keyword, followed by the variable name. The statement let height; declares a variable named height without assigning it an initial value.\n\nTherefore, let height; is the correct syntax for declaring the height variable in JavaScript."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'let height;'."
      },
      {
        "id": "js_q39",
        "module": "js_m1",
        "question": "The result of the operation 20 || 5 will be:",
        "code": null,
        "options": [
          "5",
          "25",
          "20",
          "true",
          "Answers \nIn JavaScript, the double vertical bar \"||\" is indeed used as the logical OR operator. The logical OR operator in JavaScript returns the first operand if it is truthy, otherwise, it returns the second operand.\n\nIn the case of the expression \"20 || 5\", both 20 and 5 are considered truthy values in JavaScript. Therefore, the result of the operation would be 20, which is the first truthy value encountered.\n\nTo illustrate this in code:\n\nconsole.log(20 || 5); // Output: 20\n\n\n\n\n\n\nSo, the result of the operation \"20 || 5\" in JavaScript is 20."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '20'."
      },
      {
        "id": "js_q40",
        "module": "js_m1",
        "question": "The result of the operation false || \"false\" will be:",
        "code": null,
        "options": [
          "0",
          "\"false\"",
          "false",
          "true",
          "Answers \nThe result of the operation false || \"false\" in JavaScript is indeed false.\n\nThe logical OR operator (||) returns the first truthy value it encounters or the last operand if all operands are falsy. In this case, the first operand is false, which is falsy. The second operand is the string \"false\", which is also truthy. Since the logical OR operator did not encounter a truthy value in the operands before reaching the last operand, it returns the last operand, which is false.\n\nTherefore, the correct answer is false."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '\"false\"'."
      },
      {
        "id": "js_q41",
        "module": "js_m3",
        "question": "The result of the operation 3 * 4 > 20 - 15 will be:",
        "code": null,
        "options": [
          "NaN",
          "false",
          "true",
          "-14",
          "Answers \nTo evaluate the expression \"3 * 4 > 20 – 15,\" let's break it down:\n\nFirst, we calculate the values on both sides of the comparison:\n\n3 * 4 = 12 20 – 15 = 5\n\nNow we can compare the two values:\n\n12 > 5\n\nSince 12 is indeed greater than 5, the result of the comparison is true.\n\nTherefore, the correct answer is true."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'true'."
      },
      {
        "id": "js_q42",
        "module": "js_m5",
        "question": "Which operator do we use if we want to check if two variables store the same values of exactly the same type?",
        "code": null,
        "options": [
          "=",
          "===",
          "==",
          "!==",
          "Answers \nTo check if two variables store the same values of exactly the same type in JavaScript, you would use the strict equality operator, which is \"===\".\n\nHere's an \n\n\"===\" (strict equality operator): It compares two values for equality without performing any type coercion. It returns true if the values are equal in value and type.",
          "\"==\" (loose equality operator): It also compares two values for equality, but it allows for type coercion. JavaScript will try to convert the operands to the same type before making the comparison. This operator can lead to unexpected results due to the type coercion rules, so it's generally recommended to use the strict equality operator (===) instead.",
          "\"!=\" (loose inequality operator): It checks if two values are not equal after performing type coercion.",
          "\"!==\" (strict inequality operator): It checks if two values are not equal without performing any type coercion."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '==='."
      },
      {
        "id": "js_q43",
        "module": "js_m1",
        "question": "The result of the operation !(true && false || true) will be:",
        "code": null,
        "options": [
          "null",
          "false",
          "1",
          "true",
          "Answers \nThe result of the operation \"!(true && false || true)\" will be \"false\".\n\nTo evaluate this expression, let's break it down step by step:\n\n\nThe innermost part of the expression is the logical AND operation \"true && false\", which evaluates to \"false\". This is because both operands need to be true for the logical AND to return true.",
          "Next, we have the logical OR operation \"false || true\", which evaluates to \"true\". This is because at least one of the operands needs to be true for the logical OR to return true.",
          "Finally, we have the logical NOT operation \"!true\", which negates the result and returns the opposite. Since the result of the previous step is \"true\", the logical NOT operation returns \"false\"."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'false'."
      },
      {
        "id": "js_q44",
        "module": "js_m5",
        "question": "What value will the test variable have if, after running the code, we immediately press the Ok button on the newly created dialog?",
        "code": null,
        "options": [
          "true",
          "\"Hello\"",
          "\"OK\"",
          "\"World\"",
          "Answers \nIf, after running the code let test = prompt(\"Hello\", \"World\");, you immediately press the \"OK\" button on the dialog without modifying the input, the test variable will have the value \"World\".\n\nThe prompt function in JavaScript displays a dialog box with an optional message and a default value. In this case, the message is \"Hello\" and the default value is \"World\".\n\nWhen the dialog appears, if you click \"OK\" without modifying the input, the default value (\"World\") will be assigned to the test variable.\n\nHere's an example of what the code could look like and the outcome:\n\nlet test = prompt(\"Hello\", \"World\");\r\nconsole.log(test);\nScenario: User presses \"OK\" without modifying the input:\n\n\nDialog box appears with the default input \"World\".",
          "User presses \"OK\" without modifying the input.",
          "The default value (\"World\") will be assigned to the test variable.",
          "The output will be \"World\"."
        ],
        "correct": 3,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '\"World\"'."
      },
      {
        "id": "js_q45",
        "module": "js_m3",
        "question": "The number 2 is stored in the variable n (let n = 2;). The command n = n*n*n is then called. This last command can be replaced by:",
        "code": null,
        "options": [
          "n **= n;",
          "n **= 3;",
          "n *= 3;",
          "n ***= n;",
          "Answers \nThe command n = n * n * n can be replaced by n **= 3.\n\nIn JavaScript, the **= operator is the exponentiation assignment operator. It raises the left-hand side operand to the power of the right-hand side operand and assigns the result back to the left-hand side variable.\n\nSo, when n = n * n * n is replaced with n **= 3, it means n will be raised to the power of 3 and the result will be assigned back to n. It is equivalent to performing n = n ** 3.\n\nHere's an example to illustrate this:\n\nlet n = 2;\r\nn **= 3;\r\nconsole.log(n); // Output: 8\nIn this case, the value of n is initially 2. After executing n **= 3, n is raised to the power of 3, resulting in 8. Therefore, the output will be 8.\n\nTo summarize, the command n = n * n * n can be replaced by n **= 3 to achieve the same result."
        ],
        "correct": 1,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: n **= 3;."
      },
      {
        "id": "js_q46",
        "module": "js_m2",
        "question": "The result is stored in the variable n is:",
        "code": null,
        "options": [
          "18",
          "36",
          "215",
          "53",
          "Answers \nThe result stored in the variable n after executing the code snippet let n = 2 * 3 ** 3 - 1; is 53.\n\nLet's break down the code snippet step by step:\n\n\n3 ** 3 is an exponentiation operation where 3 is raised to the power of 3. This results in 27.",
          "Next, 2 * 27 is multiplied, which gives 54.",
          "Finally, 54 - 1 is subtracted, resulting in 53."
        ],
        "correct": 3,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '53'."
      },
      {
        "id": "js_q47",
        "module": "js_m1",
        "question": "The result of the comparison \"abcd\" > \"Abcd\" will be:",
        "code": null,
        "options": [
          "\"abcd\"",
          "true",
          "false",
          "1",
          "Answers \nThe result of the comparison \"abcd\" > \"Abcd\" will be true.\n\nWhen comparing strings in JavaScript using the greater-than operator (>), the comparison is made based on lexicographic order, which follows the Unicode values of the characters.\n\nIn this case, comparing the strings \"abcd\" and \"Abcd\" character by character, the first differing characters are \"a\" and \"A\". In Unicode, the lowercase letters have higher values than uppercase letters. Therefore, \"a\" is greater than \"A\" in lexicographic order.\n\nSince the first differing character (\"a\") in the first string is greater than the corresponding character (\"A\") in the second string, the comparison evaluates to true.\n\nTo illustrate this in code:\n\nconsole.log(\"abcd\" > \"Abcd\"); // Output: true\n\n\n\n\n\n\nSo, the correct answer is true."
        ],
        "correct": 1,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'true'."
      },
      {
        "id": "js_q48",
        "module": "js_m2",
        "question": "Its execution will result in the following values in the variables n and m:",
        "code": null,
        "options": [
          "n: 11, m: 10",
          "n: 10, m: 11",
          "n: 11, m: 11",
          "n: 10, m:10",
          "Answers \nThe execution of the code snippet let n = 10; let m = ++n; will result in the following values in the variables n and m:\n\n\nn will have a value of 11.",
          "m will also have a value of 11."
        ],
        "correct": 2,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'n: 11, m: 11'."
      },
      {
        "id": "js_q49",
        "module": "js_m6",
        "question": "The confirm method allows you to create a dialog box. What value does this method return when the user closes the window?",
        "code": null,
        "options": [
          "Always true.",
          "Always false.",
          "The string entered by the user.",
          "It depends on the option selected by the user.",
          "Answers \nThe confirm method in JavaScript allows you to create a dialog box with an OK and Cancel button. When the user interacts with the dialog box, the method returns a boolean value that indicates the user's choice.\n\nSpecifically, when the user closes the window or clicks on either the OK or Cancel button in the dialog box, the confirm method will return true if the user clicked on OK, and false if the user clicked on Cancel or closed the window.\n\nSo, the correct answer is: It depends on the option selected by the user.\n\nHere's an example to demonstrate the usage of the confirm method:\n\nlet result = confirm(\"Are you sure you want to proceed?\");\r\nconsole.log(result);\nIn this example, a confirm dialog box with the message \"Are you sure you want to proceed?\" is displayed. If the user clicks on OK, the value of result will be true. If the user clicks on Cancel or closes the window, the value of result will be false. The output will reflect the user's choice.\n\nTherefore, the return value of the confirm method depends on the option selected by the user."
        ],
        "correct": 3,
        "explanation": "Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: 'It depends on the option selected by the user.'."
      },
      {
        "id": "js_q50",
        "module": "js_m5",
        "question": "The string \"12\" has been written into the str variable: (let str = \"12\";). Then the operations str = +str is performed. As a result, the variable str will contain:",
        "code": null,
        "options": [
          "NaN",
          "12",
          "\"+12\"",
          "\"12\"",
          "Answers \nThe variable str will contain the number 12 as a result of the operation str = +str.\n\nLet's break down the code step by step:\n\n\nInitially, the string \"12\" is assigned to the variable str using let str = \"12\";.",
          "The unary plus operator (+) is used to convert the string value to a number. When applied to a string, the unary plus operator attempts to convert the string to a numeric value.",
          "In this case, the unary plus operator is applied to the string \"12\", resulting in the number 12.",
          "The result of the conversion is then assigned back to the variable str using str = +str. Since the conversion is successful, the variable str now holds the number 12."
        ],
        "correct": 1,
        "explanation": "Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: 12."
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
        "question": "What declaration should precede the statement so that the text Jeep appears in the console as a result of its execution?",
        "code": null,
        "options": [
          "let car = {make: 'Jeep', model: 'Cherokee'};",
          "let car = [make: 'Jeep', model: 'Cherokee'];",
          "let car = [make: 'Jeep'];",
          "var car = {'Jeep'};"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let car = {make: 'Jeep', model: 'Cherokee'};'."
      },
      {
        "id": "js2_q02",
        "module": "js2_m1",
        "question": "What is the correct formula to calculate the circumference based on the circle object?",
        "code": null,
        "options": [
          "2 * circle.radius * Math.PI",
          "circle.radius * circle.radius * Math.PI",
          "2 * circle.center.x * Math.PI",
          "circle.radius + circle.center.y"
        ],
        "correct": 0,
        "explanation": "Obvod kruhu se v JS počítá vzorcem 2 * r * Math.PI. Správná odpověď: 2 * circle.radius * Math.PI."
      },
      {
        "id": "js2_q03",
        "module": "js2_m1",
        "question": "Which of the following is the correct way to refer to this property?",
        "code": null,
        "options": [
          "user['full name']",
          "user[full name]",
          "user.'full name'",
          "You cannot use a property name consisting of several words."
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'user['full name']'."
      },
      {
        "id": "js2_q04",
        "module": "js2_m1",
        "question": "What will be the result of executing the following code?",
        "code": null,
        "options": [
          "It will display only the property names without their values.",
          "It will display the values of all the properties.",
          "It will cause an error because forEach cannot be used with Object.keys.",
          "It will display a syntax error due to incorrect usage of geoposition."
        ],
        "correct": 1,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'It will display the values of all the properties.'."
      },
      {
        "id": "js2_q05",
        "module": "js2_m1",
        "question": "Which of the following comparisons will return true?",
        "code": null,
        "options": [
          "(tree1.species == tree2.species) && (tree1.species == tree2.species)",
          "tree1 == tree2",
          "tree1 === tree2",
          "tree1 same tree2"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: '(tree1.species == tree2.species) && (tree1.species == tree2.species)'."
      },
      {
        "id": "js2_q06",
        "module": "js2_m1",
        "question": "What will be the population of the city stored in \"largestCity\" after executing this code?",
        "code": null,
        "options": [
          "8537673",
          "39776830",
          "124744503",
          "'Los Angeles'"
        ],
        "correct": 1,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: '39776830'."
      },
      {
        "id": "js2_q07",
        "module": "js2_m1",
        "question": "Select the correct missing line so that the executed code results in the following console output: Huck Finn",
        "code": null,
        "options": [
          "show: function() {console.log(`${this.name} ${this.surname}`);}",
          "show: function() {console.log(`${name} ${surname}`);}",
          "show: function(this) {console.log(`${this.name} ${this.surname}`);}",
          "user.show = {console.log(`${this.name} ${this.surname}`);}"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'show: function() {console.log(`${this.name} ${this.surname}`);}'."
      },
      {
        "id": "js2_q08",
        "module": "js2_m3",
        "question": "You want to create a setter for the user's first name, allowing you to set both \"_firstName\" and \"_lastName\" when updating the first name. Which line of code should you insert?",
        "code": null,
        "options": [
          "set firstName(name) { this._firstName = name; }",
          "_firstName() { this._firstName = name; }",
          "this._firstName = name;",
          "firstName(name) { this._firstName = name; }"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'set firstName(name) { this._firstName = name; }'."
      },
      {
        "id": "js2_q09",
        "module": "js2_m1",
        "question": "What should you insert into the function so that the created user object contains the name and age properties?",
        "code": null,
        "options": [
          "return { name: name, age: age };",
          "this.name = name; this.age = age;",
          "return { this.name: name, this.age: age };",
          "createUser.name = name; createUser.age = age;"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'return { name: name, age: age };'."
      },
      {
        "id": "js2_q10",
        "module": "js2_m2",
        "question": "Which of the following code snippets correctly demonstrates the creation of an anonymous class for a \"Person\" object with a constructor that initializes the properties \"name\" and \"age\"?",
        "code": null,
        "options": [
          "let Person = class {\n\nconstructor(name, age) {\n\nname = this.name;\n\nage = this.age;\n\n}\n\n}",
          "let Person = class {\n\n constructor(name, age) {\n\n this.name = name;\n\n this.age = age;\n\n }\n\n}",
          "let Person = (name, age) => {\n\nconstructor: {\n\nthis.name = name;\n\nthis.age = age;\n\n}\n\n}",
          "let Person = function(name, age) {\n\nthis.name = name;\n\nthis.age = age;\n\n}"
        ],
        "correct": 1,
        "explanation": "V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: let Person = class {\n\n constructor(name, age) {\n\n this.name = name;\n\n this.age = age;\n\n }\n\n}."
      },
      {
        "id": "js2_q11",
        "module": "js2_m2",
        "question": "Which of the following is the correct way to create a mountain object of this class?",
        "code": null,
        "options": [
          "let mountain = new Mountain('Manaslu', 8156);",
          "let mountain = create Mountain('Manaslu', 8156);",
          "let mountain = Mountain('Manaslu', 8156);",
          "Mountain(let mountain, 'Manaslu', 8156);"
        ],
        "correct": 0,
        "explanation": "V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: let mountain = new Mountain('Manaslu', 8156);."
      },
      {
        "id": "js2_q12",
        "module": "js2_m2",
        "question": "What properties and methods does an instance of the \"Book\" class have when created with the following code?",
        "code": null,
        "options": [
          "Properties: title, author, genre; Methods: setGenre",
          "Properties: title, author; Methods: setGenre, getGenre",
          "Properties: title, author; Methods: setGenre",
          "Properties: title, author, genre; Methods: setGenre, getGenre"
        ],
        "correct": 2,
        "explanation": "V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: Properties: title, author; Methods: setGenre."
      },
      {
        "id": "js2_q13",
        "module": "js2_m2",
        "question": "What should you insert into the \"Cat\" class so that it properly inherits from the \"Animal\" class?",
        "code": null,
        "options": [
          "class Cat extends Animal {}",
          "class Cat inherits Animal {}",
          "class Cat : Animal {}",
          "class Cat inherits from Animal {}"
        ],
        "correct": 0,
        "explanation": "V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: class Cat extends Animal {}."
      },
      {
        "id": "js2_q14",
        "module": "js2_m1",
        "question": "Select the correct call so that the executed code results in the following console output: Mountain",
        "code": null,
        "options": [
          "Mountain.className()",
          "Mountain.className",
          "mountain ['static className ']()",
          "mountain.className()"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'Mountain.className()'."
      },
      {
        "id": "js2_q15",
        "module": "js2_m1",
        "question": "What will the following code output?",
        "code": null,
        "options": [
          "true false",
          "true true",
          "false true",
          "false false"
        ],
        "correct": 1,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'true true'."
      },
      {
        "id": "js2_q16",
        "module": "js2_m1",
        "question": "Select the correct value so that the executed code results in the following console output: '0.01'",
        "code": null,
        "options": [
          "'12e-3′",
          "'-0x01'",
          "1",
          "0.01e-2"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: ''12e-3′'."
      },
      {
        "id": "js2_q17",
        "module": "js2_m1",
        "question": "You have a JavaScript function \"processText\" that takes a string as input and processes it to return an array of words in reverse order. Fill in the missing line of code:",
        "code": null,
        "options": [
          "return str.split(' ').reverse();",
          "return str.join(' ').reverse();",
          "return str.reverse().split(' ');",
          "return str.join(' ').split(' ').reverse();"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'return str.split(' ').reverse();'."
      },
      {
        "id": "js2_q18",
        "module": "js2_m1",
        "question": "The same effect can be achieved by using:",
        "code": null,
        "options": [
          "let currentTime = new Date();",
          "let currentTime = new Date().now();",
          "let currentTime = new Date.now();",
          "There is no other way to achieve this effect."
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let currentTime = new Date();'."
      },
      {
        "id": "js2_q19",
        "module": "js2_m1",
        "question": "What will be the value of result3?",
        "code": null,
        "options": [
          "[2, 4]",
          "[2, 4, 6]",
          "[2, 4, 6, 8]",
          "[]"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: '[2, 4]'."
      },
      {
        "id": "js2_q20",
        "module": "js2_m1",
        "question": "What will appear in the console as a result of code execution?",
        "code": null,
        "options": [
          "let result = points.map(e => e.x + e.y);",
          "let result = points.map(x + y);",
          "let result = points.map(e => {e.x + e.y});",
          "let result = points.map((e,n) => {n = e.x + e.y});"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let result = points.map(e => e.x + e.y);'."
      },
      {
        "id": "js2_q21",
        "module": "js2_m1",
        "question": "Which line of code achieves the following output: red,green,purple,pink,orange?",
        "code": null,
        "options": [
          "colors.splice(2, 0, 'purple', 'pink');",
          "colors.splice(2, 1, 'purple', 'pink');",
          "colors.splice(2, 'purple', 'pink');",
          "colors.splice(2, 0, 1, 'purple', 'pink');"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'colors.splice(2, 0, 'purple', 'pink');'."
      },
      {
        "id": "js2_q22",
        "module": "js2_m1",
        "question": "Considering the following code, what will be the result of accessing fruitColors.get('kiwi')?",
        "code": null,
        "options": [
          "'green'",
          "'purple'",
          "'yellow'",
          "undefined"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: ''green''."
      },
      {
        "id": "js2_q23",
        "module": "js2_m1",
        "question": "Which statement/command should you use to convert the data to an object that will be written to the mountain variable?",
        "code": null,
        "options": [
          "let mountain = JSON.parse(strMountain);",
          "let mountain = JSON.stringify(strMountain);",
          "let mountain = JSON(strMountain);",
          "let mountain = Object(strMountain);"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let mountain = JSON.parse(strMountain);'."
      },
      {
        "id": "js2_q24",
        "module": "js2_m1",
        "question": "What will appear in the console as a result of the code execution?",
        "code": null,
        "options": [
          "2 2 2",
          "3 3 3",
          "2 2 3",
          "3 2 2"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: '2 2 2'."
      },
      {
        "id": "js2_q25",
        "module": "js2_m1",
        "question": "Select the correct alternative form of this declaration:",
        "code": null,
        "options": [
          "let r = /.\\.jpg/;",
          "let r = (.\\.jpg);",
          "let r = \\.\\.jpg\\;",
          "let r = RegExp('.\\.jpg');"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let r = /.\\.jpg/;'."
      },
      {
        "id": "js2_q26",
        "module": "js2_m1",
        "question": "What will be the result of executing this code?",
        "code": null,
        "options": [
          "Two 'Custom Method' messages will appear in the console.",
          "A single message 'Custom Method' will appear in the console (object firstArray does not have the customMethod).",
          "An error will appear when trying to execute firstArray.customMethod() because the method was added after the creation of the array object firstArray.",
          "An error will appear because the customMethod is bound to the Array class and not to the objects created from it (objects firstArray and secondArray do not have the customMethod)."
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'Two 'Custom Method' messages will appear in the console.'."
      },
      {
        "id": "js2_q27",
        "module": "js2_m4",
        "question": "In JavaScript, what is a callback function?",
        "code": null,
        "options": [
          "A special type of function used to declare variables.",
          "A function that performs mathematical operations.",
          "A function that is called after a specific operation or event occurs.",
          "A function that converts data types."
        ],
        "correct": 2,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'A function that is called after a specific operation or event occurs.'."
      },
      {
        "id": "js2_q28",
        "module": "js2_m1",
        "question": "Select the correct missing line to ensure the console displays 'Delayed message' with a delay of 5 seconds:",
        "code": null,
        "options": [
          "setTimeout(printText, 2000, 'Delayed message');",
          "setTimeout(printText.bind(this, 'Delayed message'), 5000);",
          "printText('Delayed message', 5000);",
          "setTimeout(() => printText('Delayed message'), 5000);"
        ],
        "correct": 1,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'setTimeout(printText.bind(this, 'Delayed message'), 5000);'."
      },
      {
        "id": "js2_q29",
        "module": "js2_m1",
        "question": "When using XMLHttpRequest (XHR) in JavaScript to make network requests, what is the purpose of the event listener added with the 'load' event?",
        "code": null,
        "options": [
          "To listen for errors that may occur during the request.",
          "To listen for changes in the ready state of the XHR object.",
          "To listen for successful completion of the XHR request.",
          "To listen for user input events related to the request."
        ],
        "correct": 2,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'To listen for successful completion of the XHR request.'."
      },
      {
        "id": "js2_q30",
        "module": "js2_m1",
        "question": "What declaration should precede the statement so that the text Bob appears in the console as a result of code execution?",
        "code": null,
        "options": [
          "let user = [name: 'Bob'];",
          "let user = {name: 'Bob', age: 30};",
          "let user = [name: 'Bob', age: 30];",
          "var user = {'Bob'};",
          "let user = {name: 'Bob', age: 30};\n\nIt creates an object user with a property name set to 'Bob', and when you log user.name, it will print 'Bob' to the console."
        ],
        "correct": 1,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let user = {name: 'Bob', age: 30};'."
      },
      {
        "id": "js2_q31",
        "module": "js2_m1",
        "question": "An object that will no longer be used:",
        "code": null,
        "options": [
          "will automatically be deleted.",
          "should be deleted using the delete command.",
          "should be deleted by setting undefined to the variable that holds it.",
          "should be deleted by setting null to the variable that holds it.",
          "In JavaScript, objects no longer referenced or accessible by any part of your code become eligible for automatic garbage collection. This means that at its discretion, the JavaScript engine will remove these objects from memory to free up resources. An object no longer used will automatically be deleted in JavaScript"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'will automatically be deleted.'."
      },
      {
        "id": "js2_q32",
        "module": "js2_m1",
        "question": "Select the correct missing line in order for the console to show the following after running the whole code: Dodge Viper, color: red",
        "code": null,
        "options": [
          "car.model = 'Viper'; car.color = 'red';",
          "car.set('model', 'Viper'); car.add('color', 'red');",
          "An empty line – it is not possible to add a new color property to a previously created object.",
          "car = {model: 'Viper', color: 'red'};",
          "To achieve the desired console output of \"Dodge Viper, color: red\" after running the whole code, you should use the following line:\n\ncar.model = 'Viper'; car.color = 'red';\n\nThis line reassigns the car variable with a new object that has both the model and color properties set to the desired values."
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'car.model = 'Viper'; car.color = 'red';'."
      },
      {
        "id": "js2_q33",
        "module": "js2_m1",
        "question": "Which of the following will display the value of the circle's x-coordinate (i.e. 10) in the console?",
        "code": null,
        "options": [
          "console.log(circle.centre.x);",
          "console.log(circle.centre);",
          "console.log(centre.x);",
          "console.log(circle.x);",
          "The correct option to display the value of the circle's x-coordinate (i.e., 10) in the console is:\n\nconsole.log(circle.centre.x);\n\nIt accesses the center property of the circle object and then the x property of the center object to display the x-coordinate"
        ],
        "correct": 0,
        "explanation": "Obvod kruhu se v JS počítá vzorcem 2 * r * Math.PI. Správná odpověď: console.log(circle.centre.x);."
      },
      {
        "id": "js2_q34",
        "module": "js2_m1",
        "question": "Which line of code will display the values of all object properties? The console should show Ian and 44",
        "code": null,
        "options": [
          "Object.keys(user).forEach(key => console.log(key));",
          "for(key in user) console.log(key);",
          "console.log(user[name, age]);",
          "Object.keys(user).forEach(key => console.log(user[key]));",
          "The correct line of code to display the values of all object properties (i.e., \"Ian\" and 44) is:\n\nObject.keys(user).forEach(key => console.log(user[key]));\n\nIt uses Object.keys() to get an array of the object's keys (in this case, 'name' and 'age') and then iterates over them to access the corresponding values and print them to the console."
        ],
        "correct": 3,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'Object.keys(user).forEach(key => console.log(user[key]));'."
      },
      {
        "id": "js2_q35",
        "module": "js2_m1",
        "question": "The default way to call the show method is: point.show(). Select the correct alternative to call this method:",
        "code": null,
        "options": [
          "point[show]()",
          "point.show",
          "point[show]",
          "point['show']();",
          "The correct alternative to call the show method of the point object is:\n\npoint['show']();\n\nThis is an acceptable way to call the method using bracket notation, but it's not the default way. The dot notation point.show() is more commonly used."
        ],
        "correct": 3,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'point['show']();'."
      },
      {
        "id": "js2_q36",
        "module": "js2_m2",
        "question": "A class may have a constructor, i.e. a method:",
        "code": null,
        "options": [
          "of any name that will be defined first in the class.",
          "named this.",
          "of any name preceded by the word constructor.",
          "named constructor.\n\n\n\n\n\nIn JavaScript classes, the constructor is a special method that is automatically called when an instance of the class is created. It must have the name \"constructor\" (case-sensitive) and is used to initialize object properties and perform any setup needed for instances of the class."
        ],
        "correct": 3,
        "explanation": "V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: named constructor.\n\n\n\n\n\nIn JavaScript classes, the constructor is a special method that is automatically called when an instance of the class is created. It must have the name \"constructor\" (case-sensitive) and is used to initialize object properties and perform any setup needed for instances of the class.."
      },
      {
        "id": "js2_q37",
        "module": "js2_m2",
        "question": "You have defined a class Point whose constructor takes two arguments: x and y. Which of the following is the correct way to create a point object of this class?",
        "code": null,
        "options": [
          "let point = Point(100, 200);",
          "let point = create Point(100, 200);",
          "Point(let point, 100, 200);",
          "let point = new Point(100, 200);\n\n\n\n\n\nThe correct way to create a point object of the class Point with a constructor that takes two arguments, x and y, is:\n\nlet point = new Point(100, 200);\n\nThis correctly creates a new instance of the Point class with the x and y values set to 100 and 200, respectively."
        ],
        "correct": 3,
        "explanation": "V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: let point = new Point(100, 200);\n\n\n\n\n\nThe correct way to create a point object of the class Point with a constructor that takes two arguments, x and y, is:\n\nlet point = new Point(100, 200);\n\nThis correctly creates a new instance of the Point class with the x and y values set to 100 and 200, respectively.."
      },
      {
        "id": "js2_q38",
        "module": "js2_m1",
        "question": "Select the correct missing line in order to declare a property named test and initialize it with the value 10:",
        "code": null,
        "options": [
          "test = 10;",
          "test: 10;",
          "test: 10",
          "this.test = 10;\n\n\n\n\n\nThe correct missing line of code to declare a property named test and initialize it with the value 10 in the A class is:\n\ntest = 10;\n\nIt uses the modern class field syntax to declare and initialize the test property with the value 10 directly within the class definition."
        ],
        "correct": 0,
        "explanation": "K vlastnostem objektu, jejichž název obsahuje mezery nebo speciální znaky, přistupujeme pomocí závorkové notace: objekt['vlastnost']. Správná odpověď: test = 10;."
      },
      {
        "id": "js2_q39",
        "module": "js2_m1",
        "question": "Analyze the following code:",
        "code": null,
        "options": [
          "has three properties: x, y and color.",
          "will not be created – setColor references a color property that was not defined in the constructor.",
          "will not be created – the constructor and the setColor method refer to properties that have not been defined in the class body.",
          "has two properties: x and y (only these are defined in the constructor)\n\n\n\n\n\nThe correct answer is:\n\nhas three properties: x, y, and color\n\nThe Point class has a constructor that initializes x and y properties, and a setColor method that sets the color property. When you create a new instance of the Point class using let point = new Point(100, 200);, you're calling the constructor with x and y values, which initializes the x and y properties of the point object. Then, you call the setColor('red') method on the point object, which sets the color property to 'red'."
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'has three properties: x, y and color.'."
      },
      {
        "id": "js2_q40",
        "module": "js2_m1",
        "question": "Which of the following properties will the point object have?",
        "code": null,
        "options": [
          "x y",
          "name",
          "name x y",
          "name x y color\n\n\n\n\n\nThe correct option is:\n\nname x y color\n\nThe name property is defined with a default value of 'Point' at the class level using the class field syntax. This means that all instances of the Point class will have a name property with the value 'Point'. The x and y properties are initialized in the constructor, so they will exist on the point object after you create it with new Point(100, 200);. The color property is set using the setColor method, so it will also exist on the point object after you call point.setColor('red');."
        ],
        "correct": 3,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'name x y color\n\n\n\n\n\nThe correct option is:\n\nname x y color\n\nThe name property is defined with a default value of 'Point' at the class level using the class field syntax. This means that all instances of the Point class will have a name property with the value 'Point'. The x and y properties are initialized in the constructor, so they will exist on the point object after you create it with new Point(100, 200);. The color property is set using the setColor method, so it will also exist on the point object after you call point.setColor('red');.'."
      },
      {
        "id": "js2_q41",
        "module": "js2_m2",
        "question": "Select the correct missing line in order to insert a private property declaration in the code:",
        "code": null,
        "options": [
          "name = 'Bob';",
          "private name = 'Bob'",
          "#name = 'Bob';",
          "this.#name = 'Bob';\n\n\n\n\n\nThe correct missing line of code to insert a private property declaration in the code is:\n\n#name = 'Bob';\n\nIt uses the # symbol to declare a private class field named #name and initializes it with the value 'Bob'."
        ],
        "correct": 2,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: '#name = 'Bob';'."
      },
      {
        "id": "js2_q42",
        "module": "js2_m1",
        "question": "Select the correct command in order for the console to show the following string after running the whole code: Bob Marley",
        "code": null,
        "options": [
          "console.log(user.getfullName);",
          "console.log(user.fullName());",
          "console.log(user.fullName);",
          "console.log(user['get fullName']);\n\n\n\n\n\nThe correct command to use in order for the console to show the following string \"Bob Marley\" after running the whole code is:\n\nconsole.log(user.fullName);\n\nIt accesses the fullName getter method of the user object, which returns the full name as \"Bob Marley\"."
        ],
        "correct": 2,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'console.log(user.fullName);'."
      },
      {
        "id": "js2_q43",
        "module": "js2_m1",
        "question": "There is one line missing in the code below:",
        "code": null,
        "options": [
          "A(val);",
          "this = new A(val);",
          "super(val);",
          "An empty line\n\n\n\n\n\nThe correct missing line of code to make the executed code result in the desired console output \"A: 10 B: 10\" is:\n\nsuper(val);\n\nIt calls the constructor of the superclass A with the val argument, ensuring that the A class constructor is executed before the B class constructor."
        ],
        "correct": 2,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'super(val);'."
      },
      {
        "id": "js2_q44",
        "module": "js2_m2",
        "question": "A static method defined in a class:",
        "code": null,
        "options": [
          "is visible only in the object created from the class, but can only be called by other methods of the object.",
          "is bound to the class only and will not be available in the object created from it.",
          "is visible both in the class and in the object created from it (it can be called in both).",
          "is visible only in the object created from the class and can be called arbitrarily in that object.\n\n\n\n\n\nThe correct answer is:\n\nis bound to the class only and will not be available in the object created from it.\n\nA static method is associated with the class itself, not with instances (objects) created from the class. It is defined on the class and can be called on the class itself, rather than on instances of the class. Static methods are not available on instances of the class. They are not bound to individual objects and cannot access or modify instance-specific data or properties. Static methods are often used for utility functions or operations that are relevant to the class as a whole, rather than to specific instances."
        ],
        "correct": 1,
        "explanation": "V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: is bound to the class only and will not be available in the object created from it.."
      },
      {
        "id": "js2_q45",
        "module": "js2_m1",
        "question": "Select the correct call so that the executed code results in the following console output: Test",
        "code": null,
        "options": [
          "Test.info()",
          "test['static info']()",
          "test.info()",
          "Test.info\n\n\n\n\n\nThe correct call to make the executed code result in the desired console output \"Test\" is:\n\nTest.info()\n\nThis is the correct choice. It calls the static method info() on the Test class, which returns 'Test'."
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'Test.info()'."
      },
      {
        "id": "js2_q46",
        "module": "js2_m1",
        "question": "As a result of its execution:",
        "code": null,
        "options": [
          "false false will be displayed, because B inheriting from A will also be a function.",
          "true true will be displayed, because A will be treated as a constructor during inheritance.",
          "an error will appear because you are trying to inherit in class B from function A and not from another class.",
          "false true will be displayed, because A is not a class.\n\n\n\n\n\nThe correct result of executing the provided code is:\n\ntrue true will be displayed, because A will be treated as a constructor during inheritance.\n\nThe A function in the code acts as a constructor function, and the B class extends A. This inheritance means that B inherits the prototype chain of A. When you create an instance b of class B with new B();, it is also an instance of the A constructor function because of the inheritance relationship. Therefore, b instanceof A evaluates to true because b is an instance of both A and B. Similarly, b instanceof B evaluates to true because b is also an instance of class B."
        ],
        "correct": 1,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'true true will be displayed, because A will be treated as a constructor during inheritance.'."
      },
      {
        "id": "js2_q47",
        "module": "js2_m3",
        "question": "A call to Date.now() will return:",
        "code": null,
        "options": [
          "the number of milliseconds since 00:00:00 on 1 January 1970.",
          "a Date class object containing the current time and date.",
          "the number of milliseconds since 00:00:00 on January 1, 2000.",
          "the number of seconds since 00:00:00 on 1 January 1970."
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'the number of milliseconds since 00:00:00 on 1 January 1970.'."
      },
      {
        "id": "js2_q48",
        "module": "js2_m1",
        "question": "Retrieving the current year can be done by the command:",
        "code": null,
        "options": [
          "let year = (new Date(Date.now())).getFullYear();",
          "let year = (new Date.now()).getFullYear();",
          "let year = Date.now().getFullYear();",
          "let year = Date.getFullYear();"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let year = (new Date(Date.now())).getFullYear();'."
      },
      {
        "id": "js2_q49",
        "module": "js2_m3",
        "question": "A user object can be converted to JSON format using the command:",
        "code": null,
        "options": [
          "JSON.stringify(user);",
          "JSON.parse(user);",
          "JSON(user);",
          "user.toJSON();"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'JSON.stringify(user);'."
      },
      {
        "id": "js2_q50",
        "module": "js2_m1",
        "question": "Select the correct command in order for the data to be converted to an object that will be written to the point variable:",
        "code": null,
        "options": [
          "let point = JSON.parse(strPoint);",
          "let point = JSON.stringify(strPoint);",
          "let point = JSON(strPoint);",
          "let point = Object(strPoint);"
        ],
        "correct": 0,
        "explanation": "V pokročilém JavaScriptu (JSE 2) je správným řešením: 'let point = JSON.parse(strPoint);'."
      }
    ]
  },
  "oracle_dd": {
    "id": "oracle_dd",
    "category": "db",
    "categoryName": "Databázové systémy",
    "title": "Oracle Academy: Database Design",
    "subtitle": "Příprava na certifikační zkoušku Oracle Academy Database Design",
    "badge": "Oracle Database Design",
    "icon": "fas fa-project-diagram",
    "color": "#F80000",
    "passScore": 70,
    "timeLimit": 60,
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
    "examQuestionCount": 50,
    "questions": [
      {
        "id": "dd_q01",
        "module": "dd_m1",
        "question": "An",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q02",
        "module": "dd_m1",
        "question": "If an",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q03",
        "module": "dd_m1",
        "question": "There",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q04",
        "module": "dd_m1",
        "question": "A",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q05",
        "module": "dd_m1",
        "question": "When",
        "code": null,
        "options": [
          "When\nall non-UID attributes are dependent upon the entire UID.",
          "When\nattributes with repeating or multi-values are present.",
          "When\nno attritibutes are mutually independent and all are fully dependent on the\nprimary key.",
          "None\nof the Above."
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'When\nall non-UID attributes are dependent upon the entire UID.'."
      },
      {
        "id": "dd_q06",
        "module": "dd_m1",
        "question": "What",
        "code": null,
        "options": [
          "No\nnon-UID attributes can be dependent on any part of the UID.",
          "Some\nnon-UID attributes can be dependent on the entire UID.",
          "All\nnon-UID attributes must be dependent upon the entire UID.",
          "None\nof the above"
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'All\nnon-UID attributes must be dependent upon the entire UID.'."
      },
      {
        "id": "dd_q07",
        "module": "dd_m2",
        "question": "Examine\nENTITY: RECEIPT\nATTRIBUTES:\n#CUSTOMER ID\n#STORE ID\nSTORE LOCATION\nDATE",
        "code": null,
        "options": [
          "Do\nnothing, it is already in 2nd Normal Form.",
          "Delete\nthe attribute STORE ID",
          "Move\nthe attribute STORE LOCATION to a new entity, STORE, with a UID of STORE ID,\nand create a relationship to the original entity.",
          "Move\nthe attribute STORE LOCATION to a new entity, STORE, with a UID of STORE\nLOCATION, and create a relationship to the original entity."
        ],
        "correct": 2,
        "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: Move\nthe attribute STORE LOCATION to a new entity, STORE, with a UID of STORE ID,\nand create a relationship to the original entity.."
      },
      {
        "id": "dd_q08",
        "module": "dd_m2",
        "question": "Examine\nENTITY: CLIENT\nATTRIBUTES:\n# CLIENT ID\nFIRST NAME\nLAST NAME\nORDER ID\nSTREET\nZIP CODE",
        "code": null,
        "options": [
          "1st\nNormal Form.",
          "2nd\nNormal Form.",
          "3rd\nNormal Form.",
          "None\nof the above, the entity is fully normalised."
        ],
        "correct": 0,
        "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: 1st\nNormal Form.."
      },
      {
        "id": "dd_q09",
        "module": "dd_m1",
        "question": "As a database designer, you do not need",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q10",
        "module": "dd_m2",
        "question": "Examine the following Entity and decide\nENTITY: CLIENT\nATTRIBUTES:\n# CLIENT ID\nFIRST NAME\nLAST NAME\nSTREET\nCITY\nZIP CODE",
        "code": null,
        "options": [
          "1st\nNormal Form.",
          "2nd\nNormal Form.",
          "3rd\nNormal Form.",
          "None\nof the above, the entity is fully normalised."
        ],
        "correct": 3,
        "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: None\nof the above, the entity is fully normalised.."
      },
      {
        "id": "dd_q11",
        "module": "dd_m1",
        "question": "When data is stored in more than one",
        "code": null,
        "options": [
          "Normalcy",
          "Replication",
          "Normalization",
          "Decency"
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Normalization'."
      },
      {
        "id": "dd_q12",
        "module": "dd_m2",
        "question": "If an entity has a multi-valued",
        "code": null,
        "options": [
          "Make\nthe attribute optional",
          "Do\nnothing, an entity does not have to be in 1st Normal Form",
          "Create\nan additional entity and relate it to the original entity with a 1:M\nrelationship.",
          "Create\nan additional entity and relate it to the original entity with a M:M\nrelationship."
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Create\nan additional entity and relate it to the original entity with a 1:M\nrelationship.'."
      },
      {
        "id": "dd_q13",
        "module": "dd_m2",
        "question": "An entity ORDER has the attributes Order",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q14",
        "module": "dd_m2",
        "question": "An entity can have repeated values and",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q15",
        "module": "dd_m2",
        "question": "Cascading UIDs are a feature often found",
        "code": null,
        "options": [
          "Invalid\nRelationship",
          "General\nRelationship",
          "Heirarchical\nRelationship",
          "Recursive\nRelationship"
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Heirarchical\nRelationship'."
      },
      {
        "id": "dd_q16",
        "module": "dd_m2",
        "question": "A relationship between an entity and",
        "code": null,
        "options": [
          "General\nRelationship",
          "Recursive\nRelationship",
          "Heirarchical\nRelationship",
          "Invalid\nRelationship"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Recursive\nRelationship'."
      },
      {
        "id": "dd_q17",
        "module": "dd_m2",
        "question": "A single relationship can be both",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q18",
        "module": "dd_m3",
        "question": "A Hierarchical relationship is a series",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q19",
        "module": "dd_m1",
        "question": "A particular problem may be solved using",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q20",
        "module": "dd_m1",
        "question": "Which of the following would best be",
        "code": null,
        "options": [
          "STUDENT\n(Grade A student, Average Student)",
          "PARENT\n(Girl, Bob)",
          "TEACHER\n(Female, Bob)",
          "DELIVERY\nADDRESS (Home, Office)"
        ],
        "correct": 3,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'DELIVERY\nADDRESS (Home, Office)'."
      },
      {
        "id": "dd_q21",
        "module": "dd_m3",
        "question": "Arcs are used to visually represent",
        "code": null,
        "options": [
          "Sameness",
          "Differences",
          "Exclusivity",
          "Inheritance"
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Exclusivity'."
      },
      {
        "id": "dd_q22",
        "module": "dd_m3",
        "question": "An arc can often be modeled as Supertype",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Subtypy v Oracle ERD dědí všechny atributy a vztahy svého supertypu a musí splňovat pravidlo vzájemného vyloučení a úplnosti. Správná odpověď: True."
      },
      {
        "id": "dd_q23",
        "module": "dd_m1",
        "question": "Which of the following would be a",
        "code": null,
        "options": [
          "Daily\ntraffic patterns must be monitored to determine which countries are\novercrowded.",
          "People\nhave births and deaths in their countries that must be tracked by the system.",
          "If\nyou are doing a system for France or Germany, you would need security\nclearance.",
          "Countries\nmay change their names and/or borders over a period of time."
        ],
        "correct": 3,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Countries\nmay change their names and/or borders over a period of time.'."
      },
      {
        "id": "dd_q24",
        "module": "dd_m1",
        "question": "All systems must include functionality",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q25",
        "module": "dd_m1",
        "question": "When a system requires that old values",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q26",
        "module": "dd_m1",
        "question": "There is no point in trying to group",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q27",
        "module": "dd_m2",
        "question": "Formal rules exist for drawing ERD's.",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q28",
        "module": "dd_m1",
        "question": "Which of the following scenarios should",
        "code": null,
        "options": [
          "LIBRARY\nand NUMBER OF BOOKS",
          "STUDENT\nand GRADE",
          "STUDENT\nand AGE",
          "LIBRARY\nand BOOK"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'STUDENT\nand GRADE'."
      },
      {
        "id": "dd_q29",
        "module": "dd_m1",
        "question": "Historical data must never be kept. True",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q30",
        "module": "dd_m5",
        "question": "The explanation below is an example of\nA primary key must be unique, and no part of the primary\nkey can be null. Mark for\nReview",
        "code": null,
        "options": [
          "Referential\nintegrity Column\nintegrity",
          "Entity\nintegrity",
          "User-defined\nintegrity"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Entity\nintegrity'."
      },
      {
        "id": "dd_q31",
        "module": "dd_m5",
        "question": "Foreign keys cannot be null when",
        "code": null,
        "options": [
          "It\nrefers to the same table",
          "It\nis part of a primary key",
          "It\nrefers to another table",
          "It\ncontains three or more columns"
        ],
        "correct": 1,
        "explanation": "Při transformaci na fyzický model se entity převádějí na tabulky, atributy na sloupce a vztahy 1:M se implementují pomocí cizího klíče (FK) na straně M. Správná odpověď: It\nis part of a primary key."
      },
      {
        "id": "dd_q32",
        "module": "dd_m1",
        "question": "The explanation below is an example of",
        "code": null,
        "options": [
          "User-defined\nintegrity",
          "Entity\nintegrity Column\nintegrity",
          "Referential\nintegrity"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'User-defined\nintegrity'."
      },
      {
        "id": "dd_q33",
        "module": "dd_m5",
        "question": "A foreign key cannot refer to a primary",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Při transformaci na fyzický model se entity převádějí na tabulky, atributy na sloupce a vztahy 1:M se implementují pomocí cizího klíče (FK) na straně M. Správná odpověď: False."
      },
      {
        "id": "dd_q34",
        "module": "dd_m5",
        "question": "Column integrity refers to",
        "code": null,
        "options": [
          "Columns\nalways containing text data less than 255 characters",
          "Columns\nalways containing values consistent with the defined data format",
          "Columns\nalways having values",
          "Columns\nalways containing positive numbers"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Columns\nalways containing values consistent with the defined data format'."
      },
      {
        "id": "dd_q35",
        "module": "dd_m3",
        "question": "When an Arc is transformed to the",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q36",
        "module": "dd_m2",
        "question": "One-to-Many Optional to Mandatory",
        "code": null,
        "options": [
          "Unique\nKey",
          "Optional\nForeign Key",
          "Mandatory\nForeign Key",
          "Primary\nKey"
        ],
        "correct": 1,
        "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: Optional\nForeign Key."
      },
      {
        "id": "dd_q37",
        "module": "dd_m3",
        "question": "A barrred Relationship will result in a",
        "code": null,
        "options": [
          "The\nColumn Name",
          "The\nCheck Constraint",
          "The\nTable Name",
          "The\nPrimary Key"
        ],
        "correct": 3,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'The\nPrimary Key'."
      },
      {
        "id": "dd_q38",
        "module": "dd_m2",
        "question": "Relationships on an ERD can only be",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q39",
        "module": "dd_m2",
        "question": "One-to-One relationships are transformed",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'False'."
      },
      {
        "id": "dd_q40",
        "module": "dd_m3",
        "question": "The \"Arc Implementation\" is a",
        "code": null,
        "options": [
          "Cascade\nImplementation",
          "Supertype\nImplementation",
          "Subtype\nImplementation",
          "Supertype\nand Subtype Implementation"
        ],
        "correct": 3,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Supertype\nand Subtype Implementation'."
      },
      {
        "id": "dd_q41",
        "module": "dd_m3",
        "question": "When mapping supertypes, relationships",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Subtypy v Oracle ERD dědí všechny atributy a vztahy svého supertypu a musí splňovat pravidlo vzájemného vyloučení a úplnosti. Správná odpověď: True."
      },
      {
        "id": "dd_q42",
        "module": "dd_m1",
        "question": "The transformation from an ER diagram to",
        "code": null,
        "options": [
          "Columns",
          "Tables",
          "Foreign\nKeys",
          "Unique\nKeys"
        ],
        "correct": 1,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Tables'."
      },
      {
        "id": "dd_q43",
        "module": "dd_m1",
        "question": "The conceptual model is transformed into",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q44",
        "module": "dd_m5",
        "question": "In an Oracle database, why would 1_TABLE",
        "code": null,
        "options": [
          "There\nis no problem here. You can create a table called 1_TABLE.",
          "Object\nnames must not start with a number. They must begin with a letter.",
          "TABLE\nis a reserved word.",
          "The\ndatabase does not understand all capital letters."
        ],
        "correct": 1,
        "explanation": "Při transformaci na fyzický model se entity převádějí na tabulky, atributy na sloupce a vztahy 1:M se implementují pomocí cizího klíče (FK) na straně M. Správná odpověď: Object\nnames must not start with a number. They must begin with a letter.."
      },
      {
        "id": "dd_q45",
        "module": "dd_m1",
        "question": "In an Oracle database, why would the",
        "code": null,
        "options": [
          "JOBS\nis a reserved word",
          "The\ndatabase does not understand all capital letters",
          "You\ncannot have spaces between words in a table name",
          "EMPLOYEE\nis a reserved word"
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'You\ncannot have spaces between words in a table name'."
      },
      {
        "id": "dd_q46",
        "module": "dd_m1",
        "question": "In which phases of the System",
        "code": null,
        "options": [
          "Build\nand Document",
          "Analysis",
          "Transition",
          "Strategy"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Build\nand Document'."
      },
      {
        "id": "dd_q47",
        "module": "dd_m1",
        "question": "During which phases of the System",
        "code": null,
        "options": [
          "Build\nand Transition",
          "Design\nand Production",
          "Strategy\nand Analysis",
          "Transition\nand Production"
        ],
        "correct": 3,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Transition\nand Production'."
      },
      {
        "id": "dd_q48",
        "module": "dd_m2",
        "question": "Examine the following Entity and\nENTITY:\nCLIENT\nATTRIBUTES:\n# CLIENT ID\nFIRST NAME\nLAST NAME\nSTREET\nCITY\nZIP CODE",
        "code": null,
        "options": [
          "1st Normal Form.",
          "2nd Normal Form.",
          "3rd Normal Form.",
          "None of the above, the entity is\nfully normalised."
        ],
        "correct": 3,
        "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: None of the above, the entity is\nfully normalised.."
      },
      {
        "id": "dd_q49",
        "module": "dd_m4",
        "question": "A transitive dependency exists",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q50",
        "module": "dd_m2",
        "question": "When any attribute in an entity is",
        "code": null,
        "options": [
          "Functional dependency",
          "Dependency",
          "Transitive dependency",
          "Non-dependency"
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Transitive dependency'."
      },
      {
        "id": "dd_q51",
        "module": "dd_m4",
        "question": "The Rule of 3rd Normal Form states",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Třetí normální forma (3NF) vyžaduje 2NF a odstranění tranzitivních závislostí – neklíčové atributy nesmí záviset na jiných neklíčových atributech. Správná odpověď: True."
      },
      {
        "id": "dd_q52",
        "module": "dd_m2",
        "question": "Normalizing an Entity to 1st",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q53",
        "module": "dd_m2",
        "question": "When all attributes are",
        "code": null,
        "options": [
          "2nd Normal Form",
          "4th Normal Form",
          "1st Normal Form",
          "3rd Normal Form"
        ],
        "correct": 2,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: '1st Normal Form'."
      },
      {
        "id": "dd_q54",
        "module": "dd_m1",
        "question": "When data is only stored in one",
        "code": null,
        "options": [
          "Reduction",
          "Normality",
          "Multiplication",
          "Normalization"
        ],
        "correct": 3,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Normalization'."
      },
      {
        "id": "dd_q55",
        "module": "dd_m2",
        "question": "There is no limit to how many columns can make up an entity's UID. True or",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q56",
        "module": "dd_m1",
        "question": "If",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q57",
        "module": "dd_m1",
        "question": "To",
        "code": null,
        "options": [
          "Move the attribute that violates 2nd\nNormal Form to a new entity with a relationship to the original entity.",
          "Move the attribute that violates 2nd\nNormal Form to a new ERD.",
          "Do nothing, an entity does not need\nto be in 2nd Normal Form.",
          "Delete the attribute that was\ncausing the violation."
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Move the attribute that violates 2nd\nNormal Form to a new entity with a relationship to the original entity.'."
      },
      {
        "id": "dd_q58",
        "module": "dd_m1",
        "question": "Any",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q59",
        "module": "dd_m1",
        "question": "Which of the following would be",
        "code": null,
        "options": [
          "Social Security Number",
          "Last Name",
          "Employee ID",
          "Address"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'Social Security Number'."
      },
      {
        "id": "dd_q60",
        "module": "dd_m1",
        "question": "There is no limit to how many",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q61",
        "module": "dd_m2",
        "question": "A unique identifier can only be",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "V datovém modelování Oracle Academy má každá entita právě jedno primární UID (i když může být složené z více atributů). Pokud vhodný kandidát neexistuje, vytvoří se umělý identifikátor. Správná odpověď: False."
      },
      {
        "id": "dd_q62",
        "module": "dd_m2",
        "question": "If an entity has no attribute",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      },
      {
        "id": "dd_q63",
        "module": "dd_m2",
        "question": "Examine the following Entity and\nENTITY:\nCLIENT\nATTRIBUTES:\n# CLIENT ID\nFIRST NAME\nLAST NAME\nORDER ID\nSTREET\nZIP CODE",
        "code": null,
        "options": [
          "1st Normal Form.",
          "2nd Normal Form.",
          "3rd Normal Form.",
          "None of the above, the entity is\nfully normalised."
        ],
        "correct": 0,
        "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: 1st Normal Form.."
      },
      {
        "id": "dd_q64",
        "module": "dd_m2",
        "question": "Examine the following Entity and\nENTITY:\nCLIENT ORDER\nATTRIBUTES:\n# CLIENT ID\n# ORDER ID\nFIRST NAME\nLAST NAME\nCITY\nZIP CODE",
        "code": "ORDER DATE",
        "options": [
          "1st Normal Form.",
          "2nd Normal Form.",
          "3rd Normal Form.",
          "None of the above, the entity is\nfully normalised."
        ],
        "correct": 1,
        "explanation": "V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: 2nd Normal Form.."
      },
      {
        "id": "dd_q65",
        "module": "dd_m1",
        "question": "Any\nMark\nfor Review",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle standardů kurzu Oracle Academy Database Design je správným řešením: 'True'."
      }
    ]
  },
  "oracle_sql": {
    "id": "oracle_sql",
    "category": "db",
    "categoryName": "Databázové systémy",
    "title": "Oracle Academy: Database Programming with SQL",
    "subtitle": "Příprava na certifikační zkoušku Oracle Academy Database Programming with SQL",
    "badge": "Oracle SQL Programming",
    "icon": "fas fa-database",
    "color": "#C74634",
    "passScore": 70,
    "timeLimit": 60,
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
    "examQuestionCount": 50,
    "questions": [
      {
        "id": "sql_q01",
        "module": "sql_m2",
        "question": "In a",
        "code": null,
        "options": [
          "All;\nFirst",
          "First;\nSecond",
          "All;\nSecond",
          "Null;\nDefault"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'All;\nFirst'."
      },
      {
        "id": "sql_q02",
        "module": "sql_m1",
        "question": "A",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q03",
        "module": "sql_m1",
        "question": "You",
        "code": null,
        "options": [
          "INSERT\nwith a WHERE clause",
          "DELETE\nwith a WHERE clause",
          "UPDATE\nwith a WHERE clause",
          "MERGE\nwith a WHERE clause"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'DELETE\nwith a WHERE clause'."
      },
      {
        "id": "sql_q04",
        "module": "sql_m4",
        "question": "DELETE",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Příkaz DELETE je DML operace odstraňující řádky splňující podmínku WHERE. Změnu lze potvrdit (COMMIT) nebo vrátit (ROLLBACK). Správná odpověď: True."
      },
      {
        "id": "sql_q05",
        "module": "sql_m1",
        "question": "Which",
        "code": null,
        "options": [
          "DELETE",
          "SELECT",
          "UPDATE",
          "MERGE"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'UPDATE'."
      },
      {
        "id": "sql_q06",
        "module": "sql_m2",
        "question": "Evaluate\nThe EMPLOYEE_ID column currently contains 500 employee\nidentification numbers. Business requirements have changed and you need to\nallow users to include text characters in the identification values. Which\nstatement should you use to change this column's data type?",
        "code": "EMPLOYEE_ID NUMBER(9)\nLAST_NAME VARCHAR2(25)\nFIRST_NAME VARCHAR2(25)\nDEPARTMENT_ID NUMBER(9)\nMANAGER_ID NUMBER(9)\nSALARY NUMBER(7,2)",
        "options": [
          "You\nCANNOT modify the data type of the EMPLOYEE_ID column, as the table is not\nempty.",
          "ALTER\nemployee TABLE MODIFY COLUMN (employee_id VARCHAR2(15));",
          "ALTER\nTABLE employee MODIFY (employee_id VARCHAR2(9));",
          "ALTER\nTABLE employee REPLACE (employee_id VARCHAR2(9));"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'You\nCANNOT modify the data type of the EMPLOYEE_ID column, as the table is not\nempty.'."
      },
      {
        "id": "sql_q07",
        "module": "sql_m5",
        "question": "You\nALTER TABLE products SET UNUSED COLUMN color;\nWhat will be the result of issuing this command?",
        "code": null,
        "options": [
          "The\ncolumn named COLOR in the table named PRODUCTS will be created.",
          "The\ncolumn named COLOR in the table named PRODUCTS will not be returned in\nsubsequent reads of the table by Oracle, as it has been deleted logically.",
          "The\ncolumn named COLOR in the table named PRODUCTS will be assigned default values.",
          "The\ncolumn named COLOR in the table named PRODUCTS will be deleted."
        ],
        "correct": 1,
        "explanation": "ALTER TABLE ... SET UNUSED COLUMN slouží k okamžitému logickému zneplatnění sloupce, čímž se vyhne nákladnému fyzickému přepisu tabulky v produkčním provozu. Správná odpověď: The\ncolumn named COLOR in the table named PRODUCTS will not be returned in\nsubsequent reads of the table by Oracle, as it has been deleted logically.."
      },
      {
        "id": "sql_q08",
        "module": "sql_m1",
        "question": "The",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q09",
        "module": "sql_m1",
        "question": "Evaluate",
        "code": null,
        "options": [
          "You\ncan produce the same results by issuing the 'DROP TABLE employee' statement.",
          "You\ncan issue this statement to retain the structure of the employees table.",
          "You\ncan produce the same results by issuing the 'DELETE employees' statement.",
          "You\ncan reverse this statement by issuing the ROLLBACK statement."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'You\ncan issue this statement to retain the structure of the employees table.'."
      },
      {
        "id": "sql_q10",
        "module": "sql_m2",
        "question": "The\nNUMBER(6,4)\nHow many digits to the right of the decimal point are\nallowed for the ELEMENTS column?",
        "code": null,
        "options": [
          "Two",
          "Zero",
          "Four",
          "Six"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'Four'."
      },
      {
        "id": "sql_q11",
        "module": "sql_m1",
        "question": "I have",
        "code": null,
        "options": [
          "impossible;\nno matter what, there can never be two tables with the same name, even if they\nare in separate schemas.",
          "impossible;\nSchool_Friends is a reserved term in SQL.",
          "possible;\nmy schema is separate from yours, and it is okay for us to have like-named\ntables in our separate schemas.",
          "possible;\nour data will merge into one table, and we can more easily access our mutual\nfriends information."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'possible;\nmy schema is separate from yours, and it is okay for us to have like-named\ntables in our separate schemas.'."
      },
      {
        "id": "sql_q12",
        "module": "sql_m1",
        "question": "A table",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q13",
        "module": "sql_m5",
        "question": "You\nALTER TABLE employees\nENABLE employee_id_pk;\nWhich statement is true?",
        "code": null,
        "options": [
          "The\nstatement will NOT execute because it contains a syntax error.",
          "The\nstatement will execute, but will not verify that the existing values are\nunique.",
          "The\nstatement will achieve the desired result.",
          "The\nstatement will execute, but will ensure that the new ID values are unique."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'The\nstatement will NOT execute because it contains a syntax error.'."
      },
      {
        "id": "sql_q14",
        "module": "sql_m1",
        "question": "What is",
        "code": null,
        "options": [
          "To\nprovide restricted data access",
          "To\nprovide data dependence",
          "To\nbe able to store the same data in more than one place"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'To\nprovide restricted data access'."
      },
      {
        "id": "sql_q15",
        "module": "sql_m1",
        "question": "A Top-N",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q16",
        "module": "sql_m1",
        "question": "If a",
        "code": null,
        "options": [
          "WITH\nCHECK OPTION",
          "FORCE",
          "WITH\nREAD ONLY",
          "WITH\nCONSTRAINT CHECK"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'WITH\nCHECK OPTION'."
      },
      {
        "id": "sql_q17",
        "module": "sql_m1",
        "question": "When",
        "code": null,
        "options": [
          "MINVALUE",
          "CYCLE",
          "NOMAXVALUE",
          "MAXVALUE"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'MINVALUE'."
      },
      {
        "id": "sql_q18",
        "module": "sql_m1",
        "question": "What",
        "code": null,
        "options": [
          "UNIQUE\nINDEX",
          "NONUNIQUE\nINDEX",
          "INDEX",
          "Oracle\ncannot create indexes automatically."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'UNIQUE\nINDEX'."
      },
      {
        "id": "sql_q19",
        "module": "sql_m5",
        "question": "Indexes",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q20",
        "module": "sql_m1",
        "question": "System",
        "code": null,
        "options": [
          "A\ncollection of objects, such as tables, views, and sequences.",
          "Required\nto manipulate the content of objects in the database.",
          "Required\nto gain access to the database.",
          "Named\ngroups of related privileges given to a user."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'Required\nto gain access to the database.'."
      },
      {
        "id": "sql_q21",
        "module": "sql_m2",
        "question": "Evaluate\nWhich statement about the result of executing this\nstatement is true?",
        "code": "ALTER USER bob IDENTIFIED BY jim;",
        "options": [
          "A\nnew user JIM is created from user BOB's profile.",
          "The\nuser BOB is assigned the same privileges as user JIM.",
          "The\nuser BOB is renamed and is accessible as user JIM.",
          "A\nnew password is assigned to user BOB."
        ],
        "correct": 3,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'A\nnew password is assigned to user BOB.'."
      },
      {
        "id": "sql_q22",
        "module": "sql_m1",
        "question": "Regular",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q23",
        "module": "sql_m1",
        "question": "A role",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q24",
        "module": "sql_m2",
        "question": "Scott\nGRANT select ON employees TO PUBLIC;\nAllison Plumb has been granted CREATE SESSION by the DBA.\nShe logs into the database and issues the following statement:\nGRANT ﾠselect ON ﾠscott_king.employees\nTO jennifer_cho;\nTrue or False: Allison's statement will fail.",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q25",
        "module": "sql_m1",
        "question": "If Oracle",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q26",
        "module": "sql_m2",
        "question": "In the",
        "code": null,
        "options": [
          "Multiplications\nand Divisions are at the same level and would be evaluated first based on left\nto right order",
          "Subtractions\nand Additions are at the same level and would be evaluated first based on left\nto right order",
          "Divisions\nand Subtractions are at the same level and would be evaluated first based on\nleft to right order",
          "Additions\nand Multiplications are at the same level and would be evaluated first based on\nleft to right order"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'Multiplications\nand Divisions are at the same level and would be evaluated first based on left\nto right order'."
      },
      {
        "id": "sql_q27",
        "module": "sql_m1",
        "question": "There",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q28",
        "module": "sql_m1",
        "question": "Databases",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q29",
        "module": "sql_m2",
        "question": "When using",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q30",
        "module": "sql_m2",
        "question": "What\nSELECT employee_id\nFROM employees\nWHERE employee_id BETWEEN 100 AND 150\nOR employee_id\nIN(119, 175, 205)\nAND (employee_id\nBETWEEN 150 AND 200);",
        "code": null,
        "options": [
          "200,\n201, 202, 203, 204, 205, 206",
          "100,\n101, 102, 103, 104, 107, 124, 141, 142, 143, 144, 149",
          "19",
          "No\nrows will be returned"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: '100,\n101, 102, 103, 104, 107, 124, 141, 142, 143, 144, 149'."
      },
      {
        "id": "sql_q31",
        "module": "sql_m3",
        "question": "Will\nSELECT MAX(salary), MIN(Salary), AVG(SALARY)\nFROM employees;",
        "code": null,
        "options": [
          "Yes,\nit will return the highest salary from each employee.",
          "Yes,\nit will return the average salary from the employees table.",
          "Yes,\nit will return the highest salary, the lowest salary, and the average salary\nfrom all employees.",
          "No,\nit is illegal. You cannot use more than one multi-row function in a SELECT\nstatement."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'Yes,\nit will return the highest salary, the lowest salary, and the average salary\nfrom all employees.'."
      },
      {
        "id": "sql_q32",
        "module": "sql_m2",
        "question": "ROUND",
        "code": null,
        "options": [
          "Dates\nand numbers",
          "Dates\nand characters",
          "Numbers\nand characters",
          "None\nof the above"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'Dates\nand numbers'."
      },
      {
        "id": "sql_q33",
        "module": "sql_m2",
        "question": "You\nSELECT LOWER(SUBSTR(CONCAT(last_name, first_name)), 1, 5)\n\"ID\"\nFROM employee;\nIn which order are the functions evaluated?",
        "code": null,
        "options": [
          "LOWER,\nCONCAT, SUBSTR",
          "CONCAT,\nSUBSTR, LOWER",
          "LOWER,\nSUBSTR, CONCAT",
          "SUBSTR,\nCONCAT, LOWER"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'CONCAT,\nSUBSTR, LOWER'."
      },
      {
        "id": "sql_q34",
        "module": "sql_m1",
        "question": "CASE",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q35",
        "module": "sql_m1",
        "question": "If you",
        "code": null,
        "options": [
          "1917",
          "1901",
          "2017",
          "2001"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: '2017'."
      },
      {
        "id": "sql_q36",
        "module": "sql_m1",
        "question": "Hierarchical",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q37",
        "module": "sql_m3",
        "question": "The\nSELECT car.vehicle_id, driver.name\nFROM car\nLEFT OUTER JOIN driver ON (driver_id) ;",
        "code": null,
        "options": [
          "Equijoin",
          "Outer\nJoin",
          "Inner\nJoin",
          "Optimal\nJoin"
        ],
        "correct": 1,
        "explanation": "V Oracle SQL spojujeme tabulky pomocí ANSI syntaxe (INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN) na základě spojovací podmínky ON nebo USING. Správná odpověď: Outer\nJoin."
      },
      {
        "id": "sql_q38",
        "module": "sql_m2",
        "question": "Will\nSELECT department_name, last_name\nFROM employees, departments\nWHERE department_id = department_id;",
        "code": null,
        "options": [
          "No,\nOracle will not allow joins in the WHERE clause",
          "Yes,\nOracle will resolve which department_id colum comes from which table.",
          "No,\nOracle will return a Column Ambiguously Defined error.",
          "Yes,\nthere are no syntax errors in that statement"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'No,\nOracle will return a Column Ambiguously Defined error.'."
      },
      {
        "id": "sql_q39",
        "module": "sql_m3",
        "question": "Evaluate\nt.team_name\nFROM player p\nLEFT OUTER JOIN player m ON (p.manager_id = m.player_id)\nLEFT OUTER JOIN team t ON (p.team_id = t.team_id);\nWhich join is evaluated first?",
        "code": "SELECT p.player_id, m.last_name, m.first_name,",
        "options": [
          "The\njoin between the player table and the team table on TEAM_ID",
          "The\njoin between the player table and the team table on MANAGER_ID",
          "The\njoin between the player table and the team table on PLAYER_ID",
          "The\nself-join of the player table"
        ],
        "correct": 3,
        "explanation": "V Oracle SQL spojujeme tabulky pomocí ANSI syntaxe (INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN) na základě spojovací podmínky ON nebo USING. Správná odpověď: The\nself-join of the player table."
      },
      {
        "id": "sql_q40",
        "module": "sql_m1",
        "question": "Evaluate\nFROM products;\nWhich statement is true?",
        "code": "SELECT COUNT(*)",
        "options": [
          "The\nnumber of unique PRODUCT_IDs in the table is displayed.",
          "An\nerror occurs due to an error in the SELECT clause.",
          "The\nnumber of rows in the table is displayed.",
          "An\nerror occurs because no WHERE clause is included in the SELECT statement."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'The\nnumber of rows in the table is displayed.'."
      },
      {
        "id": "sql_q41",
        "module": "sql_m1",
        "question": "The\nVENDOR_ID NUMBER Primary Key\nNAME VARCHAR2(30)\nLOCATION_ID NUMBER\nORDER_DT DATE\nORDER_AMOUNT NUMBER(8,2)\nWhich two clauses represent valid uses of aggregate\nfunctions for this table?",
        "code": null,
        "options": [
          "SELECT\nSUM(order_dt)",
          "SELECT\nMIN(AVG(order_amount)) WHERE\nMAX(order_dt) = order_dt",
          "FROM\nMAX(order_dt)",
          "SELECT\nSUM(order_amount)"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'SELECT\nMIN(AVG(order_amount)) WHERE\nMAX(order_dt) = order_dt'."
      },
      {
        "id": "sql_q42",
        "module": "sql_m3",
        "question": "Examine\nSELECT department_id, manager_id, job_id, SUM(salary)\nFROM employees\nGROUP BY GROUPING SETS(.......);\nSelect the correct GROUP BY GROUPING SETS clause from the\nfollowing list:",
        "code": null,
        "options": [
          "GROUP\nBY GROUPING SETS (department_id, salary), (department_id, job_id),\n(department_id, manager_id)",
          "GROUP\nBY GROUPING SETS ((department_id, manager_id), (department_id, SUM(salary),\n(manager_id, job_id))",
          "GROUP\nBY GROUPING SETS (department_id, AVG(salary)), (department_id, job_id),\n(department_id, manager_id)",
          "GROUP\nBY GROUPING SETS ((department_id, manager_id), (department_id, job_id),\n(manager_id, job_id))"
        ],
        "correct": 3,
        "explanation": "Klauzule GROUP BY sdružuje řádky do skupin pro agregační funkce (COUNT, SUM, AVG...), zatímco HAVING tyto agregované skupiny filtruje. Správná odpověď: GROUP\nBY GROUPING SETS ((department_id, manager_id), (department_id, job_id),\n(manager_id, job_id))."
      },
      {
        "id": "sql_q43",
        "module": "sql_m1",
        "question": "CUBE",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q44",
        "module": "sql_m1",
        "question": "Group functions",
        "code": null,
        "options": [
          "Group\nfunctions cannot be nested.",
          "Two",
          "Three",
          "Four"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'Two'."
      },
      {
        "id": "sql_q45",
        "module": "sql_m3",
        "question": "Evaluate\nFROM employees\nGROUP BY department_id;\nWhich values are displayed?",
        "code": "SELECT MIN(hire_date), department_id",
        "options": [
          "The\nlatest hire date in the EMPLOYEES table",
          "The\nearliest hire date in the EMPLOYEES table",
          "The\nearliest hire date in each department",
          "The\nhire dates in the EMPLOYEES table that contain NULL values"
        ],
        "correct": 2,
        "explanation": "Klauzule GROUP BY sdružuje řádky do skupin pro agregační funkce (COUNT, SUM, AVG...), zatímco HAVING tyto agregované skupiny filtruje. Správná odpověď: The\nearliest hire date in each department."
      },
      {
        "id": "sql_q46",
        "module": "sql_m1",
        "question": "Which statement",
        "code": null,
        "options": [
          "The\nANY operator can be used with the DISTINCT keyword.",
          "The\nANY operator can be used with the LIKE and IN operators.",
          "The\nANY operator is a synonym for the ALL operator.",
          "The\nANY operator compares every value returned by the subquery."
        ],
        "correct": 3,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'The\nANY operator compares every value returned by the subquery.'."
      },
      {
        "id": "sql_q47",
        "module": "sql_m2",
        "question": "Evaluate\nFROM players\nWHERE team_id IN\n(SELECT team_id\nFROM teams\nWHERE team_id\n> 300 AND salary_cap > 400000);\nWhat would happen if the inner query returned a NULL\nvalue?",
        "code": "SELECT player_id, name",
        "options": [
          "No\nrows would be returned by the outer query.",
          "A\nsyntax error in the inner query would be returned.",
          "A\nsyntax error in the outer query would be returned.",
          "All\nthe rows in the PLAYER table would be returned by the outer query."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'No\nrows would be returned by the outer query.'."
      },
      {
        "id": "sql_q48",
        "module": "sql_m1",
        "question": "Table",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q49",
        "module": "sql_m4",
        "question": "Steven King's row in the EMPLOYEES table\nUPDATE\nemployees\nSET\nsalary = salary * 2\nWHERE\nemployee_id = 100;\nCOMMIT;\nUPDATE\nemployees\nSET\nsalary = 30000\nWHERE\nemployee_id = 100;\nThe\nuser's database session now ends abnormally. What is now King's salary in the\ntable?",
        "code": null,
        "options": [
          "78000",
          "30000",
          "24000",
          "48000"
        ],
        "correct": 3,
        "explanation": "Příkaz UPDATE slouží ke změně existujících dat ve sloupcích. Spolu s MERGE je to základní nástroj úpravy hodnot v databázi. Správná odpověď: 48000."
      },
      {
        "id": "sql_q50",
        "module": "sql_m4",
        "question": "Table MYTAB contains only one column of\nINSERT\nINTO mytab VALUES ('A');\nINSERT\nINTO mytab VALUES ('B');\nCOMMIT;\nINSERT\nINTO mytab VALUES ('C');\nROLLBACK;\nWhich\nrows does the table now contain?",
        "code": null,
        "options": [
          "A, B, and C",
          "A and B",
          "C",
          "None of the above"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'A and B'."
      },
      {
        "id": "sql_q51",
        "module": "sql_m1",
        "question": "If Oracle crashes, your changes are",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q52",
        "module": "sql_m2",
        "question": "Examine the following statements:\nemployees SET salary = 15000;\nSAVEPOINT\nupd1_done;\nemployees SET salary = 22000;\nSAVEPOINT\nupd2_done;\nFROM employees;\nYou\nwant to retain all the employees with a salary of 15000; What statement would\nyou execute next?",
        "code": "UPDATE\nUPDATE\nDELETE",
        "options": [
          "ROLLBACK;",
          "ROLLBACK TO SAVEPOINT upd1_done;",
          "ROLLBACK TO SAVEPOINT upd2_done;",
          "ROLLBACK TO SAVE upd1_done;",
          "There is nothing you can do; either\nall changes must be rolled back, or none of them can be rolled back."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'ROLLBACK TO SAVEPOINT upd1_done;'."
      },
      {
        "id": "sql_q53",
        "module": "sql_m4",
        "question": "COMMIT saves all outstanding data",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q54",
        "module": "sql_m4",
        "question": "Examine the following statements:\nINTO emps SELECT * FROM employees; -- 107 rows inserted.\nSAVEPOINT\nIns_Done;\nemployees; -- 107 rows deleted\nSAVEPOINT\nDel_Done;\nemps SET last_name = 'Smith';\nHow\nwould you undo the last Update only?",
        "code": "INSERT\nDELETE\nUPDATE",
        "options": [
          "ROLLBACK to SAVEPOINT Del_Done;",
          "COMMIT Del_Done;",
          "There is nothing you can do.",
          "ROLLBACK UPDATE;"
        ],
        "correct": 0,
        "explanation": "Příkaz DELETE je DML operace odstraňující řádky splňující podmínku WHERE. Změnu lze potvrdit (COMMIT) nebo vrátit (ROLLBACK). Správná odpověď: ROLLBACK to SAVEPOINT Del_Done;."
      },
      {
        "id": "sql_q55",
        "module": "sql_m1",
        "question": "Which SQL statement is used to remove",
        "code": null,
        "options": [
          "REVOKE;",
          "ROLLBACK TO SAVEPOINT;",
          "ROLLBACK;",
          "UNDO;"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'ROLLBACK;'."
      },
      {
        "id": "sql_q56",
        "module": "sql_m2",
        "question": "You need not worry about controlling",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q57",
        "module": "sql_m3",
        "question": "User\nSELECT\nCOUNT(*) FROM bob.customers;\nWhat\nresult will JANE see?",
        "code": null,
        "options": [
          "22",
          "20",
          "JANE will receive an error message\nbecause she is not allowed to query the table while BOB is updating it.",
          "2"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: '20'."
      },
      {
        "id": "sql_q58",
        "module": "sql_m1",
        "question": "If",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q59",
        "module": "sql_m1",
        "question": "If UserB has privileges to see the data",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q60",
        "module": "sql_m3",
        "question": "User BOB's CUSTOMERS table contains 20\nSELECT\nCOUNT(*) FROM bob.customers;\nWhat\nresult will JANE see?",
        "code": null,
        "options": [
          "JANE will receive an error message\nbecause she is not allowed to query the table while BOB is updating it.",
          "2",
          "20",
          "22"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: '20'."
      },
      {
        "id": "sql_q61",
        "module": "sql_m1",
        "question": "When you logout of Oracle, your data",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'False'."
      },
      {
        "id": "sql_q62",
        "module": "sql_m2",
        "question": "Which of the following best describes",
        "code": null,
        "options": [
          "It prevents users from querying\ntables on which they have not been granted SELECT privilege",
          "It prevents other users from\nquerying a table while updates are being executed on it",
          "It prevents other users from seeing\nchanges to a table until those changes have been committed",
          "It ensures that all changes to a\ntable are automatically committed"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'It prevents other users from seeing\nchanges to a table until those changes have been committed'."
      },
      {
        "id": "sql_q63",
        "module": "sql_m4",
        "question": "If a database crashes, all uncommitted",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q64",
        "module": "sql_m4",
        "question": "COMMIT",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních pravidel Oracle SQL je správným výsledkem: 'True'."
      },
      {
        "id": "sql_q65",
        "module": "sql_m4",
        "question": "Examine\nUPDATE\nemployees SET salary = 15000;\nSAVEPOINT\nupd1_done;\nUPDATE\nemployees SET salary = 22000;\nSAVEPOINT\nupd2_done;\nDELETE\nFROM employees;\nYou\nwant to retain all the employees with a salary of 15000; What statement would\nyou execute next?",
        "code": null,
        "options": [
          "ROLLBACK;",
          "ROLLBACK TO SAVEPOINT upd1_done;",
          "ROLLBACK TO SAVEPOINT upd2_done;",
          "ROLLBACK TO SAVE upd1_done;",
          "There is nothing you can do; either\nall changes must be rolled back, or none of them can be rolled back."
        ],
        "correct": 1,
        "explanation": "Příkaz DELETE je DML operace odstraňující řádky splňující podmínku WHERE. Změnu lze potvrdit (COMMIT) nebo vrátit (ROLLBACK). Správná odpověď: ROLLBACK TO SAVEPOINT upd1_done;."
      }
    ]
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
    "questions": [
      {
        "id": "linux_q01",
        "module": "linux_m1",
        "question": "Embedded Systems means:",
        "code": null,
        "options": [
          "Businesses cannot charge anything for the software, only the hardware",
          "Systems designed to do a specific task on hardware optimized for only that purpose",
          "Users must support the systems themselves",
          "You can view the software's source code",
          "Companies must share their changes"
        ],
        "correct": 1,
        "explanation": "Vestavěné (embedded) systémy jsou navrženy k provádění konkrétní specializované úlohy na optimalizovaném jednoúčelovém hardwaru. Správná odpověď: Systems designed to do a specific task on hardware optimized for only that purpose."
      },
      {
        "id": "linux_q02",
        "module": "linux_m1",
        "question": "Linux originally only ran on:",
        "code": null,
        "options": [
          "Specialized processor chips",
          "Raspberry Pi computers",
          "Xerox copy machines",
          "Intel 386 PCs",
          "Macintosh"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Intel 386 PCs'."
      },
      {
        "id": "linux_q03",
        "module": "linux_m2",
        "question": "Bundling utilities, management tools, and application software with a Linux kernel is called a:",
        "code": null,
        "options": [
          "A text editor",
          "A type of hardware",
          "A distribution of Linux",
          "A trademark"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'A distribution of Linux'."
      },
      {
        "id": "linux_q04",
        "module": "linux_m1",
        "question": "A software release cycle describes:",
        "code": null,
        "options": [
          "How often the software's memory is released back to the operating system",
          "How often the computer must be rebooted",
          "How often upgrades come out for software",
          "How often security fixes are implemented",
          "How often the computer must be upgraded to support new software"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'How often upgrades come out for software'."
      },
      {
        "id": "linux_q05",
        "module": "linux_m1",
        "question": "(choose three)",
        "code": null,
        "options": [
          "Tightly integrated with Apple hardware",
          "A fully certified UNIX distribution",
          "Primarily used to manage network services",
          "Able to natively run Windows binaries",
          "Derived from Linux",
          "Partially based on code from the FreeBSD project"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Tightly integrated with Apple hardware'."
      },
      {
        "id": "linux_q06",
        "module": "linux_m1",
        "question": "(choose two)",
        "code": null,
        "options": [
          "Takes fewer resources to run than a compiled language",
          "Requires a compilation step but no linking step",
          "Tends to offer more features than compiled languages",
          "Is converted into machine specific instructions as the program runs",
          "Requires a linking step but no compilation step"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Tends to offer more features than compiled languages'."
      },
      {
        "id": "linux_q07",
        "module": "linux_m1",
        "question": "Cloud computing is:",
        "code": null,
        "options": [
          "Is made possible by faster internet speeds",
          "Is useful for both business and home users",
          "All are correct",
          "Requires fewer resources because systems are shared among many users",
          "Allows users in different geographical regions to work together in real time"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'All are correct'."
      },
      {
        "id": "linux_q08",
        "module": "linux_m1",
        "question": "A license where you don't have access to the source code is called:",
        "code": null,
        "options": [
          "Closed source",
          "Sourceless",
          "Impaired source",
          "Open source"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Closed source'."
      },
      {
        "id": "linux_q09",
        "module": "linux_m1",
        "question": "A copyleft provision in a software license means:",
        "code": null,
        "options": [
          "You must provide support for your modifications",
          "You must provide free copies of the software if you use it",
          "You may not link against third party closed source software",
          "You give up your copyright to the software",
          "If you redistribute the software, you must distribute the source to any changes you make"
        ],
        "correct": 4,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'If you redistribute the software, you must distribute the source to any changes you make'."
      },
      {
        "id": "linux_q10",
        "module": "linux_m1",
        "question": "What does it mean when a work is placed in the public domain?",
        "code": null,
        "options": [
          "The author has relinquished the copyright on the work",
          "The author has died",
          "You must redistribute changes to the software",
          "You may not use the work for commercial purposes",
          "The work was done by a government agency"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'The author has relinquished the copyright on the work'."
      },
      {
        "id": "linux_q11",
        "module": "linux_m2",
        "question": "True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'True'."
      },
      {
        "id": "linux_q12",
        "module": "linux_m1",
        "question": "To be able to output messages to the screen, use the _______ command:",
        "code": null,
        "options": [
          "type",
          "print",
          "display",
          "echo"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'echo'."
      },
      {
        "id": "linux_q13",
        "module": "linux_m3",
        "question": "The _______ command will print a list of the commands that you've previously executed.",
        "code": null,
        "options": [
          "history",
          "exec",
          "eval",
          "list"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'history'."
      },
      {
        "id": "linux_q14",
        "module": "linux_m1",
        "question": "HOME is an example of _________.",
        "code": null,
        "options": [
          "An internal command",
          "An alias",
          "A path variable",
          "A local variable",
          "An environment variable"
        ],
        "correct": 4,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'An environment variable'."
      },
      {
        "id": "linux_q15",
        "module": "linux_m2",
        "question": "The directory where additional documentation for software packages most likely can be found is:",
        "code": null,
        "options": [
          "/usr/share/doc",
          "/var/share/doc",
          "/var/lib/doc",
          "/usr/software/doc"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '/usr/share/doc'."
      },
      {
        "id": "linux_q16",
        "module": "linux_m1",
        "question": "To start searching a man page, the first key you press is:",
        "code": null,
        "options": [
          "s",
          "!",
          "/",
          "f"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '/'."
      },
      {
        "id": "linux_q17",
        "module": "linux_m2",
        "question": "The _____ command can be used to find any file, not just commands or man pages.",
        "code": null,
        "options": [
          "whatis",
          "whereis",
          "apropos",
          "locate"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'locate'."
      },
      {
        "id": "linux_q18",
        "module": "linux_m2",
        "question": "Hidden files are files that begin with what character?",
        "code": null,
        "options": [
          "A dash (-)",
          "A plus (+)",
          "A period (.)",
          "An asterisk (*)"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'A period (.)'."
      },
      {
        "id": "linux_q19",
        "module": "linux_m4",
        "question": "The top-level directory on a Linux system is represented as:",
        "code": null,
        "options": [
          "C:",
          "/home",
          "/",
          "/root"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '/'."
      },
      {
        "id": "linux_q20",
        "module": "linux_m2",
        "question": "The ls command without options or arguments…",
        "code": null,
        "options": [
          "…lists the contents of the current directory.",
          "…prompts for a directory to list.",
          "…generates an error as this command requires arguments.",
          "…lists the contents of a user's home directory."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '…lists the contents of the current directory.'."
      },
      {
        "id": "linux_q21",
        "module": "linux_m3",
        "question": "The command ls -S will sort files:",
        "code": null,
        "options": [
          "By size, smallest to largest",
          "By size, largest to smallest",
          "By number of symlinks, largest to smallest",
          "By modification date, newest to oldest"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'By size, largest to smallest'."
      },
      {
        "id": "linux_q22",
        "module": "linux_m2",
        "question": "Which option can be used with the rm command to prompt before deleting?",
        "code": null,
        "options": [
          "l",
          "-i",
          "A",
          "-P"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '-i'."
      },
      {
        "id": "linux_q23",
        "module": "linux_m2",
        "question": "Which command would list files that do not begin with a T or a W?",
        "code": null,
        "options": [
          "echo /etc/*[TW!]",
          "echo /etc/[!TW]",
          "echo /etc/!TW",
          "echo /etc/[*TW]!"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'echo /etc/[!TW]'."
      },
      {
        "id": "linux_q24",
        "module": "linux_m1",
        "question": "In general, for which of the following would you want to use lossless compression?",
        "code": null,
        "options": [
          "An mp3 audio file",
          "A movie",
          "A JPEG image",
          "A log file",
          "An encrypted email"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'A log file'."
      },
      {
        "id": "linux_q25",
        "module": "linux_m1",
        "question": "Which command will show what is inside the compressed tarball with a name of foo.tar.gz?",
        "code": null,
        "options": [
          "tar –tf foo.tar.gz",
          "tar –lf foo.tar.gz",
          "tar –tzf foo.tar.gz",
          "tar –tjf foo.tar.gz",
          "tar –xf foo.tar.gz"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'tar –tzf foo.tar.gz'."
      },
      {
        "id": "linux_q26",
        "module": "linux_m1",
        "question": "Error messages generated by commands are sent where by default?",
        "code": null,
        "options": [
          "STDOUT",
          "Log files",
          "STDERR",
          "STDIN"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'STDERR'."
      },
      {
        "id": "linux_q27",
        "module": "linux_m1",
        "question": "Which of the following commands will display only lines that begin with test?",
        "code": null,
        "options": [
          "grep $test* file.txt",
          "grep ^test file.txt",
          "grep &test file.txt",
          "grep *test file.txt"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'grep ^test file.txt'."
      },
      {
        "id": "linux_q28",
        "module": "linux_m1",
        "question": "Which of the following commands will display lines that contain either start or end?",
        "code": null,
        "options": [
          "egrep start end file.txt",
          "egrep (start|end) file.txt",
          "egrep start&end file.txt",
          "egrep 'start|end' file.txt"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'egrep 'start|end' file.txt'."
      },
      {
        "id": "linux_q29",
        "module": "linux_m2",
        "question": "A file begins with #!/bin/csh. This means:",
        "code": null,
        "options": [
          "Nothing, this is a comment",
          "This is a Perl script",
          "Running the script will invoke /bin/csh to interpret the rest of the file",
          "The operator should not be using /bin/csh",
          "C Shell compatibility mode is enabled"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Running the script will invoke /bin/csh to interpret the rest of the file'."
      },
      {
        "id": "linux_q30",
        "module": "linux_m2",
        "question": "Most of nano's commands take the form of:",
        "code": null,
        "options": [
          "Alt and another character",
          "Control and another character",
          "The F1 through F12 function keys",
          "Mouse clicks",
          "Escape followed by another character"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Control and another character'."
      },
      {
        "id": "linux_q31",
        "module": "linux_m1",
        "question": "The if command looks for what exit code to consider a condition to be true?",
        "code": null,
        "options": [
          "0",
          "10",
          "255",
          "2",
          "1"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '0'."
      },
      {
        "id": "linux_q32",
        "module": "linux_m1",
        "question": "The number of users logged in is in a variable called USERS. How would you test to see if there are 5 users logged in?",
        "code": null,
        "options": [
          "test –f USERS=5",
          "test $USERS –eq 5",
          "test $USERS = 5",
          "test $USERS –a 5",
          "test $USERS,5"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'test $USERS –eq 5'."
      },
      {
        "id": "linux_q33",
        "module": "linux_m4",
        "question": "Software that allows hardware devices to communicate with the installed operating system is called?",
        "code": null,
        "options": [
          "Packages",
          "Drivers",
          "Instructions",
          "Programs"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Drivers'."
      },
      {
        "id": "linux_q34",
        "module": "linux_m1",
        "question": "Which of the following commands will check hard disk GPT partitions?(choose three)",
        "code": null,
        "options": [
          "gdisk",
          "sfdisk",
          "gfdisk",
          "sgdisk",
          "cgdisk"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'gdisk'."
      },
      {
        "id": "linux_q35",
        "module": "linux_m1",
        "question": "The free command outputs statistics about:",
        "code": null,
        "options": [
          "Disk usage",
          "Memory usage",
          "Software usage",
          "CPU usage"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'Memory usage'."
      },
      {
        "id": "linux_q36",
        "module": "linux_m2",
        "question": "Which file contains the information passed to the kernel at boot time?",
        "code": null,
        "options": [
          "/proc/kernel",
          "/proc/kargs",
          "/proc/kopts",
          "/proc/cmdline"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '/proc/cmdline'."
      },
      {
        "id": "linux_q37",
        "module": "linux_m2",
        "question": "To make changes permanent for kernel parameter files found under /proc/sys, the following file can have entries added to it:",
        "code": null,
        "options": [
          "/etc/sysinfo.conf",
          "/etc/sysctl.conf",
          "/etc/procctl.conf",
          "/etc/procsys.conf"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '/etc/sysctl.conf'."
      },
      {
        "id": "linux_q38",
        "module": "linux_m4",
        "question": "Which of the following commands will display the IP address on a Linux system?",
        "code": null,
        "options": [
          "dig",
          "ifconfig",
          "route",
          "ipconfig"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'ifconfig'."
      },
      {
        "id": "linux_q39",
        "module": "linux_m4",
        "question": "When issuing the service network restart command, which of the following occurs?",
        "code": null,
        "options": [
          "…the networking for the system is stopped and then started back up.",
          "…brings up all network interfaces, re-reads all related configuration files and then the networking for the system is restarted.",
          "…takes down all network interfaces, re-reads all related configuration files and then the networking for the system is restarted."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '…takes down all network interfaces, re-reads all related configuration files and then the networking for the system is restarted.'."
      },
      {
        "id": "linux_q40",
        "module": "linux_m1",
        "question": "Which of the following commands can be used to display socket statistics, and supports all major packet and socket types?",
        "code": null,
        "options": [
          "route",
          "ss",
          "top",
          "ifconfig"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'ss'."
      },
      {
        "id": "linux_q41",
        "module": "linux_m1",
        "question": "Which of the following commands will display the groups that the user bob belongs to?",
        "code": null,
        "options": [
          "groups -a",
          "group bob",
          "all bob",
          "id bob"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'id bob'."
      },
      {
        "id": "linux_q42",
        "module": "linux_m1",
        "question": "Traditional UNIX systems allowed users to belong to how many groups?",
        "code": null,
        "options": [
          "256",
          "65,000",
          "1",
          "10,000",
          "16"
        ],
        "correct": 4,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '16'."
      },
      {
        "id": "linux_q43",
        "module": "linux_m1",
        "question": "The first line of this command displays how long the system has been running since being rebooted.",
        "code": null,
        "options": [
          "getent",
          "id",
          "w",
          "su",
          "who"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'w'."
      },
      {
        "id": "linux_q44",
        "module": "linux_m1",
        "question": "Which of the following files contains user IDs?",
        "code": null,
        "options": [
          "/etc/usr",
          "/etc/shadow",
          "/etc/group",
          "/etc/passwd"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '/etc/passwd'."
      },
      {
        "id": "linux_q45",
        "module": "linux_m1",
        "question": "Which of the following commands, run as root, will prevent the user bob from logging in?",
        "code": null,
        "options": [
          "usermod -D bob",
          "usermod -d bob",
          "usermod -L bob",
          "usermod -l bob"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'usermod -L bob'."
      },
      {
        "id": "linux_q46",
        "module": "linux_m1",
        "question": "What directory contains a user's home directory?",
        "code": null,
        "options": [
          "/rootfs",
          "/",
          "/home",
          "/user"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '/home'."
      },
      {
        "id": "linux_q47",
        "module": "linux_m1",
        "question": "GIDs under 500 (or 1000) are usually reserved for what kind of groups?",
        "code": null,
        "options": [
          "Administrators",
          "System use",
          "User private groups (UPG)",
          "Are not used for groups, but for user accounts"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'System use'."
      },
      {
        "id": "linux_q48",
        "module": "linux_m1",
        "question": "A user cannot delete a file if they do not own it. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'False'."
      },
      {
        "id": "linux_q49",
        "module": "linux_m1",
        "question": "The chown command permits changing group ownership done by root only. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'False'."
      },
      {
        "id": "linux_q50",
        "module": "linux_m4",
        "question": "Which of the following commands will list hidden files as well as their ownership?",
        "code": null,
        "options": [
          "ls -l",
          "ls -z",
          "ls -a",
          "ls -la"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: 'ls -la'."
      }
    ]
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
    "questions": [
      {
        "id": "itn_q01",
        "module": "itn_m4",
        "question": "Which two traffic types use the Real-Time Transport Protocol (RTP)? (Choose two.)",
        "code": null,
        "options": [
          "video",
          "web",
          "file transfer",
          "voice",
          "peer to peer"
        ],
        "correct": 0,
        "explanation": "Protokol RTP (Real-Time Transport Protocol) běží nad UDP a slouží pro přenos médií v reálném čase, zejména hlasu (voice) a videa (video). Správná odpověď: video."
      },
      {
        "id": "itn_q02",
        "module": "itn_m1",
        "question": "Which wireless technology has low-power and data rate requirements making it popular in home automation applications?",
        "code": null,
        "options": [
          "ZigBee",
          "LoRaWAN",
          "5G",
          "Wi-Fi"
        ],
        "correct": 0,
        "explanation": "ZigBee je nízkoenergetická bezdrátová technologie s nízkou přenosovou rychlostí ideální pro domácí automatizaci a IoT senzory. Správná odpověď: ZigBee."
      },
      {
        "id": "itn_q03",
        "module": "itn_m4",
        "question": "Which layer of the TCP/IP model provides a route to forward messages through an internetwork?",
        "code": null,
        "options": [
          "application",
          "network access",
          "internet",
          "transport"
        ],
        "correct": 2,
        "explanation": "V TCP/IP modelu odpovídá síťové vrstvě vrstva Internet (zajišťuje směrování paketů přes sítě pomocí IP adres). Správná odpověď: internet."
      },
      {
        "id": "itn_q04",
        "module": "itn_m1",
        "question": "Which type of server relies on record types such as A, NS, AAAA, and MX in order to provide services?",
        "code": null,
        "options": [
          "DNS",
          "email",
          "file",
          "web"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'DNS'."
      },
      {
        "id": "itn_q05",
        "module": "itn_m1",
        "question": "What are proprietary protocols?",
        "code": null,
        "options": [
          "protocols developed by private organizations to operate on any vendor hardware",
          "protocols that can be freely used by any organization or vendor",
          "protocols developed by organizations who have control over their definition and operation",
          "a collection of protocols known as the TCP/IP protocol suite"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'protocols developed by organizations who have control over their definition and operation'."
      },
      {
        "id": "itn_q06",
        "module": "itn_m1",
        "question": "What service is provided by DNS?",
        "code": null,
        "options": [
          "Resolves domain names, such as cisco.com, into IP addresses.",
          "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.",
          "Allows for data transfers between a client and a file server.",
          "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web."
        ],
        "correct": 0,
        "explanation": "Služba DNS (Domain Name System, port 53 UDP/TCP) překládá doménová jména na IP adresy (záznamy A, AAAA, MX, NS). Správná odpověď: Resolves domain names, such as cisco.com, into IP addresses.."
      },
      {
        "id": "itn_q07",
        "module": "itn_m4",
        "question": "A client packet is received by a server. The packet has a destination port number of 110. What service is the client requesting?",
        "code": null,
        "options": [
          "DNS",
          "DHCP",
          "SMTP",
          "POP3"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'POP3'."
      },
      {
        "id": "itn_q08",
        "module": "itn_m3",
        "question": "What command can be used on a Windows PC to see the IP configuration of that computer?",
        "code": null,
        "options": [
          "show ip interface brief",
          "ping",
          "show interfaces",
          "ipconfig"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'ipconfig'."
      },
      {
        "id": "itn_q09",
        "module": "itn_m1",
        "question": "A wired laser printer is attached to a home computer. That printer has been shared so that other computers on the home network can also use the printer. What networking model is in use?",
        "code": null,
        "options": [
          "client-based",
          "master-slave",
          "point-to-point",
          "peer-to-peer (P2P)"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'peer-to-peer (P2P)'."
      },
      {
        "id": "itn_q10",
        "module": "itn_m1",
        "question": "What characteristic describes a virus?",
        "code": null,
        "options": [
          "a network device that filters access and traffic coming into a network",
          "the use of stolen credentials to access private data",
          "an attack that slows or crashes a device or network service",
          "malicious software or code running on an end device"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'malicious software or code running on an end device'."
      },
      {
        "id": "itn_q11",
        "module": "itn_m4",
        "question": "Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?",
        "code": null,
        "options": [
          "financial transactions, web page, audio conference",
          "audio conference, financial transactions, web page",
          "financial transactions, audio conference, web page",
          "audio conference, web page, financial transactions"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'audio conference, financial transactions, web page'."
      },
      {
        "id": "itn_q12",
        "module": "itn_m1",
        "question": "A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?\n\n(A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in the ARP cache. How will the device obtain a destination MAC address?)\n\n\nIt will send the frame and use its own MAC address as the destination.\nIt will send an ARP request for the MAC address of the destination device.\nIt will send the frame with a broadcast MAC address.\nIt will send a request to the DNS server for the destination MAC address.\nIt will send an ARP request for the MAC address of the default gateway.\n\nExplanation: Topic 9.2.5\n\nWhen a source host identifies that a destination IP address resides on a remote network segment, it must forward the packet to its default gateway (the local router) to reach that destination. Because Layer 2 Ethernet frames are designed for local delivery within the same segment, the host requires the physical MAC address of the gateway's interface to encapsulate the IP packet. If the ARP cache does not contain a mapping for the gateway's IP address, the host initiates an ARP request specifically for the default gateway's MAC address. The host does not request the MAC address of the final destination device, as that device is not on the local segment and cannot respond to local Layer 2 broadcast requests. Once the gateway's MAC address is resolved and stored in the cache, the host can successfully transmit the frame to the router for further delivery across the internetwork.\n\n\n\n22. A client packet is received by a server. The packet has a destination port number of 53. What service is the client requesting?",
        "code": null,
        "options": [
          "DNS",
          "NetBIOS (NetBT)",
          "POP3",
          "IMAP"
        ],
        "correct": 0,
        "explanation": "Ethernetový rámec na linkové vrstvě (L2) obsahuje zdrojovou a cílovou MAC adresu (48 bitů). Minimální velikost rámce je 64 bajtů. Správná odpověď: DNS."
      },
      {
        "id": "itn_q13",
        "module": "itn_m4",
        "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 25 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "code": null,
        "options": [
          "255.255.255.128",
          "255.255.255.192",
          "255.255.255.224",
          "255.255.255.240"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: '255.255.255.224'."
      },
      {
        "id": "itn_q14",
        "module": "itn_m1",
        "question": "What characteristic describes a Trojan horse?",
        "code": null,
        "options": [
          "malicious software or code running on an end device",
          "an attack that slows or crashes a device or network service",
          "the use of stolen credentials to access private data",
          "a network device that filters access and traffic coming into a network"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'malicious software or code running on an end device'."
      },
      {
        "id": "itn_q15",
        "module": "itn_m1",
        "question": "What service is provided by HTTPS?",
        "code": null,
        "options": [
          "Uses encryption to provide secure remote access to network devices and servers.",
          "Resolves domain names, such as cisco.com, into IP addresses.",
          "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",
          "Allows remote access to network devices and servers."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.'."
      },
      {
        "id": "itn_q16",
        "module": "itn_m1",
        "question": "A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?",
        "code": null,
        "options": [
          "The data flow is being tracked based on the destination MAC address of the technician PC.",
          "The data flow is being tracked based on the source port number that is used by each application.",
          "The data flow is being tracked based on the source IP address that is used by the PC of the technician.",
          "The data flow is being tracked based on the destination IP address that is used by the PC of the technician."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'The data flow is being tracked based on the source port number that is used by each application.'."
      },
      {
        "id": "itn_q17",
        "module": "itn_m4",
        "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "code": null,
        "options": [
          "255.255.255.240",
          "255.255.255.224",
          "255.255.255.192",
          "255.255.255.128"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: '255.255.255.192'."
      },
      {
        "id": "itn_q18",
        "module": "itn_m1",
        "question": "Match the application protocols to the correct transport protocols.\n\n\n\nExplanation: Topic 14.4.3\n\n\n\n31. What service is provided by SMTP?",
        "code": null,
        "options": [
          "Allows clients to send email to a mail server and the servers to send email to other servers.",
          "Allows remote access to network devices and servers.",
          "Uses encryption to provide secure remote access to network devices and servers.",
          "An application that allows real-time chatting among remote users."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Allows clients to send email to a mail server and the servers to send email to other servers.'."
      },
      {
        "id": "itn_q19",
        "module": "itn_m4",
        "question": "Which scenario describes a function provided by the transport layer?",
        "code": null,
        "options": [
          "A student is using a classroom VoIP phone to call home. The unique identifier burned into the phone is a transport layer address used to contact another network device on the same network.",
          "A student is playing a short web-based movie with sound. The movie and sound are encoded within the transport layer header.",
          "A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.",
          "A corporate worker is accessing a web server located on a corporate network. The transport layer formats the screen so the web page appears properly no matter what device is being used to view the web site."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.'."
      },
      {
        "id": "itn_q20",
        "module": "itn_m1",
        "question": "A company has a file server that shares a folder named Public. The network security policy specifies that the Public folder is assigned Read-Only rights to anyone who can log into the server while the Edit rights are assigned only to the network admin group. Which component is addressed in the AAA network service framework?",
        "code": null,
        "options": [
          "automation",
          "accounting",
          "authentication",
          "authorization"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'authorization'."
      },
      {
        "id": "itn_q21",
        "module": "itn_m1",
        "question": "What three requirements are defined by the protocols used in network communcations to allow message transmission across a network? (Choose three.)",
        "code": null,
        "options": [
          "message size",
          "message encoding",
          "connector specifications",
          "media selection",
          "delivery options",
          "end-device installation"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'message size'."
      },
      {
        "id": "itn_q22",
        "module": "itn_m3",
        "question": "What are two characteristics of IP? (Choose two.)",
        "code": null,
        "options": [
          "does not require a dedicated end-to-end connection",
          "operates independently of the network media",
          "retransmits packets if errors occur",
          "re-assembles out of order packets into the correct order at the receiver end",
          "guarantees delivery of packets"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'does not require a dedicated end-to-end connection'."
      },
      {
        "id": "itn_q23",
        "module": "itn_m4",
        "question": "An employee of a large corporation remotely logs into the company using the appropriate username and password. The employee is attending an important video conference with a customer concerning a large sale. It is important for the video quality to be excellent during the meeting. The employee is unaware that after a successful login, the connection to the company ISP failed. The secondary connection, however, activated within seconds. The disruption was not noticed by the employee or other employees.\n\nWhat three network characteristics are described in this scenario? (Choose three.)",
        "code": null,
        "options": [
          "security",
          "quality of service",
          "scalability",
          "powerline networking",
          "integrity",
          "fault tolerance"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'security'."
      },
      {
        "id": "itn_q24",
        "module": "itn_m2",
        "question": "What are two common causes of signal degradation when using UTP cabling? (Choose two.)",
        "code": null,
        "options": [
          "improper termination",
          "low-quality shielding in cable",
          "installing cables in conduit",
          "low-quality cable or connectors",
          "loss of light over long distances"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'improper termination'."
      },
      {
        "id": "itn_q25",
        "module": "itn_m3",
        "question": "Which subnet would include the address 192.168.1.96 as a usable host address?",
        "code": null,
        "options": [
          "192.168.1.64/26",
          "192.168.1.32/27",
          "192.168.1.32/28",
          "192.168.1.64/29"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: '192.168.1.64/26'."
      },
      {
        "id": "itn_q26",
        "module": "itn_m3",
        "question": "What is the consequence of configuring a router with the ipv6 unicast-routing global configuration command?​",
        "code": null,
        "options": [
          "All router interfaces will be automatically activated.",
          "The IPv6 enabled router interfaces begin sending ICMPv6 Router Advertisement messages.",
          "Each router interface will generate an IPv6 link-local address.​",
          "It statically creates a global unicast address on this router.​"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'The IPv6 enabled router interfaces begin sending ICMPv6 Router Advertisement messages.'."
      },
      {
        "id": "itn_q27",
        "module": "itn_m1",
        "question": "Which three layers of the OSI model map to the application layer of the TCP/IP model? (Choose three.)",
        "code": null,
        "options": [
          "application",
          "network",
          "data link",
          "session",
          "presentation",
          "transport"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'application'."
      },
      {
        "id": "itn_q28",
        "module": "itn_m1",
        "question": "What are two features of ARP? (Choose two.)",
        "code": null,
        "options": [
          "When a host is encapsulating a packet into a frame, it refers to the MAC address table to determine the mapping of IP addresses to MAC addresses.",
          "An ARP request is sent to all devices on the Ethernet LAN and contains the IP address of the destination host and its multicast MAC address.",
          "If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.",
          "If no device responds to the ARP request, then the originating node will broadcast the data packet to all devices on the network segment.",
          "If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.'."
      },
      {
        "id": "itn_q29",
        "module": "itn_m4",
        "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 90 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "code": null,
        "options": [
          "255.255.255.128",
          "255.255.255.240",
          "255.255.255.248",
          "255.255.255.224"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: '255.255.255.128'."
      },
      {
        "id": "itn_q30",
        "module": "itn_m3",
        "question": "What are two ICMPv6 messages that are not present in ICMP for IPv4? (Choose two.)",
        "code": null,
        "options": [
          "Neighbor Solicitation",
          "Destination Unreachable",
          "Host Confirmation",
          "Time Exceeded",
          "Router Advertisement",
          "Route Redirection"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Neighbor Solicitation'."
      },
      {
        "id": "itn_q31",
        "module": "itn_m4",
        "question": "A client packet is received by a server. The packet has a destination port number of 80. What service is the client requesting?",
        "code": null,
        "options": [
          "DHCP",
          "SMTP",
          "DNS",
          "HTTP"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'HTTP'."
      },
      {
        "id": "itn_q32",
        "module": "itn_m1",
        "question": "What is an advantage for small organizations of adopting IMAP instead of POP?",
        "code": null,
        "options": [
          "POP only allows the client to store messages in a centralized way, while IMAP allows distributed storage.",
          "Messages are kept in the mail servers until they are manually deleted from the email client.",
          "When the user connects to a POP server, copies of the messages are kept in the mail server for a short time, but IMAP keeps them for a long time.",
          "IMAP sends and retrieves email, but POP only retrieves email."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Messages are kept in the mail servers until they are manually deleted from the email client.'."
      },
      {
        "id": "itn_q33",
        "module": "itn_m3",
        "question": "A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?",
        "code": null,
        "options": [
          "tracert",
          "ipconfig",
          "netstat",
          "nslookup"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'nslookup'."
      },
      {
        "id": "itn_q34",
        "module": "itn_m2",
        "question": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "code": null,
        "options": [
          "implements CSMA/CD over legacy shared half-duplex media",
          "enables IPv4 and IPv6 to utilize the same physical medium",
          "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
          "implements a process to delimit fields within an Ethernet 2 frame",
          "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame"
        ],
        "correct": 1,
        "explanation": "Ethernetový rámec na linkové vrstvě (L2) obsahuje zdrojovou a cílovou MAC adresu (48 bitů). Minimální velikost rámce je 64 bajtů. Správná odpověď: enables IPv4 and IPv6 to utilize the same physical medium."
      },
      {
        "id": "itn_q35",
        "module": "itn_m3",
        "question": "The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?",
        "code": null,
        "options": [
          "The switch can communicate with other hosts on the 172.16.100.0 network.",
          "The switch can be remotely managed from a host on another network.",
          "The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1.",
          "The switch will have a management interface with the address 172.16.100.1."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'The switch can be remotely managed from a host on another network.'."
      },
      {
        "id": "itn_q36",
        "module": "itn_m1",
        "question": "What happens when the transport input ssh command is entered on the switch vty lines?",
        "code": null,
        "options": [
          "The SSH client on the switch is enabled.",
          "The switch requires a username/password combination for remote access.",
          "Communication between the switch and remote users is encrypted.",
          "The switch requires remote connections via a proprietary client software."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Communication between the switch and remote users is encrypted.'."
      },
      {
        "id": "itn_q37",
        "module": "itn_m4",
        "question": "Match the type of threat with the cause. (Not all options are used.)\n\n\n\n\n\n\nelectrical threats\nvoltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss\n\n\nhardware threats\nphysical damage to servers, routers, switches, cabling plant, and workstations\n\n\nenvironmental threats\ntemperature extremes (too hot or too cold) or humidity extremes (too wet or too dry)\n\n\nmaintenance threats\npoor handling of key electrical components (electrostatic discharge), lack of critical spare parts, poor cabling, and poor labeling\n\n\n\nExplanation: Topic 16.1.3\n\n\n\n59. A disgruntled employee is using some free wireless networking tools to determine information about the enterprise wireless networks. This person is planning on using this information to hack the wireless network. What type of attack is this?",
        "code": null,
        "options": [
          "DoS",
          "access",
          "reconnaissance",
          "Trojan horse"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'reconnaissance'."
      },
      {
        "id": "itn_q38",
        "module": "itn_m1",
        "question": "What service is provided by HTTP?",
        "code": null,
        "options": [
          "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",
          "Allows for data transfers between a client and a file server.",
          "An application that allows real-time chatting among remote users.",
          "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web."
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.'."
      },
      {
        "id": "itn_q39",
        "module": "itn_m4",
        "question": "A client packet is received by a server. The packet has a destination port number of 67. What service is the client requesting?",
        "code": null,
        "options": [
          "FTP",
          "DHCP",
          "Telnet",
          "SSH"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'DHCP'."
      },
      {
        "id": "itn_q40",
        "module": "itn_m1",
        "question": "What are two problems that can be caused by a large number of ARP request and reply messages? (Choose two.)",
        "code": null,
        "options": [
          "Switches become overloaded because they concentrate all the traffic from the attached subnets.",
          "The ARP request is sent as a broadcast, and will flood the entire subnet.",
          "The network may become overloaded because ARP reply messages have a very large payload due to the 48-bit MAC address and 32-bit IP address that they contain.",
          "A large number of ARP request and reply messages may slow down the switching process, leading the switch to make many changes in its MAC table.",
          "All ARP request messages must be processed by all nodes on the local network."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'The ARP request is sent as a broadcast, and will flood the entire subnet.'."
      },
      {
        "id": "itn_q41",
        "module": "itn_m1",
        "question": "A group of Windows PCs in a new subnet has been added to an Ethernet network. When testing the connectivity, a technician finds that these PCs can access local network resources but not the Internet resources. To troubleshoot the problem, the technician wants to initially confirm the IP address and DNS configurations on the PCs, and also verify connectivity to the local router. Which three Windows CLI commands and utilities will provide the necessary information? (Choose three.)",
        "code": null,
        "options": [
          "netsh interface ipv6 show neighbor",
          "arp -a",
          "tracert",
          "ping",
          "ipconfig",
          "nslookup",
          "telnet"
        ],
        "correct": 3,
        "explanation": "Ethernetový rámec na linkové vrstvě (L2) obsahuje zdrojovou a cílovou MAC adresu (48 bitů). Minimální velikost rámce je 64 bajtů. Správná odpověď: ping."
      },
      {
        "id": "itn_q42",
        "module": "itn_m3",
        "question": "During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?",
        "code": null,
        "options": [
          "analyze the destination IP address",
          "switch the packet to the directly connected interface",
          "look up the next-hop address for the packet",
          "discard the traffic after consulting the route table"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'switch the packet to the directly connected interface'."
      },
      {
        "id": "itn_q43",
        "module": "itn_m1",
        "question": "What characteristic describes antispyware?",
        "code": null,
        "options": [
          "applications that protect end devices from becoming infected with malicious software",
          "a network device that filters access and traffic coming into a network",
          "software on a router that filters traffic based on IP addresses or applications",
          "a tunneling protocol that provides remote users with secure access into the network of an organization"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'applications that protect end devices from becoming infected with malicious software'."
      },
      {
        "id": "itn_q44",
        "module": "itn_m2",
        "question": "A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?",
        "code": null,
        "options": [
          "Telnet",
          "AUX",
          "SSH",
          "Console"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'SSH'."
      },
      {
        "id": "itn_q45",
        "module": "itn_m1",
        "question": "What are the two most effective ways to defend against malware? (Choose two.)",
        "code": null,
        "options": [
          "Implement a VPN.",
          "Implement network firewalls.",
          "Implement RAID.",
          "Implement strong passwords.",
          "Update the operating system and other application software.",
          "Install and update antivirus software."
        ],
        "correct": 4,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Update the operating system and other application software.'."
      },
      {
        "id": "itn_q46",
        "module": "itn_m1",
        "question": "Which type of security threat would be responsible if a spreadsheet add-on disables the local software firewall?",
        "code": null,
        "options": [
          "brute-force attack",
          "Trojan horse",
          "DoS",
          "buffer overflow"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Trojan horse'."
      },
      {
        "id": "itn_q47",
        "module": "itn_m2",
        "question": "Which frame field is created by a source node and used by a destination node to ensure that a transmitted data signal has not been altered by interference, distortion, or signal loss?",
        "code": null,
        "options": [
          "User Datagram Protocol field",
          "transport layer error check field",
          "flow control field",
          "frame check sequence field",
          "error correction process field"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'frame check sequence field'."
      },
      {
        "id": "itn_q48",
        "module": "itn_m4",
        "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "code": null,
        "options": [
          "255.255.255.248",
          "255.255.255.0",
          "255.255.255.128",
          "255.255.255.192"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: '255.255.255.248'."
      },
      {
        "id": "itn_q49",
        "module": "itn_m1",
        "question": "What service is provided by POP3?",
        "code": null,
        "options": [
          "Retrieves email from the server by downloading the email to the local mail application of the client.",
          "An application that allows real-time chatting among remote users.",
          "Allows remote access to network devices and servers.",
          "Uses encryption to provide secure remote access to network devices and servers."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Retrieves email from the server by downloading the email to the local mail application of the client.'."
      },
      {
        "id": "itn_q50",
        "module": "itn_m1",
        "question": "What two security solutions are most likely to be used only in a corporate environment? (Choose two.)",
        "code": null,
        "options": [
          "antispyware",
          "virtual private networks",
          "intrusion prevention systems",
          "strong passwords",
          "antivirus software"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'virtual private networks'."
      },
      {
        "id": "itn_q51",
        "module": "itn_m1",
        "question": "What characteristic describes antivirus software?",
        "code": null,
        "options": [
          "applications that protect end devices from becoming infected with malicious software",
          "a network device that filters access and traffic coming into a network",
          "a tunneling protocol that provides remote users with secure access into the network of an organization",
          "software on a router that filters traffic based on IP addresses or applications"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'applications that protect end devices from becoming infected with malicious software'."
      },
      {
        "id": "itn_q52",
        "module": "itn_m4",
        "question": "What mechanism is used by a router to prevent a received IPv4 packet from traveling endlessly on a network?",
        "code": null,
        "options": [
          "It checks the value of the TTL field and if it is 0, it discards the packet and sends a Destination Unreachable message to the source host.",
          "It checks the value of the TTL field and if it is 100, it discards the packet and sends a Destination Unreachable message to the source host.",
          "It decrements the value of the TTL field by 1 and if the result is 0, it discards the packet and sends a Time Exceeded message to the source host.",
          "It increments the value of the TTL field by 1 and if the result is 100, it discards the packet and sends a Parameter Problem message to the source host."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'It decrements the value of the TTL field by 1 and if the result is 0, it discards the packet and sends a Time Exceeded message to the source host.'."
      },
      {
        "id": "itn_q53",
        "module": "itn_m4",
        "question": "A client packet is received by a server. The packet has a destination port number of 69. What service is the client requesting?",
        "code": null,
        "options": [
          "DNS",
          "DHCP",
          "SMTP",
          "TFTP"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'TFTP'."
      },
      {
        "id": "itn_q54",
        "module": "itn_m1",
        "question": "An administrator defined a local user account with a secret password on router R1 for use with SSH. Which three additional steps are required to configure R1 to accept only encrypted SSH connections? (Choose three.)",
        "code": null,
        "options": [
          "Configure DNS on the router.",
          "Generate two-way pre-shared keys.",
          "Configure the IP domain name on the router.",
          "Generate the SSH keys.",
          "Enable inbound vty SSH sessions.",
          "Enable inbound vty Telnet sessions."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Configure the IP domain name on the router.'."
      },
      {
        "id": "itn_q55",
        "module": "itn_m2",
        "question": "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "code": null,
        "options": [
          "handles communication between upper layer networking software and Ethernet NIC hardware",
          "implements trailer with frame check sequence for error detection",
          "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
          "implements a process to delimit fields within an Ethernet 2 frame",
          "adds Ethernet control information to network protocol data"
        ],
        "correct": 1,
        "explanation": "Ethernetový rámec na linkové vrstvě (L2) obsahuje zdrojovou a cílovou MAC adresu (48 bitů). Minimální velikost rámce je 64 bajtů. Správná odpověď: implements trailer with frame check sequence for error detection."
      },
      {
        "id": "itn_q56",
        "module": "itn_m4",
        "question": "An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?​",
        "code": null,
        "options": [
          "all IPv6 enabled devices on the local link​",
          "all IPv6 DHCP servers​",
          "all IPv6 enabled devices across the network​",
          "all IPv6 configured routers on the local link​"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'all IPv6 configured routers on the local link​'."
      },
      {
        "id": "itn_q57",
        "module": "itn_m3",
        "question": "What are the three parts of an IPv6 global unicast address? (Choose three.)",
        "code": null,
        "options": [
          "subnet ID",
          "subnet mask",
          "broadcast address",
          "global routing prefix",
          "interface ID"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'subnet ID'."
      },
      {
        "id": "itn_q58",
        "module": "itn_m1",
        "question": "A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)",
        "code": null,
        "options": [
          "extensive cabling",
          "mobility options",
          "packet collision",
          "interference",
          "security",
          "coverage area"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'interference'."
      },
      {
        "id": "itn_q59",
        "module": "itn_m1",
        "question": "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
        "code": null,
        "options": [
          "Enter CTRL-Z at the privileged mode prompt.",
          "Exit global configuration mode.",
          "Power cycle the device.",
          "Reboot the device.",
          "Exit privileged EXEC mode and press Enter ."
        ],
        "correct": 4,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'Exit privileged EXEC mode and press Enter .'."
      },
      {
        "id": "itn_q60",
        "module": "itn_m1",
        "question": "What method is used to manage contention-based access on a wireless network?",
        "code": null,
        "options": [
          "token passing",
          "CSMA/CA",
          "priority ordering",
          "CSMA/CD"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: 'CSMA/CA'."
      }
    ]
  },
  "ccna_srwe": {
    "id": "ccna_srwe",
    "category": "systems",
    "categoryName": "Počítačové systémy a sítě",
    "title": "Cisco NetAcad CCNA: Switching, Routing, and Wireless Essentials",
    "subtitle": "Příprava na certifikaci CCNA 200-301 (Kurz CCNAv7 SRWE)",
    "badge": "CCNA: SRWE",
    "icon": "fas fa-network-wired",
    "color": "#00BCEB",
    "passScore": 70,
    "timeLimit": 75,
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
    "examQuestionCount": 50,
    "questions": [
      {
        "id": "srwe_q01",
        "module": "srwe_m1",
        "question": "A cybersecurity analyst is using the macof tool to evaluate configurations of switches deployed in the backbone network of an organization. Which type of LAN attack is the analyst targeting during this evaluation?",
        "code": null,
        "options": [
          "VLAN hopping",
          "DHCP spoofing",
          "MAC address table overflow",
          "VLAN double-tagging"
        ],
        "correct": 2,
        "explanation": "Nástroj macof zaplaví přepínač falešnými MAC adresami (MAC Table Overflow attack), což způsobí přetečení CAM tabulky a přepnutí do režimu hubu (fail-open flooding). Správná odpověď: MAC address table overflow."
      },
      {
        "id": "srwe_q02",
        "module": "srwe_m1",
        "question": "Which statement describes a result after multiple Cisco LAN switches are interconnected?",
        "code": null,
        "options": [
          "The broadcast domain expands to all switches.",
          "One collision domain exists per switch.",
          "There is one broadcast domain and one collision domain per switch.",
          "Frame collisions increase on the segments connecting the switches.",
          "Unicast frames are always forwarded regardless of the destination MAC address."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'The broadcast domain expands to all switches.'."
      },
      {
        "id": "srwe_q03",
        "module": "srwe_m4",
        "question": "Which wireless encryption method is the most secure?",
        "code": null,
        "options": [
          "WPA2 with AES",
          "WPA2 with TKIP",
          "WEP",
          "WPA"
        ],
        "correct": 0,
        "explanation": "Zabezpečení WPA2 využívající šifrování AES (šifra CCMP) je standardem pro bezpečné bezdrátové sítě WLAN. Správná odpověď: WPA2 with AES."
      },
      {
        "id": "srwe_q04",
        "module": "srwe_m4",
        "question": "After attaching four PCs to the switch ports, configuring the SSID and setting authentication properties for a small office network, a technician successfully tests the connectivity of all PCs that are connected to the switch and WLAN. A firewall is then configured on the device prior to connecting it to the Internet. What type of network device includes all of the described features?",
        "code": null,
        "options": [
          "firewall appliance",
          "wireless router",
          "switch",
          "standalone wireless access point"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'wireless router'."
      },
      {
        "id": "srwe_q05",
        "module": "srwe_m1",
        "question": "Which three steps should be taken before moving a Cisco switch to a new VTP management domain? (Choose three.)",
        "code": null,
        "options": [
          "Configure the switch with the name of the new management domain.",
          "Reset the VTP counters to allow the switch to synchronize with the other switches in the domain.",
          "Configure the VTP server in the domain to recognize the BID of the new switch.",
          "Download the VTP database from the VTP server in the new domain.",
          "Select the correct VTP mode and version.",
          "Reboot the switch."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Configure the switch with the name of the new management domain.'."
      },
      {
        "id": "srwe_q06",
        "module": "srwe_m4",
        "question": "A network administrator is preparing the implementation of Rapid PVST+ on a production network. How are the Rapid PVST+ link types determined on the switch interfaces?",
        "code": null,
        "options": [
          "Link types can only be configured on access ports configured with a single VLAN.",
          "Link types can only be determined if PortFast has been configured.",
          "Link types are determined automatically.",
          "Link types must be configured with specific port configuration commands."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Link types are determined automatically.'."
      },
      {
        "id": "srwe_q07",
        "module": "srwe_m4",
        "question": "Compared with dynamic routes, what are two advantages of using static routes on a router? (Choose two.)",
        "code": null,
        "options": [
          "They improve netw​ork security.",
          "They take less time to converge when the network topology changes.",
          "They improve the efficiency of discovering neighboring networks.",
          "They use fewer router resources."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'They improve netw​ork security.'."
      },
      {
        "id": "srwe_q08",
        "module": "srwe_m1",
        "question": "What is the IPv6 prefix that is used for link-local addresses?",
        "code": null,
        "options": [
          "FF01::/8",
          "2001::/3",
          "FC00::/7",
          "FE80::/10"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'FE80::/10'."
      },
      {
        "id": "srwe_q09",
        "module": "srwe_m4",
        "question": "Which two statements are characteristics of routed ports on a multilayer switch? (Choose two.)​",
        "code": null,
        "options": [
          "In a switched network, they are mostly configured between switches at the core and distribution layers.",
          "The interface vlan command has to be entered to create a VLAN on routed ports.",
          "They support subinterfaces, like interfaces on the Cisco IOS routers.",
          "They are used for point-to-multipoint links.",
          "They are not associated with a particular VLAN."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'In a switched network, they are mostly configured between switches at the core and distribution layers.'."
      },
      {
        "id": "srwe_q10",
        "module": "srwe_m4",
        "question": "Successful inter-VLAN routing has been operating on a network with multiple VLANs across multiple switches for some time. When an inter-switch trunk link fails and Spanning Tree Protocol brings up a backup trunk link, it is reported that hosts on two VLANs can access some, but not all the network resources that could be accessed previously. Hosts on all other VLANS do not have this problem. What is the most likely cause of this problem?",
        "code": null,
        "options": [
          "The protected edge port function on the backup trunk interfaces has been disabled.",
          "The allowed VLANs on the backup link were not configured correctly.",
          "Dynamic Trunking Protocol on the link has failed.",
          "Inter-VLAN routing also failed when the trunk link failed."
        ],
        "correct": 1,
        "explanation": "Trunk linky v protokolu IEEE 802.1Q vkládají do Ethernet rámce 4bajtový VLAN tag s identifikátorem VID. Správná odpověď: The allowed VLANs on the backup link were not configured correctly.."
      },
      {
        "id": "srwe_q11",
        "module": "srwe_m2",
        "question": "Which command will start the process to bundle two physical interfaces to create an EtherChannel group via LACP?",
        "code": null,
        "options": [
          "interface port-channel 2",
          "channel-group 1 mode desirable",
          "interface range GigabitEthernet 0/4 - 5",
          "channel-group 2 mode auto"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'interface range GigabitEthernet 0/4 - 5'."
      },
      {
        "id": "srwe_q12",
        "module": "srwe_m1",
        "question": "What action takes place when a frame entering a switch has a multicast destination MAC address?",
        "code": null,
        "options": [
          "The switch will forward the frame out all ports except the incoming port.",
          "The switch forwards the frame out of the specified port.",
          "The switch adds a MAC address table entry mapping for the destination MAC address and the ingress port.",
          "The switch replaces the old entry and uses the more current port."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'The switch will forward the frame out all ports except the incoming port.'."
      },
      {
        "id": "srwe_q13",
        "module": "srwe_m4",
        "question": "A junior technician was adding a route to a LAN router. A traceroute to a device on the new network revealed a wrong path and unreachable status. What should be done or checked?",
        "code": null,
        "options": [
          "Verify that there is not a default route in any of the edge router routing tables.",
          "Check the configuration on the floating static route and adjust the AD.",
          "Create a floating static route to that network.",
          "Check the configuration of the exit interface on the new static route."
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Check the configuration of the exit interface on the new static route.'."
      },
      {
        "id": "srwe_q14",
        "module": "srwe_m2",
        "question": "Select the three PAgP channel establishment modes. (Choose three.)",
        "code": null,
        "options": [
          "auto",
          "default",
          "passive",
          "desirable",
          "extended",
          "on"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'auto'."
      },
      {
        "id": "srwe_q15",
        "module": "srwe_m4",
        "question": "A static route has been configured on a router. However, the destination network no longer exists. What should an administrator do to remove the static route from the routing table?",
        "code": null,
        "options": [
          "Remove the route using the no ip route command.",
          "Change the administrative distance for that route.",
          "Change the routing metric for that route.",
          "Nothing. The static route will go away on its own."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Remove the route using the no ip route command.'."
      },
      {
        "id": "srwe_q16",
        "module": "srwe_m4",
        "question": "A network administrator is adding a new WLAN on a Cisco 3500 series WLC. Which tab should the administrator use to create a new VLAN interface to be used for the new WLAN?",
        "code": null,
        "options": [
          "WIRELESS",
          "MANAGEMENT",
          "CONTROLLER",
          "WLANs"
        ],
        "correct": 2,
        "explanation": "Trunk linky v protokolu IEEE 802.1Q vkládají do Ethernet rámce 4bajtový VLAN tag s identifikátorem VID. Správná odpověď: CONTROLLER."
      },
      {
        "id": "srwe_q17",
        "module": "srwe_m4",
        "question": "A network administrator is configuring a WLAN. Why would the administrator change the default DHCP IPv4 addresses on an AP?",
        "code": null,
        "options": [
          "to restrict access to the WLAN by authorized, authenticated users only",
          "to monitor the operation of the wireless network",
          "to reduce outsiders intercepting data or accessing the wireless network by using a well-known address range",
          "to reduce the risk of interference by external devices such as microwave ovens"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'to reduce outsiders intercepting data or accessing the wireless network by using a well-known address range'."
      },
      {
        "id": "srwe_q18",
        "module": "srwe_m4",
        "question": "Which two functions are performed by a WLC when using split media access control (MAC)? (Choose two.)",
        "code": null,
        "options": [
          "packet acknowledgments and retransmissions",
          "frame queuing and packet prioritization",
          "beacons and probe responses",
          "frame translation to other protocols",
          "association and re-association of roaming clients"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'frame translation to other protocols'."
      },
      {
        "id": "srwe_q19",
        "module": "srwe_m2",
        "question": "On what switch ports should BPDU guard be enabled to enhance STP stability?",
        "code": null,
        "options": [
          "all PortFast-enabled ports",
          "only ports that are elected as designated ports",
          "only ports that attach to a neighboring switch",
          "all trunk ports that are not root ports"
        ],
        "correct": 0,
        "explanation": "Spanning Tree Protocol (STP 802.1D / RSTP 802.1w) brání vzniku přepínacích smyček zablokováním redundantních portů. Správná odpověď: all PortFast-enabled ports."
      },
      {
        "id": "srwe_q20",
        "module": "srwe_m1",
        "question": "Which network attack is mitigated by enabling BPDU guard?",
        "code": null,
        "options": [
          "rogue switches on a network",
          "CAM table overflow attacks",
          "MAC address spoofing",
          "rogue DHCP servers on a network"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'rogue switches on a network'."
      },
      {
        "id": "srwe_q21",
        "module": "srwe_m1",
        "question": "Why is DHCP snooping required when using the Dynamic ARP Inspection feature?",
        "code": null,
        "options": [
          "It relies on the settings of trusted and untrusted ports set by DHCP snooping.",
          "It uses the MAC address table to verify the default gateway IP address.",
          "It redirects ARP requests to the DHCP server for verification.",
          "It uses the MAC-address-to-IP-address binding database to validate an ARP packet."
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'It uses the MAC-address-to-IP-address binding database to validate an ARP packet.'."
      },
      {
        "id": "srwe_q22",
        "module": "srwe_m1",
        "question": "A company has just switched to a new ISP. The ISP has completed and checked the connection from its site to the company. However, employees at the company are not able to access the internet. What should be done or checked?",
        "code": null,
        "options": [
          "Verify that the static route to the server is present in the routing table.",
          "Check the configuration on the floating static route and adjust the AD.",
          "Ensure that the old default route has been removed from the company edge routers.",
          "Create a floating static route to that network."
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Ensure that the old default route has been removed from the company edge routers.'."
      },
      {
        "id": "srwe_q23",
        "module": "srwe_m1",
        "question": "Which information does a switch use to populate the MAC address table?",
        "code": null,
        "options": [
          "the destination MAC address and the incoming port",
          "the destination MAC address and the outgoing port",
          "the source and destination MAC addresses and the incoming port",
          "the source and destination MAC addresses and the outgoing port",
          "the source MAC address and the incoming port",
          "the source MAC address and the outgoing port"
        ],
        "correct": 4,
        "explanation": "Nástroj macof zaplaví přepínač falešnými MAC adresami (MAC Table Overflow attack), což způsobí přetečení CAM tabulky a přepnutí do režimu hubu (fail-open flooding). Správná odpověď: the source MAC address and the incoming port."
      },
      {
        "id": "srwe_q24",
        "module": "srwe_m4",
        "question": "What action takes place when a frame entering a switch has a unicast destination MAC address appearing in the MAC address table?",
        "code": null,
        "options": [
          "The switch updates the refresh timer for the entry.",
          "The switch forwards the frame out of the specified port.",
          "The switch purges the entire MAC address table.",
          "The switch replaces the old entry and uses the more current port."
        ],
        "correct": 1,
        "explanation": "Nástroj macof zaplaví přepínač falešnými MAC adresami (MAC Table Overflow attack), což způsobí přetečení CAM tabulky a přepnutí do režimu hubu (fail-open flooding). Správná odpověď: The switch forwards the frame out of the specified port.."
      },
      {
        "id": "srwe_q25",
        "module": "srwe_m4",
        "question": "The exhibit shows two PCs called PC A and PC B, two routes called R1 and R2, and two switches. PC A has the address 172.16.1.1/24 and is connected to a switch and into an interface on R1 that has the IP address 172.16.1.254. PC B has the address 172.16.2.1/24 and is connected to a switch that is connected to another interface on R1 with the IP address 172.16.2.254. The serial interface on R1 has the address 172.16.3.1 and is connected to the serial interface on R2 that has the address 172.16.3.2/24. R2 is connected to the internet cloud. Which command will create a static route on R2 in order to reach PC B?\n\n\n\n\nR2(config)# ip route 172.16.2.1 255.255.255.0 172.16.3.1\nR2(config)# ip route 172.16.2.0 255.255.255.0 172.16.2.254\nR2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1\nR2(config)# ip route 172.16.3.0 255.255.255.0 172.16.2.254\n\nExplanation: Topic 15.2.1\n\nThe correct syntax is:\n\nrouter(config)# ip route destination-network destination-mask {next-hop-ip-address | exit-interface}\n\nIf the local exit interface instead of the next-hop IP address is used then the route will be displayed as a directly connected route instead of a static route in the routing table. Because the network to be reached is 172.16.2.0 and the next-hop IP address is 172.16.3.1, the command is R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1\n\n65. What protocol or technology allows data to transmit over redundant switch links?",
        "code": null,
        "options": [
          "EtherChannel",
          "DTP",
          "STP",
          "VTP"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'EtherChannel'."
      },
      {
        "id": "srwe_q26",
        "module": "srwe_m1",
        "question": "What would be the primary reason an attacker would launch a MAC address overflow attack?",
        "code": null,
        "options": [
          "so that the switch stops forwarding traffic",
          "so that legitimate hosts cannot obtain a MAC address",
          "so that the attacker can see frames that are destined for other hosts",
          "so that the attacker can execute arbitrary code on the switch"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'so that the attacker can see frames that are destined for other hosts'."
      },
      {
        "id": "srwe_q27",
        "module": "srwe_m1",
        "question": "During the AAA process, when will authorization be implemented?",
        "code": null,
        "options": [
          "Immediately after successful authentication against an AAA data source",
          "Immediately after AAA accounting and auditing receives detailed reports",
          "Immediately after an AAA client sends authentication information to a centralized server",
          "Immediately after the determination of which resources a user can access"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Immediately after successful authentication against an AAA data source'."
      },
      {
        "id": "srwe_q28",
        "module": "srwe_m1",
        "question": "A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?",
        "code": null,
        "options": [
          "auto secure MAC addresses",
          "dynamic secure MAC addresses",
          "static secure MAC addresses",
          "sticky secure MAC addresses"
        ],
        "correct": 3,
        "explanation": "Nástroj macof zaplaví přepínač falešnými MAC adresami (MAC Table Overflow attack), což způsobí přetečení CAM tabulky a přepnutí do režimu hubu (fail-open flooding). Správná odpověď: sticky secure MAC addresses."
      },
      {
        "id": "srwe_q29",
        "module": "srwe_m1",
        "question": "Which three Wi-Fi standards operate in the 2.4GHz range of frequencies? (Choose three.)",
        "code": null,
        "options": [
          "802.11a",
          "802.11b",
          "802.11g",
          "802.11n",
          "802.11ac"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: '802.11b'."
      },
      {
        "id": "srwe_q30",
        "module": "srwe_m2",
        "question": "To obtain an overview of the spanning tree status of a switched network, a network engineer issues the show spanning-tree command on a switch. Which two items of information will this command display? (Choose two.)",
        "code": null,
        "options": [
          "The root bridge BID.",
          "The role of the ports in all VLANs.",
          "The status of native VLAN ports.",
          "The number of broadcasts received on each root port.",
          "The IP address of the management VLAN interface."
        ],
        "correct": 0,
        "explanation": "Spanning Tree Protocol (STP 802.1D / RSTP 802.1w) brání vzniku přepínacích smyček zablokováním redundantních portů. Správná odpověď: The root bridge BID.."
      },
      {
        "id": "srwe_q31",
        "module": "srwe_m1",
        "question": "Which two protocols are used to provide server-based AAA authentication? (Choose two.)",
        "code": null,
        "options": [
          "802.1x",
          "SSH",
          "SNMP",
          "TACACS+",
          "RADIUS"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'TACACS+'."
      },
      {
        "id": "srwe_q32",
        "module": "srwe_m4",
        "question": "A network administrator is configuring a WLAN. Why would the administrator disable the broadcast feature for the SSID?",
        "code": null,
        "options": [
          "to eliminate outsiders scanning for available SSIDs in the area",
          "to reduce the risk of interference by external devices such as microwave ovens",
          "to reduce the risk of unauthorized APs being added to the network",
          "to provide privacy and integrity to wireless traffic by using encryption"
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'to eliminate outsiders scanning for available SSIDs in the area'."
      },
      {
        "id": "srwe_q33",
        "module": "srwe_m1",
        "question": "Which mitigation technique would prevent rogue servers from providing false IP configuration parameters to clients?",
        "code": null,
        "options": [
          "implementing port security",
          "turning on DHCP snooping",
          "disabling CDP on edge ports",
          "implementing port-security on edge ports"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'turning on DHCP snooping'."
      },
      {
        "id": "srwe_q34",
        "module": "srwe_m1",
        "question": "A network administrator configures the port security feature on a switch. The security policy specifies that each access port should allow up to two MAC addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC address is dropped and a notification is sent to the syslog server. Which security violation mode should be configured for each access port?",
        "code": null,
        "options": [
          "shutdown",
          "restrict",
          "warning",
          "protect"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'restrict'."
      },
      {
        "id": "srwe_q35",
        "module": "srwe_m4",
        "question": "What protocol or technology defines a group of routers, one of them defined as active and another one as standby?",
        "code": null,
        "options": [
          "EtherChannel",
          "VTP",
          "HSRP",
          "DTP"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'HSRP'."
      },
      {
        "id": "srwe_q36",
        "module": "srwe_m4",
        "question": "A technician is configuring a router for a small company with multiple WLANs and doesn't need the complexity of a dynamic routing protocol. What should be done or checked?",
        "code": null,
        "options": [
          "Verify that there is not a default route in any of the edge router routing tables.",
          "Create static routes to all internal networks and a default route to the internet.",
          "Create extra static routes to the same location with an AD of 1.",
          "Check the statistics on the default route for oversaturation."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Create static routes to all internal networks and a default route to the internet.'."
      },
      {
        "id": "srwe_q37",
        "module": "srwe_m4",
        "question": "A company is deploying a wireless network in the distribution facility in a Boston suburb. The warehouse is quite large and it requires multiple access points to be used. Because some of the company devices still operate at 2.4GHz, the network administrator decides to deploy the 802.11g standard. Which channel assignments on the multiple access points will make sure that the wireless channels are not overlapping?",
        "code": null,
        "options": [
          "channels 1, 5, and 9",
          "channels 1, 6, and 11",
          "channels 1, 7, and 13",
          "channels 2, 6, and 10"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'channels 1, 6, and 11'."
      },
      {
        "id": "srwe_q38",
        "module": "srwe_m1",
        "question": "A network administrator of a small advertising company is configuring WLAN security by using the WPA2 PSK method. Which credential do office users need in order to connect their laptops to the WLAN?",
        "code": null,
        "options": [
          "the company username and password through Active Directory service",
          "a key that matches the key on the AP",
          "a user passphrase",
          "a username and password configured on the AP"
        ],
        "correct": 1,
        "explanation": "Zabezpečení WPA2 využívající šifrování AES (šifra CCMP) je standardem pro bezpečné bezdrátové sítě WLAN. Správná odpověď: a key that matches the key on the AP."
      },
      {
        "id": "srwe_q39",
        "module": "srwe_m4",
        "question": "A network engineer is troubleshooting a newly deployed wireless network that is using the latest 802.11 standards. When users access high bandwidth services such as streaming video, the wireless network performance is poor. To improve performance the network engineer decides to configure a 5 Ghz frequency band SSID and train users to use that SSID for streaming media services. Why might this solution improve the wireless network performance for that type of service?",
        "code": null,
        "options": [
          "Requiring the users to switch to the 5 GHz band for streaming media is inconvenient and will result in fewer users accessing these services.",
          "The 5 GHz band has more channels and is less crowded than the 2.4 GHz band, which makes it more suited to streaming multimedia.",
          "The 5 GHz band has a greater range and is therefore likely to be interference-free.",
          "The only users that can switch to the 5 GHz band will be those with the latest wireless NICs, which will reduce usage."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'The 5 GHz band has more channels and is less crowded than the 2.4 GHz band, which makes it more suited to streaming multimedia.'."
      },
      {
        "id": "srwe_q40",
        "module": "srwe_m3",
        "question": "Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?",
        "code": null,
        "options": [
          "broadcast DHCPACK",
          "broadcast DHCPREQUEST",
          "unicast DHCPACK",
          "unicast DHCPREQUEST"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'broadcast DHCPREQUEST'."
      },
      {
        "id": "srwe_q41",
        "module": "srwe_m1",
        "question": "Match the purpose with its DHCP message type. (Not all options are used.)\n\n\n\nExplanation: Topic 7.1.3\n\n\n\n\nDHCPREQUEST\nA message that is used to locate any available DHCP server on a network\n\n\nDHCPOFFER\nA message that is used to suggest a lease to a client\n\n\nDHCPDISCOVER\nA message that is used to identify the explicit server and lease offer to accept\n\n\nDHCPNAK\nA message that is used to acknowledge that the lease is successful\n\n\nDHCPACK\nA message is used by a server to finalize a successful lease with a client\n\n\n\n \n\n\n\n94. Which protocol adds security to remote connections?",
        "code": null,
        "options": [
          "FTP",
          "HTTP",
          "NetBEUI",
          "POP",
          "SSH"
        ],
        "correct": 4,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'SSH'."
      },
      {
        "id": "srwe_q42",
        "module": "srwe_m1",
        "question": "What protocol should be disabled to help mitigate VLAN attacks?",
        "code": null,
        "options": [
          "CDP",
          "ARP",
          "STP",
          "DTP"
        ],
        "correct": 3,
        "explanation": "Trunk linky v protokolu IEEE 802.1Q vkládají do Ethernet rámce 4bajtový VLAN tag s identifikátorem VID. Správná odpověď: DTP."
      },
      {
        "id": "srwe_q43",
        "module": "srwe_m1",
        "question": "What protocol or technology requires switches to be in server mode or client mode?",
        "code": null,
        "options": [
          "EtherChannel",
          "STP",
          "VTP",
          "DTP"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'VTP'."
      },
      {
        "id": "srwe_q44",
        "module": "srwe_m1",
        "question": "What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)",
        "code": null,
        "options": [
          "to create fewer collision domains",
          "to enhance user bandwidth",
          "to create more broadcast domains",
          "to eliminate virtual circuits",
          "to isolate traffic between segments",
          "to isolate ARP request messages from the rest of the network"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'to enhance user bandwidth'."
      },
      {
        "id": "srwe_q45",
        "module": "srwe_m4",
        "question": "What command will enable a router to begin sending messages that allow it to configure a link-local address without using an IPv6 DHCP server?",
        "code": null,
        "options": [
          "a static route",
          "the ipv6 route ::/0 command",
          "the ipv6 unicast-routing command",
          "the ip routing command"
        ],
        "correct": 2,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'the ipv6 unicast-routing command'."
      },
      {
        "id": "srwe_q46",
        "module": "srwe_m4",
        "question": "A network administrator is using the router-on-a-stick model to configure a switch and a router for inter-VLAN routing. What configuration should be made on the switch port that connects to the router?",
        "code": null,
        "options": [
          "Configure it as a trunk port and allow only untagged traffic.",
          "Configure the port as an access port and a member of VLAN1.",
          "Configure the port as an 802.1q trunk port.",
          "Configure the port as a trunk port and assign it to VLAN1."
        ],
        "correct": 2,
        "explanation": "Trunk linky v protokolu IEEE 802.1Q vkládají do Ethernet rámce 4bajtový VLAN tag s identifikátorem VID. Správná odpověď: Configure the port as an 802.1q trunk port.."
      },
      {
        "id": "srwe_q47",
        "module": "srwe_m1",
        "question": "What are three techniques for mitigating VLAN attacks? (Choose three.)",
        "code": null,
        "options": [
          "Use private VLANs.",
          "Enable BPDU guard.",
          "Enable trunking manually",
          "Enable Source Guard.",
          "Disable DTP. Set the native VLAN to an unused VLAN."
        ],
        "correct": 2,
        "explanation": "Trunk linky v protokolu IEEE 802.1Q vkládají do Ethernet rámce 4bajtový VLAN tag s identifikátorem VID. Správná odpověď: Enable trunking manually."
      },
      {
        "id": "srwe_q48",
        "module": "srwe_m3",
        "question": "Match the DHCP message types to the order of the DHCPv4 process. (Not all options are used.)\n\n\n\n\n\n\nStep 1\nDHCPDISCOVER\n\n\nStep 2\nDHCPOFFER\n\n\nStep 3\nDHCPREQUEST\n\n\nStep 4\nDHCPACK\n\n\n\nExplanation: Topic 7.1.3\n\nThe broadcast DHCPDISCOVER message finds DHCPv4 servers on the network. When the DHCPv4 server receives a DHCPDISCOVER message, it reserves an available IPv4 address to lease to the client and sends the unicast DHCPOFFER message to the requesting client. When the client receives the DHCPOFFER from the server, it sends back a DHCPREQUEST. On receiving the DHCPREQUEST message the server replies with a unicast DHCPACK message. DHCPREPLY and DHCPINFORMATION-REQUEST are DHCPv6 messages.\n\n109. In which situation would a technician use the show interfaces switch command?",
        "code": null,
        "options": [
          "to determine if remote access is enabled",
          "when packets are being dropped from a particular directly attached host",
          "when an end device can reach local devices, but not remote devices",
          "to determine the MAC address of a directly attached network device on a particular interface"
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'when packets are being dropped from a particular directly attached host'."
      },
      {
        "id": "srwe_q49",
        "module": "srwe_m1",
        "question": "What is a drawback of the local database method of securing device access that can be solved by using AAA with centralized servers?",
        "code": null,
        "options": [
          "There is no ability to provide accountability.",
          "User accounts must be configured locally on each device, which is an unscalable authentication solution.",
          "It is very susceptible to brute-force attacks because there is no username.",
          "The passwords can only be stored in plain text in the running configuration."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'User accounts must be configured locally on each device, which is an unscalable authentication solution.'."
      },
      {
        "id": "srwe_q50",
        "module": "srwe_m3",
        "question": "What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?",
        "code": null,
        "options": [
          "It sends a DHCPREQUEST that identifies which lease offer the client is accepting.",
          "It sends a DHCPNAK and begins the DHCP process over again.",
          "It discards both offers and sends a new DHCPDISCOVER.",
          "It accepts both DHCPOFFER messages and sends a DHCPACK."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'It sends a DHCPREQUEST that identifies which lease offer the client is accepting.'."
      },
      {
        "id": "srwe_q51",
        "module": "srwe_m1",
        "question": "A network administrator has found a user sending a double-tagged 802.1Q frame to a switch. What is the best solution to prevent this type of attack?",
        "code": null,
        "options": [
          "The native VLAN number used on any trunk should be one of the active data VLANs.",
          "The VLANs for user access ports should be different VLANs than any native VLANs used on trunk ports.",
          "Trunk ports should be configured with port security.",
          "Trunk ports should use the default VLAN as the native VLAN number."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'The VLANs for user access ports should be different VLANs than any native VLANs used on trunk ports.'."
      },
      {
        "id": "srwe_q52",
        "module": "srwe_m1",
        "question": "A new switch is to be added to an existing network in a remote office. The network administrator does not want the technicians in the remote office to be able to add new VLANs to the switch, but the switch should receive VLAN updates from the VTP domain. Which two steps must be performed to configure VTP on the new switch to meet these conditions? (Choose two.)",
        "code": null,
        "options": [
          "Configure the new switch as a VTP client.",
          "Configure the existing VTP domain name on the new switch.",
          "Configure an IP address on the new switch.",
          "Configure all ports of both switches to access mode.",
          "Enable VTP pruning."
        ],
        "correct": 0,
        "explanation": "Trunk linky v protokolu IEEE 802.1Q vkládají do Ethernet rámce 4bajtový VLAN tag s identifikátorem VID. Správná odpověď: Configure the new switch as a VTP client.."
      },
      {
        "id": "srwe_q53",
        "module": "srwe_m1",
        "question": "What is the effect of entering the ip dhcp snooping configuration command on a switch?",
        "code": null,
        "options": [
          "It enables DHCP snooping globally on a switch.",
          "It enables PortFast globally on a switch.",
          "It disables DTP negotiations on trunking ports.",
          "It manually enables a trunk link."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'It enables DHCP snooping globally on a switch.'."
      },
      {
        "id": "srwe_q54",
        "module": "srwe_m1",
        "question": "What is a result of connecting two or more switches together?",
        "code": null,
        "options": [
          "The number of broadcast domains is increased.",
          "The size of the broadcast domain is increased.",
          "The number of collision domains is reduced.",
          "The size of the collision domain is increased."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'The size of the broadcast domain is increased.'."
      },
      {
        "id": "srwe_q55",
        "module": "srwe_m1",
        "question": "Branch users were able to access a site in the morning but have had no connectivity with the site since lunch time. What should be done or checked?",
        "code": null,
        "options": [
          "Verify that the static route to the server is present in the routing table.",
          "Use the \"show ip interface brief\" command to see if an interface is down.",
          "Check the configuration on the floating static route and adjust the AD.",
          "Create a floating static route to that network."
        ],
        "correct": 0,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Verify that the static route to the server is present in the routing table.'."
      },
      {
        "id": "srwe_q56",
        "module": "srwe_m1",
        "question": "What is the effect of entering the switchport port-security configuration command on a switch?",
        "code": null,
        "options": [
          "It dynamically learns the L2 address and copies it to the running configuration.",
          "It enables port security on an interface.",
          "It enables port security globally on the switch.",
          "It restricts the number of discovery messages, per second, to be received on the interface."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'It enables port security on an interface.'."
      },
      {
        "id": "srwe_q57",
        "module": "srwe_m4",
        "question": "A network administrator is configuring a WLAN. Why would the administrator use multiple lightweight APs?",
        "code": null,
        "options": [
          "to centralize management of multiple WLANs",
          "to monitor the operation of the wireless network",
          "to provide prioritized service for time-sensitive applications",
          "to facilitate group configuration and management of multiple WLANs through a WLC"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'to facilitate group configuration and management of multiple WLANs through a WLC'."
      },
      {
        "id": "srwe_q58",
        "module": "srwe_m4",
        "question": "A network administrator is configuring a WLAN. Why would the administrator apply WPA2 with AES to the WLAN?",
        "code": null,
        "options": [
          "to reduce the risk of unauthorized APs being added to the network",
          "to centralize management of multiple WLANs",
          "to provide prioritized service for time-sensitive applications",
          "to provide privacy and integrity to wireless traffic by using encryption"
        ],
        "correct": 3,
        "explanation": "Zabezpečení WPA2 využívající šifrování AES (šifra CCMP) je standardem pro bezpečné bezdrátové sítě WLAN. Správná odpověď: to provide privacy and integrity to wireless traffic by using encryption."
      },
      {
        "id": "srwe_q59",
        "module": "srwe_m1",
        "question": "Users on a LAN are unable to get to a company web server but are able to get elsewhere. What should be done or checked?",
        "code": null,
        "options": [
          "Ensure that the old default route has been removed from the company edge routers.",
          "Verify that the static route to the server is present in the routing table.",
          "Check the configuration on the floating static route and adjust the AD.",
          "Create a floating static route to that network."
        ],
        "correct": 1,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'Verify that the static route to the server is present in the routing table.'."
      },
      {
        "id": "srwe_q60",
        "module": "srwe_m1",
        "question": "What IPv6 prefix is designed for link-local communication?",
        "code": null,
        "options": [
          "2001::/3",
          "ff00::/8",
          "fc::/07",
          "fe80::/10"
        ],
        "correct": 3,
        "explanation": "V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: 'fe80::/10'."
      }
    ]
  },
  "python": {
    "id": "python",
    "category": "software",
    "categoryName": "Programové vybavení",
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
    "examQuestionCount": 35,
    "questions": [
      {
        "id": "py_q01",
        "module": "py_m1",
        "question": "What is the output of the following snippet?",
        "code": null,
        "options": [
          "44",
          "4"
        ],
        "correct": 1,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 4."
      },
      {
        "id": "py_q02",
        "module": "py_m4",
        "question": "Assuming that my_tuple is a correctly crated tuple, the fact that tuples are immutable means that the following instruction:",
        "code": null,
        "options": [
          "may be illegal if the tuple contains strings",
          "is illegal",
          "can be executed if and only if the tuple contains at least two elements",
          "is full correct"
        ],
        "correct": 1,
        "explanation": "N-tice (tuples) jsou v Pythonu neměnný datový typ (immutable), proto nelze po vytvoření modifikovat jejich prvky (např. my_tuple[0] = x vyvolá TypeError). Správná odpověď: is illegal."
      },
      {
        "id": "py_q03",
        "module": "py_m4",
        "question": "Which of the following lines correctly. invoke the function defined below? (Select two answers)",
        "code": null,
        "options": [
          "fun()",
          "fun(0, 1, 2)",
          "fun(b=0, a=0)",
          "fun(b=1)"
        ],
        "correct": 1,
        "explanation": "Definice funkce v Pythonu začíná klíčovým slovem def jmeno(parametry): s odsazeným tělem. Správná odpověď: fun(0, 1, 2)."
      },
      {
        "id": "py_q04",
        "module": "py_m4",
        "question": "The meaning of a positional argument is determined by:",
        "code": null,
        "options": [
          "its position within the argument list",
          "its connection with existing variables",
          "its value",
          "the argument's name specified along with its value"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'its position within the argument list'."
      },
      {
        "id": "py_q05",
        "module": "py_m1",
        "question": "What will happen when you attempt to run the following code?",
        "code": null,
        "options": [
          "The code will raise the AttributeError exception.",
          "The code will raise the systemError exception.",
          "The code will raise the ValueError exception.",
          "The code will print Hello World to the console.",
          "The code will raise the TyepError exception."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'The code will raise the systemError exception.'."
      },
      {
        "id": "py_q06",
        "module": "py_m1",
        "question": "The following snippet:",
        "code": null,
        "options": [
          "will output 4",
          "will output None",
          "will output 2",
          "is erroneous"
        ],
        "correct": 3,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: is erroneous."
      },
      {
        "id": "py_q07",
        "module": "py_m1",
        "question": "What is the output of the following piece of code?",
        "code": null,
        "options": [
          "a b c",
          "abc",
          "asepbsepcsep",
          "asepbsepc"
        ],
        "correct": 3,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: asepbsepc."
      },
      {
        "id": "py_q08",
        "module": "py_m1",
        "question": "Which of the following sentences are true about the code? (Select two answers)",
        "code": null,
        "options": [
          "nums and vals are different names of the same list",
          "vals is longer tha nums",
          "nums and vals are different lists",
          "nums has the same length as vals"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'nums and vals are different names of the same list'."
      },
      {
        "id": "py_q09",
        "module": "py_m1",
        "question": "The result of the following division:",
        "code": null,
        "options": [
          "is equal to 0.5",
          "is equal to 0",
          "is equal to 0.0",
          "cannot be predicted"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'is equal to 0'."
      },
      {
        "id": "py_q10",
        "module": "py_m1",
        "question": "What is the expected behavior of the following program?",
        "code": null,
        "options": [
          "The program will cause a ValueError exception.",
          "The program will output 1 to the screen.",
          "The program will cause a SyntaxError exception.",
          "The program will cause a TypeError exception.",
          "The program will cause an AttributeError exception."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'The program will cause a ValueError exception.'."
      },
      {
        "id": "py_q11",
        "module": "py_m3",
        "question": "How many element does the lst list contain?",
        "code": null,
        "options": [
          "two",
          "three",
          "zero",
          "one"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'zero'."
      },
      {
        "id": "py_q12",
        "module": "py_m3",
        "question": "What is the output of the following piece of code if the user enters two lines containing 2 and 4 respectively?",
        "code": null,
        "options": [
          "4.0",
          "2.0",
          "0.0",
          "1.0"
        ],
        "correct": 1,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 2.0."
      },
      {
        "id": "py_q13",
        "module": "py_m3",
        "question": "What is the output of the following code if the user enters a 0 ?",
        "code": null,
        "options": [
          "Very bad input...",
          "Very very bad input...",
          "Bad input...",
          "Booo!",
          "0.0",
          "1.0"
        ],
        "correct": 4,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 0.0."
      },
      {
        "id": "py_q14",
        "module": "py_m1",
        "question": "What value will be assignment to the x variable?",
        "code": null,
        "options": [
          "False",
          "0",
          "1",
          "True"
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'True'."
      },
      {
        "id": "py_q15",
        "module": "py_m3",
        "question": "What is the output of the following piece of the code if the user enter two lines containing 3 and 6 respectively?",
        "code": null,
        "options": [
          "36",
          "3",
          "63",
          "6"
        ],
        "correct": 2,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 63."
      },
      {
        "id": "py_q16",
        "module": "py_m1",
        "question": "Which of the following variable names are illegal and will cause the SystemError exception? (Select two answers)",
        "code": null,
        "options": [
          "print",
          "in",
          "for",
          "in"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'in'."
      },
      {
        "id": "py_q17",
        "module": "py_m1",
        "question": "Take a look at the snippet and choose the true statement:",
        "code": null,
        "options": [
          "the snippet will cause a runtime error",
          "vals is longer than nums",
          "nums is longer than vals",
          "nums and vals have the same length"
        ],
        "correct": 3,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: nums and vals have the same length."
      },
      {
        "id": "py_q18",
        "module": "py_m3",
        "question": "What is the output of the following piece of code if the user enters two lines containing 3 and 2 respectively?",
        "code": null,
        "options": [
          "1",
          "3",
          "2",
          "0"
        ],
        "correct": 3,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 0."
      },
      {
        "id": "py_q19",
        "module": "py_m3",
        "question": "Which if the following snippets shows the correct way of handing multiple excepting in a single except clause?",
        "code": null,
        "options": [
          "except TypeError, ValueError, ZeroDivisinError:\n\n# Some code.",
          "except: (TypeError, ValueError, ZeroDivisinError)\n\n# Some code.",
          "except TypeError, ValueError, ZeroDivisinError\n\n# Some code.",
          "except: TypeError, ValueError, ZeroDivisinError\n\n# Some code.",
          "except: (TypeError, ValueError, ZeroDivisinError):\n\n# Some code.",
          "except (TypeError, ValueError, ZeroDivisinError)\n\n# Some code."
        ],
        "correct": 4,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: except: (TypeError, ValueError, ZeroDivisinError):\n\n# Some code.."
      },
      {
        "id": "py_q20",
        "module": "py_m2",
        "question": "An operator able to check two values are not equal is code as:",
        "code": null,
        "options": [
          "=/=",
          "!=",
          "<>",
          "not =="
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: '!='."
      },
      {
        "id": "py_q21",
        "module": "py_m1",
        "question": "What will be the output of the following snippet?",
        "code": null,
        "options": [
          "1 1",
          "0 0",
          "1 0",
          "0 1"
        ],
        "correct": 3,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 0 1."
      },
      {
        "id": "py_q22",
        "module": "py_m2",
        "question": "How many stars (*) will the following snippet send to the console?",
        "code": null,
        "options": [
          "zero",
          "the snippet will enter an infinite loop, printing one star per line",
          "one",
          "two"
        ],
        "correct": 1,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: the snippet will enter an infinite loop, printing one star per line."
      },
      {
        "id": "py_q23",
        "module": "py_m2",
        "question": "How many hashes (*) will the following snippet sent to the console?",
        "code": null,
        "options": [
          "nine",
          "zero",
          "three",
          "six"
        ],
        "correct": 2,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: three."
      },
      {
        "id": "py_q24",
        "module": "py_m1",
        "question": "What is true about compilation? (Select two answers)",
        "code": null,
        "options": [
          "Both you and user must have the compiler to run your code",
          "The code is converted directly into machine code executable by the processor",
          "It tends to be faster than interpretation",
          "It tends to be than interpretation\n\n\n\n\n\nThe correct answers are:\n\n\nThe code is converted directly into machine code executable by the processor\n\nCompilation translates the entire source code into machine code, which is then directly executed by the processor."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'The code is converted directly into machine code executable by the processor'."
      },
      {
        "id": "py_q25",
        "module": "py_m1",
        "question": "What is CPython?",
        "code": null,
        "options": [
          "It's the default, reference implementation of the C language, written in Python",
          "It's a programming language that is a supperset of the Python, designed to produce C-like performance with code written in Python",
          "It's the default, reference implementation of Python, written in the C language",
          "It's a programming that is a superset of the C language, designed to produce Python-like performance with code written in C",
          "The correct answer is:\n\nIt's the default, reference implementation of Python, written in the C language\n\n\nCPython is the original and most widely used implementation of the Python programming language. It is written in C and serves as the reference implementation that defines the Python language specification."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'It's the default, reference implementation of Python, written in the C language'."
      },
      {
        "id": "py_q26",
        "module": "py_m1",
        "question": "What are the four fundamental elements that make a language?",
        "code": null,
        "options": [
          "An alphabet, morphology, phonetics, and semantics",
          "An alphabet, a lexis, a syntax, and semantics",
          "An alphabet, a lexis, phonetics, and semantics",
          "An alphabet, phonetics, phonology, and semantics",
          "The correct answer is:\n\nAn alphabet, a lexis, a syntax, and semantics\n\n\nThe four fundamental elements that make up a language are:\n\n\nAlphabet: The set of symbols or characters used to write the language.",
          "Lexis: The vocabulary or set of words in the language.",
          "Syntax: The rules for structuring sentences and expressions in the language.",
          "Semantics: The meaning conveyed by the words and structures in the language."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'An alphabet, a lexis, a syntax, and semantics'."
      },
      {
        "id": "py_q27",
        "module": "py_m2",
        "question": "What do you call a file containing a program written in a high-level programming language?",
        "code": null,
        "options": [
          "A machine file",
          "A code file",
          "A target file",
          "A source file",
          "The correct answer is:\n\nA source file\n\n\nA file containing a program written in a high-level programming language is called a source file because it is the source code that needs to be compiled or interpreted to create an executable or to run the program."
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'A source file'."
      },
      {
        "id": "py_q28",
        "module": "py_m2",
        "question": "What do you call a command-line interpreter which lets you interact with your OS and execute Python commands and scripts?",
        "code": null,
        "options": [
          "An editor",
          "A console",
          "A compiler",
          "Jython",
          "The correct answer is:\n\nA console\n\n\nA console is a command-line interpreter that allows you to interact with your operating system and execute Python commands and scripts. It provides an environment for running Python code interactively or running Python scripts directly."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'A console'."
      },
      {
        "id": "py_q29",
        "module": "py_m4",
        "question": "What is the best definition of a script?",
        "code": null,
        "options": [
          "It's an error message generated by the interpreter",
          "It's an error message generated by the compiler",
          "It's a text file that contains which make up a Python program",
          "It's a text file that contains sequences of zeroes and ones",
          "The correct answer is:\n\nIt's a text file that contains which make up a Python program\n\n\nA script is a text file that contains a sequence of instructions written in a programming language like Python. These instructions (code) can be executed by an interpreter to perform specific tasks. Scripts are often used for automating tasks, data processing, or running programs."
        ],
        "correct": 2,
        "explanation": "Definice funkce v Pythonu začíná klíčovým slovem def jmeno(parametry): s odsazeným tělem. Správná odpověď: It's a text file that contains which make up a Python program."
      },
      {
        "id": "py_q30",
        "module": "py_m1",
        "question": "What is machine code?",
        "code": null,
        "options": [
          "A high-level programming language consisting of instruction lists that humans can read and understand",
          "A medium-level programming language consisting of the assembly code designed for the computer processor",
          "A low-level programming language consisting of binary digits/bits that the computer reads and understands",
          "A low-level programming language consisting of hexadecimal digits that make up high-level language instructions",
          "The correct answer is:\n\nA low-level programming language consisting of binary digits/bits that the computer reads and understands\n\n\nMachine code is the lowest level of programming language, consisting of binary digits (0s and 1s) that a computer's processor directly executes. Unlike high-level or assembly languages, machine code is not intended to be human-readable. It represents instructions in a form that the hardware can process directly."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'A low-level programming language consisting of binary digits/bits that the computer reads and understands'."
      },
      {
        "id": "py_q31",
        "module": "py_m1",
        "question": "Select the true statements. (Select two answers)",
        "code": null,
        "options": [
          "Python is a good choice for creating and executing tests for applications",
          "Python 3 is backwards compatible with Python 2",
          "Python is a good choice for low-level programming e.g., when you want to implement an effective driver",
          "Python is free, open-source, and multiplatform",
          "The correct answers are:\n\n\nPython is a good choice for creating and executing tests for applications\n\nPython's simplicity, readability, and extensive libraries make it an excellent choice for creating and executing tests for various applications."
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'Python is a good choice for creating and executing tests for applications'."
      },
      {
        "id": "py_q32",
        "module": "py_m4",
        "question": "The \\n digraph forces the print() function to:",
        "code": null,
        "options": [
          "stop its execution",
          "duplicate the character next to the digragh",
          "break the output line",
          "output exactly two characters: \\ and n\n\n\n\n\n\nThe digraph, called the newline character, causes the current line to end at the point indicated by the digraph, and creates a new line that starts right after it."
        ],
        "correct": 2,
        "explanation": "Definice funkce v Pythonu začíná klíčovým slovem def jmeno(parametry): s odsazeným tělem. Správná odpověď: break the output line."
      },
      {
        "id": "py_q33",
        "module": "py_m3",
        "question": "What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?",
        "code": null,
        "options": [
          "8.0",
          "the code will cause a runtime error",
          "4.0",
          "2.0",
          "Let's analyze this example:\n\n\nthe x variable is assigned the integer value of 2 (2 is inputted by the user, converted to a string by the input() function, and then converted to an integer by the int() function)",
          "the y variable is assigned the integer value of 4 (4 is inputted by the user, converted to a string by the input() function, and",
          "then converted to an integer by the int() function)",
          "an operation is performed resulting in the x variable being assigned the value of 0.5 (2 / 4 = 0.5)",
          "an operation is performed resulting in the y variable being assigned the value of 8.0 (4 / 0.5 = 8.0)\n\nthe value assigned to the y variable (8.0) is printed to the screen."
        ],
        "correct": 0,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 8.0."
      },
      {
        "id": "py_q34",
        "module": "py_m3",
        "question": "What is the output of the following snippet if the user enter two lines containing 2 and 4 respectively?",
        "code": null,
        "options": [
          "2",
          "24",
          "4",
          "6"
        ],
        "correct": 3,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 6."
      },
      {
        "id": "py_q35",
        "module": "py_m1",
        "question": "Which of the following variable names are illegal? (Select two answers)",
        "code": null,
        "options": [
          "true",
          "and",
          "TRUE",
          "True",
          "True and and are Python keywords (reserved words), and they cannot be used as variable names. And since Python is case-sensitive, the names true and TRUE are perfectly legal, though not necessarily the best names."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'and'."
      },
      {
        "id": "py_q36",
        "module": "py_m2",
        "question": "The ** operator:",
        "code": null,
        "options": [
          "does not exist",
          "performs duplicated multiplication",
          "performs exponentiation",
          "perform floating-point multiplication",
          "The ** operator performs the exponent arithmetic in Python. It is also called the power operator."
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'performs exponentiation'."
      },
      {
        "id": "py_q37",
        "module": "py_m1",
        "question": "The value twenty point twelve times ten raised to the power of eight should be written as:",
        "code": null,
        "options": [
          "20.12*10^8",
          "20E12.8",
          "20.12E8.0",
          "20.12E8",
          "Keeping in mind that Python chooses the most efficient format for presenting numbers, and the letter E is used to mean ten to the power of in scientific notation, the correct way of writing the number 20.12 × 108 is 20.12E8."
        ],
        "correct": 3,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: '20.12E8'."
      },
      {
        "id": "py_q38",
        "module": "py_m4",
        "question": "The print() function can output values of:",
        "code": null,
        "options": [
          "not more than five arguments",
          "any number of arguments (including zero)",
          "any number of arguments (excluding zero)",
          "just one argument",
          "The print() function can take no arguments at all (e.g. print()), three arguments (e.g. print(\"one\", \"two\", \"three\"), or three thousand three hundred thirty three… (though we haven't actually checked it!)."
        ],
        "correct": 1,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: any number of arguments (including zero)."
      },
      {
        "id": "py_q39",
        "module": "py_m3",
        "question": "What is the output of the following snippet if the user enters two lines containing 3 and 6 respectively?",
        "code": null,
        "options": [
          "333333",
          "36",
          "18",
          "666",
          "Let's analyze this example:\n\n\nthe x variable is assigned the value of \"3\" (3 is inputted by the user and converted to a string by the input() function)",
          "the y variable is assigned the value of 6 (6 is inputted by the user, converted to a string by the input() function, and then converted to an integer by the int() function)",
          "the print() function outputs the result of the following string multiplication: \"3\" * 6, that is 333333"
        ],
        "correct": 0,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 333333."
      },
      {
        "id": "py_q40",
        "module": "py_m1",
        "question": "is equal to :",
        "code": null,
        "options": [
          "0.0",
          "0",
          "4.5",
          "0.166666666666666666",
          "Left-sided binding means that the expression is evaluated from left to right: 1 // 2 = 0, and 0 * 3 = 0."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: '0'."
      },
      {
        "id": "py_q41",
        "module": "py_m1",
        "question": "Which of the following statements are true? (Select two answers)",
        "code": null,
        "options": [
          "The result of the / operator is always an integer value.",
          "The ** operator uses right-sided binding.",
          "Adding precedes multiplication.",
          "The right argument of the % operator cannot be zero.",
          "The % operator (modulus) returns the remainder of a division, and because you cannot divide by zero, the right operand must be a non-zero number. Otherwise, a ZeroDivisionException will be raised.\n\nThe ** operator uses right-sided binding, which means the expression 2**2**3 is evaluated from right to left: 2**3 = 8, and 2**8 = 256."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'The ** operator uses right-sided binding.'."
      },
      {
        "id": "py_q42",
        "module": "py_m4",
        "question": "The meaning of the keyword parameter is determined by:",
        "code": null,
        "options": [
          "its value",
          "the argument's name specified along with its value",
          "its connection with existing variables",
          "its position within the argument list",
          "Keyword parameters (also called named parameters) are parameters that have values determined by a keyword name followed by an equals sign (=) and a default value assigned to that keyword name. An example of a keyword argument: def my_function(x=1):."
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'the argument's name specified along with its value'."
      },
      {
        "id": "py_q43",
        "module": "py_m1",
        "question": "After execution of the following snippet, the sum of the all vals elements will equal to:",
        "code": null,
        "options": [
          "3",
          "4",
          "2",
          "5"
        ],
        "correct": 1,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: 4."
      },
      {
        "id": "py_q44",
        "module": "py_m2",
        "question": "How many hashes(#) will the following snippet send to the console?",
        "code": null,
        "options": [
          "zero",
          "three",
          "two",
          "one"
        ],
        "correct": 2,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: two."
      },
      {
        "id": "py_q45",
        "module": "py_m1",
        "question": "Take a look at the snippet, and choose the true statements: (Select two answer)",
        "code": null,
        "options": [
          "nums is longer than vals",
          "nums and vals are of the same length",
          "nums and vals refer to the same list",
          "nums is replicated and assigned to vals"
        ],
        "correct": 1,
        "explanation": "Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: nums and vals are of the same length."
      },
      {
        "id": "py_q46",
        "module": "py_m1",
        "question": "What value will be assigned to the x variable?",
        "code": null,
        "options": [
          "1",
          "0",
          "True",
          "False"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'True'."
      },
      {
        "id": "py_q47",
        "module": "py_m1",
        "question": "Which of the following sentences are true? (Select two answers)",
        "code": null,
        "options": [
          "nums and vals are two different lists",
          "vals is longer than nums",
          "nums and vals are of the same length",
          "numsis longer than vals"
        ],
        "correct": 0,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'nums and vals are two different lists'."
      },
      {
        "id": "py_q48",
        "module": "py_m2",
        "question": "An operator able to check whether two values are equal is code as:",
        "code": null,
        "options": [
          "=",
          "!=",
          "==",
          "==="
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: '=='."
      },
      {
        "id": "py_q49",
        "module": "py_m1",
        "question": "The second assignment:",
        "code": null,
        "options": [
          "doesn't change the list",
          "reverses the list",
          "shortens the list",
          "extends the list"
        ],
        "correct": 1,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'reverses the list'."
      },
      {
        "id": "py_q50",
        "module": "py_m1",
        "question": "The value eventually assigned to x is equal to :",
        "code": null,
        "options": [
          "0",
          "1",
          "True",
          "False"
        ],
        "correct": 2,
        "explanation": "Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: 'True'."
      }
    ]
  }
};
