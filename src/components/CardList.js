import React from 'react';
import SearchBox from './SearchBox';
import Card from './Card';
function CardList({users, loading, connected, updateSearchInput, searchContent}) {
    // console.log(users.reverse());
    return(
        <React.Fragment>
            <SearchBox updateSearchInput={updateSearchInput} searchContent={searchContent} />

            <div className="card-container">
            {loading ? "Loading..." : ""}
            {!connected ? <p>Please check your internet connection</p> : ""}
            {!users.length && !loading && connected && <p>User not found</p>}
            <Card users={users} />
            </div>

        </React.Fragment>
    );
}

export default CardList;