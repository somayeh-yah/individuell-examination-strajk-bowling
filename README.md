# Individuell examination: Strajk bowling

# Libraries you need

# The following libraries need to be installed for this examination:
   - npm create vite@latest
   - npm install vitest --save-dev
   - npm install jsdom --save-dev
   - npm install @testing-library/react @testing-library/jest-dom --save-dev
   - npm install msw --save-dev


#### User stories ####

# As a user I want to be able to book dates and times and enter players so that I can reserve 1 or more lanes in the bowling alley. 
# As a user I want to be able to choose the shoe size for each player so that each player gets shoes tha fit. 
# As a user I want to be able to remove a shoe size field if I accidentlly clicked on one too many so I don't book shoes unnecessarily. 
# As a user I want to be able to send off my reservation and get back reservation number and total sum so that I know how much to pay. 
# As a user I want to be able to navigate back to the main page after booking confirmation.

## Acceptans criteria 

- It should get error if I use letters instead of numbers in the date field.

- It should give an error if I forgot to fill in an input fild.

- The range of numbers for shoe size should only be 2 charachters. 

- It should give me an message if I shoose yesterdays date.

- It should get a error if people is under 0 

- It shuld get give a error message if lanes is under 0

- It should gave an error if I try give an time that has passed 

- Date should not accept letters

- Date should not accept special charachters

- Date should give an varning if I forgot giva date for visit

- An error should occur if the time field is left empty.

- The bowlers fild should not accept letters

- The bowlers field should only accept numbers between 1 to 100

- The bowlers field should not accept negative numbers

- The number of bowlers and the number of lanes should match.

- Only 4 players/ lane should be allowed 

- The lanes field should only accept a 2 digit number

- The lanes field should not accept letters or special  characters.

- The application should warn if I try to book with an empty field.

- I shuld be able to remove a shoe filed  

- The shoe fild should not accept letters

- The shoe fild should give a varning if I enter a negative number

- The shoe field should only accept a 2 digit number 

- The shoe field should only accept numbers between 25 and 50.

- number of bowlers and lanes should match.

- An error should occur if the number of people is less than 0.

- The Confirmation page should have a button that I can use to navigate back to the main page.

- I should be able to book a reservation for my visit.

- I should get a confirmation message with my booking information.

- The confirmation message should contain the visit date.

- The confirmation message should contain the visit time.

- The confirmation message should contain the total sum for my reservation.





