import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


/////////////////////// Class And Constructor

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }
    ///////////////////////////   In  Users Account Session
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                /////call another method
                return this.userLogin({ email, password });

            } else {
                return userAccount;
            }

        } catch (error) {
            console.error(' Appwirte Service :  createAccount failed:', error);
            throw error

        }
    }


    ///////////////////////  In Login Session
    async userLogin({ email, password }) {
        try {

            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error('  Appwirte Service :  userLogin Failed:', error);
            throw error


        }
    }

    //////////////////// Get Current Logged-in User

    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            console.error(' Appwirte Service :  getCurrentUser error  :', error);
            throw error

        }

    };

    ///////////////////////// In User Logged-out  Session

    async userLogout() {
        try {
            return await this.account.deleteSessions();

        } catch (error) {
            console.error(' Appwirte Service :  logout  error:', error);
            throw error
        }
    }

    /////////////////////// Update User Password

    async updateUserPassword(newPassword, oldPassword) {

        try {
            return await this.account.updatePassword(newPassword, oldPassword)

        } catch (error) {
            console.error('appwrite Service :: updateUserPassword:: ', error);

            throw error;


        }


    }

}




///// create a object to store above class. 
const authService = new AuthService();

/////////////// Exporting

export default authService