import { useState } from "react";
import SoftwareResult from './SoftwareDisplayHandler/SoftwareResult';
import FileUploadHandler from './SoftwareDisplayHandler/FileUploadHandler';
import logo from '../../assets/zooveLogo.jpeg'

interface IResult {
  variable?: string;  
  file?: string;    
  value?: string; 
}

const Software = () => {
  const [results, setResults] = useState<IResult[] | null>(null);
  const handleResult = (responce:IResult[]) =>{
    setResults(responce)
  }
 

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black text-white scroll-smooth overflow-x-hidden ">
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md ">
        <div  className="max-w-87rem mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-2">
              <img className='max-w-20 rounded-full' src={logo} alt="logo" />
            </div>
            <div className="flex flex-col gap-1 md:flex-row md:gap-8 items-cente">
              <a href="/software" className="text-gray-300 hover:text-white transition-colors">Mat Visualizer</a>
              <a href="/software" className="text-gray-300 hover:text-white transition-colors">Other softwares</a>
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
            </div>
          </div>
        </div>
      </nav>


        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
          {!results ? 
            <FileUploadHandler fillData={handleResult} />
              :
            (
              <>
                <SoftwareResult results={results}/>
                <div className="mt-6">
                  <button
                    onClick={() => setResults(null)}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
                    Upload Another File
                  </button>
                </div>
              </>
            )
          }    
        </div>
        <div className="border-t border-gray-800 text-center text-gray-400 text-sm mt-8 py-4">
          <p>&copy; {new Date().getFullYear()} Zoove. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Software