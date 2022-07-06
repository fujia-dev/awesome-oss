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

  /**
   * @desc create a bucket
   *
   * @param {string} bucketName
   * @param {PutBucketOptions} options https://help.aliyun.com/document_detail/31959.htm?spm=a2c4g.11186623.0.0.e0511e5876vCyj#doc-api-Oss-PutBucket
   * @memberof AliOSS
   */
  async createBucket(bucketName: string, options?: PutBucketOptions) {
    try {
      const result = await this.client?.putBucket(bucketName, options);
      console.log(result);
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
