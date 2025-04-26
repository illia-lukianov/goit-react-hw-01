import './App.css'
import userData from '../../data/userData.json'
import friendsData from '../../data/friendsData.json'
import transactionData from '../../data/transactionData.json'
import Profile from '../Profile/Profile.jsx'
import FriendList from '../FriendList/FriendList.jsx'
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx'

function App() {
  return (
    <>
      <Profile userInfo={userData} />
      <FriendList friendsInfo={friendsData} />
      <TransactionHistory TransactionHistory={transactionData} />
    </>
  )  
}

export default App
