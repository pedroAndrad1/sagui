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
      }),
    GoogleProvider({
        clientId: '332505955238-s8of22iii1hn0ibmvjdcpfvl5pl6qq8d.apps.googleusercontent.com',
        clientSecret: 'XvkT4t3F4HuWd_hkm8CQ9ZhN',
        jwt:{
            encryption: true
        },
        callbacks: {
            async jwt({ token, account }) {
              console.log(account);
            //   if (account.provider === "google") {
            //     console.log(profile.email);
            //     return profile.email_verified && profile.email.endsWith("@uniriotec.br")
            //   }
            //   return true // Do different verification for other providers that don't have `email_verified`
            },
          },
    })
  ],
}
export default NextAuth(authOptions)