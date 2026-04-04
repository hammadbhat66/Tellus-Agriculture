## Tellus Agriculture Assessment

Given the fact that I only had 2 days to complete the assignment, including designing, coding, and fixing, I prioritized iOS only. I have also made use of various AI tools for the design part. This is how it goes.

Note: I have also added boilerplates for authentication, APIs, debugging tools, folders, etc. for scalability.

1. Design: Google Stitch + Figma import
2. Coding: React Native CLI + TypeScript
3. Assistant: Codex

## Design

Since I did not have much time, I decided to use Google Stitch to create the designs. The theme of the design is green due to the agriculture connection.

## Coding Decisions

- Important libraries and tech used and why:

1. React Native CLI (requirement)
2. TypeScript (to catch smaller bugs more easily and make future coding easier)
3. Redux with Persist (to save and persist globally required states like authentication)
4. React Navigation (easily one of the best navigation libraries)
5. Axios (to make managing and intercepting APIs easier)
6. Reactotron (to easily debug Redux, actions, API hits, etc.)

- Pages:

7. I have created 4 working pages:
   - Landing
   - Herd
   - Cow Details
   - Add New Cow
- Other:

8. I have emulated the authentication. When you press Start Cataloging in Landing page. it will emulate login and when you press profile image you will be prompted will logout alert.

## Trade-Offs

1. Since the document does not tell me to mock the backend, I created `mockdata.json` to emulate the data.
2. I have also not added many validations due to time constraints.
3. I have not added other modules like camera and gallery image pickers, since I do not think they are covered in the scope, as there is no backend to upload the cow data.
4. I have also prioratized IOS only due to time limitations
