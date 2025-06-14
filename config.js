const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61U226jSBD9l36Nd23M3VKk5WYC2IEY3/BqH9rQQJur6cY2HvnfVzjJTKSZzWal5alpqKpzTp2qb6CsMEEO6sDkG6gbfIIU9Ufa1QhMgNrGMWrAAESQQjABD9Zp51oGT9ghPFN927GH5SnUcnZ0TbeCK2xHAV1NtWOcJY/gNgB1u89x+ElCuiIwNqTxUFeMbM+LyUGfTzV3V62Vpy5iQv/iB5l4tcyMPIJbnxHiBpeJUaeoQA3MHdR5EDdfg69MlVlQrkPZXRIrZka+cUyUVlCXDzzDOCZaYNbwTCd8WBtfgx+5Hu9aL6bi5eZCLo9GXhrBtjkb+mhuX7UFtDht3anPs3XyCp/gpESRFaGSYtp9Wfe5WkrXYJMH0tV8ypqjI866kx9LiF8/ECe7errDQ5ZLjPKLwNMls9+syaFAh+hhp61xSh3DJ5p5KdX9lBG3m9w1lFPEbbOPwL3m3SvZf9GdU0xHqdU2bKNVi0NZxCcLh6FdkMv0uZNDrdowaJzZdBR8DT5/zv1rsjhtA54nOrHag2gGQxEKeiuGFXYFZx1wZYr0c/gDPqRt8xnKfbV74OaFPH52n4KR262lVpznVZGmgYh29stuv0xXw22W70x5uWN3p6vdaZmQzS44nHW5udaJqyS4jOzQWR3lq8YJTpI83hllqLMiMGFuA9CgBBPaQIqr8n4nDQCMTj4KG0Tv6gJJp1K3veSXYPu8xGfh+Vh6eQyzk982LOE02jarpR3QDbIewQDUTRUiQlD0hAmtmm6OCIEJImDy571RPecGFRVFNo7ABIwFVpQ4SZAYgf+D/H5OISWwrn8vEQUDEDdVMUdgQpsWDcA9QOQZRuYERZOnIqew6mikcgyjySNe0yVeHPcMi9eiS1wgQmFRgwkjcrIgjAVGuA3+HxwGJ6mirkgiK4uKyrPMiNdZVlA0XhlrvMJ+joPlb38NQIku9NXGvfgsMwAxbghdlW2dVzB69/j7RxiGVVtSvytDrT+gBkw+XCNKcZmQnllbwiZM8QlpPQ8wiWFO0Pd+owZF71zedphWRegurh/YMueBHnuf6CdtJqz4szwl7P8GmmH8ZisBGID8HseyPC+OGF5kBZa9R/b3t++I+wIRohDnpI+2NmTsWrph6WxNLNNUVomiJQr4wfB9cF6duU8ST7Zehvvj2l6Nz254OEulQadOPVwFctvJ4w0150kxzYLHXyQBE7CsczOUK99T5sJMOqNI8uXhdOgMW97FzobTfHg+rwVsS0dGSmonO+2vw9XGnPk7cS+nvqhdt2W3EseWtgiTot4Pq6WmPPbVInTCIfpYTHWuGoaujK2ifsYbYaly7mjxVAdyjIuplBRWHirm5uBVzct+1qzCUaIud+LMaFMrtupzVpToXJN2mdhew+yOxzhe4LeRvq+U/G2V47dpw/fXGKP7Znzr0b/28hV4b7nRbfAhx9uu/Yd9pW44Sx/6hjcWcn/9TPTSkjz7Mlv4x5gxvT05RXmzOFh2ujPBrfd+nUMaV00BJoAUewgGoKna3sBWGVefVNKUxFJfXmnnkFDlx1D8Ys5GzOtfXlPVT5CkvQIeE6Rx7/BOqWufQvo+Y0C5P24Ebn8DW84HFI0IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'EM-XMD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'https://whatsapp.com/channel/0029Vb5AdYhGJP88eUAzqP0u',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

