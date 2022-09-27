const { Interaction } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'adm',
    description: 'Command adm',
    run: (client, message, args) => {
        // message.channel.send('Salut tu a trouve un ester egg!');
        // console.log('Salut tu a trouve un ester egg!');

        const embed = new MessageEmbed()
            .setTitle('ADM =)')
            .setURL('https://app-adm.netlify.app')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true},
                {name: 'Uptime', value : `<t:${client.readyTimestamp /1000};R>`, inline: true}

            )
            .setTimestamp()
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
        message.channel.send({ embeds: [embed]});
    },
    runSlash: (client, interaction) => {
        
        const embed = new MessageEmbed()
            .setTitle('ADM =)')
            .setURL('https://app-adm.netlify.app')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true},
                {name: 'Uptime', value : `<t:${client.readyTimestamp /1000};R>`, inline: true}

            )
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });
    
            interaction.reply({ embeds: [embed]})
    
        }
    

}