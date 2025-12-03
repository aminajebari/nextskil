export const courseData = {
  modules: [
    {
      title: "HTML Fundamentals",
      videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
      videoDescription: "Learn the basics of HTML including document structure, elements, and attributes.",
      lessons: [
        {
          title: "Introduction to HTML",
          description: "Understanding what HTML is and its role in web development",
          content: `
            <h2>What is HTML?</h2>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web pages using markup.</p>
            
            <h3>Key Concepts:</h3>
            <ul>
              <li>HTML consists of elements represented by tags</li>
              <li>Tags are keywords surrounded by angle brackets like &lt;html&gt;</li>
              <li>Most tags come in pairs: opening tag and closing tag</li>
              <li>The browser reads HTML and renders it as a web page</li>
            </ul>
            
            <h3>Example:</h3>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is my first HTML page.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          `,
        },
        {
          title: "HTML Document Structure",
          description: "Learn about the basic structure of an HTML document",
          content: `
            <h2>HTML Document Structure</h2>
            <p>Every HTML document follows a standard structure with specific elements.</p>
            
            <h3>Essential Elements:</h3>
            <ul>
              <li><strong>&lt;!DOCTYPE html&gt;</strong> - Declares this is an HTML5 document</li>
              <li><strong>&lt;html&gt;</strong> - Root element containing all HTML</li>
              <li><strong>&lt;head&gt;</strong> - Contains metadata and links to resources</li>
              <li><strong>&lt;title&gt;</strong> - Sets the page title shown in browser tab</li>
              <li><strong>&lt;body&gt;</strong> - Contains all visible content</li>
            </ul>
          `,
        },
        {
          title: "HTML Elements and Tags",
          description: "Understanding HTML elements, tags, and their attributes",
          content: `
            <h2>HTML Elements and Tags</h2>
            <p>HTML elements are the building blocks of web pages.</p>
            
            <h3>Types of Elements:</h3>
            <ul>
              <li>Paired tags: &lt;p&gt;content&lt;/p&gt;</li>
              <li>Self-closing tags: &lt;img /&gt;, &lt;br /&gt;</li>
              <li>Nested elements: Elements inside other elements</li>
            </ul>
          `,
        },
      ],
      quiz: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
          ],
          correctAnswer: 0,
        },
        {
          question: "Which tag is used to define the document type in HTML5?",
          options: ["&lt;doctype&gt;", "&lt;!DOCTYPE html&gt;", "&lt;html5&gt;", "&lt;document&gt;"],
          correctAnswer: 1,
        },
      ],
    },
    {
      title: "Text and Formatting",
      videoUrl: "https://www.youtube.com/embed/88PXJAA6szs",
      videoDescription: "Master HTML text formatting, headings, paragraphs, and semantic elements.",
      lessons: [
        {
          title: "Headings and Paragraphs",
          description: "Learn how to structure content with headings and paragraphs",
          content: `
            <h2>Headings and Paragraphs</h2>
            <p>Headings define the hierarchy of your content, from &lt;h1&gt; to &lt;h6&gt;.</p>
            
            <h3>Best Practices:</h3>
            <ul>
              <li>Use only one &lt;h1&gt; per page</li>
              <li>Don't skip heading levels</li>
              <li>Use &lt;p&gt; for paragraphs of text</li>
            </ul>
          `,
        },
        {
          title: "Text Formatting Tags",
          description: "Using bold, italic, underline, and other text formatting",
          content: `
            <h2>Text Formatting</h2>
            <p>HTML provides various tags for formatting text appearance and meaning.</p>
            
            <h3>Common Tags:</h3>
            <ul>
              <li>&lt;strong&gt; - Bold text with importance</li>
              <li>&lt;em&gt; - Italic text with emphasis</li>
              <li>&lt;mark&gt; - Highlighted text</li>
              <li>&lt;small&gt; - Smaller text</li>
            </ul>
          `,
        },
      ],
      quiz: [
        {
          question: "Which tag represents the most important heading?",
          options: ["&lt;h6&gt;", "&lt;h1&gt;", "&lt;heading&gt;", "&lt;head&gt;"],
          correctAnswer: 1,
        },
      ],
    },
    {
      title: "Links and Images",
      videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
      videoDescription: "Working with hyperlinks and images in HTML.",
      lessons: [
        {
          title: "Creating Hyperlinks",
          description: "Learn how to create links to other pages and resources",
          content: `
            <h2>Hyperlinks</h2>
            <p>The &lt;a&gt; tag creates hyperlinks to other web pages, files, or locations.</p>
            
            <h3>Syntax:</h3>
            <pre><code>&lt;a href="https://example.com"&gt;Link Text&lt;/a&gt;</code></pre>
            
            <h3>Types of Links:</h3>
            <ul>
              <li>External links - to other websites</li>
              <li>Internal links - to pages within your site</li>
              <li>Anchor links - to sections on the same page</li>
            </ul>
          `,
        },
        {
          title: "Working with Images",
          description: "Embedding and optimizing images in HTML",
          content: `
            <h2>Images in HTML</h2>
            <p>The &lt;img&gt; tag embeds images in web pages.</p>
            
            <h3>Syntax:</h3>
            <pre><code>&lt;img src="image.jpg" alt="Description"&gt;</code></pre>
            
            <h3>Important Attributes:</h3>
            <ul>
              <li><strong>src</strong> - Path to the image file</li>
              <li><strong>alt</strong> - Alternative text for accessibility</li>
              <li><strong>width/height</strong> - Image dimensions</li>
            </ul>
          `,
        },
      ],
      quiz: [
        {
          question: "Which attribute specifies the URL of a link?",
          options: ["src", "href", "link", "url"],
          correctAnswer: 1,
        },
      ],
    },
  ],
}
