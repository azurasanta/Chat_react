import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css';

const App=()=> {
    return (
      <ChatEngine
        height="100vh"
        projectID="c37528bc-a598-4a5e-aafa-617c3f28d977"
        userName="ala-hamadi"
        userSecret="Azeqsdwxc123"
        renderChatFeed={(chatFeedProps)=><ChatFeed {...chatFeedProps} />}
      />
  );
}

export default App;
