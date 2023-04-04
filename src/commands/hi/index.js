import { SlashCommandBuilder } from ('discord.js');

export const command = new SlashCommandBuilder()
 .setName('sayhi')
 .setDescription('跟我說Hi')

export const action = async (ctx) => {
   ctx.reply('嗨!')
 }
