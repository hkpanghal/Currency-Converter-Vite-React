import React from 'react'

function InputComponent({inputDisable=true, inputLabel, inputAmount , setinputAmount , currency = "" , setCurrency ,currencyOptions=["inr","usd"]},convert) {

  return (
    <div className='w-full h-1/2 flex bg-zinc-800 rounded-md text-orange-500  justify-between px-8 py-4 shadow-inner shadow-white '>
      <div className='left h-full  rounded-md flex  justify-center flex-col gap-2'>
        <label htmlFor="inputLabel">{inputLabel}</label>

        <input type="number" className='w-[80%] rounded-md px-4 py-2'  
        value={inputAmount} 
        disabled={inputDisable}
        onChange={(e)=> {
         setinputAmount && setinputAmount(Number(e.target.value) )
       
        }}
        
        />

      </div>

      <div className='right h-full  flex justify-center flex-col gap-2 '>
        <p>Currency</p>
        <select name="" id="" className='rounded-md  py-1.5' 
         value={currency} 
         onChange={(e)=> setCurrency && setCurrency(e.target.value)}>

         {
            currencyOptions.map
            (
              (currency)=> (<option value={currency}>{currency}</option>)
            )
         }

        </select>
      </div>
    </div>
  )
}

export default InputComponent