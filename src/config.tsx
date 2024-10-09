import { Client, Databases, ID, Account } from "appwrite";

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
};

// Initialize the Appwrite client
const client = new Client();
client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.url);

export const account = new Account(client);
const databases = new Databases(client);

// Function to list all blogs
export async function listAllBlog() {
  try {
    const response = await databases.listDocuments(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
    );
    return response;
  } catch (error) {
    console.error("Error listing blogs:", error);
    throw error; // Ensure errors are propagated
  }
}

// Function to list all Items
export async function listAllitems() {
  try {
    const response = await databases.listDocuments(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
    );
    return response;
  } catch (error) {
    console.error("Error listing blogs:", error);
    throw error; // Ensure errors are propagated
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
        title: title,
        overview: overview,
        created: new Date().toISOString(),
        Pagesections: [], // Initialize the Pagesections array
      },
      ['read("any")'],
    );
    console.log("Blog document created successfully:", result);
    return result.$id;
  } catch (error) {
    console.error("Error creating blog document:", error);
    throw error; // Ensure errors are propagated
  }
}

// Function to create a new section document with a title
export async function createSectionDoc(): Promise<string> {
  try {
    const result = await databases.createDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      ID.unique(),
      {
        pageSections: [], // Initialize this according to your schema
      },
      ['read("any")'],
    );
    console.log("Section document created successfully:", result);
    return result.$id; // Return the document ID
  } catch (error) {
    console.error("Error creating section document:", error);
    throw error; // Ensure errors are propagated
  }
}

// Function to create a new item document
export async function createItemDoc(
  itemType: string,
  content?: string, // Optional alt text for image
): Promise<string> {
  try {
    const result = await databases.createDocument(
      appWriteConfig.databasesId,
      appWriteConfig.itemCollectionId,
      ID.unique(),
      {
        type: itemType,
        content: content, // Include content if applicable
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
    const currentSections = currentBlogDoc.Pagesections || []; // Safely get current sections

    // Combine current sections with new ones, ensuring unique IDs
    const updatedSections = Array.from(
      new Set([...currentSections, ...sectionIds]),
    );

    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
      blogId,
      {
        Pagesections: updatedSections, // Update with the combined array of section IDs
      },
    );

    console.log("Blog updated successfully with new sections.");
  } catch (error) {
    console.error("Error updating blog document:", error);
  }
}

export async function updateSectionDoc(
  sectionId: string,
  itemId: string,
): Promise<void> {
  try {
    const sectionDoc = await getSectionDocument(sectionId);
    const updatedItemIds = sectionDoc.pageSections || []; // Use pageSections instead of items
    updatedItemIds.push(itemId); // Add the new item ID

    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      sectionId,
      {
        pageSections: updatedItemIds, // Update the correct field
      },
    );
    console.log("Section document updated successfully.");
  } catch (error) {
    console.error("Error updating section document:", error);
    throw error; // Ensure errors are propagated
  }
}

// Function to update a section document with new item IDs
export async function updateItemDoc(
  sectionId: string,
  itemId: string,
): Promise<void> {
  try {
    const sectionDoc = await getSectionDocument(sectionId);
    const updatedItemIds = sectionDoc.items || [];

    // Check if itemId already exists; if not, add it
    if (!updatedItemIds.includes(itemId)) {
      updatedItemIds.push(itemId); // Add the new item ID if it's not already in the array
    }

    await databases.updateDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      sectionId,
      {
        items: updatedItemIds, // Update with the array of item IDs
      },
    );

    console.log("Section document updated successfully.");
  } catch (error) {
    console.error("Error updating section document:", error);
    throw error; // Ensure errors are propagated
  }
}

// Function to get a specific blog document
export async function getBlogDocument(id: string) {
  try {
    const response = await databases.getDocument(
      appWriteConfig.databasesId,
      appWriteConfig.blogCollectionId,
      id,
    );
    return response;
  } catch (error) {
    if (error.code === 404) {
      console.error("Blog document not found:", error);
      throw new Error("Blog document not found. Please check the ID.");
    }
    console.error("Error getting blog document:", error);
    throw error; // Propagate other errors
  }
}

// Function to get a specific section document
export async function getSectionDocument(id: string) {
  try {
    const response = await databases.getDocument(
      appWriteConfig.databasesId,
      appWriteConfig.sectionCollectionId,
      id,
    );
    return response;
  } catch (error) {
    console.error("Error getting section document:", error);
    throw error; // Ensure errors are propagated
  }
}

// Function to get a specific item document
export async function getItemDocument(id: string) {
  try {
    const response = await databases.getDocument(
      appWriteConfig.databasesId,
      appWriteConfig.itemCollectionId,
      id,
    );
    return response;
  } catch (error) {
    if (error.code === 404) {
      console.error(`Item with ID ${id} not found.`);
    } else {
      console.error("Error getting item document:", error);
    }
    throw error; // Ensure errors are propagated
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
    throw error; // Ensure errors are propagated
  }
}
