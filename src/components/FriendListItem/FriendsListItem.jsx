import styles from './FriendListItem.module.css'

export default function FriendListItem({ info: { avatar, id, name, isOnline} }) {
    return (    
    <div className={styles.friendItem} key={id}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.friendName}>{name}</p>
        {isOnline? <p className={styles.friendIsOnline}>Online</p> : <p className={styles.friendIsOffline}>Offline</p> }
    </div>
    )
}