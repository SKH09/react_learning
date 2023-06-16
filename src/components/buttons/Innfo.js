import { useState } from 'react';
import './Innfo.scss';

export default function Innfo() {
  const [item, setItem] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      age: 23,
      city: 'Hamburg',
    }
  });

  function itemNameChange(e) {
    setItem({
      ...item,
      name: e.target.value
    });
  }

  function itemAgeChange(e) {
    setItem({
      ...item,
      artwork: {
        ...item.artwork,
        age: e.target.value
      }
    });
  }

  function itemCityChange(e) {
    setItem({
      ...item,
      artwork: {
        ...item.artwork,
        city: e.target.value
      }
    });
  }


  return (
    <>
    <div className='info-box'>
      <label>Name:<input value={item.name} onChange={itemNameChange}/></label>
      <label>Age:<input value={item.artwork.age} onChange={itemAgeChange}/></label>
      <label>City:<input value={item.artwork.city} onChange={itemCityChange}/></label>
    </div>
     <p>
        <h1>Content above displayed below </h1>
        <br />
        <i>{item.artwork.title}</i>
        {' by '}
        {item.name}
        <br />
        (located in {item.artwork.city})
     </p> 

    </>
  );
}
