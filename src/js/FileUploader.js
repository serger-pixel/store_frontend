function FileUploader()
{
    console.log(document.getElementById("file"))
    return(
    <label>
      <input type="file" id="file"/>
    </label>
    )
}
export default FileUploader;