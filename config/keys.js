const database = "process.env.MONGODB_URI";
// DB access configuration
module.exports = {
    mongoURI: database,
    secretOrKey: "secret"
  };