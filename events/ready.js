const chalk = require('chalk')

module.exports = async (bot) => {
    if(bot.status && bot.status !== false) {
        bot.user.setActivity(bot.status, {type: bot.activity}) //Sets bot activity
    }
    console.log("✅ " + bot.user.username + chalk.green(" are now all optimal"))
}
