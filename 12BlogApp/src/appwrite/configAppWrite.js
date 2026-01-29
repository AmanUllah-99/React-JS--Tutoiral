import conf from '../conf/conf'
import { Client, ID, Storage, TablesDB, Query } from 'appwrite'

export class DatabaseService {

    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.databases = new TablesDB(this.client)
        this.storage = new Storage(this.client)
    }

    ///////////////////////// In Create Post Session 
    async createPost({ title, slug, content, userId, status, featureImage }) {
        try {
            return await this.databases.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
                {
                    title,
                    content,
                    userId,
                    status,
                    featureImage,

                }
            )

        } catch (error) {
            console.error('appWrite Server:: createPost error::', error)
            throw error

        }

    }

    /////////////////////// In Update Post Session/////////////////////////////
    async updatePost(slug, { title, content, userId, status, featureImage }) {
        try {
            return await this.databases.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
                {
                    title,
                    content,
                    userId,
                    status,
                    featureImage,
                }
            )
        } catch (error) {
            console.error('appWrite Server:: updatePost error::', error)
            throw error

        }
    }
    /////////////////////// In Delete Post Session////////////////////////

    async deletePost(slug) {

        try {
            await this.databases.deleteRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )
            return true

        } catch (error) {
            console.error('appWrite Server:: deletePost error::', error)
            throw error


        }
    }

    ////////////////////////// Get Only One Post   in This Session///////////////////
    async getPost(slug) {
        try {
            return await this.databases.getRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )

        } catch (error) {
            console.error('appWrite Server:: getPost error::', error)
            throw error

        }
    }

    ////////////////////////// Get all active Post////////////////////

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listRows(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                queries,
            )

        } catch (error) {
            console.error('appWrite Server:: getPosts error::', error)
            throw error

        }
    }

    /////////////////////// File Uploaded  And  Stroage/////////////////////

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file

            )

        } catch (error) {
            console.error('appWrite Server:: uploadFile error::', error)
            throw error

        }

    }

    ///////////////////////////////// Delete File And Stroage/////////

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )

        } catch (error) {
            console.error('appWrite Server::  deleteFile error::', error)
            throw error

        }
    }

    //////////////////////////////// File Prewiew And Stroage////////////

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    //////////////////////////////////////// File Download And Stroage/////////

    getFileDownload(fileId) {
        return this.storage.getFileDownload(
            conf.appwriteBucketId,
            fileId
        )

    }


}


const databaseService = new DatabaseService();


export default databaseService