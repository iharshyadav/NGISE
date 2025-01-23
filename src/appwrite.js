import { Client, Storage, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_REACT_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_REACT_APPWRITE_PROJECT_ID);

export const storage = new Storage(client); 
