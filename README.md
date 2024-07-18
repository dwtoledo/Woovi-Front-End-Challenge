# @dwtoledo Woovi Front End Challenge using React

This project is a front end code challenge from Woovi. It simulates 3 mobile first screens:
- The first screen is a payment method selection;
- The second screen is the first payment step (in case of "installments" selection), or the prompt payment (in case of "unique payment" selection);
- The third screen is a credit card form for the final payment step (in case of "installments" selection).
  
The values is populated with fictional data.

The project uses various React features such as components, contexts, props, states, routes, and more. Styling is done with Tailwind CSS using Shadcn UI components library. Axios is used to fetch async data (mocked in this example).

## Layout:

<img width="640" alt="github" src="https://github.com/user-attachments/assets/a89d20a7-0427-4c41-a57c-fa7f19d08ebd">

## How to view the project:

You need to have Node.js installed on your machine. Clone the repository and into the project folder, run the following command in the terminal to install all necessary dependencies:

```console
npm install
``` 

Then, run the following command to start the project:

```console
npm run dev
``` 

This will start the local server. Open the project in your browser and interact with the feed and explore its features.

## Changing fictional data:

All fictional data are located on MockedData.ts file into src/models folder. Feel free to change it, simulating different installments number/values, and others.

## Contributing:

Contributions are welcome! Feel free to create a pull request with your improvements or fixes.

