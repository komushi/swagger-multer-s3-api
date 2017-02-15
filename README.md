## Create a s3_config.json file like below with your credentials
```
{
    "accessKeyId": "AK678873232",
    "secretAccessKey": "fdsfd32434fdsfs",
    "region": "ap-northeast-1"
}
```

## Install and start local server
```
$ npm install

$ npm start
```

## Upload to S3
curl -v -X PUT -F "file=@<localfile_path>" localhost:10010/<bucket>
```
$ curl -v -X PUT -F "file=@pic/mypic.png" localhost:10010/training-sally
```

## Upload multiple files to S3
```
$ curl -v -X PUT -F "file=@test/mypic.png" -F "file=@test/mypic2.png" -F "file=@test/log-loss.pdf" localhost:10010/training-sally
```

## Download from S3 as proxy mode
curl -v -o <filename> 'http://localhost:10010/<bucket>/<key>'
```
$ curl -v -o mypic.png 'http://localhost:10010/training-sally/1487141034870_mypic.png'
```
