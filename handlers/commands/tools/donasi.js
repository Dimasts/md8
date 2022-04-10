module.exports = {
    tags: ['others', 'information'],
    cmd: ['donasi', 'donate'],
    help: ['donasi'],
    exec: (m, client) => {
        let caption = `Hai *${client.pushname}* 👋
Bot ini membutuhkan server agar bisa on 24 jam dan memproses request kamu dengan cepat, maka dari itu jika berkenan donasi seikhlasnya buat biaya server

Total biaya yang diperlukan adalah kurang lebih 150K per bulan :)

*E-Wallet :*
[ 081228345749 ] - A.N *Dimas ts*
- DANA | OVO | GOPAY | SHOPEEPAY | LinkAja

atau juga bisa via QRIS jika akun e-wallet kamu belum upgrade ke premium
`
        const btn = [
            { urlButton: { displayText: `😊 Trakteer`, url: `https://trakteer.id/dimas-ts-gl49x` } },
            { quickReplyButton: { displayText: `QRIS`, id: `${prefix}qris` } },
        ]
        client.sendMessage(m.chat, { text: caption, footer: `© 2020 - @lorddimas_`, templateButtons: btn }, { quoted: m })
    }
}