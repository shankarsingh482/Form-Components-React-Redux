import React, { Component}  from 'react';
import InputForm from './inputForm'
import ButtonForm from './buttonForm'
import ShowForm from './showForm'
import {connect} from 'react-redux'
class Form extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return (
                <main>
                    <InputForm name='Name' storeState={this.props.change} value ={this.props.name}  placeholder='enter your name' title='Name '/>        
                    <InputForm name='Mobile'storeState={this.props.change} value = {this.props.mobile}placeholder='enter your mobile number'title='Contact ' />    
                    <InputForm name='Address'storeState={this.props.change} value = {this.props.address}  placeholder='enter your address' title='Address '/>      
                    <ButtonForm  storeState={this.props.submit} name='Submit'/>
                    <ShowForm />
                </main>
        )

    }
}
const mapStateToProps = function(state)
{
            return {
             name:state.name,
                 mobile:state.contact,
                 address:state.contact,
                 err:state.err
            }
      
}


const mapDispatchToProps = function(dispatch)
{
        return {
            change:function(e)
                        {

                            return dispatch({type:'ADD_FORM',value:e.target.value,name:e.target.name})
                        },
               submit:function()
            {
                        return dispatch({type:'SUBMIT_FORM'})
            }

        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)
