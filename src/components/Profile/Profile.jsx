import user from "./user.json"
import { User } from "./User/User";
import { Data } from "./Data/Data";
import css from "./profile.module.css"

export const Profile = () => {
    return <div className ={css.wrapper}>
        <User 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          />
        <Data
         stats={user.stats}
        />

    </div>
}
