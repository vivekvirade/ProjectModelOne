function generateSlug(title) {
    // Convert the title to lowercase
    const lowercaseTitle = title.toLowerCase();
  
    // Replace spaces with hyphens using a regular expression
    const slug = lowercaseTitle.replace(/\s+/g, '-');
  
    return `${slug}.com`;
  }
  
  // Example 1:
  const input1 = "Hello World";
  console.log(generateSlug(input1)); // Output: "hello-world"
  
  // Example 2:
  const input2 = "AlmaBetter Web Dev";
  console.log(generateSlug(input2)); // Output: "almabetter-web-dev"
  