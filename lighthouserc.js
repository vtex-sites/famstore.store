const VTEXLHConfig = require('@vtex/lighthouse-config').default

const urls = ['', '/luminaria-zelda/p', '/candy']

module.exports = VTEXLHConfig({ urls, server: process.env.BASE_SITE_URL })
