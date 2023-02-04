import { PostDataBase } from "../3Data/PostDataBase";
import { generateID } from "../Services/generatorID";


export class PostBusiness{
  public postCreateBusiness = async(input: any)=>{
    const {photo, description, type, idPost} = input;
    
    const id: string = generateID()

    await new PostDataBase().postCreateData({ 
      id,
      photo,
      description,
      type,
      idPost
    })
  }

  public getIdPost = async(id: string) =>{
    const result = await new PostDataBase().getIdData(id)
    return result
}
}