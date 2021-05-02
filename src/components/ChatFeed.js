import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import Spinner from '../util/Spinner'

const ChatFeed=(props)=> {
    const {chats,activeChat,userName,messages}=props
    const chatRoom =chats && chats[activeChat]
    const renderMessages=()=>{
        const keys=Object.keys(messages)
        return keys.map((key,index)=>{
            const message=messages[key];
            const lastMessageKey =index===0 ? null : keys[index-1]
            const isMymessage=userName===message.sender.username
            return(
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                            isMymessage ? 
                            <MyMessage message={message}/>: 
                            <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>// we send the message(X) and the "before" message of the message(X)

                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMymessage ?'18px':'0px',marginLeft:isMymessage ?'0':'68px'}}>
                        {
                            chatRoom.people.map((person, index)=>{
                                if(person.last_read === message.id)
                                    return(
                                        <div
                                        key={`read_${index}`}
                                        className="read-receipt"
                                        style={{
                                            float: isMymessage ? 'right' : 'left',
                                            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                                        }}
                                        />
                                    )
                            })
                        }
                          
                        
                    </div>
                </div>
            )
        })
    }
    if(!chatRoom) return <Spinner color="#e8aa14"/>
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chatRoom.title}</div>
                <div className="chat-subtitle">
                    {chatRoom.people.map((person)=>{
                        return(
                            ` ${person.person.username}`
                        )
                    })}
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}/>
            <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}
export default ChatFeed
