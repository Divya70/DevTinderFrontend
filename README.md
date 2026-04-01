#Notes
=> Install react-redux , and redux-toolkit
=> Provide the appStore
=> Create the userSlice => then add the userReducer to reducer

=> Containarize app

1. Create react vite aap
2. Configure vite for docker
3. Create the Dockerfile
4. Setting up Docker compose => it is a tool to definer and run multiple docker container application

<!-- Deployment on AWS Server -->

=> Signup on AWS
=> Launch Instance
=> modify permissions -> Command => chmod 400 YOUR_DOWNLOADED_SECRET_KEY
=> then run this command => ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-19-10.eu-north-1.compute.amazonaws.com
=> Install node version matching with your local node version
