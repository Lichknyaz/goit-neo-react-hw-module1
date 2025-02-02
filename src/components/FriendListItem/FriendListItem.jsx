import css from "./FriendListItem.module.css";
import clsx from "clsx";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img className={css.image} src={avatar} alt="Avatar" width="40" />
      <p className={css.username}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
