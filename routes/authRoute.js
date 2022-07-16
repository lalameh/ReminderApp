const express = require("express");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const authController = require("../controller/auth_controller");
const passport = require("passport");

const router = express.Router();

router.get("/login", forwardAuthenticated, authController.login);
router.get("/register", authController.register);

router.post(
  "/login",
  authController.loginSubmit
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

router.get('/github',
  passport.authenticate('github'));

  router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/auth/login' }),
  function(req, res) {
    console.log(req);
    // Successful authentication, redirect home.
    res.redirect('/reminders');
  });

module.exports = router;
