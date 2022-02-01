let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Hello Guys, Lagi Nyari Hosting Yang Kuat Buat AGC?\nBBX-HOST Solusinya!\n\nCyberPanel Hosting For AGC:\n?Unlimited Domain\n?Unlimited SSD Storage\n?Unlimited Bandwidth\n?Free Premium Theme & Plugins\n?Free Source AGC\n?Unlimited Email Account\n?Unlimited FTP Account\n??Price? Rp 65.000/Tahun\n\nPayment?\nQris, Dana, Gopay\n\nMinat?\nKunjungi link di bawah??????\nhttps://bbx-host.pw\nAtau\nwa.me/6289636504839\n\n\nContoh Web AGC:\nhttps://recordtester.xyz\n\n#izinmin
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Jgn lupa beli bang*', 'status@broadcast')
}
handler.help = ['agc']
handler.tags = ['main']
handler.command = /^(agc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler