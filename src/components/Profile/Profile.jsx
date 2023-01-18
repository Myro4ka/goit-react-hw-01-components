import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';

import user from '../../data/user.json';
console.log(user);

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  console.log(stats);

  return (
    <>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
    </>
  );
};
