import { useState } from 'react';
import { useRouter } from 'next/router';

function login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      router.push('/protected');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default login;