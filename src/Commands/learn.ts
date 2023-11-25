import { Command, LearnData } from '../modules'
import { Message } from 'discord.js'
import config from '../../config.json'

export default class extends Command {
  public constructor() {
    super('배워')
  }

  public async execute(msg: Message, args: string[]) {
    if (!args[0] || !args[1]) {
      return await msg.channel.send(
        '```\n멒힌아 배워 (등록할 단어) (대답)\n```\n `_`를 대답에 쓰면 공백으로 바뀌ㅇ어요.',
      )
    }
    const command = args[0]
    const result = args[1].replaceAll('_', ' ')
    const ignore = [
      '학습데이터량',
      '봇꺼',
      '테스트',
      '미간',
      'Migan',
      'migan',
      '간미',
      '삭제',
      '삭제',
    ]
    const disallowed = ['@everyone', '@here', `<@${config.bot.owner_ID}>`]
    const db = await msg.client.chatBot.db.getConnection()
    const [learn] = await db.execute<LearnData[]>(
      'SELECT * FROM learn WHERE command = ?;',
      [command],
    )

    if (learn[0]) {
      if (msg.author.id !== learn[0].user_id) {
        return msg.channel.send(
          `해ㄷ당 단어는 이미 ${
            (await msg.client.users.fetch(learn[0].user_id)).username
          }님에게서 배웠어요.`,
        )
      }
    }

    for (const ig of ignore) {
      if (command.includes(ig)) {
        return msg.channel.send('해ㄷ당 단어는 배울ㄹ 수 없어요.')
      }
    }

    for (const di of disallowed) {
      if (result.includes(di)) {
        return msg.channel.send('해당 단ㅇ어는 금지되어 있ㅅ어요.')
      }
    }

    try {
      await db.beginTransaction()

      if (learn[0] && msg.author.id === learn[0].user_id) {
        await db.execute('UPDATE learn SET result = ? WHERE command = ?;', [
          result,
          command,
        ])
        await msg.channel.send(`${command}을/를 다시 배ㅂ웠어요.`)
      } else {
        await db.execute(
          'INSERT INTO learn (command, result, user_id) VALUES (?, ?, ?);',
          [command, result, msg.author.id],
        )
        await msg.channel.send(`${command}을/를 배웠ㅇ어요.`)
      }

      await db.commit()
    } catch (err) {
      console.error(err)
      await db.rollback()
      await msg.channel.send('배우는데 오류ㄹ가 생겨서 배우지 못했어ㅇ요.')
    } finally {
      db.release()
    }
  }
}
