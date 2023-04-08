import PropTypes from "prop-types";
import css from "./user.module.css"

export const User = ({username, avatar, tag, location}) => {
    return   <div className={css.wrapper}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.img}
    />
    <p className={css.title}>{username}</p>
    <p className={css.text}>{tag}</p>
    <p className={css.text}>{location}</p>
  </div>
   
}

User.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}