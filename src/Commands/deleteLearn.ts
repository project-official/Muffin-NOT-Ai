import {
  Args,
  Command,
  container,
  DetailedDescriptionCommandObject,
} from '@sapphire/framework'
import {
  type SelectMenuComponentOptionData,
  type Message,
  ComponentType,
  codeBlock,
} from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'
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
class DeleteLearnCommand extends Command {
  public async messageRun(msg: Message, args: Args) {
    const command = await args.rest('string').catch(() => null)
    const options: SelectMenuComponentOptionData[] = []
    const db = this.container.database
    const [datas] = await db.database.execute<LearnData[]>(
      'SELECT * FROM learn WHERE command = ? AND user_id = ?;',
      [command, msg.author.id],
    )

    if (!command) {
      return await msg.channel.send(
        `사용법: \n\`\`\`${(this.detailedDescription as DetailedDescriptionCommandObject).usage}\`\`\``,
      )
    }

    if (!datas) {
      return await msg.channel.send('해당하는 걸 찾ㅈ을 수 없어요.')
    }

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
  }
}

void container.stores.loadPiece({
  piece: DeleteLearnCommand,
  name: 'delete',
  store: 'commands',
})
