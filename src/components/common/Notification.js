export const notification = (notificationSystem, message, level) => {
  const notification = notificationSystem.current;
  notification.addNotification({
    title: "Notificación",
    message,
    level,
  });
};
