import React from 'react';

import './search-box.styles.css';

const SearchBox = () => 
(
    <input 
        type='search' 
        placeholder='search monsters' 
        onChange={e => 
        this.setState({ searchField: e.target.value })
    }/>
)

export default SearchBox;