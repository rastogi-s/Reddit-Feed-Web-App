# My Reddit App

## GOAL : ``A web app that fetches the top posts from the reddit app.`` 

### Links:
Please use the below link to access the application on heroku
[MyRedditApp](https://myredditwebapp.herokuapp.com/)

### Technologies Used :

 1. **Client Side:**
    * Angular.
   
### Installation guide

1. Clone the repository.
2. Install npm. [CLI]
3. Install angular CLI using ``npm install -g @angular/cli``
4. Open command prompt and navigate to the cloned directory.
5. Execute npm install.
6. Run angular application using ``ng serve --open``
7. Access the application directly deployed on cloud(heroku) using the following url 
[MyRedditApp](https://myredditwebapp.herokuapp.com/)

### Overview of the  Application:

Tha application uses angular framework. It has a homepage with an input field that can be used to enter the topic or subreddit for which the user wants to fetch the top listings.
On clicking submit the user is redirected to the listing component which lists the default(25) top listings
from last 24 hours. The user has options fetch the top listing from last year, month,24hrs, hour etc.
The user has the ability to fetch the next set of listings using the arrow keys.(pagination)

