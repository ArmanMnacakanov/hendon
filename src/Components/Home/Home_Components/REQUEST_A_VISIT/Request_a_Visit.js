import React from "react";
import './style.css'

const Request = () => {
    return (
        <section className="Request_Box">
            <form>
                <div>
                    <h1>request a visit</h1>
                </div>
                <div>
                    <input type="text"  placeholder="Full-Name"/>
                </div>
                <div>
                    <input type="email" placeholder="Email"/>
                </div>
                <div>
                    <div>
                        <input type="date" />
                    </div>
                    <div>
                        <input type="time" placeholder="Time" />
                    </div>
                </div>
                <div>
                    <textarea placeholder="Message"/>
                </div>
                <div>
                    <button>contact</button>
                </div>
            </form>
        </section>
    )
}

export default Request