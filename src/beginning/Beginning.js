/* import './beginning'

function Beginning(props) {
   return (
    <div className='card'>
      <img className='aa' src= {props.src}/>
      <div className="card-username"><h1>{props.name}</h1></div>
      <div className="card-desc"> <i>{props.desc}</i> </div>
    </div>
  ); 
}

export default Beginning; */

 import './beginning.scss'

function Beginning(props) {
    return (

    <div className='buttoons'>
        <div className='buttoon'>
          <button className={ `${props.background ? props.background: ""} ${props.type ? props.type: ""}`}>
            {props.btntext}
          </button>
        </div>
    </div>
    );  
  }
  
  export default Beginning; 

  