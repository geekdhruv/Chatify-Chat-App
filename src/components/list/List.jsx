import React from "react";
import "./list.css";
import ChatList from "./chatList/ChatList";
import Userinfo from "./userInfo/Userinfo";

const list = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};
export default list;
