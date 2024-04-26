import { Client, Databases } from "appwrite";

export const appWriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databasesId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  blogCollectionId: import.meta.env.VITE_APPWRITE_COL_BLOG_ID,
  itemCollectionId: import.meta.env.VITE_APPWRITE_COL_ITEM_ID,
  sectionCollectionId: import.meta.env.VITE_APPWRITE_COL_SECTIONS_ID,
};
export const client = new Client();
client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.url);

const databases = new Databases(client);

//This returns a list of blogs
export async function listAllBlog() {
  const response = await databases.listDocuments(
    appWriteConfig.databasesId,
    appWriteConfig.blogCollectionId,
  );
  console.log(response); // Add this line to verify the response
  return response;
}

//This returns a specific blog from its id
export async function getBlogDocument(id: string) {
  const response = await databases.getDocument(
    appWriteConfig.databasesId,
    appWriteConfig.blogCollectionId,
    id,
  );
  return response;
}

//this returns a specific section from its id
export async function getSectionDocument(id: string) {
  const response = await databases.getDocument(
    appWriteConfig.databasesId,
    appWriteConfig.sectionCollectionId,
    id,
  );
  return response;
}

//This gets a specific item document from its id
export async function getItemDocument(id: string) {
  const response = await databases.getDocument(
    appWriteConfig.databasesId,
    appWriteConfig.itemCollectionId,
    id,
  );
  return response;
}
