import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function App() {
  const [electiveNo, setElectiveNo] = React.useState(0)
  const [mainNo, selectMainNo] = React.useState(0)
  const [labNo, selectLabNo] = React.useState(0)

  return (
    <div className="App">
      <Form>
          <Form.Group>
            <Form.Label>Number of Electives</Form.Label> <br/>
            <Form.Control
             name="electiveNo" 
             type="number" 
             min="0" 
             max="6" 
             onChange={(e) => console.log(e.target.value) || setElectiveNo(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of Main Subjects</Form.Label> <br/>
            <Form.Control
             name="mainNo" 
             type="number" 
             min="0" 
             max="6" 
             onChange={(e) => console.log(e.target.value) || selectMainNo(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of Labs ( + Project Phase 1 + Seminars)</Form.Label> <br/>
            <Form.Control
             name="mainNo" 
             type="number" 
             min="0" 
             max="3" 
             onChange={(e) => console.log(e.target.value) || selectLabNo(e.target.value)} 
            />
          </Form.Group>
          <Link to={{
            pathname: '/sgpa',
            state: {
              electiveNo,
              mainNo,
              labNo
            }
          }}>
            <Button>
              Proceed ->
            </Button>
          </Link>
      </Form>
    </div>
  );
}

export default App;
