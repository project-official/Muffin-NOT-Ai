import 'dotenv/config'

function getConfigValue(
  value: 'BOT_TOKEN' | 'BOT_OWNER_ID' | 'BOT_PREFIX',
) {
  const configValue = process.env[value]
  if (!configValue)
    throw new Error(`.env 파일에서 ${value}값을 찾을 수 없어요.`)
  return configValue
}

export default class MAAConfig {
  public readonly bot = {
    token: getConfigValue('BOT_TOKEN'),
    owner_ID: getConfigValue('BOT_OWNER_ID'),
    prefix: getConfigValue('BOT_PREFIX'),
  }

  public readonly train = {
    user_ID: process.env.TRAIN_USER_ID,
  }
}
