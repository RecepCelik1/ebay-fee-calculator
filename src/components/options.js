import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { toggleSwitchFunc } from '../redux/optionSlice';

const Options = () => {
    const dispatch = useDispatch()

    const button = useSelector(state => state.options.toggle)

    const buttonSwitch = (section) => {
        dispatch(toggleSwitchFunc(section))
    }

    const countries = [
        { value: 'US', label: 'United States', flag: '🇺🇸' },
        { value: 'UK', label: 'United Kingdom', flag: 'UK' },
      ];

      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px solid #ccc',   
          color: state.isSelected ? 'white' : 'black',
          background: state.isSelected ? '#007BFF' : state.isFocused ? '#16330014' : 'white',
          padding: 10,
        }),
        control: (provided) => ({
          ...provided,
          width: '100%',
          height: '24px',
          border: '1px solid black',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '10px',
          marginLeft: ''
        }),
      };




    return (
        <div className="flex flex-col sm:flex-row justify-center bg-slate-300 m-2 rounded-md">
            <div className='flex flex-col w-full sm:w-[50%]'>
                <div className='flex justify-between m-1'>
                    <div className='flex justify-center items-center'>Seller Status</div>
                    <div>
                        <Select
                            className=''
                            options={countries}
                            styles={customStyles}
                            placeholder="Above Standarts"
                            isSearchable
                        />
                    </div>
                </div>
                <div className='flex flex-col m-1'>
                    <div className='mb-1'>Item Category</div>
                    <div>
                        <Select
                            className=''
                            options={countries}
                            styles={customStyles}
                            placeholder="Above Standarts"
                            isSearchable
                        />
                    </div>
                </div>
            </div>
            <div className=' border-slate-500 border m-2'></div>

            <div className='flex flex-col w-full sm:w-[50%]'>

                <div className='flex flex-col'>
                    <div className='m-1 flex justify-between'>
                        <div className='flex justify-center items-center'>eBay Store</div>
                        <div>
                        <button
                        onClick={() => buttonSwitch("eBayStore")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button ? 'bg-green-500' : 'bg-red-500'
                        } text-white px-2 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-4 h-4 mt-1 mb-1 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button && (
                        <div className='m-1'>
                            <Select
                                className=''
                                options={countries}
                                styles={customStyles}
                                placeholder="Above Standarts"
                                isSearchable
                            />
                        </div>
                    )}
                </div>

                <div className='m-1 flex justify-between'>
                    <div className='flex justify-center items-center'>International Sale</div>
                    <div>
                    <button
                      onClick={() => buttonSwitch("eBayStore")}
                      className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                        button ? 'bg-green-500' : 'bg-red-500'
                      } text-white px-2 py-1 rounded-full`}
                    >
                      <span
                        className={`${
                          button ? 'translate-x-full' : 'translate-x-0'
                        } inline-block w-4 h-4 mt-1 mb-1 bg-white rounded-full transform transition-transform`}
                      />
                    </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='m-1 flex justify-between'>
                        <div className='flex justify-center items-center'>Promoted Listing</div>
                        <div>
                        <button
                        onClick={() => buttonSwitch("eBayStore")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button ? 'bg-green-500' : 'bg-red-500'
                        } text-white px-2 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-4 h-4 mt-1 mb-1 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button && (
                        <div className='flex justify-between m-1'>
                            <div className='flex justify-center items-center'>Enter Ad Rate</div>
                            <div className='relative'>
                                <input className="p-1 w-24 rounded-md"/>
                                <span className='absolute top-1 right-2'>%</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex flex-col'>
                    <div className='m-1 flex justify-between'>
                        <div className='flex justify-center items-center'>Sales Tax</div>
                        <div>
                        <button
                        onClick={() => buttonSwitch("eBayStore")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button ? 'bg-green-500' : 'bg-red-500'
                        } text-white px-2 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-4 h-4 mt-1 mb-1 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button && (
                        <div className='flex flex-col'>
                            <div className='flex justify-between m-1'>
                                <div className='flex justify-center items-center'>Apply Sales Tax On</div>
                                <div>
                                    <Select
                                        className=''
                                        options={countries}
                                        styles={customStyles}
                                        placeholder="Above Standarts"
                                        isSearchable
                                    />
                                </div>
                            </div>
                            <div className='flex justify-between m-1'>
                                <div className='flex justify-center items-center'>Enter Sales Tax Rate</div>
                                <div className='relative'>
                                    <input className="p-1 w-24 rounded-md"/>
                                    <span className='absolute top-1 right-2'>%</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex flex-col'>
                    <div className='m-1 flex justify-between'>
                        <div className='flex justify-center items-center'>Other Costs</div>
                        <div>
                        <button
                        onClick={() => buttonSwitch("eBayStore")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button ? 'bg-green-500' : 'bg-red-500'
                        } text-white px-2 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-4 h-4 mt-1 mb-1 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button && (
                        <div className='flex justify-between mr-1 ml-1 mt-1 mb-3'>
                                <input placeholder='Enter other costs in dollar' className="p-1 w-full rounded-md"/>
                        </div>
                    )}
                </div>




            </div>
        </div>
    )
}

export default Options