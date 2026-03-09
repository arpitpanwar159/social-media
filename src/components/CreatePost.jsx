
import { Form, redirect } from "react-router-dom";

const CreatePost=(data)=>{

  return(
    <>
    <Form method="POST" className="create-post" >
      <div className="mb-3">
    <label htmlFor="UserId"  className="form-label"> UserId</label>
    <input type="text" name="userId" className="form-control" id="UserId" placeholder="Enter your UserIds"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text"name="title" className="form-control" id="title" placeholder="How are feeling today..."/>
    
  </div>
   <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" name="body" className="form-control" id="postBody" placeholder="Tell me  more about it."/>
    
  </div>
   <div className="mb-3">
    <label htmlFor="reactions" className="form-label"> Number of Reactions</label>
    <input type="text" name="reactions" className="form-control" id="reactions" placeholder="How many people reacted this post"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label"> Enter your hashtags here</label>
    <input type="text" name="tags" className="form-control" id="tags" placeholder="Please enter tags using space"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Post  </button>
</Form>
</>
  )
}
export const createPostAction=async(data)=>{
  const formData=await data.request.formData()
const postData=Object.fromEntries(formData)
postData.tags=postData.tags.split(" ")
const res = await fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData)
})
.then(res => res.json())
.then((posts)=>{
  
}); 

return redirect("/");

}
export default CreatePost;