class MockApiService {
  constructor() {
    // Initialize mock data
    this.users = [
      { id: 1, name: "Alice", role: "Admin", status: "Active" },
      { id: 2, name: "Bob", role: "Editor", status: "Active" },
      { id: 3, name: "Charlie", role: "User", status: "Inactive" },
    ];

    this.articles = [
      {
        id: 1,
        title: "Understanding React Lifecycle Methods",
        description:
          "A comprehensive guide to React's lifecycle methods and how to use them effectively.",
        imgUrl:
          "https://www.tutorialswebsite.com/wp-content/uploads/2019/09/reactjs-component-lifecycle-methods.jpeg",
        publishedDate: "2024-01-10",
        altVal: "lifecycleImg",
      },
      {
        id: 2,
        title: "Top 10 React Best Practices",
        description:
          "Improve your React development workflow with these essential best practices.",
        imgUrl:
          "https://trio.dev/wp-content/uploads/2024/05/React_Best_Practices.png",
        publishedDate: "2024-01-15",
        altVal: "top10Img",
      },
      {
        id: 3,
        title: "What's New in React 18?",
        description:
          "Explore the latest features and updates in React 18 for modern web development.",
        imgUrl: "https://miro.medium.com/v2/resize:fit:1400/0*C0SrRkJF1iUY6JEs",
        publishedDate: "2024-01-20",
        altVal: "react18Img",
      },
      {
        id: 4,
        title: "Using Context API in React",
        description:
          "Learn how to manage state efficiently with the Context API in React.",
        imgUrl:
          "https://media.licdn.com/dms/image/D5612AQEU669646rNpw/article-cover_image-shrink_720_1280/0/1680985054784?e=2147483647&v=beta&t=sOV1KHiZtHJWB4OBRprJpREigYiT-shsIjaTIZnyfvQ",
        publishedDate: "2024-01-25",
        altVal: "contextApiImg",
      },
      {
        id: 5,
        title: "React vs. Angular: A Comparison",
        description:
          "Compare React and Angular to determine which framework best suits your needs.",
        imgUrl:
          "https://www.mindinventory.com/blog/wp-content/uploads/2018/04/angular-vs-react.webp",
        publishedDate: "2024-02-01",
        altVal: "comparisionImg",
      },
      {
        id: 6,
        title: "Building Reusable Components in React",
        description:
          "Discover the principles and patterns for building reusable components in React.",
        imgUrl:
          "https://miro.medium.com/v2/resize:fit:1400/1*Fzx5UQyvec8U5TLm7xXR_g.jpeg",
        publishedDate: "2024-02-05",
        altVal: "reusableImg",
      },
      {
        id: 7,
        title: "State Management with Redux",
        description:
          "An introduction to Redux and how it can simplify state management in React applications.",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpNEs0PKJ-282fwtz7itZIZ9ARVb7923Dbb-aDyaEbryWTmoXUF60s7XAFK2aQh-2fvw&usqp=CAU",
        publishedDate: "2024-02-10",
        altVal: "reduxImg",
      },
      {
        id: 8,
        title: "Optimizing React Applications",
        description:
          "Tips and techniques for optimizing the performance of your React applications.",
        imgUrl:
          "https://scientyficworld.org/wp-content/uploads/2022/11/Optimize-React-application.jpg",
        publishedDate: "2024-02-15",
        altVal: "optimizingImg",
      },
      {
        id: 9,
        title: "React Router for Beginners",
        description:
          "A beginner's guide to routing in React using React Router.",
        imgUrl:
          "https://blog.openreplay.com/images/react-router-for-beginners--a-complete-2023-guide/images/hero.png",
        publishedDate: "2024-02-20",
        altVal: "routerImg",
      },
      {
        id: 10,
        title: "Testing React Applications",
        description:
          "An overview of testing techniques and tools for React applications.",
        imgUrl:
          "https://curiosum.com/images/blog-post/testing-react-apps-blogpost?size=original",
        publishedDate: "2024-02-25",
        altVal: "testImg",
      },
    ];

    this.permissions = {
      Admin: ["addUser", "editUser", "deleteUser", "viewUsers"],
      Editor: ["editArticle", "viewArticles"],
      User: ["viewProfile"],
    };
    this.mockUsers = [
      { username: "admin", password: "123", role: "Admin" },
      { username: "editor", password: "123", role: "Editor" },
      { username: "user", password: "123", role: "User" },
    ];
  }

  // User operations
  fetchUsers() {
    return [...this.users];
  }

  authenticateUser(usersDetails) {
    const user = this.mockUsers.find(
      (u) =>
        u.username === usersDetails.username &&
        u.password === usersDetails.password
    );
    if (!user) return { isMatch: false, error: "Invalid username or password" };
    return { isMatch: true, user };
  }

  addUser(user) {
    const newUser = { id: Date.now(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  editUser(id, updatedData) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...updatedData } : user
    );
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  // Article operations
  fetchArticles() {
    return [...this.articles];
  }

  editArticle(post) {
    this.articles = this.articles.map((article) =>
      article.id === post.id ? { ...article, ...post } : article
    );
  }

  // Role permissions
  fetchPermissions(role) {
    return this.permissions[role] || [];
  }
}

// Create and export an instance of the service
export default new MockApiService();
