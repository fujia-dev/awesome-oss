import { AbstractOSS } from './AbstractOSS';

export class TencentOSS extends AbstractOSS {
  init(): void {
    throw new Error('Method not implemented.');
  }
  async createBucket(bucketName: string, options: any) {
    throw new Error('Method not implemented.');
  }
  queryBuckets(): void {
    throw new Error('Method not implemented.');
  }
  delBucket(): void {
    throw new Error('Method not implemented.');
  }
}
