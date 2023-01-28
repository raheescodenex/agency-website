
import { blogData } from "../../../Data/blogData";
const handler = async(req,res)=>{

const {blogid}=req.query;
if (req.method === "GET") {
  const post = blogData.find(
    (post) => post.id === parseInt(blogid)
  );
  res.status(200).json(post);
}

}
export default handler;