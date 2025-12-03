export interface ExampleQuestion {
  question: string
  options: string[]
  correctAnswer: string
  category: string
  code?: string
}

export const exampleExamQuestions: ExampleQuestion[] = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language",
    category: "HTML Basics"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    correctAnswer: "<style>",
    category: "HTML Styling"
  },
  {
    question: "Which is the correct HTML element for the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    correctAnswer: "<h1>",
    category: "HTML Elements"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      '<a href="http://example.com">Example</a>',
      '<a url="http://example.com">Example</a>',
      '<a link="http://example.com">Example</a>',
      '<link href="http://example.com">Example</link>'
    ],
    correctAnswer: '<a href="http://example.com">Example</a>',
    category: "HTML Links"
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ol>", "<ul>", "<dl>", "<list>"],
    correctAnswer: "<ol>",
    category: "HTML Lists"
  },
  {
    question: "What is the correct HTML for making a text input field?",
    options: [
      '<input type="text">',
      '<textfield>',
      '<input type="textfield">',
      '<textinput type="text">'
    ],
    correctAnswer: '<input type="text">',
    category: "HTML Forms"
  },
  {
    question: "Which HTML tag is used to define an image?",
    options: ["<img>", "<image>", "<picture>", "<src>"],
    correctAnswer: "<img>",
    category: "HTML Media"
  },
  {
    question: "What is the correct HTML for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    correctAnswer: "<br>",
    category: "HTML Elements"
  },
  {
    question: "Which attribute is used to specify an alternate text for an image?",
    options: ["alt", "title", "src", "longdesc"],
    correctAnswer: "alt",
    category: "HTML Attributes"
  },
  {
    question: "What is the correct HTML element for playing video files?",
    options: ["<video>", "<movie>", "<media>", "<film>"],
    correctAnswer: "<video>",
    category: "HTML5 Media"
  },
  {
    question: "Which HTML attribute specifies that an input field must be filled out?",
    options: ["required", "placeholder", "validate", "mandatory"],
    correctAnswer: "required",
    category: "HTML5 Forms"
  },
  {
    question: "What is the purpose of the <head> element?",
    options: [
      "Contains metadata about the HTML document",
      "Defines the main heading",
      "Creates a header section",
      "Links external resources only"
    ],
    correctAnswer: "Contains metadata about the HTML document",
    category: "HTML Structure"
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<title>", "<head>", "<meta>", "<header>"],
    correctAnswer: "<title>",
    category: "HTML Metadata"
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: [
      '<input type="checkbox">',
      '<input type="check">',
      '<checkbox>',
      '<check>'
    ],
    correctAnswer: '<input type="checkbox">',
    category: "HTML Forms"
  },
  {
    question: "Which HTML element is used to specify a footer for a document?",
    options: ["<footer>", "<bottom>", "<section>", "<end>"],
    correctAnswer: "<footer>",
    category: "HTML5 Semantic"
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    options: ["<select>", "<dropdown>", "<list>", "<input type='dropdown'>"],
    correctAnswer: "<select>",
    category: "HTML Forms"
  },
  {
    question: "Which HTML element defines navigation links?",
    options: ["<nav>", "<navigate>", "<navigation>", "<links>"],
    correctAnswer: "<nav>",
    category: "HTML5 Semantic"
  },
  {
    question: "What is the correct HTML for making a text area?",
    options: ["<textarea>", "<input type='textarea'>", "<input type='area'>", "<text>"],
    correctAnswer: "<textarea>",
    category: "HTML Forms"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "css", "class", "styles"],
    correctAnswer: "style",
    category: "HTML Styling"
  },
  {
    question: "What is the correct HTML element for defining important text?",
    options: ["<strong>", "<important>", "<b>", "<i>"],
    correctAnswer: "<strong>",
    category: "HTML Text Formatting"
  },
  {
    question: "Which doctype is correct for HTML5?",
    options: [
      "<!DOCTYPE html>",
      "<!DOCTYPE HTML5>",
      "<!DOCTYPE HTML PUBLIC>",
      "<DOCTYPE html>"
    ],
    correctAnswer: "<!DOCTYPE html>",
    category: "HTML5 Basics"
  },
  {
    question: "What is the correct HTML for making a button?",
    options: ["<button>", "<input type='button'>", "Both are correct", "<btn>"],
    correctAnswer: "Both are correct",
    category: "HTML Forms"
  },
  {
    question: "Which HTML element defines emphasized text?",
    options: ["<em>", "<i>", "<italic>", "<emphasis>"],
    correctAnswer: "<em>",
    category: "HTML Text Formatting"
  },
  {
    question: "What is the correct HTML for creating an email link?",
    options: [
      '<a href="mailto:email@example.com">',
      '<mail href="email@example.com">',
      '<a link="email@example.com">',
      '<email>email@example.com</email>'
    ],
    correctAnswer: '<a href="mailto:email@example.com">',
    category: "HTML Links"
  },
  {
    question: "Which HTML element is used to display a scalar measurement?",
    options: ["<meter>", "<gauge>", "<measure>", "<scale>"],
    correctAnswer: "<meter>",
    category: "HTML5 Elements"
  },
  {
    question: "What is the correct HTML for inserting a background image?",
    options: [
      "In CSS using background-image property",
      '<body bg="image.jpg">',
      '<background img="image.jpg">',
      '<body background="image.jpg">'
    ],
    correctAnswer: "In CSS using background-image property",
    category: "HTML & CSS"
  },
  {
    question: "Which input type is used for email validation in HTML5?",
    options: ["email", "mail", "e-mail", "emailaddress"],
    correctAnswer: "email",
    category: "HTML5 Forms"
  },
  {
    question: "What is the correct HTML for making a table?",
    options: ["<table>", "<tab>", "<tbl>", "<grid>"],
    correctAnswer: "<table>",
    category: "HTML Tables"
  },
  {
    question: "Which HTML element defines a table row?",
    options: ["<tr>", "<td>", "<th>", "<row>"],
    correctAnswer: "<tr>",
    category: "HTML Tables"
  },
  {
    question: "What is the correct HTML element for defining a table header?",
    options: ["<th>", "<thead>", "<header>", "<td>"],
    correctAnswer: "<th>",
    category: "HTML Tables"
  },
  {
    question: "Which HTML tag is used to define a description list?",
    options: ["<dl>", "<ol>", "<ul>", "<list>"],
    correctAnswer: "<dl>",
    category: "HTML Lists"
  },
  {
    question: "What does the <canvas> element do?",
    options: [
      "Used to draw graphics via JavaScript",
      "Creates a container for images",
      "Defines an art section",
      "Makes a drawing board"
    ],
    correctAnswer: "Used to draw graphics via JavaScript",
    category: "HTML5 Graphics"
  },
  {
    question: "Which attribute specifies where to open the linked document?",
    options: ["target", "href", "rel", "link"],
    correctAnswer: "target",
    category: "HTML Links"
  },
  {
    question: "What is the correct value for opening a link in a new tab?",
    options: ["_blank", "_new", "_tab", "new"],
    correctAnswer: "_blank",
    category: "HTML Links"
  },
  {
    question: "Which HTML element defines a section of quoted text?",
    options: ["<blockquote>", "<quote>", "<q>", "<cite>"],
    correctAnswer: "<blockquote>",
    category: "HTML Text Elements"
  },
  {
    question: "What is the purpose of the <article> element?",
    options: [
      "Defines independent, self-contained content",
      "Creates an article page",
      "Defines all text content",
      "Groups related content"
    ],
    correctAnswer: "Defines independent, self-contained content",
    category: "HTML5 Semantic"
  },
  {
    question: "Which HTML element is used to define a section in a document?",
    options: ["<section>", "<div>", "<part>", "<segment>"],
    correctAnswer: "<section>",
    category: "HTML5 Semantic"
  },
  {
    question: "What is the correct HTML for playing audio files?",
    options: ["<audio>", "<sound>", "<music>", "<mp3>"],
    correctAnswer: "<audio>",
    category: "HTML5 Media"
  },
  {
    question: "Which attribute is used to provide a title for an element?",
    options: ["title", "tooltip", "alt", "name"],
    correctAnswer: "title",
    category: "HTML Attributes"
  },
  {
    question: "What is the correct HTML element for the main content of a document?",
    options: ["<main>", "<content>", "<body>", "<primary>"],
    correctAnswer: "<main>",
    category: "HTML5 Semantic"
  },
  {
    question: "Which HTML element represents the progress of a task?",
    options: ["<progress>", "<meter>", "<loading>", "<status>"],
    correctAnswer: "<progress>",
    category: "HTML5 Elements"
  },
  {
    question: "What is the correct HTML for defining preformatted text?",
    options: ["<pre>", "<format>", "<code>", "<text>"],
    correctAnswer: "<pre>",
    category: "HTML Text Elements"
  },
  {
    question: "Which attribute makes an input field read-only?",
    options: ["readonly", "disabled", "locked", "static"],
    correctAnswer: "readonly",
    category: "HTML Forms"
  },
  {
    question: "What is the correct HTML for defining subscript text?",
    options: ["<sub>", "<subscript>", "<lower>", "<down>"],
    correctAnswer: "<sub>",
    category: "HTML Text Formatting"
  },
  {
    question: "Which HTML element is used for short inline quotations?",
    options: ["<q>", "<quote>", "<blockquote>", "<cite>"],
    correctAnswer: "<q>",
    category: "HTML Text Elements"
  },
  {
    question: "What is the purpose of the <aside> element?",
    options: [
      "Defines content aside from the main content",
      "Creates a sidebar",
      "Defines all secondary content",
      "Makes a comment section"
    ],
    correctAnswer: "Defines content aside from the main content",
    category: "HTML5 Semantic"
  },
  {
    question: "Which HTML attribute is used to define keyboard shortcuts?",
    options: ["accesskey", "shortcut", "key", "hotkey"],
    correctAnswer: "accesskey",
    category: "HTML Attributes"
  },
  {
    question: "What is the correct HTML for defining superscript text?",
    options: ["<sup>", "<superscript>", "<upper>", "<up>"],
    correctAnswer: "<sup>",
    category: "HTML Text Formatting"
  },
  {
    question: "Which element represents a container for introductory content?",
    options: ["<header>", "<head>", "<intro>", "<top>"],
    correctAnswer: "<header>",
    category: "HTML5 Semantic"
  },
  {
    question: "What is the correct HTML for defining a time or date?",
    options: ["<time>", "<date>", "<datetime>", "<timestamp>"],
    correctAnswer: "<time>",
    category: "HTML5 Elements"
  }
]
