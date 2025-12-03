export const courseData = {
  modules: [
    {
      title: "CSS Fundamentals",
      videoUrl: "https://www.youtube.com/embed/1PnVor36_40",
      videoDescription: "Learn the basics of CSS including syntax, selectors, and how to apply styles to HTML elements.",
      lessons: [
        {
          title: "Introduction to CSS",
          description: "Understanding what CSS is and how it works with HTML",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">What is CSS?</h2>
              <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls layout, colors, fonts, and overall visual appearance.</p>
              
              <h3 className="text-xl font-semibold mt-6">Three Ways to Apply CSS</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Inline CSS:</strong> Applied directly to HTML elements using the style attribute</li>
                <li><strong>Internal CSS:</strong> Defined within {'<style>'} tags in the HTML head</li>
                <li><strong>External CSS:</strong> Linked via separate .css files (recommended)</li>
              </ul>

              <div className="bg-muted p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Example: External CSS</h4>
                <pre className="text-sm overflow-x-auto"><code>{`<link rel="stylesheet" href="styles.css">`}</code></pre>
              </div>
            </div>
          ),
        },
        {
          title: "CSS Selectors",
          description: "Master different types of CSS selectors",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">CSS Selectors</h2>
              <p>Selectors allow you to target HTML elements to apply styles.</p>
              
              <h3 className="text-xl font-semibold mt-6">Common Selectors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Element Selector:</strong> Targets elements by tag name (e.g., p, div, h1)</li>
                <li><strong>Class Selector:</strong> Targets elements with a specific class (.classname)</li>
                <li><strong>ID Selector:</strong> Targets a single element with a specific ID (#idname)</li>
                <li><strong>Universal Selector:</strong> Targets all elements (*)</li>
              </ul>

              <div className="bg-muted p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Example:</h4>
                <pre className="text-sm overflow-x-auto"><code>{`p { color: blue; }
.highlight { background-color: yellow; }
#header { font-size: 24px; }`}</code></pre>
              </div>
            </div>
          ),
        },
        {
          title: "CSS Properties & Values",
          description: "Learn about common CSS properties and their values",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">CSS Properties & Values</h2>
              <p>CSS properties define what aspect of an element you want to style, while values specify how.</p>
              
              <h3 className="text-xl font-semibold mt-6">Common Properties</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>color:</strong> Text color</li>
                <li><strong>background-color:</strong> Background color</li>
                <li><strong>font-size:</strong> Text size</li>
                <li><strong>margin:</strong> Space outside an element</li>
                <li><strong>padding:</strong> Space inside an element</li>
                <li><strong>border:</strong> Element border</li>
              </ul>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What does CSS stand for?",
          options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
          correct: 1,
        },
        {
          question: "Which is the correct way to apply external CSS?",
          options: [
            '<style src="style.css">',
            '<link rel="stylesheet" href="style.css">',
            '<css>style.css</css>',
            '<stylesheet>style.css</stylesheet>',
          ],
          correct: 1,
        },
        {
          question: "Which selector targets elements by class?",
          options: ["#classname", ".classname", "*classname", "classname"],
          correct: 1,
        },
      ],
    },
    {
      title: "Box Model & Layout",
      videoUrl: "https://www.youtube.com/embed/rIO5326FgPE",
      videoDescription: "Master the CSS box model and layout fundamentals.",
      lessons: [
        {
          title: "Understanding the Box Model",
          description: "Content, padding, border, and margin explained",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">The CSS Box Model</h2>
              <p>Every element in CSS is a box consisting of four areas: content, padding, border, and margin.</p>
              
              <h3 className="text-xl font-semibold mt-6">Box Model Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Content:</strong> The actual content (text, images, etc.)</li>
                <li><strong>Padding:</strong> Space between content and border</li>
                <li><strong>Border:</strong> Line surrounding the padding</li>
                <li><strong>Margin:</strong> Space outside the border</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Display Properties",
          description: "Block, inline, inline-block, and none",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Display Properties</h2>
              <p>The display property controls how elements are rendered.</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>block:</strong> Takes full width, starts on new line</li>
                <li><strong>inline:</strong> Only takes necessary width, stays inline</li>
                <li><strong>inline-block:</strong> Inline but can have width/height</li>
                <li><strong>none:</strong> Element is not displayed</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Positioning Elements",
          description: "Static, relative, absolute, fixed, and sticky positioning",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">CSS Positioning</h2>
              <p>The position property specifies how an element is positioned in the document.</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>static:</strong> Default positioning</li>
                <li><strong>relative:</strong> Positioned relative to its normal position</li>
                <li><strong>absolute:</strong> Positioned relative to nearest positioned ancestor</li>
                <li><strong>fixed:</strong> Positioned relative to viewport</li>
                <li><strong>sticky:</strong> Toggles between relative and fixed</li>
              </ul>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What is the correct order of the box model from inside to outside?",
          options: [
            "margin, border, padding, content",
            "content, padding, border, margin",
            "padding, content, margin, border",
            "content, margin, border, padding",
          ],
          correct: 1,
        },
        {
          question: "Which display value makes an element take up the full width available?",
          options: ["inline", "block", "inline-block", "flex"],
          correct: 1,
        },
        {
          question: "Which position value removes an element from the normal document flow?",
          options: ["static", "relative", "absolute", "sticky"],
          correct: 2,
        },
      ],
    },
    {
      title: "Flexbox",
      videoUrl: "https://www.youtube.com/embed/phWxA89Dy94",
      videoDescription: "Learn modern layout techniques with Flexbox.",
      lessons: [
        {
          title: "Introduction to Flexbox",
          description: "Understanding flex containers and flex items",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Flexbox Basics</h2>
              <p>Flexbox is a one-dimensional layout method for arranging items in rows or columns.</p>
              
              <h3 className="text-xl font-semibold mt-6">Key Concepts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Flex Container:</strong> Parent element with display: flex</li>
                <li><strong>Flex Items:</strong> Direct children of flex container</li>
                <li><strong>Main Axis:</strong> Primary direction (row or column)</li>
                <li><strong>Cross Axis:</strong> Perpendicular to main axis</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Flex Properties",
          description: "Justify-content, align-items, and flex-direction",
          content: (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Flexbox Properties</h2>
              
              <h3 className="text-xl font-semibold mt-6">Container Properties</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>justify-content:</strong> Aligns items along main axis</li>
                <li><strong>align-items:</strong> Aligns items along cross axis</li>
                <li><strong>flex-direction:</strong> Sets main axis direction</li>
                <li><strong>flex-wrap:</strong> Controls wrapping of items</li>
              </ul>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What property creates a flex container?",
          options: ["flex: container", "display: flex", "flex-container: true", "layout: flex"],
          correct: 1,
        },
        {
          question: "Which property controls alignment along the main axis?",
          options: ["align-items", "justify-content", "flex-align", "main-axis"],
          correct: 1,
        },
      ],
    },
  ],
}
