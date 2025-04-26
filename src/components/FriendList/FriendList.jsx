import './FriendList.css'

export default function FriendList({friendsInfo: {avatar, name, isOnline, id}}) {
    return (<div>
  <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{ isOnline}</p>
    </div>
    )
}