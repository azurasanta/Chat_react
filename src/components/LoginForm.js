import React, { useState } from 'react'
import axios from 'axios'
import Spinner from '../util/Spinner'
const LoginForm=()=> {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    async function handleSubmit(e){
        e.preventDefault()
        const authObject={'Project-ID':"c37528bc-a598-4a5e-aafa-617c3f28d977",'User-Name':username,'User-Secret':password}
        try{
            setLoading(true)
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);  
            localStorage.setItem('password',password)

            window.location.reload();
        }catch(error){
            setLoading(false)
            setError('Oops, incorrect credeintials')
        }
    }

    return (
        <div className="wrapper">
            {loading ? <Spinner color="#000"/>:
                <div className="form">
                  <h1 className="title">Chat Application</h1>
                  <form onSubmit={handleSubmit}>
                      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required />
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required />
                      <div align="center">
                          <button type="submit" className="button">
                              <span>Start Chatting</span>
                          </button>
                      </div>
                      <h2 className="error">{error}</h2>
                  </form>
              </div>
            }
        </div>
    );
}

export default LoginForm;
