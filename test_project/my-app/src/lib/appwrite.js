import { Client, Account, OAuthProvider } from "appwrite";
export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1/")
  .setProject("6729adbd00320ad7313f");

export const account = new Account(client);
export { ID } from "appwrite";

export default async function loginWithGoogle() {
  await account.createOAuth2Session(OAuthProvider.Google, "https://google.com");
}
