
import FriendListItem from './FriendListItem/FriendListItem'; // Шлях до вашого компонента FriendListItem

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

export default FriendList;
