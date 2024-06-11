# Project Exam 1
![Skjermbilde 2024-05-29 165214](https://github.com/AnnaSkudsveen/project-exam1/assets/142508748/a483a80a-427f-4ce7-a262-05e6c922226d)

## Description
This project was developed for a school exam. The objective was to create a front-end user interface for an existing API blogging application for a client, HotView Labs. It's a responsive application that allows users to view blog posts. Additionally, there's an admin page for the owner to register, log in, and manage their blog posts.


You can see a deployed demo of the project [here](https://anna-skudsveen-project-exam1.netlify.app/)

### Features
 - Authorized admin page for managing blog posts.
 - Login and registration for users who are part of the company.
 - Create new posts.
 - Edit existing posts.
 - Delete posts.
 - Front-end interface for an existing API blogging application.
 - Responsive design for compatibility with various devices.
 - View blog posts on a public-facing webpage.
 - Carousel displaying the latest 3 posts.
 - Display of the writer and the time each post was made.
 - Pagination to show only the latest 12 posts at a time.
 - API error handling to manage issues with API calls.

## Technologies
JS

HTML

CSS

Git

[Figma](https://www.figma.com/design/iwm2yt2TfuKaHf5iic2Tow/Project-Exam-1?node-id=1-9&t=3dOHjK1AYfBmzKeX-1)

## Project Roadmap
While I am happy about the project, I would love to further enhance the user experience, and add more and better user feedback. Search, filter and sort functions would also be great moving forward.

### Plans
[FigJam board](https://www.figma.com/board/d33EUlTGVsuDs9HFsSo9Jf/Project-Exam-1---Figjam?node-id=0-1&t=ZwkSv96Svz6xNCAY-1)

### User flow
```mermaid
flowchart TD
    A(User) -->B[Landing, home <br> /index.html]
    B --> C[Post, detail <br> /post/index.html]

    D(Owner) -->E[Admin, register <br> /account/register.html]
    D --> F[Admin, login <br> /account/login.html]
    E-->F
    F-->G{Admin, overview <br> /account<br>/overview.html}
    G-->H[Admin, new post <br> /post/make.html]
    G-->I[Admin, edit/delete <br> /post/edit.html]
    J(Client) --> D
```

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
