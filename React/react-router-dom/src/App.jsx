import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Links} from 'react-router-dom'
function App() {
  

  return (
    <>
      <h1>Home Page for any website</h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"  to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tvshows">TVShows</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default App
