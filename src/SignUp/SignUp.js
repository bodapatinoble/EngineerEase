import React, { useState } from 'react';
import './App.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <div className="card">
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="card">
      <div className="header">
        <div className="text">SigUp</div>
        </div>
        <div className='inputfields'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='forgetpassword'>
           ForgetPassword? <span>Click Here!</span>
         </div>
        </div>
        <div className='SubmitContainer'>
            <button onClick={handleLogin} className='LoginBtn'>Login</button>
            <button onClick={handleLogin} className='SignUpBtn'>SignUp</button>
        </div>
        <div className='TermsAndConditions'>
          FollowUs on :
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>Discord</span>
         </div>
        <div className='BrandName'>
           Powered By <span>PurpleTalk</span>
         </div>
        
      </div>
    </div>
  );
}

export default SignUp;