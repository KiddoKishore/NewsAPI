import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBox = ({searchNews}) => {
  const submitHandler = (e) => {
    e.preventDefault();
  }

 return (
    <>
    <div className='SearchBox'>
      <form>
        <i className='icon'><FaSearch /></i>
        <input type='text' placeholder='Search' onChange={e => searchNews(e.target.value)} />
        <button type='submit' onClick={submitHandler}>Go</button>
      </form>
    </div>
    </>
 )
}

export default SearchBox


