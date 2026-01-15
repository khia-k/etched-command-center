function StatusFilter({ value, onChange }) {
  return (
    <div className="status-filter">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="active">Active Only</option>
        <option value="planned">Planned but Not Yet Active</option>
        <option value="active-planned">Active and Planned</option>
        <option value="completed">Completed</option>
        <option value="all">All</option>
      </select>
    </div>
  )
}

export default StatusFilter
