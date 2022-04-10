let cap = `Join Group Bot untuk info ter-update

• *WhatsApp Group* : https://chat.whatsapp.com/BLPOAP20ehx9R1wNSNpEcp
`
const buttonsDefault = [
    { urlButton: { displayText: `🛎 Telegram Bot`, url: `https://t.me/tikdl_bot` } },
    { urlButton: { displayText: `💈 Instagram`, url: 'https://www.instagram.com/lorddimas_' } },
]

module.exports = {
    tags: ['others', 'information'],
    cmd: ['groupbot'],
    help: ['groupbot'],
    exec: async (m, client) => {
        await client.sendMessage(m.chat, { text: cap, footer: global.footer, templateButtons: buttonsDefault }, { quoted: m })
    }
}