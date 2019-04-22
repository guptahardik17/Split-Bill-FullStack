# Split-Bill-FullStack
<hr>
### Deployment
<hr>

Firstly paste these commands in your terminal
```sh
$ git clone https://github.com/guptahardik17/Split-Bill-FullStack.git
$ cd Split-Bill-FullStack

OR

Download zip and extract, then get into the folder
```
Then,
```sh
In Terminal 1:
$ cd backend
$ npm install
$ npm start
```

```sh
In Terminal 2:
$ cd frontend
$ npm install
$ npm start
```

Then in your phpmyadmin create new database with name "splitbill". Now import database file(i.e. splitbill.sql in directory sql db file) into your database. Then change credentials in backend/config/dbconn.js.

<hr>
<hr>
