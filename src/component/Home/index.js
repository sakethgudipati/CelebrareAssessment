import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <h1 className="home-head">Simple Editor</h1>
    <Link to="/editor">
      <button type="button" className="home-button">
        Get Started
      </button>
    </Link>
  </div>
)

export default Home
