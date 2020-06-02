import React from 'react';


const World = (props) => {
    console.log(props)
    return (
        <>
            <h1 >World</h1>
            <div className="d-flex justify-content-center">
                <div className="card" style={{width: '20rem'}}>
                    <div className="card-body " >
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default World;
