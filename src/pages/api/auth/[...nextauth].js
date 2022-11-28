import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
        clientId:'SaguiTeste',
        clientSecret: '2IeNshUD6z5lzkm2MjAr0BbXfyziuARz',
        issuer: 'http://localhost:8080/realms/myrealm',
      })
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log('Oi')
  //     if (account.provider === "google" && profile.email_verified && profile.email.endsWith("@uniriotec.br")) {
  //       return true
  //     }
  //     return '/login/email-invalido'
  //   }
  // }
}
export default NextAuth(authOptions)