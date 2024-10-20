import { Client, Databases, ID, Account, Storage } from "appwrite";
import { BlogDocument, SectionDocument, ItemDocument } from "./types";

// Appwrite configuration
export const appWriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_OVERVIEW_ID,
  databasesId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  blogCollectionId: import.meta.env.VITE_APPWRITE_COL_BLOG_ID,
  itemCollectionId: import.meta.env.VITE_APPWRITE_COL_ITEM_ID,
  sectionCollectionId: import.meta.env.VITE_APPWRITE_COL_SECTIONS_ID,
  projectsCollectionId: import.meta.env.VITE_APPWRITE_COL_PROJECTS_ID,
  devSessionKey: import.meta.env.VITE_APPWRITE_DEV_KEY,
  portfolioBucketId: import.meta.env.VITE_APPWRITE_PORTFOLIO_BUCKET_ID,
};

// Initialize the Appwrite client
const client = new Client();
client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.url);

const storage = new Storage(client);
export const account = new Account(client);
const databases = new Databases(client);

// Generic function to handle document retrieval
async function getDocument<T>(collectionId: string, id: string): Promise<T> {
  try {
    const response = await databases.getDocument(
      appWriteConfig.databasesId,
      collectionId,
      id,
    );
    return response as T;
  } catch (error: any) {
    if (error.code === 404) {
      throw new Error(`${collectionId} document not found: ${id}`);
    }
    throw error;
  }
}

// Function to list all blogs
export async function listAllBlog(): Promise<{ documents: BlogDocument[] }> {
  try {
    const response = await databases.listDocuments(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
    );
    return {
      documents: response.documents as BlogDocument[],
    };
  } catch (error) {
    console.error("Error listing blogs:", error);
    throw error;
  }
}

// Function to list all sections
export async function listAllSections(): Promise<{
  documents: SectionDocument[];
}> {
  try {
    const response = await databases.listDocuments(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
    );
    return {
      documents: response.documents as SectionDocument[],
    };
  } catch (error) {
    console.error("Error listing sections:", error);
    throw error;
  }
}

// Function to create a new blog document
export async function createBlogDoc(
  title: string,
  overview: string,
): Promise<string> {
  try {
    const result = await databases.createDocument(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
      ID.unique(),
      {
        title,
        overview,
        created: new Date().toISOString(),
        Pagesections: [],
      },
      ['read("any")'],
    );
    return result.$id;
  } catch (error) {
    console.error("Error creating blog document:", error);
    throw error;
  }
}

// Function to create a new section document
export async function createSectionDoc(): Promise<string> {
  try {
    const result = await databases.createDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      ID.unique(),
      {
        pageSections: [],
      },
      ['read("any")'],
    );
    return result.$id;
  } catch (error) {
    console.error("Error creating section document:", error);
    throw error;
  }
}

// Function to create a new item document
export async function createItemDoc(
  itemType: string,
  content?: string,
  imageURL?: string,
): Promise<string> {
  try {
    const result = await databases.createDocument(
      appWriteConfig.databasesId,
      appWriteConfig.itemCollectionId,
      ID.unique(),
      {
        type: itemType,
        content,
        imageURL: imageURL ? [imageURL] : [],
      },
      ['read("any")'],
    );
    return result.$id;
  } catch (error) {
    console.error("Error creating item document:", error);
    throw error;
  }
}

// Function to update a blog document
export async function updateBlogSections(blogId: string, sectionIds: string[]) {
  try {
    const currentBlogDoc = await getDocument<BlogDocument>(
      appWriteConfig.blogCollectionId,
      blogId,
    );
    const updatedSections = Array.from(
      new Set([...(currentBlogDoc.Pagesections || []), ...sectionIds]),
    );
    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
      blogId,
      { Pagesections: updatedSections },
    );
  } catch (error) {
    console.error("Error updating blog document:", error);
    throw error;
  }
}

// Function to update a section document with new item IDs
export async function updateSectionDoc(
  sectionId: string,
  itemId: string,
): Promise<void> {
  try {
    const sectionDoc = await getDocument<SectionDocument>(
      appWriteConfig.sectionCollectionId,
      sectionId,
    );
    const updatedItemIds = [...(sectionDoc.pageSections || []), itemId];
    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      sectionId,
      { pageSections: updatedItemIds },
    );
  } catch (error) {
    console.error("Error updating section document:", error);
    throw error;
  }
}

// Function to get a specific blog document
export async function getBlogDocument(id: string): Promise<BlogDocument> {
  return await getDocument<BlogDocument>(appWriteConfig.blogCollectionId, id);
}

// Function to get a specific section document
export async function getSectionDocument(id: string): Promise<SectionDocument> {
  return await getDocument<SectionDocument>(
    appWriteConfig.sectionCollectionId,
    id,
  );
}

// Function to get a specific item document
export async function getItemDocument(id: string): Promise<ItemDocument> {
  return await getDocument<ItemDocument>(appWriteConfig.itemCollectionId, id);
}

// Function to log in with just a password
export async function logAdminIn() {
  const adminEmail = import.meta.env.VITE_APPWRITE_ADMIN_EMAIL;
  const password = prompt("Enter your password:");
  if (!password) {
    throw new Error("Password is required.");
  }
  return await loginUser(adminEmail, password);
}

// Function to log in user with email and password
export async function loginUser(email: string, password: string) {
  try {
    const result = await account.createEmailPasswordSession(email, password);
    return result;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

// Function to fetch image details
export async function fetchImage(bucketId: string, fileId: string) {
  try {
    const file = await storage.getFile(bucketId, fileId);
    return file; // This includes the URL and other metadata
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
}
