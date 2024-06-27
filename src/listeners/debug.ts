import { Listener } from '@sapphire/framework'

export default class extends Listener {
  public async run(debug: string) {
    this.container.logger.debug(`[MuffinBot] ${debug}`)
  }
}
