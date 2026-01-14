import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import PriorityPage from './pages/PriorityPage'
import UpdatePage from './pages/UpdatePage'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/priority/:priorityId" element={<PriorityPage />} />
          <Route path="/update/:objectiveId" element={<UpdatePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
