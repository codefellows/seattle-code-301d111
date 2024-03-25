import React from 'react'
import ReactDOM from 'react-dom/client'

// This is a "Component" ... a function that returns JSX ... which is "html-like"
import App from './App.jsx'

/*
  let App = the function that's inside of App.jsx
  let markup = App();
  wherever we see <App /> in our code, we replace it with the result of App(), which is the markup

  Components render what they return
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
