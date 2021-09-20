import React from 'react'
import CategoryList from './CategoryList'
import Input from './Input'

const NavigationBar = () => {
  return (
    <div className="nav">
      <Input />
      <CategoryList />
    </div>
  )
}

export default NavigationBar
