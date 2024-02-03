import Consequnces from "./components/consequences";
import Options from "./components/options";

function App() {

  return (
<div className="bg-gray-800 w-full h-full flex justify-center items-center overflow-x-auto">
  <div className="main-container flex flex-col w-full sm:max-w-[750px]">



  <div className="flex flex-col sm:flex-row justify-center">
            <div className='flex flex-col w-full sm:w-[50%]'>

              <div className="bg-slate-300 rounded-md m-2">
                <div className="flex justify-between m-2">
                  <div>Item Sold Price</div>
                  <div><input className="p-1 w-24 rounded-md"/></div>
                </div>
                <div className="flex justify-between m-2">
                  <div>Item Cost</div>
                  <div><input className="p-1 w-24 rounded-md"/></div>
                </div>
              </div>

            </div>

            <div className='flex flex-col w-full sm:w-[50%]'>
              <div className="bg-slate-300 rounded-md m-2">

                <div className="flex justify-between m-2">
                  <div>Shipping Charge</div>
                  <div><input className="p-1 w-24 rounded-md"/></div>
                </div>

                <div className="flex justify-between m-2">
                  <div>Shipping Cost</div>
                  <div><input className="p-1 w-24 rounded-md"/></div>
                </div>

              </div>
            </div>
        </div>



    <Options/>

    <div className="flex justify-center items-center text-white m-2">Estimated Results</div>

    <Consequnces/>

  </div>
</div>
  );
}

export default App;