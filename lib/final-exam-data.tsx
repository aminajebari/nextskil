export interface FinalExamQuestion {
  question: string
  options: string[]
  correct: number
  code?: string
}

export const finalExamQuestions: FinalExamQuestion[] = [
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
    question: "Which HTML tag is used to define the title of a document?",
    options: ["<head>", "<title>", "<meta>", "<header>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: 2,
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["*", "/", "^", "<"],
    correct: 1,
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a url='http://example.com'>Link</a>",
      "<a href='http://example.com'>Link</a>",
      "<a>http://example.com</a>",
      "<link>http://example.com</link>",
    ],
    correct: 1,
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["title", "alt", "src", "longdesc"],
    correct: 1,
  },
  {
    question: "What is the correct HTML for inserting an image?",
    options: [
      "<img href='image.jpg'>",
      "<image src='image.jpg'>",
      "<img src='image.jpg'>",
      "<img>image.jpg</img>",
    ],
    correct: 2,
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<div>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correct: 2,
  },
  {
    question: "Which HTML element defines navigation links?",
    options: ["<navigation>", "<navigate>", "<nav>", "<links>"],
    correct: 2,
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: [
      "<input type='checkbox'>",
      "<check>",
      "<checkbox>",
      "<input type='check'>",
    ],
    correct: 0,
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<important>", "<b>", "<strong>", "<i>"],
    correct: 2,
  },
  {
    question: "What is the correct HTML for making a text input field?",
    options: [
      "<input type='textfield'>",
      "<textfield>",
      "<input type='text'>",
      "<textinput>",
    ],
    correct: 2,
  },
  {
    question: "Which HTML element defines the main content of a document?",
    options: ["<content>", "<main>", "<article>", "<body>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML element for playing video files?",
    options: ["<movie>", "<media>", "<video>", "<film>"],
    correct: 2,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "styles", "style", "font"],
    correct: 2,
  },
  {
    question: "What is the correct HTML for creating a drop-down list?",
    options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"],
    correct: 2,
  },
  {
    question: "Which HTML element is used to define emphasized text?",
    options: ["<italic>", "<i>", "<em>", "<emphasize>"],
    correct: 2,
  },
  {
    question: "What is the correct HTML for inserting a background image?",
    options: [
      "<body bg='image.jpg'>",
      "<body style='background-image:url(image.jpg)'>",
      "<background>image.jpg</background>",
      "<body background='image.jpg'>",
    ],
    correct: 1,
  },
  {
    question: "Which HTML element is used to define a table?",
    options: ["<tab>", "<table>", "<tbl>", "<grid>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML for making a text area?",
    options: ["<input type='textarea'>", "<textarea>", "<textbox>", "<input type='textbox'>"],
    correct: 1,
  },
  {
    question: "Which HTML element defines a section in a document?",
    options: ["<section>", "<div>", "<article>", "<segment>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML element for playing audio files?",
    options: ["<audio>", "<sound>", "<mp3>", "<music>"],
    correct: 0,
  },
  {
    question: "Which input type defines a slider control?",
    options: ["slider", "range", "control", "slide"],
    correct: 1,
  },
  {
    question: "What is the correct HTML for making a numbered list?",
    options: ["<ul>", "<ol>", "<list>", "<nl>"],
    correct: 1,
  },
  {
    question: "Which HTML attribute specifies a unique id for an element?",
    options: ["class", "id", "name", "key"],
    correct: 1,
  },
  {
    question: "What is the correct HTML for making a bullet list?",
    options: ["<ol>", "<list>", "<ul>", "<dl>"],
    correct: 2,
  },
  {
    question: "Which HTML element is used to define a table row?",
    options: ["<tr>", "<row>", "<td>", "<table-row>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML for adding a comment?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "' This is a comment",
    ],
    correct: 1,
  },
  {
    question: "Which HTML element defines a table header?",
    options: ["<th>", "<thead>", "<header>", "<td>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML for a form submit button?",
    options: [
      "<button type='submit'>",
      "<input type='submit'>",
      "<submit>",
      "Both A and B are correct",
    ],
    correct: 3,
  },
  {
    question: "Which HTML element is used for self-contained content?",
    options: ["<section>", "<article>", "<div>", "<aside>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML element for defining keyboard input?",
    options: ["<keyboard>", "<kbd>", "<key>", "<input>"],
    correct: 1,
  },
  {
    question: "Which HTML attribute is used to open a link in a new tab?",
    options: ["target='_new'", "target='_blank'", "new='true'", "tab='new'"],
    correct: 1,
  },
  {
    question: "What is the correct HTML element for defining a progress bar?",
    options: ["<bar>", "<progress>", "<meter>", "<loading>"],
    correct: 1,
  },
  {
    question: "Which HTML element defines preformatted text?",
    options: ["<pre>", "<format>", "<code>", "<text>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML for creating an email link?",
    options: [
      "<a href='mailto:email@example.com'>",
      "<mail>email@example.com</mail>",
      "<a mail='email@example.com'>",
      "<email>email@example.com</email>",
    ],
    correct: 0,
  },
  {
    question: "Which HTML element is used to define a table cell?",
    options: ["<cell>", "<tc>", "<td>", "<data>"],
    correct: 2,
  },
  {
    question: "What is the correct HTML for defining metadata about an HTML document?",
    options: ["<metadata>", "<meta>", "<info>", "<data>"],
    correct: 1,
  },
  {
    question: "Which HTML element specifies multiple media resources?",
    options: ["<media>", "<src>", "<source>", "<resource>"],
    correct: 2,
  },
  {
    question: "What is the correct HTML element for defining sample output from a computer program?",
    options: ["<output>", "<samp>", "<code>", "<sample>"],
    correct: 1,
  },
  {
    question: "Which HTML element is used to define a caption for a table?",
    options: ["<caption>", "<title>", "<header>", "<label>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML for defining a definition list?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    correct: 2,
  },
  {
    question: "Which HTML element defines a thematic break in an HTML page?",
    options: ["<break>", "<hr>", "<line>", "<separator>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML for defining subscript text?",
    options: ["<subscript>", "<sub>", "<down>", "<lower>"],
    correct: 1,
  },
  {
    question: "Which HTML element is used to group body content in a table?",
    options: ["<tbody>", "<body>", "<table-body>", "<content>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML element for defining a field set?",
    options: ["<form>", "<set>", "<fieldset>", "<group>"],
    correct: 2,
  },
  {
    question: "Which HTML element defines computer code?",
    options: ["<code>", "<pre>", "<script>", "<program>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML for defining superscript text?",
    options: ["<superscript>", "<sup>", "<upper>", "<high>"],
    correct: 1,
  },
  {
    question: "Which HTML element is used to specify a date/time?",
    options: ["<date>", "<datetime>", "<time>", "<timestamp>"],
    correct: 2,
  },
]
