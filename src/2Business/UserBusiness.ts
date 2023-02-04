import { UserDataBase } from "../3Data/UserDataBase";
import { user } from "../Model/user";
import { generateID } from "../Services/generatorID";


export class UserBusiness{
  
    public registerBusiness = async(input: user )=>{
      const {name, email, password} = input 

      if(!name || !email || !password){
        throw new Error("Aconteceu um erro! Voce precisa passar o Nome, Email e password para cadastro");}
        
        const id = generateID()

        await new UserDataBase().registerData({id, name, email, password})
      }
    } 