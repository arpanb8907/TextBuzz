import React from 'react'
import './About.css'; // Import the custom CSS file

export default function About(props) {
  return (
    <div className='container my-3' >
    <div className="accordion" id="accordionExample" >
    <div className="accordion-item" >
      <h2 className="accordion-header" id="headingOne" >
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#000033' :'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>what is Text-Buzz?</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode==='dark'?'#000033' :'white',color:props.mode==='dark'?'white':'black'}}>
        <div className="accordion-body" >
                  A single page web application can be used to create text at your own . Application contains various features like
          uppercase,lowercase converter , Removing extraspace from text , can download as text file in local device and lot more.
          Live update of number of words and character and preview the written context below makes this one really user friendly
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='dark'?'#000033' :'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>Hope it will be useful</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode==='dark'?'#000033' :'white',color:props.mode==='dark'?'white':'black'}}>
        <div className="accordion-body">
          <p>made with ❤️</p>
        </div>
      </div>
    </div>
    
  </div>
  </div>
  )
}
