/**
 * Authentic Question Banks & Explanations
 * Official Cisco NetAcad, Skills for All, OpenEDG & LPI
 */

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
        "explanation": "To begin writing an HTML document, the first logical step is to create a file with the .html extension, as this specifies the file type and allows browsers to interpret it as an HTML document. Other steps, like adding tags or setting character encoding, come after the file is created."
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
        "explanation": "The <head> section of an HTML document contains metadata such as keywords, descriptions, the document title, and links to stylesheets or scripts. This information is not displayed on the webpage but helps with functionality and SEO."
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
        "explanation": "The <meta> element is used to define the document's character encoding, typically through the attribute charset (e.g., <meta charset=\"UTF-8\">). This ensures proper rendering of text, including special characters, across different languages."
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
        "explanation": "The snippet <!-- section-id=\"101-eng\" --> is an HTML comment. Comments are ignored by browsers and serve only as notes or explanations for developers to make the code easier to understand or maintain."
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
        "explanation": "In HTML semantics, an element refers to the combination of an opening tag, its content, and a closing tag (e.g., <p>Content</p>). It defines the structure and meaning of the content within the document."
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
        "explanation": "A block-level element, like <div>, takes up the full width of its parent container and starts on a new line. Other options, such as <img> and <span>, are inline elements, while <br> is used solely for line breaks and does not behave as a block-level element."
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
        "explanation": "The <strong> tag semantically emphasizes text by marking it as important. While <b> only applies visual bold styling, <em> is for emphasis, and <mark> highlights text without denoting importance. <strong> conveys both importance and typically applies bold styling."
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
        "explanation": "The <blockquote> element is used for block-level quotations, and the <footer> element is appropriate for providing the source or citation of the quote. The <cite> tag semantically identifies the source as a citation, ensuring proper markup and accessibility."
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
        "explanation": "Using <p> tags for separating ideas and <br> for line breaks within the same address block is correct. This ensures semantic clarity, as <br> introduces a break within a single block, while <p> separates distinct ideas or content sections."
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
        "explanation": "This code correctly nests an unordered list (<ul>) within an ordered list (<ol>), with proper structure and closure of all tags. Nested lists must be contained within a <li> element of the parent list."
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
        "explanation": "This snippet correctly places an empty <th> in the top-left corner, ensuring that both the top and left headers are <th> elements, making the table more accessible and properly structured."
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
        "explanation": "The rowspan attribute is used to merge cells vertically in an HTML table. Setting rowspan=\"2\" tells the browser that the cell spans two rows. Similarly, colspan is used for horizontal merging, not vertical. CSS does not have a direct property for merging table cells."
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
        "explanation": "The <pre> tag is used to display preformatted text, which means that it preserves the spaces, tabs, and line breaks exactly as written in the HTML. It does not apply any special styling like bold or highlighting unless explicitly specified via CSS."
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
        "explanation": "The srcset attribute in an <img> tag allows you to specify multiple image sources and their associated sizes (e.g., 1000w for 1000 pixels wide). This helps the browser select the most appropriate image based on the viewport size and resolution, optimizing performance and visual quality."
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
        "explanation": "The href=\"#section2\" in the <a> tag creates an anchor link that points to an element with the matching id=\"section2\". When clicked, it scrolls the page to that element, enabling navigation within the same webpage. It does not refresh the page, open a popup, or redirect to a new page."
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
        "explanation": "The loop attribute in an HTML <video> tag causes the video to replay automatically after it ends. This is a boolean attribute, so simply including it (e.g., <video loop>) is sufficient; no additional values are required. Other options like src=\"loop\" or repeat=\"true\" are invalid."
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
        "explanation": "The <label> element links descriptive text to a form control, improving accessibility by helping screen readers associate the label with the input field. The for attribute connects the label to the input using the id of the input element. This makes the form more user-friendly for everyone, including those relying on assistive technologies."
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
        "explanation": "To pre-select the \"Canada\" option in the dropdown, you can modify the <option> for Canada like this:\n\n<option value=\"canada\" selected>Canada</option>\n\nThe selected attribute indicates that this option should be the default selection when the page loads."
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
        "explanation": "The required attribute is used to indicate that an input field must be filled out before submitting the form. The correct syntax is to include the required attribute directly in the <input> tag. The other options either use incorrect syntax or place the required attribute improperly."
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
        "explanation": "The mailto: scheme in the href attribute is used to create a link that opens the user's default email client with the specified email address. The correct syntax is <a The other options use incorrect schemes or attributes that won't trigger the email client."
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
        "explanation": "The <fieldset> element is used to group related form elements, typically with a <legend> tag to provide a title for the group. This helps organize forms logically and improves accessibility. It is not used for styling, encryption, or customizing buttons."
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
        "explanation": "To apply inline styling, the style attribute is used within the HTML tag. The correct property for changing text color is color, and the value red sets the text color to red. The other options use incorrect attributes or syntax"
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
        "explanation": "To change the background color of all <div> elements using an internal stylesheet, you should use the background-color property. The correct syntax is div {background-color: blue;}. The other options are either incorrect (e.g., using color for text color or #div for an ID selector) or do not specifically target the background color properly."
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
        "explanation": "To correctly set the font size to 16 pixels and the font family to Arial, you use the font-size property with the value 16px and the font-family property with the value Arial. The other options either use incorrect units (like rem or font shorthand) or miss the required syntax for proper font styling."
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
        "explanation": "The <div> element is a block-level element, meaning it can contain other block-level elements and takes up the full width of its container. The <span> element, on the other hand, is an inline element, used for styling small portions of text or inline content without breaking the flow. The two are not interchangeable as they serve different purposes in terms of layout"
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
        "explanation": "In CSS, a class is selected using a period (.) followed by the class name. Therefore, .highlight-this correctly selects all elements with the class highlight-this and applies the color: yellow; style. The other options are incorrect as they either use an invalid syntax for class selection or reference an ID selector (#) instead of a class."
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
        "explanation": "The class attribute can be used on multiple elements across a page, allowing you to apply the same styles or JavaScript behavior to several elements. The id attribute, on the other hand, must be unique within a document, meaning it can only be used for a single element."
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
        "explanation": "To apply multiple classes to a single HTML element, you separate the class names with a space within the class attribute. The other options use incorrect syntax, such as using commas or multiple class attributes, which are not valid in HTML."
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
        "explanation": "The title attribute provides additional information about an element, which is displayed as a tooltip when the user hovers their mouse over the element. It does not serve as a unique identifier, structural division, or inline style declaration."
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
        "explanation": "The correct way to trigger a JavaScript alert when a button is clicked is by using the onclick attribute in the button tag and setting it to the JavaScript code alert('Clicked!'). The other options use incorrect attributes or syntax."
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
        "explanation": "Level AA of the Web Content Accessibility Guidelines (WCAG) is considered the standard level of conformance to meet the needs of most people with disabilities. It addresses a wide range of accessibility issues, including those that affect users with visual, auditory, motor, and cognitive disabilities. Level A addresses the most basic web accessibility requirements, while Level AAA is the highest level, focusing on more advanced accessibility needs."
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
        "explanation": "The <div> element is a generic container used to group content without any inherent semantic meaning. It is often used for styling or grouping elements together in a layout. The other elements (<article>, <aside>, and <main>) have specific semantic meanings for representing content related to articles, sidebars, or the main content of a page, respectively."
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
        "explanation": "The aria-expanded attribute is used to indicate whether an element that can be expanded or collapsed (such as an accordion panel) is currently expanded or collapsed. When set to true, it indicates the element is expanded, and when set to false, it indicates the element is collapsed. This attribute helps improve accessibility for users of assistive technologies. The other options are incorrect or do not serve the intended purpose."
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
        "explanation": "Consistent indentation and formatting improve the readability of HTML code, making it easier for developers to understand the document structure, locate elements, and maintain the code. It doesn't directly affect browser compatibility, file size, or SEO but plays a crucial role in code maintenance and collaboration. Properly formatted code is essential for debugging and efficient teamwork."
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
        "explanation": "The lang attribute is used to specify the language of the content in an HTML document. It is placed in the <html> tag to inform browsers and assistive technologies (such as screen readers) of the language used on the page, improving accessibility for users. The other options are not valid HTML attributes."
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
        "explanation": "To properly link a favicon, the rel attribute should be set to icon, not shortcut-icon. The type attribute can be image/png for a PNG favicon, and the href attribute can point to either a .ico or .png file, depending on the desired format. While .ico files have better browser support, modern browsers also support .png favicons. The path in the href does not necessarily need to start with / unless you want to specify an absolute path."
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
        "explanation": "In HTML, the less than symbol < is reserved for starting tags, so it must be replaced with the HTML character entity &lt; to display the symbol correctly. The other options are incorrect and would not properly display the less than symbol."
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
        "explanation": "Using an HTML entity could work in some cases, but not all emojis have corresponding HTML entities. The most reliable way to ensure correct emoji rendering is by specifying UTF-8 encoding in the <meta> tag. This allows the browser to interpret and display emojis correctly across different platforms"
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
        "explanation": "To correctly create an image map, the usemap attribute in the <img> tag should refer to the id or name of the <map> element, prefixed with a #. In this case, the image map is named \"workMap,\" so the correct value for the usemap attribute is #workMap. This links the image to the map and allows you to define areas within the image that can be clicked."
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
        "explanation": "In the SVG code, the <circle> element should be self-closed with a /> at the end. This properly closes the circle element within the SVG. The other options (>, </circle>, and {}) are incorrect in this context."
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
        "explanation": "Entering \"about:blank\" in the address bar of your browser will load a blank page. The \"about:blank\" URL is a special URL that represents an empty or blank page. When you navigate to \"about:blank\", the browser will display a blank page with no content."
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
        "explanation": "Let's analyze the code step by step:\n1. The variable id is declared and initialized with the string value \"100\" using the let keyword in the global scope.\n2. A block of code is defined using curly braces {}. This block creates a new block scope.\n3. Inside the block, a new variable id is declared and initialized with the value 200 using the let keyword. This creates a new block-scoped variable id that shadows the outer variable id.\n4. The value of the block-scoped id is updated by adding 1 to it using the id = id + 1 statement.\n5. The resulting value of id, which is 201, is printed to the console using console.log(id).\nSince the console.log(id) statement is inside the block, it refers to the block-scoped variable id, which has a value of 201 after adding 1 to 200. Therefore, when the code is executed, 201 will appear in the console."
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
        "explanation": "In JavaScript, complex data types, also known as reference types, include objects, arrays, and functions. Here is a set of complex data types:\n1. Object: An object is an unordered collection of key-value pairs, where each value can be of any data type, including other complex types. Objects are created using curly braces {} and can be used to represent more complex data structures.\n2. Array: An array is an ordered list of values. It can hold elements of any data type, including other complex types. Arrays are created using square brackets [] and provide methods for manipulating and accessing their elements.\n3. Function: A function is a reusable block of code that can be executed when called. Functions are created using the function keyword or by using arrow function syntax (=>). They can take parameters, perform actions, and return values."
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
        "explanation": "The correct replacement for the declaration let x = 3e-3; would be: let x = 0.003;"
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
        "explanation": "To create the string \"I do not like travelling by plane\" using string interpolation and store it in the msg variable, the correct command would be:\nlet means = \"plane\";\nlet msg = `I do not like travelling by ${means}`;\nString interpolation in JavaScript is achieved by using backticks (```) as the string delimiter. Within the backticks, you can include expressions or variables by wrapping them in ${}. The expression or variable within ${} will be evaluated and its value will be inserted into the resulting string.\nIn this case, the variable means is assigned the value \"plane\". The string interpolation syntax ${means} is used within backticks to insert the value of means into the string. Thus, the resulting value of msg will be \"I do not like travelling by plane\"."
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
        "explanation": "In JavaScript, you can access and modify object properties using dot notation (object.property). In this case, movie.title accesses the title property of the movie object, and the assignment = is used to change its value to \"Matrix\". After executing the command, the title field in the movie object will be updated to \"Matrix\".\nmovie.title = \"Matrix\";"
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
        "explanation": "After calling the animals.push(\"hamster\"); method, the animals array will look like this:\n[\"canary\", \"dog\", \"cat\", \"hamster\"]\nThe push() method in JavaScript is used to add one or more elements to the end of an array. In this case, the method animals.push(\"hamster\") adds the string value \"hamster\" to the end of the animals array. As a result, the array is modified, and \"hamster\" becomes the last element in the array."
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
        "explanation": "When the JavaScript code console.log(\"http://somethingNew.org\"); is executed, it will print the string \"http://somethingNew.org\" to the console.\nThe console.log() function in JavaScript is used to output messages to the console. In this case, the code includes console.log(\"http://somethingNew.org\"), which specifies the string \"http://somethingNew.org\" as the argument to be logged. When the code is executed, the specified string will be displayed in the console. It does not perform any other action apart from printing the message to the console output."
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
        "explanation": "The code snippet let winter = [\"December\", \"January\", \"February\"]; let index = winter.indexOf(\"February\"); will assign the value 2 to the index variable.\nHere's a breakdown of the code:\n1. An array winter is declared and initialized with three elements: \"December\", \"January\", and \"February\".\n2. The indexOf() method is called on the winter array with the argument \"February\". This method searches the array for the specified element and returns the index of the first occurrence of that element. If the element is not found, it returns -1.\n3. Since \"February\" is present in the winter array, the indexOf() method will find it and return the index 2, indicating that \"February\" is located at the third position in the array.\n4. The value 2 is assigned to the index variable using the let index = statement.\nTherefore, after executing the code, the index variable will have the value 2."
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
        "explanation": "To reverse the order of the elements in the daysOfWeek array, you can call the reverse() method."
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
        "explanation": "The code snippet will display the letter \"o\" on the console as a result.\nLet's break down the code:\n1. The variable msg1 is declared and assigned the string value 'hello'.\n2. The variable msg2 is assigned the result of msg1.slice(-1). The slice() method is used to extract a portion of a string. In this case, -1 as the parameter means to extract the last character of msg1, which is 'o'.\n3. The console.log() statement is called, which outputs a value to the console.\n4. The expression msg2 ? msg2 : msg2 + msg1 is evaluated and passed as the argument to console.log().\n5. In this expression, msg2 is truthy since it contains the letter 'o'. Therefore, the result of the expression will be the value of msg2, which is 'o'.\n6. As a result, the letter 'o' will be displayed on the console.\nSo, when the code is executed, the console will display the letter 'o'."
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
        "explanation": "The value of the test variable will depend on the user's input when the prompt dialog appears. If the user clicks the OK button, the test variable will be assigned the string (\"code\"). Since it is defined in the code. Therefore, the test variable will have the value \"code\"."
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
        "explanation": "Let's break down the code:\n• The variable x is assigned the value of the logical OR operation between false and true. In a logical OR operation, if any of the operands is true, the result will be true. In this case, since the second operand (true) is true, the result of false || true is true, which is assigned to x.\n• The variable y is assigned the value of the logical AND operation between the string \"true\" and the string \"false\". In a logical AND operation, if all operands are true, the result will be the last operand. In this case, since both \"true\" and \"false\" are considered truthy values, the result of \"true\" && \"false\" is \"false\", which is assigned to y.\n• The variable z is assigned the value of the logical AND operation between false and true. In a logical AND operation, if any of the operands is false, the result will be false. In this case, since the first operand (false) is false, the result of false && true is false, which is assigned to z.\n• The console.log() statement is called to output a value to the console.\n• The expression ${x} ${y} ${z} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of x, y, and z into a single string with spaces in between.\n• As a result, the console will display true false false."
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
        "explanation": "Let's break down the code:\n1. The variable a is assigned the value of the logical AND operation between true and 20. In a logical AND operation, if all operands are true, the result will be the last operand. In this case, both true and 20 are considered truthy values, so the result of true && 20 is 20, which is assigned to a.\n2. The variable b is assigned the value of the logical OR operation between 0 and 20. In a logical OR operation, if any of the operands is true, the result will be the first truthy operand encountered. In this case, 0 is considered a falsy value, so the result of 0 || 20 is 20, which is assigned to b.\n3. The variable c is assigned the value of the logical AND operation between 0 and 20. In a logical AND operation, if any of the operands is false, the result will be false. In this case, 0 is considered a falsy value, so the result of 0 && 20 is 0, which is assigned to c.\n4. The console.log() statement is called to output a value to the console.\n5. The expression ${a} ${b} ${c} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, and c into a single string with spaces in between.\n6. As a result, the console will display 20 20 0."
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
        "explanation": "Let's break down the code:\n1. The variable a is assigned the result of the concatenation between the string \"20\" and the string \"10\". When the + operator is used with a string, it performs string concatenation. So, \"20\" + \"10\" results in the string \"2010\", which is assigned to a.\n2. The variable b is assigned the result of the addition between the number 20 and the numeric conversion of the string \"10\". The unary + operator before \"10\" converts it into a number, resulting in 20 + 10, which is 30, assigned to b.\n3. The variable c is assigned the result of the addition between the number 20 and the negated numeric conversion of the string \"10\", followed by the concatenation with the string \"10\". The unary - operator before \"10\" converts it into a number and negates it, resulting in -10. Then, 20 + (-10) is 10, which is concatenated with the string \"10\", resulting in \"1010\", assigned to c.\n4. The variable d is assigned the result of the subtraction between the numeric conversions of the strings \"10\" and \"10\", followed by the concatenation with the string \"100\". Both \"10\" and \"10\" are converted into numbers, resulting in 10 - 10, which is 0. Then, \"0\" + \"100\" is \"0100\", assigned to d.\n5. The variable e is assigned the result of the subtraction between the numeric conversions of the strings \"A\" and \"B\", followed by the addition of 0xA (which is 10 in hexadecimal). Both \"A\" and \"B\" cannot be converted into valid numbers, so the result is NaN. Then, NaN + 10 is still NaN, assigned to e.\n6. The console.log() statement is called to output the values to the console.\n7. The expression ${a}, ${b}, ${c}, ${d}, ${e} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, c, d, and e into a single string separated by commas.\n8. As a result, the console will display \"2010, 30, 1010, 0100, NaN\"."
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
        "explanation": "The \"do ... while\" loop instruction checks the loop continuation condition only after the iteration has been completed. In the \"do ... while\" loop, the code block is executed first, and then the condition is checked. If the condition evaluates to true, the loop continues executing. This guarantees that the code block is executed at least once, regardless of the condition."
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
        "explanation": "In arrow function syntax, the parameters are specified within parentheses (a, b), followed by the arrow =>, and then the expression a + b representing the function body. If the function body is a single expression, you can omit the curly braces {} and the return keyword."
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
        "explanation": "The code snippet temp.forEach(e => min = min > e ? e : min); uses the forEach method to iterate over the elements of the temp array and update the value of min based on each element. In order to store the minimum temperature, you need to declare the min variable like this let min = 0; before using it in the code."
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
        "explanation": "The code will output 5 in the console."
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
        "explanation": "The correct statement that can replace the for loop from the example is:\nlet counter = 0;\nwhile (counter < 10) console.log(counter++);"
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
        "explanation": "The code is using a for...of loop to iterate over the elements of the colors array. In each iteration, the loop assigns the current element to the variable c, and then console.log(c) prints the value of c to the console. Since the colors array contains three elements ('red', 'green', and 'blue'), the loop will iterate three times, printing each element on a separate line in the console."
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
        "explanation": "The code is using a for...in loop to iterate over the properties of the route object. In each iteration, the loop assigns the current property name to the variable k, and then console.log(k) prints the value of k to the console. The route object has two properties: distance and elevation. Therefore, the loop will iterate twice, printing each property name on a separate line in the console."
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
        "explanation": "The code defines an arrow function a that takes a parameter n. Inside the function, there is a ternary operator that checks if n is greater than 2. If it is, the function recursively calls itself with the argument (n - 1) and multiplies the result by n. This recursion continues until n reaches 2, at which point the function returns 2. In the console.log(a(6)) statement, the function a is called with the argument 6. The function recursively calculates the factorial of 6 (6 * 5 * 4 * 3 * 2), which results in 720. This value is then printed to the console using console.log."
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
        "explanation": "The correct declaration for the mult function that would result in the desired output of 20 in the console is:\nlet mult = function (a) {\n    return function (b) {\n        return a * b;\n    }\n}"
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
        "explanation": "In the modified line, the comment // user visit counter provides information about the purpose or usage of the counter variable."
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
        "explanation": "This comparison function subtracts b from a, which will result in a negative value if a should be placed before b in the sorted order, a positive value if b should be placed before a, and zero if they are considered equal. Here is the code: let cmp = (a, b) => a - b;"
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
        "explanation": "This line checks if the value of counter is less than or equal to 0 after decrementing it. If counter becomes 0 or negative, it means the desired sequence of numbers (2, 1, 0) has been displayed. At that point, clearInterval(interval) is called to stop the interval from continuing. The correct line is: if (counter-- <= 0) clearInterval(interval);"
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
        "explanation": "To ensure that the execution of the completed code results in the console displaying the value 9, the line defines the power function as an arrow function that calculates the power of x raised to the y exponent using the ** operator."
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
        "explanation": "The line console.log(a.toUpperCase()); will print \"HELLO\" to the console. It uses the toUpperCase() method to convert the string a to uppercase. The try block does not have any code, so it won't execute any specific statements. The catch block will not be triggered because there is no error thrown in the preceding code. The finally block will execute regardless of whether there was an error or not. In this case, it will print \"hello\" to the console, as it references the a variable outside the try-catch block, which is not affected by the toUpperCase() call."
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
        "explanation": "Placing a debugger; statement in the program code will pause the execution of the code at that point and activate the debugger. It allows you to inspect the current state of the program, including variable values, call stack, and execute step-by-step or run in debug mode."
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
        "explanation": "To make the statement console.log(car.make); output \\\"Jeep\\\" in the console, you should use the following declaration:\nlet car = {make: 'Jeep', model: 'Cherokee'};\nThis declaration creates an object named car with a property make set to the value 'Jeep'. The console.log(car.make); statement then accesses the make property of the car object and logs its value, which is \\\"Jeep,\\\" to the console."
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
        "explanation": "To display the value of the circle's x-coordinate so that the executed code results in the following console output: -10, you should use the following line of code:\nconsole.log(circle.center.x);\nThis code accesses the x property of the center object within the circle object and logs its value, which is -10, to the console."
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
        "explanation": "The correct way to refer to the property with a name consisting of several words, which is \\\"full name\\\" in this case, is:\nuser['full name']\nUsing square brackets ([]) is the correct syntax for accessing object properties with names that contain spaces or special characters."
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
        "explanation": "The correct way to display the values of all object properties of the geoposition object so that the executed code results in the console output of -30.110 and 120.027 is:\nObject.keys(geoposition).forEach(key => console.log(geoposition[key]));\nThis code iterates through the keys of the geoposition object and uses them to access and log the corresponding values."
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
        "explanation": "The comparison that will return true is:\ntree1.species == tree2.species\nThis comparison checks if the species property of tree1 is equal to the species property of tree2. Since both tree1 and tree2 have the same value 'oak' for the species property, this comparison will return true."
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
        "explanation": "The code will result in the following output:\nK2 Karakoram 8611\nHere's how it works:\n1. mountain1 is declared with the name \\\"K2\\\" and the range \\\"Himalayas.\\\"\n2. mountain2 is declared as an object with the same properties as mountain1 using the spread operator (...mountain1). This creates a new object that initially has the same values as mountain1, but then it assigns a new value \\\"Karakoram\\\" to the range property and adds a new property height with the value 8611.\n3. mountain1.height is updated to 8848.\n4. The console.log statement prints the properties of mountain2, which are \\\"K2\\\" for name, \\\"Karakoram\\\" for range, and 8611 for height."
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
        "explanation": "To achieve the desired console output \\\"Huck Finn\\\" and call the show method on the user object, you should use the following missing line:\nshow: function() {console.log(`${this.name} ${this.surname}`);}\nThis code defines a show method within the user object that logs the name and surname properties when called."
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
        "explanation": "To achieve the desired console output \\\"Huckleberry\\\" and update the _name property of the user object, you should use the following missing line with a setter method:\nset name(name) { this._name = name; }\nThis code defines a setter method for the name property, allowing you to set the _name property when you assign a new value to user.name."
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
        "explanation": "To achieve the desired console output \\\"Lhotse undefined undefined,\\\" you should use the following missing line:\nObject.freeze(mountain);\nThe Object.freeze(mountain) line will prevent any further modifications to the mountain object, including adding or deleting properties, which will result in the range property being undefined in the output."
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
        "explanation": "To achieve the desired console output \\\"Lhotse 8516,\\\" you should use the following missing line:\nreturn { name, height };\nThis code defines a function getMountain that takes name and height as parameters and returns an object with the same property names name and height, containing the values passed to the function."
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
        "explanation": "To achieve the desired console output \\\"100,\\\" you should use the following missing line in the Point constructor:\nthis.x = x;\nThis code defines a Point constructor that takes x and y parameters and initializes this.x and this.y. Creating a ColorPoint object based on point will have the x property set to 100 as desired."
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
        "explanation": "The code let Mountain = class {}; is correct because it defines an anonymous class and assigns it to the variable Mountain. In JavaScript, you can create anonymous classes and assign them to variables, making classes first-class citizens. The class may not have any properties or methods defined in this specific case, but it is still a valid class declaration. So, the statement is correct: it declares an anonymous class and saves it to the variable Mountain."
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
        "explanation": "The correct way to create a Mountain object of the class with a constructor that takes two arguments (name and range) is:\nlet mountain = new Mountain('Manaslu', 8156);\nUsing the new keyword is essential when creating instances of a class in JavaScript. This syntax correctly creates a new Mountain object with the specified arguments for the constructor."
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
        "explanation": "The mountain object has three properties: name, height, and range.\nIn the provided code:\n1. The Mountain class is defined with a constructor that initializes the name and height properties using the this keyword.\n2. It also has a setRange method, which sets the range property when called.\nWhen you create a mountain object using let mountain = new Mountain('K2', 8611);, it invokes the constructor, which sets the name and height properties. Later, when you call mountain.setRange('Karakoram');, it sets the range property. So, the mountain object indeed has three properties: name, height, and range."
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
        "explanation": "To achieve the desired console output \\\"maple,\\\" you should use the following missing line:\nset species(val) { this._species = val; }\nThis code defines a setter method for the species property, which allows you to set the _species property when you assign a new value to tree.species."
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
        "explanation": "To achieve the desired console output \\\"First Second,\\\" you should use the following missing line to properly define the Second class as a subclass of First:\nclass Second extends First {\nThis code defines the Second class as a subclass of First, allowing it to inherit the hallo1 method and add the hallo2 method."
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
        "explanation": "To achieve the desired console output \\\"Mountain,\\\" you should use the following call:\nMountain.className()\nThis code correctly calls the static className method of the Mountain class to obtain the value \\\"Mountain\\\" and logs it to the console."
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
        "explanation": "As a result of its execution, the following will be displayed:\ntrue true\nHere's why:\n1. second instanceof First returns true because second is an instance of the First constructor function. In JavaScript, constructor functions can be used as classes, and instanceof checks whether an object is an instance of a constructor function or its prototypes.\n2. second instanceof Second returns true because second is also an instance of the Second class, which inherits from First. The inheritance chain is preserved, so second is considered an instance of both First and Second."
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
        "explanation": "To achieve the desired console output '12e-3', you should use the following value as the parameter for the Number constructor: '0.01'.\nThis code converts the string '12e-3' to a number using the Number constructor and then calls the toFixed method to format it with two decimal places, resulting in '0.01' as the output."
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
        "explanation": "To achieve the desired console output ['DO', 'CATS', 'EAT', 'BATS'], you should use the following missing line:\nreturn str.toUpperCase().split(' ');\nThis code converts the input string to uppercase and then splits it into an array of words using the space (' ') as the delimiter, resulting in the desired output."
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
        "explanation": "The same effect can be achieved by using:\nlet currentTime = new Date();\nThe new Date() constructor, without any arguments, automatically creates a Date object containing the current date and time. The other options you provided (new Date.now() and new Date().now()) are not valid and will result in errors."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\nfalse true\nHere's why:\n1. result1 is false because the some method checks if any of the elements in the points array have a y value that is less than 10. In this case, none of the elements meet this condition, so it returns false.\n2. result2 is true because the every method checks if all of the elements in the points array have a y value that is greater than 10. In this case, all of the elements meet this condition, so it returns true."
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
        "explanation": "To calculate the sum of x and y for each object in the points array and store the results in the result array, you should use the following missing line:\nlet result = points.map(e => e.x + e.y);\nThis code uses the map method to iterate through the points array and calculates the sum of x and y for each object, storing the results in the result array. The console will display the result array, containing the sum of x and y for each object in the points array."
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
        "explanation": "To achieve the desired console output ['a', 'x', 'y', 'e'], you should use the following missing line:\nx.splice(1, 0, 'x', 'y');\nThis code first removes elements at index 1 with a count of 3 using x.splice(1, 3);, and then it inserts 'x' and 'y' at index 1 using x.splice(1, 0, 'x', 'y');, resulting in the desired output."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\ntrue true 4\nHere's the explanation:\n1. s.has(2) returns true because the Set s contains the number 2.\n2. s.has('2') returns true because the Set s also contains the string '2'. In Sets, values are considered distinct based on their value, not their type, so both the number 2 and the string '2' are distinct elements.\n3. s.size returns 4 because the Set s contains four distinct elements: 1, 2, '100', and '2'."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\n2\nHere's the explanation:\n1. The initial Map m is created with two key-value pairs: [1, '11'] and ['2', 22]. The keys 1 and '2' are distinct because '2' is a string and 1 is a number.\n2. m.set(1, '11') updates the existing entry with key 1 to have the value '11'. So, there's still only one entry with key 1, and its value is '11'.\n3. m.set(1, '111') updates the existing entry with key 1 again, changing its value to '111'. The key 1 remains unique in the Map.\nAs a result, the Map m still contains only two distinct key-value pairs, which is why m.size is 2."
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
        "explanation": "To convert the JSON data into an object and store it in the mountain variable, you should use the following statement:\nlet mountain = JSON.parse(strMountain);\nThe JSON.parse() function is used to parse a JSON string and convert it into a JavaScript object, which is what you want to achieve in this case."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\n2 1 2\nHere's the explanation:\n1. Math.round(1.5) rounds the number 1.5 to the nearest integer, which is 2.\nMath.floor(1.7) rounds the number 1.7 down to the nearest integer, which is 1.\n2. Math.ceil(1.2) rounds the number 1.2 up to the nearest integer, which is 2.\nSo, you get the output 2 1 2."
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
        "explanation": "The correct alternative form of the declaration to create a regular expression for searching '.jpg' is:\nlet r = /.\\.jpg/;\nThis uses the regular expression literal notation with forward slashes (/) and escapes the dot (.) with a backslash (\\) to match the dot character in the string '.jpg'."
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
        "explanation": "As a result of its execution, two 'test' messages appear in the console.\nHere's the explanation:\n1. The Array.prototype.test function is added to the prototype of the Array class, so all array objects, including a and b, inherit this method.\n2. When you call a.test(), it successfully invokes the Array.prototype.test method and logs 'test' to the console.\n3. When you call b.test(), it also successfully invokes the Array.prototype.test method and logs another 'test' message to the console."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\n1 3\nHere's the explanation:\n1. The function fn takes three parameters: a, b, and the rest parameter rest. The rest parameter rest collects any additional arguments into an array.\n2. When you call fn('1', '2', '3', '4', '5'), the a parameter receives the string '1', the b parameter receives the string '2', and the rest parameter collects the remaining arguments '3', '4', and '5' into an array.\n3. a.length returns the length of the string '1', which is 1.\n4. rest.length returns the length of the array rest, which contains the values '3', '4', and '5', so its length is 3.\nHence, you get the output 1 3"
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
        "explanation": "As a result of the code execution, the following will appear in the console:\nBob Marley\nHere's the explanation:\n1. The outer msg variable is assigned the string 'Bob'.\n2. Inside the immediately-invoked function expression (IIFE), there's a local msg variable assigned the string 'Marley'.\n3. The IIFE returns the value of its local msg variable, which is 'Marley'.\n4. When you console.log() the values of msg and ret, you get 'Bob' for the outer msg variable and 'Marley' for the ret variable, resulting in the output 'Bob Marley'. The outer msg variable is not affected by the local msg variable inside the IIFE because they are in different scopes."
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
        "explanation": "To achieve the desired console output, you should use the following missing line:\nlet bfn = fn.bind({ a: 5 });\nThis code binds the fn function to an object with the property a: 5. When you call bfn(2, 3), it calculates 5 ** 3, resulting in the output '25'."
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
        "explanation": "In JavaScript, a decorator is a higher-order function that wraps another function, extending or modifying its behavior without altering its original implementation. The box at the bottom displays 'That's not Right!' because an incorrect option was selected during the test."
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
        "explanation": "To achieve the desired console output, you should use the following missing line:\nyield* ['a', 'b', 'c', 'd'];\nThis code defines a generator function testGenerator that yields values from the array ['a', 'b', 'c', 'd']. When you call gen.next().value twice, it yields 'a' and 'b', resulting in the output 'a b'."
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
        "explanation": "To make the console display 'test' with a delay of 3 seconds, you should use the following missing line:\nsetTimeout(fn.bind(this, 'test'), 3000);\nThis code sets a timeout for 3 seconds and uses the fn function with the message 'test' by binding it with fn.bind(this, 'test'). After 3 seconds, 'test' will be logged to the console."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\na 1\nHere's the explanation:\n1. A Promise p is created, which resolves with the value 1 after a delay of 1000 milliseconds using setTimeout.\n2. The p.then() method is used to attach two callbacks: one for when the promise resolves (a => console.log(`a ${a}`)) and one for when it rejects (b => console.log(`b ${b}`)).\n3. Since the promise p successfully resolves, the first callback is executed, and you get the output 'a 1'.\nThe second callback (b => console.log(`b ${b}`)) is not executed because there was no rejection in this case."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\n10 30 50\nHere's the explanation of the code execution step by step:\n1. Two promises, p and r, are created. p resolves with the value 10 after 100 milliseconds, and r resolves with the value 30 after 150 milliseconds.\n2. The p.then() method is used, which attaches a callback to be executed when p resolves. In this callback, the value 10 is logged to the console.\n3. Inside the p.then() callback, a new promise r is returned, which means that the subsequent then will wait for the resolution of r.\n4. The next then() method is called on the result of r, which attaches another callback. When r resolves, the value 30 is logged to the console.\n5. Inside the second then() callback, the value 50 is returned, and another then() is called on it.\n6. Finally, in the third then() callback, the value 50 is logged to the console.\nSo, the output in the console is '10' (from the first then()), '30' (from the second then()), and '50' (from the third then())."
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
        "explanation": "As a result of the code execution, the following will appear in the console:\ndef ghi abc\nHere's the explanation of the code execution step by step:\n1. A promise p is created, which resolves with the value 'abc' after a delay of 100 milliseconds.\n2. An asynchronous function afn is defined.\n3. Inside the afn function, the first console.log('def') is executed, logging 'def' to the console.\n4. The await p line waits for the promise p to resolve. During this time, the control is returned to the event loop, and the next line (console.log('ghi')) is executed.\n5. The console.log('ghi') line logs 'ghi' to the console.\n6. Once the promise p resolves (after 100 milliseconds), the control returns to the afn function, and the value 'abc' is assigned to x.\n7. The console.log(x) line logs 'abc' to the console.\nSo, the output in the console is 'def', 'ghi', and 'abc' in that order."
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
        "explanation": "To make the code execute and result in the console output '200', you should add the following line:\nrequest.addEventListener('load', fn);\nThe code listens for the load event, and when the request is complete, it logs the HTTP status code (request.status) to the console. If the HTTP request is successful and the server responds with a status code of 200 (OK), the output would be: 200"
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
