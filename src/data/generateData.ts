import { IUser } from '@src/types/types'

const users: IUser[] = require('./users.json').results

console.debug(users)
