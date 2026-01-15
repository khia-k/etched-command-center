import { useState } from 'react'

function UpdateDateToggle({ dates, selectedDate, onDateChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="update-date-toggle">
      <button
        className="date-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{formatDisplayDate(selectedDate)}</span>
        <span className="toggle-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="date-dropdown">
          {dates.map((date, index) => (
            <button
              key={date}
              className={`date-option ${date === selectedDate ? 'selected' : ''}`}
              onClick={() => {
                onDateChange(date)
                setIsOpen(false)
              }}
            >
              {formatDisplayDate(date)}
              {index === 0 && <span className="latest-badge">Latest</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default UpdateDateToggle
