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

// Function to list all blogs
export async function listAllBlog(): Promise<{ documents: BlogDocument[] }> {
  try {
    const response = await databases.listDocuments(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
    );
    return response as { documents: BlogDocument[] };
  } catch (error) {
    console.error("Error listing blogs:", error);
    throw error;
  }
}

// Function to list all items
export async function listAllItems(): Promise<{
  documents: SectionDocument[];
}> {
  try {
    const response = await databases.listDocuments(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
    );
    return response as { documents: SectionDocument[] }; // Type assertion
  } catch (error) {
    console.error("Error listing items:", error);
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
        Pagesections: [], // Initialize the Pagesections array
      },
      ['read("any")'],
    );
    console.log("Blog document created successfully:", result);
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
        pageSections: [], // Initialize according to your schema
      },
      ['read("any")'],
    );
    console.log("Section document created successfully:", result);
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
    console.log("Item document created successfully:", result);
    return result.$id;
  } catch (error) {
    console.error("Error creating item document:", error);
    throw error;
  }
}

// Function to update a blog document
export async function updateBlogSections(blogId: string, sectionIds: string[]) {
  try {
    const currentBlogDoc = await getBlogDocument(blogId);
    const currentSections = currentBlogDoc.Pagesections || [];

    const updatedSections = Array.from(
      new Set([...currentSections, ...sectionIds]),
    );

    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
      blogId,
      { Pagesections: updatedSections },
    );

    console.log("Blog updated successfully with new sections.");
  } catch (error) {
    console.error("Error updating blog document:", error);
    throw error; // Ensure errors are propagated
  }
}

// Function to update a section document with new item IDs
export async function updateSectionDoc(
  sectionId: string,
  itemId: string,
): Promise<void> {
  try {
    const sectionDoc = (await getSectionDocument(sectionId)) as SectionDocument;
    const updatedItemIds = sectionDoc.pageSections || [];
    updatedItemIds.push(itemId);

    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      sectionId,
      { pageSections: updatedItemIds },
    );
    console.log("Section document updated successfully.");
  } catch (error) {
    console.error("Error updating section document:", error);
    throw error;
  }
}

// Function to update a section document with new item details
export async function updateItemDoc(
  sectionId: string,
  itemId: string,
  type: string,
  content?: string,
  imageURL?: string,
): Promise<void> {
  try {
    const sectionDoc = (await getSectionDocument(sectionId)) as SectionDocument;
    console.log("Current section document:", sectionDoc);

    const updatedPageSections = sectionDoc.pageSections || [];
    const existingItemIndex = updatedPageSections.findIndex(
      (section: ItemDocument) => section.$id === itemId, // Use $id for consistency
    );

    if (existingItemIndex > -1) {
      updatedPageSections[existingItemIndex] = {
        ...updatedPageSections[existingItemIndex],
        type,
        content: content || updatedPageSections[existingItemIndex].content,
        imageURL: imageURL
          ? [imageURL]
          : updatedPageSections[existingItemIndex].imageURL || [],
      };
    } else {
      updatedPageSections.push({
        type,
        content,
        imageURL: imageURL ? [imageURL] : [],
      });
    }

    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      sectionId,
      { pageSections: updatedPageSections },
    );

    console.log("Section document updated successfully.");
  } catch (error) {
    console.error("Error updating section document:", error);
    throw error;
  }
}

// Function to get a specific blog document
export async function getBlogDocument(id: string): Promise<BlogDocument> {
  try {
    const response = await databases.getDocument(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
      id,
    );
    return response as BlogDocument;
  } catch (error: any) {
    if (error.code === 404) {
      console.error("Blog document not found:", error);
      throw new Error("Blog document not found.");
    }
    console.error("Error getting blog document:", error);
    throw error;
  }
}

// Function to get a specific section document
export async function getSectionDocument(id: string): Promise<SectionDocument> {
  try {
    const response = await databases.getDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      id,
    );
    return response as SectionDocument; // Type assertion
  } catch (error) {
    console.error("Error getting section document:", error);
    throw error;
  }
}

// Function to get a specific item document
export async function getItemDocument(id: string): Promise<ItemDocument> {
  try {
    const response = await databases.getDocument(
      appWriteConfig.databasesId,
      appWriteConfig.itemCollectionId,
      id,
    );
    return response as ItemDocument; // Type assertion
  } catch (error: any) {
    if (error.code === 404) {
      console.error(`Item with ID ${id} not found.`);
      throw new Error(`Item with ID ${id} not found.`);
    } else {
      console.error("Error getting item document:", error);
      throw error;
    }
  }
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
    console.log("Login successful:", result);
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
