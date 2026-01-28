import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

       async createAccount({email, password, name}){
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            
            if(userAccount){
                return this.login({email, password})
            } else {
                return userAccount;
            }
       }
       async login({email, password}){
           return await this.account.createEmailSession(email, password);
       }
       async logout(){
           return await this.account.deleteSessions('current');
       }
       async getAccount(){
           return await this.account.get();
       }
       async updateAccount(){
           return await this.account.update();
       }
       async deleteAccount(){
           return await this.account.delete();
       }
       async getSession(){
           return await this.account.getSession();
       }
       async getCurrentUser(){
           return await this.account.get();
       }

    }

const authService = new AuthService();

export default authService;