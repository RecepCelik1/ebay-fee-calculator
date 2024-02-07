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
            { value: -10, label: 'Top Rated Plus'},
            { value: 0, label: 'Above Standard'},
            { value: 6, label: 'Below Standard'},
            { value: 5, label: 'Very High Item Not As Described'},
        ],
        
        eBayStoreOptions : [
            { value: 0, label: 'Starter Store'},
            { value: 1, label: 'Basic Store'},
            { value: 2, label: 'Premium Store'},
            { value: 3, label: 'Anchor Store'},
            { value: 4, label: 'Enterprise Store'},
        ],

        salesTaxOptions : [
            { value: "totalRevenue", label: 'Total Revenue'},
            { value: 'onlyItemPrice', label: 'Only Item Price'},
        ],

        coinsAndPaperMoneyCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 4000, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 7, insertionFee : 0}, table2 : {mainFeeRate : 7.35, peak1 : 1500, reducedFeeRate1: 5, peak2 : 10000, reducedFeeRate2 : 4.5, doublePeak : true}}, label: 'Bullion'},//

        ],

        clothingShoesAndAccessoriesCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0,}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 150 , reducedFeeRate : 8, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 150, reducedFeeRate: 7}}, label: 'Athletic Shoes'},//

            { value: {table1 : {mainFeeRate : 15, peak : 2000 , reducedFeeRate : 9, insertionFee : 0}, table2 : {mainFeeRate : 13, peak : 2000, reducedFeeRate: 7}}, label: "Women's Bags & Handbags"},//
        ],

        jewelleryAndWatchesCategory : [
            { value: {table1 : {mainFeeRate : 15, peak : 5000 , reducedFeeRate : 9, insertionFee : 0}, table2 : {mainFeeRate : 13, peak : 5000, reducedFeeRate: 7}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 15, peak1 : 1000 , reducedFeeRate1 : 6.5, peak2: 7500, reducedFeeRate2 : 3 ,insertionFee : 0, doublePeak : true}, table2 : {mainFeeRate : 12.5, peak1 : 1000, reducedFeeRate1: 4, peak2 : 5000, reducedFeeRate2 : 3, doublePeak : true}}, label: 'Watches, Parts & Accessories'},//
        ],

        businessAndIndustrialCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 3, peak : 15000 , reducedFeeRate : 0.5, insertionFee : 20}, table2 : {mainFeeRate : 2.5, peak : 15000, reducedFeeRate: 0.5}}, label: 'Heavy Equipment'},//

            { value: {table1 : {mainFeeRate : 3, peak : 15000 , reducedFeeRate : 0.5, insertionFee : 20}, table2 : {mainFeeRate : 2.5, peak : 15000, reducedFeeRate: 0.5}}, label: 'Commercial Printing Presses'},//

            { value: {table1 : {mainFeeRate : 3, peak : 15000 , reducedFeeRate : 0.5, insertionFee : 20}, table2 : {mainFeeRate : 2.5, peak : 15000, reducedFeeRate: 0.5}}, label: 'Food Trucks, Trailers & Carts'},//
        ],

        musicalInstrumentsAndGearCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 10, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'DJ Equipment'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Pro Audio Equipment'},//

            { value: {table1 : {mainFeeRate : 6.35, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 6.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Guitars & Basses'},//
        ],

        camerasAndPhotoCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Camera, Drone & Photo Accessories (except Memory Cards)'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Replacement Parts & Tools'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Tripods & Supports'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other Cameras & Photo'},//
        ],

        cellPhonesAndAccessoriesCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Cell Phones Accessories (except Memory Cards)'},//
        ],

        computersTabletsAndNetworkingCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 7, peak : 2500, reducedFeeRate: 2.35}}, label: 'Desktops & All-In-Ones'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 7, peak : 2500, reducedFeeRate: 2.35}}, label: 'Tablets & eBook Readers'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 7, peak : 2500, reducedFeeRate: 2.35}}, label: 'Computer Components & Parts'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 7, peak : 2500, reducedFeeRate: 2.35}}, label: 'Hard Drives (HDD, SSD & NAS)'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 7, peak : 2500, reducedFeeRate: 2.35}}, label: 'Monitors'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 7, peak : 2500, reducedFeeRate: 2.35}}, label: 'Printers'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: '3D Printers & Supplies'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Computer Cables & Connectors'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Keywords , Mice & Pointers'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Laptop & Desktop Accessories'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other Computers & Networking'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Power Protection, Distribution'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Tablet & eBook Reader Accs (except Memory Card & USB Adapters)'},//
        ],

        consumerElectronicsCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Multipurpose Batteries & Power'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Portable Audio Accessories'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'TV, Video & Home Audio'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Vehicle Electronics & GPS'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Virtual Reality'},//
        ],

        eBayMotorsCategory : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 11.35, peak : 1000, reducedFeeRate: 2.35}}, label: 'Automotive Tools & Supplies'},//
            
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 11.35, peak : 1000, reducedFeeRate: 2.35}}, label: 'Parts & Accessories'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 11.35, peak : 1000, reducedFeeRate: 2.35}}, label: 'Safety & Security Accessories'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9.35, peak : 1000, reducedFeeRate: 2.35}}, label: 'Tires'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 1000, reducedFeeRate: 2.35}}, label: 'Apparel, Protective Gear & Merchandise'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 1000, reducedFeeRate: 2.35}}, label: 'In-Car Technology, GPS & Security'},//
        ],

        musicCategories : [

            { value: {table1 : {mainFeeRate : 14.95, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 14.95, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Vinyl Records'},//

        ],

        videoGamesAndConsoles : [
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Video Game Accessories'},//
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Replacement Parts & Tools'},//
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Video Games'},//
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 7, peak : 2500, reducedFeeRate: 2.35}}, label: 'Video Game Consoles'},//
        ],

        itemCategoryOptions : [

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Antiques'},////

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Art'},////

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Baby'},////

            { value: {table1 : {mainFeeRate : 14.95, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 14.95, peak : 2500, reducedFeeRate: 2.35}}, label: 'Books & Magazines'},////

            { value: "0", label: 'Business & Industrial' , includeSubCategory : true, subCategory : "businessAndIndustrialCategory"},//

            { value: "1", label: 'Cameras & Photo', includeSubCategory : true, subCategory : "camerasAndPhotoCategory"},//

            { value: "2", label: 'Cell Phones & Accessories', includeSubCategory : true, subCategory : "cellPhonesAndAccessoriesCategory"},//

            { value: "3", label: 'Clothing, Shoes & Accessories' , includeSubCategory : true, subCategory : "clothingShoesAndAccessoriesCategory"},//

            { value: "4", label: 'Coins & Paper Money' , includeSubCategory : true, subCategory : "coinsAndPaperMoneyCategory"},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Collectibles'},//

            { value: "5", label: 'Computers / Tablets & Networking', includeSubCategory : true, subCategory : "computersTabletsAndNetworkingCategory"},//

            { value: "6", label: 'Consumer Electronics', includeSubCategory : true, subCategory : "consumerElectronicsCategory"},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Crafts'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Dolls & Bears'},//

            { value: {table1 : {mainFeeRate : 14.95, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 14.95, peak : 2500, reducedFeeRate: 2.35}}, label: 'DVDs, Movies & TV'},//

            { value: "7", label: 'eBay Motors', includeSubCategory : true, subCategory : "eBayMotorsCategory"},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Entertainment Memorabilia'},//
            
            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Gift Cards & Coupons'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Health & Beauty'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Home & Garden'},//

            { value: "8", label: 'Jewelry & Watches', includeSubCategory : true, subCategory : "jewelleryAndWatchesCategory"},//

            { value: "9", label: 'Music', includeSubCategory : true, subCategory : "musicCategories"},//

            { value: "10", label: 'Musical Instruments & Gear', includeSubCategory : true, subCategory : "musicalInstrumentsAndGearCategory"},//

            { value: {table1 : {mainFeeRate : 5, insertionFee : 0} ,table2 : {mainFeeRate : 5}}, label: 'NFTs'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Pet Supplies'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Potter & Glass'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Specialty Services'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Sporting Goods'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Sports Mem, Cards & Fan Shop'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Stamps'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Tickets & Experiences'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Toys & Hobbies'},//

            { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Travel'},//

            { value: "11", label: 'Video Games & Consoles', includeSubCategory : true, subCategory : "videoGamesAndConsoles"},//
        ],

    }


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
        <div className="flex flex-col sm:flex-row justify-center bg-gray-200 m-2 rounded-md p-5">
            <div className='flex flex-col w-full sm:w-[50%] pr-5'>



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
                                onChange={(selectedOption) => dispatch(handleDropdownChangeFunc({selectedOption , field : "subCategory" , subCategoryField : dropdowns.itemCategoryDropdonwOptions.subCategory}))}
                                value={dropdowns.subCategories[dropdowns.itemCategoryDropdonwOptions.subCategory]}
                            />
                        </div>
                </div>
                )}

            </div>
            <div className=' border-gray-400 border m-2'></div>

            <div className='flex flex-col w-full sm:w-[50%] pl-5'>

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