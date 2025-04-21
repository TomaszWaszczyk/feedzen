/// <reference types="vite/client" />

interface Window {
    nostr?: {
        getPublicKey: () => Promise<string>;
        // Add other methods or properties of the nostr object if needed
    };
}
