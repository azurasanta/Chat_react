import React from 'react'

const MyMessage=({message})=> {
    if (message?.attachments?.length>0){
        return(
            <img 
                src={message.attachments[0].file}
                alt="message.attachement"
                className="message-image"
                style={{float:"right"}}
            />
        )
    }

    return (
        <div className="message" style={{float:"right",marginRight:"18px",color:"#000",backgroundColor:"rgba(232, 170, 20,0.3)"}}>
            {message.text}
        </div>
    )
}
export default MyMessage
