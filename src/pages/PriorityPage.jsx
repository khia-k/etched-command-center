import { useState } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { companyPriorities, teams, getProgramsByPriorityAndTeam, getTeamsWithProgramsForPriority } from '../data/companyData'
import Modal from '../components/Modal'
import StatusFilter from '../components/StatusFilter'

function PriorityPage() {
  const { priorityId } = useParams()
  const [searchParams] = useSearchParams()
  const initialStatus = searchParams.get('status') || 'active'

  const [statusFilter, setStatusFilter] = useState(initialStatus)
  const [selectedCriteria, setSelectedCriteria] = useState(null)

  const priority = companyPriorities.find(p => p.id === priorityId)
  const activeTeams = getTeamsWithProgramsForPriority(priorityId, statusFilter)

  if (!priority) {
    return <div className="empty-state">Priority not found</div>
  }

  return (
    <div className="priority-page">
      <Link to="/" className="back-link">
        &larr; Back to Priorities
      </Link>

      <div className="priority-header">
        <h1>{priority.name}</h1>
        <p>{priority.description}</p>
      </div>

      <StatusFilter value={statusFilter} onChange={setStatusFilter} />

      {activeTeams.length === 0 ? (
        <div className="empty-state">
          <p>No programs match the current filter</p>
        </div>
      ) : (
        activeTeams.map((team) => {
          const teamPrograms = getProgramsByPriorityAndTeam(priorityId, team.id, statusFilter)
          if (teamPrograms.length === 0) return null

          return (
            <div key={team.id} className="team-section">
              <div className="team-header">
                <div className="team-color-bar" />
                <h2 className="team-name">{team.name}</h2>
              </div>

              <div className="programs-grid">
                {teamPrograms.map((program) => (
                  <div key={program.id} className="program-card">
                    <h3 className="program-name">{program.name}</h3>
                    <p className="program-owner">Owner: {program.owner}</p>

                    <div className="objectives-list">
                      {program.objectives.map((objective) => (
                        <div key={objective.id} className="objective-item">
                          <p className="objective-name">{objective.name}</p>
                          <div className="objective-buttons">
                            <button
                              className="btn-small btn-criteria"
                              onClick={() => setSelectedCriteria(objective)}
                            >
                              Success Criteria
                            </button>
                            <Link
                              to={`/update/${objective.id}`}
                              className="btn-small btn-update"
                            >
                              Latest Update
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })
      )}

      <Modal
        isOpen={!!selectedCriteria}
        onClose={() => setSelectedCriteria(null)}
        title="Success Criteria"
        subtitle={selectedCriteria?.name}
      >
        <p>{selectedCriteria?.successCriteria || 'No success criteria defined.'}</p>
      </Modal>
    </div>
  )
}

export default PriorityPage
