import React from 'react';

const Form = (props) => (
    <div>
                <form onSubmit={props.getWhether}>
                    <input type="text" name="city" placeholder="City...." />    
                    <input type="text" name="country" placeholder="Country...." />
                    <button> Get Whether </button>

                </form>

            </div>
)
 
export default Form;