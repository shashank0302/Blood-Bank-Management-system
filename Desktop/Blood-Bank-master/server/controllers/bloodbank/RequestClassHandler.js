///module export
module.exports = (app, db) => {
  
  // app.get("/request",(req,res)=>{

  // })

  app.post("/request", (req, res) => {
    const blood_group = req.body.blood_group;
    const unit = req.body.unit;
    const user=req.body.user_id
    
    console.log("bloodgroup : " + blood_group);
    //query
    const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group=?";
    const sqlInsert =
      "INSERT INTO  user_request(blood_group,unit,user_id) VALUES (?,?,?)";
    //
    db.query(sqlSelect, [blood_group], (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      } else {
        result = JSON.parse(JSON.stringify(result));
        console.log(result);
        if (unit <= result[0]) {
          //
          db.query(sqlInsert, [blood_group, unit, user], (err, result) => {
            if (err) {
              console.log("**ERROR ACCEPTING REQUEST!" + err);
            } else {
              res.send({
                message: "REQUEST ACCEPETED COLLECT IT FROM THE BLOOD BANK",
              });
              console.log(result);
            }
          });
        } else {
          res.send({ message: "INSUFFICIENT STOCKS!" });
        }
      }
    });
    
  });
};
