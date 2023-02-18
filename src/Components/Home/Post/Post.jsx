import { Field, reduxForm } from "redux-form"
import { maxLength, required } from "../../../utils/validate"
import Input from "../../Input/Input"


let maxLength50 = maxLength(50)

const PostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field validate={[required,maxLength50]} name="Postinput" component={Input} type="text" />
      <button>send</button> 
    </form>
  )
}

const PostFormRdx = reduxForm({form:'post'})(PostForm)

const Post = (props) => {
  let posts = [...props.posts].reverse().map( p => <p>{p.post}</p> )

  let addPost = (value) => {
    props.addPostAC(value.Postinput)
    value.Postinput=""
  }

  return (
    <div>
      <PostFormRdx onSubmit={addPost}/>
      {posts}
    </div>
  )
}

export default Post