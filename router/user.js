const express = require("express");
const router = express.Router();
const userData = [];

router.get("/", (req, res) => {
  res.send(userData);
});

router.post("/", (req, res) => {
  userData.push(req.body);
  res.send(req.body);
});
router.patch("/:id", (req, res) => {
  let obj = userData.find((v) => v.id == req.params.id);
  obj.name = req.body.name;
  res.send(userData);
});
router.delete("/:id", (req, res) => {
  userData.splice(
    userData.findIndex((a) => a.id == req.params.id),
    1
  );
  res.send(userData);
});

module.exports = router;
