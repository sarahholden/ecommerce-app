const passport = require("passport");
const LocalStrategy = require("passport-local");

// const AuthService = require("../services/AuthService");
// const AuthServiceInstance = new AuthService();

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  // Set method to serialize data to store in cookie
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Set method to deserialize data stored in cookie and attach to req.user
  passport.deserializeUser((id, done) => {
    done(null, { id });
  });

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        // TODO: GET USER
        const user = null;
        return done(null, user);
      } catch (err) {
        done(err);
      }
    })
  );

  return passport;
};
