The issue was resolved by enabling persistence in the Firebase configuration.  Here's how it was fixed:

```javascript
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, onDisconnect } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  // ... your config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Enable persistence
getDatabase(app, { persistence: 'local' }); // Enables local persistence

// ... rest of your Firebase code (write and read operations)
```
By adding `getDatabase(app, { persistence: 'local' });`, the data is now persisted locally and synced with the database, preventing data loss when the application is closed and reopened.