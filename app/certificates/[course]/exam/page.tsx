"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Award, AlertCircle, XCircle, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { createClient as createBrowserClient } from "@/lib/supabase/client"

const examQuestions: Record<string, Array<{ question: string; options: string[]; correct: number }>> = {
  // ENGLISH LEVELS
  "english-a2": [
    {
      question: "Which sentence is correct?",
      options: ["I am go to school", "I go to school", "I going to school", "I goes to school"],
      correct: 1,
    },
    { question: "What is the past tense of 'eat'?", options: ["eated", "ate", "eaten", "eat"], correct: 1 },
    { question: "Choose the correct article: ___ apple", options: ["a", "an", "the", "no article"], correct: 1 },
    { question: "What does 'hello' mean?", options: ["goodbye", "greeting", "thank you", "sorry"], correct: 1 },
    {
      question: "How do you ask for help?",
      options: ["Can you help me?", "You help me", "Help me you", "Me you help"],
      correct: 0,
    },
  ],
  "english-b1": [
    {
      question: "Choose the correct form: I ___ to London last year.",
      options: ["go", "went", "have gone", "going"],
      correct: 1,
    },
    {
      question: "Which is correct?",
      options: ["She don't like pizza", "She doesn't likes pizza", "She doesn't like pizza", "She not like pizza"],
      correct: 2,
    },
    { question: "What is a synonym for 'happy'?", options: ["sad", "joyful", "angry", "tired"], correct: 1 },
    { question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be"], correct: 2 },
    {
      question: "Choose the correct preposition: I'm interested ___ music.",
      options: ["on", "in", "at", "for"],
      correct: 1,
    },
  ],
  "english-b2": [
    {
      question: "Which sentence uses the present perfect correctly?",
      options: [
        "I have seen that movie yesterday",
        "I have seen that movie before",
        "I seen that movie before",
        "I am seeing that movie before",
      ],
      correct: 1,
    },
    {
      question: "Choose the correct passive form: They built this house in 1990.",
      options: [
        "This house built in 1990",
        "This house was built in 1990",
        "This house is built in 1990",
        "This house has built in 1990",
      ],
      correct: 1,
    },
    {
      question: "What does 'beat around the bush' mean?",
      options: ["To be direct", "To avoid saying something directly", "To hit something", "To run fast"],
      correct: 1,
    },
    { question: "I wish I ___ more time to study.", options: ["have", "had", "will have", "having"], correct: 1 },
    {
      question: "Choose the correct form: By next year, I ___ English for 10 years.",
      options: ["study", "will study", "will have been studying", "have studied"],
      correct: 2,
    },
  ],
  "english-c1": [
    {
      question: "Choose the correct form: Had I known about the meeting, I ___ attended.",
      options: ["would", "would have", "will have", "had"],
      correct: 1,
    },
    {
      question: "What is the meaning of 'cut corners'?",
      options: ["To take shortcuts", "To save money by reducing quality", "To be punctual", "To be creative"],
      correct: 1,
    },
    {
      question: "Which sentence demonstrates correct subjunctive mood?",
      options: ["If I was you, I'd go", "If I were you, I'd go", "If I am you, I'd go", "If I be you, I'd go"],
      correct: 1,
    },
    { question: "The committee ___ unable to reach a consensus.", options: ["was", "were", "is", "are"], correct: 0 },
    {
      question: "Choose the correct collocation: To ___ an opportunity.",
      options: ["catch", "seize", "take", "grab"],
      correct: 1,
    },
  ],

  // FRENCH LEVELS
  "french-a2": [
    {
      question: "Comment dit-on 'hello' en français?",
      options: ["Au revoir", "Bonjour", "Bonsoir", "Salut"],
      correct: 1,
    },
    { question: "Je ___ français.", options: ["parle", "parles", "parlons", "parlez"], correct: 0 },
    { question: "Quel est le pluriel de 'chat'?", options: ["chats", "chates", "chat", "chatts"], correct: 0 },
    { question: "Je voudrais ___ café.", options: ["un", "une", "des", "le"], correct: 0 },
    {
      question: "Comment dit-on 'thank you'?",
      options: ["S'il vous plaît", "Merci", "Pardon", "Excusez-moi"],
      correct: 1,
    },
  ],
  "french-b1": [
    { question: "Hier, je ___ au cinéma.", options: ["vais", "suis allé", "irai", "allais"], correct: 1 },
    { question: "Si j'___ riche, je voyagerais.", options: ["suis", "étais", "serai", "serais"], correct: 1 },
    { question: "Elle ___ partir demain.", options: ["va", "vas", "vont", "allez"], correct: 0 },
    { question: "Quel temps fait-il? Il ___.", options: ["pleut", "pleuvoir", "pleuvant", "plu"], correct: 0 },
    { question: "Je me ___ à 7 heures.", options: ["lève", "lèves", "levons", "lever"], correct: 0 },
  ],
  "french-b2": [
    { question: "Bien que je ___ fatigué, je continuerai.", options: ["suis", "sois", "serais", "étais"], correct: 1 },
    { question: "La voiture ___ je t'ai parlé est rouge.", options: ["que", "qui", "dont", "où"], correct: 2 },
    { question: "Il faut que tu ___ tes devoirs.", options: ["fais", "fasses", "faire", "ferais"], correct: 1 },
    { question: "Quand j'___ jeune, je jouais au foot.", options: ["ai été", "étais", "suis", "serai"], correct: 1 },
    {
      question: "Cette maison a été ___ en 1950.",
      options: ["construite", "construit", "construisant", "construire"],
      correct: 0,
    },
  ],
  "french-c1": [
    { question: "Qu'il ___ venu me surprend.", options: ["est", "soit", "sera", "serait"], correct: 1 },
    {
      question: "Choisissez le bon accord: La plupart des gens ___ d'accord.",
      options: ["est", "sont", "être", "étant"],
      correct: 1,
    },
    { question: "Sans que tu le ___.", options: ["saches", "sais", "sauras", "savais"], correct: 0 },
    {
      question: "Le subjonctif plus-que-parfait de 'avoir fini' est:",
      options: ["que j'aie fini", "que j'eusse fini", "que j'ai fini", "que j'avais fini"],
      correct: 1,
    },
    {
      question: "Lequel des mots suivants est un néologisme?",
      options: ["ordinateur", "courriel", "télévision", "radio"],
      correct: 1,
    },
  ],

  // GERMAN LEVELS
  "german-a2": [
    {
      question: "Wie sagt man 'hello' auf Deutsch?",
      options: ["Tschüss", "Hallo", "Guten Morgen", "Danke"],
      correct: 1,
    },
    { question: "Ich ___ Deutsch.", options: ["spreche", "sprichst", "sprechen", "sprecht"], correct: 0 },
    { question: "Der, die, oder das? ___ Haus", options: ["Der", "Die", "Das", "Den"], correct: 2 },
    { question: "Ich möchte ___ Kaffee.", options: ["ein", "eine", "einen", "einem"], correct: 2 },
    { question: "Wie geht es ___?", options: ["du", "dich", "dir", "dein"], correct: 2 },
  ],
  "german-b1": [
    {
      question: "Gestern ___ ich ins Kino ___.",
      options: ["habe...gegangen", "bin...gegangen", "habe...gehen", "bin...gehen"],
      correct: 1,
    },
    { question: "Wenn ich reich ___, würde ich reisen.", options: ["bin", "wäre", "war", "gewesen"], correct: 1 },
    { question: "Das Buch, ___ ich lese, ist interessant.", options: ["das", "den", "dem", "der"], correct: 0 },
    { question: "Ich freue ___ auf die Ferien.", options: ["mir", "mich", "sich", "uns"], correct: 1 },
    { question: "Er hat mir ___, dass er kommt.", options: ["gesagt", "sagt", "sagend", "sagen"], correct: 0 },
  ],
  "german-b2": [
    {
      question: "Obwohl es ___, gingen wir spazieren.",
      options: ["regnet", "regnete", "regnen", "geregnet"],
      correct: 1,
    },
    { question: "Das Auto, ___ Motor kaputt ist, steht dort.", options: ["das", "dessen", "dem", "der"], correct: 1 },
    { question: "Es ist wichtig, dass du pünktlich ___.", options: ["bist", "seist", "wärst", "warst"], correct: 0 },
    { question: "Nachdem er ___ hatte, ging er schlafen.", options: ["gegessen", "essen", "isst", "aß"], correct: 0 },
    { question: "Das Haus wurde 1950 ___.", options: ["gebaut", "bauen", "gebautet", "bauend"], correct: 0 },
  ],
  "german-c1": [
    {
      question: "Wählen Sie die richtige Form: Hätte ich das gewusst, ___ ich gekommen.",
      options: ["wäre", "bin", "würde", "hätte"],
      correct: 0,
    },
    { question: "Der Konjunktiv II von 'helfen' ist:", options: ["hülfe", "hälfe", "hülfte", "helfte"], correct: 0 },
    { question: "Das Partizip I von 'lesen' ist:", options: ["gelesen", "lesend", "liest", "las"], correct: 1 },
    {
      question: "Welches Wort ist ein Pleonasmus?",
      options: ["weißer Schimmel", "großes Haus", "schnelles Auto", "alter Mann"],
      correct: 0,
    },
    {
      question: "Die Apposition steht im gleichen ___ wie das Bezugswort.",
      options: ["Genus", "Numerus", "Kasus", "Tempus"],
      correct: 2,
    },
  ],

  // SPANISH LEVELS
  "spanish-a2": [
    { question: "¿Cómo se dice 'hello' en español?", options: ["Adiós", "Hola", "Gracias", "Por favor"], correct: 1 },
    { question: "Yo ___ español.", options: ["hablo", "hablas", "hablamos", "hablan"], correct: 0 },
    { question: "¿Cuál es el plural de 'casa'?", options: ["casas", "casaes", "casa", "cases"], correct: 0 },
    { question: "Me gusta ___ música.", options: ["el", "la", "los", "las"], correct: 1 },
    { question: "¿Cómo estás? Estoy ___.", options: ["bueno", "bien", "buena", "buenos"], correct: 1 },
  ],
  "spanish-b1": [
    { question: "Ayer ___ al cine.", options: ["voy", "fui", "iré", "iba"], correct: 1 },
    { question: "Si ___ rico, viajaría.", options: ["soy", "fuera", "seré", "era"], correct: 1 },
    { question: "Ella ___ salir mañana.", options: ["va a", "vas a", "van a", "voy a"], correct: 0 },
    { question: "Me ___ a las 7.", options: ["levanto", "levantas", "levantamos", "levantan"], correct: 0 },
    { question: "He ___ mi tarea.", options: ["terminado", "terminar", "termino", "terminando"], correct: 0 },
  ],
  "spanish-b2": [
    { question: "Aunque ___ cansado, seguiré.", options: ["estoy", "esté", "estaría", "estaba"], correct: 1 },
    { question: "El coche ___ te hablé es rojo.", options: ["que", "quien", "del que", "donde"], correct: 2 },
    { question: "Es necesario que tú ___ la verdad.", options: ["dices", "digas", "dirás", "decías"], correct: 1 },
    { question: "Cuando ___ joven, jugaba fútbol.", options: ["he sido", "era", "soy", "seré"], correct: 1 },
    {
      question: "Esta casa fue ___ en 1950.",
      options: ["construida", "construir", "construyendo", "construye"],
      correct: 0,
    },
  ],
  "spanish-c1": [
    { question: "Que él ___ venido me sorprende.", options: ["ha", "haya", "habrá", "habría"], correct: 1 },
    { question: "La mayoría de la gente ___ de acuerdo.", options: ["está", "están", "esté", "estén"], correct: 1 },
    { question: "Sin que tú lo ___.", options: ["sepas", "sabes", "sabrás", "sabías"], correct: 0 },
    {
      question: "El subjuntivo imperfecto de 'tener' es:",
      options: ["tenga", "tuviera", "tendría", "tenía"],
      correct: 1,
    },
    { question: "¿Cuál es un cultismo?", options: ["ordenador", "ratón", "índole", "coche"], correct: 2 },
  ],

  // ITALIAN LEVELS
  "italian-a2": [
    { question: "Come si dice 'hello' in italiano?", options: ["Arrivederci", "Ciao", "Grazie", "Prego"], correct: 1 },
    { question: "Io ___ italiano.", options: ["parlo", "parli", "parliamo", "parlano"], correct: 0 },
    { question: "Qual è il plurale di 'libro'?", options: ["libri", "libros", "libro", "libi"], correct: 0 },
    { question: "Mi piace ___ musica.", options: ["il", "la", "i", "le"], correct: 1 },
    { question: "Come stai? Sto ___.", options: ["buono", "bene", "buona", "buoni"], correct: 1 },
  ],
  "italian-b1": [
    { question: "Ieri ___ al cinema.", options: ["vado", "sono andato", "andrò", "andavo"], correct: 1 },
    { question: "Se ___ ricco, viaggerei.", options: ["sono", "fossi", "sarò", "ero"], correct: 1 },
    { question: "Lei ___ partire domani.", options: ["va", "vai", "vanno", "andiamo"], correct: 0 },
    { question: "Mi ___ alle 7.", options: ["alzo", "alzi", "alziamo", "alzano"], correct: 0 },
    { question: "Ho ___ i compiti.", options: ["finito", "finire", "finisco", "finendo"], correct: 0 },
  ],
  "italian-b2": [
    { question: "Benché ___ stanco, continuerò.", options: ["sono", "sia", "sarei", "ero"], correct: 1 },
    { question: "La macchina ___ ti ho parlato è rossa.", options: ["che", "chi", "di cui", "dove"], correct: 2 },
    { question: "È necessario che tu ___ la verità.", options: ["dici", "dica", "dirai", "dicevi"], correct: 1 },
    { question: "Quando ___ giovane, giocavo a calcio.", options: ["sono stato", "ero", "sono", "sarò"], correct: 1 },
    {
      question: "Questa casa fu ___ nel 1950.",
      options: ["costruita", "costruire", "costruendo", "costruisce"],
      correct: 0,
    },
  ],
  "italian-c1": [
    { question: "Che lui ___ venuto mi sorprende.", options: ["è", "sia", "sarà", "sarebbe"], correct: 1 },
    { question: "La maggior parte della gente ___ d'accordo.", options: ["è", "sono", "sia", "siano"], correct: 0 },
    { question: "Senza che tu lo ___.", options: ["sappia", "sai", "saprai", "sapevi"], correct: 0 },
    {
      question: "Il congiuntivo trapassato di 'avere finito' è:",
      options: ["che io abbia finito", "che io avessi finito", "che io ho finito", "che io avevo finito"],
      correct: 1,
    },
    {
      question: "Quale parola è un neologismo?",
      options: ["computer", "telefono", "televisione", "radio"],
      correct: 0,
    },
  ],

  // ARABIC LEVELS
  "arabic-a2": [
    { question: "كيف تقول 'hello' بالعربية؟", options: ["وداعا", "مرحبا", "شكرا", "من فضلك"], correct: 1 },
    { question: "أنا ___ العربية.", options: ["أتكلم", "تتكلم", "نتكلم", "يتكلمون"], correct: 0 },
    { question: "ما هو جمع 'كتاب'؟", options: ["كتب", "كتابات", "كتاب", "كتبان"], correct: 0 },
    { question: "أحب ___ موسيقى.", options: ["ال", "ا", "الـ", "لل"], correct: 0 },
    { question: "كيف حالك؟ أنا ___.", options: ["جيد", "بخير", "حسن", "طيب"], correct: 1 },
  ],
  "arabic-b1": [
    { question: "أمس ___ إلى السينما.", options: ["أذهب", "ذهبت", "سأذهب", "كنت أذهب"], correct: 1 },
    { question: "لو كنت ___, لسافرت.", options: ["غني", "غنيا", "أغنى", "الغني"], correct: 1 },
    { question: "هي ___ غدا.", options: ["ستغادر", "تغادرين", "يغادرون", "نغادر"], correct: 0 },
    { question: "أنا ___ في الساعة السابعة.", options: ["أستيقظ", "تستيقظ", "نستيقظ", "يستيقظون"], correct: 0 },
    { question: "لقد ___ واجبي.", options: ["أنهيت", "أنهي", "أنهى", "إنهاء"], correct: 0 },
  ],
  "arabic-b2": [
    { question: "رغم أنني ___, سأستمر.", options: ["متعب", "متعبا", "أتعب", "التعب"], correct: 0 },
    { question: "السيارة التي ___ عنها حمراء.", options: ["تحدثت", "أتحدث", "سأتحدث", "كنت أتحدث"], correct: 0 },
    { question: "من الضروري أن ___ الحقيقة.", options: ["تقول", "قل", "تقل", "قال"], correct: 0 },
    { question: "عندما ___ صغيرا، كنت ألعب كرة القدم.", options: ["كنت", "كان", "أكون", "سأكون"], correct: 0 },
    { question: "هذا البيت ___ في 1950.", options: ["بني", "يبنى", "بناء", "بان"], correct: 0 },
  ],
  "arabic-c1": [
    { question: "أن يكون قد ___ يفاجئني.", options: ["جاء", "يجيء", "سيجيء", "كان يجيء"], correct: 0 },
    { question: "معظم الناس ___ موافقون.", options: ["هم", "هو", "هي", "نحن"], correct: 0 },
    { question: "دون أن ___.", options: ["تعلم", "تعلمه", "علمت", "يعلم"], correct: 0 },
    { question: "الفعل الماضي من 'يكتب' هو:", options: ["كتب", "كاتب", "مكتوب", "اكتب"], correct: 0 },
    { question: "أي من الكلمات التالية دخيلة؟", options: ["حاسوب", "كمبيوتر", "تلفاز", "مذياع"], correct: 1 },
  ],

  // TECHNICAL SKILLS - HTML
  "html-beginner": [
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1,
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correct: 0,
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<head>", "<header>"],
      correct: 1,
    },
    {
      question: "What is the correct HTML element for inserting an image?",
      options: ["<img>", "<image>", "<pic>", "<picture>"],
      correct: 0,
    },
    {
      question: "Which attribute is used to specify an alternative text for an image?",
      options: ["alt", "title", "text", "description"],
      correct: 0,
    },
  ],
  "html-intermediate": [
    {
      question: "What is the semantic HTML tag for a header section?",
      options: ["<top>", "<header>", "<head>", "<section>"],
      correct: 1,
    },
    {
      question: "Which HTML5 element is used for independent content?",
      options: ["<section>", "<article>", "<div>", "<container>"],
      correct: 1,
    },
    {
      question: "What does the <form> tag's method attribute do?",
      options: [
        "Specifies how form data is sent",
        "Defines form styling",
        "Sets form validation",
        "Creates form structure",
      ],
      correct: 0,
    },
    {
      question: "Which input type is used for selecting a date?",
      options: ["date", "calendar", "datetime", "day"],
      correct: 0,
    },
    {
      question: "What is the purpose of the <canvas> element?",
      options: ["Drawing graphics via JavaScript", "Displaying videos", "Creating forms", "Inserting images"],
      correct: 0,
    },
  ],
  "html-master": [
    {
      question: "What is the difference between <section> and <article> tags?",
      options: [
        "<article> is for independent content, <section> is for related content",
        "They are identical",
        "<section> is semantic, <article> is not",
        "<article> is for videos only",
      ],
      correct: 0,
    },
    {
      question: "Which accessibility attribute is most important for screen readers?",
      options: ["href", "aria-label", "class", "id"],
      correct: 1,
    },
    {
      question: "What is the correct way to embed a video in HTML5?",
      options: ["<video src='...'>", "<embed video>", "<video> with <source>", "<media>"],
      correct: 2,
    },
    {
      question: "What does the data-* attribute allow in HTML5?",
      options: ["Storing custom data on elements", "Setting CSS properties", "Creating animations", "Form validation"],
      correct: 0,
    },
    {
      question: "Which microdata vocabulary is most commonly used?",
      options: ["OpenGraph", "Schema.org", "Microformat", "Dublin Core"],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - CSS
  "css-beginner": [
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Colorful Style System"],
      correct: 1,
    },
    {
      question: "How do you select an element with the id 'main' in CSS?",
      options: [".main", "#main", "main", "@main"],
      correct: 1,
    },
    {
      question: "What is the correct syntax for adding a background color?",
      options: ["bgcolor: red;", "background-color: red;", "bg-color: red;", "color-bg: red;"],
      correct: 1,
    },
    {
      question: "How do you make text bold in CSS?",
      options: ["text-style: bold;", "font-weight: bold;", "bold: true;", "text-bold: yes;"],
      correct: 1,
    },
    {
      question: "What does the box model consist of?",
      options: [
        "Border and outline",
        "Margin, border, padding, and content",
        "Color and size",
        "Width and height only",
      ],
      correct: 1,
    },
  ],
  "css-intermediate": [
    {
      question: "What is the difference between 'display: flex' and 'display: grid'?",
      options: ["Flex is 1D, Grid is 2D", "Grid is older than Flex", "They are the same", "Flex is for images only"],
      correct: 0,
    },
    {
      question: "How do you create a CSS animation?",
      options: ["Using @animate", "Using @keyframes", "Using animation-rule", "Using motion"],
      correct: 1,
    },
    {
      question: "What is the purpose of 'position: absolute'?",
      options: [
        "Remove element from document flow and position relative to parent",
        "Fix element to viewport",
        "Make element relative to viewport",
        "Center an element",
      ],
      correct: 0,
    },
    {
      question: "What does 'z-index' property do?",
      options: [
        "Controls stacking order of elements",
        "Sets zoom level",
        "Increases font size",
        "Controls animation speed",
      ],
      correct: 0,
    },
    {
      question: "Which CSS property is used for rounded corners?",
      options: ["corner-radius", "border-radius", "radius", "round"],
      correct: 1,
    },
  ],
  "css-master": [
    {
      question: "What is the difference between 'em' and 'rem' units?",
      options: [
        "em is relative to parent, rem is relative to root",
        "They are identical",
        "em is larger",
        "rem is for mobile only",
      ],
      correct: 0,
    },
    {
      question: "What does CSS specificity determine?",
      options: [
        "How fast CSS loads",
        "Which styles are applied when there are conflicts",
        "The size of CSS file",
        "Browser compatibility",
      ],
      correct: 1,
    },
    {
      question: "What is the purpose of CSS custom properties (variables)?",
      options: [
        "Make CSS files smaller",
        "Store and reuse values throughout CSS",
        "Speed up rendering",
        "Improve browser compatibility",
      ],
      correct: 1,
    },
    {
      question: "How do you optimize CSS for performance?",
      options: [
        "Use more selectors",
        "Minify, use critical CSS, avoid @import",
        "Use inline styles",
        "Increase specificity",
      ],
      correct: 1,
    },
    {
      question: "What is the CSS Grid 'fr' unit used for?",
      options: ["Frame size", "Fractional unit for flexible sizing", "Frequency", "Font ratio"],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - JAVASCRIPT
  "javascript-beginner": [
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["variable x = 5;", "var x = 5;", "v x = 5;", "declare x = 5;"],
      correct: 1,
    },
    {
      question: "Which operator is used for comparison?",
      options: ["=", "==", "===", "Both == and ==="],
      correct: 3,
    },
    {
      question: "How do you write an if statement?",
      options: ["if x > 5:", "if (x > 5) { }", "if x > 5 { }", "ifx > 5"],
      correct: 1,
    },
    {
      question: "What is a function?",
      options: ["A variable", "A reusable block of code", "A loop", "A comment"],
      correct: 1,
    },
    {
      question: "How do you access the first element of an array?",
      options: ["array[1]", "array[0]", "array.first", "array.get(0)"],
      correct: 1,
    },
  ],
  "javascript-intermediate": [
    {
      question: "What does the 'this' keyword refer to?",
      options: ["The previous object", "The current object context", "The global object always", "A reference to null"],
      correct: 1,
    },
    {
      question: "What is a callback function?",
      options: [
        "A function that calls itself",
        "A function passed to another function",
        "A function that returns a value",
        "A function with no parameters",
      ],
      correct: 1,
    },
    {
      question: "How do you handle asynchronous operations in JavaScript?",
      options: ["Using callbacks", "Using Promises", "Using async/await", "All of the above"],
      correct: 3,
    },
    {
      question: "What is the difference between 'let' and 'const'?",
      options: [
        "let is for variables, const is for functions",
        "let can be reassigned, const cannot",
        "They are identical",
        "const is faster",
      ],
      correct: 1,
    },
    {
      question: "What does the spread operator (...) do?",
      options: [
        "Spreads code over multiple lines",
        "Expands arrays/objects into individual elements",
        "Creates a new array",
        "Combines two arrays",
      ],
      correct: 1,
    },
  ],
  "javascript-master": [
    {
      question: "What is closure in JavaScript?",
      options: [
        "A function that closes the program",
        "A function having access to variables from its outer scope",
        "A method to end loops",
        "An error state",
      ],
      correct: 1,
    },
    {
      question: "What is the difference between shallow copy and deep copy?",
      options: [
        "Shallow copies only the first level, deep copies all levels",
        "They are the same",
        "Deep copy is slower",
        "Shallow copy is for arrays only",
      ],
      correct: 0,
    },
    {
      question: "What is the event loop in JavaScript?",
      options: [
        "A loop in event handlers",
        "The mechanism that handles async code execution",
        "A performance optimization",
        "A way to prevent memory leaks",
      ],
      correct: 1,
    },
    {
      question: "What are Promises used for?",
      options: [
        "Storing data",
        "Handling asynchronous operations with eventual completion",
        "Improving performance",
        "Error checking",
      ],
      correct: 1,
    },
    {
      question: "What is the difference between == and ===?",
      options: [
        "No difference",
        "== does type coercion, === does strict comparison",
        "=== is faster",
        "== is more reliable",
      ],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - C++
  "cpp-beginner": [
    {
      question: "What is C++?",
      options: ["A markup language", "An object-oriented programming language", "A database", "A design pattern"],
      correct: 1,
    },
    {
      question: "How do you declare an integer variable in C++?",
      options: ["int x;", "integer x;", "var x;", "number x;"],
      correct: 0,
    },
    {
      question: "What is the purpose of the 'main' function?",
      options: ["To store data", "The entry point of a C++ program", "To define classes", "To create loops"],
      correct: 1,
    },
    {
      question: "How do you output text in C++?",
      options: ["print();", "cout << 'text';", "echo 'text';", "display();"],
      correct: 1,
    },
    {
      question: "What does the '&' operator do?",
      options: ["Logical AND", "Address-of operator (gets memory address)", "Bitwise AND", "Pointer declaration"],
      correct: 1,
    },
  ],
  "cpp-intermediate": [
    {
      question: "What is a class in C++?",
      options: [
        "A teaching session",
        "A blueprint for objects with properties and methods",
        "A loop structure",
        "A type of variable",
      ],
      correct: 1,
    },
    {
      question: "What is inheritance?",
      options: [
        "Passing money to heirs",
        "A class inheriting properties from another class",
        "Copying code",
        "Creating new variables",
      ],
      correct: 1,
    },
    {
      question: "What are access modifiers in C++?",
      options: [
        "Operators for mathematical operations",
        "Keywords that control visibility (public, private, protected)",
        "Function parameters",
        "Data types",
      ],
      correct: 1,
    },
    {
      question: "What is polymorphism?",
      options: [
        "Multiple personalities",
        "Objects of different types responding to the same method call",
        "Creating many classes",
        "Type casting",
      ],
      correct: 1,
    },
    {
      question: "What is a constructor?",
      options: [
        "A function that builds programs",
        "A special method called when an object is created",
        "A preprocessor directive",
        "A type of loop",
      ],
      correct: 1,
    },
  ],
  "cpp-master": [
    {
      question: "What is virtual inheritance?",
      options: [
        "Inheritance that only runs virtually",
        "Prevents multiple copies of a base class in multiple inheritance",
        "Inheritance using pointers",
        "Inheritance without implementation",
      ],
      correct: 1,
    },
    {
      question: "What is RAII in C++?",
      options: [
        "A data structure",
        "Resource Acquisition Is Initialization pattern",
        "A type of pointer",
        "A memory management technique",
      ],
      correct: 1,
    },
    {
      question: "What are templates in C++?",
      options: ["Design layouts", "Generic programming mechanism for code reuse", "HTML elements", "Class inheritance"],
      correct: 1,
    },
    {
      question: "What is the difference between shallow and deep copying in C++?",
      options: [
        "Shallow copies pointers, deep copies actual data",
        "They are the same",
        "Deep is only for classes",
        "Shallow is more efficient",
      ],
      correct: 0,
    },
    {
      question: "What is move semantics in C++11?",
      options: [
        "Moving objects in memory",
        "Efficiently transferring resources from temporary objects",
        "Rearranging code",
        "Deleting objects",
      ],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - JAVA
  "java-beginner": [
    {
      question: "What does 'write once, run anywhere' mean in Java?",
      options: [
        "Java code runs on all platforms",
        "Java is a one-time language",
        "Code written in Java never changes",
        "Java doesn't need compilation",
      ],
      correct: 0,
    },
    {
      question: "What is the Java Virtual Machine (JVM)?",
      options: ["A virtual computer that runs Java bytecode", "A text editor", "A web browser", "A operating system"],
      correct: 0,
    },
    {
      question: "How do you declare a String in Java?",
      options: ["string name;", "String name;", "str name;", "text name;"],
      correct: 1,
    },
    {
      question: "What is the main method signature in Java?",
      options: [
        "public static void main(String[] args)",
        "public void main()",
        "static main(String args)",
        "void main(String[] args)",
      ],
      correct: 0,
    },
    {
      question: "What are Java packages?",
      options: ["Compressed files", "A way to organize classes", "Variables", "Methods"],
      correct: 1,
    },
  ],
  "java-intermediate": [
    {
      question: "What is the purpose of 'this' keyword in Java?",
      options: ["Reference to current object", "Create a new object", "Inherit from class", "Call parent method"],
      correct: 0,
    },
    {
      question: "What is the difference between abstract class and interface?",
      options: [
        "Abstract class can have implementation, interface cannot",
        "They are the same",
        "Interface is faster",
        "Abstract class is newer",
      ],
      correct: 0,
    },
    {
      question: "What is exception handling?",
      options: [
        "Throwing errors at users",
        "Catching and handling runtime errors",
        "Preventing all errors",
        "Logging information",
      ],
      correct: 1,
    },
    {
      question: "What are collections in Java?",
      options: ["Objects to store and manipulate groups of data", "Database tables", "File systems", "Web components"],
      correct: 0,
    },
    {
      question: "What is multithreading?",
      options: [
        "Multiple CPU cores",
        "Running multiple threads concurrently",
        "Creating multiple files",
        "Parallel processing only",
      ],
      correct: 1,
    },
  ],
  "java-master": [
    {
      question: "What is the difference between HashMap and TreeMap?",
      options: [
        "HashMap is unordered, TreeMap is sorted",
        "They are identical",
        "TreeMap is always faster",
        "HashMap stores objects only",
      ],
      correct: 0,
    },
    {
      question: "What are generics in Java?",
      options: ["General purpose classes", "Type-safe collections and methods", "Generic data types", "Basic classes"],
      correct: 1,
    },
    {
      question: "What is the Stream API in Java 8?",
      options: [
        "Streaming video",
        "Functional programming approach to process collections",
        "Input/Output streams",
        "Data streaming library",
      ],
      correct: 1,
    },
    {
      question: "What is lambda expression?",
      options: ["Greek letter", "Anonymous function with concise syntax", "Mathematical formula", "Data type"],
      correct: 1,
    },
    {
      question: "What is the purpose of the 'volatile' keyword?",
      options: [
        "Make code run faster",
        "Ensure variable visibility across threads",
        "Store temporary data",
        "Increase memory",
      ],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - PYTHON
  "python-beginner": [
    {
      question: "How do you print in Python?",
      options: ["echo()", "print()", "console.log()", "printf()"],
      correct: 1,
    },
    { question: "Which keyword defines a function?", options: ["function", "def", "func", "define"], correct: 1 },
    {
      question: "How do you create a comment?",
      options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
      correct: 1,
    },
    { question: "Which data type is mutable?", options: ["tuple", "string", "list", "int"], correct: 2 },
    {
      question: "How do you create a list?",
      options: ["list = {}", "list = []", "list = ()", "list = <>"],
      correct: 1,
    },
  ],
  "python-intermediate": [
    {
      question: "What is a list comprehension?",
      options: ["List method", "Concise way to create lists", "List function", "List type"],
      correct: 1,
    },
    {
      question: "What is a decorator?",
      options: ["Function wrapper", "Decoration pattern", "Class decorator", "Method modifier"],
      correct: 0,
    },
    {
      question: "What is *args used for?",
      options: ["Multiply args", "Variable arguments", "Pointer", "All arguments"],
      correct: 1,
    },
    {
      question: "What is a generator?",
      options: ["Function generator", "Iterator function", "Generator class", "Yield function"],
      correct: 1,
    },
    {
      question: "What is slicing?",
      options: ["Cut strings", "Extract subsequence", "Slice method", "String operation"],
      correct: 1,
    },
  ],
  "python-master": [
    {
      question: "What is the GIL?",
      options: ["Global Interpreter Lock", "General Import Library", "Global Instance Lock", "Generic Interface Layer"],
      correct: 0,
    },
    {
      question: "What are metaclasses?",
      options: ["Super classes", "Classes of classes", "Meta programming", "Class factory"],
      correct: 1,
    },
    {
      question: "What is asyncio?",
      options: ["Async library", "Asynchronous I/O", "Async function", "I/O operations"],
      correct: 1,
    },
    {
      question: "What is a context manager?",
      options: ["Context handler", "Resource management protocol", "Manager class", "Context function"],
      correct: 1,
    },
    {
      question: "What is duck typing?",
      options: ["Type checking", "Dynamic typing", "If it walks like a duck", "Duck class"],
      correct: 2,
    },
  ],

  // C#
  "csharp-beginner": [
    {
      question: "Which namespace contains Console class?",
      options: ["System", "System.IO", "System.Console", "Console"],
      correct: 0,
    },
    {
      question: "How do you print in C#?",
      options: ["print()", "Console.WriteLine()", "System.print()", "echo()"],
      correct: 1,
    },
    { question: "Which keyword creates a class?", options: ["class", "Class", "new", "create"], correct: 0 },
    { question: "What is the entry point method?", options: ["Start()", "Run()", "Main()", "Execute()"], correct: 2 },
    { question: "Which operator is used for string concatenation?", options: ["&", "+", ".", "concat"], correct: 1 },
  ],
  "csharp-intermediate": [
    {
      question: "What is LINQ?",
      options: ["Language Query", "Language Integrated Query", "Link Query", "Linear Query"],
      correct: 1,
    },
    {
      question: "What is an interface?",
      options: ["Abstract class", "Contract", "Base class", "Implementation"],
      correct: 1,
    },
    {
      question: "What is async/await?",
      options: ["Asynchronous pattern", "Async method", "Await keyword", "Threading"],
      correct: 0,
    },
    {
      question: "What is a delegate?",
      options: ["Function pointer", "Type-safe function pointer", "Method reference", "Event handler"],
      correct: 1,
    },
    {
      question: "What is a lambda expression?",
      options: ["Anonymous function", "Arrow function", "Lambda keyword", "Expression tree"],
      correct: 0,
    },
  ],
  "csharp-master": [
    {
      question: "What is reflection?",
      options: ["Mirror type", "Runtime type inspection", "Reflection class", "Type checking"],
      correct: 1,
    },
    {
      question: "What is dependency injection?",
      options: ["Code injection", "Design pattern", "Framework feature", "Library"],
      correct: 1,
    },
    {
      question: "What is the difference between Task and Thread?",
      options: ["Task is higher level", "Thread is better", "Same thing", "Task is async"],
      correct: 0,
    },
    {
      question: "What are expression trees?",
      options: ["Tree structure", "Code as data", "Expression type", "Lambda trees"],
      correct: 1,
    },
    {
      question: "What is IDisposable?",
      options: ["Dispose pattern", "Resource cleanup interface", "Garbage collection", "Memory management"],
      correct: 1,
    },
  ],

  // REACT
  "react-beginner": [
    {
      question: "What is React?",
      options: ["Framework", "JavaScript library", "Programming language", "Database"],
      correct: 1,
    },
    {
      question: "What is JSX?",
      options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
      correct: 0,
    },
    {
      question: "Which method creates a component?",
      options: ["React.createComponent()", "function Component()", "new Component()", "Component.create()"],
      correct: 1,
    },
    { question: "What is a prop?", options: ["Property", "Function", "State", "Event"], correct: 0 },
    {
      question: "How do you handle events?",
      options: ["onClick={handleClick}", "onclick='handleClick()'", "onClick='handleClick'", "onEvent={click}"],
      correct: 0,
    },
  ],
  "react-intermediate": [
    {
      question: "What is useState?",
      options: ["State hook", "State function", "State class", "State method"],
      correct: 0,
    },
    {
      question: "What is useEffect?",
      options: ["Effect hook", "Side effect handler", "Event handler", "Effect function"],
      correct: 0,
    },
    {
      question: "What is the virtual DOM?",
      options: ["Virtual document", "In-memory representation", "DOM copy", "Shadow DOM"],
      correct: 1,
    },
    {
      question: "What is lifting state up?",
      options: ["Move state higher", "Share state", "Pass state", "All of the above"],
      correct: 3,
    },
    {
      question: "What is controlled component?",
      options: ["Form component", "React-controlled input", "Controlled state", "Component control"],
      correct: 1,
    },
  ],
  "react-master": [
    {
      question: "What is React Fiber?",
      options: ["Fiber library", "Reconciliation engine", "React core", "Virtual DOM"],
      correct: 1,
    },
    {
      question: "What is code splitting?",
      options: ["Split code", "Lazy loading", "Bundle optimization", "All of the above"],
      correct: 3,
    },
    {
      question: "What is useReducer?",
      options: ["Reducer hook", "State management", "Redux alternative", "Complex state"],
      correct: 0,
    },
    {
      question: "What is React.memo?",
      options: ["Memoization", "Performance optimization", "Component cache", "Pure component"],
      correct: 1,
    },
    {
      question: "What is Suspense?",
      options: ["Loading state", "Async component handler", "Suspense API", "Error boundary"],
      correct: 1,
    },
  ],
  // TECHNICAL SKILLS - HTML
  "html-beginner": [
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1,
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correct: 0,
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<head>", "<header>"],
      correct: 1,
    },
    {
      question: "What is the correct HTML element for inserting an image?",
      options: ["<img>", "<image>", "<pic>", "<picture>"],
      correct: 0,
    },
    {
      question: "Which attribute is used to specify an alternative text for an image?",
      options: ["alt", "title", "text", "description"],
      correct: 0,
    },
  ],
  "html-intermediate": [
    {
      question: "What is the semantic HTML tag for a header section?",
      options: ["<top>", "<header>", "<head>", "<section>"],
      correct: 1,
    },
    {
      question: "Which HTML5 element is used for independent content?",
      options: ["<section>", "<article>", "<div>", "<container>"],
      correct: 1,
    },
    {
      question: "What does the <form> tag's method attribute do?",
      options: [
        "Specifies how form data is sent",
        "Defines form styling",
        "Sets form validation",
        "Creates form structure",
      ],
      correct: 0,
    },
    {
      question: "Which input type is used for selecting a date?",
      options: ["date", "calendar", "datetime", "day"],
      correct: 0,
    },
    {
      question: "What is the purpose of the <canvas> element?",
      options: ["Drawing graphics via JavaScript", "Displaying videos", "Creating forms", "Inserting images"],
      correct: 0,
    },
  ],
  "html-master": [
    {
      question: "What is the difference between <section> and <article> tags?",
      options: [
        "<article> is for independent content, <section> is for related content",
        "They are identical",
        "<section> is semantic, <article> is not",
        "<article> is for videos only",
      ],
      correct: 0,
    },
    {
      question: "Which accessibility attribute is most important for screen readers?",
      options: ["href", "aria-label", "class", "id"],
      correct: 1,
    },
    {
      question: "What is the correct way to embed a video in HTML5?",
      options: ["<video src='...'>", "<embed video>", "<video> with <source>", "<media>"],
      correct: 2,
    },
    {
      question: "What does the data-* attribute allow in HTML5?",
      options: ["Storing custom data on elements", "Setting CSS properties", "Creating animations", "Form validation"],
      correct: 0,
    },
    {
      question: "Which microdata vocabulary is most commonly used?",
      options: ["OpenGraph", "Schema.org", "Microformat", "Dublin Core"],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - CSS
  "css-beginner": [
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Colorful Style System"],
      correct: 1,
    },
    {
      question: "How do you select an element with the id 'main' in CSS?",
      options: [".main", "#main", "main", "@main"],
      correct: 1,
    },
    {
      question: "What is the correct syntax for adding a background color?",
      options: ["bgcolor: red;", "background-color: red;", "bg-color: red;", "color-bg: red;"],
      correct: 1,
    },
    {
      question: "How do you make text bold in CSS?",
      options: ["text-style: bold;", "font-weight: bold;", "bold: true;", "text-bold: yes;"],
      correct: 1,
    },
    {
      question: "What does the box model consist of?",
      options: [
        "Border and outline",
        "Margin, border, padding, and content",
        "Color and size",
        "Width and height only",
      ],
      correct: 1,
    },
  ],
  "css-intermediate": [
    {
      question: "What is the difference between 'display: flex' and 'display: grid'?",
      options: ["Flex is 1D, Grid is 2D", "Grid is older than Flex", "They are the same", "Flex is for images only"],
      correct: 0,
    },
    {
      question: "How do you create a CSS animation?",
      options: ["Using @animate", "Using @keyframes", "Using animation-rule", "Using motion"],
      correct: 1,
    },
    {
      question: "What is the purpose of 'position: absolute'?",
      options: [
        "Remove element from document flow and position relative to parent",
        "Fix element to viewport",
        "Make element relative to viewport",
        "Center an element",
      ],
      correct: 0,
    },
    {
      question: "What does 'z-index' property do?",
      options: [
        "Controls stacking order of elements",
        "Sets zoom level",
        "Increases font size",
        "Controls animation speed",
      ],
      correct: 0,
    },
    {
      question: "Which CSS property is used for rounded corners?",
      options: ["corner-radius", "border-radius", "radius", "round"],
      correct: 1,
    },
  ],
  "css-master": [
    {
      question: "What is the difference between 'em' and 'rem' units?",
      options: [
        "em is relative to parent, rem is relative to root",
        "They are identical",
        "em is larger",
        "rem is for mobile only",
      ],
      correct: 0,
    },
    {
      question: "What does CSS specificity determine?",
      options: [
        "How fast CSS loads",
        "Which styles are applied when there are conflicts",
        "The size of CSS file",
        "Browser compatibility",
      ],
      correct: 1,
    },
    {
      question: "What is the purpose of CSS custom properties (variables)?",
      options: [
        "Make CSS files smaller",
        "Store and reuse values throughout CSS",
        "Speed up rendering",
        "Improve browser compatibility",
      ],
      correct: 1,
    },
    {
      question: "How do you optimize CSS for performance?",
      options: [
        "Use more selectors",
        "Minify, use critical CSS, avoid @import",
        "Use inline styles",
        "Increase specificity",
      ],
      correct: 1,
    },
    {
      question: "What is the CSS Grid 'fr' unit used for?",
      options: ["Frame size", "Fractional unit for flexible sizing", "Frequency", "Font ratio"],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - JAVASCRIPT
  "javascript-beginner": [
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["variable x = 5;", "var x = 5;", "v x = 5;", "declare x = 5;"],
      correct: 1,
    },
    {
      question: "Which operator is used for comparison?",
      options: ["=", "==", "===", "Both == and ==="],
      correct: 3,
    },
    {
      question: "How do you write an if statement?",
      options: ["if x > 5:", "if (x > 5) { }", "if x > 5 { }", "ifx > 5"],
      correct: 1,
    },
    {
      question: "What is a function?",
      options: ["A variable", "A reusable block of code", "A loop", "A comment"],
      correct: 1,
    },
    {
      question: "How do you access the first element of an array?",
      options: ["array[1]", "array[0]", "array.first", "array.get(0)"],
      correct: 1,
    },
  ],
  "javascript-intermediate": [
    {
      question: "What does the 'this' keyword refer to?",
      options: ["The previous object", "The current object context", "The global object always", "A reference to null"],
      correct: 1,
    },
    {
      question: "What is a callback function?",
      options: [
        "A function that calls itself",
        "A function passed to another function",
        "A function that returns a value",
        "A function with no parameters",
      ],
      correct: 1,
    },
    {
      question: "How do you handle asynchronous operations in JavaScript?",
      options: ["Using callbacks", "Using Promises", "Using async/await", "All of the above"],
      correct: 3,
    },
    {
      question: "What is the difference between 'let' and 'const'?",
      options: [
        "let is for variables, const is for functions",
        "let can be reassigned, const cannot",
        "They are identical",
        "const is faster",
      ],
      correct: 1,
    },
    {
      question: "What does the spread operator (...) do?",
      options: [
        "Spreads code over multiple lines",
        "Expands arrays/objects into individual elements",
        "Creates a new array",
        "Combines two arrays",
      ],
      correct: 1,
    },
  ],
  "javascript-master": [
    {
      question: "What is closure in JavaScript?",
      options: [
        "A function that closes the program",
        "A function having access to variables from its outer scope",
        "A method to end loops",
        "An error state",
      ],
      correct: 1,
    },
    {
      question: "What is the difference between shallow copy and deep copy?",
      options: [
        "Shallow copies only the first level, deep copies all levels",
        "They are the same",
        "Deep copy is slower",
        "Shallow copy is for arrays only",
      ],
      correct: 0,
    },
    {
      question: "What is the event loop in JavaScript?",
      options: [
        "A loop in event handlers",
        "The mechanism that handles async code execution",
        "A performance optimization",
        "A way to prevent memory leaks",
      ],
      correct: 1,
    },
    {
      question: "What are Promises used for?",
      options: [
        "Storing data",
        "Handling asynchronous operations with eventual completion",
        "Improving performance",
        "Error checking",
      ],
      correct: 1,
    },
    {
      question: "What is the difference between == and ===?",
      options: [
        "No difference",
        "== does type coercion, === does strict comparison",
        "=== is faster",
        "== is more reliable",
      ],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - C++
  "cpp-beginner": [
    {
      question: "What is C++?",
      options: ["A markup language", "An object-oriented programming language", "A database", "A design pattern"],
      correct: 1,
    },
    {
      question: "How do you declare an integer variable in C++?",
      options: ["int x;", "integer x;", "var x;", "number x;"],
      correct: 0,
    },
    {
      question: "What is the purpose of the 'main' function?",
      options: ["To store data", "The entry point of a C++ program", "To define classes", "To create loops"],
      correct: 1,
    },
    {
      question: "How do you output text in C++?",
      options: ["print();", "cout << 'text';", "echo 'text';", "display();"],
      correct: 1,
    },
    {
      question: "What does the '&' operator do?",
      options: ["Logical AND", "Address-of operator (gets memory address)", "Bitwise AND", "Pointer declaration"],
      correct: 1,
    },
  ],
  "cpp-intermediate": [
    {
      question: "What is a class in C++?",
      options: [
        "A teaching session",
        "A blueprint for objects with properties and methods",
        "A loop structure",
        "A type of variable",
      ],
      correct: 1,
    },
    {
      question: "What is inheritance?",
      options: [
        "Passing money to heirs",
        "A class inheriting properties from another class",
        "Copying code",
        "Creating new variables",
      ],
      correct: 1,
    },
    {
      question: "What are access modifiers in C++?",
      options: [
        "Operators for mathematical operations",
        "Keywords that control visibility (public, private, protected)",
        "Function parameters",
        "Data types",
      ],
      correct: 1,
    },
    {
      question: "What is polymorphism?",
      options: [
        "Multiple personalities",
        "Objects of different types responding to the same method call",
        "Creating many classes",
        "Type casting",
      ],
      correct: 1,
    },
    {
      question: "What is a constructor?",
      options: [
        "A function that builds programs",
        "A special method called when an object is created",
        "A preprocessor directive",
        "A type of loop",
      ],
      correct: 1,
    },
  ],
  "cpp-master": [
    {
      question: "What is virtual inheritance?",
      options: [
        "Inheritance that only runs virtually",
        "Prevents multiple copies of a base class in multiple inheritance",
        "Inheritance using pointers",
        "Inheritance without implementation",
      ],
      correct: 1,
    },
    {
      question: "What is RAII in C++?",
      options: [
        "A data structure",
        "Resource Acquisition Is Initialization pattern",
        "A type of pointer",
        "A memory management technique",
      ],
      correct: 1,
    },
    {
      question: "What are templates in C++?",
      options: ["Design layouts", "Generic programming mechanism for code reuse", "HTML elements", "Class inheritance"],
      correct: 1,
    },
    {
      question: "What is the difference between shallow and deep copying in C++?",
      options: [
        "Shallow copies pointers, deep copies actual data",
        "They are the same",
        "Deep is only for classes",
        "Shallow is more efficient",
      ],
      correct: 0,
    },
    {
      question: "What is move semantics in C++11?",
      options: [
        "Moving objects in memory",
        "Efficiently transferring resources from temporary objects",
        "Rearranging code",
        "Deleting objects",
      ],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - JAVA
  "java-beginner": [
    {
      question: "What does 'write once, run anywhere' mean in Java?",
      options: [
        "Java code runs on all platforms",
        "Java is a one-time language",
        "Code written in Java never changes",
        "Java doesn't need compilation",
      ],
      correct: 0,
    },
    {
      question: "What is the Java Virtual Machine (JVM)?",
      options: ["A virtual computer that runs Java bytecode", "A text editor", "A web browser", "A operating system"],
      correct: 0,
    },
    {
      question: "How do you declare a String in Java?",
      options: ["string name;", "String name;", "str name;", "text name;"],
      correct: 1,
    },
    {
      question: "What is the main method signature in Java?",
      options: [
        "public static void main(String[] args)",
        "public void main()",
        "static main(String args)",
        "void main(String[] args)",
      ],
      correct: 0,
    },
    {
      question: "What are Java packages?",
      options: ["Compressed files", "A way to organize classes", "Variables", "Methods"],
      correct: 1,
    },
  ],
  "java-intermediate": [
    {
      question: "What is the purpose of 'this' keyword in Java?",
      options: ["Reference to current object", "Create a new object", "Inherit from class", "Call parent method"],
      correct: 0,
    },
    {
      question: "What is the difference between abstract class and interface?",
      options: [
        "Abstract class can have implementation, interface cannot",
        "They are the same",
        "Interface is faster",
        "Abstract class is newer",
      ],
      correct: 0,
    },
    {
      question: "What is exception handling?",
      options: [
        "Throwing errors at users",
        "Catching and handling runtime errors",
        "Preventing all errors",
        "Logging information",
      ],
      correct: 1,
    },
    {
      question: "What are collections in Java?",
      options: ["Objects to store and manipulate groups of data", "Database tables", "File systems", "Web components"],
      correct: 0,
    },
    {
      question: "What is multithreading?",
      options: [
        "Multiple CPU cores",
        "Running multiple threads concurrently",
        "Creating multiple files",
        "Parallel processing only",
      ],
      correct: 1,
    },
  ],
  "java-master": [
    {
      question: "What is the difference between HashMap and TreeMap?",
      options: [
        "HashMap is unordered, TreeMap is sorted",
        "They are identical",
        "TreeMap is always faster",
        "HashMap stores objects only",
      ],
      correct: 0,
    },
    {
      question: "What are generics in Java?",
      options: ["General purpose classes", "Type-safe collections and methods", "Generic data types", "Basic classes"],
      correct: 1,
    },
    {
      question: "What is the Stream API in Java 8?",
      options: [
        "Streaming video",
        "Functional programming approach to process collections",
        "Input/Output streams",
        "Data streaming library",
      ],
      correct: 1,
    },
    {
      question: "What is lambda expression?",
      options: ["Greek letter", "Anonymous function with concise syntax", "Mathematical formula", "Data type"],
      correct: 1,
    },
    {
      question: "What is the purpose of the 'volatile' keyword?",
      options: [
        "Make code run faster",
        "Ensure variable visibility across threads",
        "Store temporary data",
        "Increase memory",
      ],
      correct: 1,
    },
  ],

  // TECHNICAL SKILLS - PYTHON
  "python-beginner": [
    {
      question: "How do you print in Python?",
      options: ["echo()", "print()", "console.log()", "printf()"],
      correct: 1,
    },
    { question: "Which keyword defines a function?", options: ["function", "def", "func", "define"], correct: 1 },
    {
      question: "How do you create a comment?",
      options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
      correct: 1,
    },
    { question: "Which data type is mutable?", options: ["tuple", "string", "list", "int"], correct: 2 },
    {
      question: "How do you create a list?",
      options: ["list = {}", "list = []", "list = ()", "list = <>"],
      correct: 1,
    },
  ],
  "python-intermediate": [
    {
      question: "What is a list comprehension?",
      options: ["List method", "Concise way to create lists", "List function", "List type"],
      correct: 1,
    },
    {
      question: "What is a decorator?",
      options: ["Function wrapper", "Decoration pattern", "Class decorator", "Method modifier"],
      correct: 0,
    },
    {
      question: "What is *args used for?",
      options: ["Multiply args", "Variable arguments", "Pointer", "All arguments"],
      correct: 1,
    },
    {
      question: "What is a generator?",
      options: ["Function generator", "Iterator function", "Generator class", "Yield function"],
      correct: 1,
    },
    {
      question: "What is slicing?",
      options: ["Cut strings", "Extract subsequence", "Slice method", "String operation"],
      correct: 1,
    },
  ],
  "python-master": [
    {
      question: "What is the GIL?",
      options: ["Global Interpreter Lock", "General Import Library", "Global Instance Lock", "Generic Interface Layer"],
      correct: 0,
    },
    {
      question: "What are metaclasses?",
      options: ["Super classes", "Classes of classes", "Meta programming", "Class factory"],
      correct: 1,
    },
    {
      question: "What is asyncio?",
      options: ["Async library", "Asynchronous I/O", "Async function", "I/O operations"],
      correct: 1,
    },
    {
      question: "What is a context manager?",
      options: ["Context handler", "Resource management protocol", "Manager class", "Context function"],
      correct: 1,
    },
    {
      question: "What is duck typing?",
      options: ["Type checking", "Dynamic typing", "If it walks like a duck", "Duck class"],
      correct: 2,
    },
  ],
}

function CertificateExamClient({ courseId }: { courseId: string }) {
  const router = useRouter()
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState("")
  const [answers, setAnswers] = useState<number[]>([])
  const [resultDetails, setResultDetails] = useState<{
    percentage: number
    passed: boolean
    totalQuestions: number
  } | null>(null)

  useEffect(() => {
    async function getUser() {
      const supabase = createBrowserClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/auth/signin")
        return
      }

      setUserId(user.id)
      const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle()

      setUserName(profile?.full_name || user.email?.split("@")[0] || "Student")
    }

    getUser()
  }, [router])

  console.log("[v0] Exam page loaded for course:", courseId)
  console.log("[v0] Available exam questions:", Object.keys(examQuestions))

  const questions = examQuestions[courseId]

  if (!questions) {
    console.error("[v0] No exam questions found for course:", courseId)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Exam Not Available</h1>
          <p className="text-muted-foreground">No exam questions found for course: {courseId}</p>
          <Link href="/certificates" className="text-primary underline mt-4 block">
            Back to Certificates
          </Link>
        </div>
      </div>
    )
  }

  const passingScore = Math.ceil(questions.length * 0.8)

  const handleStartExam = () => {
    setStarted(true)
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setScore(0)
    setShowResult(false)
    setAnswers([]) // Reset answers when starting a new exam
  }

  const handleAnswerSubmit = async () => {
    if (selectedAnswer === "") {
      alert("Please select an answer before submitting.")
      return
    }

    const correct = questions[currentQuestion].correct === Number.parseInt(selectedAnswer)
    const newScore = correct ? score + 1 : score

    setScore(newScore)
    setAnswers([...answers, Number.parseInt(selectedAnswer)])

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      setShowResult(true)

      const percentage = Math.round((newScore / questions.length) * 100)
      const passed = newScore >= passingScore

      setResultDetails({
        percentage,
        passed,
        totalQuestions: questions.length,
      })

      if (passed) {
        try {
          const supabase = createBrowserClient()
          const {
            data: { user },
          } = await supabase.auth.getUser()

          if (!user) {
            alert("Authentication error. Please sign in again.")
            return
          }

          // Redirect after a short delay to show the results
          setTimeout(() => {
            router.push(`/certificates/${courseId}?justPassed=true&score=${percentage}`)
          }, 2000)

          // Try to save to database in the background
          fetch("/api/save-exam", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: user.id,
              courseId: courseId,
              courseName: courseId, // Assuming courseId is descriptive enough for courseName
              score: percentage,
              passed: true,
            }),
          }).catch((err) => console.error("[v0] Background save failed:", err))
        } catch (error) {
          console.error("[v0] Error in exam submission:", error)
          setTimeout(() => {
            router.push(`/certificates/${courseId}?justPassed=true&score=${percentage}`)
          }, 2000)
        }
      }
    }
  }

  const percentage = resultDetails ? resultDetails.percentage : (score / questions.length) * 100
  const passed = resultDetails ? resultDetails.passed : score >= passingScore
  const totalQuestions = resultDetails ? resultDetails.totalQuestions : questions.length

  if (!started && !showResult) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/certificates">
            <Button variant="outline" className="mb-6 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Certificates
            </Button>
          </Link>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Certification Exam</CardTitle>
                  <CardDescription>Test your knowledge to earn your certificate</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  You need to score at least {passingScore}/{questions.length} (
                  {Math.round((passingScore / questions.length) * 100)}%) to pass and earn your certificate.
                </AlertDescription>
              </Alert>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Total Questions</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {Math.round((passingScore / questions.length) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Passing Score</div>
                </div>
              </div>

              <Button onClick={handleStartExam} className="w-full" size="lg">
                <Award className="mr-2 h-5 w-5" />
                Start Exam
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  if (showResult && resultDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Navigation />
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link href="/certificates" className="inline-flex mb-6">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Certificates
            </Button>
          </Link>

          {/* Main Results Container */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Left: Results Summary */}
            <div className="lg:col-span-2">
              {/* Header Card with Status */}
              <Card
                className={`mb-6 border-2 ${resultDetails.passed ? "border-green-500 bg-gradient-to-br from-green-50 to-background" : "border-red-500 bg-gradient-to-br from-red-50 to-background"}`}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${resultDetails.passed ? "bg-green-100" : "bg-red-100"}`}
                    >
                      {resultDetails.passed ? (
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      ) : (
                        <XCircle className="h-8 w-8 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h2
                        className={`text-3xl font-bold mb-2 ${resultDetails.passed ? "text-green-600" : "text-red-600"}`}
                      >
                        {resultDetails.passed ? "Congratulations!" : "Not Passed"}
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        {resultDetails.passed
                          ? "You've successfully passed the certification exam!"
                          : "You didn't reach the passing score this time."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Score Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Your Score */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Your Score</p>
                      <div className="text-4xl font-bold text-primary mb-2">{resultDetails.percentage}%</div>
                      <p className="text-xs text-muted-foreground">
                        {score}/{resultDetails.totalQuestions} correct
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Required Score */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Required Score</p>
                      <div className="text-4xl font-bold text-secondary mb-2">
                        {Math.round((passingScore / resultDetails.totalQuestions) * 100)}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {passingScore}/{resultDetails.totalQuestions} answers
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Difference */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        {resultDetails.passed ? "Above Required" : "Below Required"}
                      </p>
                      <div
                        className={`text-4xl font-bold mb-2 ${resultDetails.passed ? "text-green-600" : "text-red-600"}`}
                      >
                        {Math.abs(
                          resultDetails.percentage - Math.round((passingScore / resultDetails.totalQuestions) * 100),
                        )}
                        %
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {resultDetails.passed ? "Points ahead" : "Points behind"}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Questions Answered */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Total Questions</p>
                      <div className="text-4xl font-bold text-foreground mb-2">{resultDetails.totalQuestions}</div>
                      <p className="text-xs text-muted-foreground">Full exam</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Bar */}
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Overall Performance</span>
                      <span className="text-2xl font-bold text-primary">{resultDetails.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${resultDetails.passed ? "bg-gradient-to-r from-green-500 to-green-400" : "bg-gradient-to-r from-red-500 to-red-400"}`}
                        style={{ width: `${Math.min(resultDetails.percentage, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {resultDetails.passed
                        ? `Excellent! You scored ${resultDetails.percentage - Math.round((passingScore / resultDetails.totalQuestions) * 100)} points above the passing threshold.`
                        : `You need ${Math.round((passingScore / resultDetails.totalQuestions) * 100) - resultDetails.percentage} more points to pass. Try again!`}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Message */}
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Feedback</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {resultDetails.passed
                        ? "Congratulations on passing! Your certificate has been generated and is ready for download. You can now share your achievement with others or take another certification exam."
                        : "Don't give up! Review the course material and try again. Each attempt helps you better understand the concepts. You're making progress toward mastery!"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Action Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Status Badge */}
                <div
                  className={`p-4 rounded-lg text-center border-2 ${resultDetails.passed ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                >
                  <div className={`text-sm font-semibold ${resultDetails.passed ? "text-green-700" : "text-red-700"}`}>
                    Exam Status
                  </div>
                  <div
                    className={`text-2xl font-bold mt-2 ${resultDetails.passed ? "text-green-600" : "text-red-600"}`}
                  >
                    {resultDetails.passed ? "PASSED" : "FAILED"}
                  </div>
                </div>

                {/* Primary Action */}
                <Button
                  onClick={() => {
                    router.push(`/certificates/${courseId}`)
                  }}
                  className="w-full h-12"
                  size="lg"
                  disabled={!resultDetails.passed}
                >
                  <Award className="mr-2 h-5 w-5" />
                  {resultDetails.passed ? "View Certificate" : "Retake Exam"}
                </Button>

                {/* Secondary Action - Retake */}
                {resultDetails.passed && (
                  <Button onClick={handleStartExam} variant="outline" className="w-full h-12 bg-transparent" size="lg">
                    Retake Exam
                  </Button>
                )}

                {!resultDetails.passed && (
                  <Button onClick={handleStartExam} className="w-full h-12" size="lg">
                    Try Again
                  </Button>
                )}

                {/* Back Button */}
                <Button onClick={() => router.push("/certificates")} variant="ghost" className="w-full">
                  Back to All Certificates
                </Button>

                {/* Info Box */}
                <div className="p-4 bg-muted rounded-lg space-y-2 text-sm">
                  <h4 className="font-semibold text-foreground">Quick Info</h4>
                  <div className="space-y-2 text-muted-foreground text-xs">
                    <p>✓ Exam Duration: Unlimited</p>
                    <p>✓ Passing Grade: {Math.round((passingScore / resultDetails.totalQuestions) * 100)}%</p>
                    <p>✓ Questions: {resultDetails.totalQuestions}</p>
                    {resultDetails.passed && <p>✓ Certificate Ready</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <CardTitle>Certification Exam</CardTitle>
                <span className="text-sm font-medium bg-primary text-white px-3 py-1 rounded-full">
                  Question {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <Progress value={progress} />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  {currentQuestion + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-4">{questions[currentQuestion].question}</h3>

                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-secondary/5 cursor-pointer transition-colors"
                        >
                          <RadioGroupItem value={idx.toString()} id={`option-${idx}`} className="mt-1" />
                          <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Current Score: {score}/{currentQuestion}
              </div>
              <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer} size="lg">
                {currentQuestion < questions.length - 1 ? "Next Question" : "Submit Exam"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default async function CertificateExamPage({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params
  return <CertificateExamClient courseId={course} />
}
