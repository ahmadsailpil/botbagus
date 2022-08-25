let handler = async m => m.reply(`
𝙈𝙀𝙉𝙐 𝙄𝙉𝙄 𝙇𝘼𝙂𝙄 𝙀𝙍𝙊𝙍 𝙔𝘼 𝙈𝘼𝘼𝙋
`.trim()) // Tambah sendiri kalo mau
handler.help = ['alquran *114 1*']
handler.tags = ['islam']
handler.command = /^(al)?quran$/i

module.exports = handler
