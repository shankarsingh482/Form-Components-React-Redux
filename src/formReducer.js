const initial_state= 
{
    name:'',
    mobile:'',
    address:'',
    errr:'',
    name1:'',
    mobile1:'',
    address1:''

}

const reducer = function(state = initial_state,action)
{
    const newState = {...state}
    switch(action.type)
    {
            case "ADD_FORM":  
               switch(action.name)
               {
                   case "Name": 
                   newState.name=action.value;
                   break;
                   case "Mobile":
                   newState.mobile=action.value;
                   break;
                   case "Address":
                   newState.address=action.value;
                   break;
                   default: return newState;
               }   
            break;
            case "SUBMIT_FORM": 
                    if(newState.name==='')
                    {
                            newState.err = 'Please Enter Your Name'
                    }   
                    else if (newState.mobile==='')
                    {
                            newState.err = 'Please Enter Your Contact Information'
                    }   
                    else if (newState.address==='') 
                    {
                                newState.err ='Please Enter Your Address'
                    }
                    else{
                           newState.name1= newState.name;
                           newState.address1= newState.address;
                           newState.mobile = newState.mobile;
                    }   

            break;
            default: return newState;
    }
    return newState;
}

export default reducer;