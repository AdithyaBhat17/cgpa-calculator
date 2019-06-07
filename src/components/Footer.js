import React from 'react'

export default function Footer () {
    return (
        <p
         style={{margin: '25px auto 15px', textAlign: 'center'}}>
            Built with <img style={{width: 25}} src="https://abs.twimg.com/emoji/v2/72x72/269b.png" alt="react.js"/>
            &nbsp; by &nbsp;
            <a
             target="_blank" 
             style={{color: '#6FBEDB', cursor: 'pointer'}}
             title="Adithya NR" 
             rel="noopener noreferrer" 
             href="https://www.adithyabhat.com">
                Adithya NR
            </a>
      </p>
    )
}