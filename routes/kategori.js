var express = require("express");
var router = express.Router();
var connection = require("../config/database.js");

router.get("/", (req, res, next) => {
  connection.query(
    "SELECT * FROM produk ORDER BY id_kategori DESC",
    (err, rows) => {
      if (err) {
        req.flash("error", err);
      } else {
        res.render("kategori/index", {
          data: rows,
        });
      }
    }
  );
});

module.exports = router;
