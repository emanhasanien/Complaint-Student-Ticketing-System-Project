import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import notificationsData from '../mocdata/notifications.json'; // Mock JSON file

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  // Get current student ID from sessionStorage
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user && user.role === "student") {
      setCurrentUserId(user.userId); // Adjust this key based on your user object
    }
  }, []);

  // Filter notifications for the logged-in student
  useEffect(() => {
    if (currentUserId !== null) {
      setLoading(true);
      const userNotifications = notificationsData.filter(
        (notif) => notif.userId === currentUserId
      );
      setNotifications(userNotifications);
      setLoading(false);
    }
  }, [currentUserId]);

  // Format notification timestamps
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // Handle notification click (mark as read)
  const handleNotificationClick = (notif) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.notificationId === notif.notificationId
        ? { ...notification, read: true }
        : notification
    );
    setNotifications(updatedNotifications);
    console.log(`Notification clicked: ${notif.message}`);
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <Dropdown align="end" className="notification-dropdown">
      <Dropdown.Toggle variant="light" id="dropdown-notifications">
        🔔 <span className="badge bg-danger">{unreadCount}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-light">
        {loading ? (
          <Dropdown.Item className="text-muted">Loading...</Dropdown.Item>
        ) : notifications.length === 0 ? (
          <Dropdown.Item className="text-muted">No notifications</Dropdown.Item>
        ) : (
          notifications.map((notif) => (
            <Dropdown.Item
              key={notif.notificationId}
              className={`dropdown-item-dark ${notif.read ? 'read' : ''}`}
              onClick={() => handleNotificationClick(notif)}
            >
              <strong>{notif.message}</strong>
              <br />
              <small>{formatTimestamp(notif.timestamp)}</small>
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
