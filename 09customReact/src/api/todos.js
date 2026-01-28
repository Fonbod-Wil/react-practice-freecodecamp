import { databases, ID, Query, config } from '../lib/appwrite'

function requireConfig() {
  const missing = []
  if (!config.projectId) missing.push('VITE_APPWRITE_PROJECT_ID')
  if (!config.databaseId) missing.push('VITE_APPWRITE_DATABASE_ID')
  if (!config.collectionId) missing.push('VITE_APPWRITE_COLLECTION_ID')
  if (missing.length) {
    throw new Error(`Missing Appwrite config: ${missing.join(', ')}`)
  }
}

function mapTodo(doc) {
  return {
    id: doc.$id,
    title: doc.title ?? '',
    completed: Boolean(doc.completed),
    createdAt: doc.$createdAt,
  }
}

export async function listTodos() {
  requireConfig()
  const res = await databases.listDocuments(
    config.databaseId,
    config.collectionId,
    [Query.orderDesc('$createdAt'), Query.limit(50)],
  )
  return res.documents.map(mapTodo)
}

export async function createTodo({ title }) {
  requireConfig()
  const doc = await databases.createDocument(
    config.databaseId,
    config.collectionId,
    ID.unique(),
    { title, completed: false },
  )
  return mapTodo(doc)
}

export async function updateTodo(id, patch) {
  requireConfig()
  const doc = await databases.updateDocument(
    config.databaseId,
    config.collectionId,
    id,
    patch,
  )
  return mapTodo(doc)
}

