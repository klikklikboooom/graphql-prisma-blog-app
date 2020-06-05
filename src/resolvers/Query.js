import getUserId from "../utils/getUserId";

const Query = {
  async users(parent, args, { prisma }, info) {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy,
    };
    if (args.query) {
      opArgs.where = {
        OR: [
          {
            name_contains: args.query,
          },
          {
            email_contains: args.query,
          },
        ],
      };
    }
    const users = await prisma.query.users(opArgs, info);
    console.log(users);
    return users;
  },

  posts(parent, args, { prisma }, info) {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy,
      where: {
        published: true,
      },
    };
    if (args.query) {
      opArgs.where.OR = [
        {
          title_contains: args.query,
        },
        {
          body_contains: args.query,
        },
      ];
    }

    return prisma.query.posts(opArgs, info);
  },

  comments(parent, args, { prisma }, info) {
    return prisma.query.comments(null, info);
  },
  async post(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);

    const posts = await prisma.query.posts({
      orderBy: args.orderBy,
      where: {
        id: args.id,
        OR: [
          {
            published: true,
          },
          {
            author: {
              id: userId,
            },
          },
        ],
      },
    });

    if (posts.length === 0) throw new Error("Post not found");

    return posts[0];
  },

  async me(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);
    return prisma.query.users({
      first: args.first,
      skip: args.skip,
      after: args.after,
      where: {
        id: userId,
      },
    });
  },

  myPosts(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);
    let opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy,
      where: {
        author: {
          id: userId,
        },
      },
    };
    if (args.query) {
      opArgs.where.OR = [
        {
          title_contains: args.query,
        },
        {
          body_contains: args.query,
        },
      ];
    }
    return prisma.query.posts(opArgs, info);
  },
};

export { Query as default };
