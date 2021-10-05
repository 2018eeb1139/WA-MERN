import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen today at 23:59</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    this is a message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <EmojiEmotionsIcon />
                <form>
                    <input type="text" placeholder="Type a Message" />
                    <button type="submit">Send a Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
