import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { toggleSwitchFunc , optionsInputHandlingFunc , handleDropdownChangeFunc } from '../redux/optionSlice';

const Options = () => {

    const dispatch = useDispatch()

    const button = useSelector(state => state.options)
    const dropdowns = useSelector(state => state.options)

    const buttonSwitch = (section) => {
        dispatch(toggleSwitchFunc(section))
    }

    const dropDownOptions = {

        sellerStatusOptions : [
            { value: '0', label: 'Top Rated Plus'},
            { value: '1', label: 'Above Standard'},
            { value: '2', label: 'Below Standard'},
            { value: '3', label: 'Very High Item Not As Described'},
        ],
        
        eBayStoreOptions : [
            { value: '0', label: 'Starter Store'},
            { value: '1', label: 'Basic Store'},
            { value: '2', label: 'Premium Store'},
            { value: '3', label: 'Anchor Store'},
            { value: '4', label: 'Enterprise Store'},
        ],

        salesTaxOptions : [
            { value: '0', label: 'Total Revenue'},
            { value: '1', label: 'Only Item Price'},
        ],

        coinsAndPaperMoneyCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Bullion'},
        ],

        clothingShoesAndAccessoriesCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Athletic Shoes'},
            { value: '2', label: "Women's Bags & Handbags"},
        ],

        jewelleryAndWatchesCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Watches, Parts & Accessories'},
        ],

        businessAndIndustrialCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Heavy Equipment'},
            { value: '2', label: 'Commercial Printing Presses'},
            { value: '3', label: 'Food Trucks, Trailers & Carts'},
        ],

        musicalInstrumentsAndGearCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'DJ Equipment'},
            { value: '2', label: 'Pro Audio Equipment'},
            { value: '3', label: 'Guitars & Basses'},
        ],

        camerasAndPhotoCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Camera, Drone & Photo Accessories (except Memory Cards)'},
            { value: '2', label: 'Replacement Parts & Tools'},
            { value: '3', label: 'Tripods & Supports'},
            { value: '4', label: 'Other Cameras & Photo'},
        ],

        cellPhonesAndAccessoriesCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Cell Phones Accessories (except Memory Cards)'},
        ],

        computersTabletsAndNetworkingCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Desktops & All-In-Ones'},
            { value: '2', label: 'Tablets & eBook Readers'},
            { value: '3', label: 'Computer Components & Parts'},
            { value: '4', label: 'Hard Drives (HDD, SSD & NAS)'},
            { value: '5', label: 'Monitors'},
            { value: '6', label: 'Printers'},
            { value: '7', label: '3D Printers & Supplies'},
            { value: '8', label: 'Computer Cables & Connectors'},
            { value: '9', label: 'Keywords , Mice & Pointers'},
            { value: '10', label: 'Laptop & Desktop Accessories'},
            { value: '11', label: 'Other Computers & Networking'},
            { value: '12', label: 'Power Protection, Distribution'},
            { value: '13', label: 'Tablet & eBook Reader Accs (except Memory Card & USB Adapters)'},
        ],

        consumerElectronicsCategory : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Multipurpose Batteries & Power'},
            { value: '2', label: 'Portable Audio Accessories'},
            { value: '3', label: 'TV, Video & Home Audio'},
            { value: '4', label: 'Vehicle Electronics & GPS'},
            { value: '5', label: 'Virtual Reality'},
        ],

        eBayMotorsCategory : [
            { value: '0', label: 'Automotive Tools & Supplies'},
            { value: '1', label: 'Parts & Accessories'},
            { value: '2', label: 'Safety & Security Accessories'},
            { value: '3', label: 'Tires'},
            { value: '4', label: 'Apparel, Protective Gear & Merchandise'},
            { value: '5', label: 'In-Car Technology, GPS & Security'},
        ],

        musicCategories : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Vinyl Records'},
        ],

        videoGamesAndConsoles : [
            { value: '0', label: 'Other'},
            { value: '1', label: 'Video Game Accessories'},
            { value: '2', label: 'Replacement Parts & Tools'},
            { value: '3', label: 'Video Games'},
            { value: '4', label: 'Video Game Consoles'},
        ],

        itemCategoryOptions : [
            { value: '0', label: 'Other'},
            { value: '01', label: 'Antiques'},
            { value: '1', label: 'Art'},
            { value: '2', label: 'Baby'},
            { value: '3', label: 'Books & Magazine'},

            { value: '4', label: 'Business & Industrial' , includeSubCategory : true, subCategory : "businessAndIndustrialCategory", subField : ""},

            { value: '5', label: 'Cameras & Photo', includeSubCategory : true, subCategory : "camerasAndPhotoCategory"},

            { value: '6', label: 'Cell Phones & Accessories', includeSubCategory : true, subCategory : "cellPhonesAndAccessoriesCategory"},

            { value: '7', label: 'Clothing, Shoes & Accessories' , includeSubCategory : true, subCategory : "clothingShoesAndAccessoriesCategory"},

            { value: '8', label: 'Coins & Paper Money' , includeSubCategory : true, subCategory : "coinsAndPaperMoneyCategory"},

            { value: '9', label: 'Collectibles'},

            { value: '10', label: 'Computers / Tablets & Networking', includeSubCategory : true, subCategory : "computersTabletsAndNetworkingCategory"},

            { value: '11', label: 'Consumer Electronics', includeSubCategory : true, subCategory : "consumerElectronicsCategory"},

            { value: '12', label: 'Crafts'},
            { value: '13', label: 'Dolls & Bears'},
            { value: '14', label: 'DVDs, Movies & TV'},

            { value: '15', label: 'eBay Motors', includeSubCategory : true, subCategory : "eBayMotorsCategory"},

            { value: '16', label: 'Entertainment Memorabilia'},
            { value: '17', label: 'Gift Cards & Coupons'},
            { value: '18', label: 'Health & Beauty'},
            { value: '19', label: 'Home & Garden'},

            { value: '20', label: 'Jewelry & Watches', includeSubCategory : true, subCategory : "jewelleryAndWatchesCategory"},

            { value: '21', label: 'Music', includeSubCategory : true, subCategory : "musicCategories"},

            { value: '22', label: 'Musical Instruments & Gear', includeSubCategory : true, subCategory : "musicalInstrumentsAndGearCategory"},

            { value: '23', label: 'NFTs'},
            { value: '24', label: 'Pet Supplies'},
            { value: '25', label: 'Potter & Glass'},
            { value: '26', label: 'Specialty Services'},
            { value: '27', label: 'Sporting Goods'},
            { value: '28', label: 'Sports Mem, Cards & Fan Shop'},
            { value: '29', label: 'Stamps'},
            { value: '30', label: 'Tickets & Experiences'},
            { value: '31', label: 'Toys & Hobbies'},
            { value: '32', label: 'Travel'},

            { value: '33', label: 'Video Games & Consoles', includeSubCategory : true, subCategory : "videoGamesAndConsoles"},
        ],

    }

        console.log(dropdowns.itemCategoryDropdonwOptions)

      const customStyles = { //=> for dropdown menu customize
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
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '10px',
          marginLeft: ''
        }),
      };


      const handleOptionInputChange = (event , field) => {

        const filteredValue = event.target.value.replace(/[^0-9,.]/g, "");
        let parsedValue = parseFloat(filteredValue.replace(",", "."));
    
        if(isNaN(parsedValue)){
          parsedValue = 0
        }
        
        dispatch(optionsInputHandlingFunc({parsedValue , field}))

      }

      

    return (
        <div className="flex flex-col sm:flex-row justify-center bg-gray-200 m-2 rounded-md">
            <div className='flex flex-col w-full sm:w-[50%]'>



                <div className='flex justify-between m-1'>
                    <div className='flex justify-center items-center'>Seller Status</div>
                    <div>
                        <Select
                            className=''
                            options={dropDownOptions.sellerStatusOptions}
                            styles={customStyles}
                            isSearchable
                            onChange={(selectedOption) => dispatch(handleDropdownChangeFunc({selectedOption , field : "sellerStatus"}))}
                            value={dropdowns.sellerStatusDropdownOptions}
                        />
                    </div>
                </div>
                <div className='flex flex-col m-1'>
                    <div className='mb-1'>Item Category</div>
                    <div>
                        <Select
                            className=''
                            options={dropDownOptions.itemCategoryOptions}
                            styles={customStyles}
                            isSearchable
                            onChange={(selectedOption) => dispatch(handleDropdownChangeFunc({selectedOption , field : "itemCategory"}))}
                            value={dropdowns.itemCategoryDropdonwOptions}
                        />
                    </div>
                </div>

                {dropdowns.itemCategoryDropdonwOptions?.includeSubCategory && (
                <div className='flex flex-col m-1'>
                    <div className='mb-1'>Item Sub Category</div>
                        <div>
                            <Select
                                className=''
                                options={dropDownOptions[dropdowns.itemCategoryDropdonwOptions.subCategory]}
                                styles={customStyles}
                                isSearchable
                            />
                        </div>
                </div>
                )}

            </div>
            <div className=' border-gray-400 border m-2'></div>

            <div className='flex flex-col w-full sm:w-[50%]'>

                <div className='flex flex-col'>
                    <div className='m-1 flex justify-between'>
                        <div className='flex justify-center items-center'>eBay Store</div>
                        <div>
                        <button
                        onClick={() => buttonSwitch("eBayStore")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button.eBayStore ? 'bg-sky-600' : 'bg-gray-400'
                        } text-white px-1 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button.eBayStore ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-5 h-5 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button.eBayStore && (
                        <div className='m-1'>
                            <Select
                                className=''
                                options={dropDownOptions.eBayStoreOptions}
                                styles={customStyles}
                                isSearchable
                                onChange={(selectedOption) => dispatch(handleDropdownChangeFunc({selectedOption , field : "eBayStore"}))}
                                value={dropdowns.ebayStoreDropdownOptions}
                            />
                        </div>
                    )}
                </div>

                <div className='m-1 flex justify-between'>
                    <div className='flex justify-center items-center'>International Sale</div>
                    <div>
                    <button
                      onClick={() => buttonSwitch("internationalSale")}
                      className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                        button.internationalSale ? 'bg-sky-600' : 'bg-gray-400'
                    } text-white px-1 py-1 rounded-full`}
                    >
                      <span
                        className={`${
                          button.internationalSale ? 'translate-x-full' : 'translate-x-0'
                        } inline-block w-5 h-5 bg-white rounded-full transform transition-transform`}
                      />
                    </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='m-1 flex justify-between'>
                        <div className='flex justify-center items-center'>Promoted Listing</div>
                        <div>
                        <button
                        onClick={() => buttonSwitch("promotedListing")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button.promotedListing ? 'bg-sky-600' : 'bg-gray-400'
                        } text-white px-1 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button.promotedListing ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-5 h-5 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button.promotedListing && (
                        <div className='flex justify-between m-1'>
                            <div className='flex justify-center items-center'>Enter Ad Rate</div>
                            <div className='relative'>
                                <input className="p-1 w-24 rounded-md"
                                        onChange={(e) => handleOptionInputChange(e , "promotedListingAdRate")}
                                />
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
                        onClick={() => buttonSwitch("salesTax")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button.salesTax ? 'bg-sky-600' : 'bg-gray-400'
                        } text-white px-1 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button.salesTax ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-5 h-5 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button.salesTax && (
                        <div className='flex flex-col'>
                            <div className='flex justify-between m-1'>
                                <div className='flex justify-center items-center'>Apply Sales Tax On</div>
                                <div>
                                    <Select
                                        className=''
                                        options={dropDownOptions.salesTaxOptions}
                                        styles={customStyles}
                                        isSearchable
                                        onChange={(selectedOption) => dispatch(handleDropdownChangeFunc({selectedOption , field : "salesTax"}))}
                                        value={dropdowns.salesTaxDropdownOptions}
                                    />
                                </div>
                            </div>
                            <div className='flex justify-between m-1'>
                                <div className='flex justify-center items-center'>Enter Sales Tax Rate</div>
                                <div className='relative'>
                                    <input className="p-1 w-24 rounded-md"
                                            onChange={(e) => handleOptionInputChange(e, "salesTaxRate")}
                                    />
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
                        onClick={() => buttonSwitch("otherCosts")}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button.otherCosts ? 'bg-sky-600' : 'bg-gray-400'
                        } text-white px-1 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button.otherCosts ? 'translate-x-full' : 'translate-x-0'
                            } inline-block w-5 h-5 bg-white rounded-full transform transition-transform`}
                        />
                        </button>
                        </div>
                    </div>
                    {button.otherCosts && (
                        <div className='flex justify-between mr-1 ml-1 mt-1 mb-3'>
                                <input placeholder='Enter other costs in dollar' className="p-1 w-full rounded-md"
                                        onChange={(e) => handleOptionInputChange(e , "otherCostAmount")}
                                />
                        </div>
                    )}
                </div>




            </div>
        </div>
    )
}

export default Options