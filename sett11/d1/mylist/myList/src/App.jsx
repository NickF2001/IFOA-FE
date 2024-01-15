import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myList from './components/myList'
import data from './data'

class App extends Component {
  state = {
    isLoading: false,
    isError: false
  }

    constructor(props) {
      super(props);
      this.state = {
        contatore: 0
      };
    
    function reloadList() {
      setAppointments(data)
    }

    /*
    function removeAppointment(id) {

    }
    */
}
  
  render() {
    return (

    <Container>
      <Row>
       <Row>
        <h1 style={{ color: "var(--bg-blue)" }}>My Appointments</h1>
      </Row>
      <Col>
        <myList data={appointments} removeAppointment={removeAppointment} />
      </Col>
      <Row>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadList()}>Ricarica Lista</button>
          <button className="btn btn-delete" onClick={() => setAppointments([])}>Cancella Tutto</button>
        </div>
      </Row>
      </Row>
      
      
    </Container>
    )  
}
}

export default App
