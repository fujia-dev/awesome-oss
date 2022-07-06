import OSS, { PutBucketOptions } from 'ali-oss';

import { AbstractOSS } from './AbstractOSS';
import { AliOSSConfig } from './interface';

export class AliOSS extends AbstractOSS {
  client?: OSS;

  constructor(public ossConfigs: AliOSSConfig) {
    super();
    this.init();
  }

  init(): void {
    const { region, accessKeyId, accessKeySecret } = this.ossConfigs;

    this.client = new OSS({
      region,
      accessKeyId,
      accessKeySecret,
    });
  }

  async createBucket(bucketName: string, options: PutBucketOptions) {
    try {
      const result = await this.client?.putBucket(bucketName, options);
    } catch (err) {
      console.log(err);
    }
  }

  queryBuckets(): void {
    throw new Error('Method not implemented.');
  }

  delBucket(): void {
    throw new Error('Method not implemented.');
  }
}
