import React, { Component}  from 'react';
import {connect} from 'react-redux'

function showForm(props)
{
return (

            <div>
               <span style={{color:'red'}}>{props.err} </span> <p>Name is {props.name1}, Contact Number is {props.mobile1} and address is {props.address1}</p>
            </div>
)
}
const mapStateToProps = function(state)
{
            return  {
                name1:state.name1,
                mobile1:state.mobile1,
                address1:state.address1,
                err:state.err
            }
}
export default connect(mapStateToProps,null) (showForm);