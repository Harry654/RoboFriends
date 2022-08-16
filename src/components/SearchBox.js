function SearchBox ({updateSearchInput, searchContent}) {
        return(
            <div className="input_container">
                <h1>CatFriends</h1>
                <input id="search" type="text" value={searchContent} placeholder="search..." onChange={updateSearchInput} />
            </div>
        );
}

export default SearchBox;