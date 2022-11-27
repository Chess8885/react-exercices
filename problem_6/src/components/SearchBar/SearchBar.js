import { useState, useEffect } from "react";

export const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        const results = searchResults.filter(fruit => fruit.toLowerCase().includes(search));
        setSearchResults(results);
    }, [search, searchResults]);


    const fruits = [
        'Apple',
        'Apricot',
        'Avocado',
        'Banana',
        'Bilberry',
        'Blackberry',
        'Nectarine',
        'Peach',
        'Pear',
        'Persimmon',
        'Plum',
        'Pomegranate',
        'Raspberry',
        'Strawberry',
        'Watermelon',
        'Cherry',
        'Grape',
        'Melon',
        'Lemon',
        'Lime',
        'Orange',
        'Mango',
        'Pineapple',
        'Papaya',
        'Kiwi',
        'Tomato',
        'Coconut',
    ];

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const results = fruits.filter(fruit => fruit.toLowerCase().includes(search.toLowerCase()));
        setSearchResults(results);
    }

    const handleClear = () => {
        setSearch('');
        setSearchResults([]);
    }

    const handleSelect = (e) => {
        setSearch(e.target.innerText);
        setSearchResults([]);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSearch(e.target.innerText);
            setSearchResults([]);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={handleChange} />
                <button type="submit">Search</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
            <h3> Results: </h3>
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index} onClick={handleSelect} onKeyDown={handleKeyDown} tabIndex="0">{result}</li>
                ))}
            </ul>
        <br />
        <br />
        <h3> All fruits list:</h3>
        { fruits.map((fruit) => {
            return <ul>{fruit}</ul>
        }, [])}
        </div>
    )
    }

export default SearchBar;