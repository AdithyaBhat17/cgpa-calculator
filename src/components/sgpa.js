import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Sgpa(props) {
    const [main, setMain] = React.useState([])
 
    React.useEffect(() => {
        if(props.location.state === undefined) {
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
                        name="labMarks" 
                        type="number" 
                        min="0" 
                        max="100" 
                    />
                </Form.Group>
            )
        return array
    }

    const calculateSGPA = (e) => {
        e.preventDefault()
        const { mainNo, electiveNo, labNo } = props.location.state

        let mainMarks = 0, electiveMarks = 0, labMarks = 0, sgpa = 0

        for(let i=0;i<mainNo;i++) {
            mainMarks += Math.floor(e.target.mainMarks[i].value / 10 + 1) * 4
        }

        for(let i=0;i<electiveNo;i++) {
            electiveMarks += Math.floor(e.target.electiveMarks[i].value / 10 + 1) * 3
        }

        for(let i=0;i<labNo;i++) {
            labMarks += Math.floor(e.target.labMarks[i].value / 10 + 1) * 2
        }

        sgpa = (mainMarks + electiveMarks + labMarks) / ((mainNo * 4) + (electiveNo * 3) + (labNo * 2))

        alert(sgpa)
    }

    if(props.location.state) {
        const { electiveNo, mainNo, labNo } = props.location.state
        console.log(main)
        return (
            <div>
                <div className="container">
                    Number of Electives: {electiveNo && electiveNo} <br/>
                    Number of Main Subjects: {mainNo && mainNo} <br/>
                    Number of Labs: {labNo && labNo}
                </div>
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
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
    
    return (
        <div></div>
    )
}