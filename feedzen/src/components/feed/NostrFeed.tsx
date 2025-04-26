import { useEffect, useState } from 'react';
import { getEventHash, validateEvent } from 'nostr-tools';

const NostrFeed = () => {


  return (
    <div>
      <h2>📝 Latest Notes from Nostr</h2>
      <ul>
      </ul>
    </div>
  );
}

export default NostrFeed;
