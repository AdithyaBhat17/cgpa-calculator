import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import Nav from './Nav'
import { Dialog, Button as ButtonByAuth } from '@auth0/cosmos'
import Confetti from 'react-confetti'
import Footer from './Footer'

export default function CGPA (props) {
    const [CGPA, setCGPA] = React.useState({semCount: 0, cgpa: 0})    
    const [dialog, setDialog] = React.useState(false)

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const renderFormInputs = n_subjects => {
        let array = []
        for (let i = 1; i <= n_subjects; i++)
            array.push(
                <Form.Group key={i}>
                    <Form.Label>Semester {i}'s SGPA:</Form.Label>
                    <Form.Control
                        name="sgpas" 
                        type="number" 
                        min="0" 
                        max="10" 
                        step="0.01"
                    />
                </Form.Group>
            )
        return array
    }

    const calculateCGPA = e => {
        e.preventDefault()

        let { semCount, cgpa } = CGPA 
        
        for(let i = 0; i < 8; i++) {
            if(e.target.sgpas[i].value !== '') {
                cgpa += parseFloat(e.target.sgpas[i].value)
                semCount++
            }
        }

        cgpa = cgpa / semCount
            
        setCGPA({semCount, cgpa: parseFloat(cgpa).toFixed(3)})
        setDialog(true)
    }

    return (
        <div>
            <Container>
                <Dialog
                 open={dialog}
                 onClose={() => window.location.reload()}
                 actions={[
                    <ButtonByAuth
                      appearance="secondary"
                      className="proceed"
                      onClick={() => window.location.reload()}
                    >
                        Okay!
                    </ButtonByAuth>
                 ]} 
                >
                    <Confetti style={{zIndex: -1}} confettiSource={{x: 0, w: 500}}/>
                    <p
                     style={{textAlign: 'center', color: '#1F355D', fontSize: 18}}>
                        Congrats! Your CGPA is <span>{CGPA.cgpa}!</span>
                    </p>
                </Dialog>
                <Nav type="back" showSgpa={true}/>
                <h5>CGPA Calculator</h5> <br/>
                <Form onSubmit={calculateCGPA}>
                    {renderFormInputs(8).map((input, index) => (
                        <div key={index + 1}>{input}</div>
                    ))}
                    <Button 
                     type="submit"
                     className="proceed"
                    >
                        Calculate CGPA!
                    </Button> <br/> <br/>
                </Form>
            </Container>
            <Container>
                <Footer />
            </Container>
        </div>
    )
}