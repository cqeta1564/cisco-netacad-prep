/**
 * Authentic Question Banks & Explanations
 * Official Oracle Academy, Cisco NetAcad, Skills for All, OpenEDG & LPI
 */

const CERTIFICATE_CATEGORIES = {
  "database": {
    "id": "database",
    "name": "Databázové systémy",
    "shortName": "Databáze",
    "icon": "fas fa-database",
    "color": "#ea580c",
    "description": "Oracle Academy: Database Design (DD S1–S11) – Konceptuální modelování, ERD, normalizace",
    "certs": [
      "dd"
    ]
  },
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
    "description": "Cisco DevNet Associate (DEVASC 200-901) – REST API, Docker, CI/CD, Ansible",
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
  "dd": {
    "id": "dd",
    "category": "database",
    "categoryName": "Databáze",
    "title": "Oracle Academy: Database Design",
    "subtitle": "Příprava na zkoušku DD Cumulative Final Exam (S1–S11)",
    "badge": "Oracle Database Design",
    "icon": "fas fa-database",
    "color": "#ea580c",
    "passScore": 70,
    "timeLimit": 60,
    "modules": [
      {
        "id": "dd_m1",
        "name": "Sekce 1–2: Úvod do databázového návrhu, entity a atributy"
      },
      {
        "id": "dd_m2",
        "name": "Sekce 3–4: Vztahy, kardinalita a ERD diagramy"
      },
      {
        "id": "dd_m3",
        "name": "Sekce 5–6: Supertypy, subtypy a integritní pravidla"
      },
      {
        "id": "dd_m4",
        "name": "Sekce 7–8: Normalizace databáze (1NF, 2NF, 3NF)"
      },
      {
        "id": "dd_m5",
        "name": "Sekce 9–11: Oblouky, historická data a relační mapování"
      }
    ],
    "examQuestionCount": 50,
    "questions": [
      {
        "id": "dd_q01",
        "module": "dd_m3",
        "question": "A subtype is shown on an ERD as an entity with a one to many relationship to the supertype. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). V ERD modelování podle metodiky Oracle Academy (Barkerova notace) se podtyp (subtype) nekreslí jako samostatná entita spojená vztahem 1:N k nadtypu (supertype). Místo toho se podtypy znázorňují jako vnořené obdélníky přímo uvnitř obdélníku nadtypu (supertype). Podtyp automaticky dědí všechny atributy a vztahy svého nadtypu a mezi nadtypem a podtypem neexistuje žádná spojovací čára vztahu."
      },
      {
        "id": "dd_q02",
        "module": "dd_m4",
        "question": "Examine the following Entity and decide which rule of Normal Form is being violated:",
        "code": "ENTITY: CLIENT\nATTRIBUTES:\n# CLIENT ID\nFIRST NAME\nLAST NAME\nORDER ID\nSTREET",
        "options": [
          "1st Normal Form.",
          "2nd Normal Form.",
          "3rd Normal Form.",
          "None of the above, the entity is fully normalised."
        ],
        "correct": 0,
        "explanation": "Entita porušuje pravidlo 1. normální formy (1st Normal Form). První normální forma vyžaduje, aby všechny atributy byly atomické a neobsahovaly vícehodnotové atributy ani opakující se skupiny. V entitě CLIENT atribut ORDER ID představuje vícehodnotový atribut (klient může mít v průběhu času více objednávek), což v jedné instanci klienta vede k neatomicitě nebo opakování dat. Správným návrhem je vyčlenit objednávky do samostatné entity ORDER a propojit ji s CLIENT vztahem 1:N. Druhá a třetí normální forma nemohou být splněny, dokud entita nesplňuje 1NF."
      },
      {
        "id": "dd_q03",
        "module": "dd_m2",
        "question": "In an ERD, High Volume Entities usually have very few relationships to other entities. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Entity s vysokým objemem dat (High Volume Entities), jako jsou transakční entity (např. ORDERS, TRANSACTIONS, PAYMENTS), obvykle zaznamenávají klíčové události a transakce v systému. Z tohoto důvodu mají naopak mnoho vztahů k ostatním entitám (např. k zákazníkům, produktům, zaměstnancům a pobočkám), aby bylo možné zachytit všechny související obchodní kontexty."
      },
      {
        "id": "dd_q04",
        "module": "dd_m1",
        "question": "The purpose of an ERD is to document the proposed system and facilitate discussion and understanding of the requirements captured by the developer. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Tvrzení je pravdivé (True). Hlavním účelem ERD (Entity Relationship Diagram) je zdokumentovat navrhovaný systém na konceptuální úrovni a sloužit jako společný vizuální komunikační nástroj mezi vývojáři, analytiky a zástupci zadavatele (byznysu). Usnadňuje diskuzi a zajišťuje, že všichni správně pochopili požadavky na data ještě před zahájením fyzické implementace."
      },
      {
        "id": "dd_q05",
        "module": "dd_m4",
        "question": "To convert an entity with a multi valued attribute to 1st Normal Form, we create an additional entity and relate it to the original entity with a 1:1 relationship. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Při převodu entity s vícehodnotovým atributem do 1. normální formy (1NF) se pro daný atribut vytvoří nová entita, která je s původní entitou propojena vztahem 1:N (jedna ku mnoha), nikoli 1:1. Důvodem je, že jedna instance původní entity může mít pro tento vícehodnotový atribut více hodnot (instancí v nové entitě)."
      },
      {
        "id": "dd_q06",
        "module": "dd_m3",
        "question": "Business rules are important to data modelers because:",
        "code": null,
        "options": [
          "A. They capture all of the needs, processes, and required functionality of the business.",
          "B. All Business rules are easily implemented in the ERD diagram.",
          "C. The data modeler must focus on structural rules, because they are easily represented diagrammatically and eliminate other rules that involve extra procedures or programming.",
          "D. Both A and C are true."
        ],
        "correct": 0,
        "explanation": "Správná odpověď je A. Obchodní pravidla (Business rules) jsou zásadní, protože přesně zachycují veškeré potřeby, procesy a požadovanou funkcionalitu podniku. Možnost B je nesprávná, protože zdaleka ne všechna pravidla lze vyjádřit v ERD (procesní a procedurální pravidla se implementují až pomocí aplikační logiky nebo triggerů). Možnost C je nesprávná, protože datový modelář nesmí ignorovat ani eliminovat procedurální pravidla – musí je zdokumentovat pro vývojáře."
      },
      {
        "id": "dd_q07",
        "module": "dd_m2",
        "question": "The many end of a Relationship is called:",
        "code": null,
        "options": [
          "Gulls Foot",
          "Crows Foot",
          "Crows Ear",
          "Pigs Ear"
        ],
        "correct": 1,
        "explanation": "Správná odpověď je Crows Foot (vraní nožka). V Barkerově notaci ERD, kterou vyučuje Oracle Academy, je konec čáry vztahu reprezentující kardinalitu 'mnoho' (many) zakončen třemi rozbíhajícími se čarami připomínajícími ptačí nožku, odtud název 'Crow's Foot'."
      },
      {
        "id": "dd_q08",
        "module": "dd_m4",
        "question": "If an intersection entity is formed that contains no attributes of its own, its uniqueness may be modeled by",
        "code": null,
        "options": [
          "Creating new attributes.",
          "Barring the relationships to the original entities.",
          "Placing the UID attributes from the original entities into the intersection entity.",
          "None of the above."
        ],
        "correct": 1,
        "explanation": "Správná odpověď je přeškrtnutím vztahů k původním entitám (Barring the relationships to the original entities). V Oracle ERD notaci značí přeškrtnutí vztahu (bar / barred relationship) identifikační vztah, což znamená, že vztah je součástí unikátního identifikátoru (UID) dané entity. Pokud vazební entita nemá žádné vlastní atributy, její unikátnost je zajištěna složeným UID tvořeným přeškrtnutými vztahy k oběma nadřazeným entitám. Možnost vložení UID atributů je chybná, protože v konceptuálním ERD se cizí klíče jako explicitní atributy nezapisují."
      },
      {
        "id": "dd_q09",
        "module": "dd_m4",
        "question": "When is an entity in 2nd Normal Form?",
        "code": null,
        "options": [
          "When all non-UID attributes are dependent upon the entire UID.",
          "When attributes with repeating or multi-values are present.",
          "When no attritibutes are mutually independent and all are fully dependent on the primary key.",
          "None of the Above."
        ],
        "correct": 0,
        "explanation": "Správná odpověď je 'When all non-UID attributes are dependent upon the entire UID.' (Když jsou všechny ne-UID atributy závislé na celém UID). Entita je ve 2. normální formě (2NF), pokud je v 1NF a žádný ne-UID atribut není částečně závislý na podmnožině složeného UID. Všechny neklíčové atributy musí záviset na celém klíči ('the whole key')."
      },
      {
        "id": "dd_q10",
        "module": "dd_m1",
        "question": "SQL became the most commonly used query language in the 1980s. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Tvrzení je pravdivé (True). Jazyk SQL byl vyvinut v IBM v 70. letech, ale právě během 80. let 20. století zaznamenal obrovský komerční nástup (první komerční relační databázi s SQL uvedla společnost Oracle v roce 1979/1980 a standardy ANSI a ISO byly přijaty v roce 1986), čímž se SQL stal nejrozšířenějším jazykem pro relační databáze."
      },
      {
        "id": "dd_q11",
        "module": "dd_m4",
        "question": "What do you call the entity created when you resolve a M:M relationship?",
        "code": null,
        "options": [
          "Inclusion entity",
          "Recursive entity",
          "M:M entity",
          "Intersection entity"
        ],
        "correct": 3,
        "explanation": "Správná odpověď je Intersection entity (vazební či průniková entita). Při řešení vztahu M:M (Many-to-Many) v relačním modelování se vazba rozdělí na dva vztahy 1:N pomocí nově vložené entity, která se v kurzu Oracle Academy nazývá 'Intersection entity' (v obecné teorii také asociativní entita)."
      },
      {
        "id": "dd_q12",
        "module": "dd_m5",
        "question": "All systems must include functionality to provide logging or journaling in conceptual data models. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Zda musí systém podporovat logování (logging), žurnálování (journaling) nebo sledování historických dat, závisí výhradně na konkrétních obchodních požadavcích (business requirements) daného systému. Ne pro každý systém je nutné historii či žurnál evidovat a zbytečně by to zvyšovalo složitost a nároky na úložiště."
      },
      {
        "id": "dd_q13",
        "module": "dd_m1",
        "question": "Which of the following statements about Entities are true? (Choose Three)",
        "code": null,
        "options": [
          "“Something” of significance to the business about which data must be known.",
          "They never have Instances",
          "They are usually a noun.",
          "A name for a set of similar \"things\""
        ],
        "correct": [
          0,
          2,
          3
        ],
        "explanation": "Správné jsou možnosti 1., 3. a 4. (indexy 0, 2 a 3). Entita je v Oracle Academy definována jako 'něco významného pro podnik, o čem je nutné uchovávat data', její název je obvykle podstatné jméno v jednotném čísle a označuje množinu podobných prvků/věcí. Tvrzení 'They never have Instances' je naopak nepravdivé, protože každá entita má své instance (např. konkrétní student či objednávka)."
      },
      {
        "id": "dd_q14",
        "module": "dd_m1",
        "question": "Systems are always just rolled out as soon as the programming phase is finished. No further work is required once the development is finished. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). V životním cyklu vývoje systémů (SDLC) po ukončení fáze programování následují nezbytné kroky: testování (integrační, akceptační), příprava produkčního prostředí, migrace dat, zaškolení uživatelů, samotné nasazení (rollout) a následná dlouhodobá správa a údržba systému."
      },
      {
        "id": "dd_q15",
        "module": "dd_m5",
        "question": "In a payroll system, it is desirable to have an entity called DAY with a holiday attribute when you want to track special holiday dates. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Tvrzení je pravdivé (True). V systémech pro zpracování mezd a docházky (payroll) je pro správný výpočet odpracovaných hodin, mzdových příplatků a fondu pracovní doby vhodné mít kalendářní entitu DAY s atributem holiday (svátek), která umožňuje explicitně evidovat státní svátky a dny pracovního klidu."
      },
      {
        "id": "dd_q16",
        "module": "dd_m4",
        "question": "When data is only stored in one place in a database, the database conforms to the rules of ___________.",
        "code": null,
        "options": [
          "Multiplication",
          "Reduction",
          "Normality",
          "Normalization"
        ],
        "correct": 3,
        "explanation": "Správná odpověď je Normalization (normalizace). Cílem normalizace v relačních databázích je navrhnout strukturu tabulek tak, aby každý údaj byl uložen právě na jednom místě, čímž se předchází redundanci dat, anomáliím při vkládání, úpravách a mazání a zajišťuje se integrita dat."
      },
      {
        "id": "dd_q17",
        "module": "dd_m1",
        "question": "A candidate UID that is not chosen to be the Primary UID is called:",
        "code": null,
        "options": [
          "Composite",
          "Artificial",
          "Simple",
          "Secondary"
        ],
        "correct": 3,
        "explanation": "Správná odpověď je Secondary UID (sekundární UID). Každá entita může mít jeden nebo více kandidátních identifikátorů (Candidate UIDs). Ten, který je vybrán jako hlavní pro jednoznačnou identifikaci instancí, je Primary UID; všechny ostatní kandidátní identifikátory, které nebyly vybrány, se nazývají Secondary UIDs (sekundární identifikátory)."
      },
      {
        "id": "dd_q18",
        "module": "dd_m1",
        "question": "In the grid computing model, resources are pooled together for efficiency. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Správná odpověď je True. V modelu grid computingu (mřížkového počítání) jsou různé hardwarové a softwarové výpočetní zdroje (servery, úložné kapacity, sítě) sdružovány do společného virtuálního fondu (resource pooling), což umožňuje jejich vysoce efektivní sdílení a dynamické vytěžování podle aktuální potřeby podniku. Volba False je nesprávná, protože sdružování prostředků za účelem efektivity je přímo základním principem grid computingu."
      },
      {
        "id": "dd_q19",
        "module": "dd_m1",
        "question": "Data modeling is performed for the following reasons: (Choose Two)",
        "code": null,
        "options": [
          "It helps discussions and reviews.",
          "The ERD becomes a blueprint for designing the actual system.",
          "We draw an ERD solely to please the users; once completed, the ERD is never referred to again as it serves no purpose in the real world.",
          "We do not need datamodels; we can just start coding right away."
        ],
        "correct": [
          0,
          1
        ],
        "explanation": "Správné odpovědi jsou 'It helps discussions and reviews.' a 'The ERD becomes a blueprint for designing the actual system.'. Datový model a ER diagram slouží jako srozumitelný komunikační nástroj pro diskuse a revize se zákazníky a analytiky a zároveň funguje jako architektonický plán (blueprint) pro následnou implementaci fyzické databáze a aplikačních systémů. Možnost tvrdící, že ERD slouží pouze pro potěšení uživatelů a už se k němu nikdo nevrací, je nepravdivá, stejně jako tvrzení, že modely nejsou potřeba a lze rovnou začít programovat, což je zásadní metodická chyba."
      },
      {
        "id": "dd_q20",
        "module": "dd_m1",
        "question": "Once you have learned how to write programs and build systems, you no longer need any input or involvement from any users as you are perfectly capable of delivering the systems that businesses need and want.",
        "code": null,
        "options": [
          "True. The only requirement for creating a perfect system is a perfect programmer.",
          "True. Users never know what they want anyway, so building systems is best left to the professionals.",
          "True. Users delay the delivery of a system by changing their minds and adding new requirements.",
          "False. Business requirements can and will change. For instance new legal requirements may arise."
        ],
        "correct": 3,
        "explanation": "Správná odpověď je 'False. Business requirements can and will change. For instance new legal requirements may arise.'. Vývoj informačních systémů vyžaduje nepřetržitou spolupráci s byznys uživateli, protože podnikové prostředí a požadavky se neustále vyvíjejí – například kvůli novým zákonům, daňovým předpisům nebo změnám na trhu. Žádný programátor nedokáže úspěšně dodat systém bez hlubokého porozumění byznysu a průběžné validace s uživateli. Všechny možnosti s 'True' reprezentují arogantní a mylné přístupy ignorující reálné potřeby zadavatele."
      },
      {
        "id": "dd_q21",
        "module": "dd_m2",
        "question": "If the same relationship is represented twice in an Entity Relationship Model, it is said to be:",
        "code": null,
        "options": [
          "Replicated",
          "Removable",
          "Resourceful",
          "Redundant"
        ],
        "correct": 3,
        "explanation": "Správná odpověď je 'Redundant' (redundantní / nadbytečný). Pokud je stejný vztah mezi entitami zachycen v ER modelu vícekrát, nebo pokud lze vazbu plně a jednoznačně odvodit přes jinou existující cestu vztahů, jedná se o redundantní vztah. Redundance v modelu komplikuje údržbu a hrozí vznikem nekonzistencí dat. Výrazy Replicated, Removable ani Resourceful nejsou oficiálními termíny Oracle Academy pro tento jev."
      },
      {
        "id": "dd_q22",
        "module": "dd_m5",
        "question": "An \"Arc Implementation\" can be done just like any other Relationship - you simply add the required Foreign Keys. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Správná odpověď je False. Oblouk (Arc) modeluje exkluzivní vztah (XOR), kdy instance entity může mít vazbu pouze na jednu z několika cílových entit (vylučující se vztahy). Pouhé přidání cizích klíčů nestačí, protože standardní cizí klíče v relační databázi nedokáží samy o sobě vynutit vzájemnou výlučnost (umožnily by vyplnit oba cizí klíče současně nebo naopak nevyplnit žádný). Implementace oblouku proto vyžaduje dodatečné integritní omezení typu CHECK constraint nebo databázový trigger, který zajistí, že je v daném okamžiku platný právě jeden vztah."
      },
      {
        "id": "dd_q23",
        "module": "dd_m5",
        "question": "In a physical data model, an entity becomes a __________.",
        "code": null,
        "options": [
          "Constraint",
          "Column",
          "Table",
          "Attribute"
        ],
        "correct": 2,
        "explanation": "Správná odpověď je 'Table'. Při transformaci konceptuálního/logického modelu do fyzického relačního modelu se entita (Entity) mapuje na tabulku (Table). Atribut se mapuje na sloupec (Column), jedinečný identifikátor (UID) se stává primárním klíčem (Primary Key) a vztah (Relationship) se implementuje pomocí cizího klíče (Foreign Key)."
      },
      {
        "id": "dd_q24",
        "module": "dd_m3",
        "question": "The explanation below is an example of which constraint type?\nA column must contain only values consistent with the defined data format of the column.",
        "code": null,
        "options": [
          "Column integrity",
          "Referential integrity",
          "User-defined integrity",
          "Entity integrity"
        ],
        "correct": 0,
        "explanation": "Správná odpověď je 'Column integrity' (integrita sloupce, nazývaná též doménová integrita). Integrita sloupce zajišťuje, že všechny hodnoty uložené v daném sloupci plně odpovídají definovanému datovému typu, formátu a povolenému rozsahu hodnot. 'Entity integrity' zajišťuje unikátnost a ne-nulovost primárního klíče, 'Referential integrity' vynucuje platnost cizích klíčů vůči primárním klíčům a 'User-defined integrity' slouží k vynucení specifických byznys pravidel."
      },
      {
        "id": "dd_q25",
        "module": "dd_m2",
        "question": "One Relationship can be mandatory in one direction and optional in the other direction. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Správná odpověď je True. V ER modelování má vztah dvě strany a každá z nich má svou vlastní volitelnost (optionality). Vztah může být z jedné strany plně povinný (mandatory – zobrazený plnou čarou) a ze strany druhé volitelný (optional – zobrazený čárkovanou čarou). Například: Každý ZAMĚSTNANEC musí patřit do jednoho ODDĚLENÍ (povinné), ale ODDĚLENÍ může zaměstnávat jednoho či více ZAMĚSTNANCŮ (volitelné, oddělení může vzniknout i bez zaměstnanců)."
      },
      {
        "id": "dd_q26",
        "module": "dd_m1",
        "question": "Information which was gained from data is the same as: (Choose Two)",
        "code": null,
        "options": [
          "Intelligence",
          "Raw Materials",
          "There is no difference between data and information.",
          "Knowledge"
        ],
        "correct": [
          0,
          3
        ],
        "explanation": "Správné odpovědi jsou 'Intelligence' a 'Knowledge'. V terminologii Oracle Academy jsou data považována za surový materiál (Raw Materials). Zpracováním a zasazením dat do kontextu vzniká informace, ze které uživatelé a organizace získávají znalosti ('Knowledge') a byznysové porozumění / inteligenci ('Intelligence'). 'Raw Materials' označuje samotná nezpracovaná data, nikoli informaci z nich vytvořenou, a tvrzení, že mezi daty a informacemi není rozdíl, je v informatice zásadně chybné."
      },
      {
        "id": "dd_q27",
        "module": "dd_m3",
        "question": "A business rule such as \"We only ship goods after customers have completely paid any outstanding balances on their account\" is best enforced by:",
        "code": null,
        "options": [
          "Making the payment attribute optional.",
          "We need to trust our customers, and we know they will pay some day.",
          "Making the payment attribute null.",
          "Creating additional programming code to verify no goods are shipped until the account has been settled in full."
        ],
        "correct": 3,
        "explanation": "Správná odpověď je 'Creating additional programming code to verify no goods are shipped until the account has been settled in full.'. Jedná se o procedurální byznysové pravidlo (procedural business rule), které se váže na workflow a dynamický stav účtu zákazníka. Taková pravidla nelze vyjádřit pouhou strukturou ERD ani jednoduchým deklarativním omezením sloupce; vyžadují procedurální programový kód (triggery, uložené procedury v databázi nebo aplikační logiku). Nastavení atributu platby na volitelný či null situaci nijak neřeší a slepá důvěra zákazníkům pravidlo nevymáhá vůbec."
      },
      {
        "id": "dd_q28",
        "module": "dd_m1",
        "question": "Unique Identifiers...",
        "code": null,
        "options": [
          "Distinguish nothing",
          "Distinguish one entity from another",
          "Distinguish all entities in a database",
          "Distinguish one instance of an entity from all other instances of that entity"
        ],
        "correct": 3,
        "explanation": "Správná odpověď je 'Distinguish one instance of an entity from all other instances of that entity'. Jedinečný identifikátor (UID) slouží výhradně k tomu, aby jednoznačně odlišil jednu konkrétní instanci entity od všech ostatních instancí téže entity (např. unikátní číslo zákazníka odliší jednoho zákazníka od ostatních zákazníků). Neodlišuje entity mezi sebou (k tomu slouží název entity) ani nerozlišuje všechny entity v databázi globálně."
      },
      {
        "id": "dd_q29",
        "module": "dd_m2",
        "question": "Matrix Diagrams show Optionality and Cardinality of the ERDs they document. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Správná odpověď je False. Matice vztahů (Matrix Diagram) je předběžná analytická tabulka, která eviduje pouze to, zda mezi dvěma entitami existuje nějaký vztah. Volitelnost (optionality – must be / may be) a kardinalita (cardinality – one / many) se v matici nezobrazují; tyto podrobnosti jsou zachyceny a dokumentovány až v plnohodnotném diagramu entit a vztahů (ERD)."
      },
      {
        "id": "dd_q30",
        "module": "dd_m1",
        "question": "A well structured ERD will show only some parts of the finished data model. You should never try to model the entire system in one diagram, no matter how small the diagram might be. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Správná odpověď je False. Účelem dobře strukturovaného ER diagramu je poskytnout úplný a konzistentní model celého systému v rozsahu zadaných požadavků. Tvrzení, že by se člověk nikdy neměl snažit namodelovat celý systém v jednom diagramu bez ohledu na to, jak je systém malý, je chybné. Zejména u malých a středních systémů je žádoucí mít celý model v jednom diagramu pro celkový přehled o všech entitách a vazbách."
      },
      {
        "id": "dd_q31",
        "module": "dd_m2",
        "question": "When reading the relationships in an ERD, you are said to be speaking:",
        "code": null,
        "options": [
          "ERDish",
          "Relationship-ish",
          "Gibberish",
          "Entity-ish"
        ],
        "correct": 0,
        "explanation": "Správná odpověď je 'ERDish'. V kurzu Oracle Academy se formalizovaný způsob čtení vztahů z ER diagramu označuje termínem 'ERDish'. Má přesnou strukturu věty: 'EACH [entita 1] MUST BE / MAY BE [jméno vztahu] ONE AND ONLY ONE / ONE OR MORE [entita 2]'. Ostatní názvy jsou smyšlené distraktory."
      },
      {
        "id": "dd_q32",
        "module": "dd_m2",
        "question": "Every ERD must have at least one non-transferable relationship. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Správná odpověď je False. Vztahy v ER diagramu jsou ve výchozím stavu převoditelné (transferable). Nepřevoditelný vztah (non-transferable, označený kosočtvercem) se používá pouze tehdy, když specifické byznysové pravidlo zakazuje změnu navázané instance (např. vydaný účetní doklad nelze převést na jiného zákazníka). Neexistuje žádný požadavek, aby každý ERD musel obsahovat alespoň jeden nepřevoditelný vztah; mnoho korektních modelů žádný takový vztah neobsahuje."
      },
      {
        "id": "dd_q33",
        "module": "dd_m2",
        "question": "Relationships can be Redundant. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Správná odpověď je True. Vztahy mohou být redundantní (nadbytečné), pokud vyjadřují vazbu mezi entitami, kterou lze již spolehlivě odvodit prostřednictvím jiných existujících vztahů bez přidání jakékoliv nové byznysové hodnoty. Analýza a odstranění redundantních vztahů je důležitým krokem pro zjednodušení datového modelu a prevenci anomálií."
      },
      {
        "id": "dd_q34",
        "module": "dd_m5",
        "question": "An arc can often be modeled as Supertype and Subtypes. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Správná odpověď je True. Oblouk (Arc) vyjadřuje vzájemnou výlučnost mezi dvěma nebo více vztahy (exkluzivní vztah). Ve většině případů lze situaci řešenou obloukem efektivněji a čistěji namodelovat pomocí nadtypu a podtypů (Supertype / Subtypes) – např. zobecněním cílových entit do společného nadtypu, nebo rozpadem zdrojové entity na specializované podtypy, které dědí společné atributy. Oracle Academy tuto transformaci výslovně probírá v kapitole věnované obloukům (Section 9)."
      },
      {
        "id": "dd_q35",
        "module": "dd_m4",
        "question": "A transitive dependency exists when any attribute in an entity is dependent on any other non-UID attribute in that entity. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Tvrzení je pravdivé (True). Tranzitivní závislost (transitive dependency) nastává tehdy, když neklíčový atribut (atribut, který není součástí unikátního identifikátoru – UID) závisí na jiném neklíčovém atributu v rámci stejné entity (např. atribut B závisí na UID a atribut C závisí na atributu B, čímž atribut C tranzitivně závisí na UID). Právě odstranění všech tranzitivních závislostí vyčleněním závislých atributů do nové samostatné entity je klíčovým požadavkem 3. normální formy (3NF – „každý neklíčový atribut musí záviset na klíči, celém klíči a ničem jiném než klíči“)."
      },
      {
        "id": "dd_q36",
        "module": "dd_m5",
        "question": "The transformation from an ER diagram to a physical design involves changing terminology. Entities in the ER diagram become _________ :",
        "code": null,
        "options": [
          "Tables",
          "Columns",
          "Unique Keys",
          "Foreign Keys"
        ],
        "correct": 0,
        "explanation": "Při transformaci z konceptuálního/logického ER diagramu do fyzického databázového návrhu dochází ke změně terminologie: entita (Entity) se stává tabulkou (Table), atribut (Attribute) se stává sloupcem (Column), instance entity odpovídá řádku (Row), primární UID se stává primárním klíčem (Primary Key), sekundární UID unikátním klíčem (Unique Key) a vztahy se transformují na cizí klíče (Foreign Keys). Možnosti Columns, Unique Keys a Foreign Keys reprezentují jiné konstrukty a neodpovídají entitě."
      },
      {
        "id": "dd_q37",
        "module": "dd_m1",
        "question": "Where an entity has more than one attribute suitable to be the Primary UID, these are known as _________ UIDs.",
        "code": null,
        "options": [
          "Secondary",
          "Composite",
          "Candidate",
          "Simple"
        ],
        "correct": 2,
        "explanation": "Pokud má entita více atributů (či kombinací atributů), které jsou vhodné a schopné jednoznačně identifikovat každou instanci entity, nazývají se kandidátní identifikátory (Candidate UIDs). Z nich návrhář zvolí jeden za primární UID (Primary UID) a veškeré zbývající nezvolené kandidátní identifikátory se označují jako sekundární identifikátory (Secondary UIDs). Kompozitní UID (Composite UID) je tvořeno kombinací více atributů či vztahů a jednoduché UID (Simple UID) se skládá z jediného atributu."
      },
      {
        "id": "dd_q38",
        "module": "dd_m5",
        "question": "A foreign key cannot refer to a primary key in the same table. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Cizí klíč může odkazovat na primární klíč v téže tabulce. Tento mechanismus se v relačních databázích nazývá rekurzivní vztah (self-referencing relationship nebo recursive foreign key). Typickým příkladem v Oracle Academy je hierarchie zaměstnanců v tabulce EMPLOYEES, kde sloupec manager_id (cizí klíč) odkazuje na sloupec employee_id (primární klíč) stejné tabulky."
      },
      {
        "id": "dd_q39",
        "module": "dd_m5",
        "question": "Relationships on an ERD can only be transformed into UIDs in the physical model. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Vztahy z ER diagramu se ve fyzickém návrhu transformují na cizí klíče (Foreign Keys), nikoliv výhradně na UID. Navíc UID je koncept logického modelu, zatímco ve fyzickém modelu se používá pojem Primary Key a Unique Key. Pouze v případě identifikačních vztahů (barred relationships) se cizí klíč stává součástí složeného primárního klíče podřízené tabulky, ale ani v takovém případě nelze říci, že by se vztahy transformovaly „pouze na UID“."
      },
      {
        "id": "dd_q40",
        "module": "dd_m3",
        "question": "A Supertype can have only one subtype. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Podle základních pravidel modelování v Oracle Academy musí mít každý nadtyp (Supertype) alespoň dva podtypy (Subtypes). Podtypy musí být vzájemně se vylučující (mutually exclusive) a úplné (collectively exhaustive). Existence jediného podtypu postrádá logický smysl, neboť by byl zcela totožný se samotným nadtypem a neposkytoval by žádnou kategorizaci."
      },
      {
        "id": "dd_q41",
        "module": "dd_m4",
        "question": "Examine the following entity and decide which attribute breaks the 2nd Normal Form rule:",
        "code": "ENTITY: RECEIPT\nATTRIBUTES:\n#CUSTOMER ID\n#STORE ID\nSTORE LOCATION\nDATE",
        "options": [
          "STORE LOCATION",
          "CUSTOMER ID",
          "STORE ID",
          "DATE"
        ],
        "correct": 0,
        "explanation": "Druhá normální forma (2NF) vyžaduje, aby entita byla v 1NF a aby všechny neklíčové atributy byly plně funkčně závislé na celém unikátním identifikátoru (UID), nikoliv pouze na jeho části (nesmí existovat částečná funkční závislost). Zde má entita RECEIPT složený UID ze dvou atributů (#CUSTOMER ID a #STORE ID). Atribut STORE LOCATION závisí výhradně na STORE ID (adresa obchodu je určena samotným obchodem bez vazby na zákazníka), což porušuje pravidlo 2NF. Atribut DATE závisí na celé transakci zákazníka v daném obchodě a atributy CUSTOMER ID a STORE ID tvoří samotný UID."
      },
      {
        "id": "dd_q42",
        "module": "dd_m5",
        "question": "Which of the following scenarios should be modeled so that historical data is kept? (Choose Two)",
        "code": null,
        "options": [
          "CUSTOMER and PAYMENTS",
          "BABY and AGE",
          "CUSTOMER and ORDERS",
          "TEACHER and AGE"
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "Správné odpovědi jsou CUSTOMER and PAYMENTS a CUSTOMER and ORDERS. Transakční procesy jako platby (PAYMENTS) a objednávky (ORDERS) vyžadují evidenci historie v čase – podnik potřebuje mít trvalý auditní záznam o každé uskutečněné platbě i objednávce zákazníka včetně časových razítek. Naopak atribut AGE (věk) u učitele či dítěte se v databázi jako historická data nemodeluje; jde o odvoditelný údaj, u něhož se ukládá neměnné datum narození (birth date) a aktuální věk se dynamicky dopočítává."
      },
      {
        "id": "dd_q43",
        "module": "dd_m5",
        "question": "It is possible to implement non-transferability via a simple Foreign Key Relationship. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Nepřevoditelný vztah (non-transferable relationship) definuje pravidlo, že po přiřazení podřízeného záznamu k nadřízenému již toto propojení nelze nikdy změnit (převést na jiného rodiče). Běžné omezení cizího klíče (Foreign Key) v relační databázi kontroluje pouze referenční integritu (zda rodičovský záznam existuje), ale nezabraňuje operacím UPDATE na sloupci cizího klíče. Pro vynucení nepřevoditelnosti ve fyzické databázi je nutné použít dodatečný mechanismus, typicky databázový trigger (např. BEFORE UPDATE v PL/SQL, který vyvolá výjimku při pokusu o změnu hodnoty FK)."
      },
      {
        "id": "dd_q44",
        "module": "dd_m5",
        "question": "Which of the following is a valid reason for considering a Subtype Implementation?",
        "code": null,
        "options": [
          "The common access paths for the supertypes are different.",
          "The resulting table will reside in a single database and be used by just ONE user.",
          "Business functionality, business rules, access paths, and frequency of access are all very different between the subtypes.",
          "Most of the relationships are at the supertype level."
        ],
        "correct": 2,
        "explanation": "Při transformaci hierarchie nadtyp/podtypy do fyzického schématu se implementace podtypů (Subtype Implementation – vytvoření samostatné tabulky pro každý podtyp) volí tehdy, pokud se obchodní funkcionalita, integritní pravidla, přístupové cesty a frekvence přístupu mezi jednotlivými podtypy výrazně liší. Pokud by naopak většina vztahů a atributů byla společná na úrovni nadtypu a přístupové vzory byly jednotné, preferuje se implementace nadtypu do jediné společné tabulky (Supertype Implementation)."
      },
      {
        "id": "dd_q45",
        "module": "dd_m1",
        "question": "Entities are usually verbs. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Entity v ER modelování představují objekty, osoby, místa, koncepty nebo události, o nichž organizace potřebuje ukládat data, a proto jsou zásadně pojmenovávány podstatnými jmény (nouns) v jednotném čísle (např. EMPLOYEE, ORDER, PRODUCT, DEPARTMENT). Slovesa (verbs) se naopak používají k pojmenování vztahů (relationships), které popisují interakce mezi entitami (např. 'places', 'contains', 'assigned to')."
      },
      {
        "id": "dd_q46",
        "module": "dd_m5",
        "question": "A Hierarchical relationship is a series of relationships that reflect entities organized into successive levels. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "Tvrzení je pravdivé (True). Hierarchický vztah představuje sérii vztahů, které vyjadřují uspořádání entit do postupných (sukcesivních) úrovní, kde každá nižší úroveň závisí na úrovni bezprostředně nad ní. Příkladem v databázovém modelování je geografická hierarchie (KONTINENT -> ZEMĚ -> KRAJ -> MĚSTO) nebo víceúrovňová organizační struktura."
      },
      {
        "id": "dd_q47",
        "module": "dd_m1",
        "question": "Which symbol is used to show that a particular attribute is mandatory?",
        "code": null,
        "options": [
          "&",
          "*",
          "o",
          "#"
        ],
        "correct": 1,
        "explanation": "V Barkerově notaci ER diagramů používané v materiálech Oracle Academy se povinný (mandatory) atribut značí hvězdičkou (*). Kroužek (o) značí nepovinný (optional) atribut, mřížka (#) značí atribut, který je součástí unikátního identifikátoru (UID), a ampersand (&) nemá v Barkerově notaci žádný význam."
      },
      {
        "id": "dd_q48",
        "module": "dd_m5",
        "question": "Cascading UIDs are a feature often found in what type of Relationship?",
        "code": null,
        "options": [
          "Heirarchical Relationship",
          "Recursive Relationship",
          "Invalid Relationship",
          "General Relationship"
        ],
        "correct": 0,
        "explanation": "Kaskádové identifikátory (Cascading UIDs) jsou typickým rysem hierarchických vztahů (Hierarchical Relationship) modelovaných pomocí identifikačních (barred) vztahů. V takové hierarchii (např. BUDOVA -> POSCHODÍ -> MÍSTNOST) přebírá každá podřízená entita do svého primárního identifikátoru celý identifikátor své nadřazené entity. Identifikátory se tak postupně kaskádovitě skládají a propagují směrem dolů hierarchií."
      },
      {
        "id": "dd_q49",
        "module": "dd_m2",
        "question": "Which of the following are used to show Cardinality on an ERD? (Choose Two)",
        "code": null,
        "options": [
          "Single toe.",
          "Dashed line.",
          "Crow's foot.",
          "Solid line."
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "Správné odpovědi jsou 'Single toe.' a 'Crow's foot.'. V Barkerově notaci ER diagramů určuje kardinalitu (kolik instancí se může účastnit vztahu) zakončení linky: 'Single toe' (rovné zakončení čáry bez větvení) značí kardinalitu 'jeden' (one and only one), zatímco 'Crow's foot' (vraní nožka / rozvětvení) značí kardinalitu 'mnoho' (one or more). Plná čára (Solid line) a čárkovaná čára (Dashed line) slouží k vyjádření volitelnosti vztahu (Optionality – povinný vs. nepovinný), nikoli kardinality."
      },
      {
        "id": "dd_q50",
        "module": "dd_m2",
        "question": "Relationship names are not shown on an ERD. True or False?",
        "code": null,
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "Tvrzení je nepravdivé (False). Názvy vztahů (relationship labels) se na ER diagramu v Barkerově notaci explicitně zobrazují na obou koncích linky vztahu. Tyto popisky umožňují číst vztahy v obou směrech jako celistvé gramatické věty (např. 'Each EMPLOYEE must be assigned to one and only one DEPARTMENT' a 'Each DEPARTMENT may be responsible for one or more EMPLOYEES')."
      }
    ]
  },
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
        "correct": [
          1,
          3
        ],
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
        "correct": [
          1,
          2
        ],
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
                      "open a tab with information about your browser.",
                      "clear all inputs on the current page.",
                      "generate a page with information about the browser’s status.",
                      "generate and load a minimal blank HTML page into the current tab."
                ],
                "correct": 3,
                "explanation": "Entering “about:blank” in the address bar of your browser will load a blank page. The “about:blank” URL is a special URL that represents an empty or blank page. When you navigate to “about:blank”, the browser will display a blank page with no content."
          },
          {
                "id": "js_q02",
                "module": "js_m2",
                "question": "Analyze the following code:\n\nWhat will appear to the console as a result?",
                "code": "let id = \"100\";\n{\n  let id = 200;\n  id = id + 1;\n  console.log(id);\n}",
                "options": [
                      "1001",
                      "101",
                      "201",
                      "200"
                ],
                "correct": 2,
                "explanation": "Let’s analyze the code step by step:\n\n• The variable id is declared and initialized with the string value “100” using the let keyword in the global scope.\n\n• A block of code is defined using curly braces {}. This block creates a new block scope.\n\n• Inside the block, a new variable id is declared and initialized with the value 200 using the let keyword. This creates a new block-scoped variable id that shadows the outer variable id.\n\n• The value of the block-scoped id is updated by adding 1 to it using the id = id + 1 statement.\n\n• The resulting value of id, which is 201, is printed to the console using console.log(id).\n\nSince the console.log(id) statement is inside the block, it refers to the block-scoped variable id, which has a value of 201 after adding 1 to 200. Therefore, when the code is executed, 201 will appear in the console."
          },
          {
                "id": "js_q03",
                "module": "js_m2",
                "question": "Select a set of data types, containing only complex types:",
                "code": null,
                "options": [
                      "Object, String",
                      "Boolean, Number, Bigint",
                      "Array, Object",
                      "Array, Object, String"
                ],
                "correct": 2,
                "explanation": "In JavaScript, complex data types, also known as reference types, include objects, arrays, and functions. Here is a set of complex data types:\n\n• Object: An object is an unordered collection of key-value pairs, where each value can be of any data type, including other complex types. Objects are created using curly braces {} and can be used to represent more complex data structures.\n\n• Array: An array is an ordered list of values. It can hold elements of any data type, including other complex types. Arrays are created using square brackets [] and provide methods for manipulating and accessing their elements.\n\n• Function: A function is a reusable block of code that can be executed when called. Functions are created using the function keyword or by using arrow function syntax (=>). They can take parameters, perform actions, and return values."
          },
          {
                "id": "js_q04",
                "module": "js_m2",
                "question": "We can replace the declaration let x = 3e-3; with:",
                "code": null,
                "options": [
                      "let x = 3000;",
                      "let x = 0.003;",
                      "let x = 0.0003;",
                      "let x = 0.333;"
                ],
                "correct": 1,
                "explanation": "The correct replacement for the declaration let x = 3e-3; would be: let x = 0.003;"
          },
          {
                "id": "js_q05",
                "module": "js_m2",
                "question": "Using the string interpolation technique, we can create the string:",
                "code": "\"I do not like travelling by plane\"",
                "options": [
                      "let means = \"plane\";\nlet msg = 'I do not like travelling by \\{ means \\}';",
                      "let means = \"plane\";\nlet msg = \"I do not like travelling by ${ means }\";",
                      "let means = \"plane\";\nlet msg = `I do not like travelling by ${means}`;",
                      "let means = \"plane\";\nlet msg = `I do not like travelling by {means}`;"
                ],
                "correct": 2,
                "explanation": "To create the string “I do not like travelling by plane” using string interpolation and store it in the msg variable, the correct command would be:\n\nlet means = “plane”;\n\nlet msg = `I do not like travelling by ${means}`;\n\nString interpolation in JavaScript is achieved by using backticks (“`) as the string delimiter. Within the backticks, you can include expressions or variables by wrapping them in ${}. The expression or variable within ${} will be evaluated and its value will be inserted into the resulting string.\n\nIn this case, the variable means is assigned the value “plane”. The string interpolation syntax ${means} is used within backticks to insert the value of means into the string. Thus, the resulting value of msg will be “I do not like travelling by plane”."
          },
          {
                "id": "js_q06",
                "module": "js_m4",
                "question": "We declare a movie object, with two fields: title and year:\n\nTo change the value of the title field to \"Matrix\" we need to perform:",
                "code": "let movie = {\n  title: \"Life\",\n  year: 1999\n};",
                "options": [
                      "movie[title] = \"Matrix\";",
                      "movie.title = \"Matrix\";",
                      "movie{title} = \"Matrix\";",
                      "title->movie = \"Matrix\";"
                ],
                "correct": 1,
                "explanation": "In JavaScript, you can access and modify object properties using dot notation (object.property). In this case, movie.title accesses the title property of the movie object, and the assignment = is used to change its value to “Matrix”. After executing the command, the title field in the movie object will be updated to “Matrix”.\n\nmovie.title = “Matrix”;"
          },
          {
                "id": "js_q07",
                "module": "js_m4",
                "question": "You declare the following array of animals: let animals = [\"canary\", \"dog\", \"cat\"];. Then, you call the method animals.push(\"hamster\");. What will the animals array look like after calling the method?",
                "code": null,
                "options": [
                      "[\"canary\", \"dog\", \"cat\", \"hamster\"]",
                      "[\"hamster\"]",
                      "[\"hamster\", \"canary\", \"dog\", \"cat\"]",
                      "[\"canary\", \"dog\", \"cat\"]"
                ],
                "correct": 0,
                "explanation": "After calling the animals.push(“hamster”); method, the animals array will look like this:\n\n[“canary”, “dog”, “cat”, “hamster”]\n\nThe push() method in JavaScript is used to add one or more elements to the end of an array. In this case, the method animals.push(“hamster”) adds the string value “hamster” to the end of the animals array. As a result, the array is modified, and “hamster” becomes the last element in the array."
          },
          {
                "id": "js_q08",
                "module": "js_m1",
                "question": "A JavaScript code includes the console.log(\"http://somethingNew.org\"); command. Its execution will:",
                "code": null,
                "options": [
                      "display on the console information about the progress of the http://somethingNew.org page loading.",
                      "cause the page http://somethingNew.org to be loaded into the browser.",
                      "send a log with information about the currently executed script to the indicated address http://somethingNew.org.",
                      "display the following message on the console: \"http://somethingNew.org\"."
                ],
                "correct": 3,
                "explanation": "When the JavaScript code console.log(“http://somethingNew.org”); is executed, it will print the string “http://somethingNew.org” to the console.\n\nThe console.log() function in JavaScript is used to output messages to the console. In this case, the code includes console.log(“http://somethingNew.org”), which specifies the string “http://somethingNew.org” as the argument to be logged.\n\nWhen the code is executed, the specified string will be displayed in the console. It does not perform any other action apart from printing the message to the console output."
          },
          {
                "id": "js_q09",
                "module": "js_m4",
                "question": "Analyze the code snippet:\n\nWhat value will the index variable have?",
                "code": "let winter = [\"December\", \"January\", \"February\"];\nlet index = winter.indexOf(\"February\");",
                "options": [
                      "\"February\"",
                      "2",
                      "3",
                      "1"
                ],
                "correct": 1,
                "explanation": "The code snippet let winter = [“December”, “January”, “February”]; let index = winter.indexOf(“February”); will assign the value 2 to the index variable.\n\nHere’s a breakdown of the code:\n\n• An array winter is declared and initialized with three elements: “December”, “January”, and “February”.\n\n• The indexOf() method is called on the winter array with the argument “February”. This method searches the array for the specified element and returns the index of the first occurrence of that element. If the element is not found, it returns -1.\n\n• Since “February” is present in the winter array, the indexOf() method will find it and return the index 2, indicating that “February” is located at the third position in the array.\n\n• The value 2 is assigned to the index variable using the let index = statement.\n\nTherefore, after executing the code, the index variable will have the value 2."
          },
          {
                "id": "js_q10",
                "module": "js_m4",
                "question": "In the daysOfWeek variable, you place an array with the names of the days of the week. Which method will you call to reverse the order of the array elements.",
                "code": null,
                "options": [
                      "daysOfWeek.invert();",
                      "daysOfWeek = reverse(daysOfWeek);",
                      "daysOfWeek.reverse();",
                      "daysOfWeek.order(-1);"
                ],
                "correct": 2,
                "explanation": "To reverse the order of the elements in the daysOfWeek array, you can call the reverse() method."
          },
          {
                "id": "js_q11",
                "module": "js_m3",
                "question": "Review the following code:\n\nWhat will appear on the console as a result?",
                "code": "let msg1 = 'hello';\nlet msg2 = msg1.slice(-1);\nconsole.log(msg2 ? msg2 : msg2 + msg1);",
                "options": [
                      "o",
                      "ohello",
                      "hello",
                      "h"
                ],
                "correct": 0,
                "explanation": "The code snippet will display the letter “o” on the console as a result.\n\nLet’s break down the code:\n\n• The variable msg1 is declared and assigned the string value ‘hello’.\n\n• The variable msg2 is assigned the result of msg1.slice(-1). The slice() method is used to extract a portion of a string. In this case, -1 as the parameter means to extract the last character of msg1, which is ‘o’.\n\n• The console.log() statement is called, which outputs a value to the console.\n\n• The expression msg2 ? msg2 : msg2 + msg1 is evaluated and passed as the argument to console.log().\n\n• In this expression, msg2 is truthy since it contains the letter ‘o’. Therefore, the result of the expression will be the value of msg2, which is ‘o’.\n\n• As a result, the letter ‘o’ will be displayed on the console.\n\n \n\nSo, when the code is executed, the console will display the letter ‘o’."
          },
          {
                "id": "js_q12",
                "module": "js_m3",
                "question": "Analyze the following code:\n\nWhat value will the test variable have if, after running the code, we immediately press the OK button on the newly created dialog?",
                "code": "let test = prompt(\"Run\", \"code\");",
                "options": [
                      "true",
                      "OK",
                      "code",
                      "Run"
                ],
                "correct": 2,
                "explanation": "The value of the test variable will depend on the user’s input when the prompt dialog appears. If the user clicks the OK button, the test variable will be assigned the string (“code”). Since it is defined in the code. Therefore, the test variable will have the value “code”."
          },
          {
                "id": "js_q13",
                "module": "js_m3",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of its execution?",
                "code": "let x = false || true;\nlet y = \"true\" && \"false\";\nlet z = false && true;\nconsole.log(`${x} ${y} ${z}`);",
                "options": [
                      "false true true",
                      "false false false",
                      "false false true",
                      "true false false"
                ],
                "correct": 3,
                "explanation": "Let’s break down the code:\n\n• The variable x is assigned the value of the logical OR operation between false and true. In a logical OR operation, if any of the operands is true, the result will be true. In this case, since the second operand (true) is true, the result of false || true is true, which is assigned to x.\n\n• The variable y is assigned the value of the logical AND operation between the string “true” and the string “false”. In a logical AND operation, if all operands are true, the result will be the last operand. In this case, since both “true” and “false” are considered truthy values, the result of “true” && “false” is “false”, which is assigned to y.\n\n• The variable z is assigned the value of the logical AND operation between false and true. In a logical AND operation, if any of the operands is false, the result will be false. In this case, since the first operand (false) is false, the result of false && true is false, which is assigned to z.\n\n• The console.log() statement is called to output a value to the console.\n\n• The expression ${x} ${y} ${z} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of x, y, and z into a single string with spaces in between.\n\n• As a result, the console will display true false false."
          },
          {
                "id": "js_q14",
                "module": "js_m3",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of its execution?",
                "code": "let a = true && 20;\nlet b = 0 || 20;\nlet c = 0 && 20;\nconsole.log(`${a} ${b} ${c}`);",
                "options": [
                      "true 20 0",
                      "1 1 0",
                      "true true false",
                      "20 20 0"
                ],
                "correct": 3,
                "explanation": "Let’s break down the code:\n\n• The variable a is assigned the value of the logical AND operation between true and 20. In a logical AND operation, if all operands are true, the result will be the last operand. In this case, both true and 20 are considered truthy values, so the result of true && 20 is 20, which is assigned to a.\n\n• The variable b is assigned the value of the logical OR operation between 0 and 20. In a logical OR operation, if any of the operands is true, the result will be the first truthy operand encountered. In this case, 0 is considered a falsy value, so the result of 0 || 20 is 20, which is assigned to b.\n\n• The variable c is assigned the value of the logical AND operation between 0 and 20. In a logical AND operation, if any of the operands is false, the result will be false. In this case, 0 is considered a falsy value, so the result of 0 && 20 is 0, which is assigned to c.\n\n• The console.log() statement is called to output a value to the console.\n\n• The expression ${a} ${b} ${c} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, and c into a single string with spaces in between.\n\n• As a result, the console will display 20 20 0."
          },
          {
                "id": "js_q15",
                "module": "js_m3",
                "question": "Examine the following code:\n\nWhat will appear on the console as a result?",
                "code": "let a = 20 + \"10\";\nlet b = 20 + +\"10\";\nlet c = 20 + -\"10\" + \"10\";\nlet d = \"10\" - \"10\" + \"100\";\nlet e = \"A\" - \"B\" + 0xA;\nconsole.log(`${a}, ${b}, ${c}, ${d}, ${e}`);",
                "options": [
                      "30, 30, 20, 100, 2",
                      "30, 31, 39, 100, NaN",
                      "2010, 2010, 20-1010, 0100, NaN",
                      "2010, 30, 1010, 0100, NaN"
                ],
                "correct": 3,
                "explanation": "Let’s break down the code:\n\n• The variable a is assigned the result of the concatenation between the string “20” and the string “10”. When the + operator is used with a string, it performs string concatenation. So, “20” + “10” results in the string “2010”, which is assigned to a.\n\n• The variable b is assigned the result of the addition between the number 20 and the numeric conversion of the string “10”. The unary + operator before “10” converts it into a number, resulting in 20 + 10, which is 30, assigned to b.\n\n• The variable c is assigned the result of the addition between the number 20 and the negated numeric conversion of the string “10”, followed by the concatenation with the string “10”. The unary – operator before “10” converts it into a number and negates it, resulting in -10. Then, 20 + (-10) is 10, which is concatenated with the string “10”, resulting in “1010”, assigned\n\nto c.\n\n• The variable d is assigned the result of the subtraction between the numeric conversions of the strings “10” and “10”, followed by the concatenation with the string “100”. Both “10” and “10” are converted into numbers, resulting in 10 – 10, which is 0. Then, “0” + “100” is “0100”, assigned to d.\n\n• The variable e is assigned the result of the subtraction between the numeric conversions of the strings “A” and “B”, followed by the addition of 0xA (which is 10 in hexadecimal). Both “A” and “B” cannot be converted into valid numbers, so the result is NaN. Then, NaN + 10 is still NaN, assigned to e.\n\n• The console.log() statement is called to output the values to the console.\n\n• The expression ${a}, ${b}, ${c}, ${d}, ${e} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, c, d, and e into a single string separated by commas.\n\n• As a result, the console will display “2010, 30, 1010, 0100, NaN”."
          },
          {
                "id": "js_q16",
                "module": "js_m5",
                "question": "Which of the following loop instructions checks the loop continuation condition only after the iteration has been completed?",
                "code": null,
                "options": [
                      "for ... in",
                      "while",
                      "for",
                      "do ... while"
                ],
                "correct": 3,
                "explanation": "The “do … while” loop instruction checks the loop continuation condition only after the iteration has been completed. In the “do … while” loop, the code block is executed first, and then the condition is checked. If the condition evaluates to true, the loop continues executing. This guarantees that the code block is executed at least once, regardless of the condition."
          },
          {
                "id": "js_q17",
                "module": "js_m6",
                "question": "The following function using a function expression has been defined:\n\nWhat could the definition of the corresponding arrow function look like?",
                "code": "let sum = function (a, b) {\n    return (a + b);\n}",
                "options": [
                      "let sum = function (a, b) => {\n     return (a + b); }",
                      "let sum = (a, b) => a + b;",
                      "let sum = (a, b) => { a + b; };",
                      "let sum = (a, b)-- > a + b;"
                ],
                "correct": 1,
                "explanation": "In arrow function syntax, the parameters are specified within parentheses (a, b), followed by the arrow =>, and then the expression\n\na + b representing the function body. If the function body is a single expression, you can omit the curly braces {} and the return keyword."
          },
          {
                "id": "js_q18",
                "module": "js_m6",
                "question": "The temp array contains air temperature data measured over a period of time. You want to display the minimal temperature using the following code:\n\nWhat should the declaration of the min variable look like?",
                "code": "temp.forEach(e => min = min > e ? e : min);\nconsole.log(min);",
                "options": [
                      "let min;",
                      "It’s not necessary, as it will be declared automatically on first use.",
                      "let min = temp[0];",
                      "let min = 0;"
                ],
                "correct": 2,
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
                      "5",
                      "2"
                ],
                "correct": 2,
                "explanation": "The code will output 5 in the console."
          },
          {
                "id": "js_q20",
                "module": "js_m5",
                "question": "Analyze the following code:\n\nWhich statement can replace the for from the example?",
                "code": "for(let a=1; a<10; a+=2) {\n    console.log(a);\n};",
                "options": [
                      "let counter = 1;\nwhile (counter++ < 10) console.log(counter++);",
                      "let counter = 0;\nwhile (counter < 9) console.log(counter++);",
                      "let counter = 0;\nwhile (counter++ < 10) console.log(counter++);",
                      "let counter = 0;\nwhile (counter < 10) console.log(counter++);"
                ],
                "correct": 3,
                "explanation": "The correct statement that can replace the for loop from the example is:\n\nlet counter = 0;\n\nwhile (counter < 10) console.log(counter++);"
          },
          {
                "id": "js_q21",
                "module": "js_m5",
                "question": "Analyze the following code:\n\nWhat will appear on the console as a result?",
                "code": "let colors = ['red', 'green', 'blue'];\nfor (let c of colors) console.log(c);",
                "options": [
                      "['red', 'green', 'blue']",
                      "red\ngreen\nblue",
                      "0\n1\n2",
                      "3"
                ],
                "correct": 1,
                "explanation": "The code is using a for…of loop to iterate over the elements of the colors array. In each iteration, the loop assigns the current element to the variable c, and then console.log(c) prints the value of c to the console. Since the colors array contains three elements (‘red’, ‘green’, and ‘blue’), the loop will iterate three times, printing each element on a separate line in the console."
          },
          {
                "id": "js_q22",
                "module": "js_m5",
                "question": "Analyze the following code:\n\nWhat will appear on the console as a result?",
                "code": "let route = {distance: 131, elevation: 1.4};\nfor (let k in route) console.log(k);",
                "options": [
                      "131\n1.4",
                      "distance",
                      "distance\nelevation",
                      "2"
                ],
                "correct": 2,
                "explanation": "The code is using a for…in loop to iterate over the properties of the route object. In each iteration, the loop assigns the current property name to the variable k, and then console.log(k) prints the value of k to the console. The route object has two properties: distance and elevation. Therefore, the loop will iterate twice, printing each property name on a separate line in the console."
          },
          {
                "id": "js_q23",
                "module": "js_m6",
                "question": "Examine the following code:\n\nWhat will appear on the console as a result?",
                "code": "let a = (n) => {\n    return n > 2 ? n * a(n - 1) : 2\n}\nconsole.log(a(6));",
                "options": [
                      "120",
                      "720",
                      "6",
                      "4"
                ],
                "correct": 1,
                "explanation": "The code defines an arrow function a that takes a parameter n. Inside the function, there is a ternary operator that checks if n is greater than 2. If it is, the function recursively calls itself with the argument (n – 1) and multiplies the result by n. This recursion continues until n reaches 2, at which point the function returns 2. In the console.log(a(6)) statement, the function a is called with the argument 6. The function recursively calculates the factorial of 6 (6 * 5 * 4 * 3 * 2), which results in 720. This value is then printed to the console using console.log."
          },
          {
                "id": "js_q24",
                "module": "js_m6",
                "question": "Examine the following code:\n\nWhat should the mult function declaration look like if the execution of this code results in a value of 20 in the console?",
                "code": "let x = mult(2)(10);\nconsole.log(x); // -> 20",
                "options": [
                      "let mult = function (a) {\n    return function (b) {\n        return a * b;\n   }\n}",
                      "There is an error in the code and it is not possible to declare such a function correctly.",
                      "let mult = function (a, b) {\n    return a * b;\n}",
                      "let mult = function (a, b) {\n     return b ? mult(b) : mult(a);\n}"
                ],
                "correct": 0,
                "explanation": "The correct declaration for the mult function that would result in the desired output of 20 in the console is:\n\nlet mult = function (a) {\n\nreturn function (b) {\n\nreturn a * b;\n\n}\n\n}"
          },
          {
                "id": "js_q25",
                "module": "js_m2",
                "question": "Analyze the code snippet:\n\nAfter declaring the counter variable, we want to add a short comment with information about what the variable is used for. To do this, we modify the line with the declaration to the form:",
                "code": "let counter = 0;\nlet userName = \"John\";",
                "options": [
                      "// let counter = 0; user visit counter",
                      "let counter = 0; // user visit counter",
                      "let counter = 0; ;;user visit counter",
                      "let counter = 0; /* user visit counter"
                ],
                "correct": 1,
                "explanation": "In the modified line, the comment // user visit counter provides information about the purpose or usage of the counter variable."
          },
          {
                "id": "js_q26",
                "module": "js_m6",
                "question": "Examine the following code:\n\nHow should the function cmp be declared if, after the code execution, the elements of the array x are sorted in ascending order?",
                "code": "x = [40, 10, 30, 20, 50];\nx.sort(cmp);",
                "options": [
                      "let cmp = (a, b) => b < a;",
                      "let cmp = (a, b) => a - b;",
                      "let cmp = (a, b) => b > a;",
                      "let cmp = (a, b) => b - a;"
                ],
                "correct": 1,
                "explanation": "This comparison function subtracts b from a, which will result in a negative value if a should be placed before b in the sorted order, a positive value if b should be placed before a, and zero if they are considered equal. Here is the code: let cmp = (a, b) => a – b;"
          },
          {
                "id": "js_q27",
                "module": "js_m6",
                "question": "Analyze the following code, which is missing one line:\n\nWhat should the missing line look like if the execution of this code results in the console displaying the values 2, 1, and 0 in sequence?",
                "code": "let counter = 2;\nlet interval = setInterval(() => {\n    console.log(counter);\n    // Insert missing line here.\n}, 1000);",
                "options": [
                      "if (counter-- >= 0) clearInterval(interval);",
                      "if (counter-- <= 0) clearInterval(interval);",
                      "while (counter-- >= 0) clearInterval(interval);",
                      "clearInterval(interval);"
                ],
                "correct": 1,
                "explanation": "This line checks if the value of counter is less than or equal to 0 after decrementing it. If counter becomes 0 or negative, it means the desired sequence of numbers (2, 1, 0) has been displayed. At that point, clearInterval(interval) is called to stop the interval from continuing.\n\nThe correct line is: if (counter– <= 0) clearInterval(interval);"
          },
          {
                "id": "js_q28",
                "module": "js_m6",
                "question": "Analyze the following code:\n\nBefore declaring the function, we should add one more line of code. Which one, if the execution of the completed code will result in the console displaying the value 9?",
                "code": "function execute(todo, a, b) {\n    return todo(a, b);\n}\nconsole.log(execute(power, 3, 2));",
                "options": [
                      "let power = () => a ** b;",
                      "let power = 9;",
                      "let power = (x,y) => x * y;",
                      "let power = (x, y) => x ** y;"
                ],
                "correct": 3,
                "explanation": "To ensure that the execution of the completed code results in the console displaying the value 9, the line defines the power function as an arrow function that calculates the power of x raised to the y exponent using the ** operator."
          },
          {
                "id": "js_q29",
                "module": "js_m6",
                "question": "Analyze the following code:\n\nWhat will happen as a result of its execution?",
                "code": "const a = \"hello\";\n    console.log(a.toUpperCase());\n}\n} catch (error) {\n    console.log(a)\n} finally {\n    console.log(a);\n}",
                "options": [
                      "The following words will appear in the console on subsequent lines: HELLO, hello, and hello.",
                      "The following words will appear in the console on subsequent lines: HELLO and hello.",
                      "The following words will appear in the console on subsequent lines: hello and hello.",
                      "The following word will appear in the console: HELLO."
                ],
                "correct": 1,
                "explanation": "The line console.log(a.toUpperCase()); will print “HELLO” to the console. It uses the toUpperCase() method to convert the string a to uppercase. The try block does not have any code, so it won’t execute any specific statements. The catch block will not be triggered because there is no error thrown in the preceding code. The finally block will execute regardless of whether there was an error or not. In this case, it will print “hello” to the console, as it references the a variable outside the try-catch block, which is not affected by the toUpperCase() call."
          },
          {
                "id": "js_q30",
                "module": "js_m6",
                "question": "Placing a debugger; statement in the program code will:",
                "code": null,
                "options": [
                      "stop the program without the ability to continue, as long as the execution environment supports “debugging functionality”.",
                      "pause the program with the ability to continue, as long as the execution environment supports “debugging functionality”.",
                      "put the interpreter into report mode, which will cause the console to print out all sequentially executed commands.",
                      "cause the console to display the completion status of the statement preceding the debugger."
                ],
                "correct": 1,
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
                      "let car = {make: 'Jeep', model: 'Cherokee'};",
                      "let car = [make: 'Jeep', model: 'Cherokee'];",
                      "let car = [make: 'Jeep'];",
                      "var car = {'Jeep'};"
                ],
                "correct": 0,
                "explanation": "To output 'Jeep' via console.log(car.make), the car variable must be an object literal with a 'make' property set to 'Jeep'. In JavaScript, object literals use curly braces with key-value pairs: {make: 'Jeep', model: 'Cherokee'}. Options using square brackets [] define invalid array syntax for key-value pairs."
          },
          {
                "id": "js2_q02",
                "module": "js2_m1",
                "question": "You are working on a web application that handles geometric shapes. You have created a JavaScript object to represent a circle:\n\nWhat is the correct formula to calculate the circumference based on the circle object?",
                "code": "let circle = {\n    center: {\n        x: 10,\n        y: 20\n    },\n    radius: 30\n};",
                "options": [
                      "2 * circle.radius * Math.PI",
                      "circle.radius * circle.radius * Math.PI",
                      "2 * circle.center.x * Math.PI",
                      "circle.radius + circle.center.y"
                ],
                "correct": 0,
                "explanation": "The circumference of a circle is calculated using the formula 2 * π * r. In JavaScript, π is accessed via Math.PI and the radius property of the circle object is accessed via circle.radius. Therefore, the correct expression is 2 * circle.radius * Math.PI."
          },
          {
                "id": "js2_q03",
                "module": "js2_m1",
                "question": "You have declared a user object that has one property: full name\n\nWhich of the following is the correct way to refer to this property?",
                "code": "let user = {\n    'full name': 'Mickey Mouse'\n};",
                "options": [
                      "user['full name']",
                      "user[full name]",
                      "user.'full name'",
                      "You cannot use a property name consisting of several words."
                ],
                "correct": 0,
                "explanation": "When an object property name contains spaces or special characters (such as 'full name'), dot notation (user.'full name') is invalid syntax. Bracket notation with a string key, user['full name'], must be used to access the property."
          },
          {
                "id": "js2_q04",
                "module": "js2_m1",
                "question": "What will be the result of executing the following code?",
                "code": "let geoposition = {\n    latitude: 40.7128,\n    longitude: -74.0060,\n    altitude: 100,\n    city: \"New York\"\n};\nObject.keys(geoposition).forEach(key =>\n    console.log(geoposition[key])\n);",
                "options": [
                      "It will display only the property names without their values.",
                      "It will display the values of all the properties.",
                      "It will cause an error because forEach cannot be used with Object.keys.",
                      "It will display a syntax error due to incorrect usage of geoposition."
                ],
                "correct": 1,
                "explanation": "Object.keys(geoposition) returns an array containing the property names (keys) of the geoposition object. When iterating with forEach(key => console.log(geoposition[key])), each key is used to dynamically access and log the corresponding property value. Therefore, it will display the values of all the properties."
          },
          {
                "id": "js2_q05",
                "module": "js2_m1",
                "question": "You have declared two tree objects:\n\nWhich of the following comparisons will return true?",
                "code": "let tree1 = {\n    species: 'oak'\n};\nlet tree2 = {\n    species: 'oak'\n};",
                "options": [
                      "(tree1.species == tree2.species) && (tree1.species == tree2.species)",
                      "tree1 == tree2",
                      "tree1 === tree2",
                      "tree1 same tree2"
                ],
                "correct": 0,
                "explanation": "In JavaScript, objects are reference types. Comparing two distinct object instances with == or === checks reference identity (whether they point to the same memory location), which evaluates to false even if their properties have identical values. However, comparing primitive property values (tree1.species == tree2.species) compares the string 'oak' with 'oak', which evaluates to true."
          },
          {
                "id": "js2_q06",
                "module": "js2_m1",
                "question": "What will be the population of the city stored in \"largestCity\" after executing this code?",
                "code": "let city1 = {\n    name: 'New York',\n    population: 8537673\n};\nlet city2 = {\n    name: 'Los Angeles',\n    population: 39776830\n};\nlet largestCity = city1.population > city2.population ? { ...city1 } : { ...city2 };",
                "options": [
                      "8537673",
                      "39776830",
                      "124744503",
                      "'Los Angeles'"
                ],
                "correct": 1,
                "explanation": "The ternary operator evaluates city1.population > city2.population. Since 8537673 > 39776830 is false, the expression returns { ...city2 }, creating a shallow copy of city2. Therefore, largestCity.population will be 39776830 (Los Angeles)."
          },
          {
                "id": "js2_q07",
                "module": "js2_m1",
                "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: Huck Finn",
                "code": "let user = {\n    name: 'Huck',\n    surname: 'Finn',\n    // Insert line of code here.\n};\nuser.show();",
                "options": [
                      "show: function() {console.log(`${this.name} ${this.surname}`);}",
                      "show: function() {console.log(`${name} ${surname}`);}",
                      "show: function(this) {console.log(`${this.name} ${this.surname}`);}",
                      "user.show = {console.log(`${this.name} ${this.surname}`);}"
                ],
                "correct": 0,
                "explanation": "In an object literal, a method is defined using standard method syntax or a function expression assigned to a key: show: function() { console.log(`${this.name} ${this.surname}`); }. Inside the method, the 'this' keyword refers to the user object instance to access its properties."
          },
          {
                "id": "js2_q08",
                "module": "js2_m1",
                "question": "You want to create a setter for the user's first name, allowing you to set both \"_firstName\" and \"_lastName\" when updating the first name. Which line of code should you insert?",
                "code": "let user = {\n    _firstName: 'John',\n    _lastName: 'Doe',\n    // Insert a line of code here.\n};",
                "options": [
                      "set firstName(name) { this._firstName = name; }",
                      "_firstName() { this._firstName = name; }",
                      "this._firstName = name;",
                      "firstName(name) { this._firstName = name; }"
                ],
                "correct": 0,
                "explanation": "In an object literal, a setter is defined using the 'set' keyword followed by the property identifier and a single parameter: set firstName(name) { this._firstName = name; }. This allows assigning user.firstName = 'John' to trigger the setter function."
          },
          {
                "id": "js2_q09",
                "module": "js2_m1",
                "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: Lhotse undefined undefined",
                "code": "let mountain = {\n    name: 'Everest',\n    range: 'Himalayas'\n};\n// Insert line of code here.\ndelete mountain.range;\nmountain.name = 'Lhotse';\nmountain.height = 8516;\nconsole.log(`${mountain.name} ${mountain.range} ${mountain.height}`);",
                "options": [
                      "Object.preventExtensions(mountain);",
                      "Object.freeze(mountain);",
                      "Object.seal(mountain);",
                      "An empty line"
                ],
                "correct": 1,
                "explanation": "Object.freeze() freezes an object: it prevents adding new properties, removing existing properties, and modifying values of existing writable properties. Therefore, mountain.name is not changed to 'Lhotse', mountain.range is not deleted, and mountain.height is not added (remaining undefined)."
          },
          {
                "id": "js2_q10",
                "module": "js2_m1",
                "question": "What should you insert into the function so that the created user object contains the name and age properties?",
                "code": "function createUser(name, age) {\n    // Insert a line of code here.\n}\nconst user = createUser('Alice', 25);",
                "options": [
                      "return { name: name, age: age };",
                      "this.name = name; this.age = age;",
                      "return { this.name: name, this.age: age };",
                      "createUser.name = name; createUser.age = age;"
                ],
                "correct": 0,
                "explanation": "In JavaScript, a factory function creates and returns a new object. Using object literal syntax, return { name: name, age: age }; returns an object with the specified properties initialized from the function parameters."
          },
          {
                "id": "js2_q11",
                "module": "js2_m2",
                "question": "There is one line of code missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: 100",
                "code": "let Point = function(x, y) {\n    // Insert line of code here.\n    this.y = y;\n};\nlet point = new Point(100, 0);\nlet ColorPoint = function(color) {\n    this.color = color;\n};\nColorPoint.prototype = point;\nlet cpoint = new ColorPoint('green');\nconsole.log(cpoint.x);",
                "options": [
                      "this.x = x;",
                      "return x;",
                      "point.x = x;",
                      "Point.x = x;"
                ],
                "correct": 0,
                "explanation": "In a constructor function, the 'this' keyword refers to the new object instance being created with the 'new' operator. Assigning this.x = x; properly initializes the property x on the newly created instance."
          },
          {
                "id": "js2_q12",
                "module": "js2_m2",
                "question": "Which of the following code snippets correctly demonstrates the creation of an anonymous class for a \"Person\" object with a constructor that initializes the properties \"name\" and \"age\"?",
                "code": "let Person = class {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n};",
                "options": [
                      "let Person = class {\nconstructor(name, age) {\nname = this.name;\nage = this.age;\n}\n}",
                      "let Person = class {\n constructor(name, age) {\n this.name = name;\n this.age = age;\n }\n}",
                      "let Person = (name, age) => {\nconstructor: {\nthis.name = name;\nthis.age = age;\n}\n}",
                      "let Person = function(name, age) {\nthis.name = name;\nthis.age = age;\n}"
                ],
                "correct": 1,
                "explanation": "A class expression can define an anonymous class assigned to a variable: let Person = class { constructor(name, age) { this.name = name; this.age = age; } }. Inside the constructor, properties are assigned to the instance using this.name = name and this.age = age."
          },
          {
                "id": "js2_q13",
                "module": "js2_m2",
                "question": "You have defined a class Mountain whose constructor takes two arguments: name and range.\n\nWhich of the following is the correct way to create a mountain object of this class?",
                "code": null,
                "options": [
                      "let mountain = new Mountain('Manaslu', 8156);",
                      "let mountain = create Mountain('Manaslu', 8156);",
                      "let mountain = Mountain('Manaslu', 8156);",
                      "Mountain(let mountain, 'Manaslu', 8156);"
                ],
                "correct": 0,
                "explanation": "To instantiate a class in JavaScript, the 'new' operator is required before the class constructor call: let mountain = new Mountain('Manaslu', 8156);. This creates a new instance and invokes the constructor method with the provided arguments."
          },
          {
                "id": "js2_q14",
                "module": "js2_m2",
                "question": "What properties and methods does an instance of the \"Book\" class have when created with the following code?",
                "code": "class Book {\n    constructor(title, author) {\n        this.title = title;\n        this.author = author;\n    }\n    setGenre(genre) {\n        this.genre = genre;\n    }\n}\nlet book = new Book('The Great Gatsby', 'F. Scott Fitzgerald');",
                "options": [
                      "Properties: title, author, genre; Methods: setGenre",
                      "Properties: title, author; Methods: setGenre, getGenre",
                      "Properties: title, author; Methods: setGenre",
                      "Properties: title, author, genre; Methods: setGenre, getGenre"
                ],
                "correct": 2,
                "explanation": "In the Book class, the constructor assigns this.title and this.author, creating instance properties 'title' and 'author'. The setGenre(genre) declaration defines an instance method. Therefore, an instance has properties 'title' and 'author', and method 'setGenre'."
          },
          {
                "id": "js2_q15",
                "module": "js2_m2",
                "question": "There is one line missing in the following code:\n\nSelect the correct missing line so that the executed code results in the following console output: maple",
                "code": "class Tree {\n_species = oak';\n// Insert line of code here.\n}\nlet tree = new Tree();\ntree.species = 'maple';\nconsole.log(tree._species);",
                "options": [
                      "set species (val) { this._ species = val;}",
                      "set (species) { this._ species = species;}",
                      "set _ species (species) { this._ species = species;}",
                      "_species set(species) { this._ species = species;}"
                ],
                "correct": 0,
                "explanation": "In an ES6 class, a setter for a property is defined using the 'set' keyword followed by the property name and one parameter in parentheses: set species(val) { this._species = val; }."
          },
          {
                "id": "js2_q16",
                "module": "js2_m2",
                "question": "What should you insert into the \"Cat\" class so that it properly inherits from the \"Animal\" class?",
                "code": "class Animal {\nconstructor(legs) {\nthis.legs = legs;\n}\n}\nclass Cat {\n// Insert a line of code here.\nspeak() {\nreturn 'Meow';\n}\n}",
                "options": [
                      "class Cat extends Animal {}",
                      "class Cat inherits Animal {}",
                      "class Cat : Animal {}",
                      "class Cat inherits from Animal {}"
                ],
                "correct": 0,
                "explanation": "In ES6 JavaScript, class inheritance is implemented using the 'extends' keyword: class Cat extends Animal {}. Other keywords like 'inherits' or colons ':' are from other languages (like Java or C#) and are invalid syntax in JavaScript."
          },
          {
                "id": "js2_q17",
                "module": "js2_m2",
                "question": "You have declared a Mountain class and created a mountain object from it:\n\nSelect the correct call so that the executed code results in the following console output: Mountain",
                "code": "class Mountain {\n    static className() { return 'Mountain'; }\n}\nmountain = new Mountain();",
                "options": [
                      "Mountain.className()",
                      "Mountain.className",
                      "mountain ['static className ']()",
                      "mountain.className()"
                ],
                "correct": 0,
                "explanation": "A static method defined with the 'static' keyword on a class (static className()) belongs to the class itself rather than instances of the class. It must be called directly on the class identifier: Mountain.className()."
          },
          {
                "id": "js2_q18",
                "module": "js2_m2",
                "question": "What will the following code output?",
                "code": "class Animal {}\nclass Dog extends Animal {}\nconst dog = new Dog();\nconst animal = new Animal();\nconsole.log(dog instanceof Dog, dog instanceof Animal);",
                "options": [
                      "true false",
                      "true true",
                      "false true",
                      "false false"
                ],
                "correct": 1,
                "explanation": "The instanceof operator tests whether the prototype property of a constructor appears anywhere within the prototype chain of an object. Since Dog extends Animal and dog is an instance of Dog, dog is an instance of both Dog and Animal. Therefore, both checks return true (true true)."
          },
          {
                "id": "js2_q19",
                "module": "js2_m2",
                "question": "A value parameter is missing from the Number constructor in the place indicated in code:\n\nSelect the correct value so that the executed code results in the following console output: '0.01'",
                "code": "Number(INSERT MISSING CODE HERE).toFixed(2);",
                "options": [
                      "'12e-3'",
                      "'-0x01'",
                      "1",
                      "0.01e-2"
                ],
                "correct": 0,
                "explanation": "The Number constructor converts a string argument into a number. When passed '12e-3', it parses scientific notation 12 * 10^-3 = 0.012. Calling .toFixed(2) formats the number to 2 decimal places, rounding 0.012 to '0.01'."
          },
          {
                "id": "js2_q20",
                "module": "js2_m2",
                "question": "You have a JavaScript function \"processText\" that takes a string as input and processes it to return an array of words in reverse order. Fill in the missing line of code:",
                "code": "function processText(str) {\n    // Insert a line of code here.\n}\nconsole.log(processText('This is a sample text to reverse'));",
                "options": [
                      "return str.split(' ').reverse();",
                      "return str.join(' ').reverse();",
                      "return str.reverse().split(' ');",
                      "return str.join(' ').split(' ').reverse();"
                ],
                "correct": 0,
                "explanation": "To reverse the order of words in a string, str.split(' ') splits the string into an array of words separated by spaces. Calling .reverse() on the resulting array reverses the element order. (Calling .join(' ') subsequently joins them back into a sentence)."
          },
          {
                "id": "js2_q21",
                "module": "js2_m3",
                "question": "The following code places a Date class object containing the current time into the currentTime variable:\n\nThe same effect can be achieved by using:",
                "code": "let currentTime = new Date(Date.now());",
                "options": [
                      "let currentTime = new Date();",
                      "let currentTime = new Date().now();",
                      "let currentTime = new Date.now();",
                      "There is no other way to achieve this effect."
                ],
                "correct": 0,
                "explanation": "Calling new Date() without arguments creates a Date object initialized to the current date and time according to system settings, achieving the exact same result as new Date(Date.now())."
          },
          {
                "id": "js2_q22",
                "module": "js2_m3",
                "question": "What will be the value of result3?",
                "code": "const numbers = [2, 4, 6, 8, 10];\nconst result1 = numbers.some(num => num % 2 === 1);\nconst result2 = numbers.every(num => num % 2 === 0);\nconst result3 = numbers.filter(num => num < 5);",
                "options": [
                      "[2, 4]",
                      "[2, 4, 6]",
                      "[2, 4, 6, 8]",
                      "[]"
                ],
                "correct": 0,
                "explanation": "Array.prototype.filter() returns a new array with all elements that pass the test implemented by the provided function. The condition num => num < 5 over [2, 4, 6, 8, 10] matches 2 and 4, producing [2, 4]."
          },
          {
                "id": "js2_q23",
                "module": "js2_m3",
                "question": "There is one line missing in the code below:\n\nWhat will appear in the console as a result of code execution?",
                "code": "let points = [{x: 20, y: 20}, {x: 10, y: 30}, {x: 10, y: 100}];\n// Insert line of code here.\nconsole.log(result);",
                "options": [
                      "let result = points.map(e => e.x + e.y);",
                      "let result = points.map(x + y);",
                      "let result = points.map(e => {e.x + e.y});",
                      "let result = points.map((e,n) => {n = e.x + e.y});"
                ],
                "correct": 0,
                "explanation": "Array.prototype.map() creates a new array populated with the results of calling a provided function on every element. To calculate the sum of x and y for each point object, let result = points.map(e => e.x + e.y); accesses e.x and e.y on each element and returns their sum."
          },
          {
                "id": "js2_q24",
                "module": "js2_m3",
                "question": "Which line of code achieves the following output: red,green,purple,pink,orange?",
                "code": "let colors = ['red', 'green', 'blue', 'yellow', 'orange'];\ncolors.splice(2, 2);\n// Insert line of code here.\nconsole.log(colors);",
                "options": [
                      "colors.splice(2, 0, 'purple', 'pink');",
                      "colors.splice(2, 1, 'purple', 'pink');",
                      "colors.splice(2, 'purple', 'pink');",
                      "colors.splice(2, 0, 1, 'purple', 'pink');"
                ],
                "correct": 0,
                "explanation": "The Array.prototype.splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. splice(2, 0, 'purple', 'pink') starts at index 2, removes 0 elements, and inserts 'purple' and 'pink'."
          },
          {
                "id": "js2_q25",
                "module": "js2_m3",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
                "code": "let s = new Set([1, 2, '100']);\ns.add(2);\ns.add('2');\nconsole.log(`${s.has(2)} ${s.has('2')} ${s.size}`);",
                "options": [
                      "true true 4",
                      "true false 3",
                      "true false 4",
                      "true true undefined"
                ],
                "correct": 0,
                "explanation": "In a JavaScript Set, values are unique and compared using SameValueZero (similar to ===). Therefore, the number 2 and the string '2' are distinct elements. After adding 2 and '2', s.has(2) is true, s.has('2') is true, and the total size is 4 (elements: 1, 2, '100', '2')."
          },
          {
                "id": "js2_q26",
                "module": "js2_m3",
                "question": "Considering the following code, what will be the result of accessing fruitColors.get('kiwi')?",
                "code": "let fruitColors = new Map([\n    ['apple', 'red'],\n    ['banana', 'yellow'],\n    ['grape', 'purple'],\n    ['kiwi', 'green']\n]);\nfruitColors.set('blueberry', 'blue');\nfruitColors.set('apple', 'green');\nfruitColors.delete('banana');",
                "options": [
                      "'green'",
                      "'purple'",
                      "'yellow'",
                      "undefined"
                ],
                "correct": 0,
                "explanation": "The Map.prototype.get() method returns a specified element from a Map object. Since fruitColors has key 'kiwi' mapped to 'green', fruitColors.get('kiwi') returns 'green'. The subsequent operations on 'blueberry', 'apple', and 'banana' do not modify 'kiwi'."
          },
          {
                "id": "js2_q27",
                "module": "js2_m3",
                "question": "The following data is stored in JSON format:\n\nWhich statement/command should you use to convert the data to an object that will be written to the mountain variable?",
                "code": "let strMountain = '{ \"name\": \"Lhotse\", \"range\": \"Himalayas\" }';",
                "options": [
                      "let mountain = JSON.parse(strMountain);",
                      "let mountain = JSON.stringify(strMountain);",
                      "let mountain = JSON(strMountain);",
                      "let mountain = Object(strMountain);"
                ],
                "correct": 0,
                "explanation": "JSON.parse() parses a JSON-formatted string and constructs the JavaScript value or object described by the string. Therefore, let mountain = JSON.parse(strMountain); creates the mountain object from strMountain."
          },
          {
                "id": "js2_q28",
                "module": "js2_m3",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of the code execution?",
                "code": "console.log(`${Math.round(2.3)} ${Math.floor(2.6)} ${Math.ceil(2.0)}`);",
                "options": [
                      "2 2 2",
                      "3 3 3",
                      "2 2 3",
                      "3 2 2"
                ],
                "correct": 0,
                "explanation": "Math.round(2.3) rounds to nearest integer (2). Math.floor(2.6) rounds down to nearest integer (2). Math.ceil(2.0) rounds up to nearest integer (2). Logging all three produces '2 2 2'."
          },
          {
                "id": "js2_q29",
                "module": "js2_m3",
                "question": "You have created an object of the RegExp class that you want to use to search for regular expressions:\n\nSelect the correct alternative form of this declaration:",
                "code": "let r = new RegExp('.\\\\.jpg');",
                "options": [
                      "let r = /.\\.jpg/;",
                      "let r = (.\\.jpg);",
                      "let r = \\.\\.jpg\\;",
                      "let r = RegExp('.\\.jpg');"
                ],
                "correct": 0,
                "explanation": "In JavaScript, a regular expression literal is enclosed between forward slashes /.../. To match any single character followed by a literal dot and 'jpg', the dot must be escaped with a backslash: /.\\.jpg/."
          },
          {
                "id": "js2_q30",
                "module": "js2_m3",
                "question": "Analyze the following code:\n\nWhat will be the result of executing this code?",
                "code": "let firstArray = [1, 2];\nArray.prototype.customMethod = function() {\n    console.log('Custom Method');\n};\nlet secondArray = [3, 4];\nfirstArray.customMethod();\nsecondArray.customMethod();",
                "options": [
                      "Two 'Custom Method' messages will appear in the console.",
                      "A single message 'Custom Method' will appear in the console (object firstArray does not have the customMethod).",
                      "An error will appear when trying to execute firstArray.customMethod() because the method was added after the creation of the array object firstArray.",
                      "An error will appear because the customMethod is bound to the Array class and not to the objects created from it (objects firstArray and secondArray do not have the customMethod)."
                ],
                "correct": 0,
                "explanation": "When a method is added to Array.prototype (Array.prototype.customMethod = function() { ... }), it becomes immediately available to all existing and future array instances through the prototype chain. Calling customMethod() on both firstArray and secondArray prints 'Custom Method' twice."
          },
          {
                "id": "js2_q31",
                "module": "js2_m4",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
                "code": "let fn = function(a, b, ...rest) {\n    console.log(`${a.length} ${rest.length}`);\n};\nfn('1', '2', '3', '4', '5');",
                "options": [
                      "1 3",
                      "1 undefined",
                      "5 undefined",
                      "undefined 3"
                ],
                "correct": 0,
                "explanation": "In the function declaration fn(a, b, ...rest), 'a' receives '1' (length 1), 'b' receives '2', and rest collects all remaining arguments ['3', '4', '5'] into an array of length 3. Therefore, ${a.length} ${rest.length} outputs '1 3'."
          },
          {
                "id": "js2_q32",
                "module": "js2_m4",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
                "code": "let color = 'Red';\nlet printColor = (function() {\n    let color = 'Blue';\n    return color;\n})();\nconsole.log(`${color} ${printColor}`);",
                "options": [
                      "Red Blue",
                      "Blue Blue",
                      "Red Red",
                      "Blue Red"
                ],
                "correct": 0,
                "explanation": "An Immediately Invoked Function Expression (IIFE) creates its own local scope. The inner 'let color = \"Blue\"' is scoped inside printColor, while the outer 'let color = \"Red\"' remains unaffected in the outer scope. Logging ${color} ${printColor} outputs 'Red Blue'."
          },
          {
                "id": "js2_q33",
                "module": "js2_m4",
                "question": "There is one line missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: 25",
                "code": "let fn = function(msg, n) {\n    console.log(`${msg}: ${this.a ** n}`);\n};\n// Insert line of code here.\nbfn(2, 3);",
                "options": [
                      "let bfn = fn.bind({a: 5}, 'result');",
                      "let bfn = fn.apply({a: 5}, 'result');",
                      "let bfn = fn.call({a: 5}, 'result');",
                      "let bfn = fn.bind({a: 5});"
                ],
                "correct": 0,
                "explanation": "The Function.prototype.bind() method creates a new function that, when called, has its 'this' keyword set to the provided value ({a: 5}), with a given sequence of arguments preceding any provided when the new function is called ('result')."
          },
          {
                "id": "js2_q34",
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
                "explanation": "A callback function in JavaScript is a function passed as an argument to another function, which is then invoked inside the outer function after a specific operation or event has completed."
          },
          {
                "id": "js2_q35",
                "module": "js2_m4",
                "question": "There is one line missing in the code below:\n\nSelect the correct missing line so that the executed code results in the following console output: a b",
                "code": "function* testGenerator() {\n    // Insert line of code here.\n}\nlet gen = testGenerator(2);\nconsole.log(`${gen.next().value} ${gen.next().value}`);",
                "options": [
                      "yield* ['a', 'b', 'c', 'd'];",
                      "return ['a', 'b'];",
                      "yield ['a', 'b'];",
                      "yield ['a', 'b', 'c', 'd'];"
                ],
                "correct": 0,
                "explanation": "The yield* expression is used in a generator function to delegate to another generator or iterable object (such as an array). Using yield* ['a', 'b', 'c', 'd']; sequentially yields each element of the array upon successive .next() calls."
          },
          {
                "id": "js2_q36",
                "module": "js2_m4",
                "question": "There is one line missing in the code below:\n\nSelect the correct missing line to ensure the console displays 'Delayed message' with a delay of 5 seconds:",
                "code": "let printText = msg => console.log(msg);\nlet delay = 3000;\nsetTimeout(() => {\n    // Insert line of code here.\n}, delay);",
                "options": [
                      "setTimeout(printText, 2000, 'Delayed message');",
                      "setTimeout(printText.bind(this, 'Delayed message'), 5000);",
                      "printText('Delayed message', 5000);",
                      "setTimeout(() => printText('Delayed message'), 5000);"
                ],
                "correct": 1,
                "explanation": "setTimeout(printText.bind(this, 'Delayed message'), 5000); schedules printText to be invoked after an additional 5000 milliseconds (5 seconds) with 'Delayed message' bound as its argument."
          },
          {
                "id": "js2_q37",
                "module": "js2_m4",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
                "code": "let p = new Promise(function(resolve, reject) {\n    setTimeout(() => resolve(1), 1000);\n});\np.then(a => console.log(`a ${a}`), b => console.log(`b ${b}`));",
                "options": [
                      "a 1",
                      "a",
                      "b 1",
                      "a 1 b 1"
                ],
                "correct": 0,
                "explanation": "Promise.prototype.then() takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. Since the promise resolves with 1, the first callback (fulfillment handler) runs with argument a = 1, logging 'a 1'."
          },
          {
                "id": "js2_q38",
                "module": "js2_m4",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
                "code": "let promiseA = new Promise(function(resolve) {\n    setTimeout(() => resolve('Apple'), 150);\n});\nlet promiseB = new Promise(function(resolve) {\n    setTimeout(() => resolve('Banana'), 100);\n});\npromiseA.then(resultA => {\n    console.log(resultA);\n    return promiseB;\n})\n.then(resultB => {\n    console.log(resultB);\n    return 'Cherry';\n})\n.then(resultC => {\n    console.log(resultC);\n});",
                "options": [
                      "Apple Banana Cherry",
                      "Banana Apple Cherry",
                      "Cherry Banana Apple",
                      "Banana Cherry Apple"
                ],
                "correct": 0,
                "explanation": "Promise chaining executes sequentially: promiseA resolves with 'Apple' after 150ms and logs it. It returns promiseB, which resolves with 'Banana' and logs it in the second .then. The third .then logs 'Cherry'. The console output is 'Apple Banana Cherry'."
          },
          {
                "id": "js2_q39",
                "module": "js2_m4",
                "question": "Analyze the following code:\n\nWhat will appear in the console as a result of code execution?",
                "code": "let p = new Promise(function(resolve, reject) {\n    setTimeout(() => resolve('abc'), 100);\n});\nasync function afn() {\n    console.log('def');\n    let x = await p;\n    console.log(x);\n}\nafn();\nconsole.log('ghi');",
                "options": [
                      "def ghi abc",
                      "ghi abc def",
                      "ghi def abc",
                      "abc ghi def"
                ],
                "correct": 0,
                "explanation": "In an async function, execution is synchronous until the first await expression. afn() logs 'def', then pauses at 'await p'. The synchronous code continues and logs 'ghi'. When promise p resolves after 100ms, afn() resumes and logs 'abc'. The order is 'def ghi abc'."
          },
          {
                "id": "js2_q40",
                "module": "js2_m4",
                "question": "When using XMLHttpRequest (XHR) in JavaScript to make network requests, what is the purpose of the event listener added with the 'load' event?",
                "code": null,
                "options": [
                      "To listen for errors that may occur during the request.",
                      "To listen for changes in the ready state of the XHR object.",
                      "To listen for successful completion of the XHR request.",
                      "To listen for user input events related to the request."
                ],
                "correct": 2,
                "explanation": "In XMLHttpRequest, the 'load' event is fired when an XMLHttpRequest transaction completes successfully (meaning the data has been completely received from the server)."
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
