let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Dana:\n085640431004\n\nGopay:\n085882098702\n\nOvo:\n085640431004\n\nPM:\nU31952236
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Itu Banh*', 'status@broadcast')
}
handler.help = ['paying']
handler.tags = ['main']
handler.command = /^(paying)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler