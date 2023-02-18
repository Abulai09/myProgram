import image from './images.jpg'

const Profile = (props) => {
  return (
    <div>
      <img src={image} alt="ava" />
      <h2>{props.profile.fullName}</h2>
      <p>status:{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "Not spacified"}</p>
    </div>
  )
}

export default Profile