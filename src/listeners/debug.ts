import { Listener, container } from '@sapphire/framework'

class DebugListener extends Listener {
  public async run(debug: string) {
    this.container.logger.debug(`[BlueBerry] ${debug}`)
  }
}

void container.stores.loadPiece({
  piece: DebugListener,
  name: 'debug',
  store: 'listeners',
})
