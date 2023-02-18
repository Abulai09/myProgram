import Paginator from './paginator'
import images from './images.jpg'
import { Link } from 'react-router-dom'

const Users = (props) => {

  return(
    <div>
      <Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}/>
      {
        props.users.map( u => <div key={u.id}>
          { u.photos.large ? <Link to={"/"+u.id}><img src={ u.photos.small} alt="ava" srcset="" /></Link> : <Link to={'/'+u.id}><img src={ images } alt="ava" srcset="" /></Link> }
          <h3>{u.name}</h3>
          { u.followed ? <button onClick={()=>props.UnFollowThunk(u.id)}>Unfollow</button> : <button onClick={()=>props.FollowThunk(u.id)}>Follow</button> }
        </div> )
      }
    </div>
  )
}

export default Users