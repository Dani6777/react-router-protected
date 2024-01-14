import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Admin, Analytics, Dashboard, Home, Landing } from './pages';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null)
  const login = () => {
    //request done
    setUser({
      id: 1,
      name: 'Daniel'
    })
  }

  const logout = () => setUser(null)
  return (
    <BrowserRouter>
      <Navigation />
      {
        user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )
      }
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route path='/analytics' element={
          <ProtectedRoute user={user}>
            <Analytics />
          </ProtectedRoute>
        } />

        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to='/landing'>Landing</Link>
      </li>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/analytics'>Analytics</Link>
      </li>
      <li>
        <Link to='/admin'>Admin</Link>
      </li>
    </ul>
  </nav>
}

export default App