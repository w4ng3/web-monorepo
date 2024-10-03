import { register } from 'node:module'
import { pathToFileURL } from 'node:url'

register('ts-node/esm', pathToFileURL('./'))

// 在esmodule中使用ts-node
// https://github.com/nodejs/node/issues/51196
