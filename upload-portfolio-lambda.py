import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:854423450523:DeployPortfolioTopic')
    
    try:
        s3 = boto3.resource('s3')
        
        portfolio_bucket = s3.Bucket('portfolio.stevemustanski.com')
        build_bucket = s3.Bucket('portfoliobuild.stevemustanski.com')
        
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                  ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
                
        print 'Job Completed!'
        topic.publish(Subject='Successfull profile deployment ', Message='Portfolio deployed successfully')
    except:
        topic.publish(Subject='Deploy Portfolio Failure ', Message='The portfolio deployment has failed')
        raise
    return 'Hello from Lamda'