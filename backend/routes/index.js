const express = require('express');
const axios = require('axios');
const router = express.Router();
const connection = require('../config/dbconn');

router.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post('/', (req, res) => {
  console.log(req.body);
  var obj = JSON.parse(Object.keys(req.body));
  var objlen = Object.keys(obj).length
  console.log(obj);

  connection.query("insert into groupinfo(groupname) values('"+obj.groupname+"');", function(err, rows){
    if (err) throw err;
      console.log("1 record inserted");
  });
  connection.query("select groupid from groupinfo where groupname='"+obj.groupname+"';", function(err, rows){
    if (err) throw err;

      for (var i=1;i<objlen;i++){
        temp = "member"+i;
        connection.query("insert into groupmembers values("+rows[0].groupid+",'"+obj[temp]+"');", function(err, rows){
          if (err) throw err;
            console.log("1 record inserted");
        });
      }
  });

  res.send(['hello']);
});

router.post('/api/addexpense', (req, res) => {
  console.log(req.body);
  var obj = JSON.parse(Object.keys(req.body));
  var objlen = Object.keys(obj).length
  console.log(obj);

  // connection.query("insert into groupinfo(groupname) values('"+obj.groupname+"');", function(err, rows){
  //   if (err) throw err;
  //     console.log("1 record inserted");
  // });
  connection.query("select groupid from groupinfo where groupname='"+obj.groupname+"';", function(err, rows){
    if (err) throw err;

        connection.query("insert into expenseinfo(expensename, groupid, amount) values('"+obj.expense+"',"+rows[0].groupid+","+Number(obj.totalamount)+");", function(err, rows){
          if (err) throw err;
            console.log("1 record inserted");
        });

  });


  res.send(['hello']);
});

router.post('/api/getdetails', (req, res) => {
  console.log(req.body);
  var obj = JSON.parse(Object.keys(req.body));
  var objlen = Object.keys(obj).length
  console.log(obj);

  // connection.query("insert into groupinfo(groupname) values('"+obj.groupname+"');", function(err, rows){
  //   if (err) throw err;
  //     console.log("1 record inserted");
  // });

  output = {}
  output['groupname'] = obj.groupname
  connection.query("select groupid from groupinfo where groupname='"+obj.groupname+"';", function(err, rows){
    if (err) throw err;

    output['groupid'] = rows[0].groupid;
    output['members'] = []
    output['expenses'] = [];

    connection.query("select personemail from groupmembers where groupid="+output.groupid+";", function(err, rows){
      if (err) throw err;
      for(var i=0; i<rows.length; i++){
        output.members.push(rows[i].personemail)
      }

      connection.query("select expensename,amount from expenseinfo where groupid="+output.groupid+";", function(err, rows){
        if (err) throw err;
        sum = 0;
        for(var i=0; i<rows.length; i++){
          output.expenses.push(rows[i])
          sum+=rows[i].amount;
        }
        output['totalamount'] = sum

        console.log(output);
        res.send(output);
      });
    });
  });

});

router.post('/api/approveexpense', (req, res) => {
  console.log(req.body);
  var obj = JSON.parse(Object.keys(req.body));
  var objlen = Object.keys(obj).length
  console.log(obj);

  // connection.query("insert into groupinfo(groupname) values('"+obj.groupname+"');", function(err, rows){
  //   if (err) throw err;
  //     console.log("1 record inserted");
  // });
  connection.query("delete from groupinfo where groupid="+obj.groupid+";", function(err, rows){
    if (err) throw err;

        connection.query("delete from groupmembers where groupid="+obj.groupid+";", function(err, rows){
          if (err) throw err;

          connection.query("delete from expenseinfo where groupid="+obj.groupid+";", function(err, rows){
            if (err) throw err;
              console.log("1 record inserted");
          });

        });

  });


  res.send(['hello']);
});


module.exports = router;
