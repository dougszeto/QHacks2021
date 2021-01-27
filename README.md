# Goodboy

## Relevant Links 
Live Demo: https://dougszeto.github.io/QHacks2021/

Devpost: https://devpost.com/software/goodboy
## Inspiration

The idea for this project came from a desire to reduce the inefficiency of dog adoption. Out of 30,000 dogs taken in by shelters each year, only 50% get adopted and 15% end up euthanized. By streamlining the pet/owner matching process, we hope to increase both the number of happy dogs and happy families.

## What it does

#### Shelter side
Shelters create a profile for each dog. They add a picture and specify its name, its breed, its age, its gender, its activity level, and whether it is safe for kids to be around.

#### User side
Users specify their prefered breeds, activity level, age range, gender and whether they want a kid safe dog. Our algorithm then starts showing them appropriate dogs from shelters close to them. If they swipe right on a compatible dog, it's a match! They can schedule a visit with the shelter.

## How we built it

We imagined our brand identity and designed the UI with Figma. The front end was implemented using react. We coded the back end with express.js and node.js. It connects to a firestore database. The backend is hosted as a Docker container on a Google Cloud Run instance. The frontend is hosted on github pages. We registered the domain adoptagoodboy.online as part of the domain.com challenge. The descriptiveness of our domain name should help with SEO and user acquisition.

## Challenges we ran into

We ran into issues trying to update documents in our firestore database. Some methods in the firebase SDK did not behave as expected and we could not solve the issue in time. We were still able to implement some workaround on the front end for demo purposes.

## Accomplishments that we are proud of

This was our first time working on a full web app for a hackathon and transforming our ideas and designs into a real product felt very rewarding. We are proud that we were able to build a working prototype in the short time given. 

## What we learned

This project gave us the opportunity to learn a lot about web development. Starting from a UI prototype and working from there. Since we coded the front end, the back end and refined the design all at the same time, effective and efficient cooperation was needed. 

## What's next for Goodboy

This is the big question. The logical next step would be to form a relationship with dog shelters since they are the backbone of our project. This would also give us some visibility with their clients. We could also work on extending Goodboy to other pets such as cats and turtles. 
