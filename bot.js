const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NTQwNzc5MzcxODY3Mjc1MjY1.DzV3jw.0QzS_LfTFBdN_5TBNDF_84CVDoE'); 



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(`$help|welcome`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          





const adminprefix = "-";
const developers = ['438371243801051141'];

console.log("Randy ");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : Randy`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`تم تغيير البلاينق الى   ${argresult}`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`تَم تغيير الواتشينق الى   ${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`تَم تغيير الليسينينق الى   ${argresult}`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Randy");
      message.channel.send(`تم تغييرك حالتك بالتويتش الى   ${argresult}`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم لـ ..${argresult} `)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`جاري تغيير الأفتار... : `);
}
});





client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});





majd.on('message', function(msg) {
if(msg.content.startsWith (prefix  + 'serverinfo')) {
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
 .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
 .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
 .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
 .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
 .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
 .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
 .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 msg.channel.send({embed:embed});
}
});


