import React, { useContext } from "react";
import Residence_Context from './Residence_Context';
import { Link } from "react-router-dom";


const Child = () => {

    const Data = useContext(Residence_Context);

    return (
        <>
            {
                Data.map((e) => (
                    <Link to={'#'}>
                        <div>
                            <img src={e.img} />
                        </div>
                        <div>
                            <h2>{e.name}</h2>
                        </div>
                    </Link>
                ))
            }
        </>
    )

}

export default Child