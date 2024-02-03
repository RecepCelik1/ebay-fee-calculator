import { 
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  import { Doughnut } from 'react-chartjs-2';
  
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );


const Consequnces = () => {

    const usData = {
        labels : [`Fees & Costs => ${80}` , `Total Profit => ${20}`],
        datasets : [{
          label : '',
          data : [ 100-20 , 80 ],
          backgroundColor : ['blue' , 'green'],
          borderColor : ['blue' , 'green'],
        }]
      }

      const options = {

      }

    return (
        <div className="flex flex-col justify-center m-2">

            <div className="flex justify-between bg-slate-300 rounded-md mb-6">
                <div className="flex justify-center items-center mt-2 mb-2 ml-4">Total Profit Per Item</div>
                <div className="flex justify-center items-center mt-2 mb-2 mr-2">-$0.30</div>
            </div>

            <div className='flex flex-col w-full bg-slate-300 rounded-md sm:flex-row'>

                <div className="w-full sm:w-7/12 flex flex-col">

                    <div className="flex justify-between m-2">
                        <div className="">Profit Margin <p className="text-gray-600">Total Profit / Total Revenue</p></div>
                        <div className="flex justify-center items-center mr-2">0.00 %</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="">Return on Cost <p className="text-gray-600">Total Profit / Item Cost</p></div>
                        <div className="flex justify-center items-center mr-2">0.00 %</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="flex justify-center items-center font-bold">Breakeven Price</div>
                        <div className="flex justify-center items-center font-bold mr-2">$ 0.00</div>
                    </div>

                    <div className='border-slate-500 border m-2'></div>
                    
                    <div className="flex justify-between m-2">
                        <div className="flex justify-center items-center font-bold">Total Fees</div>
                        <div className="flex justify-center items-center font-bold mr-2">$ 0.00</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="">Average Fee Rate<p className="text-gray-600">Total Fees / Total Revenue</p></div>
                        <div className="flex justify-center items-center mr-2">100.00 %</div>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <div className='w-full bg-gray-100 flex justify-center items-center m-2 rounded-xl'>$ = US Dollar</div>
                    </div>
                </div>

                <div className="w-full sm:w-5/12 flex justify-center items-center mb-2 mt-2">
                    <Doughnut
                        data={usData  }
                        options={options}
                    ></Doughnut>
                </div>

            </div>

            <div className='text-white flex justify-center items-center mb-2 mt-2'>Detailed Breakdown</div>

            <div className='flex flex-col w-full bg-slate-300 rounded-md sm:flex-row'>
                
                <div className="w-full sm:w-7/12 flex flex-col mt-2">

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Revenue</div>
                        <div className="flex justify-center items-center mr-2">$ 0.00</div>
                    </div>

                    <div className='border-slate-500 border m-2'></div>

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Fees</div>
                        <div className="flex justify-center items-center mr-2">$ 0.00</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Costs</div>
                        <div className="flex justify-center items-center mr-2">$ 0.00</div>
                    </div>

                    <div className='border-slate-500 border m-2'></div>

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Profit</div>
                        <div className="flex justify-center items-center mr-2">$ 0.00</div>
                    </div>

                </div>


                <div className="w-full sm:w-5/12 flex justify-center items-center mb-2 mt-2">
                    <div className='flex flex-col'>
                        <div className='font-bold flex justify-center items-center'>Final Value Fee Rate</div>
                        <div className='text-gray-600'>(for the selected category and options)</div>
                        <div className='flex justify-center items-center mt-3'>12.35% on first $2,500</div>
                        <div className='flex justify-center items-center'>2.35% afterwards</div>
                        <div className='flex justify-center items-center'>Plus $0.3</div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Consequnces