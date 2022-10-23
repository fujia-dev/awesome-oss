export type OSSTypes = 'ali' | 'tencent' | 'qiniu';

export interface AliOSSConfig {
  accessKeyId: string; // 通过阿里云控制台创建的AccessKey ID。
  accessKeySecret: string; // 通过阿里云控制台创建的AccessKey Secret。
  stsToken?: string; // 使用临时授权方式。更多信息，请参见使用STS进行临时授权。
  bucket?: string; // 通过控制台或PutBucket创建的Bucket。
  endpoint?: string; // OSS访问域名。
  region: string; // Bucket所在的区域， 默认值为oss-cn-hangzhou。
  internal?: boolean; // 是否使用阿里云内网访问，默认值为false。例如通过ECS访问OSS，则设置internal为true，采用internal的endpoint可节省费用。
  cname?: boolean; // 是否支持上传自定义域名，默认值为false。如果设置cname为true，则endpoint传入自定义域名时，自定义域名需要先和Bucket进行绑定。
  isRequestPay?: boolean; // Bucket是否开启请求者付费模式，默认值为false。更多信息，请参见请求者付费模式。
  secure?: boolean; // 设置secure为true，则使用HTTPS；设置secure为false，则使用HTTP。更多信息，请参见常见问题。
  timeout?: string | number; // 超时时间，默认值为60000，单位为毫秒。
}

export interface OSSConfigs {
  ali: AliOSSConfig;
}

export interface IAwesomeOSS {
  initClient: VoidFunction;
  // create new bucket
  createBucket: (bucketName: string, options: any) => Promise<any>;
  //  query all buckets
  queryBuckets: (query: any, options: any) => Promise<any>;
  // delete a bucket
  delBucket: VoidFunction;
}
