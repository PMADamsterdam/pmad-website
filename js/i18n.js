// PM|AD — NL/EN vertalingen
// Elk element met data-i18n="key" krijgt zijn tekst uit dit woordenboek.
// Attributen (alt, placeholder, aria-label, title) gebruiken data-i18n-attr="attribuut:key".
// De taalkeuze wordt onthouden in localStorage zodat die per bezoek bewaard blijft
// (dit is een normale, losstaande website — geen Claude-artifact — dus localStorage
// is hier het juiste, standaard mechanisme voor een taalvoorkeur).

const PMAD_I18N = {
  nl: {
    "nav.home": "Home",
    "nav.about": "Over mij",
    "nav.projects": "Projecten",
    "nav.partners": "Partners",
    "nav.contact": "Contact",
    "nav.menuLabel": "Menu openen",

    "footer.tagline": "Pieter Mulder — Architecture & Design",
    "footer.copyrightName": "PM|AD — Pieter Mulder Architecture & Design",
    "footer.privacyLink": "Privacyverklaring",

    "privacy.meta.title": "Privacyverklaring — PM|AD",
    "privacy.meta.description": "Hoe PM|AD — Pieter Mulder omgaat met persoonsgegevens die via deze website worden verzameld.",
    "privacy.hero.eyebrow": "Privacy",
    "privacy.hero.title": "Privacyverklaring",
    "privacy.hero.lede": "Deze verklaring legt uit welke gegevens PM|AD via deze website verzamelt, waarom, en welke rechten u daarbij heeft. Laatst bijgewerkt: juli 2026.",
    "privacy.s1.title": "Wie is verantwoordelijk",
    "privacy.s1.body": "PM|AD is de eenmanszaak van Pieter Mulder, gevestigd aan de Joos Banckersweg 16-1, 1056 EP Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 95561129. Pieter Mulder is verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website worden verwerkt en is bereikbaar via pm_ad@icloud.com.",
    "privacy.s2.title": "Contactformulier",
    "privacy.s2.body": "Wanneer u het contactformulier op deze website invult, worden de gegevens die u zelf invoert — naam, e-mailadres, onderwerp en bericht — verwerkt om uw vraag te kunnen beantwoorden. Deze gegevens worden verzonden via de formulierdienst Formspree en komen als e-mail bij Pieter Mulder binnen. Er wordt geen nieuwsbrief verstuurd en uw gegevens worden niet gebruikt voor marketingdoeleinden, tenzij u daar zelf uitdrukkelijk om vraagt.",
    "privacy.s3.title": "Taalvoorkeur en lokale opslag",
    "privacy.s3.body": "Deze website onthoudt uw gekozen taal (Nederlands of Engels) via de lokale opslag van uw browser (localStorage). Dit is uitsluitend functioneel: er wordt geen informatie naar een server verstuurd en er worden geen trackingcookies of vergelijkbare technieken voor advertentie- of analysedoeleinden gebruikt.",
    "privacy.s4.title": "Hosting en serverlogs",
    "privacy.s4.body": "Deze website wordt gehost bij een externe hostingpartij. Zoals gebruikelijk bij vrijwel alle websites, verwerkt de hostingpartij technische gegevens zoals uw IP-adres in serverlogs, met als doel de website betrouwbaar en veilig beschikbaar te stellen. Deze gegevens worden niet gebruikt om bezoekers te identificeren of te volgen.",
    "privacy.s5.title": "Bewaartermijn",
    "privacy.s5.body": "Berichten via het contactformulier worden niet langer bewaard dan nodig is om uw vraag te behandelen en eventuele vervolgcommunicatie mogelijk te maken, met een maximum van twee jaar na het laatste contact, tenzij een langere bewaartermijn wettelijk verplicht is (bijvoorbeeld voor de fiscale administratie bij een overeenkomst).",
    "privacy.s6.title": "Delen met derden",
    "privacy.s6.body": "Uw gegevens worden nooit verkocht aan derden. Voor de technische werking van de website wordt gebruikgemaakt van twee externe dienstverleners: Formspree (verwerking van het contactformulier) en de hostingpartij (beschikbaar stellen van de website). Beide partijen verwerken gegevens uitsluitend in opdracht van PM|AD en kunnen buiten de Europese Unie zijn gevestigd; in dat geval wordt gebruikgemaakt van passende waarborgen zoals modelcontractbepalingen van de Europese Commissie.",
    "privacy.s7.title": "Uw rechten",
    "privacy.s7.body": "Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u het recht op inzage, rectificatie of verwijdering van uw persoonsgegevens, het recht om bezwaar te maken tegen de verwerking, het recht op beperking van de verwerking en het recht op gegevensoverdraagbaarheid. U kunt hiervoor contact opnemen via pm_ad@icloud.com.",
    "privacy.s8.title": "Klacht indienen",
    "privacy.s8.body": "Komt u er met Pieter Mulder niet uit? Dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.",
    "privacy.s9.title": "Wijzigingen",
    "privacy.s9.body": "Deze privacyverklaring kan van tijd tot tijd worden aangepast, bijvoorbeeld wanneer de website nieuwe functionaliteit krijgt. De datum bovenaan deze pagina geeft aan wanneer de verklaring voor het laatst is bijgewerkt.",

    "home.meta.title": "PM|AD — Pieter Mulder Architecture & Design",
    "home.meta.description": "PM|AD is het zelfstandige architectenbureau van Pieter Mulder, gericht op nieuwbouw, renovatie en interieur in Nederland.",
    "home.hero.eyebrow": "Architecture & Design",
    "home.hero.title": "Architectuur, rechtstreeks van de architect.",
    "home.hero.lede": "PM|AD is het zelfstandige bureau van Pieter Mulder. Ik ontwerp rechtstreeks voor opdrachtgevers — met precisie, persoonlijke aandacht, en zonder omwegen.",
    "home.hero.btnProjects": "Bekijk projecten",
    "home.hero.btnContact": "Neem contact op",
    "home.hero.imageAlt": "PM|AD — driedimensionaal wordmark",

    "home.intro.eyebrow": "Werkwijze",
    "home.intro.title": "Eén architect, direct betrokken bij elk project.",
    "home.intro.p1": "Bij PM|AD werkt u rechtstreeks met de architect die uw ontwerp maakt — van eerste schets tot oplevering. Geen tussenlagen, geen wisselende contactpersonen. Alleen gerichte aandacht voor uw specifieke vraagstuk.",
    "home.intro.p2": "Of het nu gaat om nieuwbouw, renovatie of interieur: elk project begint met goed luisteren, en eindigt met een gebouw dat klopt — functioneel, ruimtelijk en in budget. Ik werk het liefst aan zowel het exterieur als het interieur van een project, zodat beide vanuit één visie ontstaan.",
    "home.stats.contactPoint": "Vast aanspreekpunt",
    "home.stats.involvement": "Persoonlijke betrokkenheid",

    "home.featured.title": "Uitgelicht werk",
    "home.featured.lede": "Twee recente projecten — van drijvende nieuwbouw tot een uitbouw in Amsterdam.",
    "home.featured.radder.meta": "Nieuwbouw — 2015",
    "home.featured.radder.title": "Woonboot Radder, Eijsden",
    "home.featured.radder.desc": "Een volledig drijvende woning aan de oevers van de Maas, met een lange, transparante gevel gericht op het water.",
    "home.featured.radder.alt": "Woonboot Radder — aanzicht vanaf het water, Eijsden",
    "home.featured.pm.meta": "Renovatie & uitbouw",
    "home.featured.pm.title": "Woonhuis P&M, Amsterdam",
    "home.featured.pm.desc": "Herindeling en uitbreiding tot een ruime, lichte woonlaag met een groene tuinkamer als overgang naar buiten.",
    "home.featured.pm.alt": "Woonhuis P&M — tuinkamer, Amsterdam",
    "home.featured.viewAll": "Alle projecten bekijken",

    "home.cta.eyebrow": "Aan de slag",
    "home.cta.title": "Een nieuw project, een verbouwing, of gewoon een idee?",
    "home.cta.text": "Neem vrijblijvend contact op — ik denk graag mee, van eerste schets tot uitvoering.",
    "home.cta.btnContact": "Neem contact op",
    "home.cta.btnAbout": "Meer over Pieter Mulder",

    "about.meta.title": "Over mij — PM|AD",
    "about.meta.description": "Pieter Mulder — 26 jaar ervaring als architect bij toonaangevende bureaus, nu zelfstandig actief onder PM|AD.",
    "about.hero.eyebrow": "Over mij",
    "about.hero.photoLabel": "Portretfoto Pieter Mulder",
    "about.hero.photoAlt": "Pieter Mulder, architect bij PM|AD",
    "about.hero.p1": "In 2000 begon ik mijn loopbaan als architect, bij Wiegerinck Architecten in Arnhem. In de 26 jaar daarna werkte ik bij acht bureaus in Nederland en België, waaronder CrepainBinst Architecten, NEXT Architects, HofmanDujardin en JPS architecten. Sinds 1 juli 2026 zet ik die ervaring zelfstandig in — onder de naam PM|AD.",
    "about.hero.p2": "Wat niet veranderd is: mijn overtuiging dat goede architectuur ontstaat uit aandacht. Aandacht voor de plek, voor de opdrachtgever, en voor de details die een gebouw pas echt laten werken.",

    "about.philosophy.eyebrow": "Aanpak",
    "about.philosophy.title": "Ontwerpen vanuit rust, niet vanuit routine.",
    "about.philosophy.p1": "Na 26 jaar in het vak weet ik dat het beste ontwerp zelden het eerste idee is. Elk project bij PM|AD begint met grondig luisteren: naar de wensen van de opdrachtgever, naar de plek, en naar de praktische eisen van bouwen in Nederland.",
    "about.philosophy.p2": "Als zelfstandig architect werk ik met een klein, persoonlijk team van vaste partners — constructeurs, adviseurs en aannemers waarmee ik al jaren samenwerk. Zo combineer ik de flexibiliteit van een eenmanszaak met de betrouwbaarheid van een groot bureau.",
    "about.philosophy.p3": "Mijn kracht ligt zowel in het exterieur als het interieur van een gebouw. Ik werk het liefst aan beide tegelijk binnen één opdracht, zodat de buitenkant en de binnenkant vanuit dezelfde visie ontstaan — van de gevel tot het laatste detail van de afwerking.",
    "about.philosophy.tag1": "Nieuwbouw",
    "about.philosophy.tag2": "Renovatie & transformatie",
    "about.philosophy.tag3": "Interieurontwerp",
    "about.philosophy.tag4": "Vergunningtrajecten",
    "about.philosophy.tag5": "Duurzaam bouwen",

    "about.timeline.title": "Loopbaan in het kort",
    "about.timeline.lede": "26 jaar ervaring bij acht architectenbureaus in Nederland en België, tot de start van PM|AD op 1 juli 2026.",
    "about.timeline.t1.year": "Juli 2026 — heden",
    "about.timeline.t1.title": "PM|AD — zelfstandig architect",
    "about.timeline.t1.desc": "Start van het eigen bureau.",
    "about.timeline.t2.year": "2020 — 2026 (6,5 jaar)",
    "about.timeline.t2.title": "JPS architecten",
    "about.timeline.t3.year": "2019 — 2020 (1 jaar)",
    "about.timeline.t3.title": "Studio Jeroen van Zwetselaar",
    "about.timeline.t4.year": "2013 — 2019 (5,5 jaar)",
    "about.timeline.t4.title": "HofmanDujardin architecten",
    "about.timeline.t5.year": "2012 — 2013 (1 jaar)",
    "about.timeline.t5.title": "Hollandse Nieuwe",
    "about.timeline.t6.year": "2010 — 2012 (2 jaar)",
    "about.timeline.t6.title": "NEXT Architects",
    "about.timeline.t7.year": "2007 — 2010 (3 jaar)",
    "about.timeline.t7.title": "Sander Architecten",
    "about.timeline.t7.desc": "Amsterdam",
    "about.timeline.t8.year": "2006 — 2007 (1 jaar)",
    "about.timeline.t8.title": "CrepainBinst Architecten",
    "about.timeline.t8.desc": "Antwerpen",
    "about.timeline.t9.year": "2000 — 2006 (6 jaar)",
    "about.timeline.t9.title": "Wiegerinck Architecten",
    "about.timeline.t9.desc": "Arnhem — start van de loopbaan",

    "about.cta.eyebrow": "Kennismaken",
    "about.cta.title": "Benieuwd of PM|AD bij uw project past?",
    "about.cta.text": "Een eerste gesprek is altijd vrijblijvend.",
    "about.cta.btnContact": "Neem contact op",
    "about.cta.btnProjects": "Bekijk projecten",

    "projects.meta.title": "Projecten — PM|AD",
    "projects.meta.description": "Een selectie van architectuurprojecten van PM|AD — Pieter Mulder, waaronder nieuwbouw, renovatie, interieur en een drijvende woning in Eijsden.",
    "projects.hero.eyebrow": "Projecten",
    "projects.hero.title": "Ervaring, vertaald naar gebouwde projecten.",
    "projects.hero.lede": "Van vrijstaande woningen en drijvende architectuur tot renovaties en interieurontwerp. Een selectie van werk uit de afgelopen jaren.",

    "projects.filters.all": "Alle projecten",
    "projects.filters.new": "Nieuwbouw",
    "projects.filters.reno": "Renovatie",
    "projects.filters.interior": "Interieur",

    "projects.radder.meta": "Nieuwbouw — 2015",
    "projects.radder.title": "Woonboot Radder, Eijsden (Limburg)",
    "projects.radder.desc": "Een volledig drijvende woning aan de oevers van de Maas bij Eijsden, in opdracht van mijn oom. Het ontwerp combineert een compact, houten volume met een lange, transparante gevel gericht op het water, een open woon-eetkeuken met drie slaapkamers, en een souterrain voor techniek en berging.",
    "projects.radder.d1": "Souterrain",
    "projects.radder.d2": "Oostgevel",
    "projects.radder.d3": "Westgevel",
    "projects.radder.d4": "Zuid- & noordgevel",

    "projects.pm.meta": "Renovatie & uitbouw",
    "projects.pm.title": "Woonhuis P&M, Amsterdam",
    "projects.pm.desc": "Herindeling en uitbreiding van een Amsterdamse woning voor persoonlijke vrienden, met een nieuwe open keuken, eetkamer en woonkamer, een walk-in closet en een volledig vernieuwde badkamer. De bestaande, compacte plattegrond is getransformeerd tot een ruime, lichte woonlaag met een groene tuinkamer als warme overgang naar buiten.",
    "projects.pm.d1": "Plattegrond bestaand",
    "projects.pm.d2": "Plattegrond nieuw",
    "projects.pm.d3": "Badkamerdetail",

    "projects.julianaweg.meta": "Transformatie & uitbreiding — in ontwikkeling",
    "projects.julianaweg.title": "Villa Julianaweg, Oosterbeek",
    "projects.julianaweg.desc": "Transformatie en uitbreiding van een villa aan de Julianaweg in Oosterbeek, in opdracht van 026vastgoed. De villa en de nieuwe aanbouw worden samen opgesplitst in vier appartementen voor de leeftijdsgroep 55+. Deze verdichting brengt een verhuisketen op gang: elders komen vier gezinswoningen vrij, die op hun beurt weer vier starterswoningen vrijmaken. Door de keten aan het eind aan te pakken, ontstaat een reactie die een hele sector ten goede komt en bijdraagt aan het oplossen van de woningcrisis — zonder natuurgebieden of landbouwgrond aan te tasten.",
    "projects.julianaweg.d1": "Voorzijde met nieuwe aanbouw (render)",
    "projects.julianaweg.d2": "Achterzijde met nieuwe aanbouw (render)",
    "projects.julianaweg.d3": "Interieur keuken en woonkamer (render)",
    "projects.julianaweg.metaTitle": "Villa Julianaweg, Oosterbeek — PM|AD",
    "projects.julianaweg.metaDescription": "Alle beelden van Villa Julianaweg: transformatie en uitbreiding van een villa in Oosterbeek tot vier appartementen voor 55-plussers, in opdracht van 026vastgoed.",

    "projects.utrechtseweg.meta": "Transformatie & optopping — in ontwikkeling",
    "projects.utrechtseweg.title": "Utrechtseweg 178, Oosterbeek",
    "projects.utrechtseweg.desc": "Transformatie van een woning boven een winkelpand aan de Utrechtseweg in Oosterbeek, in opdracht van 026Vastgoed. Er is een extra bouwlaag onder de kap gerealiseerd en aan de achterzijde is uitgebouwd. Hierdoor zijn drie appartementen ontstaan voor de leeftijdsgroep 55+.",
    "projects.utrechtseweg.d1": "Voorzijde met nieuwe kaplaag (render)",
    "projects.utrechtseweg.d2": "Luchtfoto achterzijde met uitbouw (render)",
    "projects.utrechtseweg.d3": "Interieur keuken (render)",
    "projects.utrechtseweg.d4": "Interieur woonkamer (render)",
    "projects.utrechtseweg.d5": "Interieur eetkamer en keuken (render)",
    "projects.utrechtseweg.metaTitle": "Utrechtseweg 178, Oosterbeek — PM|AD",
    "projects.utrechtseweg.metaDescription": "Alle beelden van Utrechtseweg 178: transformatie van een woning boven een winkelpand in Oosterbeek tot drie appartementen voor 55-plussers, in opdracht van 026Vastgoed.",

    "projects.velperweg.meta": "Nieuwbouw — in ontwikkeling",
    "projects.velperweg.title": "Velperweg 56b, Arnhem",
    "projects.velperweg.desc": "Nieuwbouw van een woongebouw aan de Velperweg in Arnhem, in opdracht van 026Vastgoed, direct naast een monumentaal woonblok. Op de plek van een bestaand pand van één bouwlaag verrijst een nieuw volume dat er nooit eerder heeft gestaan, met vijf nieuwe bouwlagen. Iedere laag herbergt een appartement van circa 80 m². Juist omdat het hier om nieuwbouw gaat, is bewust gekozen voor een ingetogen en hedendaags ontwerp dat recht doet aan het monumentale buurpand.",
    "projects.velperweg.d1": "Vooraanzicht met nieuw bouwvolume (render)",
    "projects.velperweg.d2": "Luchtperspectief nieuwbouw naast monumentaal pand (render)",
    "projects.velperweg.d3": "Detail voorgevel (render)",
    "projects.velperweg.d4": "Balkon met zicht op de woonkamer (render)",
    "projects.velperweg.metaTitle": "Velperweg 56b, Arnhem — PM|AD",
    "projects.velperweg.metaDescription": "Alle beelden van Velperweg 56b: nieuwbouw van een woongebouw met vijf appartementen naast een monumentaal pand in Arnhem, in opdracht van 026Vastgoed.",

    "projects.beukenlaan.meta": "Transformatie & optopping — in ontwikkeling",
    "projects.beukenlaan.title": "Beukenlaan 01, Oosterbeek",
    "projects.beukenlaan.desc": "In samenwerking met 026Vastgoed transformeren wij dit voormalige restaurant met woonhuis en extra appartement tot vier toekomstbestendige wooneenheden. Door uit te breiden op zowel de begane grond als de eerste verdieping ontstaat meer ruimte en buitenruimte, en door er een extra bouwlaag op te zetten is er voldoende ruimte voor alle woningen. Door het nauwe contact met de gemeente en omwonenden is het ontwerp nog in ontwikkeling; zodra hierover definitief uitsluitsel is, wordt dit bijgewerkt.",
    "projects.beukenlaan.d1": "Achtergevel met nieuwe dakopbouw (render)",
    "projects.beukenlaan.d2": "Detail achtergevel en terras (render)",
    "projects.beukenlaan.d3": "Terras en tuin (render)",
    "projects.beukenlaan.d4": "Interieur keuken en woonkamer (render)",
    "projects.beukenlaan.metaTitle": "Beukenlaan 01, Oosterbeek — PM|AD",
    "projects.beukenlaan.metaDescription": "Alle beelden van Beukenlaan 01: transformatie van een voormalig restaurant en woonhuis in Oosterbeek tot vier toekomstbestendige wooneenheden, in samenwerking met 026Vastgoed.",

    "projects.p1.title": "Villa Zonnehof",
    "projects.p1.desc": "Vrijstaande woning met een open, licht plattegrond en directe relatie met de tuin.",
    "projects.p2.title": "Kantoor De Werf",
    "projects.p2.desc": "Interieurontwerp voor een kantoorpand waarin rust en flexibiliteit samenkomen.",
    "projects.p3.title": "Boerderij Achterhoek",
    "projects.p3.desc": "Behoud van het agrarische karakter, met een eigentijdse woonlaag binnen de bestaande schil.",
    "projects.p4.title": "Twee-onder-een-kap Bosrand",
    "projects.p4.desc": "Twee woningen in een bosrijke omgeving, ontworpen met respect voor de bestaande begroeiing.",

    "projects.note": "Een selectie van recent afgeronde en lopende projecten. Meer projecten volgen binnenkort.",

    "projects.cta.eyebrow": "Uw project",
    "projects.cta.title": "Benieuwd wat PM|AD voor u kan betekenen?",
    "projects.cta.text": "Elk project begint met een goed gesprek.",
    "projects.cta.btnContact": "Neem contact op",

    "partners.meta.title": "Partners — PM|AD",
    "partners.meta.description": "De partners waarmee PM|AD — Pieter Mulder samenwerkt aan architectuur- en vastgoedprojecten.",
    "partners.hero.eyebrow": "Samenwerking",
    "partners.hero.title": "Vaste partners.",
    "partners.hero.lede": "PM|AD werkt op projectbasis samen met een klein aantal vaste partners. Hieronder vindt u wie dat zijn en waar de samenwerking uit bestaat.",
    "partners.026.name": "026Vastgoed",
    "partners.026.desc": "026Vastgoed is een vastgoedontwikkelaar uit de regio Arnhem, gericht op nieuwbouw en transformatie van woningen en bedrijfsruimtes. Voor 026Vastgoed werkt PM|AD aan transformatie- en verdichtingsprojecten, waaronder Villa Julianaweg in Oosterbeek.",
    "partners.note": "Binnenkort volgen hier meer samenwerkingen.",
    "common.visitWebsite": "Bezoek website",

    "contact.meta.title": "Contact — PM|AD",
    "contact.meta.description": "Neem contact op met Pieter Mulder van PM|AD voor uw architectuurproject.",
    "contact.hero.eyebrow": "Contact",
    "contact.hero.title": "Laten we kennismaken.",
    "contact.hero.lede": "Of het nu gaat om een concreet project of een eerste idee — ik denk graag vrijblijvend met u mee.",

    "contact.info.title": "Gegevens",
    "contact.info.emailLabel": "E-mail",
    "contact.info.phoneLabel": "Telefoon",
    "contact.info.addressLabel": "Adres",
    "contact.info.kvkLabel": "KvK",

    "contact.form.title": "Stuur een bericht",
    "contact.form.nameLabel": "Naam",
    "contact.form.emailLabel": "E-mailadres",
    "contact.form.subjectLabel": "Onderwerp",
    "contact.form.subjectPlaceholder": "Bijv. nieuwbouw, renovatie, interieur",
    "contact.form.messageLabel": "Bericht",
    "contact.form.submit": "Verstuur bericht",
    "contact.form.note": "Uw gegevens worden alleen gebruikt om contact met u op te nemen over uw bericht.",

    "common.formSuccess": "Bedankt voor je bericht! Ik neem zo snel mogelijk contact op.",
    "common.formError": "Er ging iets mis bij het versturen. Probeer het opnieuw, of mail rechtstreeks naar pm_ad@icloud.com.",
    "common.langLabel": "Taal",
    "common.photoPlaceholder": "Projectfoto",
    "common.viewAllImages": "Bekijk alle beelden",
    "common.backToProjects": "Terug naar projecten",

    "projects.radder.metaTitle": "Woonboot Radder, Eijsden — PM|AD",
    "projects.radder.metaDescription": "Alle beelden van Woonboot Radder: een volledig drijvende woning aan de oevers van de Maas bij Eijsden, ontworpen door PM|AD — Pieter Mulder.",
    "projects.pm.metaTitle": "Woonhuis P&M, Amsterdam — PM|AD",
    "projects.pm.metaDescription": "Alle beelden van Woonhuis P&M: een herindeling en uitbouw van een Amsterdamse woning, ontworpen door PM|AD — Pieter Mulder."
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.partners": "Partners",
    "nav.contact": "Contact",
    "nav.menuLabel": "Open menu",

    "footer.tagline": "Pieter Mulder — Architecture & Design",
    "footer.copyrightName": "PM|AD — Pieter Mulder Architecture & Design",
    "footer.privacyLink": "Privacy policy",

    "privacy.meta.title": "Privacy Policy — PM|AD",
    "privacy.meta.description": "How PM|AD — Pieter Mulder handles personal data collected through this website.",
    "privacy.hero.eyebrow": "Privacy",
    "privacy.hero.title": "Privacy policy",
    "privacy.hero.lede": "This statement explains what data PM|AD collects through this website, why, and what rights you have. Last updated: July 2026.",
    "privacy.s1.title": "Who is responsible",
    "privacy.s1.body": "PM|AD is the sole proprietorship of Pieter Mulder, based at Joos Banckersweg 16-1, 1056 EP Amsterdam, the Netherlands, registered with the Dutch Chamber of Commerce (KvK) under number 95561129. Pieter Mulder is the data controller for personal data processed through this website and can be reached at pm_ad@icloud.com.",
    "privacy.s2.title": "Contact form",
    "privacy.s2.body": "When you fill in the contact form on this website, the data you enter yourself — name, email address, subject and message — is processed in order to respond to your enquiry. This data is submitted via the form service Formspree and arrives as an email with Pieter Mulder. No newsletter is sent, and your data is not used for marketing purposes unless you explicitly ask for that.",
    "privacy.s3.title": "Language preference and local storage",
    "privacy.s3.body": "This website remembers your chosen language (Dutch or English) using your browser's local storage (localStorage). This is purely functional: no information is sent to a server, and no tracking cookies or similar technologies are used for advertising or analytics purposes.",
    "privacy.s4.title": "Hosting and server logs",
    "privacy.s4.body": "This website is hosted with an external hosting provider. As is standard for virtually all websites, the hosting provider processes technical data such as your IP address in server logs, in order to keep the website reliably and securely available. This data is not used to identify or track visitors.",
    "privacy.s5.title": "Retention period",
    "privacy.s5.body": "Messages submitted via the contact form are not kept longer than necessary to handle your enquiry and any follow-up communication, with a maximum of two years after the last contact, unless a longer retention period is legally required (for example for tax records relating to an agreement).",
    "privacy.s6.title": "Sharing with third parties",
    "privacy.s6.body": "Your data is never sold to third parties. Two external service providers are used for the technical operation of the website: Formspree (processing of the contact form) and the hosting provider (making the website available). Both parties process data solely on behalf of PM|AD and may be based outside the European Union; in that case, appropriate safeguards such as the European Commission's standard contractual clauses are used.",
    "privacy.s7.title": "Your rights",
    "privacy.s7.body": "Under the General Data Protection Regulation (GDPR), you have the right to access, rectify or erase your personal data, the right to object to processing, the right to restrict processing, and the right to data portability. You can exercise these rights by contacting pm_ad@icloud.com.",
    "privacy.s8.title": "Filing a complaint",
    "privacy.s8.body": "If you and Pieter Mulder cannot resolve a concern together, you can file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) via autoriteitpersoonsgegevens.nl.",
    "privacy.s9.title": "Changes",
    "privacy.s9.body": "This privacy policy may be updated from time to time, for example when the website gains new functionality. The date at the top of this page indicates when the policy was last updated.",

    "home.meta.title": "PM|AD — Pieter Mulder Architecture & Design",
    "home.meta.description": "PM|AD is the independent architecture practice of Pieter Mulder, focused on new builds, renovation and interiors in the Netherlands.",
    "home.hero.eyebrow": "Architecture & Design",
    "home.hero.title": "Architecture, straight from the architect.",
    "home.hero.lede": "PM|AD is the independent practice of Pieter Mulder. I design directly for clients — with precision, personal attention, and none of the detours.",
    "home.hero.btnProjects": "View projects",
    "home.hero.btnContact": "Get in touch",
    "home.hero.imageAlt": "PM|AD — three-dimensional wordmark",

    "home.intro.eyebrow": "Approach",
    "home.intro.title": "One architect, directly involved in every project.",
    "home.intro.p1": "At PM|AD you work directly with the architect designing your project — from first sketch to completion. No middle layers, no rotating points of contact. Just focused attention on your specific challenge.",
    "home.intro.p2": "Whether it's new construction, renovation or interior design: every project starts with careful listening, and ends with a building that works — functionally, spatially and within budget. I prefer to work on both the exterior and the interior of a project, so both come from a single vision.",
    "home.stats.contactPoint": "Single point of contact",
    "home.stats.involvement": "Personal involvement",

    "home.featured.title": "Featured work",
    "home.featured.lede": "Two recent projects — from a floating new-build to an extension in Amsterdam.",
    "home.featured.radder.meta": "New build — 2015",
    "home.featured.radder.title": "Woonboot Radder, Eijsden",
    "home.featured.radder.desc": "A fully floating home on the banks of the Meuse, with a long, transparent facade facing the water.",
    "home.featured.radder.alt": "Woonboot Radder — view from the water, Eijsden",
    "home.featured.pm.meta": "Renovation & extension",
    "home.featured.pm.title": "Woonhuis P&M, Amsterdam",
    "home.featured.pm.desc": "Reconfiguration and extension into a spacious, light-filled living floor with a green garden room as a transition to the outdoors.",
    "home.featured.pm.alt": "Woonhuis P&M — garden room, Amsterdam",
    "home.featured.viewAll": "View all projects",

    "home.cta.eyebrow": "Get started",
    "home.cta.title": "A new project, a renovation, or just an idea?",
    "home.cta.text": "Get in touch, no strings attached — I'm happy to think along, from first sketch to completion.",
    "home.cta.btnContact": "Get in touch",
    "home.cta.btnAbout": "More about Pieter Mulder",

    "about.meta.title": "About — PM|AD",
    "about.meta.description": "Pieter Mulder — 26 years of experience as an architect at leading firms, now independent under PM|AD.",
    "about.hero.eyebrow": "About me",
    "about.hero.photoLabel": "Portrait photo of Pieter Mulder",
    "about.hero.photoAlt": "Pieter Mulder, architect at PM|AD",
    "about.hero.p1": "In 2000 I began my career as an architect, at Wiegerinck Architecten in Arnhem. In the 26 years since, I worked at eight firms in the Netherlands and Belgium, including CrepainBinst Architecten, NEXT Architects, HofmanDujardin and JPS architecten. Since 1 July 2026 I've been applying that experience independently — under the name PM|AD.",
    "about.hero.p2": "What hasn't changed: my conviction that good architecture comes from attention. Attention to the site, to the client, and to the details that truly make a building work.",

    "about.philosophy.eyebrow": "Approach",
    "about.philosophy.title": "Designing from calm, not from routine.",
    "about.philosophy.p1": "After 26 years in the profession, I know the best design is rarely the first idea. Every project at PM|AD begins with careful listening: to the client's wishes, to the site, and to the practical requirements of building in the Netherlands.",
    "about.philosophy.p2": "As an independent architect, I work with a small, personal team of trusted partners — structural engineers, consultants and contractors I've worked with for years. That combines the flexibility of a sole practice with the reliability of a large firm.",
    "about.philosophy.p3": "My strength lies in both the exterior and the interior of a building. I prefer to work on both together within a single commission, so the outside and the inside come from the same vision — from the façade down to the last detail of the finish.",
    "about.philosophy.tag1": "New build",
    "about.philosophy.tag2": "Renovation & transformation",
    "about.philosophy.tag3": "Interior design",
    "about.philosophy.tag4": "Permit processes",
    "about.philosophy.tag5": "Sustainable building",

    "about.timeline.title": "Career in brief",
    "about.timeline.lede": "26 years of experience at eight architecture firms in the Netherlands and Belgium, up to the launch of PM|AD on 1 July 2026.",
    "about.timeline.t1.year": "July 2026 — present",
    "about.timeline.t1.title": "PM|AD — independent architect",
    "about.timeline.t1.desc": "Launch of my own practice.",
    "about.timeline.t2.year": "2020 — 2026 (6.5 years)",
    "about.timeline.t2.title": "JPS architecten",
    "about.timeline.t3.year": "2019 — 2020 (1 year)",
    "about.timeline.t3.title": "Studio Jeroen van Zwetselaar",
    "about.timeline.t4.year": "2013 — 2019 (5.5 years)",
    "about.timeline.t4.title": "HofmanDujardin architecten",
    "about.timeline.t5.year": "2012 — 2013 (1 year)",
    "about.timeline.t5.title": "Hollandse Nieuwe",
    "about.timeline.t6.year": "2010 — 2012 (2 years)",
    "about.timeline.t6.title": "NEXT Architects",
    "about.timeline.t7.year": "2007 — 2010 (3 years)",
    "about.timeline.t7.title": "Sander Architecten",
    "about.timeline.t7.desc": "Amsterdam",
    "about.timeline.t8.year": "2006 — 2007 (1 year)",
    "about.timeline.t8.title": "CrepainBinst Architecten",
    "about.timeline.t8.desc": "Antwerp",
    "about.timeline.t9.year": "2000 — 2006 (6 years)",
    "about.timeline.t9.title": "Wiegerinck Architecten",
    "about.timeline.t9.desc": "Arnhem — start of the career",

    "about.cta.eyebrow": "Let's talk",
    "about.cta.title": "Wondering if PM|AD is a fit for your project?",
    "about.cta.text": "A first conversation is always without obligation.",
    "about.cta.btnContact": "Get in touch",
    "about.cta.btnProjects": "View projects",

    "projects.meta.title": "Projects — PM|AD",
    "projects.meta.description": "A selection of architecture projects by PM|AD — Pieter Mulder, including new builds, renovations, interiors and a floating home in Eijsden.",
    "projects.hero.eyebrow": "Projects",
    "projects.hero.title": "Experience, translated into built work.",
    "projects.hero.lede": "From detached houses and floating architecture to renovations and interior design. A selection of work from recent years.",

    "projects.filters.all": "All projects",
    "projects.filters.new": "New build",
    "projects.filters.reno": "Renovation",
    "projects.filters.interior": "Interior",

    "projects.radder.meta": "New build — 2015",
    "projects.radder.title": "Woonboot Radder, Eijsden (Limburg)",
    "projects.radder.desc": "A fully floating home on the banks of the Meuse near Eijsden, commissioned by my uncle. The design combines a compact timber volume with a long, transparent facade facing the water, an open kitchen-living-dining area with three bedrooms, and a basement for services and storage.",
    "projects.radder.d1": "Basement",
    "projects.radder.d2": "East facade",
    "projects.radder.d3": "West facade",
    "projects.radder.d4": "South & north facade",

    "projects.pm.meta": "Renovation & extension",
    "projects.pm.title": "Woonhuis P&M, Amsterdam",
    "projects.pm.desc": "Reconfiguration and extension of an Amsterdam home for personal friends, with a new open kitchen, dining room and living room, a walk-in closet and a fully renovated bathroom. The existing, compact floor plan has been transformed into a spacious, light-filled living floor with a green garden room as a warm transition to the outdoors.",
    "projects.pm.d1": "Existing floor plan",
    "projects.pm.d2": "New floor plan",
    "projects.pm.d3": "Bathroom detail",

    "projects.julianaweg.meta": "Transformation & extension — in development",
    "projects.julianaweg.title": "Villa Julianaweg, Oosterbeek",
    "projects.julianaweg.desc": "Transformation and extension of a villa on the Julianaweg in Oosterbeek, commissioned by 026vastgoed. The villa and its new extension are together divided into four apartments for the 55+ age group. This densification sets off a housing chain: elsewhere, four family homes become available, which in turn free up four starter homes. By addressing the end of the chain, a reaction unfolds that benefits an entire sector and helps solve the housing crisis — without affecting nature reserves or agricultural land.",
    "projects.julianaweg.d1": "Front elevation with new extension (render)",
    "projects.julianaweg.d2": "Rear elevation with new extension (render)",
    "projects.julianaweg.d3": "Kitchen and living room interior (render)",
    "projects.julianaweg.metaTitle": "Villa Julianaweg, Oosterbeek — PM|AD",
    "projects.julianaweg.metaDescription": "All images of Villa Julianaweg: transformation and extension of a villa in Oosterbeek into four apartments for 55+ residents, commissioned by 026vastgoed.",

    "projects.utrechtseweg.meta": "Transformation & rooftop extension — in development",
    "projects.utrechtseweg.title": "Utrechtseweg 178, Oosterbeek",
    "projects.utrechtseweg.desc": "Transformation of a residence above a shop on the Utrechtseweg in Oosterbeek, commissioned by 026Vastgoed. An extra storey was added under the roof and the rear of the building was extended. Together these changes create three apartments for the 55+ age group.",
    "projects.utrechtseweg.d1": "Front facade with new roof storey (render)",
    "projects.utrechtseweg.d2": "Aerial view of the rear extension (render)",
    "projects.utrechtseweg.d3": "Kitchen interior (render)",
    "projects.utrechtseweg.d4": "Living room interior (render)",
    "projects.utrechtseweg.d5": "Dining area and kitchen interior (render)",
    "projects.utrechtseweg.metaTitle": "Utrechtseweg 178, Oosterbeek — PM|AD",
    "projects.utrechtseweg.metaDescription": "All images of Utrechtseweg 178: transformation of a residence above a shop in Oosterbeek into three apartments for 55+ residents, commissioned by 026Vastgoed.",

    "projects.velperweg.meta": "New build — in development",
    "projects.velperweg.title": "Velperweg 56b, Arnhem",
    "projects.velperweg.desc": "New residential building on the Velperweg in Arnhem, commissioned by 026Vastgoed, directly next to a listed heritage residential block. On the site of an existing single-storey building rises a new volume that never stood there before, with five new floors. Each floor holds one apartment of roughly 80 m². Precisely because this is new construction, the design deliberately aims for a restrained, contemporary approach that does justice to the listed building next door.",
    "projects.velperweg.d1": "Front view with new building volume (render)",
    "projects.velperweg.d2": "Aerial view of the new building next to the listed property (render)",
    "projects.velperweg.d3": "Front facade detail (render)",
    "projects.velperweg.d4": "Balcony with view into the living room (render)",
    "projects.velperweg.metaTitle": "Velperweg 56b, Arnhem — PM|AD",
    "projects.velperweg.metaDescription": "All images of Velperweg 56b: a new residential building with five apartments next to a listed property in Arnhem, commissioned by 026Vastgoed.",

    "projects.beukenlaan.meta": "Transformation & rooftop extension — in development",
    "projects.beukenlaan.title": "Beukenlaan 01, Oosterbeek",
    "projects.beukenlaan.desc": "In collaboration with 026Vastgoed, we are transforming this former restaurant with an adjoining home and extra apartment into four future-proof residential units. Extending both the ground floor and first floor creates more living and outdoor space, and adding an extra storey provides enough room for all the homes. Because of close consultation with the municipality and local residents, the design is still evolving; once this is finalised, this page will be updated.",
    "projects.beukenlaan.d1": "Rear facade with new rooftop extension (render)",
    "projects.beukenlaan.d2": "Detail of rear facade and terrace (render)",
    "projects.beukenlaan.d3": "Terrace and garden (render)",
    "projects.beukenlaan.d4": "Kitchen and living room interior (render)",
    "projects.beukenlaan.metaTitle": "Beukenlaan 01, Oosterbeek — PM|AD",
    "projects.beukenlaan.metaDescription": "All images of Beukenlaan 01: transformation of a former restaurant and residence in Oosterbeek into four future-proof homes, in collaboration with 026Vastgoed.",

    "projects.p1.title": "Villa Zonnehof",
    "projects.p1.desc": "Detached house with an open, light-filled floor plan and a direct relationship with the garden.",
    "projects.p2.title": "Kantoor De Werf",
    "projects.p2.desc": "Interior design for an office building where calm and flexibility come together.",
    "projects.p3.title": "Boerderij Achterhoek",
    "projects.p3.desc": "Preserving the agricultural character, with a contemporary living floor within the existing shell.",
    "projects.p4.title": "Twee-onder-een-kap Bosrand",
    "projects.p4.desc": "Two semi-detached homes in a wooded setting, designed with respect for the existing vegetation.",

    "projects.note": "A selection of recently completed and ongoing projects. More projects will follow soon.",

    "projects.cta.eyebrow": "Your project",
    "projects.cta.title": "Wondering what PM|AD can do for you?",
    "projects.cta.text": "Every project starts with a good conversation.",
    "projects.cta.btnContact": "Get in touch",

    "partners.meta.title": "Partners — PM|AD",
    "partners.meta.description": "The partners PM|AD — Pieter Mulder works with on architecture and real estate projects.",
    "partners.hero.eyebrow": "Collaboration",
    "partners.hero.title": "Trusted partners.",
    "partners.hero.lede": "PM|AD works on a project basis with a small number of trusted partners. Below you'll find who they are and what the collaboration involves.",
    "partners.026.name": "026Vastgoed",
    "partners.026.desc": "026Vastgoed is a real estate developer based in the Arnhem region, focused on new construction and the transformation of homes and commercial spaces. For 026Vastgoed, PM|AD works on transformation and densification projects, including Villa Julianaweg in Oosterbeek.",
    "partners.note": "More collaborations will be added here soon.",
    "common.visitWebsite": "Visit website",

    "contact.meta.title": "Contact — PM|AD",
    "contact.meta.description": "Get in touch with Pieter Mulder of PM|AD for your architecture project.",
    "contact.hero.eyebrow": "Contact",
    "contact.hero.title": "Let's talk.",
    "contact.hero.lede": "Whether it's a concrete project or a first idea — I'm happy to think along, no strings attached.",

    "contact.info.title": "Details",
    "contact.info.emailLabel": "Email",
    "contact.info.phoneLabel": "Phone",
    "contact.info.addressLabel": "Address",
    "contact.info.kvkLabel": "Chamber of Commerce (KvK)",

    "contact.form.title": "Send a message",
    "contact.form.nameLabel": "Name",
    "contact.form.emailLabel": "Email address",
    "contact.form.subjectLabel": "Subject",
    "contact.form.subjectPlaceholder": "E.g. new build, renovation, interior",
    "contact.form.messageLabel": "Message",
    "contact.form.submit": "Send message",
    "contact.form.note": "Your details are only used to get in touch with you about your message.",

    "common.formSuccess": "Thanks for your message! I'll get back to you as soon as possible.",
    "common.formError": "Something went wrong while sending. Please try again, or email pm_ad@icloud.com directly.",
    "common.langLabel": "Language",
    "common.photoPlaceholder": "Project photo",
    "common.viewAllImages": "View all images",
    "common.backToProjects": "Back to projects",

    "projects.radder.metaTitle": "Woonboot Radder, Eijsden — PM|AD",
    "projects.radder.metaDescription": "All images of Woonboot Radder: a fully floating home on the banks of the Meuse near Eijsden, designed by PM|AD — Pieter Mulder.",
    "projects.pm.metaTitle": "Woonhuis P&M, Amsterdam — PM|AD",
    "projects.pm.metaDescription": "All images of Woonhuis P&M: a reconfiguration and extension of an Amsterdam home, designed by PM|AD — Pieter Mulder."
  }
};

