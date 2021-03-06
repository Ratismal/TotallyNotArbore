// @flow
import { Record } from 'immutable'
import { ObjectType } from './IpfsObject'
import type { ObjectTypeType } from './IpfsObject'

export const writable = {
  hash: 'hash',
  sizeTotal: 'sizeTotal',
  sizeLocal: 'sizeLocal',
  blockTotal: 'blockTotal',
  blockLocal: 'blockLocal',
  metadataLocal: 'metadataLocal',
}

export const IpfsFileRecord = Record({
  hash: null,
  sizeTotal: 0,
  sizeLocal: 0,
  blockTotal: 1,
  blockLocal: 0,
  metadataLocal: false,
}, 'IpfsFile')

export default class IpfsFile extends IpfsFileRecord {
  hash: string
  sizeTotal: number
  sizeLocal: number
  blockTotal: number
  blockLocal: number
  metadataLocal: boolean

  static create(hash: string) {
    return new this()
      .set(writable.hash, hash)
  }

  get type(): ObjectTypeType {
    return ObjectType.FILE
  }

  get fileTotal(): number {
    return 1;
  }

  get fileLocal(): number {
    return (this.blockTotal === this.blockLocal) ? 1 : 0;
  }
}

