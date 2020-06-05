import { Prisma } from "prisma-binding";
import { fragmentReplacements } from "./resolvers/index";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  fragmentReplacements,
});

export { prisma as default };
// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId });
//   if (!userExists) throw new Error("User not found");
//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId,
//           },
//         },
//       },
//     },
//     "{id author { id name email posts { id title body published}}}"
//   );
//   const user = await prisma.query.user(
//     {
//       where: {
//         id: authorId,
//       },
//     },
//     "{ id name email posts { id title body published }}"
//   );
//   return user;
// };

// createPostForUser("123", {
//   title: "Good reads",
//   body: "Some rando book",
//   published: true,
// })
//   .then((user) => {
//     console.log(JSON.stringify(user, null, 2));
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });
//   if (!postExists) throw new Error("Post not found");
//   const updatedPost = await prisma.mutation.updatePost(
//     {
//       data: { ...data },
//       where: {
//         id: postId,
//       },
//     },
//     "{ id title body published author { id name }}"
//   );
//   return updatedPost;
// };

// updatePostForUser("23", {
//   body: "Updating the body and published",
//   published: false,
// })
//   .then((post) => {
//     console.log("The updated post is ", post);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// prisma.query.users(null, '{ id name posts { id title}}')
// .then((data) => {
//      console.log(JSON.stringify(data, undefined, 2));
// }).catch((err) => {
//      console.log(err);
// })

// prisma.query.comments(null, '{id text author { id name }}')
// .then((data) => {
//      console.log(JSON.stringify(data, undefined,2))
// }).catch((err) => {
//      console.log(err);
// })

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: "Titulat post",
//         body: "This ain't a body",
//         published: false,
//         author: {
//           connect: {
//             id: "ckamtozv0004l0704ic7qzpkt",
//           },
//         },
//       },
//     },
//     "{ id title body published author { name }}"
//   )
//   .then((data) => {
//     console.log(JSON.stringify(data, null, 2));
//     return prisma.query.users(null, "{ id name posts { id title }}");
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data, null, 2));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// prisma.mutation
//   .updatePost({
//     data: {
//       body: "The body will now be updated",
//       published: true,
//     },
//     where: {
//       id: "ckarusctf00130734esufv3xa",
//     },
//   })
//   .then((data) => {
//     return prisma.query.posts(null, "{id title body published}");
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data, null, 2));
//   });
