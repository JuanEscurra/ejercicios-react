import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

     const [category, setCategory] = useState('programming');

     return (
          <>
               <h2>GifExpertApp</h2>
               <hr/>
               <AddCategory setCategory={setCategory} />
               {
                    <GifGrid
                         key={category}
                         category={category}
                    />
               }
          </>
     );
}