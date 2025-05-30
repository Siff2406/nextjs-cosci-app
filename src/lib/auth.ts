import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db"; // your drizzle instance
import { account, session, user } from "@/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", // or "mysql", "sqlite"
        schema: { user, account, session}
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false, 
        requireEmailVerification: false,
        minPasswordLength: 6
    }
});