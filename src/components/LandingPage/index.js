import React from 'react';
import './index.scss';
import { history } from '../../helpers';

const LandingPage = () => (
  <div className="text-center h-100 cover-wrapper">
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Sklype</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="">Home</a>
            <a className="nav-link" href="" onClick={() => history.push('/signIn')}>Sign in</a>
          </nav>
        </div>
      </header>

      <video autoPlay muted loop className="cover-video">
        <source src="/videos/Bed-Phone.mp4" type="video/mp4" />
      </video>

      <main role="main" className="inner cover">
        <h1 className="cover-heading">Sklype</h1>
        <p className="lead">A mindblowing chat app by the creators of Sluck, Trullo and Giggle</p>
        <p className="lead">
          <a href="" className="btn btn-lg btn-secondary" onClick={() => history.push('/signUp')}>Sign up</a>
        </p>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>2018, @TheRipoffCompany</p>
        </div>
      </footer>
    </div>
  </div>
);

export default LandingPage;
