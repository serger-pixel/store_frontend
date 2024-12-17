import { useState } from 'react';
import { getImage, saveImage, types } from '../services/imageService';
import "../../css/profile.css"

/**
 * Функция-компонент для загрузки изображений
 * @param props компонент(element)
 * @returns компонент для загрузки изображений
 */
function FileUploader(props){
      const [file, setFile] = useState(null);
      return (
        <div>
            <label>
                <input className="form-control" type="file" id="file" name='file' onChange={(event)=>{
                  setFile(event.target.files[0]);
                }
                } />
            </label>
            <button type='button' className="btn btn-primary" id="btnImage" onClick={
              ()=>{
                let data = new FormData;
                if (file===null){
                  document.getElementById("fileErr").innerHTML = "Файл не выбран"
                }
                else{
                  let type = file.type.split("/")[1];
                  console.log(type)
                  if (types.includes(type)){
                    data.append("file",file);
                    saveImage(data, props.element);
                  }
                  else{
                    document.getElementById("fileErr").innerHTML = "Неверный тип";
                }
                }
              }
            }>CLICK</button>
            <div id="fileErr"></div>
        </div>
      );
    }


export default FileUploader;