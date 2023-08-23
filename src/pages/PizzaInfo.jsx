import React from 'react'
import {motion} from "framer-motion"
import { useLoaderData, Await } from 'react-router-dom'
import { Suspense } from 'react'
import InfoPageTitle from '../UI/InfoPageTitle'
import Page from '../UI/Page'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsFillCartDashFill} from "react-icons/bs"
 
const PizzaInfo = () => {
  const pizzaDetails = useLoaderData()

  function renderPizzaData(pizza) {   /* IMPLEMENT THE ANIMATED ARROW ON HOVER */
    console.log(pizza, "Woeking")
    return <>       {/* BACk button */} {/* IT WILL SOON BECOME A LINK */}
                <button className='flex items-center gap-[.25rem] md:text-xl cursor-pointer py-4 font-bold w-fit'>
                    <span><AiOutlineArrowLeft/></span>
                    <span>Back</span>
                </button>
                <InfoPageTitle>
                    {pizza.name}
                </InfoPageTitle>
                <div className='grid items-center w-11/12 grid-cols-1 gap-4 m-auto md:grid-rows-2 md:grid-cols-2'>
                    <img src={pizza.image} className='rounded-md md:row-span-2' />
                    
                    <div className='flex flex-col justify-center row-span-2'>
                        <button className='flex items-center justify-center w-full gap-1 p-2 m-auto font-bold duration-200 bg-yellow-500 rounded-md hover:bg-yellow-600 md:w-6/12'>
                            Add to cart
                            <BsFillCartDashFill />
                        </button>
                        <div className='p-2 mt-6 border-[1px] border-gray-500  rounded-md'>
                            <span className='font-bold '>Ingredients:</span>
                            <p className='max-w-xs'>
                                {pizza.ingredients.map((item, id) => (<span key={id}>{item}, </span>))}
                            </p>
                        </div>
                    </div>
                </div>
                
            </>
  }
  return (
    <Page>
        <div className='w-11/12 m-auto '>
            <Suspense fallback={<h2>Loading pizza info...</h2>}>
                <Await
                    resolve={pizzaDetails.pizza}
                    errorElement={<h1>Error loading data</h1>}
                >
                {renderPizzaData}
                </Await>
            </Suspense>
            
        </div>
    </Page>
  )
}

export default PizzaInfo