global.owner = ['6285939391878']  
global.mods = ['6285939391878'] 
global.prems = ['6285939391878']
global.nameowner = 'DVinz'
global.numberowner = '6285939391878' 
global.mail = 'wrdaaratu@gmail.com' 
global.gc = 'https://chat.whatsapp.com/DxhYhOlK63X7jMz4ZjLi1z'
global.instagram = 'https://instagram.com/rull_dvinz'
global.wm = '© Rull - DVinz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With Wardaa-MD'
global.author = 'Bot Wardaa-MD' 
global.maxwarn = '3' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'XB3lg4IR' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'y6eHya54'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'XB3lg4IR' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
