import { type Message } from 'discord.js'

export default async function noPerm(msg: Message) {
  await msg.reply({
    content: '당신은 내 남자친구가 아니야!',
    allowedMentions: {
      repliedUser: false,
      parse: [],
      users: [],
      roles: [],
    },
  })
}
