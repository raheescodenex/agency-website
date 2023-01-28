import { blogData } from "../../../Data/blogData";
export default async function handler(req,res){
    
    res.status(200).json(blogData);

}
