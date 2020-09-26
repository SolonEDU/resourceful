# resourceful: SBUHacks 2020
We can teach ourselves anything with the Internet, but it is often challenging to find reliable resources to learn from. Resourceful makes it easy to find the best resources to learn any topic.

[Live Site](https://resourceful-solon.herokuapp.com/)

## Inspiration
Our team noticed that whenever trying to learn something new, whether it be programming languages or a new instrument, it can be difficult to find the best resources to get started with. With the modern Internet and information overload, there is often too much to choose from, and this can be an intimidating thing for beginners. Resourceful aims to solve this issue by making it easy to find the best resources for any topic, so you can focus on learning, not going on a scavenger hunt for resources.

## What it does
Resourceful has various categories such as Computer Science or Music that users can look through for more specific topics, such as JavaScript or Guitar. Within each topic, they can find a crowdsourced directory of the best resources to learn that topic. These resources are organized with a voting system, so the most highly voted resources rise to the top while the less helpful ones sit at the bottom of the list. Any user can view these resources, whether or not they are registered. Registered users can also save resources that they frequently use, create new resources, and comment on resources.

## How we built it
We built the project with Node.js, Express.js, HTML, CSS, and Mongoose to interact with our MongoDB database. Our MongoDB database is stored on MongoDB Atlas, and a live version of our project is hosted using Heroku.

## Challenges we ran into
Searching was very difficult. We were relatively new to Mongoose and did not know how to perform that operation. We also had to look into regular expressions for searching to work.

## Accomplishments that we're proud of
Using new methods such as populate successfuly was very fulfilling. The documentation was difficult to parse for us, but we were able to learn a lot of new things related to Mongoose. We were also proud of our usage of CSS grid to make our website responsive.

## What we learned
We learned alot about Mongoose, especially references and the populate method. These are two very useful methods for associated models, and can be very helpful in the future. We learned about CSS grid as well.

## What's next for Resourceful
We plan on completing some features we did not get to finish such as filtering, commenting, and saving resources.
