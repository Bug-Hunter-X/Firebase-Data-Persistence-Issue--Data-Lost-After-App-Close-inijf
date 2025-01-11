# Firebase Data Persistence Bug

This repository demonstrates a bug encountered in a Firebase Realtime Database application where data written to the database disappears after the application is closed and reopened.  The client-side application updates correctly and the database rules permit writes.  The solution involves correctly enabling persistence in the Firebase configuration.

## Bug Description
Data written to the Firebase Realtime Database appears to write successfully to the client but disappears upon application restart.

## Solution
Enabling persistence within the Firebase configuration ensures data is cached locally and synced with the database.