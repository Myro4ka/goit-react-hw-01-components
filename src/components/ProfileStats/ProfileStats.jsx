import { Fragment } from 'react';

export const ProfileStats = ({ stats }) => {
  const { followers, views, likes } = stats;
  console.log(stats);
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
};
