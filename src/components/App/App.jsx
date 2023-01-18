import { Profile } from 'components/Profile/Profile';
import { Fragment } from 'react';

import user from '../../data/user.json';
// console.log(user);

export const App = () => {
  return <Profile user={user} />;
};

// username={user.username}
// tag={user.tag}
// location={user.location}
// avatar={user.avatar}
// stats={user.stats}
