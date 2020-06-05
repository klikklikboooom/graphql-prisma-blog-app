import Query from "./Query";
import Mutation from "./Mutation";
import Subscription from "./Subscription";
import User from "./User";
import Post from "./Post";
import Comment from "./Comment";
import { extractFragmentReplacements } from "prisma-binding";

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Comment,
  Post,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers, fragmentReplacements };
