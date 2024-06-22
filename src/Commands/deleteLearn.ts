import { ApplyOptions } from '@sapphire/decorators'
import { Args, Command } from '@sapphire/framework'
import { type LearnData } from '../modules'
import { type Message } from 'discord.js'

@ApplyOptions<Command.Options>({
  name: '삭제',
  aliases: ['지워', '잊어'],
  description: '배운 단어를 삭ㅈ제해요.'
})
export default class extends Command {
  public async messageRun(msg: Message, args: Args) {
    // if (!args[0]) {
    //   return await msg.channel.send('사용법: \n```머핀아 삭제 (지울 단어)```')
    // }

    // const command = args[0]
    // const db = msg.client.chatBot.db
    // const [data] = await db.execute<LearnData[]>(
    //   'SELECT * FROM learn WHERE command = ? AND user_id = ?;',
    //   [command, msg.author.id],
    // )

    // console.log(data)

    // if (!data[0]) {
    //   return await msg.channel.send('해당하는 걸 찾ㅈ을 수 없어요.')
    // }

    // console.log(data.length)

    // if (data.length > 1) {
    //   console.log('a')
    // } else {
    //   // await db.learn.delete(command)
    //   // await msg.reply('어라 이제 그ㄱ게 기억이 안나요. 그게 뭐ㅇ였죠?')
    //   console.log('b')
    // }
    await msg.reply('현재 이 기능은 재작성 중입니다.')

    //   if (!data[0]) {
    //     return await msg.channel.send('해당하는 걸 찾ㅈ을 수 없어요.')
    //   }
    //
    //   if (data[0].user_id !== msg.author.id) {
    //     return await msg.channel.send(
    //       '어라 당ㅅ신은 언제 가르쳐 주셨죠?',
    //     )
    //   }
    //
    //   await db.learn.delete(command)
    //   await msg.reply('어라 이제 그ㄱ게 기억이 안나요.')
  }
}
