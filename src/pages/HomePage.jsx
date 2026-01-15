import { useState } from 'react'
import { Link } from 'react-router-dom'
import { companyPriorities, programs, filterByStatus } from '../data/companyData'
import StatusFilter from '../components/StatusFilter'

function HomePage() {
  const [statusFilter, setStatusFilter] = useState('active')

  const getStatsForPriority = (priorityId) => {
    const allPriorityPrograms = programs.filter(p => p.priorityId === priorityId)
    const filteredPrograms = filterByStatus(allPriorityPrograms, statusFilter, p => p.status)
    const teamsCount = new Set(filteredPrograms.map(p => p.teamId)).size
    const objectivesCount = filteredPrograms.reduce((acc, p) => acc + p.objectives.length, 0)
    const blackpapersCount = filteredPrograms.reduce((acc, p) =>
      acc + p.objectives.reduce((oAcc, o) => oAcc + o.blackpapers.length, 0), 0)

    return { programs: filteredPrograms.length, teams: teamsCount, objectives: objectivesCount, blackpapers: blackpapersCount }
  }

  return (
    <div className="home-page">
      <h1 className="page-title">2026 Company Priorities</h1>
      <p className="page-subtitle">Click a priority to explore programs, objectives, and blackpapers</p>

      <StatusFilter value={statusFilter} onChange={setStatusFilter} />

      <div className="priorities-grid">
        {companyPriorities.map((priority) => {
          const stats = getStatsForPriority(priority.id)
          return (
            <Link
              key={priority.id}
              to={`/priority/${priority.id}?status=${statusFilter}`}
              className="priority-card"
            >
              <div className="priority-icon" />
              <h2 className="priority-name">{priority.name}</h2>
              <p className="priority-description">{priority.description}</p>
              <div className="priority-stats">
                <div className="stat">
                  <div className="stat-value">{stats.teams}</div>
                  <div className="stat-label">Teams</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{stats.programs}</div>
                  <div className="stat-label">Programs</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{stats.objectives}</div>
                  <div className="stat-label">Objectives</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{stats.blackpapers}</div>
                  <div className="stat-label">Blackpapers</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
