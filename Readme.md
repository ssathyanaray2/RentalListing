Rental Listing Web App

Requirement to run the code
download docker desktop 

How to run the code?
git clone git@github.com:ssathyanaray2/RentalListing.git
docker compose up --build

How to run without docker?
backend:
    cd server
    npm install
    npm start

frontend:
    cd client/rental-ui
    npm install
    npm run dev

Tech Stack:
express.js
react.js
mysql
docker
docker compose

The following services will be available:

Frontend: http://localhost:3000
Backend: http://localhost:8000
MySQL: localhost:3306 (use root/root)

I have use express-generator and vite to create application skeleton.

Future Improvements:
1. Adding linters, since js is a scripting language linters are will help 

