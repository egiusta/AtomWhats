// Add values if you are not using env vars
const fs = require("fs");
require("dotenv").config();

module.exports = {
  session: JSON.parse(
    process.env.SESSION ||
      fs.readFileSync(__dirname + "/session.json", { encoding: "utf8" })
  ), //if not using env vars create a file named session.json
  pmpermit_enabled: process.env.PMPERMIT_ENABLED || "true",
  mongodb_url: process.env.MONGODB_URL || process.env.MONGO_URL || "",
  default_tr_lang: process.env.DEFAULT_TR_LANG || "en",
  enable_delete_alert: process.env.ENABLE_DELETE_ALERT || "true",
  ocr_space_api_key: process.env.OCR_SPACE_API_KEY || "",
};
