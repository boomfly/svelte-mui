var os = require('os')
var fs = require('fs')

var homeDir = os.homedir()
var dataDir = homeDir + '/.svelte-mui'
// var dataDir = "../data"

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir)
}

// console.log('set data dir to', dataDir)

module.exports = {
  host: "localhost",
  port: 3001,
  public: "../public/",
  paginate: {
    default: 10,
    max: 50
  },
  nedb: dataDir,
  authentication: {
    secret: "72d5461502f978d28c44dec474ff08359386df227269f34a17fc7d160f275a7dc8366087f72e3e3246e5d3dcb5a3505c2248d0f977d79dd1ca874c0cb4e9bd75f4ce1ccfc4604040afb37633f0e76cb3a254e974ff1872ee7edccecf2cac84b652d5f9a12e0bc4ae75ae5d628102f663681e716b9c0e6f262541f186ec9ca004604491fe05882206692f8e8653d578eac161d69cd14f51986ace729695fd2e551597f599eb54816c6e706dc4af478a826c890ad90e03105bf0c2d36461799888481104d3ee274cdfe87728ff5692699d143af078ed890e6d9971097088884f6d616b8c2abaf06671ad12746bb2353ca354c41c1427b76353dc72c9e47d45e2f6",
    authStrategies: [ "jwt", "local" ],
    path: "/authentication",
    entity: 'user',
    service: "users",
    jwt: {},
    jwtOptions: {
      header: {
        "typ": "access"
      },
      audience: "https://yourdomain.com",
      // subject: "anonymous",
      issuer: "feathers",
      algorithm: "HS256",
      expiresIn: "1d"
    },
    local: {
      entity: "user",
      usernameField: "username",
      passwordField: "password",
      hashSize: 10
    }
  }
}
