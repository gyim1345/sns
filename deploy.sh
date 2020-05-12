npm run build
aws s3 cp ./dist s3://bongstagram --recursive --acl public-read
