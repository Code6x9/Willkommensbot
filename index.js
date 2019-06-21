const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NTkxNjIyODk0NDU5ODEzODky.XQzd0g.XvvCa49Lfw1e82KhB4DuQlmSKvs');

bot.on('ready', () =>{
    console.log('Dieser Bot ist jetzt online!');
    bot.user.setActivity("euch beim beitreten zu!", { type: "WATCHING"}).catch(console.error);
})

bot.on('guildMemberAdd' , member =>{

    const channel = member.guild.channels.find(channel => channel.name === "🛬willkommen");
    if(!channel) return;

    channel.send(`Herzlich Willkommen auf dem Rainbow 6 Siege | DE Server, ${member}🎉🤗! Bitte lies die Regeln in #🚫regeln. Viel Spaß und einen schönen Aufenthalt wünscht dir das Team!`)
});