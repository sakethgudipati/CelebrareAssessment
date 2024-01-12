import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <h1 className="home-head">
      Welcome, myself <span className="head-span">Gudipati Saketh Kasyap</span>.
      Let me show you my Celebrare Assignment which is a{' '}
      <span className="head-span">Simple Text Editor</span>.
    </h1>
    <Link to="/editor">
      <button type="button" className="home-button">
        Get Started
      </button>
    </Link>
  </div>
)

export default Home
