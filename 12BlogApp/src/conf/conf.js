// const conf = {

//     appwriteURL :String(import.meta.env.VITE_APPWRITE_URL),
//     appwriteProjectId :String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDataBaseId :String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteurlCollectionId :String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBucketId :String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// }


// export default conf

const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID), // was collection
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf