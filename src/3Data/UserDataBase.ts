import { user } from "../Model/user";
import {BaseDataBase} from "./BaseDataBase"


  export class UserDataBase extends BaseDataBase{

  public registerData = async (user: user) =>{
    try {
      UserDataBase.connection.initialize()
      await UserDataBase.connection("labook_posts")
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
    } catch (error: any) {
        throw new Error(error.message);
      
    }finally{
      console.log("Conexão Encerrada");
      UserDataBase.connection.destroy();
    }
  }
}