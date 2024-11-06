// src/appwrite.js
import { Client, Account, OAuthProvider } from 'appwrite'

const client = new Client()
client
  .setEndpoint('http://cloud.appwrite.io/v1') 
  .setProject('67299ea90034d16f34e5') 

export const account = new Account(client)
export { OAuthProvider }
