import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function App() {
  const [electiveNo, setElectiveNo] = React.useState(0)
  const [mainNo, selectMainNo] = React.useState(0)
  const [labNo, selectLabNo] = React.useState(0)

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
    <Container>
    <Nav />
      <h1>Hello there!</h1>
      <p>Studying in a VTU college? Get your SGPA and CGPA scores here!</p>
      <h5>SGPA Calculator</h5>
      <Form>
          <Form.Group>
            <Form.Label>Number of Electives</Form.Label> <br/>
            <Form.Control
             name="electiveNo" 
             type="number" 
             min="0" 
             max="6" 
             required
             onChange={(e) => setElectiveNo(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of Main Subjects</Form.Label> <br/>
            <Form.Control
             name="mainNo" 
             type="number" 
             min="0" 
             max="6" 
             required
             onChange={(e) => selectMainNo(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of Labs ( + Project Phase 1 + Seminars)</Form.Label> <br/>
            <Form.Control
             name="mainNo" 
             type="number" 
             min="0" 
             max="3" 
             required
             onChange={(e) => selectLabNo(e.target.value)} 
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
            <Button className="proceed">
              Proceed
            </Button>
          </Link>
          <p
           onClick={() => alert('Still working on this Amigo :(')} 
           style={{textAlign: 'center', marginTop: 10, color: '#6FBEDB'}}>
             Calculate CGPA here!
          </p>
      </Form>
    </Container>
    </div>
  );
}

export default App;
