import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Nav({type, showSgpa}) {
    if(type === 'back') 
        return (
            <header>
                <Link to="/">
                    <img className="back" src={require('../assets/Arrow.png')} alt="Calculate CGPA"/>
                </Link>
                {!showSgpa && 
                <Link to="/cgpa" className="go_cgpa">
                    <Button>CGPA</Button>
                </Link>
                }
            </header>
        )
    return (
      <div>
        <header>
            <img className="logo" src={require('../assets/logo.png')} alt="SGPA calculator"/>
        </header>
      </div>
    )
}