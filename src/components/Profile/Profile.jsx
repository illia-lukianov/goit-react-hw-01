import styles from './Profile.module.css'

export default function Profile({ userInfo: {username, tag, location, avatar, stats: {followers, views, likes} } }) {
    return (
    <div className={styles.profileContainer}>
        <div className={styles.profileMainPart}>
            <img
                src={avatar}
                alt={username}
                className={styles.profileImg}
            />
            <p className={styles.profileUsername}>{username}</p>
            <p className={styles.profileInfo}>@{tag}</p>
            <p className={styles.profileInfo}>{location}</p>
        </div>

        <ul className={styles.profileStatistic}>
            <li className={styles.statisticItem}>
                <span className={styles.statisticItemSubtitle}>Followers</span>
                <span className={styles.statisticRes}>{followers}</span>
            </li>
            <li className={styles.statisticItem}>
                <span className={styles.statisticItemSubtitle}>Views</span>
                <span className={styles.statisticRes}>{views}</span>
            </li>
            <li className={styles.statisticItem}>
                <span className={styles.statisticItemSubtitle}>Likes</span>
                <span className={styles.statisticRes}>{likes}</span>
            </li>
        </ul>
    </div>
)}