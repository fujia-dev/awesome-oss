import dotenv from 'dotenv';

import { AliOSS } from './AliOSS';
import { QiniuOSS } from './QiniuOSS';
import { TencentOSS } from './TencentOSS';

import type { AliOSSConfig, OSSConfigs, OSSTypes } from './interface';

dotenv.config();

export class AwesomeOSS {
  ossType: OSSTypes;
  aliOSSConfig: AliOSSConfig;

  constructor({ ossType, ossConfigs }: { ossType: OSSTypes; ossConfigs: OSSConfigs }) {
    this.ossType = ossType;
    this.aliOSSConfig = ossConfigs.ali;
  }

  create() {
    switch (this.ossType) {
      case 'ali':
        return new AliOSS(this.aliOSSConfig);
      case 'qiniu':
        return new QiniuOSS();
      case 'tencent':
        return new TencentOSS();
      default:
        break;
    }
  }
}
