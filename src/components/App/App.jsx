import './App.css'
import userData from '../../data/userData.json'
import friendsData from '../../data/friendsData.json'
import Profile from '../Profile/Profile.jsx'
import FriendList from '../FriendList/FriendList.jsx'

function App() {
  return (
    <>
      <Profile userInfo={userData} />
      <FriendList friendsInfo={friendsData} />
    </>  
  )
}

export default App
