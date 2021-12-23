var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

var uploadParams = { Bucket: 'sportybet-cdn-test', Key: '', Body: '' };
var file = './s3_upload_test.jpg';


var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});

uploadParams.Body = fileStream;
var path = require('path');
uploadParams.Key = path.basename(file);


s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});
