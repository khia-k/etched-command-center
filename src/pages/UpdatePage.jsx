import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getObjectiveById, companyPriorities } from '../data/companyData'
import Modal from '../components/Modal'

// Filler text for updates
const FILLER_UPDATE = `This week we made significant progress on the key deliverables. The team completed the initial design review and received positive feedback from stakeholders. We identified three areas that need additional attention and have assigned owners to address them by end of week.

Key accomplishments:
- Completed technical specification review
- Aligned with cross-functional partners on timeline
- Resolved two blocking dependencies

Next steps:
- Begin implementation phase
- Schedule weekly sync with Platform team
- Update project documentation`

const BLACKPAPER_UPDATE = `The blackpaper is progressing well. We've completed the initial research phase and are now in the drafting stage. Key findings have been validated with subject matter experts.

Current status: On track for the planned delivery date. No major blockers identified. Awaiting final review from engineering leadership before publication.`

function UpdatePage() {
  const { objectiveId } = useParams()
  const [selectedBlackpaper, setSelectedBlackpaper] = useState(null)

  const objectiveData = getObjectiveById(objectiveId)

  if (!objectiveData) {
    return <div className="empty-state">Objective not found</div>
  }

  const { program, blackpapers, name: objectiveName, successCriteria } = objectiveData
  const priority = companyPriorities.find(p => p.id === program.priorityId)

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

  // Placeholder timestamps (will be replaced with real data from Slack/Airtable)
  const programUpdateTimestamp = '2026-01-10T14:32:00'
  const blackpaperUpdateTimestamp = '2026-01-09T09:15:00'

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
        <h3 className="section-title">Latest Status Update</h3>
        <div className="update-content">
          {FILLER_UPDATE.split('\n').map((line, i) => (
            <p key={i} style={{ marginBottom: line.trim() === '' ? '1rem' : '0.25rem' }}>
              {line}
            </p>
          ))}
        </div>
        <div className="update-meta">
          <div>Posted by {program.owner}</div>
          <div className="update-timestamp">{formatTimestamp(programUpdateTimestamp)}</div>
        </div>
      </div>

      <div className="blackpapers-section">
        <h2>Blackpapers ({blackpapers.length})</h2>

        {blackpapers.length === 0 ? (
          <div className="empty-state">
            <p>No blackpapers associated with this objective</p>
          </div>
        ) : (
          <div className="blackpapers-grid">
            {blackpapers.map((bp) => (
              <div
                key={bp.id}
                className="blackpaper-card"
                onClick={() => setSelectedBlackpaper(bp)}
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
          <h4 style={{ marginBottom: '0.5rem', color: '#888888' }}>Latest Update:</h4>
          {BLACKPAPER_UPDATE.split('\n').map((line, i) => (
            <p key={i} style={{ marginBottom: line.trim() === '' ? '1rem' : '0.25rem' }}>
              {line}
            </p>
          ))}
          <div className="update-meta">
            <div className="update-timestamp">{formatTimestamp(blackpaperUpdateTimestamp)}</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default UpdatePage
