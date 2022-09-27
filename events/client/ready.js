module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log("I'm ready !");

        
        const devGuild = await client.guilds.cache.get('918548843115720795');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    },

}