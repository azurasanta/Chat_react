import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm';

const App=()=> {
  if(!localStorage.getItem('username')) return <LoginForm />
    return (
      <ChatEngine
        height="100vh"
        projectID="c37528bc-a598-4a5e-aafa-617c3f28d977"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatFeedProps)=><ChatFeed {...chatFeedProps} />}
      />
  );
}

export default App;
