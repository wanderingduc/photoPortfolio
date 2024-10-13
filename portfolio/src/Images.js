import { usestate } from 'react';

function Images(props){
  const colormap = ['red', 'blue', 'green'];

  return (
    <div>
    {colormap.map((item, index) => (<div style={{background: `${item}`, height: '20px', width: '20px'}}>asdf</div>))}
    </div>
  )
}

  export default Images;
