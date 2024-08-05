import { container, Listener } from '@sapphire/framework'
import { ApplyOptions } from '@sapphire/decorators'
import { ActivityType, Client } from 'discord.js'

@ApplyOptions<Listener.Options>({ once: true })
class ClientReadyListener extends Listener {
  public async run(client: Client<true>) {
    function setStatus() {
      client.user.setActivity({
        type: ActivityType.Custom,
        name: `현재 개발중. (${container.version})`,
      })
    }

    setStatus()
    setInterval(() => setStatus(), 600000)

    this.container.logger.info(`[BlueBerry] Bot Ready.`)
  }
}

void container.stores.loadPiece({
  piece: ClientReadyListener,
  name: 'ready',
  store: 'listeners',
})
