import React, { useState } from 'react';

const NostrLogin = () => {
    const [pubKey, setPubKey] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const loginWithNostr = async () => {
        if (!window.nostr) {
            setError('Nostr extension not found');
            return;
        }
    };

    return (
        <div>
            <h2>Login with Nostr</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={loginWithNostr}>Login</button>
            {pubKey && <p>Public Key: {pubKey}</p>}
        </div>
    );
}

export default NostrLogin;
