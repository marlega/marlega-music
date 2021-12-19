const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const mainPage = new MessageEmbed()
            .setColor('#303236')
            .addField('Creator', '[MR.MᏗRᏝᏋᎶᏗ🥂🚬#1869](https://github.com/marlega/) And [! Yuvraj⛓#4578](https://github.com/Code-Killer-0001/)', true)
            .addField('Organization', '[Marlega Corporation](https://github.com/Code-Killer-0001)', true)
            .addField('\u200b',
                `I am Mr.Marlega from Marlega and Marlegi corporation. Hamare yaha par sabki saste damo par mari jati hai kya aapko Marwani hai __Marlega Music Bot was Created By Mr Marlega and Yuvraj.`
            )
        await interaction.followUp({embeds: [mainPage], components: [row]});
    }
}
