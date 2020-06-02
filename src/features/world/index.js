import React from 'react';
import { World } from './components'
import Loading from '../../components/utilis/Loading';

export default (props) => {
        return (
            <div className="d-flex flex-column flex-fill bg-danger " id="world">
                <World/>
            </div>
        )
}
