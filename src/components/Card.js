import React from 'react';

function Card({users, loading, connected}) {
    // console.log(users.reverse());
    return(
        <div className="card-container">
        {loading ? "Loading..." : ""}
        {!connected ? <p>Please check your internet connection</p> : ""}
        {!users.length && !loading && connected && <p>User not found</p>}
        {
            users.map((user) => ( 
                <div key={user.id} className="card">
                    <img src={`https://robohash.org/${user.id}?set=set4`} alt={user.name} />
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            ))
        }
        </div>
    );
}

export default Card;