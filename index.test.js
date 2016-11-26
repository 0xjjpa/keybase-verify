/* global it */
/* global expect */

import { verify } from '.'
import * as Fixture from './fixtures'

it('returns legit when the message and the supposed signer match', async () => {
  const response = await verify(Fixture.publicKey, Fixture.signedMessage)
  expect(response).toBe(true)
})

it('returns false and an error when the message and the supposed signer don’t match', async () => {
  try {
    await verify(Fixture.publicKey, Fixture.foreignMessage)
  } catch (err) {
    expect(err).toBeTruthy()
  }
})

it('returns false and an error when the message has been modified and not resigned', async () => {
  try {
    await verify(Fixture.publicKey, Fixture.tamperedMessage)
  } catch (err) {
    expect(err).toBeTruthy()
  }
})
