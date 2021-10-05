import './App.css';
import {useState,useEffect} from 'react'
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const pusher = new Pusher('d725605b6498834dce65', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data)=> {
      setMessages([...messages,data])
    })
  }, [messages])
  console.log(messages)
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;