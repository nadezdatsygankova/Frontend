import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search(props) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    console.log(props);
    let data = props.details;
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
        if (e.target.value === "") {
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredPersons={filteredPersons} />
            </Scroll>
        );
    }

    return (
        <section className="garamond">
            {/* <div className="navy georgia ma0 grow">
                <h2 className="f2">Search by name</h2>
            </div> */}
            <div className="pa2">
                <input
                    className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                    type="search"
                    placeholder="Search by name"
                    onChange={handleChange}
                />
            </div>
            {searchList()}
        </section>
    );
}

export default Search;