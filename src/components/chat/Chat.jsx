// import { useState } from "react";
// import "./chat.css";
// import EmojiPicker from "emoji-picker-react";

// const chat = () => {
//    const [open,setOpen] = useState(false)
//    const [text, setText] = useState("")

//    const handleEmoji = (e) =>{
//     setText((prev) => prev + e.emoji);
//     setOpen(false)
//    };

//   return (
//     <div className="chat">
//       <div className="top">
//         <div className="user">
//           <img src="./avatar.png" alt="" />
//           <div className="texts">
//             <span>Jane Doe</span>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
//             </p>
//           </div>
//         </div>
//         <div className="icons">
//           <img src="./phone.png" alt="" />
//           <img src="./video.png" alt="" />
//           <img src="./info.png" alt="" />
//         </div>
//       </div>

//       <div className="center">
//         <div className="message own">
//           <div className="texts">
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
//               nemo aut dolores, vel voluptatibus totam reprehenderit suscipit
//               rerum debitis non ex! Blanditiis dolorem, quibusdam ut accusantium
//               doloremque ad dolor itaque.
//             </p>
//             <span>1 min ago</span>
//           </div>
//         </div>

//         <div className="message">
//           <img src="./avatar.png" alt="" />
//           <div className="texts">
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
//               nemo aut dolores, vel voluptatibus totam reprehenderit suscipit
//               rerum debitis non ex! Blanditiis dolorem, quibusdam ut accusantium
//               doloremque ad dolor itaque.
//             </p>
//             <span>1 min ago</span>
//           </div>
//         </div>

//         <div className="message own">
//           <div className="texts">
//             <img
//               src="https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
//               nemo aut dolores, vel voluptatibus totam reprehenderit suscipit
//               rerum debitis non ex! Blanditiis dolorem, quibusdam ut accusantium
//               doloremque ad dolor itaque.
//             </p>
//             <span>1 min ago</span>
//           </div>
//         </div>

//         <div className="message">
//           <img src="./avatar.png" alt="" />
//           <div className="texts">
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
//               nemo aut dolores, vel voluptatibus totam reprehenderit suscipit
//               rerum debitis non ex! Blanditiis dolorem, quibusdam ut accusantium
//               doloremque ad dolor itaque.
//             </p>
//             <span>1 min ago</span>
//           </div>
//         </div>

//         <div className="message own">
//           <div className="texts">
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
//               nemo aut dolores, vel voluptatibus totam reprehenderit suscipit
//               rerum debitis non ex! Blanditiis dolorem, quibusdam ut accusantium
//               doloremque ad dolor itaque.
//             </p>
//             <span>1 min ago</span>
//           </div>
//         </div>

//         <div className="message">
//           <img src="./avatar.png" alt="" />
//           <div className="texts">
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
//               nemo aut dolores, vel voluptatibus totam reprehenderit suscipit
//               rerum debitis non ex! Blanditiis dolorem, quibusdam ut accusantium
//               doloremque ad dolor itaque.
//             </p>
//             <span>1 min ago</span>
//           </div>
//         </div>

//       </div>
//       <div className="bottom">
//         <div className="icons">
//           <img src="./img.png" alt="" />
//           <img src="./camera.png" alt="" />
//           <img src="./mic.png" alt="" />
//         </div>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji">
//           <img
//             src="./emoji.png"
//             alt=""
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           <div className="picker">
//             <EmojiPicker open={open} onEmojiClick={handleEmoji} />
//           </div>
//         </div>
//         <button className="sendButton">Send</button>
//       </div>
//     </div>
//   );
// };
// export default chat;


// // ---------------------------------------------------------

// import { useEffect, useRef, useState } from "react";
// import "./chat.css";
// import EmojiPicker from "emoji-picker-react";
// import {
//   arrayUnion,
//   doc,
//   getDoc,
//   onSnapshot,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import { useChatStore } from "../../lib/chatStore";
// import { useUserStore } from "../../lib/userStore";
// import upload from "../../lib/upload";
// // import { format } from "timeago.js";

