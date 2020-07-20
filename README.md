# aws-cognito-node

This repository code is about creating simply authenctication and authorization using aws cognito and nodejs to create apis from registering user and 
on registering an verification code will to the email id provided and successfully verification you will be confirmed us user and will able to sign in to the application 
or you can confirm user directly  by logging into AWS cognito user pool if you are the admin to Aws cognito service.

The application can be configured to use ngnix as the reverse proxy server to our node js server

// To install ngnix in your linux 
sudo yum install ngnix

// To configure ngnix server 
sudo nano /etc/ngnix/ngnix.conf

edit server block found in the file by doing this we are forwarding the requests to application running port 3000

server {
   listen         80 default_server;
   listen         [::]:80 default_server;
   server_name    localhost;
   root           /usr/share/nginx/html;
location / {
       proxy_pass http://127.0.0.1:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
   }
}


The client side / UI is built using React Js and axios is used to make API calls
And on logging in you will be able to see the ngnix logs of your application 


//
To run the application
npm run dev

problems we face when we use ELB to routes our requests 
is when the registered target is not service , request made will increase the traffic. client  will not be able to cannot  to the application ,
hence we can use ngnix as reverse proxy for our application , and for load balancing

