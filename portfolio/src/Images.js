import { usestate } from 'react';
import './Images.css';

function Images(props){
//  const colormap = props.colormap;
//  const colors = colormap.map((color) => 
//      <div style={{backgroundColor: `${color}`, width: 'min(300px, 30vh)', height: 'min(240px, 24vh)', margin: '25px'}}>{color}</div>
//  );

  const photomap = props.photomap;
  const photos = photomap.map((photo) => 
    photo["orient"]==="l" ? <img style={{width: 'min(300px, 30vh)', height: 'min(240px, 24vh)', margin: '25px'}} src={`./assets/photos/${photo["path"]}`} /> : <img style={{width: 'min(240px, 24vh)', height: 'min(300px, 30vh)', margin: '25px'}} src={`./assets/photos/${photo["path"]}`} />
//    <img style={{width: 'min(240px, 24vh)', height: 'min(300px, 30vh)', margin: '25px'}} src={`./assets/photos/${photo["path"]}`} />

  );


  return (
    <div className='image-container'>
    {photos}
    </div>
  )
}

export default Images;
