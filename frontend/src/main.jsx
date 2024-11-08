import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/common/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Friends from './pages/Friends.jsx'
import Chat from './pages/Chat.jsx'
import Profile from './pages/Profile.jsx'
import Setting from './pages/Setting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
