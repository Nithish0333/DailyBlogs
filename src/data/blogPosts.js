export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the fundamentals of React and how to build your first component. This guide covers everything from JSX to hooks.",
    content: `
      <p>React is a powerful JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular frontend frameworks.</p>
      
      <h2>What is React?</h2>
      <p>React allows you to build reusable UI components and manage their state efficiently. It uses a virtual DOM to optimize rendering performance.</p>
      
      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Components:</strong> The building blocks of React applications</li>
        <li><strong>Props:</strong> Data passed from parent to child components</li>
        <li><strong>State:</strong> Internal data that can change over time</li>
        <li><strong>Hooks:</strong> Functions that let you use state and other React features</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To start a new React project, you can use Create React App or Vite. Both provide excellent developer experiences with hot module replacement and modern tooling.</p>
      
      <p>Once you've set up your project, you can start building components and bringing your ideas to life!</p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    category: "React",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Modern CSS Techniques",
    excerpt: "Explore cutting-edge CSS features like Grid, Flexbox, and custom properties that will transform your styling workflow.",
    content: `
      <p>Modern CSS has evolved significantly, providing developers with powerful tools to create beautiful, responsive layouts.</p>
      
      <h2>CSS Grid</h2>
      <p>CSS Grid is a two-dimensional layout system that allows you to create complex layouts with ease. It's perfect for designing entire page layouts.</p>
      
      <h2>Flexbox</h2>
      <p>Flexbox excels at one-dimensional layouts, making it ideal for navigation bars, card layouts, and centering content.</p>
      
      <h2>Custom Properties</h2>
      <p>CSS custom properties (variables) enable you to store values that can be reused throughout your stylesheet, making them perfect for theming.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use Grid for overall page layout</li>
        <li>Use Flexbox for component-level layouts</li>
        <li>Leverage custom properties for theming</li>
        <li>Keep your CSS organized with BEM methodology</li>
      </ul>
    `,
    author: "Jane Smith",
    date: "2024-01-20",
    category: "CSS",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features",
    excerpt: "Discover the powerful features introduced in modern JavaScript, from arrow functions to async/await.",
    content: `
      <p>ECMAScript 6 (ES6) and later versions have introduced many features that make JavaScript more powerful and easier to work with.</p>
      
      <h2>Arrow Functions</h2>
      <p>Arrow functions provide a more concise syntax for writing functions and automatically bind the <code>this</code> keyword.</p>
      
      <h2>Template Literals</h2>
      <p>Template literals allow you to embed expressions in strings using backticks, making string interpolation much cleaner.</p>
      
      <h2>Destructuring</h2>
      <p>Destructuring enables you to extract values from arrays or properties from objects into distinct variables with a simple syntax.</p>
      
      <h2>Async/Await</h2>
      <p>Async/await provides a cleaner way to work with asynchronous code, making promises easier to read and write.</p>
      
      <h2>Modules</h2>
      <p>ES6 modules allow you to organize your code into reusable, maintainable pieces using import and export statements.</p>
      
      <p>These features have revolutionized JavaScript development and are essential for modern web development.</p>
    `,
    author: "Mike Johnson",
    date: "2024-01-25",
    category: "JavaScript",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building Responsive Websites",
    excerpt: "Master the art of creating websites that look great on all devices, from mobile phones to large desktop screens.",
    content: `
      <p>Responsive web design is crucial in today's multi-device world. Your website needs to adapt seamlessly to different screen sizes.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Start by designing for mobile devices first, then progressively enhance for larger screens. This approach ensures your site works well on all devices.</p>
      
      <h2>Flexible Layouts</h2>
      <p>Use relative units like percentages, em, rem, and viewport units instead of fixed pixel values. This allows your layout to scale proportionally.</p>
      
      <h2>Media Queries</h2>
      <p>Media queries let you apply different styles based on device characteristics like width, height, and orientation.</p>
      
      <h2>Flexible Images</h2>
      <p>Ensure images scale properly by using <code>max-width: 100%</code> and consider using responsive images with the <code>srcset</code> attribute.</p>
      
      <h2>Testing</h2>
      <p>Always test your website on real devices when possible. Browser developer tools are helpful, but nothing beats testing on actual devices.</p>
      
      <p>Responsive design isn't just about making things smaller—it's about creating optimal experiences for each device type.</p>
    `,
    author: "Sarah Williams",
    date: "2024-02-01",
    category: "Web Design",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Introduction to TypeScript",
    excerpt: "Learn how TypeScript adds type safety to JavaScript, making your code more maintainable and less prone to errors.",
    content: `
      <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type definitions to JavaScript, helping catch errors early.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript provides better tooling, improved code quality, and enhanced developer experience through type checking and intelligent autocomplete.</p>
      
      <h2>Basic Types</h2>
      <p>TypeScript includes basic types like <code>string</code>, <code>number</code>, <code>boolean</code>, <code>array</code>, and more. You can also create custom types and interfaces.</p>
      
      <h2>Interfaces</h2>
      <p>Interfaces define the structure of objects, providing a contract that your code must follow. This helps prevent errors and improves code documentation.</p>
      
      <h2>Type Inference</h2>
      <p>TypeScript can often infer types automatically, so you don't need to annotate every variable. This balances type safety with code simplicity.</p>
      
      <h2>Getting Started</h2>
      <p>You can gradually adopt TypeScript in your JavaScript projects. Start by adding type annotations to critical parts of your codebase.</p>
      
      <p>TypeScript is especially valuable in large codebases where type safety can prevent many bugs before they reach production.</p>
    `,
    author: "David Brown",
    date: "2024-02-05",
    category: "TypeScript",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    excerpt: "Discover strategies to make your website faster and more efficient, improving user experience and SEO rankings.",
    content: `
      <p>Website performance is crucial for user experience and search engine rankings. Fast-loading sites keep users engaged and improve conversions.</p>
      
      <h2>Image Optimization</h2>
      <p>Optimize images by compressing them, using modern formats like WebP, and implementing lazy loading. This can significantly reduce page load times.</p>
      
      <h2>Code Splitting</h2>
      <p>Split your JavaScript bundles into smaller chunks that load on demand. This reduces initial load time and improves perceived performance.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement proper caching headers for static assets. Browser caching and service workers can dramatically improve repeat visit performance.</p>
      
      <h2>Minification</h2>
      <p>Minify CSS, JavaScript, and HTML to reduce file sizes. Remove unnecessary whitespace and comments in production builds.</p>
      
      <h2>CDN Usage</h2>
      <p>Use Content Delivery Networks (CDNs) to serve static assets from locations closer to your users, reducing latency.</p>
      
      <h2>Monitoring</h2>
      <p>Regularly monitor your site's performance using tools like Lighthouse, WebPageTest, and real user monitoring (RUM) tools.</p>
      
      <p>Performance optimization is an ongoing process. Regularly audit and improve your site's speed to provide the best user experience.</p>
    `,
    author: "Emily Davis",
    date: "2024-02-10",
    category: "Performance",
    readTime: "10 min read"
  }
];
