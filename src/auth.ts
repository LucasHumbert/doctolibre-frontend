import NextAuth, {DefaultSession} from "next-auth"
import Credentials from "next-auth/providers/credentials"

declare module "next-auth" {
    interface User {
        firstName: string
        lastName: string
    }

    interface Session {
        user: User & DefaultSession["user"]
        expires: string
        error: string
    }
}


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const res = await fetch(`${process.env.BACKEND_URL}/user/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    })
                })

                const user = await res.json()

                if (user.errors) {
                    throw new Error("Invalid credentials.")
                }

                return user
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.firstName = user.firstName
                token.lastName = user.lastName
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                    email: token.email as string,
                    firstName: token.firstName as string,
                    lastName: token.lastName as string,
                }
            }
        }

    },
})