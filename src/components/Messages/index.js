import "./index.css"

const EachMessage = (props)=>{
    const {eachmessage} = props
    console.log(eachmessage)
    const {username,usermessage,nameStyle} = eachmessage
    const firstLetter = username[0]
    console.log(new Date())
    let date = new Date()
    let timeString = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
   
    

    return (
    <li>
        <div className="bg-card-message">
        <p className={`first-letter ${nameStyle}`} >
            {firstLetter}
        </p>
        <div className="message-container">
            <div className="name-container"> 
                <p className="name">{username}</p>
                <p className="time">{timeString}</p>
            </div>
            <p className="message"> {usermessage}</p>
        </div>
        </div>

    </li>
    )
}

export default EachMessage