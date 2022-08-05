function SearchBox ({updateSearchInput}) {
        return(
            <div className="input_container">
                <h1>RoboFriends</h1>
                <input id="search" type="text" placeholder="search..." onChange={(event) => {updateSearchInput(event.target.value)}} />
            </div>
        );
}

export default SearchBox;