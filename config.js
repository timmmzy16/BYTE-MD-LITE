const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '263715907468'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'miltonbrian45@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "263715907468"
global.devs = '263715907468';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVGQ0MrWjEweHB6M0ZYNU40Tm55M2ExYTFhbXFveElFV05zMzgvaDhrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYllwTmxFZkJjaGQvOXh5bHlLUS9hT3hRV1JCN0ZVdnNFNFlUSVdid0toST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTmI4Y0lZYXNJVEN4dnVuUHlNWVpOVktqSzhDb2RCN1VYaGMzdmFWMUU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSjNXNnl2c2IzZ2tWaFQ5YVluYURXamVLNmFFcEZuUjVMY1JmUGZLckFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOUHZEMEVvbHF0eitGYmhwWjE3MmxKQW5JdWJNNGFZMTlEdnlrZkFTRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgxVWVHZVVuK3lLRzhIeDlUd0xSMlpwcDk5T2p5R21leCs2NmRzNm9veEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZXekR5ODJocjQyc3k5dWpTLzYwN1J2NEtxTnZvUlIvMEZFZkJQVllraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRitJVUZFaVJ6YkZrbEUrZEJkbzhvci9hVFh4Zk1TeEdDQTEwc3kyeWdsMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVUSnJEczNBbVhaWXFTdXM3UjFCRElVaXBzSUVnV0JCSzhFbVRFQzhTNGNwd0VRWERsM1FYZW5TZ2Z0ckxnWmlPVjhTK3NlYUtDek55ZTlTM0VuRER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6InI4T0xWSGpzdVFhaUdBQU96elRGVVU2czgxV1pJTDNjNzIzZm9HcmxLamc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMjIzOTc3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3OTQ3NDM5NTM0QUU2OTcwMTlBN0YwNEE1ODE2RTlGRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4NDkxNzQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiZEw4QjdMZVJwZVM4ODNHN0NCRmt3IiwicGhvbmVJZCI6ImQ3YzE3NDhjLWMxODctNDE0Ny1iMzljLTNiMzU0N2NhNzVhZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5OHFEZ2ZtQStPc05GRVJFMm1RQ0pvOG1BNzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXBxRnpianlpQUxUQU5Qam1NQzJNNDNWc2JvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY4NEZWUTFKIiwibWUiOnsiaWQiOiIyMzQ5MTIyMjM5Nzc4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS8O0ZDw+w59ow6Jkw7R3wq4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09URms0d0hFTkhobXJnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik02YmNwQmRmZDdnZmhkNHhkWXFNaTYrWTFjazZFNk5NdzZYa2J1Q05wQVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZtL2FITUZRTXRWY25mTnlhNEhoOWRhbVdTQW5WOUdyMEhPOXRud0hpbUhnaEF4VmhCRUhESjRvSEhIRk9jMTRndzNaQmFWRU1ZMzNUTEU0SmJ3NEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIybWtFWkpycFB2elZiMktVeVc2YXJpbmpJTTZYQ3Y0enVqMXcyTWJ6TG5CZWJKNkpwbDNDMTF1NytvZWwwMFBzVzhvWGJUbjBIMlNUdGtMcW53YWJBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjIyMzk3Nzg6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUT20zS1FYWDNlNEg0WGVNWFdLakl1dm1OWEpPaE9qVE1PbDVHN2dqYVFGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NDkxNzQyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUM3KyJ9"
  packname:  process.env.PACK_NAME || 'Miltom Technologies',
  
  botname:   process.env.BOT_NAME === undefined ? "MILTON-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'TalkDrove' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*MILTON technologies* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'MILTON-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
