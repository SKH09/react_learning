import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1 style={{color:'red'}}>Your message is on its way!</h1>
  }
  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
      <h1>2. Sending Message</h1>
        <form onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}>
        <textarea style={{padding:'30px', borderRadius:'10px'}}
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
          <div style={{paddingLeft:'60px', paddingTop:'20px'}} >
            <button style={{padding:'10px 20px', fontSize:'20px', background:'pink',border:'none', borderRadius:'20px', boxShadow:'0px 0px 8px gray'}} type="submit">Send</button>
          </div>
        </form>
    </div>
  );
}

function sendMessage(message) {
  // ...
}
