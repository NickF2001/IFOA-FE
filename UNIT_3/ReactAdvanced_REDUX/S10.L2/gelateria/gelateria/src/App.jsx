import React, { Component } from 'react'
import Menu from './components/Menu'

class App extends Component {
  state = {
    counter: 0,
  }

  render() {

    return (
      <>
      <div className="App">
        <section className="section-center">
          <h3>Gelateria Tutto-Ciocco</h3>
          <Menu />
        </section>
      </div>
      </>
    )
  }
}

export default App
