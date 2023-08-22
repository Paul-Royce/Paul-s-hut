import React, {Suspense} from 'react'
import { useLoaderData, Await, Link } from 'react-router-dom'
import {GiFullPizza} from "react-icons/gi"
import PageTitle from '../UI/PageTitle'
import PagesLayout from '../UI/PagesLayout'
import CardsGrid from '../UI/CardsGrid'
import Card from '../UI/Card'
import Page from '../UI/Page'

const Pizza = () => {
  const dataPizza = useLoaderData()

  function renderPizzas(pizzas) {
    
    return <CardsGrid>
     {pizzas.map(elem => (
      <Card key={elem.id}>
        <Link to={`${elem.id}`}>
          <img src={elem.image} alt='A pizza' className='cursor-pointer rounded-t-md max-h-[230.14px]'/>
        </Link>
        <div className='h-32 p-2 md:p-4'>
            <span className='block text-lg font-bold text-red-400 md:hidden'>{elem.price} PLN</span>
            <h1 className='font-bold text-[13px] md:text-lg'>{elem.name}</h1>
            <p className='md:mt-2 para-trunc'>
              {elem.ingredients.map(ingredient => (<span key={ingredient}>{ingredient},</span>))}
            </p>   {/* para-trunc is to truncate text if it exceeds 3 lines, and is a custom CSS class */}
        </div>
        <hr className='md-mt-3' />
          <button onClick={(e)=> console.log(e, "added to cart")} className='w-11/12 p-2 m-1 mx-auto text-base text-white rounded md:hidden bg-cartbtn'>Add to cart</button>
          <div className='items-center justify-between hidden p-3 md:flex'>
            <span className='hidden w-full text-xl font-bold md:block'>{elem.price} PLN</span>
            <button onClick={()=> console.log(elem.name + " added to cart")} className='w-full p-2 px-3 text-white rounded bg-cartbtn duration-150 hover:bg-[rgb(174, 234, 9)]'>Add...</button>
          </div>
      </Card>
     ))}
    </CardsGrid>
  }

  return (
    <Page>
      <PagesLayout>
        <PageTitle>
          <GiFullPizza />
          <h1 className='font-bold '>Pizza</h1>
        </PageTitle>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Await
            resolve={dataPizza.pizzas}
            errorElement={<h1>Error loading data</h1>}
          >
            {renderPizzas}
          </Await>
        </Suspense>
      </PagesLayout>
    </Page>
  )
}

export default Pizza