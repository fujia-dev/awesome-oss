const { AwesomeOSS } = require('../lib/index');

const aliClient = new AwesomeOSS({
  ossType: 'ali',
  ossConfigs: {
    ali: {
      region: 'oss-cn-hangzhou',
      accessKeyId: process.env.ALI_ACCESS_KEY_ID,
      accessKeySecret: process.env.ALI_ACCESS_KEY_SECRET,
    },
  },
}).create();

aliClient.createBucket('desktop-apps', {});
