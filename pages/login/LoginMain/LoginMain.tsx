import React, { useState } from 'react';
import { SelectStage } from './SelectStage';
import { IdStage } from './IdStage';
import { PasswordStage } from './passwordStage';

export { LoginMain };

function LoginMain() {
    const [move, setMove] = useState(0);

    return (
        <main className="main-login">
            <div className="login-stage-wrapper" style={{ left: `${move}%`, transition: '.5s' }}>
                <SelectStage setMove={setMove} />
                <IdStage setMove={setMove} />
                <PasswordStage setMove={setMove} />
            </div>
        </main>
    );
}
