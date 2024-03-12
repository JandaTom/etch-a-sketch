# Etch-A-Sketch
Project based on The Odin Project assignment [Etch A Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

It serves as a DOM manipulation practice using Javascript. 

Link to run the web app: [Link](https://jandatom.github.io/etch-a-sketch/)

**Running your mouse over colorful heading recommended. ;)**

If you are going to run the app, **please do so on a computer or laptop with a mouse/touchpad**, as drawing using touch is not fully implemented yet. On mobile phone, only taping single squares is implemented so far, due to difficulty with tracking the user finger drag across multiple elements on the screen.

## Description

This project is an loose interpretation of an Etch A Sketch game, which is a mechanical drawing toy. For those who are interested or cannot remember, what it looks like, check this [Wikipedia link](https://en.wikipedia.org/wiki/Etch_A_Sketch).

In my web form, user is allowed to pick how detailed user wants the grid to be, without changing the overall grid size. 

After deciding, user can draw as the heart desires either using random colors option, or selecting own colors from a color picker. 

After user decides, that user wants to scrap current project, user can 
simply click on the 'reset' button, and the painting will disappear.

## Code explanation

In the code, on the first load I am using pre-defined variables to run calculations on how large each segment should be and then I fill the '.container' div with empty divs, using the '.appendChild' function, that have height, width and their amount calculated early in the code.

I am using Flexbox feature 'flex' to ensure, that container si filled both horizontally and vertically.

Next is the 'painting' feature, that is created by tracking through a variable whether user is holding mousebutton down or not, and if it is, I am tracking user entering the beforehand created empty divs and change their color accordingly based on user preference (random selection, or own selection from color-picker).




