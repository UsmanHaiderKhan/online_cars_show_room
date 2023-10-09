import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils';
import Image from 'next/image'; 

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturers: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',

  });
  const result = allCars.data;
  const isDataEmpty = !Array.isArray(result) || result.length < 1 || !result;
  
  
  return (
    <main className="overflow-hidden">
     <Hero />
     <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p className=''>Explore the cars you might like</p>
      </div>
      <div className='home__filters'>
        <SearchBar/>
      </div>
      <div className='home__filter-container '>
        <CustomFilter title="fuel" options={fuels}/>
        <CustomFilter title="year" options={yearsOfProduction}/>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {result?.map((car)=>(
              <CarCard car={car}/>
            ))}
          </div>
        </section>
      ):(
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, No Result</h2>
          <p>{result?.message}</p>
        </div>
      )}
     </div>
    </main>
  );
}
