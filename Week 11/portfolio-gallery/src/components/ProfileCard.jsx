function ProfileCard({
  name,
  role,
  email,
  avatarUrl = 'https://via.placeholder.com/80'
}) {
  return (
    <article className="profile-card">
      <img className="profile-card__avatar" src={avatarUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{role}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </article>
  );
}

export default ProfileCard;
