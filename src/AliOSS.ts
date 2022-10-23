import OSS, {
  ListBucketsQueryType,
  PutBucketOptions,
  PutObjectOptions,
  RequestOptions,
} from 'ali-oss';

import { AliOSSConfig, IAwesomeOSS } from './interface';

export class AliOSS implements IAwesomeOSS {
  client?: OSS;

  constructor(public ossConfigs: AliOSSConfig) {}

  initClient(): void {
    this.client = new OSS(this.ossConfigs);
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
      this.initClient();
      if (await this.isBucketExist(bucketName)) throw Error(`The ${bucketName} bucket is existed.`);

      const result = await this.client?.putBucket(bucketName, options);

      return result;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * @desc fetch all buckets in the region
   *
   * @param {(ListBucketsQueryType | null)} query
   * @param {RequestOptions} [options]
   * @return {*}
   * @memberof AliOSS
   */
  async queryBuckets(query: ListBucketsQueryType | null, options?: RequestOptions) {
    try {
      const buckets = await this.client?.listBuckets(query, options);

      return buckets;
    } catch (error) {
      console.log(error);
    }
  }

  async queryBucketInfo(buckerName: string) {
    try {
      const result: OSS.Bucket = await this.client?.getBucketInfo(buckerName);

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async isBucketExist(buckerName: string) {
    try {
      const bucket = await this.queryBucketInfo(buckerName);

      if (bucket?.name) return true;
    } catch (error) {
      return false;
    }
  }

  queryBucketLocation(): any {}

  queryBucketStat(): any {}

  delBucket(): void {
    throw new Error('Method not implemented.');
  }

  async createFolder(folderName: string) {
    try {
      const nameRE = /^\w+\d?\/$/;
      const formatFolderName = nameRE.test(folderName) ? folderName : `${folderName}/`;

      const result = await this.client?.put(formatFolderName, Buffer.from(''));

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async uploadFile(name: string, file: any, options?: PutObjectOptions) {
    try {
      const result = await this.client?.put(name, file, options);

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  downloadFile(): any {}

  delFile(): any {}

  delMultiFiles(): any {}

  queryFileMeta(): any {}

  postFile(): any {}
}
