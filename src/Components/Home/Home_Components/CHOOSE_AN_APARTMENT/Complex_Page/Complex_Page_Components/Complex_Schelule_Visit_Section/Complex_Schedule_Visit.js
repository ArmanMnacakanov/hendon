import React from "react";
import { Link } from "react-router-dom";
import './style.css';


const Schedule_Visit = () =>{
    return(
        <section className="Complex_Schedule_Visit_Box">
            <div>
                <div>
                    <h1>schedule a visit</h1>
                </div>
                <div>
                    <p>At vero eos et accusamus et iusto odio dignissimos duc qui blanditiis praesentium</p>
                </div>
            </div>
            <div>
                <Link to='/contact'>Request</Link>
            </div>
        </section>
    )
}

export default Schedule_Visit