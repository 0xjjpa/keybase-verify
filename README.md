# keybase-verify [![Build Status](https://img.shields.io/travis/jjperezaguinaga/keybase-verify/master.svg?style=flat-square)](https://travis-ci.org/jjperezaguinaga/keybase-verify)

🔑  Using kbpgp to verify messages based on a public key

## Install

```bash
$ npm install keybase-verify --save
```

## Usage

```js
const verify = require('keybase-verify')

try {
  verify(publicKey, signedMessage).then(() => {
    console.log('The user signed the message')
  })
} catch(err) {
    console.log('The user didn‘t sign the message', err)
}
```

## Related

[E.nigma](https://github.com/jjperezaguinaga/e.nigma.pw) - 🔐 e.nigma.pw / A utility to verify whether a message was signed by a Keybase user.

## License

MIT © [Jose Aguinaga](https://jjperezaguinaga.com)
