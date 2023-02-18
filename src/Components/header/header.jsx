
import { Button } from 'antd';

const Header = (props) => {
  return(
    <div>
      { props.isAuth &&     <Button onClick={props.logOut}>logout</Button>
 }
      <h1>{props.email}</h1>
    </div>
  )
}

export default Header