import { createContext } from "react";

export default NotificationContext = createContext({
  notification: null,
  showNotifications: function () {},
  hideNotifications: function () {},
});

export const NotificationContextProvider = (props) => {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
};
