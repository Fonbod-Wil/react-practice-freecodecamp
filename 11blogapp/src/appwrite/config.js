import conf from '../conf/conf'
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {

    client = new Client();
    databases;
    storage;
    queries;
    buckets;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
        this.queries = new Query(this.client);
        this.buckets = new Storage(this.client);
    }
     async getPost(slug){
      return await this.databases.getDocument(
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId, 
        slug)  
     }


   async getPosts(queries = [ Query.equal("status", "active")]){
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId, 
        queries)
      
     }

     async createPost({title, slug, content, 
        status, userId, featuredImage}){
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                {
                    title,
                    slug,
                    content,
                    status,
                    userId,
                    featuredImage
                }
            );
            return post;
        }

         async updatePost({title, slug, content, 
            status, userId, featureedImage}){
                const post = await this.databases.updateDocument(
                    conf.appwriteDatabaseId, 
                    conf.appwriteCollectionId, 
                    slug, 
                    {
                        title,
                        slug,
                        content,
                        status,
                        userId,
                        featureedImage
                    }
                );
                return post;
            }

             async deletePost(slug){
                 await this.databases.deleteDocument(
                    conf.appwriteDatabaseId, 
                    conf.appwriteCollectionId, 
                    slug,
                    )
                    return true;

                
            }

            //storage service 
            async uploadFile(file){
                return await this.buckets.createFile(
                    conf.appwriteBucketId, 
                    ID, 
                    file, 
                    
                );
            }

            async deleteFile(fileId){
                return await this.buckets.deleteFile(
                    conf.appwriteBucketId, 
                    fileId
                );
            }
            getFilePreview(fileId){
                return this.buckets.getFilePreview(conf.appwriteBucketId,
                     fileId

                    ).href;
            }

        }

        export const service = new Service();
        


