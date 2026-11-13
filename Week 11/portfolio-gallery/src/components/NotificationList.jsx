const notifications = [
  { id: 1, type: 'success', message: 'Profile updated successfully' },
  { id: 2, type: 'warning', message: 'Password expires in 3 days' },
  { id: 3, type: 'info', message: 'New lecture materials available' }
];

function NotificationItem({ type, message }) {
  const icon = type === 'success'
    ? '✅'
    : type === 'warning'
      ? '⚠️'
      : 'ℹ️';
  const label = type === 'success'
    ? 'Success'
    : type === 'warning'
      ? 'Warning'
      : 'Information';

  return (
    <li className={`notification notification--${type}`}>
      <span className="notification__icon" role="img" aria-label={label}>{icon}</span>
      <span>{message}</span>
    </li>
  );
}

function NotificationList() {
  return (
    <ul className="notification-list">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          message={notification.message}
        />
      ))}
    </ul>
  );
}

export default NotificationList;
