import React, { useState, useEffect } from 'react';
import notificationsData from '../MocData/notifications.json';
import { Alert } from 'react-bootstrap';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Load notifications on component mount
    setNotifications(notificationsData);
  }, []);

  const handleClose = (notificationId) => {
    // Remove the notification from the state
    setNotifications(notifications.filter((notif) => notif.notificationId !== notificationId));
  };

  return (
    <div className="container mt-4 notification-page">
      <h3 className="mb-3">الإشعارات</h3>

      {/* Render alerts for each notification */}
      {notifications.map((notif) => (
        <Alert key={notif.notificationId} variant="info" dismissible onClose={() => handleClose(notif.notificationId)}>
          <strong>{notif.message}</strong><br />
          <small className="text-muted">{new Date(notif.timestamp).toLocaleString()}</small>
        </Alert>
      ))}
    </div>
  );
};

export default NotificationCenter;
