import './App.scss';
import Gallery from './components/Buttons/Gallery';


export default function App() {
  return (
    <>
    <Toolbar 
    onPlayMovie={() => alert ('Playing!!')}
    onUploadImage={() => alert ('Uploading!!')}
    /> 
        <Gallery />
    </>
  );
}

 function Toolbar({onPlayMovie, onUploadImage}){
  return (
  <div className='button-wrapper'>
    <div className='buttons'>
      <Button className="video" onClick={onPlayMovie}>Play Movie</Button>
      <Button className="img" onClick={onUploadImage}>Upload Image</Button>
    </div>
  </div>
  );
}
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
