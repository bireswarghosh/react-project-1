#   LEARN HOW TO CREATE A REACT UI INTERFACE :-
    

  OPEN TERMINAL AND TYPE --->>  

        npx create-react-app <YOUR_PROJECT_Name>
         npm i react-router-dom react-icons sass
           npm i react-router-hash-link
             npm i react-responsive-carousel


# Hear i explain my project step by step :-


#install react app--->
1.  after running first command on terminal ( npx create-react-app <YOUR_PROJECT_Name>) .
installed a react app. and remove all unnassery file. so go to sre folder 📂 . without App.jsx  and index.js  clear all file.
now complet your all setup.


 #now start to build the project :-
 
2.  creat 3 folder under the src   1)assets  where i save all image ,2. componantes where i add all componants 3. styles where i add all scss file for style.

3. first, go App.jsx
creat routeing set up 
go line 4 
and under the return statment set Router, Routes,Route

4.   go styles folder 
 creat a App.scss file where i add a universal tag of my whole project. and import  font style  from Google.fonts and add link 🔗  in line 1 & 2 .

5. then creat a  colors.scss file where add some colour and text style  through nameing convencation . 



6.   then, componantes folder ,
  and creat Header.jsx , 
   this file where i import Link tag line 2 .
and creat a <nav> bar and add this link  ,line 8- 17



7.  next, go App.js and and add all this link like,

import Header from "./components/Header";
import  "./styles/App.scss"
import  "./styles/header.scss"



after all this part , now add 


8. i go  styles/header.scss 
hear, i basically adjust the header part . 


9. now i creat Home.jsx  and home.scss and add this on App.jsx


10.  now work on Home.jsx --->
Basically it creat a lending page :-
 
hear first of all creat a funcation component, after ot this  go line 13- 18  . hear i id tag because if you go any  other page 📃  and then try to back 🔙 home 🏡 page   so , you  use this id and back 🔙.
 in this line i createmy welcome screen. now add some style so create home.scss  


11.   now work on home.scss --
 firsr , to import colour use it  @import "colour" otherwise you can use @import "./styles/colour.scss".

now for adding style line 4 - 40 . 

12. now go back 🔙 Home.jsx and see line 21- 31 , where i add website deception. now add it style on home.scss  line 41- 78

13. now go back 🔙 Home.jsx and see line 34 - 54 , where i add website about part .  now add it style on home.scss  line 80  -  114 
 hear i id tag because if you go any  other page 📃  and then try to back 🔙 about part or otherwise  you present  home 🏡 page and directly  access about part then i add id in .jsx file 


14.  now go back 🔙 Home.jsx and see line 56 - 98  , where i add brand  part . now add it style on home.scss  line  116- 175.
in .jsx file you  hear  i use icon , so import it use line 4 - 8. 



one more important  matter, --> if you want to add img  so first of all import in line 2 of home.jsx.



15.
#  now set up  footer --->>

first go Footer.jsx  and add all your social media accouns . 
now add go footer.scss --> and add style 




16. now create Contract  page 📄

 so firstly, you creat Contract.jsx  and  create a form , now work to style and add contract.scss and 


# problem Statement :- 
 if you  go Contract page 📄 and try to back home 🏡 page`s about section then page relode ----> 


so avoiding this problem  we installed a package 📦  

 npm i react-router-hash-link   , after install it you go to Header.jsx and import it line 3 . so,  add all id tag part / page 📄  like 
 11 , 13 , 14 . use HashLink





17.   
# now hear i create Service page 📄 
  so crear a Service.jsx where i want to see carousel 🎠 effect that mean automatically show image one by one with the gap of certaain time ⌚.
so, first import it on line 2 . then doing work it import from node_modules. so import iton line 3 .
 
now, go to return, there creat a div and under it add a rapper of Carousel. so, 

set images where you show on your screen . i import it from assets folders , img 3 & 4 .
now set carousel 🎠  property like how long it run , loop ➰ etc. so 




18. for responsive my website i add add media quarry so, crreat a file in style folder 📂 --->

mediaquery.scss hear i add some adjustment my tags.


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    so complet my project     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



#now time ⌚ for hosting  :--


open terminal and type --- > "npm i -g vercel"


then ,























































































