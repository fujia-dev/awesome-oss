import { IAwesomeOSS } from './interface';

export class QiniuOSS implements IAwesomeOSS {
  initClient(): void {
    throw new Error('Method not implemented.');
  }
  queryBuckets() {
    return Promise.resolve();
  }
  delBucket() {
    throw new Error('Method not implemented.');
  }
  async createBucket(bucketName: string, options: any) {
    throw new Error('Method not implemented.');
  }
}
