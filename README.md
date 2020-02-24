# Hasura SDK

```js
const sdk = require('hasura-sdk');

sdk.init({
    endpoint: 'http://localhost:8080/v1/query',
    adminSecret: 'your-secret',
});

/**
 * BASIC CALLS
 */

// Run plain SQL:
await sdk.query('SELECT NOW()');

// Run SQL with variable substitution:
await sdk.query({
    sql: 'SELECT * FROM table_name WHERE field_name = $value',
    binds: {
        value: 'foo',
    },
});

// Call any API method:
await sdk.call({
    type: 'xxx',
    args: { ... },
});


/**
 * CUSTOM CALLS
 * (full list in `lib/api.js`)
 */

// Track a table
await sdk.trackTable({
    schema: 'public',
    name: 'my_table',
});
```
