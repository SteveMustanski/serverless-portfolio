# Steve Mustanski's serverless-portfolio
This is the repo for my serverless portfolio.  It uses AWS and ReactJS.

In addition to the portfolio code, Code Pipeline and other AWS services are used to deploy code chages pushed to github to
AWS S3. 

You can view the published [draft portfolio page](https://portfolio.stevemustanski.com).

## Technologies/frameworks used
* HTML/CSS
* ReactJS
* Python
* Boto3

## Dev Technologies/frameworks used
* Mocha
* Chai
* Jest
* Enzyme
* Babel
* Webpack

## AWS Services used to build and publish the portfolio
* AWS S3
* AWS Cloudfront
* AWS Route53
* AWS Codebuild
* AWS Code Pipeline
* AWS Lambda

## Deployment Pipeline
AWS is used to deploy the application whenever there is an update to the master branch of this portfolio.

AWS Code Pipeline pieces together various services to deploy the code.  The pipeline uses AWS Codebuild and AWS Lambda to take the code from
github and deploy the code to the customer facing AWS edge caches.

The high-level steps are as follows:
* Codebuild watches for changes to the master banch of the github repo
* Codebuild then executes the build steps and deploys a zip file of the built files to build s3 bucket
* A lambda function is then run that unzips the deployment package and deploys the files to source s3 bucket
* The changes are then picked up by CloudFront once a day