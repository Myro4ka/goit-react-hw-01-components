export const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
    <>
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </>
  );
};
