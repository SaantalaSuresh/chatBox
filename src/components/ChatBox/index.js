import {  useState } from "react";
import { MdOutlineGroup } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import EachMessage  from "../Messages";
import "./index.css"


const ChatBox = ()=>{
    const [messagesList,setMessageList] = useState([])

    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
    
    let backcolors=["back1","back2","back3","back4","back5"]

    const [message,setMessage] = useState("")
    const addMessage = (e)=>{
        setMessage(e.target.value)
    }
    const submitMessage = ()=>{
        if(message!==""){
            let randomUser = Math.floor(Math.random()*user_list.length)
            console.log(randomUser)
            const newMessage = {
                username:user_list[randomUser],
                usermessage:message,
                nameStyle:backcolors[randomUser]
            }
           
            setMessageList(prev=>[...prev,newMessage])
      
            setMessage("")
           
            
        }
      
    }
    const onClickEnter = (e)=>{
        if(e.key==="Enter"){
            submitMessage()
        }
    }
    const count = messagesList.length
    return (
        <div className="chat-box-container">
           <div className="chat-box-cart-container"> 
          <div className="count-card">
          <div>
           <p>Introductions</p>
            <p>This Channel is for Company Wide Chatter</p>
            
           </div>
           <p>{count}/100 <MdOutlineGroup /></p>
          </div>
          <hr className="back-hr"/><div>
           {messagesList.length>0? <ul className="unorderedList">
                {messagesList.map(each=>(
                    <EachMessage eachmessage={each} />
                ))}
            </ul>:null}
          <div className="input-text-box-container">
           <input type="text" value={message} 
           className="input-text-box"  onChange={addMessage} onKeyDown={onClickEnter} placeholder="Type Message" />
          <button type="button" onClick={submitMessage} className="send-btn"> <IoSend className="icon" /></button>
           </div>
          </div>
           </div>
        </div>
    )

}


export default ChatBox