import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' name='login' component='input'/>
            </div>
            <div>
                <Field placeholder='password' name='password' component='input'/>
            </div>
            <div>
                <Field component='input' name='rememberMe'  type='checkbox'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export const Login: React.FC = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}