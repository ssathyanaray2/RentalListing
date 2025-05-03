# Rental Listing Web App

This is a full-stack rental listing application where users can create and view rental property listings.

-----------------------------------------------------------------------
# Tech Stack
**Frontend**: React.js + Vite + MaterialUI
**Backend**: Express.js
**Database**: MySQL
**Deployment**: Docker, docker compose, docker desktop

-----------------------------------------------------------------------
# Requirement to run the code
download docker desktop 

-----------------------------------------------------------------------
# Steps to run with docker
1) git clone git@github.com:ssathyanaray2/RentalListing.git

2) cd app

3) docker compose up --build

4) use http://localhost:3000 in a browser to access the application

-----------------------------------------------------------------------
# Steps to run without docker
**Backend**:

    1) cd app/server

    2) npm install

    3) npm start

**Frontend**:
    1) cd app/client/rental-ui

    2) npm install

    3) npm run dev

    4) use http://localhost:3000 in a browser to access the application

-----------------------------------------------------------------------
# The services will be available:
Frontend: http://localhost:3000

Backend: http://localhost:8000

-----------------------------------------------------------------------
# Features:
1) View the stored rental listing in the ui

2) create a new rental listing

3) Dockerized the application and database, I believe in dockerizing the application as it is easy to share and standardize the process

4) I have used express-generator and vite to create application skeleton.

-----------------------------------------------------------------------
# Future Improvements:
1) Add Linters: As JS is a scripting language adding linters will greatly help.

2) Pagination Support: As the number of rental listing grows, loading all data at once can impact performance. Pagination is an important feature that greatly helps in performance improvement. Example: fetch and display 30 rentals and create a pagination element to fetch next 30 when the user requests.

3) Dynamic Image Uploads: As of now I have used a generic image for all the listing, if the application is deployed in AWS, S3 can be used to store and retrieve images very efficiently and securely.

4) AWS Deployment & Architecture: The application can be deployed using AWS services. I have designed an AWS architecture diagram to demonstrate deployment strategy and showcase my cloud skills.
-----------------------------------------------------------------------


