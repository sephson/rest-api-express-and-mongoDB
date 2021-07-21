import "./chatOnline.css";
import React, { useState } from "react";

const ChatOnline = ({ onlineUsers, user, currentId, setCurrentChat }) => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src={
              user.profilePicture ? user.profilePicture : `${pf}person/a.png`
            }
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Toyin</span>
      </div>
    </div>
  );
};

export default ChatOnline;