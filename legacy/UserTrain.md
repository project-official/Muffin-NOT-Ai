# User train

- file: src/modules/ChatBot.ts
- original code
```ts
if (this.trainType !== 'All') return
if (!msg.content.startsWith('머핀아 ')) return
const user = `user:${msg.author.username
 .replaceAll("'", '')
 .slice(0, 50)
  .toLowerCase()}`
const text = msg.content.replace('머핀아 ', '')
this.db.run(sql, [text, user], err => {
  if (err) throw err
})
```