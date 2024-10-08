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
    const CUSTOM_ID = 'maa$deleteLearn'
    const command = await args.rest('string').catch(() => null)
    const options: SelectMenuComponentOptionData[] = []
    const db = this.container.database
    const deleteDataList: string[] = []
    const [deleteDatas] = await db.database.execute<LearnData[]>(
      'SELECT * FROM learn WHERE command = ? AND user_id = ?;',
      [command, msg.author.id],
    )

    if (!command) {
      return await msg.reply(
        `사용법: \n\`\`\`${(this.detailedDescription as DetailedDescriptionCommandObject).usage}\`\`\``,
      )
    }

    if (deleteDatas.length === 0) {
      return await msg.reply('해당하는 걸 찾ㅈ을 수 없어요.')
    }

    for (let i = 1; i <= deleteDatas.length; i++) {
      deleteDataList.push(`${i}. ${deleteDatas[i - 1].result}`)
      options.push({
        label: `${i}번 지식`,
        value: `${CUSTOM_ID}-${deleteDatas[i - 1].id}`,
        description: deleteDatas[i - 1].result.slice(0, 100),
      })
    }

    await msg.reply({
      embeds: [
        {
          title: '삭제',
          description: `${codeBlock('md', deleteDataList.join('\n'))}`,
          timestamp: new Date().toISOString(),
        },
      ],
      components: [
        {
          type: ComponentType.ActionRow,
          components: [
            {
              type: ComponentType.StringSelect,
              customId: `${CUSTOM_ID}@${msg.author.id}`,
              placeholder: '지울 데이터를 선택해ㅈ주세요',
              options: [
                ...options,
                {
                  label: '❌ 취소',
                  description: '아무것도 삭제하지 않아요.',
                  value: `${CUSTOM_ID}-cancel`,
                },
              ],
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
