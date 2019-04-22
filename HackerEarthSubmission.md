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

<br>

### Screenshots & Explaination
<hr>
<br>

1) In the starting, we need to create a group with its member's email ids.
<br>
![enter image description here][1]

<br>

2) Here is the screenshot after adding more email fields
<br>
![enter image description here][2]

<br>

3) Now we need to add expenses to that group. So adding Travel expense,
<br>
![enter image description here][3]

<br>

4) Adding Food Expense
<br>
![enter image description here][4]

<br>

5) Adding Accommodation Expense
<br>
![enter image description here][5]

<br>

6) Now if the financial professional of that organization wants to get all the details of a group, he/she can get all group details with the group name.
<br>
![enter image description here][6]

<br>

7) Here we got all the details below that button on which we have clicked. Now we can settle up all the expenses of a group and delete that group from the database we need to click on the below green button.
<br>
![enter image description here][7]

<br>

8) Coming to the database side, a total of 3 tables have been used (i.e. groupinfo, expenseinfo, groupmembers).
<br>
![enter image description here][8]

<br>

9) This is groupinfo table.
<br>
![enter image description here][9]

<br>

10) This is expenseinfo table.
<br>
![enter image description here][10]

<br>

11) This is groupmembers table.
<br>
![enter image description here][11]

<br><br>
<hr><hr>



  [1]: https://he-s3.s3.amazonaws.com/media/uploads/02098b7.png
  [2]: https://he-s3.s3.amazonaws.com/media/uploads/8be4e30.png
  [3]: https://he-s3.s3.amazonaws.com/media/uploads/95f7b86.png
  [4]: https://he-s3.s3.amazonaws.com/media/uploads/a4fbbfc.png
  [5]: https://he-s3.s3.amazonaws.com/media/uploads/aab62c5.png
  [6]: https://he-s3.s3.amazonaws.com/media/uploads/b0327c8.png
  [7]: https://he-s3.s3.amazonaws.com/media/uploads/b581092.png
  [8]: https://he-s3.s3.amazonaws.com/media/uploads/bcdc4ed.png
  [9]: https://he-s3.s3.amazonaws.com/media/uploads/d1d51a6.png
  [10]: https://he-s3.s3.amazonaws.com/media/uploads/d8f14b9.png
  [11]: https://he-s3.s3.amazonaws.com/media/uploads/e054f7e.png
