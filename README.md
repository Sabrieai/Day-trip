# Daytrip

Daytrip is a single-page application that mimics a multi-page application with the help of react-router v6. Daytrip allows users to host adventures and reserve them.  Daytip was built with React, HTML, and CSS for the front-end; Node, Express, and PostgresSQL for the backend. When adventures are accessible they have a badge that is displayed on the thumbnail. Hosts can create, edit, and delete their adventures and guests can favourite, reserve, and review adventures once their reservation dates have passed. On the reviews page users have access to the reviews they have written and the reviews left on their adventures. Currently working towards API integrations primarily Auth0, stripe, and google flights.

The inspiration for developing Daytrip was to make itinerary planning and choosing a travel destination easier. We’ve done this by allowing users to search by category of adventure as well as by location and season offered. Daytrip allows locals to offer a taste of what is unique to their locations and transplants to offer a slice of their homes. Through Daytrip, locals and local businesses can showcase their communities' diversity and all the things that you won’t find from a google search. In addition, gig economy is on the rise and people want avenues where they can pursue what they are passionate about.


## Final Product
###### The placeholder is a randomly generated city from our database
<img width="1424" alt="Screen Shot 2022-02-28 at 9 55 42 PM" src="https://user-images.githubusercontent.com/93690436/156096492-5fecc481-5860-4db9-84aa-13194a5002b0.png">
<img width="1429" alt="Screen Shot 2022-02-28 at 9 56 26 PM" src="https://user-images.githubusercontent.com/93690436/156096499-689c888d-6453-4fb5-b4fc-68feb70ebc0a.png">
<img width="1413" alt="Screen Shot 2022-02-28 at 9 55 12 PM" src="https://user-images.githubusercontent.com/93690436/156096514-1a05da6e-241b-405d-8241-49513895a786.png">

###### Users can search by location
<img width="1059" alt="Screen Shot 2022-02-28 at 10 23 16 PM" src="https://user-images.githubusercontent.com/93690436/156099248-679b0aed-81ab-4378-92ca-366f9599163f.png">

<img width="838" alt="Screen Shot 2022-02-28 at 10 23 34 PM" src="https://user-images.githubusercontent.com/93690436/156099291-2a0a824c-6ba7-405d-97b9-a9897bd83552.png">

<img width="853" alt="Screen Shot 2022-02-28 at 10 23 50 PM" src="https://user-images.githubusercontent.com/93690436/156099217-58f83bb4-a94b-40ac-81e5-a6ea7a2d92a0.png">

![chrome-capture (1)](https://user-images.githubusercontent.com/93690436/156099190-f986cc92-1943-4581-ad9a-87ef97514a91.jpg)



###### Users can leave reviews and see the reviews left them

![review page](https://user-images.githubusercontent.com/93690436/156094787-fefbc76a-746d-4043-ab06-47b53bd1a801.jpg)

![reviews page](https://user-images.githubusercontent.com/93690436/156094772-6cfec4df-dda2-4ad9-89ef-cc9bc730e28f.png)

###### Delete functionality

![delete](https://user-images.githubusercontent.com/93690436/156094775-bd856bd2-7249-43b5-a893-d57d82ab961d.gif)



## Running the projects

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes) while we have yet to deploy.

In one terminal, `cd` into `client`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `server`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.


## Dependencies
- Express
- NodeJs
- body-parser
- cors
- React
- React-router-dom
- Material-UI
- React icons

## Future developments
- deployment
- Auth0
- Stripe
- Google Flight



