const projects = [
  {
    name: "Expense Tracking App",
    description:
      "This is a user-friendly, offline-capable Expense Tracking Progressive Web App (PWA) developed with Reactjs. Users can easily manage their expenses by adding, editing and deleting expenses categorized by months and years in real-time, with all data securely stored on their device using IndexedDB technology.",
    links: [
      {
        url: "https://expense-tracker-a.netlify.app/",
        iconify_code: "ant-design:global-outlined",
      },
      {
        url: "https://github.com/Ajoy10/expense",
        iconify_code: "ant-design:github-outlined",
      },
    ],
    img_src: "./images/project_icons/expense_tracker_icon.jpg",
  },
  {
    name: "Portfolio Website",
    description:
      "This portfolio website is a custom-made platform developed using ReactJS. It showcases my skills and experience in a visually appealing and easy-to-navigate design. Visitors can access information about me, my projects, and contact details with ease. The website is designed to provide a smooth and user-friendly browsing experience.",
    links: [
      {
        url: "/",
        iconify_code: "ant-design:global-outlined",
      },
      {
        url: "https://github.com/Ajoy10/portfolio",
        iconify_code: "ant-design:github-outlined",
      },
    ],
    img_src: "./images/project_icons/portfolio_icon.png",
  },
];

module.exports = { projects };
