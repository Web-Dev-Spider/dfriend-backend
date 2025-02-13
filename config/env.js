const { config } = require("dotenv");

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// module.exports  = process.env;
module.exports = { DB_URI, NODE_ENV, PORT, JW_SECRET, JWT_EXPIRES_IN } = process.env;
