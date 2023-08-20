import React, { useState, Suspense } from 'react'
import { useLoaderData, Await } from 'react-router-dom'
import {AiOutlinePercentage} from "react-icons/ai"
import Card from "../UI/Card"
import PageTitle from '../UI/PageTitle'
import PagesLayout from '../UI/PagesLayout'
import CardsGrid from '../UI/CardsGrid'


const Promotions = () => {

  const promoData = useLoaderData()

  function renderPromotions(promotions) {
    return <CardsGrid>
    {promotions.map(elem => {
      return <Card key={elem.id}>
          <img src={elem.image} alt={elem.name} className='cursor-pointer rounded-t-md' />
          <div className='h-32 p-2 md:p-4'>
            <span className='block text-lg font-bold text-red-400 md:hidden'>{elem.price} PLN</span>
            <h1 className='font-bold text-[13px] md:text-lg'>{elem.name}</h1>
            <p className='md:mt-2 para-trunc'>{elem.description}</p>   {/* para-trunc is to truncate text if it exceeds 3 lines, and is a custom CSS class */}
          </div>
          <hr className='md-mt-3' />
          <button onClick={(e)=> console.log(e, "added to cart")} className='w-11/12 p-2 m-1 mx-auto text-base text-white rounded md:hidden bg-cartbtn'>Add to cart</button>
          <div className='items-center justify-between hidden p-3 md:flex'>
            <span className='hidden w-full text-xl font-bold md:block'>{elem.price} PLN</span>
            <button onClick={()=> console.log(elem.name + " added to cart")} className='w-full p-2 px-3 text-white rounded bg-cartbtn duration-150 hover:bg-[rgb(174, 234, 9)]'>Add...</button>
          </div>
      </Card>
    })}
  </CardsGrid>
  }
  
  return (
    <PagesLayout>
       <PageTitle>
        <div className=' text-red-500 border-dashed p-1 border-[1px] md:border-[2px] text-[12px] md:text-base rounded-full border-red-500'>
          <AiOutlinePercentage />
        </div>
        <h1 className='font-bold '>Promotions</h1>
      </PageTitle>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await
          resolve={promoData.promotions}
          errorElement={<h1>Error loading data</h1>}
        >
          {renderPromotions}
        </Await>
      </Suspense>
    </PagesLayout>
  )
}

export default Promotions