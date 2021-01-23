import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  // FIXME: Upgrade RedwoodJS version to fix an API call to http://localhost:8910/undefined/graphql
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  return (
    <div>
      <h1>
        <Link to={routes.home()}>Redwood Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
          <li>
            <button onClick={isAuthenticated ? logOut : logIn}>
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </button>
          </li>
          {isAuthenticated && <li>{currentUser.email}</li>}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default BlogLayout
