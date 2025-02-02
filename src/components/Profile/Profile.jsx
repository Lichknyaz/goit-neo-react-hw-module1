import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css["wrapper"]}>
      <div className={css["avatar-header"]}>
        <img className={css["avatar"]} src={image} alt="User avatar" />
        <p className={css["username"]}>{name}</p>
        <p className={css["avatar-text"]}>@p{tag}</p>
        <p className={css["avatar-text"]}>{location}</p>
      </div>

      <ul className={css["stats-list"]}>
        <li>
          <span className={css["stats-text"]}>Followers</span>
          <span className={css["stats-value"]}>{followers}</span>
        </li>
        <li>
          <span className={css["stats-text"]}>Views</span>
          <span className={css["stats-value"]}>{views}</span>
        </li>
        <li>
          <span className={css["stats-text"]}>Likes</span>
          <span className={css["stats-value"]}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
