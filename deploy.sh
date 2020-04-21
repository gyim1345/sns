npm run build
aws s3 cp ./dist s3://sns-client --recursive --acl public-read
