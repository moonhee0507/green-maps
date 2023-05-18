import React from 'react';
import { IdInput } from './IdInput/IdInput';
import { NickNameInput } from './NickNameInput/NickNameInput';
import { PasswordInput } from './PasswordInput/PasswordInput';
import { ConfirmPasswordInput } from './PasswordInput/ConfirmPasswordInput';
import { SubmitButton } from './SubmitButton/SubmitButton';

export { SignupForm };

function SignupForm() {
    return (
        <form>
            <IdInput />
            <NickNameInput />
            <PasswordInput />
            <ConfirmPasswordInput />
            <SubmitButton />
        </form>
    );
}
