import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import PropTypes from 'prop-types';
// import user from '../../data/user.json';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
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

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
