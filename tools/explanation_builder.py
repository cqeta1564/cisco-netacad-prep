import json
import re
from cert_compiler import clean_question_text, merge_broken_options
from module_mapper import assign_module

import os

BASE_DIR = os.path.dirname(__file__)
meta_path = os.path.join(BASE_DIR, 'cert_metadata.json')
if os.path.exists(meta_path):
    with open(meta_path, 'r', encoding='utf-8') as f:
        CERT_META = json.load(f)
else:
    CERT_META = {}

# Explanation builder for all certificates
def generate_explanation(cert_id, qtext, options, correct_idx, orig_exp):
    correct_opt = options[correct_idx] if (correct_idx is not None and correct_idx < len(options)) else ""
    ql = qtext.lower()
    co = correct_opt.lower()
    
    # If there is a clean original explanation in English, we can enrich it or use Czech
    if cert_id == 'oracle_dd':
        if '2nd normal' in ql or 'second normal' in ql:
            return f"Druhá normální forma (2NF) vyžaduje, aby tabulka byla v 1NF a všechny neklíčové atributy plně funkčně závisely na celém primárním klíči (žádné částečné závislosti). Správná odpověď: {correct_opt}."
        elif '3rd normal' in ql or 'third normal' in ql:
            return f"Třetí normální forma (3NF) vyžaduje 2NF a odstranění tranzitivních závislostí – neklíčové atributy nesmí záviset na jiných neklíčových atributech. Správná odpověď: {correct_opt}."
        elif '1st normal' in ql or 'first normal' in ql:
            return f"První normální forma (1NF) vyžaduje atomicitu hodnot (žádné vícehodnotové atributy) a odstranění opakujících se skupin. Správná odpověď: {correct_opt}."
        elif 'primary uid' in ql or 'unique identifier' in ql:
            return f"V datovém modelování Oracle Academy má každá entita právě jedno primární UID (i když může být složené z více atributů). Pokud vhodný kandidát neexistuje, vytvoří se umělý identifikátor. Správná odpověď: {correct_opt}."
        elif 'mandatory' in ql or 'optional' in ql or 'asterisk' in ql or '#' in ql:
            return f"V notaci Oracle Academy ERD označuje hvězdička (*) povinný atribut, kroužek (o) volitelný atribut a křížek (#) atribut tvořící UID. Správná odpověď: {correct_opt}."
        elif 'subtype' in ql or 'supertype' in ql:
            return f"Subtypy v Oracle ERD dědí všechny atributy a vztahy svého supertypu a musí splňovat pravidlo vzájemného vyloučení a úplnosti. Správná odpověď: {correct_opt}."
        elif 'table' in ql or 'foreign key' in ql or 'physical' in ql:
            return f"Při transformaci na fyzický model se entity převádějí na tabulky, atributy na sloupce a vztahy 1:M se implementují pomocí cizího klíče (FK) na straně M. Správná odpověď: {correct_opt}."
        else:
            return f"Podle standardů kurzu Oracle Academy Database Design je správným řešením: '{correct_opt}'."

    elif cert_id == 'oracle_sql':
        if 'truncate' in ql:
            return f"Příkaz TRUNCATE TABLE je DDL příkaz – rychle odstraní všechny záznamy z tabulky bez možnosti ROLLBACK a bez spuštění triggerů pro DELETE. Správná odpověď: {correct_opt}."
        elif 'multi-table insert' in ql or 'insert all' in ql or 'insert first' in ql:
            return f"Při podmíněném multi-table INSERT slouží INSERT ALL ke vložení do všech splněných větví, zatímco INSERT FIRST vloží pouze do první vyhovující větve. Správná odpověď: {correct_opt}."
        elif 'set unused' in ql:
            return f"ALTER TABLE ... SET UNUSED COLUMN slouží k okamžitému logickému zneplatnění sloupce, čímž se vyhne nákladnému fyzickému přepisu tabulky v produkčním provozu. Správná odpověď: {correct_opt}."
        elif 'delete' in ql:
            return f"Příkaz DELETE je DML operace odstraňující řádky splňující podmínku WHERE. Změnu lze potvrdit (COMMIT) nebo vrátit (ROLLBACK). Správná odpověď: {correct_opt}."
        elif 'update' in ql:
            return f"Příkaz UPDATE slouží ke změně existujících dat ve sloupcích. Spolu s MERGE je to základní nástroj úpravy hodnot v databázi. Správná odpověď: {correct_opt}."
        elif 'flashback' in ql:
            return f"Oracle Flashback Query dovoluje nahlížet na data v minulosti v rámci UNDO retenčního intervalu. Správná odpověď: {correct_opt}."
        elif 'group by' in ql or 'having' in ql:
            return f"Klauzule GROUP BY sdružuje řádky do skupin pro agregační funkce (COUNT, SUM, AVG...), zatímco HAVING tyto agregované skupiny filtruje. Správná odpověď: {correct_opt}."
        elif 'join' in ql:
            return f"V Oracle SQL spojujeme tabulky pomocí ANSI syntaxe (INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN) na základě spojovací podmínky ON nebo USING. Správná odpověď: {correct_opt}."
        else:
            return f"Podle oficiálních pravidel Oracle SQL je správným výsledkem: '{correct_opt}'."

    elif cert_id == 'html':
        if 'about:blank' in ql or 'blank' in ql:
            return f"Adresa 'about:blank' v prohlížeči generuje a načte prázdný, minimální HTML dokument do aktuální záložky. Správná odpověď: {correct_opt}."
        elif 'alt' in ql:
            return f"Atribut 'alt' u tagu <img> poskytuje alternativní textový popis v případě, že se obrázek nepodaří načíst, a slouží čtečkám obrazovky pro nevidomé. Správná odpověď: {correct_opt}."
        elif 'doctype' in ql:
            return f"Deklarace <!DOCTYPE html> musí být na prvním řádku HTML5 dokumentu a informuje prohlížeč o standardním režimu vykreslování. Správná odpověď: {correct_opt}."
        elif 'class' in ql and 'id' in ql:
            return f"Atribut 'id' musí být na stránce unikátní pro jeden element, zatímco 'class' lze aplikovat na libovolné množství elementů. Správná odpověď: {correct_opt}."
        elif 'style' in ql:
            return f"Interní kaskádové styly se vkládají do elementu <style> uvnitř sekce <head>. Správná odpověď: {correct_opt}."
        elif 'onclick' in ql or 'button' in ql:
            return f"Klikací událost tlačítka se v HTML definuje atributem onclick=\"...\". Správná odpověď: {correct_opt}."
        elif 'div' in ql and 'span' in ql:
            return f"Element <div> je blokový kontejner (block-level), zatímco <span> je řádkový element (inline) určený k formátování části textu. Správná odpověď: {correct_opt}."
        else:
            return f"Podle specifikace HTML5 standardu W3C/WHATWG je správná odpověď: '{correct_opt}'."

    elif cert_id == 'css':
        if 'bootstrap' in ql or 'navbar' in ql:
            return f"V Bootstrapu se pro responzivní rozbalení navigační lišty používá třída .navbar-expand. Správná odpověď: {correct_opt}."
        elif 'specificity' in ql or 'selector' in ql:
            return f"Specificita selektorů v CSS určuje prioritu pravidel: inline styl > ID selektor (#) > třída (.) / pseudo-třída > element. Správná odpověď: {correct_opt}."
        elif 'box model' in ql or 'padding' in ql or 'margin' in ql:
            return f"CSS Box Model se skládá z content, padding (vnitřní okraj), border (rámeček) a margin (vnější odstup). Správná odpověď: {correct_opt}."
        elif 'flex' in ql or 'grid' in ql:
            return f"Moderní CSS layouty využívají Flexbox (1D rozvržení po osách) a CSS Grid (2D maticové rozvržení řádků a sloupců). Správná odpověď: {correct_opt}."
        elif 'position' in ql:
            return f"Vlastnost position nabývá hodnot static (výchozí), relative, absolute (vůči nejbližšímu pozicovanému předkovi), fixed (vůči viewportu) a sticky. Správná odpověď: {correct_opt}."
        else:
            return f"Podle oficiálních standardů CSS Essentials je správná volba: '{correct_opt}'."

    elif cert_id == 'js':
        if 'complex' in ql or 'data types' in ql:
            return f"V JavaScriptu mezi složené (referenční) typy patří objekty (Object) a pole (Array), zatímco primitivní jsou např. number, string, boolean. Správná odpověď: {correct_opt}."
        elif 'scope' in ql or 'let' in ql or 'const' in ql:
            return f"Klíčová slova let a const mají blokový rozsah platnosti (block scope), zatímco var má funkční rozsah (function scope). Správná odpověď: {correct_opt}."
        elif '===' in ql or '==' in ql:
            return f"Operátor === porovnává hodnotu i datový typ bez implicitního přetypování (striktní rovnost). Správná odpověď: {correct_opt}."
        elif 'array' in ql:
            return f"Pole v JS je indexovaný seznam hodnot s metodami jako push, pop, shift, unshift, slice a splice. Správná odpověď: {correct_opt}."
        else:
            return f"Podle standardu ECMAScript a kurzu JS Essentials 1 je správná hodnota: '{correct_opt}'."

    elif cert_id == 'js2':
        if 'circumference' in ql or 'circle' in ql:
            return f"Obvod kruhu se v JS počítá vzorcem 2 * r * Math.PI. Správná odpověď: {correct_opt}."
        elif 'property' in ql and ('[' in ql or 'name' in ql):
            return f"K vlastnostem objektu, jejichž název obsahuje mezery nebo speciální znaky, přistupujeme pomocí závorkové notace: objekt['vlastnost']. Správná odpověď: {correct_opt}."
        elif 'class' in ql or 'constructor' in ql or 'extends' in ql:
            return f"V OOP třídách v JavaScriptu volá konstruktor potomka konstruktor rodiče pomocí super() před přístupem k this. Správná odpověď: {correct_opt}."
        elif 'closure' in ql or 'async' in ql or 'promise' in ql:
            return f"Uzávěra (closure) umožňuje vnitřní funkci uchovat si přístup k proměnným vnější funkce i po jejím dokončení. Správná odpověď: {correct_opt}."
        else:
            return f"V pokročilém JavaScriptu (JSE 2) je správným řešením: '{correct_opt}'."

    elif cert_id == 'linux':
        if 'embedded' in ql:
            return f"Vestavěné (embedded) systémy jsou navrženy k provádění konkrétní specializované úlohy na optimalizovaném jednoúčelovém hardwaru. Správná odpověď: {correct_opt}."
        elif 'distribution' in ql or 'distro' in ql:
            return f"Distribuce Linuxu kombinuje linuxové jádro (kernel) se systémovými utilitami, správcem balíčků a aplikačním softwarem. Správná odpověď: {correct_opt}."
        elif 'intel' in ql or '386' in ql:
            return f"Linus Torvalds původně vyvinul Linux pro architekturu PC procesorů Intel 386 v roce 1991. Správná odpověď: {correct_opt}."
        elif 'chmod' in ql or 'permission' in ql or 'rwx' in ql:
            return f"V Linuxu oprávnění r=4, w=2, x=1 určují práva pro vlastníka (user), skupinu (group) a ostatní (others). Příkaz chmod slouží k jejich úpravě. Správná odpověď: {correct_opt}."
        elif 'pipe' in ql or '|' in ql:
            return f"Roura (|) v Linuxu přesměruje standardní výstup (stdout) jednoho příkazu do standardního vstupu (stdin) dalšího příkazu. Správná odpověď: {correct_opt}."
        else:
            return f"Podle oficiálních osnov certifikace LPI Linux Essentials je správnou odpovědí: '{correct_opt}'."

    elif cert_id == 'ccna_itn':
        if 'rtp' in ql or 'real-time' in ql:
            return f"Protokol RTP (Real-Time Transport Protocol) běží nad UDP a slouží pro přenos médií v reálném čase, zejména hlasu (voice) a videa (video). Správná odpověď: {correct_opt}."
        elif 'zigbee' in ql or 'automation' in ql:
            return f"ZigBee je nízkoenergetická bezdrátová technologie s nízkou přenosovou rychlostí ideální pro domácí automatizaci a IoT senzory. Správná odpověď: {correct_opt}."
        elif 'tcp/ip' in ql and 'internet' in ql:
            return f"V TCP/IP modelu odpovídá síťové vrstvě vrstva Internet (zajišťuje směrování paketů přes sítě pomocí IP adres). Správná odpověď: {correct_opt}."
        elif 'ethernet' in ql or 'mac' in ql:
            return f"Ethernetový rámec na linkové vrstvě (L2) obsahuje zdrojovou a cílovou MAC adresu (48 bitů). Minimální velikost rámce je 64 bajtů. Správná odpověď: {correct_opt}."
        elif 'dns' in ql:
            return f"Služba DNS (Domain Name System, port 53 UDP/TCP) překládá doménová jména na IP adresy (záznamy A, AAAA, MX, NS). Správná odpověď: {correct_opt}."
        else:
            return f"V certifikaci CCNA: Introduction to Networks (ITN) je správným řešením: '{correct_opt}'."

    elif cert_id == 'ccna_srwe':
        if 'macof' in ql or 'mac address table' in ql:
            return f"Nástroj macof zaplaví přepínač falešnými MAC adresami (MAC Table Overflow attack), což způsobí přetečení CAM tabulky a přepnutí do režimu hubu (fail-open flooding). Správná odpověď: {correct_opt}."
        elif 'broadcast domain' in ql:
            return f"Všechny porty přepínače ve stejné VLAN tvoří jednu všesměrovou doménu (broadcast domain). Propojením přepínačů se broadcast doména rozšiřuje. Správná odpověď: {correct_opt}."
        elif 'wpa2' in ql or 'encryption' in ql:
            return f"Zabezpečení WPA2 využívající šifrování AES (šifra CCMP) je standardem pro bezpečné bezdrátové sítě WLAN. Správná odpověď: {correct_opt}."
        elif 'vlan' in ql or 'trunk' in ql:
            return f"Trunk linky v protokolu IEEE 802.1Q vkládají do Ethernet rámce 4bajtový VLAN tag s identifikátorem VID. Správná odpověď: {correct_opt}."
        elif 'stp' in ql or 'spanning' in ql:
            return f"Spanning Tree Protocol (STP 802.1D / RSTP 802.1w) brání vzniku přepínacích smyček zablokováním redundantních portů. Správná odpověď: {correct_opt}."
        else:
            return f"V certifikaci CCNA: Switching, Routing, and Wireless Essentials (SRWE) je správná odpověď: '{correct_opt}'."

    elif cert_id == 'python':
        if 'tuple' in ql or 'immutable' in ql:
            return f"N-tice (tuples) jsou v Pythonu neměnný datový typ (immutable), proto nelze po vytvoření modifikovat jejich prvky (např. my_tuple[0] = x vyvolá TypeError). Správná odpověď: {correct_opt}."
        elif 'output' in ql or 'snippet' in ql:
            return f"Python vyhodnocuje kód přesně podle priorit operátorů a pravidel jazyka. Výsledkem spuštění je: {correct_opt}."
        elif 'def' in ql or 'function' in ql:
            return f"Definice funkce v Pythonu začíná klíčovým slovem def jmeno(parametry): s odsazeným tělem. Správná odpověď: {correct_opt}."
        else:
            return f"Podle oficiálních osnov Python Institute (PCEP / Python Essentials 1) je správným výsledkem: '{correct_opt}'."

    return f"Správné řešení: {correct_opt}."

print("Explanation builder loaded.")
