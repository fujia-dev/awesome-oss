export abstract class AbstractOSS {
  abstract init(): void;

  /**
   * @desc create new bucket
   *
   * @abstract
   * @memberof AbstractOSS
   */
  abstract createBucket(bucketName: string, options: any): Promise<void>;

  /**
   * @desc query all buckets
   *
   * @abstract
   * @memberof AbstractOSS
   */
  abstract queryBuckets(): void;

  /**
   * @desc delete a bucket
   *
   * @abstract
   * @memberof AbstractOSS
   */
  abstract delBucket(): void;
}
