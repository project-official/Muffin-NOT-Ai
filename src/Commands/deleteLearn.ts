import {
  type SelectMenuComponentOptionData,
  type Message,
  ComponentType,
  codeBlock,
} from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'
import { Args, Command } from '@sapphire/framework'
import { type LearnData } from '../modules'

@ApplyOptions<Command.Options>({
  name: '삭제',
  aliases: ['지워', '잊어'],
  description: '배운 단어를 삭ㅈ제해요.',
  detailedDescription: {
    usage: '머핀아 삭제 (삭제할 단어)',
    examples: ['머핀아 삭제 머핀'],
  },
})
export default class extends Command {
  public async messageRun(msg: Message, args: Args) {
    const db = this.container.database
    const command = await args.rest('string').catch(() => null)

    if (!command) {
      return await msg.channel.send('사용법: \n```머핀아 삭제 (지울 단어)```')
    }

    const [datas] = await db.database.execute<LearnData[]>(
      'SELECT * FROM learn WHERE command = ? AND user_id = ?;',
      [command, msg.author.id],
    )

    if (!datas) {
      return await msg.channel.send('해당하는 걸 찾ㅈ을 수 없어요.')
    }

    console.log(datas.length)

    if (datas.length > 1) {
      const options: SelectMenuComponentOptionData[] = []

      datas.forEach(data => {
        console.log(data)
        options.push({
          label: `${data.id}번`,
          value: `maa$deleteLearn-${data.id}`,
          description: data.result.slice(0, 100),
        })
      })

      await msg.reply({
        embeds: [
          {
            title: '삭제',
            description: `${codeBlock(
              'md',
              datas.map(data => `${data.id}. ${data.result}`).join('\n'),
            )}`,
            timestamp: new Date().toISOString(),
          },
        ],
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.StringSelect,
                customId: 'maa$deleteLearn',
                placeholder: '지울 데이터를 선택해ㅈ주세요',
                options,
              },
            ],
          },
        ],
      })
    } else {
      // await db.learn.delete(command)
      // await msg.reply('어라 이제 그ㄱ게 기억이 안나요. 그게 뭐ㅇ였죠?')
      console.log('b')
    }

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
