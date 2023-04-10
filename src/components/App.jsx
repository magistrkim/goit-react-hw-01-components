import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';


export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList friends={friends}/>
    </>
  );
};
