import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={css.container}>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
    </div>
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
  }).isRequired,
};
