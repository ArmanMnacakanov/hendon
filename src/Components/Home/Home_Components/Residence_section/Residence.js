import React from "react";
import Residense_Context from './Residence_Context'
import Child_Component from './Child_Component'
import './style.css'


const Residence_Section = ()=> {

    const Data = [
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-1.png',
            name:'Residence'
        },
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-4.png',
            name:'eco living'
        },
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-5.png',
            name:'quality'
        },
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-6.png',
            name:'info desk'
        },
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-2.png',
            name:'reception'
        },
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-3.png',
            name:'help 24/7'
        },

    ]
    return(
        <section className="Residence_Box">
            <Residense_Context.Provider value={Data}>
                <Child_Component />
            </Residense_Context.Provider>
        </section>
    )
}

export default Residence_Section