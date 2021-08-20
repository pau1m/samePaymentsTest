This solves the basic case assuming the happy path.

install

```npm install```

run

```node index.js```


Not much in the way of comments. It's not prod and you already know what it's supposed to do.

Other things to consider (and things to test for)
=================================================

Do we care if payments are over or under (very different implications)?

Metrics for deviation?

Is there a case for handling negative values?


Exception handling.

Type checking.

Missed or skipped months.

Malformed or missing data.

Number formats.

Very large numbers.

Negative numbers.

