import React, {useState, useEffect} from 'react'
import {Form, FormControl} from 'react-bootstrap'

const SearchBar = () => {
      const [searchTerm,setSearchTerm]= useState('');
      const [filteredProducts,setfilteredProducts] = useState([])
      useEffect(() => {
        if(searchTerm >=3) {
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
            //   const shuffleProduct = data.sort(() =>0.5 - Math.random())
            //   setProducts(shuffleProduct);
              // setFilterProduct(data);

              const filtered = data.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setfilteredProducts(filtered)
            });
         
        } else {
            setfilteredProducts([])
        }
   
      },[searchTerm]);


  return (
    <Form inline>
        <FormControl
        type='text'
        placeholder='Search Products'
        className='mr-sm-2'
        onChange={(e) =>setSearchTerm(e.target.value)}
        />
    </Form>
  )
}

export default SearchBar