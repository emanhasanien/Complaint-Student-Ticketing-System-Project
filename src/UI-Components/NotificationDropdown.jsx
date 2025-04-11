import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import notificationsData from '../mocdata/notifications.json'; // Import the JSON directly

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  // Simulate the current user's ID (replace with real logic when integrating with the backend)
  const currentUserId = 101; // You can replace this with logic to get the current user's ID dynamically

  useEffect(() => {
    setLoading(true);
    // Filter notifications for the current user
    const userNotifications = notificationsData.filter((notif) => notif.userId === currentUserId);
    setNotifications(userNotifications);
    setLoading(false);
  }, [currentUserId]); // Re-fetch notifications whenever currentUserId changes

  // Helper function to format the timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Change to a desired format
  };

  // Handle click on notification
  const handleNotificationClick = (notif) => {
    // Mark the notification as read (simulating the behavior)
    const updatedNotifications = notifications.map((notification) => {
      if (notification.notificationId === notif.notificationId) {
        return { ...notification, read: true };  // Add a `read` property to mark it as read
      }
      return notification;
    });
    setNotifications(updatedNotifications);

    // You could navigate or show more details here (optional)
    console.log(`Notification clicked: ${notif.message}`);
    // e.g., window.location.href = '/notification-details'; // Navigate to a details page
  };

  // Calculate the number of unread notifications
  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <Dropdown align="end" className="notification-dropdown">
      <Dropdown.Toggle variant="light" id="dropdown-notifications">
        🔔 <span className="badge bg-danger">{unreadCount}</span> {/* Display unread notifications count */}
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
              className={`dropdown-item-dark ${notif.read ? 'read' : ''}`}  // Apply a class if read
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
