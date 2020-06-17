import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
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
      <p>This is the about page!</p>
    </div>
  )
}

export default AboutPage
