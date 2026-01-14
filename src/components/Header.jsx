import { Link, useLocation, useParams } from 'react-router-dom'
import { companyPriorities, getObjectiveById } from '../data/companyData'

function Header() {
  const location = useLocation()
  const params = useParams()

  const getBreadcrumbs = () => {
    const parts = location.pathname.split('/').filter(Boolean)

    if (parts.length === 0) {
      return null
    }

    const breadcrumbs = []

    if (parts[0] === 'priority' && parts[1]) {
      const priority = companyPriorities.find(p => p.id === parts[1])
      if (priority) {
        breadcrumbs.push({
          label: 'Company Priorities',
          path: '/'
        })
        breadcrumbs.push({
          label: priority.name,
          current: true
        })
      }
    }

    if (parts[0] === 'update' && parts[1]) {
      const objectiveData = getObjectiveById(parts[1])
      if (objectiveData) {
        const priority = companyPriorities.find(p => p.id === objectiveData.program.priorityId)
        breadcrumbs.push({
          label: 'Company Priorities',
          path: '/'
        })
        if (priority) {
          breadcrumbs.push({
            label: priority.name,
            path: `/priority/${priority.id}`
          })
        }
        breadcrumbs.push({
          label: objectiveData.program.name,
          current: true
        })
      }
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Etched Command Center
        </Link>

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                {index > 0 && <span className="breadcrumb-separator"> / </span>}
                {crumb.current ? (
                  <span className="breadcrumb-current">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path}>{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
