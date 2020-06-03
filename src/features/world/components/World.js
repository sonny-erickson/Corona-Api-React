import React from 'react';


const World = (props) => {
   
    return (
        <>
            <div>
                    
            </div>
            <h1 >World</h1>
            <div className="d-flex flex-column flex-lg-fill" id='world'>
                <div className="d-flex flex-row justify-content-around flex-wrap my-5">
                    <div className="card">
                        <div className="card-body " >
                            <h5 className="card-title">Total new deaths today</h5>
                            <p className="card-text">{props.data.total_new_deaths_today}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body " >
                            <h5 className="card-title">Total new cases today</h5>
                            <p className="card-text">{props.data.total_new_cases_today}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around my-5">
                    <div className="card">
                        <div className="card-body " >
                            <h5 className="card-title">Total deaths</h5>
                            <p className="card-text">{props.data.total_deaths}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body " >
                            <h5 className="card-title">Total cases</h5>
                            <p className="card-text">{props.data.total_cases}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body " >
                            <h5 className="card-title">Total recovered</h5>
                            <p className="card-text">{props.data.total_recovered}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center my-5">
                    <div className="card">
                        <div className="card-body " >
                            <h5 className="card-title">Total affected countries</h5>
                            <p className="card-text">{props.data.total_affected_countries}</p>
                        </div>
                    </div>
                </div>




            </div>
            
        { console.log('total deaths:' + props.data.total_deaths)}
        </>
    );
};

export default World;
