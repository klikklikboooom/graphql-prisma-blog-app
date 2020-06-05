const users = [
  {
    id: "1",
    name: "Nikhil",
    email: "nikhil@example.com",
    age: 24,
  },
  {
    id: "2",
    name: "Mike",
    email: "mike@example.com",
    age: 25,
  },
  {
    id: "3",
    name: "Andrew",
    email: "andrew@example.com",
  },
];

const posts = [
  {
    id: "1",
    title: "Blog post number 1",
    body: "This is a pattern matching text",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "This is a completely different post",
    body: "Some other data for the body",
    published: true,
    author: "2",
  },
  {
    id: "3",
    title: "Wow! I am posting a lot",
    body: "Ding dang dong",
    published: true,
    author: "2",
  },
];

const comments = [
  {
    id: "762561",
    text: "This is my first comment",
    author: "2",
    post: "1",
  },
  {
    id: "709152",
    text: "Lorem ipsum diaz",
    author: "3",
    post: "3",
  },
  {
    id: "94412134",
    text: "This is a text field that actually matters",
    author: "3",
    post: "2",
  },
  {
    id: "90135712",
    text: "Now what do I write",
    author: "1",
    post: "2",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
