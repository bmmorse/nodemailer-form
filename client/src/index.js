import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// import styles
import './index.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div id='App'>
            <div className='wrapper '>
              <div className='header'>
                <h2>
                  This form is a React component using Nodemailer to send an
                  email response to a Google account with OAuth2.
                </h2>

                <h2>
                  You can download the Github repo{' '}
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://github.com/bmmorse/nodemailer-form'
                  >
                    here.
                  </a>
                </h2>
                <h2>
                  Form data is sent to{' '}
                  <span className='header-email'>
                    brendan (at) fingerboarding.info
                  </span>
                  . Drop me a note and I'll get back to you!
                </h2>
              </div>

              <form
                className='animated fadeIn slow'
                method='post'
                action='send'
              >
                <div className='form-name'>
                  <label>Name</label>
                  <input type='text' name='name'></input>
                </div>
                <div className='form-email'>
                  <label>Email Address</label>
                  <input type='email' name='email'></input>
                </div>
                <div className='form-message'>
                  <label>Message</label>
                  <textarea name='message' rows='4'></textarea>
                </div>
                <button className='form-submit' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Route>
        {/* 404 redirect to index */}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
