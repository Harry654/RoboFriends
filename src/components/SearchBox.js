function SearchBox ({updateSearchInput}) {
        return(
            <div className="input_container">
                <h1>CatFriends</h1>
                <input id="search" type="text" placeholder="search..." onChange={updateSearchInput} />
            </div>
        );
}

export default SearchBox;