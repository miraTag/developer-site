import * as React from 'react'
// import { Link } from 'gatsby'
// import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <header className="header">
    <div className="container bg-dark">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a href="" className="navbar-brand"><img src="../images/taggstar-logo_white.png" alt="Logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Documentation
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-1">
                  <a className="dropdown-item" href="html/docs/layout-1.html">Layout 1</a>
                  <a className="dropdown-item" href="html/docs/layout-2.html">Layout 2</a>
                  <a className="dropdown-item" href="html/docs/layout-3.html">Layout 3</a>
                  <a className="dropdown-item" href="html/docs/layout-4.html">Layout 4</a>
                </div>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#" id="dropdown-2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Help Center
                </a>
              </li>
              
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="documentation/index.html">Docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="documentation/changelog.html">Changelog</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>

  )
}

export default Layout