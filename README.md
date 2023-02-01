

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
