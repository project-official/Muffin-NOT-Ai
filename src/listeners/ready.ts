import { ApplyOptions } from '@sapphire/decorators'
import { Listener } from '@sapphire/framework'
import { ActivityType, Client } from 'discord.js'

@ApplyOptions<Listener.Options>({ once: true })
export default class extends Listener {
  public async run(client: Client<true>) {
    function setStatus() {
      client.user.setActivity({
        type: ActivityType.Custom,
        name: 'ㅅ살려주세요..!',
      })
    }

    setStatus()
    setInterval(() => setStatus(), 600000)

    this.container.logger.info(`[MuffinBot] 먹힐 준ㅂ비 완료`)
  }
}
