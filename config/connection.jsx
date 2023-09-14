// Connect to db
const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/happenhubDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
module.exports.clientId = "<9874287469-v08vcjk234fu978ekt6hcvncocduq44v.apps.googleusercontent.com>";
module.exports.clientSecret = "<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>";