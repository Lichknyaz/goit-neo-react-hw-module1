import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendsList.module.css";

function FriendsList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendsList;
