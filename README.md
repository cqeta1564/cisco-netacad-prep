# IT Certifications Prep - Cisco NetAcad & Oracle Academy

Interaktivní webová aplikace pro přípravu a trénování na oficiální certifikace z **Cisco Networking Academy** (Skills for All / OpenEDG) a **Oracle Academy**, rozdělené do 4 oborových kategorií:

### 🌐 Webové aplikace
1. **Cisco Networking Academy: HTML Essentials** (příprava na certifikaci WDE™)
2. **Cisco Networking Academy: CSS Essentials** (příprava na certifikaci WDA™)
3. **Cisco Networking Academy: JavaScript Essentials 1** (příprava na certifikaci JSE-40-01)
4. **Cisco Networking Academy: JavaScript Essentials 2** (příprava na certifikaci JSA-40-02)

### 🗄️ Databázové systémy
5. **Oracle Academy: Database Design** (návrh databází, ERD, normalizace 1NF–3NF)
6. **Oracle Academy: Database Programming With SQL** (ANSI SQL, SELECT, JOIN, DDL/DML, transakce)

### 🖥️ Počítačové systémy a sítě
7. **Cisco Networking Academy: NDG Linux Essentials** (příprava na certifikaci LPI 010-160)
8. **Cisco Networking Academy: CCNA: Introduction to Networks** (CCNA ITN v7 / CCNA 200-301)
9. **Cisco Networking Academy: CCNA: Switching, Routing, and Wireless Essentials** (CCNA SRWE v7 / CCNA 200-301)

### 💻 Programové vybavení
10. **Cisco Networking Academy: Python Essentials 1** (příprava na certifikaci PCEP-30-02)

🌐 **Online aplikace na GitHub Pages**: [https://cqeta1564.github.io/cisco-netacad-prep/](https://cqeta1564.github.io/cisco-netacad-prep/)

---

## 🌟 Funkce aplikace

- **410 autentických otázek**:
  - 45 otázek pro HTML Essentials
  - 45 otázek pro CSS Essentials
  - 40 otázek pro JavaScript Essentials 1
  - 40 otázek pro JavaScript Essentials 2
  - 40 otázek pro Oracle Database Design
  - 40 otázek pro Oracle Database Programming With SQL
  - 40 otázek pro Cisco Python Essentials 1
  - 40 otázek pro Cisco NDG Linux Essentials
  - 40 otázek pro Cisco CCNA: Switching, Routing, and Wireless Essentials (SRWE)
  - 40 otázek pro Cisco CCNA: Introduction to Networks (ITN)
  - Otázky obsahují originální anglickou textaci a kódové ukázky, správné i klamné odpovědi a detailní vysvětlení v češtině.
- **4 studijní módy**:
  1. 🎓 **Zkouškový simulátor (Exam Simulator)**:
     - Realistické podmínky (40–45 minutový odpočet, 30 náhodně vybraných otázek, hranice úspěšnosti 70 %).
     - Možnost označit otázku k revizi (Flag for review).
     - Mřížka všech otázek pro rychlý přehled.
     - Závěrečné podrobné vyhodnocení s procentuální úspěšností, časem a kompletním rozborem chyb.
  2. 📖 **Trénink & Vysvětlení (Practice Mode)**:
     - Okamžitá zpětná vazba po kliknutí na možnost (zelená/červená indikace).
     - Podrobné vysvětlení správné odpovědi a souvisejících pravidel.
     - Filtrování podle modulů / kapitol.
     - Možnost "Procvičit jen chybné otázky".
  3. ⚡ **Bleskové kartičky (Flashcards)**:
     - 3D oboustranné kartičky pro rychlé opakování a zapamatování klíčových pojmů a chytáků.
  4. 📋 **Oficiální tahák & pravidla (Cheatsheets)**:
     - Přehledné tabulky pro každý certifikát (typy v JS, CSS Box Model, HTML sémantika, Python operátory, SQL JOINy, Linux FHS/práva, CCNA ITN OSI/IPv4/IPv6/TCP/UDP, CCNA SRWE VLANy/STP/EtherChannel/WLAN).
  5. 📊 **Moje statistiky (User Profile & Statistics)**:
     - Sledování úspěšnosti a postupu na základě cookies a volitelné přezdívky (bez nutnosti registrace a přihlašování).
     - Přehled pokrytí celé banky otázek (0 / 410), celková přesnost a zápisník chyb k cílenému doprocvičení.
     - Kompletní historie zkoušek s časy, procenty a přímým filtrem nesložených pokusů.
     - 🛡️ **Statistiky návštěvnosti webu (Admin Dashboard)**: Při zadání administrátorské přezdívky `cqeta1564` se v profilu automaticky odemkne živý přehled návštěvnosti webu (celkový počet zobrazení, unikátní návštěvníci, dnešní aktivita, 7denní trend a telemetrie). Pro běžné uživatele zůstává sekce zcela skrytá.
- **Moderní UI & Audio efekty**:
  - Tmavý (Dark) i světlý (Light) režim s plynulým přepínáním.
  - Generované audio efekty (Web Audio API – není potřeba stahovat žádné zvukové soubory).
  - Plně responzivní design pro počítač, tablet i mobil.

---

## 🚀 Jak aplikaci spustit

Aplikace je kompletně samostatná bez nutnosti instalovat jakékoliv npm balíčky nebo backend:

### Možnost 1: Dvojklikem (nejrychlejší)
Stačí dvakrát kliknout na soubor `index.html` v tomto adresáři a otevře se ve vašem výchozím webovém prohlížeči (Chrome, Edge, Firefox, Brave).

### Možnost 2: Přes lokální server
Pokud chcete aplikaci spouštět přes lokální HTTP server, můžete v tomto adresáři spustit:
```powershell
# Pomocí Pythonu:
python -m http.server 8080

# Nebo pomocí Node.js:
npx serve .
```
A následně otevřít v prohlížeči adresu `http://localhost:8080`.
