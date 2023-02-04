import { PostDTO } from "../Model/createPostDTO";
import { BaseDataBase } from "./BaseDataBase";
import { UserDataBase } from "./UserDataBase";


export class PostDataBase extends BaseDataBase{
  public postCreateData = async (post:any) => { 
  
    try {
    UserDataBase.connection.initialize()
    await UserDataBase.connection("labook_posts")
      .insert({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        id_post: post.idPost
    })
  
  } catch (error: any){
    throw new Error(error.message);

  }finally{
    console.log("Conexão Finalizada");
    UserDataBase.connection.destroy();
  }
}

public getIdData = async(id: string)=>{
  try {
    UserDataBase.connection.initialize();
    const result = await UserDataBase.connection("labook_posts")
    .select("*")
    .where({id})
    return result 

  } catch (error: any){ 
    throw new Error(error.message);
    
  }finally{
     console.log("Conexão encerrada!")
      UserDataBase.connection.destroy()
    }
  }
}