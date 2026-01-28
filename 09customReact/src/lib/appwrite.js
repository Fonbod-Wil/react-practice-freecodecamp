import { Client, Databases, ID, Query } from 'appwrite'

/**
 * Appwrite Client Configuration
 * 
 * This module initializes the Appwrite client and provides database services.
 * 
 * Setup Instructions:
 * 1. Create an Appwrite project at https://cloud.appwrite.io (or use self-hosted)
 * 2. Get your Project ID and API Endpoint from the Appwrite dashboard
 * 3. Create a Database and Collection in Appwrite
 * 4. Set up environment variables (see .env.example)
 * 
 * For PostgreSQL:
 * - Appwrite supports PostgreSQL through its Database API
 * - You can connect PostgreSQL as a data source in Appwrite
 * - Or use Appwrite's built-in database (which uses PostgreSQL under the hood)
 */

// Get configuration from environment variables
// In production, these should be set via environment variables
// For development, you can create a .env file (don't commit it!)
const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1'
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID || ''
const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || ''
const APPWRITE_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID || ''

// Initialize Appwrite Client
export const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID)

// Initialize Database service
export const databases = new Databases(client)

// Export commonly used utilities
export { ID, Query }

// Export configuration (useful for debugging)
export const config = {
  endpoint: APPWRITE_ENDPOINT,
  projectId: APPWRITE_PROJECT_ID,
  databaseId: APPWRITE_DATABASE_ID,
  collectionId: APPWRITE_COLLECTION_ID,
}
