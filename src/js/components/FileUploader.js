import { useState } from 'react';
import {saveImage} from '../services/imageService';

function FileUploader()
{
    console.log(document.getElementById("file"))
    const [file, setFile] = useState();
    return(
    <div>
      <label>
        <input type="file" id="file" name='file'/>
      </label>
      <button type='button' onClick={() => {
        setFile(document.getElementById("file").files[0]);
        let data = new FormData();
        data.append("file", file);
        saveImage(data);
      }}>CLICK</button>
    </div>
    )
}
export default FileUploader;