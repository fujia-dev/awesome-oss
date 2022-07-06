# SDK文档说明

## aliyun

1. 文档： https://sqlite.org/docs.html

2. 注意事项：

> 由于浏览器环境的特殊性，无法使用以下功能

- 流式上传：浏览器中无法设置chunked编码，建议使用分片上传替代;
- 操作本地文件：浏览器中不能直接操作本地文件系统，建议使用签名URL的方式下载文件;
- 由于OSS暂时不支持Bucket相关的跨域请求，建议在控制台执行Bucket相关操作。

3. 配置项：https://help.aliyun.com/document_detail/64097.html
