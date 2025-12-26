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
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/html5-logo-web-development-code.jpg"
                  alt="HTML5 Logo and Web Development"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">What is HTML?</h2>
                <p className="leading-relaxed">
                  HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes
                  the structure of web pages using markup elements called tags.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HTML consists of elements represented by tags</li>
                  <li>Tags are keywords surrounded by angle brackets like {`<html>`}</li>
                  <li>Most tags come in pairs: opening tag and closing tag</li>
                  <li>The browser reads HTML and renders it as a web page</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Example</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "HTML Document Structure",
          description: "Learn about the basic structure of an HTML document",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/html-document-structure-tree-diagram.jpg"
                  alt="HTML Document Structure Diagram"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">HTML Document Structure</h2>
                <p className="leading-relaxed">
                  Every HTML document follows a standard structure with specific elements that define its organization.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Essential Elements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>{`<!DOCTYPE html>`}</strong> - Declares this is an HTML5 document
                  </li>
                  <li>
                    <strong>{`<html>`}</strong> - Root element containing all HTML content
                  </li>
                  <li>
                    <strong>{`<head>`}</strong> - Contains metadata and links to resources
                  </li>
                  <li>
                    <strong>{`<title>`}</strong> - Sets the page title shown in browser tab
                  </li>
                  <li>
                    <strong>{`<body>`}</strong> - Contains all visible content on the page
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Complete Example</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is the content of my page.</p>
  </body>
</html>`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "HTML Elements and Tags",
          description: "Understanding HTML elements, tags, and their attributes",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/html-tags-elements-code-snippet.jpg"
                  alt="HTML Tags and Elements"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">HTML Elements and Tags</h2>
                <p className="leading-relaxed">
                  HTML elements are the building blocks of web pages. They consist of tags that tell the browser how to
                  display content.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Types of Elements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Paired tags:</strong> Have opening and closing tags: {`<p>content</p>`}
                  </li>
                  <li>
                    <strong>Self-closing tags:</strong> Close themselves: {(`<img />`, `<br />`)}
                  </li>
                  <li>
                    <strong>Nested elements:</strong> Elements placed inside other elements
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Common HTML Elements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{`<h1> to <h6>`} - Headings</li>
                  <li>{`<p>`} - Paragraphs</li>
                  <li>{`<a>`} - Links</li>
                  <li>{`<img>`} - Images</li>
                  <li>{`<div>`} - Container/division</li>
                  <li>{`<span>`} - Inline container</li>
                </ul>
              </div>
            </div>
          ),
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
          question: "Which tag declares an HTML5 document?",
          options: ["<doctype>", "<!DOCTYPE html>", "<html5>", "<document>"],
          correctAnswer: 1,
        },
        {
          question: "Where does the visible content of a webpage go?",
          options: ["<head>", "<title>", "<body>", "<html>"],
          correctAnswer: 2,
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
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/typography-headings-hierarchy-text-structure.jpg"
                  alt="Headings and Typography Hierarchy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Headings and Paragraphs</h2>
                <p className="leading-relaxed">
                  Headings define the hierarchy of your content, from {`<h1>`} to {`<h6>`}.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use only one {`<h1>`} per page</li>
                  <li>Don't skip heading levels</li>
                  <li>Use {`<p>`} for paragraphs of text</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: "Text Formatting Tags",
          description: "Using bold, italic, underline, and other text formatting",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/text-formatting-bold-italic-underline-styles.jpg"
                  alt="Text Formatting Styles"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Text Formatting</h2>
                <p className="leading-relaxed">
                  HTML provides various tags for formatting text appearance and meaning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Common Tags</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{`<strong>`} - Bold text with importance</li>
                  <li>{`<em>`} - Italic text with emphasis</li>
                  <li>{`<mark>`} - Highlighted text</li>
                  <li>{`<small>`} - Smaller text</li>
                </ul>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which tag represents the most important heading?",
          options: ["{`<h6>`}", "{`<h1>`}", "{`<heading>`}", "{`<head>`}"],
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
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/hyperlinks-chain-connection-web-navigation.jpg"
                  alt="Hyperlinks and Web Navigation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Hyperlinks</h2>
                <p className="leading-relaxed">
                  The {`<a>`} tag creates hyperlinks to other web pages, files, or locations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Syntax</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<a href="https://example.com">Link Text</a>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Types of Links</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>External links - to other websites</li>
                  <li>Internal links - to pages within your site</li>
                  <li>Anchor links - to sections on the same page</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: "Working with Images",
          description: "Embedding and optimizing images in HTML",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/photo-gallery-images-web-page.jpg"
                  alt="Web Images and Gallery"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Images in HTML</h2>
                <p className="leading-relaxed">The {`<img>`} tag embeds images in web pages.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Syntax</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<img src="image.jpg" alt="Description" />`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Important Attributes</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>src</strong> - Path to the image file
                  </li>
                  <li>
                    <strong>alt</strong> - Alternative text for accessibility
                  </li>
                  <li>
                    <strong>width/height</strong> - Image dimensions
                  </li>
                </ul>
              </div>
            </div>
          ),
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
