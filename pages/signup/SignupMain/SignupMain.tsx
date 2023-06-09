import React, { useState } from 'react';
import { SignupForm } from './SignupForm/SignupForm';
import { InfoStage } from './InfoStage';
import { IdStage } from './IdStage';
import { NickNameStage } from './NickNameStage';
import { PasswordStage } from './PasswordStage';
import { ConfirmPasswordStage } from './ConfirmPasswordStage';
import { useAppSelector } from '../../../renderer/store/hooks';

export { SignupMain };

function SignupMain() {
    const [move, setMove] = useState(0);

    return (
        <main className="main-signup">
            {/* <SignupForm /> */}
            <div className="signup-stage-wrapper" style={{ left: `${move}%`, transition: '.5s' }}>
                <InfoStage move={move} setMove={setMove} />
                <IdStage move={move} setMove={setMove} />
                <NickNameStage move={move} setMove={setMove} />
                <PasswordStage move={move} setMove={setMove} />
                <ConfirmPasswordStage move={move} setMove={setMove} />
            </div>
        </main>
    );
}
