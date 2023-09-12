// const query = require("../../models/adminModel");
const pool = require("../../dbConnection");

//add employee function -> POST method
const addEmployee = async (req, res) => {
  try {
    //1. destructure the req.body(name, email, password)
    const { name, email, tpNum, nic, password, role } = req.body;

    //2. check if user exist(if exist then throw error)

    const user = await pool.query("SELECT * FROM employee WHERE email =   '" + email + "'");

    if (user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    //4. enter the new user inside our database

    const newUser = await pool.query(
      "INSERT INTO employee (name,email,tpNum,nic,password,role,reg_date) VALUES($1,$2,$3,$4,$5,$6,NOW()) RETURNING * ",
      [name, email, tpNum, nic, password, role]
    );

    //5. register success
    return res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//view support agent list in employees page
const viewSupList = async (req, res) => {

  try{
  //db query
  const agentData = await pool.query(
    "SELECT * FROM registered_users WHERE user_role = 'supAgent'",
  );

  return res.json(agentData.rows);
  } catch (err) {
  console.error(err.massage);
  return res.status(500).send("Server Error");
}
};

//view vehicle coordinator list in employees page
const viewVCList = async (req, res) => {

  try{
  //db query
  const vcData = await pool.query(
    "SELECT * FROM registered_users WHERE user_role = 'vc'",
  );

  return res.json(vcData.rows);
  } catch (err) {
  console.error(err.massage);
  return res.status(500).send("Server Error");
}
};

module.exports = { addEmployee, viewSupList, viewVCList };
