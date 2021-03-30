const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setTitle('V E N U S | G U A R D')
             .setDescription('İşte guard komutlarım.')
             .addField(`${prefix}antiraid aç`, 'Bot korumasını aktifleştirir.')
             .addField(`${prefix}capsengel aç`, 'Capslock engelleme sistemi aktifleştirir.')
             .addField(`${prefix}emojikoruma aç`, 'Emoji koruma sistemi aktif olur.')
             .addField(`${prefix}everengel aç`, 'Etiket engelleme sistemini aktif edersiniz.')
             .addField(`${prefix}kanalkoruma aç`, 'Kanal koruma aktifleşir.')
             .addField(`${prefix}küfürengel aç`, 'Küfür filtresi aktifleşir.')
             .addField(`${prefix}modlog #kanal`, 'Log kanalı ayarlarsınız.')
             .addField(`${prefix}reklamengel aç`, 'Reklam engelleme aktif olur.')
             .addField(`${prefix}rolkoruma aç`, 'Rol koruma aktifleşir.')
             .addField(`${prefix}sohbet-aç`, 'Sohbet kanalını yazmaya kilitler.')
             .addField(`${prefix}sohbet-kapat`, 'Sohbet kanalını yazıma açar.')
             .addField(`${prefix}sil-üye @üye miktar`, 'Belirtilen üyenin belirtilen miktarda mesajını siler.')
             .addField(`${prefix}sil miktar`, 'Belirttiğiniz miktarda mesaj siler.')
             .addField(`${prefix}yavaşmod süre`, 'Yavaş mod ayarlarsınız.')
             .addField(`${prefix}ban @üye sebep`, 'Etiketlediğiniz kişiyi banlarsınız.')
             .addField(`${prefix}kick @üye sebep`, 'Etiketlediğiniz üyeyi sunucudan atarsınız.')
             .setThumbnail(`https://i.hizliresim.com/zeDNHU.png`)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : 'v!yardım'
}
//DÜZENLENECEK