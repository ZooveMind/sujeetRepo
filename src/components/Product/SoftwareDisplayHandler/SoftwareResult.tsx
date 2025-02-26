interface IResult {
    variable?: string;  
    file?: string;    
    value?: string; 
    stats?: {
        mean?: number;
        std?: number;
        min?: number;
        max?: number;
      };
}
interface SoftwareResultProps {
    results:IResult[]
}

const SoftwareResult:React.FC<SoftwareResultProps> = ({results})=>{
    if (!results || results.length === 0) {
        return (
          <div className="mt-8 text-center text-gray-400">
            No results were generated. Check your .mat file format.
          </div>
        );
      }
    return(
        <div className="max-w-7xl mx-auto px-4 mt-8">
        <h2 className="text-3xl font-bold text-white mb-6">Processed Results</h2>
  
        {/* Responsive grid: 1 col on small screens, 2 on medium, 3 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center text-center"
            >
              {/* Variable / Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.variable || 'Untitled'}
              </h3>
  
              {/* If there's a plot (item.file), show the image */}
              {item.file ? (
                <img
                  src={item.file}
                  alt={item.variable}
                  className="max-h-48 w-auto object-contain mb-2 rounded border border-gray-700"
                />
              ) : (
                // No plot available => show text or fallback
                <div className="text-gray-400 mb-2">
                  {/* <p className="mb-1">No plot available.</p> */}
                  {item.value && (
                    <p className="text-sm">{item.value}</p>
                  )}
                </div>
              )}
  
              {/* If there's a stats object, display it */}
              {item.stats && (
                <p className="text-sm text-gray-300 mt-2">
                  mean={item.stats.mean?.toFixed(2)}, std={item.stats.std?.toFixed(2)}, 
                  min={item.stats.min?.toFixed(2)}, max={item.stats.max?.toFixed(2)}
                </p>
              )}
  
              {/* If there's textual value to show even with a plot */}
              {item.file && item.value && (
                <p className="text-sm text-gray-400 mt-2">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    )
}

export default SoftwareResult


{/* <div className="mt-8">
                <h2 className="text-3xl font-bold mb-6">Processed Results</h2>
                {results.length === 0 && (
                  <p className="text-gray-300">No results returned.</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {results.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col items-center"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {item.variable || 'Unknown'}
                      </h3>
                      {item.file ? (
                        <img
                          src={item.file}
                          alt={item.variable}
                          className="max-w-full h-auto mb-2 border border-gray-700"
                        />
                      ) : (
                        <p className="text-gray-400 mb-2">No plot available.</p>
                      )}
                      {item.value && (
                        <p className="text-gray-200 text-sm italic">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
    
                <div className="mt-6">
                  <button
                    onClick={() => setResults(null)}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Upload Another File
                  </button>
                </div>
              </div> */}
              