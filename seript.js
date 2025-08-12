const posts = [
  {
    title: "Getting Started with React",
    content:
      "React is a powerful JavaScript library for building user interfaces. In this post, we explore the fundamentals of component-based architecture and how it can help you create maintainable and scalable applications. From JSX syntax to state management, discover the key concepts that make React so popular among developers.",
  },
  {
    title: "The Future of Web Development",
    content:
      "Web development is constantly evolving with new technologies and frameworks emerging regularly. This article discusses the latest trends in frontend development, including serverless architectures, edge computing, and the growing importance of performance optimization. Learn what skills will be most valuable in the coming years.",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    content:
      "Understanding when to use CSS Grid versus Flexbox can be confusing for many developers. This comprehensive guide breaks down the strengths and use cases of each layout method. We'll explore practical examples and provide clear guidelines to help you choose the right tool for your layout needs.",
  },
  {
    title: "Building Accessible Web Applications",
    content:
      "Accessibility should be a fundamental consideration in all web development projects. This post covers essential accessibility principles, including semantic HTML, ARIA attributes, keyboard navigation, and screen reader compatibility. Learn how to create inclusive experiences that work for all users, regardless of their abilities.",
  },
  {
    title: "State Management in Modern React",
    content:
      "Managing state effectively is crucial for building robust React applications. We examine various state management solutions, from React's built-in useState and useContext hooks to popular libraries like Redux and Zustand. Discover which approach works best for different application sizes and complexity levels.",
  },
];

const cardContainer = document.getElementById("cards-container");

posts.forEach((post, index) => {
  const card = document.createElement("div");
  card.className = `card blog-card blog-card-${index + 1}`;
  card.id = `card-${index + 1}`; 
  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = post.title;

  const content = document.createElement("p");
  content.className = "card-content";
  content.textContent = post.content;

  card.appendChild(title);
  card.appendChild(content);

  cardContainer.appendChild(card);
});
