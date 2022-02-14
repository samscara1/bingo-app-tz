import React from 'react'

import Slider from '@mui/material/Slider'

import Style from './style.module.scss'
import { NumberSelect } from '../NumberSelect/NumberSelect'

export const RangeSlider = ({title, value, min, max, handleClick}) => {

  const handleChange = (e) => {
    handleClick(e.target.value)
  }

  return (
    <section className={Style.container} >
      <div className={Style.header}>
        <h2 className={Style.title}>
          {title}
        </h2>
        <NumberSelect min={min} max={max} value={value} handleClick={handleClick} />
      </div>
      <Slider 
        onChange={handleChange}
        value={value}
        min={min}
        max={max}
        step={1}
        sx={{
          color: 'gray',
          height: '1px',
          '& .MuiSlider-thumb': {
            backgroundColor: 'rgb(255, 210, 5)'
          }
        }}
      />
      <div className={Style.nums}>
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </section>
  )
}
