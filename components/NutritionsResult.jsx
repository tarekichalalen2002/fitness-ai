import React,{useContext} from 'react'
import Context from './Context'
import { StatsCircle } from '.'


function NutritionsResult() {
  const context = useContext(Context)
  return (
    <div
    className={`
    flex flex-col gap-0 w-[420px] h-[270px] bg-nutrition-card-color nutritions-card
    ${context.pageLoaded ? "translate-x-0 opacity-100" :"translate-x-[80px] opacity-0"}
    ease-in-out duration-500 backdrop-blur-lg
    `}
    >
      <div className='flex justify-between p-4'>
        <div
        className='flex flex-col gap-2 text-2xl text-[#0E8383] font-semibold h-auto'
        >
          <div>NUTRITIONS</div>
          <div
          className='h-[2px] bg-[#0E8383] w-[300px] translate-x-[-1rem]'
          ></div>
        </div>

        <div>
          <StatsCircle />
        </div>

      </div>
      <div>
        <div className='grid grid-cols-2 p-4 text-white font-bold text-xs gap-y-4'>
          <p>CALORIES : </p>
          <p>{Math.floor(context.userResult.macros.calories)} kcal</p>
          <p>PROTIEN : </p>
          <p>{Math.floor(context.userResult.macros.protein)} g</p>
          <p>CARBS : </p>
          <p>{Math.floor(context.userResult.macros.carbs)} g</p>
          <p>FIBRES : </p>
          <p>{Math.floor(context.userResult.macros.fibers)} g</p>
          <p>FAT : </p>
          <p>{Math.floor(context.userResult.macros.fat)} g</p>
        </div>
      </div>
    </div>
  )
}

export default NutritionsResult