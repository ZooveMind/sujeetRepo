import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

interface FileUploadHandlerProps{
    fillData:Function
}

const FileUploadHandler:React.FC<FileUploadHandlerProps> = ({fillData}) =>{
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();

    const [fileName, setFileName] = useState("No file chosen");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedMode, setSelectedMode] = useState('0'); // default to '0'Ebssa, '1'Generic
    const [fileSize, setFileSize] = useState(0);    
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');


  useEffect(() => {
    if (!user) {
      alert("Please login to avail our service!!");
      navigate("/signIn");
    }
  }, [user, navigate]);   
    //file upload and name retrival
    const handleFileChange = (event:any) => {
        setSelectedFile(event.target.files[0]);
        const file = event.target.files[0];
        if(file) {
          setFileSize(file.size);
          if(file.name.length >10){
            let extPos = file.name.lastIndexOf('.');
            let ext = file.name.substring(extPos);  
            let name = file.name.substring(0,9)+"..."+ext;
            setFileName(name);
          }else{
            setFileName(file.name);
          }
        } else {
          setFileName("No file chosen");
        }
        setError('');
    };

    const handleModeChange = (e:any) => {
        setSelectedMode(e.target.value);
    };
    
    const handleUpload = async () => {
        if(user?.name == ""){
          alert("please sign In !!");
          navigate("/signIn")
        }
        if(!selectedFile) {
          alert("Please select a valid file");
          return;
        }
        if(fileSize == 0){
          alert("please select a non empty file")
        }
        setUploading(true);
        setError('');
        fillData(null);

        
        // Prepare form data
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('mode', selectedMode);
        if(user?.name){
          formData.append('userName', user.name);
        }
        formData.append('fileSize', fileSize.toString());
    
        try {
          //let link = "https://mat-visualizer.onrender.com/upload"
          let link = "http://192.168.1.13:5000/upload" 
          const response = await fetch(link, {
            method: 'POST',
            body: formData,
          })
    
          if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
          }
    
          // Expecting JSON array of results
          const data = await response.json();
          fillData(data);
         
        } catch (err) {
          console.error(err);
          setError('Failed to upload or process the file.');
        } finally {
          setUploading(false);
        }
    };
    return(
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-lg font-semibold mb-4">Upload H5 or Mat File</h2>
        <input
        type="file"
        id="file-input"
        accept=".h5,.mat"
        onChange={handleFileChange}
        className="hidden"
        />
        <div className="flex items-center justify-around space-x-2">
          <div>
            <label
                htmlFor="file-input"
                className="cursor-pointer bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all">
                Choose File
            </label>
            <span className="text-gray-400 text-sm ml-2">{fileName}</span>
          </div>
          <select name="" id="" className='bg-black  p-2 rounded-lg cursor-pointer' onChange={handleModeChange}>
            <option value="0">EBSSA</option>
            <option value="1">GENERIC</option>
          </select>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all" onClick={handleUpload}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
    </div>
    )
}

export default FileUploadHandler