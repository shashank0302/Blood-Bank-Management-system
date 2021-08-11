//module export
module.exports = (app, db) => {
  let username
  let idno
  app.get("/login/usr",(req,res)=>{
    // const sqlSelect="SELECT * from user_login where username = ?"
    // db.query(sqlSelect, (err, result) => {
    //   res.send(result);
    //   console.log(result);
    //   // console.log(result);
    // });
     res.send({name:username,id:idno})
    // // const sqlSelect="SELECT * from urls, users INNER JOIN userUsername ON $session->userUsername"
    // db.query(sqlSelect, (err, result) => {
    //   res.send(result);
    //   // console.log(result);
    // });
  })

  app.post("/login/usr", (req, res) => {
    //variables
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;
    username=userUserName
    //query
    const sqlSelect =
      "SELECT * FROM user_login WHERE userUserName = ? AND userPassword = ?";
    

    //
    db.query(sqlSelect, [userUserName, userPassword], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      }
      /////
      if (result.length > 0) {
        res.send(result);
        console.log(result);
        idno=result[0].user_id
        console.log(idno);
        console.log("**RESULT SENT TO FRONT END**");
      } else {
        res.send({ message: "wrong username/password combination!" });
        console.log("**INVALID COMBINATION**");
      }
    });
  });
};
