import { IAwesomeOSS } from './interface';

export class TencentOSS implements IAwesomeOSS {
  initClient(): void {
    throw new Error('Method not implemented.');
  }
  async createBucket(bucketName: string, options: any) {
    throw new Error('Method not implemented.');
  }
  queryBuckets() {
    return Promise.resolve();
  }
  delBucket(): void {
    throw new Error('Method not implemented.');
  }
}
