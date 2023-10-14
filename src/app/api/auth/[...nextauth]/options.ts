import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";

import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email Address", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: function (
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Awaitable<User | null> {
        console.log(credentials);
        if (
          credentials?.email !== "admin@admin.com" ||
          credentials?.password !== "test1234"
        ) {
          return null;
        }
        return {
          id: "e17ebe16-6840-11ee-8c99-0242ac120002",
          name: "John Doe",
          email: "admin@admin.com",
        };
      },
    }),
  ],
  pages: {
    signIn: "../../page",
  },
};
