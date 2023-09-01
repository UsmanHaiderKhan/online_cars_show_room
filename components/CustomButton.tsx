"use client";
import { CustomButton } from '@/types';
import React from 'react'

const CustomButton = ({title, containerStyles, handleClick}:CustomButton) => {
  return (
    <button disabled={false} type={'button'}
     className={`custom-btn ${containerStyles}`}>
    <span className={`flex-1`}>{title}</span></button>
  )
}

export default CustomButton