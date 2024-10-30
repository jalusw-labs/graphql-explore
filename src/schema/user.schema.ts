import User from "../models/user.model";

export const types = `#graphql

type User{
  avatar: String
  username: String
  email: String
}

input CreateUserInput {
  avatar: String
  username: String
  email: String
}

type Query{
  users: [User]
}

type Mutation {
  createUser(input: CreateUserInput!): User
}
`;

export const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      console.log(users);
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (
      _: unknown,
      { input }: { input: { avatar: string; username: string; email: string } },
    ) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
  },
};
