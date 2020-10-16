import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import {SigninAndSignupContainer} from './sign-in-and-sign-up.styles'

const SingInAndSignUpPage= () =>(
    <SigninAndSignupContainer>
        <SignIn/>
        <SignUp/>
    </SigninAndSignupContainer>
)
export default SingInAndSignUpPage