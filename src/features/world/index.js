import React from 'react';
import { World } from './components'
import Loading from '../../components/utilis/Loading';

export default (props) => {
        return (
        <>
            {props.loading? (
                <div className="d-flex flex-column flex-fill bg-danger " id="world">
                    {console.log(props)}
                    <World  data={props.data}  updateData={props.updateData} />
                </div>

            ) : (
                <Loading/>
            )}
            
            
        </>
        )
}
