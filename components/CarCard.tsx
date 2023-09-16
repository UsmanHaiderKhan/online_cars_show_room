"use client";
import Image from 'next/image';
import { useState } from 'react';
import { CarProps } from '@/types';
import CarDetails from "./CarDetails";
import  CustomButton  from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';

interface CarCardProps{
    car:CarProps;
}

const CarCard = ({car}: CarCardProps) => {
const [isOpen, setIsOpen] = useState(false);

const {city_mpg, combination_mpg,cylinders,year,
    displacement,drive,fuel_type,highway_mpg,make,model,transmission} = car;
 const carRent = calculateCarRent(city_mpg,year);

  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2> 
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>$</span>
            {carRent}
            <span className='self-end text-[14px] font-medium'>/day</span>
        </p>
        {/* Image */}
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt="car model" fill priority className='object-contain'/>
        </div>
        {/* Icon & button */}
        <div className='relative flex w-full mt-2'>
           <div className='flex group-hover:invisible w-full justify-between text-gray'>
            {/* Icons */}
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src="/steering-wheel.svg" height={20} width={20} alt="Steering Wheel"  />
                <p className='text-[14px] leading-[17px]'>
                    {transmission === 'a' ? 'Automatic' : 'Manual'}
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src="/tire.svg" height={20} width={20} alt="tire"  />
                <p className='car-card__icon-text'>
                    {drive.toUpperCase()}
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src="/gas.svg"  height={20} width={20} alt="Gas"  />
                <p className='car-card__icon-text'>
                    {city_mpg} MPG
                </p>
            </div>
           </div>
           <div className='car-card__btn-container'>
          <CustomButton title='View More' 
            rightIcon= "/right-arrow.svg"
            handleClick={()=> setIsOpen(true)}
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'/>
           </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={()=> setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard