import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
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
        </ul>
      </nav>
      <p>This is the homepage!</p>
    </div>
  )
}

export default HomePage
