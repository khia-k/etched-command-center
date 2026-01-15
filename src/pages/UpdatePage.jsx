import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getObjectiveById, companyPriorities, filterBlackpapers } from '../data/companyData'
import Modal from '../components/Modal'
import StatusFilter from '../components/StatusFilter'
import UpdateDateToggle from '../components/UpdateDateToggle'

// Program update history - keyed by date
const PROGRAM_UPDATES = {
  '2026-01-13T16:45:00': {
    content: `This week we made significant progress on the key deliverables. The team completed the initial design review and received positive feedback from stakeholders. We identified three areas that need additional attention and have assigned owners to address them by end of week.

Key accomplishments:
- Completed technical specification review
- Aligned with cross-functional partners on timeline
- Resolved two blocking dependencies

Next steps:
- Begin implementation phase
- Schedule weekly sync with Platform team
- Update project documentation`,
    author: null // Will use program owner
  },
  '2026-01-08T10:30:00': {
    content: `Kicked off the program with an initial planning session. The team has aligned on the high-level approach and identified key milestones for the quarter.

Key accomplishments:
- Completed initial scoping and requirements gathering
- Identified core team members and responsibilities
- Set up project tracking and communication channels

Risks and blockers:
- Waiting on final budget approval
- Need to finalize vendor selection by end of next week

Next steps:
- Complete detailed technical design
- Begin stakeholder alignment meetings
- Finalize resource allocation`,
    author: null
  }
}

// Blackpaper update history - keyed by date
const BLACKPAPER_UPDATES = {
  '2026-01-13T11:20:00': {
    content: `The blackpaper is progressing well. We've completed the initial research phase and are now in the drafting stage. Key findings have been validated with subject matter experts.

Current status: On track for the planned delivery date. No major blockers identified. Awaiting final review from engineering leadership before publication.`
  },
  '2026-01-08T14:15:00': {
    content: `Started work on the blackpaper. Initial outline has been drafted and shared with stakeholders for feedback.

Current status: Research phase in progress. Gathering data and references to support key arguments. Early draft expected by end of next week.

Open questions:
- Need clarification on scope boundaries
- Awaiting input from technical leads on implementation details`
  }
}

// Available update dates (newest first)
const PROGRAM_UPDATE_DATES = ['2026-01-13T16:45:00', '2026-01-08T10:30:00']
const BLACKPAPER_UPDATE_DATES = ['2026-01-13T11:20:00', '2026-01-08T14:15:00']

function UpdatePage() {
  const { objectiveId } = useParams()
  const [selectedBlackpaper, setSelectedBlackpaper] = useState(null)
  const [blackpaperFilter, setBlackpaperFilter] = useState('active')
  const [selectedProgramDate, setSelectedProgramDate] = useState(PROGRAM_UPDATE_DATES[0])
  const [selectedBlackpaperDate, setSelectedBlackpaperDate] = useState(BLACKPAPER_UPDATE_DATES[0])

  const objectiveData = getObjectiveById(objectiveId)

  if (!objectiveData) {
    return <div className="empty-state">Objective not found</div>
  }

  const { program, blackpapers, name: objectiveName, successCriteria } = objectiveData
  const priority = companyPriorities.find(p => p.id === program.priorityId)
  const filteredBlackpapers = filterBlackpapers(blackpapers, blackpaperFilter)

  const currentProgramUpdate = PROGRAM_UPDATES[selectedProgramDate]
  const currentBlackpaperUpdate = BLACKPAPER_UPDATES[selectedBlackpaperDate]

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'in progress':
        return 'status-in-progress'
      case 'completed':
        return 'status-completed'
      default:
        return 'status-planned'
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const formatTimestamp = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  // Reset blackpaper date when opening a new blackpaper
  const handleBlackpaperClick = (bp) => {
    setSelectedBlackpaper(bp)
    setSelectedBlackpaperDate(BLACKPAPER_UPDATE_DATES[0])
  }

  return (
    <div className="update-page">
      <Link to={`/priority/${program.priorityId}`} className="back-link">
        &larr; Back to {priority?.name || 'Priority'}
      </Link>

      <div className="update-header">
        <h1>{program.name}</h1>
        <p className="objective-name">{objectiveName}</p>
      </div>

      <div className="latest-update-section">
        <div className="section-header">
          <h3 className="section-title">Status Update</h3>
          <UpdateDateToggle
            dates={PROGRAM_UPDATE_DATES}
            selectedDate={selectedProgramDate}
            onDateChange={setSelectedProgramDate}
          />
        </div>
        <div className="update-content">
          {currentProgramUpdate.content.split('\n').map((line, i) => (
            <p key={i} style={{ marginBottom: line.trim() === '' ? '1rem' : '0.25rem' }}>
              {line}
            </p>
          ))}
        </div>
        <div className="update-meta">
          <div>Posted by {currentProgramUpdate.author || program.owner}</div>
          <div className="update-timestamp">{formatTimestamp(selectedProgramDate)}</div>
        </div>
      </div>

      <div className="blackpapers-section">
        <h2>Blackpapers ({blackpapers.length})</h2>

        {blackpapers.length > 0 && (
          <div className="blackpapers-filter">
            <StatusFilter value={blackpaperFilter} onChange={setBlackpaperFilter} />
          </div>
        )}

        {blackpapers.length === 0 ? (
          <div className="empty-state">
            <p>No blackpapers associated with this objective</p>
          </div>
        ) : filteredBlackpapers.length === 0 ? (
          <div className="empty-state">
            <p>No blackpapers match the current filter</p>
          </div>
        ) : (
          <div className="blackpapers-grid">
            {filteredBlackpapers.map((bp) => (
              <div
                key={bp.id}
                className="blackpaper-card"
                onClick={() => handleBlackpaperClick(bp)}
              >
                <h4 className="blackpaper-name">{bp.name}</h4>
                <div className="blackpaper-meta">
                  <span className="blackpaper-date">Due: {formatDate(bp.dueDate)}</span>
                  <span className={`blackpaper-status ${getStatusClass(bp.status)}`}>
                    {bp.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal
        isOpen={!!selectedBlackpaper}
        onClose={() => setSelectedBlackpaper(null)}
        title={selectedBlackpaper?.name}
        subtitle={`Due: ${selectedBlackpaper ? formatDate(selectedBlackpaper.dueDate) : ''}`}
      >
        <div className="update-content">
          <p style={{ marginBottom: '1rem' }}>
            <strong>Status:</strong>{' '}
            <span className={`blackpaper-status ${getStatusClass(selectedBlackpaper?.status)}`}>
              {selectedBlackpaper?.status}
            </span>
          </p>
          <div className="modal-update-header">
            <h4>Update</h4>
            <UpdateDateToggle
              dates={BLACKPAPER_UPDATE_DATES}
              selectedDate={selectedBlackpaperDate}
              onDateChange={setSelectedBlackpaperDate}
            />
          </div>
          {currentBlackpaperUpdate.content.split('\n').map((line, i) => (
            <p key={i} style={{ marginBottom: line.trim() === '' ? '1rem' : '0.25rem' }}>
              {line}
            </p>
          ))}
          <div className="update-meta">
            <div className="update-timestamp">{formatTimestamp(selectedBlackpaperDate)}</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default UpdatePage
