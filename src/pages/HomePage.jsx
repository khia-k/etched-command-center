import { Link } from 'react-router-dom'
import { companyPriorities, programs, teams } from '../data/companyData'

function HomePage() {
  const getStatsForPriority = (priorityId) => {
    const priorityPrograms = programs.filter(p => p.priorityId === priorityId)
    const teamsCount = new Set(priorityPrograms.map(p => p.teamId)).size
    const objectivesCount = priorityPrograms.reduce((acc, p) => acc + p.objectives.length, 0)
    const blackpapersCount = priorityPrograms.reduce((acc, p) =>
      acc + p.objectives.reduce((oAcc, o) => oAcc + o.blackpapers.length, 0), 0)

    return { programs: priorityPrograms.length, teams: teamsCount, objectives: objectivesCount, blackpapers: blackpapersCount }
  }

  return (
    <div className="home-page">
      <h1 className="page-title">2026 Company Priorities</h1>
      <p className="page-subtitle">Click a priority to explore programs, objectives, and blackpapers</p>

      <div className="priorities-grid">
        {companyPriorities.map((priority) => {
          const stats = getStatsForPriority(priority.id)
          return (
            <Link
              key={priority.id}
              to={`/priority/${priority.id}`}
              className="priority-card"
              style={{ '--priority-color': priority.color }}
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
