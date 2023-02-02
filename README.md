# Pranklicious

![Getting Started](./public/landingPageImg.png)

[Click here to see deployed website](https://pranklicious.netlify.app)

## Description

Pranklicious is an app that allows Users to share Pranks that they pulled off, plan their Pranks, collaborate with other people on more elaborate ones, and bond over their life as part-time jesters.

Visitors of the page can browse the pranks and have a good laugh. If they decide to sign up on Pranklicious they can add their Pranks to be displayed publicly, add Steps and Goal to their Pranks and track their progress on them. They can also comment on other Jesters Pranks and receive feedback and support by other Jesters.

Made with a wink by David and Davide

## MVP

- User Authentification 
- CRUD on Models Prank/Step/Comment
- Image Upload
- RouteGuards on BE/FE

## Tech Stack

- FrontEnd: React, Bootstrap
- BackEnd: NodeJS,Express,MongoDB

### The server has the following routes:

| Method | Endpoint                 | Request                                                              | Return Value           |
| ------ | ------------------------ | -------------------------------------------------------------------- | ---------------------- |
| POST   | `/auth/signup`           | { `email` , `password` , `name` }                                    | User object            |
| POST   | `/auth/login`            | { `email` , `password` }                                             | Authentication Token   |
| GET    | `/auth/verify`           |                                                                      | Current user object    |
| POST   | `/api/prank`             | { `title` , `time` , `place` , `decription` , `prankee` , `userId` } | Create a prank         |
| GET    | `/api/pranks`            |                                                                      | Return all pranks      |
| GET    | `/api/prank/prankId`     | { `prankId` }                                                        | Return a specific prank|
| PUT    | `/api/prank/prankId`     | { `prankId` } + { `req.body` }                                       | Edit a specific prank  |
| GET    | `/api/mypranks`          | { `userId` }                                                         | return pranks of a user|
| DELETE | `/api/prank/:prankId`    | { `prankId` }                                                        | Delete a prank         |
| POST   | `/api/step`              | { `title` , `decription` , `prankId` }                               | Create a step          |
| PUT    | `/api/step/stepId`       | { `stepId` } + { `req.body` }                                        | Edit a step            |
| DELETE | `/api/step/stepId`       | { `stepId` }                                                         | Delete a specific step |
| POST   | `/api/commentprank`      | { `description` , `userId` , `prankId` }                             | Create a prank comment |
| POST   | `/api/commentstep`       | { `description` , `userId` , `stepId` }                              | Create a step comment  |
| GET    | `/api/steps`             |                                                                      | Return all comment     |
| DELETE | `/api/comment/:commentId`| { `commentId` }                                                      | Delete a comment       |

[Pranklicious](https://pranklicious.netlify.app)

## Links

- [Trello Link](https://trello.com/b/AvS3JpAn/prankster)
- [Github Repo Client](https://github.com/david-e-productions/pranks-app-client)
- [Github Repo Server](https://github.com/david-e-productions/pranks-app-server)
- [Deployment Link](https://pranklicious.netlify.app)
