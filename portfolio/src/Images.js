import { usestate } from 'react';
import './Images.css';

function Images(props){
  const colormap = props.colormap;
  const colors = colormap.map((color) => 
      <div style={{backgroundColor: `${color}`, width: 'min(300px, 30vh)', height: 'min(240px, 24vh)', margin: '25px'}}>{color}</div>
  );

  return (
    <div className='image-container'>
    {colors}
    </div>
  )
}

  export default Images;
