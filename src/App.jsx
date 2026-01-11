import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '@/frontend/pages/index.jsx'
import About from '@/frontend/pages/About.jsx'
import Achievements from '@/frontend/pages/Achievements.jsx'
import ChatRoom from '@/frontend/pages/Chat-Room.jsx'
import Contact from '@/frontend/pages/Contact.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Chat-Room" element={<ChatRoom />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App