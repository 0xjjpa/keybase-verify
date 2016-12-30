# keybase-verify [![Build Status](https://img.shields.io/travis/jjperezaguinaga/keybase-verify/master.svg?style=flat-square)](https://travis-ci.org/jjperezaguinaga/keybase-verify)

🔑  Using kbpgp to verify messages based on a public key

## Install

```bash
$ npm install keybase-verify --save
```

## Usage

```js
const verify = require('keybase-verify')

const publicKey =  `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: Keybase OpenPGP v2.0.56
Comment: https://keybase.io/jjperezaguinaga

xsFNBFfglq0BEADTvFWRPl18pcBKQmQH8WaiGQ+JXZScuv1PXAcereGrObZbQ4oN
...
`

const signedMessage = `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

This is a sample message signed by @jjperezaguinaga
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.0.58
Comment: https://keybase.io/crypto

wsBcBAABCgAGBQJYOMpcAAoJEEcNV2F2U20cE4gH/jhCSVZ3LUh6fnn9eZjkQi1t
...
`

try {
  verify(publicKey, signedMessage).then(() => {
    console.log('The user signed the message')
  })
} catch(err) {
    console.log('The user didn‘t sign the message', err)
}
```

## Related

[E.nigma](https://github.com/jjperezaguinaga/e.nigma.pw) - 🔐 e.nigma.pw / Encryption toolbox utility

## License

MIT © [Jose Aguinaga](https://jjperezaguinaga.com)
