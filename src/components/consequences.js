import { 
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  import { Doughnut } from 'react-chartjs-2';

import { useSelector } from 'react-redux';

import CountryFlag from 'react-country-flag';  

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );

const Consequnces = () => {

    const priceContents = useSelector(state => state.prices)
    const optionsContents = useSelector(state => state.options)

    let itemPrice = priceContents.itemSoldPrice
    let itemCost = priceContents.itemCost   
    let shippingCharge = priceContents.shippingCharge
    let shippingCost = priceContents.shippingCost

    let itemMarketSoldPrice = itemPrice + shippingCharge;

    let salesTaxValue = 0;

    optionsContents.salesTax === false ? salesTaxValue = 0 : salesTaxValue = optionsContents.salesTaxRate 

    let otherCosts;
    optionsContents.otherCosts === false ? otherCosts = 0 : otherCosts = optionsContents.otherCostAmount

    let doublePeak = false;
    let peak ;
    let peak1 ;
    let peak2 ;
    let mainFeeRate ;
    let reducedFeeRate ;
    let reducedFeeRate1 ;
    let reducedFeeRate2 ;
    //for the final value fee

    let theFinalValueFee = 0
    let feeRate ;
    let constantFinalValueFee = 0.30

    //table1 
    if(optionsContents.eBayStore === false || optionsContents.ebayStoreDropdownOptions.value === 0){

 
        if(optionsContents.itemCategoryDropdonwOptions?.includeSubCategory === true) {

            if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1?.doublePeak === true){

                doublePeak = true;
                mainFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.mainFeeRate

                reducedFeeRate1 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.reducedFeeRate1
                
                reducedFeeRate2 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.reducedFeeRate2

                peak1 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak1

                peak2 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak2

                if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak1 >= itemMarketSoldPrice){

                    feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.mainFeeRate

                } else if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak1 <= itemMarketSoldPrice && itemMarketSoldPrice <= optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak2){

                    feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.reducedFeeRate1

                } else {

                    feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.reducedFeeRate2

                }


            } else if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak >= itemMarketSoldPrice){
                
                doublePeak = false

                mainFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.mainFeeRate

                reducedFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.reducedFeeRate

                peak = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak

                feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.mainFeeRate

            } else {
                
                doublePeak = false

                mainFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.mainFeeRate

                reducedFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.reducedFeeRate

                peak = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.peak

                feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.reducedFeeRate

            }

            theFinalValueFee = (itemMarketSoldPrice * feeRate)/100 + constantFinalValueFee + optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table1.insertionFee

        } else {

            if(optionsContents.itemCategoryDropdonwOptions.value.table1.peak >= itemMarketSoldPrice){

                doublePeak = false

                mainFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table1.mainFeeRate

                peak = optionsContents.itemCategoryDropdonwOptions.value.table1.peak

                reducedFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table1.reducedFeeRate

                feeRate = optionsContents.itemCategoryDropdonwOptions.value.table1.mainFeeRate
            } else {

                doublePeak = false

                mainFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table1.mainFeeRate

                peak = optionsContents.itemCategoryDropdonwOptions.value.table1.peak

                reducedFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table1.reducedFeeRate

                feeRate = optionsContents.itemCategoryDropdonwOptions.value.table1.reducedFeeRate
            }


            if(optionsContents.itemCategoryDropdonwOptions.label === "NFTs"){
            feeRate = optionsContents.itemCategoryDropdonwOptions.value.table1.mainFeeRate
            }


            theFinalValueFee = (itemMarketSoldPrice * feeRate)/100 + constantFinalValueFee + optionsContents.itemCategoryDropdonwOptions.value.table1.insertionFee

        }

        if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions?.subCategory]?.label === "Athletic Shoes" && itemMarketSoldPrice > 150){
            theFinalValueFee = theFinalValueFee - constantFinalValueFee
        }

    }

    //table2

    if(optionsContents.eBayStore === true && optionsContents.ebayStoreDropdownOptions.value > 0){


        if(optionsContents.itemCategoryDropdonwOptions?.includeSubCategory === true) {

            if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2?.doublePeak === true){

                doublePeak = true;
                mainFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.mainFeeRate

                reducedFeeRate1 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.reducedFeeRate1
                
                reducedFeeRate2 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.reducedFeeRate2

                peak1 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak1

                peak2 = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak2

                if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak1 >= itemMarketSoldPrice){

                    feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.mainFeeRate

                } else if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak1 <= itemMarketSoldPrice && itemMarketSoldPrice <= optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak2){

                    feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.reducedFeeRate1

                } else {

                    feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.reducedFeeRate2

                }


            } else if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak >= itemMarketSoldPrice){


                doublePeak = false

                mainFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.mainFeeRate

                reducedFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.reducedFeeRate

                peak = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak


                feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.mainFeeRate

            } else {

                doublePeak = false

                mainFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.mainFeeRate

                reducedFeeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.reducedFeeRate

                peak = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.peak

                feeRate = optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions.subCategory].value.table2.reducedFeeRate
            }

        } else {

            if(optionsContents.itemCategoryDropdonwOptions.value.table2.peak >= itemMarketSoldPrice){

                doublePeak = false

                mainFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table2.mainFeeRate

                peak = optionsContents.itemCategoryDropdonwOptions.value.table2.peak

                reducedFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table2.reducedFeeRate

                feeRate = optionsContents.itemCategoryDropdonwOptions.value.table2.mainFeeRate
            } else {

                doublePeak = false

                mainFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table2.mainFeeRate

                peak = optionsContents.itemCategoryDropdonwOptions.value.table2.peak

                reducedFeeRate = optionsContents.itemCategoryDropdonwOptions.value.table2.reducedFeeRate

                feeRate = optionsContents.itemCategoryDropdonwOptions.value.table2.reducedFeeRate
            }

        }

        if(optionsContents.itemCategoryDropdonwOptions.label === "NFTs"){
            feeRate = optionsContents.itemCategoryDropdonwOptions.value.table2.mainFeeRate
        }

        theFinalValueFee = (itemMarketSoldPrice * feeRate)/100 + constantFinalValueFee

        if(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions?.subCategory]?.label === "Athletic Shoes" && itemMarketSoldPrice > 150){
            theFinalValueFee = theFinalValueFee - constantFinalValueFee 
        }

    }
    
    console.log("fee rate : ", feeRate)
    //for sales tax
    let salesTaxCost;

    if(optionsContents.salesTaxDropdownOptions.value === "totalRevenue"){
        salesTaxCost = (itemMarketSoldPrice*salesTaxValue*feeRate)/(100**2)
    } else {
        salesTaxCost = (itemPrice*salesTaxValue*feeRate)/(100**2)
    }
     
    console.log("sales tax rate : ", salesTaxValue , "sales tax cost : ", salesTaxCost)
    
    //for promoted listing

    let absolutePromotedListingAdRate ;

    optionsContents.promotedListing === false ? absolutePromotedListingAdRate = 0 : optionsContents.promotedListingAdRate === 0 ? absolutePromotedListingAdRate = 0 : absolutePromotedListingAdRate = (optionsContents.promotedListingAdRate + ((salesTaxValue*itemPrice)/10)/itemMarketSoldPrice)

    let promotedListingCost = (itemMarketSoldPrice*absolutePromotedListingAdRate)/100
    console.log("absolute promoted listing rate : ", absolutePromotedListingAdRate , "promoted listing costs : ", promotedListingCost)
    
    //international sale
    let internationalSaleDifference;

    if(optionsContents.internationalSale === true){

        if(optionsContents.salesTaxDropdownOptions.value === "totalRevenue"){

            console.log("item market sold price is equal to : ", itemMarketSoldPrice)

            internationalSaleDifference = (itemMarketSoldPrice * 1.65/100) + (itemMarketSoldPrice*salesTaxValue/100)*(1.65/100)

        } else {
            internationalSaleDifference = (itemMarketSoldPrice * 1.65/100) + (itemPrice*salesTaxValue/100)*(1.65/100)
        }

    }else {
        internationalSaleDifference = 0
    }
    internationalSaleDifference = parseFloat(internationalSaleDifference.toFixed(2))
    console.log("international sale difference : ", internationalSaleDifference)

    //
    console.log("the final value fee : " , theFinalValueFee)

      let sellertatusDifference;

      if(optionsContents.sellerStatusDropdownOptions.value === -10){

        sellertatusDifference = (salesTaxCost + theFinalValueFee)*optionsContents.sellerStatusDropdownOptions.value/100

      } else {
        sellertatusDifference = itemMarketSoldPrice*optionsContents.sellerStatusDropdownOptions.value/100
      }

      let totalFees = sellertatusDifference + theFinalValueFee + internationalSaleDifference + promotedListingCost + salesTaxCost
      
      let costWithoutFees = itemCost + shippingCost + otherCosts

      let totalProfitPerItem = itemMarketSoldPrice - totalFees - costWithoutFees

      let textColor
      if(totalProfitPerItem > 0){
        textColor = "text-green-600"
      } else if(totalProfitPerItem === 0){
        textColor = "text-black"
      } else {
        textColor = "text-red-600"
      }

      console.log("seller status difference : ", sellertatusDifference)

     function calculatePercentage(numerator, denominator) {
        // Kontrol ekleniyor
        if (!isFinite(numerator) || !isFinite(denominator) || denominator === 0) {
            return 0; // veya başka bir değer veya hata işleme
        }
    
        return (numerator / denominator) * 100;
    }


    let profitMargin = calculatePercentage(totalProfitPerItem, itemMarketSoldPrice);
    let returnOnCost = calculatePercentage(totalProfitPerItem, costWithoutFees);
    let averageFeeRate = calculatePercentage(totalFees, itemMarketSoldPrice);
    

    let profitPercentage;
    profitPercentage = (totalProfitPerItem / itemMarketSoldPrice)*100

    if(profitPercentage < 0){
        profitPercentage = 0
    }

    profitPercentage = parseFloat(profitPercentage.toFixed(2))

    const usData = {
        labels: [`Fees & Costs = ${parseFloat((100-profitPercentage).toFixed(2))} %` , `Total Profit = ${parseFloat(profitPercentage.toFixed(2))} %`],
        datasets: [
          {
            data: [100-profitPercentage , profitPercentage],
            backgroundColor: [
              "rgb(2, 132, 199)",
              "rgb(13, 148, 136)",
            ],
            hoverOffset: 4,
          },
        ],
      }

      const options = {
        cutout : 90,
        radius : "70%",
        borderWidth : 0
      }


    return (
        <div className="flex flex-col justify-center m-2">

            <div className="flex justify-between bg-gray-200 rounded-md mb-6">
                <div className="flex justify-center items-center mt-2 mb-2 ml-4">Total Profit Per Item</div>
                
                <div className={`flex justify-center items-center mt-2 mb-2 mr-2 font-mono text-lg ${textColor} `}>${parseFloat(totalProfitPerItem.toFixed(2))}</div>
            </div>

            <div className='flex flex-col w-full bg-gray-200 rounded-md sm:flex-row p-5'>

                <div className="w-full sm:w-7/12 flex flex-col">

                    <div className="flex justify-between m-2">
                        <div className="">Profit Margin <p className="text-gray-600">Total Profit / Total Revenue</p></div>
                        <div className="flex justify-center items-center mr-2">{parseFloat(profitMargin.toFixed(2))} %</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="">Return on Cost <p className="text-gray-600">Total Profit / Item Cost</p></div>
                        <div className="flex justify-center items-center mr-2">{parseFloat(returnOnCost.toFixed(2))} %</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="flex justify-center items-center font-bold">Breakeven Price</div>
                        <div className="flex justify-center items-center font-bold mr-2">$ 0.00</div>
                    </div>

                    <div className='border-gray-400 border m-2'></div>
                    
                    <div className="flex justify-between m-2">
                        <div className="flex justify-center items-center font-bold">Total Fees</div>
                        <div className="flex justify-center items-center font-bold mr-2">$ {parseFloat(totalFees.toFixed(2))}</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="">Average Fee Rate<p className="text-gray-600">Total Fees / Total Revenue</p></div>
                        <div className="flex justify-center items-center mr-2">{parseFloat(averageFeeRate.toFixed(2))} %</div>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <div className='w-full bg-gray-100 flex justify-center items-center m-2 rounded-xl'>$ = US Dollar</div>
                    </div>
                </div>

                <div className="w-full sm:w-5/12 flex justify-center items-center mb-2 mt-2 relative">
                    <Doughnut
                        data={usData}
                        options={options}
                    ></Doughnut>

                    <CountryFlag className='absolute bottom-5 right-5' countryCode="US" svg style={{ width: '50px', height: '30px' }} />

                </div>

            </div>

            <div className='text-white flex justify-center items-center mb-2 mt-2'>Detailed Breakdown</div>

            <div className='flex flex-col w-full bg-gray-200 rounded-md sm:flex-row p-5'>
                
                <div className="w-full sm:w-7/12 flex flex-col mt-2">

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Revenue</div>
                        <div className="flex justify-center items-center mr-2">$ {itemMarketSoldPrice}</div>
                    </div>

                    <div className='border-gray-400 border m-2'></div>

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Fees</div>
                        <div className="flex justify-center items-center mr-2">$ {parseFloat(totalFees.toFixed(2))}</div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Costs</div>
                        <div className="flex justify-center items-center mr-2">$ {costWithoutFees}</div>
                    </div>

                    <div className='border-gray-400 border m-2'></div>

                    <div className="flex justify-between m-2">
                        <div className="ml-2">Total Profit</div>
                        <div className="flex justify-center items-center mr-2">$ {parseFloat(totalProfitPerItem.toFixed(2))}</div>
                    </div>

                </div>


                <div className="w-full sm:w-5/12 flex justify-center items-center mb-2 mt-2">
                    <div className='flex flex-col'>
                        <div className='font-bold flex justify-center items-center'>Final Value Fee Rate</div>
                        <div className='text-gray-600'>(for the selected category and options)</div>
                        {doublePeak === true ? (<div>

                        <div className='flex justify-center items-center mt-3'>{mainFeeRate}% + $0.3</div>
                        <div className='flex justify-center items-center mt-3'>if revenue {">"} {peak1} then</div>
                        <div className='flex justify-center items-center'>{reducedFeeRate1}% + $0.3</div>
                        <div className='flex justify-center items-center mt-3'>if revenue {">"} {peak2} then</div>
                        <div className='flex justify-center items-center'>{reducedFeeRate2}% + $0.3</div>

                        </div>) 
                        
                        : (<div>
                            
                       {optionsContents.itemCategoryDropdonwOptions.label === "NFTs" ? (
                        <div className='flex justify-center items-center mt-3'>{mainFeeRate}% + $ 0.3</div>
                       ) : (
                        <div>
                        <div className='flex justify-center items-center mt-3'>{mainFeeRate}% on first ${peak}</div>
                        <div className='flex justify-center items-center'>{reducedFeeRate}% afterwards</div>
                        
                        {(optionsContents.subCategories[optionsContents.itemCategoryDropdonwOptions?.subCategory]?.label === "Athletic Shoes" && itemMarketSoldPrice > 150) === true ? (<div></div>) : (<div className='flex justify-center items-center'>Plus $0.3</div>) }
                        </div>
                       )}     



                        
                        
                        </div>) 
                    }


                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Consequnces