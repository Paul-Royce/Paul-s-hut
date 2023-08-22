import React from 'react'
import { useLoaderData, Await } from 'react-router-dom'
import { Suspense } from 'react'
import InfoPageTitle from '../UI/InfoPageTitle'

const PizzaInfo = () => {
  const pizzaDetails = useLoaderData()

  function renderPizzaData(pizza) {
    console.log(pizza, "Woeking")
    return <div className='grid grid-cols-1'>
                <InfoPageTitle>
                    {pizza.name}
                </InfoPageTitle>
                <img src={pizza.image} className='m-auto rounded-md h-80' />
                
                    <div>
                        <span className='font-bold '>Ingredients</span>
                        <p className='max-w-xs'>
                            {pizza.ingredients.map((item, id) => (<span key={id}>{item}, </span>))}
                        </p>
                    </div>
                
            </div>
  }
  return (
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
  )
}

export default PizzaInfo