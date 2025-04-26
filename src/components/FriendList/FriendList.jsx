import FriendListItem from '../FriendListItem/FriendsListItem'
import styles from './FriendList.module.css'

export default function FriendList({ friendsInfo }) {    
    return (
        <div className={styles.friendsContainer}>
            {friendsInfo.map((friendInfo) =>
            <FriendListItem key={friendInfo.id} info={friendInfo} />)}
        </div>
        )
}