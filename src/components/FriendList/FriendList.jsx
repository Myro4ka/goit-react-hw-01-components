import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, ...rest }) => {
        return <FriendListItem key={id} {...rest} />;
      })}
    </ul>
  );
};
