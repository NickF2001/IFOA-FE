import React, { Component } from 'react';
import data from './data';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: data,
    };
  }

  reloadList = () => {
    this.setState({ appointments: data });
  };

  removeAppointment = (id) => {
    this.setState((prevState) => ({
      appointments: prevState.appointments.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { appointments } = this.state;

    return (
      <section>
        <div className="container">
          <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Appuntamenti</h2>
          <div className="people-list">
            <List data={appointments} removeAppointment={this.removeAppointment} />
          </div>
          <div className="btn-group">
            <button className="btn btn-reset" onClick={this.reloadList}>Ricarica Lista</button>
            <button className="btn btn-delete" onClick={() => this.setState({ appointments: [] })}>Cancella Tutto</button>
          </div>
        </div>
      </section>
    );
  }
}

export default App;