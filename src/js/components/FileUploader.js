import { useState } from 'react';
import { getImage, saveImage } from '../services/imageService';

function FileUploader(props){
      const [file, setFile] = useState(null);
      return (
        <div>
            <label>
                <input type="file" id="file" name='file' onChange={(event)=>{
                  setFile(event.target.files[0]);
                }
                } />
            </label>
            <button type='button' onClick={
              ()=>{
                let data = new FormData;
                data.append("file",file);
                saveImage(data, props.element)
              }
            }>CLICK</button>
        </div>
      );
    }


export default FileUploader;