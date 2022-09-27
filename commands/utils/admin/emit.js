const { Interaction } = require("discord.js");

module.exports = {
    name: 'emit',
    description: 'Emmetre un evenement au choix',
    run: (client, message, args) => {
        if (!args[0] || !args[0].match(/^(guildMemberAdd | guildMemberRemove)$/)) return message.reply('Merci de entrer un evenement');

        if (args[0] == 'guildMemberAdd') {
            client.emit('guildMemberAdd', message.member);
            message.reply('Event guildMemberAdd')
        } else {
            client.emit('guildMemberRemove', message.member);
            message.reply('Event guildMemberRemove');
        }
    },
    options: [
        {
            name: 'event',
            description: 'Chosir un evenemtn à emmetre',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'guildMemeberAdd',
                    value: 'guldMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                }
            ]

        }
    ],
    runSlash: (client, interaction) => {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberAd', ephemereal: true })
        }
        else {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberRemove', ephemereal: true });
        }
    },


};