const PMAD_LANG_KEY = "pmad-lang";

function pmadGetLang() {
  try {
    const saved = localStorage.getItem(PMAD_LANG_KEY);
    if (saved === "nl" || saved === "en") return saved;
  } catch (e) {
    // localStorage unavailable (privacy mode etc.) — fall back to Dutch
  }
  return "nl";
}

function pmadSetLang(lang) {
  try {
    localStorage.setItem(PMAD_LANG_KEY, lang);
  } catch (e) {
    // ignore — non-fatal if storage isn't available
  }
  pmadApplyLang(lang);
}

function pmadApplyLang(lang) {
  const dict = PMAD_I18N[lang] || PMAD_I18N.nl;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    // format: "attr1:key1;attr2:key2"
    el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  const titleKey = document.documentElement.getAttribute("data-i18n-title");
  if (titleKey && dict[titleKey]) {
    document.title = dict[titleKey];
  }
  const descKey = document.documentElement.getAttribute("data-i18n-desc");
  if (descKey && dict[descKey]) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict[descKey]);
  }

  document.querySelectorAll(".lang-select").forEach((sel) => {
    sel.value = lang;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = pmadGetLang();
  pmadApplyLang(lang);

  document.querySelectorAll(".lang-select").forEach((sel) => {
    sel.addEventListener("change", (e) => pmadSetLang(e.target.value));
  });
});
