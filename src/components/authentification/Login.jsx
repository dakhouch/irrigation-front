import {useEffect, useState} from 'react';
import { loginFields } from "../../constants/formFields.js";
import FormAction from "./FormAction";
import Input from "./Input";
import {useLoginUser} from "../../api/authentification/caller.js";
import {Dna} from "react-loader-spinner";
import {useNavigate} from "react-router-dom";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const Login=()=>{
    const navigate=useNavigate();
    const [loginState,setLoginState]=useState(fieldsState);
    const login=useLoginUser()
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
         login.mutate(loginState);
    }
    useEffect(()=>{
        if(login.isSuccess) navigate("/dashboard")
    },[login.isSuccess])
    //Handle Login API Integration here
    if (login.isLoading) return (<div className="w-full h-fit flex justify-center py-12">
        <Dna
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
    </div>)
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>
            <FormAction handleSubmit={handleSubmit} text="Login"/>
            {login.isError?  (<h3 className="text-red-700">username or password are incorrect</h3>) :("") }
        </form>
    )
}
export default Login