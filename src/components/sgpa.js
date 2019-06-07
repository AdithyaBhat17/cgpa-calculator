import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import Nav from './Nav'
import { Dialog, Button as ButtonByAuth } from '@auth0/cosmos'
import Confetti from 'react-confetti'
import Footer from './Footer'

export default function Sgpa(props) { 
    const [SGPA, setSGPA] = React.useState(null)
    const [dialog, setDialog] = React.useState(false)

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    React.useEffect(() => {
        if(props.location.state === undefined || props.location.state.electiveNo === 0
         || props.location.state.mainNo === 0 || props.location.state.labNo === 0) {
         alert('Please select the number of subjects')
         props.history.push('/')
        }
    }, [])

    const renderMainInput = mainNo => {
        let array = []
        for (let i = 1; i <= mainNo; i++)
            array.push(
                <Form.Group key={i}>
                    <Form.Label>Subject {i}'s marks:</Form.Label>
                    <Form.Control
                        required
                        name="mainMarks" 
                        type="number" 
                        min="0" 
                        max="100" 
                    />
                </Form.Group>
            )
        return array
    }

    const renderElectiveInput = electiveNo => {
        let array = []
        for (let i = 1; i <= electiveNo; i++)
            array.push(
                <Form.Group key={i}>
                    <Form.Label>Elective {i}'s marks:</Form.Label>
                    <Form.Control
                        required
                        name="electiveMarks" 
                        type="number" 
                        min="0" 
                        max="100" 
                    />
                </Form.Group>
            )
        return array
    }

    const renderLabInput = labNo => {
        let array = []
        for (let i = 1; i <= labNo; i++)
            array.push(
                <Form.Group key={i}>
                    <Form.Label>Lab {i}'s marks:</Form.Label>
                    <Form.Control
                        required
                        name="labMarks" 
                        type="number" 
                        min="0" 
                        max="100" 
                    />
                </Form.Group>
            )
        return array
    }

    const calculateSGPA = async (e) => {
        e.preventDefault()
        const { mainNo, electiveNo, labNo } = props.location.state

        let mainMarks = 0, electiveMarks = 0, labMarks = 0, SGPA = 0

        for(let i=0;i<mainNo;i++) {
            mainMarks += Math.floor(e.target.mainMarks[i].value / 10 + 1) * 4
        }

        for(let i=0;i<electiveNo;i++) {
            electiveMarks += Math.floor(e.target.electiveMarks[i].value / 10 + 1) * 3
        }

        for(let i=0;i<labNo;i++) {
            labMarks += Math.floor(e.target.labMarks[i].value / 10 + 1) * 2
        }

        SGPA = (mainMarks + electiveMarks + labMarks) / ((mainNo * 4) + (electiveNo * 3) + (labNo * 2))

        await setSGPA(parseFloat(SGPA).toFixed(2))
        setDialog(true)
    }

    if(props.location.state) {
        const { electiveNo, mainNo, labNo } = props.location.state
        return (
            <div>
                <Container>
                    <Dialog
                     open={dialog}
                     onClose={() => setDialog(false)}
                     actions={[
                        <ButtonByAuth 
                          appearance="secondary"
                          className="proceed"
                          onClick={() => setDialog(false)}
                        >
                            Okay!
                        </ButtonByAuth>
                     ]}>
                        <Confetti 
                         style={{zIndex: -1}}
                         confettiSource={{x: 0, w: 500}}
                          />
                        <p
                          style={{textAlign: 'center', color: '#1F355D', fontSize: 18}}>
                            Congrats! You've scored <span>{SGPA}</span> out of 10!
                        </p>
                    </Dialog>
                    <Nav type="back" />
                    <p style={{textAlign: 'center'}}>Tell us how much you scored out of a <span>100</span> here!</p>
                    <Form onSubmit={calculateSGPA}>
                        {renderMainInput(mainNo).map((input, index) => (
                            <div key={index + 1}>
                                {input}
                            </div>
                        ))}
                        {renderElectiveInput(electiveNo).map((input, index) => (
                            <div key={index + 1}>
                                {input}
                            </div>
                        ))}
                        {renderLabInput(labNo).map((input, index) => (
                            <div key={index + 1}>
                                {input}
                            </div>
                        ))}
                        <Button type="submit">Calculate SGPA!</Button> <br/> <br/>
                    </Form>
                </Container>
                <Container>
                    <Footer />
                </Container>
            </div>
        )
    }
    
    return (
        <div></div>
    )
}