import getUserId from "../utils/getUserId";

const User = {
  email: {
    fragment: "fragment userId on User { id }",
    resolve(parent, args, { prisma, request }, info) {
      const userId = getUserId(request);
      if (parent.id === userId) {
        return parent.email;
      } else {
        return null;
      }
    },
  },
  posts: {
    fragment: "fragment userId on User { id }",
    resolve(parent, args, { prisma, request }, info) {
      return prisma.query.posts({
        where: {
          published: true,
          author: {
            id: parent.id,
          },
        },
      });
    },
  },
};
export { User as default };
