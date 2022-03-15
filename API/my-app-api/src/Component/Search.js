import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

    const [searchField, setSearchField] = useState("");
    console.log(details);
    let data = details;
    console.log(data[0].firstName);
    const filteredPersons = data.filter(
        person => {
            return (
                person
                    .firstName
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person
                    .lastName
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    console.log(filteredPersons);

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredPersons={filteredPersons} />
            </Scroll>
        );
    }

    return (
        <div >
            <div >
                <input
                    className="searchInput"
                    type="search"
                    placeholder="Search by name"
                    onChange={handleChange}
                />
            </div>
            {searchList()}
        </div>
    );
}

export default Search;