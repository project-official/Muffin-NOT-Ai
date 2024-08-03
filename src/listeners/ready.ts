import { container, Listener } from '@sapphire/framework'
import { ApplyOptions } from '@sapphire/decorators'
import { ActivityType, Client } from 'discord.js'

@ApplyOptions<Listener.Options>({ once: true })
class ClientReadyListener extends Listener {
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

void container.stores.loadPiece({
  piece: ClientReadyListener,
  name: 'ready',
  store: 'listeners',
})
