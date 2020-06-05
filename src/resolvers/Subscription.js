import getUserId from "../utils/getUserId";

const Subsciption = {
  comment: {
    subscribe(parent, { postId }, { prisma }, info) {
      return prisma.subscription.comment(
        {
          where: {
            node: {
              post: {
                id: postId,
              },
            },
          },
        },
        info
      );
    },
  },
  post: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.post({
        where: {
          node: {
            published: true,
          },
        },
      });
    },
  },

  myPost: {
    subscribe(parent, args, { prisma, request }, info) {
      const userId = getUserId(request);
      return prisma.subscription.post(
        {
          where: {
            node: {
              author: {
                id: userId,
              },
            },
          },
        },
        info
      );
    },
  },
};

export { Subsciption as default };