// const Chat = () => {
//   const [chat, setChat] = useState();
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [img, setImg] = useState({
//     file: null,
//     url: "",
//   });

//   const { currentUser } = useUserStore();
//   const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
//     useChatStore();

//   const endRef = useRef(null);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chat.messages]);

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
//       setChat(res.data());
//     });

//     return () => {
//       unSub();
//     };
//   }, [chatId]);

//   const handleEmoji = (e) => {
//     setText((prev) => prev + e.emoji);
//     setOpen(false);
//   };

//   const handleImg = (e) => {
//     if (e.target.files[0]) {
//       setImg({
//         file: e.target.files[0],
//         url: URL.createObjectURL(e.target.files[0]),
//       });
//     }
//   };

//   const handleSend = async () => {
//     if (text === "") return;

//     let imgUrl = null;

//     try {
//       if (img.file) {
//         imgUrl = await upload(img.file);
//       }

//       await updateDoc(doc(db, "chats", chatId), {
//         messages: arrayUnion({
//           senderId: currentUser.id,
//           text,
//           createdAt: new Date(),
//           ...(imgUrl && { img: imgUrl }),
//         }),
//       });

//       const userIDs = [currentUser.id, user.id];

//       userIDs.forEach(async (id) => {
//         const userChatsRef = doc(db, "userchats", id);
//         const userChatsSnapshot = await getDoc(userChatsRef);

//         if (userChatsSnapshot.exists()) {
//           const userChatsData = userChatsSnapshot.data();

//           const chatIndex = userChatsData.chats.findIndex(
//             (c) => c.chatId === chatId
//           );

//           userChatsData.chats[chatIndex].lastMessage = text;
//           userChatsData.chats[chatIndex].isSeen =
//             id === currentUser.id ? true : false;
//           userChatsData.chats[chatIndex].updatedAt = Date.now();

//           await updateDoc(userChatsRef, {
//             chats: userChatsData.chats,
//           });
//         }
//       });
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setImg({
//         file: null,
//         url: "",
//       });

//       setText("");
//     }
//   };

//   return (
//     <div className="chat">
//       <div className="top">
//         <div className="user">
//           <img src={user?.avatar || "./avatar.png"} alt="" />
//           <div className="texts">
//             <span>{user?.username}</span>
//             <p>Lorem ipsum dolor, sit amet.</p>
//           </div>
//         </div>
//         <div className="icons">
//           <img src="./phone.png" alt="" />
//           <img src="./video.png" alt="" />
//           <img src="./info.png" alt="" />
//         </div>
//       </div>
//       <div className="center">
//         {chat?.messages?.map((message) => (
//           <div
//             className={
//               message.senderId === currentUser?.id ? "message own" : "message"
//             }
//             key={message?.createAt}
//           >
//             <div className="texts">
//               {message.img && <img src={message.img} alt="" />}
//               <p>{message.text}</p>
//               <span>{format(message.createdAt.toDate())}</span>
//             </div>
//           </div>
//         ))}
//         {img.url && (
//           <div className="message own">
//             <div className="texts">
//               <img src={img.url} alt="" />
//             </div>
//           </div>
//         )}
//         <div ref={endRef}></div>
//       </div>
//       <div className="bottom">
//         <div className="icons">
//           <label htmlFor="file">
//             <img src="./img.png" alt="" />
//           </label>
//           <input
//             type="file"
//             id="file"
//             style={{ display: "none" }}
//             onChange={handleImg}
//           />
//           <img src="./camera.png" alt="" />
//           <img src="./mic.png" alt="" />
//         </div>
//         <input
//           type="text"
//           placeholder={
//             isCurrentUserBlocked || isReceiverBlocked
//               ? "You cannot send a message"
//               : "Type a message..."
//           }
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           disabled={isCurrentUserBlocked || isReceiverBlocked}
//         />
//         <div className="emoji">
//           <img
//             src="./emoji.png"
//             alt=""
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           <div className="picker">
//             <EmojiPicker open={open} onEmojiClick={handleEmoji} />
//           </div>
//         </div>
//         <button
//           className="sendButton"
//           onClick={handleSend}
//           disabled={isCurrentUserBlocked || isReceiverBlocked}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

const Chat = () => {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const { currentUser } = useUserStore();
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
    useChatStore();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = async () => {
    if (text === "") return;

    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      setImg({
        file: null,
        url: "",
      });

      setText("");
    }
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {chat?.messages?.map((message) => (
          <div
            className={
              message.senderId === currentUser?.id ? "message own" : "message"
            }
            key={message?.createdAt}
          >
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              <span>
                {new Date(message.createdAt.toDate()).toLocaleString()}
              </span>{" "}
              {/* Change this line to display the date */}
            </div>
          </div>
        ))}
        {img.url && (
          <div className="message own">
            <div className="texts">
              <img src={img.url} alt="" />
            </div>
          </div>
        )}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You cannot send a message"
              : "Type a message..."
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          className="sendButton"
          onClick={handleSend}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
