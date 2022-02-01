let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana/Ovo [085640431004]
│ • Gopay [085882098702]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
