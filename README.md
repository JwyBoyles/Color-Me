
Color Me is a website that is used to test out color combinations on different elements and generate color schemes.

Color Me uses React to handle DOM manipulation and to create a dynamic stylesheet for each element. Users have a form on the website that they can use to plug in different color values, 
such as hexadecimals, RGB or CSS color names. This form then changes the values being sent to each element so that the user can modify the element's color in real time. 
If a user is unfamiliar with CSS styling they can still use the application. I've included a set of pre-made styles that user can navigate through with a click of a button. 
The values of the pre-made styles then populate the control form. This allows the users to see how I built the styles and also see what types of values are acceptable. 
I intentionally used a variety of different units in the pre-made styles so that when users looks at them they'll see some colors displayed as #000000, "black", or rgb (0, 0, 0). 
This lets the user know what they themselves can use. After the user finishes styling they can generate a style sheet, to get the full picture of what they've done or to use for their own
projects if they would like.

The website can be found at https://color-me.vercel.app/

To run Color Me on your own machine download the files and enter npm start in the project directory. 

The inspiration for this site came from when I was trying to finalize the colors on another project and every time I'd change the color of one element I would have to then change the rest of the elements to get them to blend in properly. After that I started looking to see if there were any websites that let you test out color schemes on different elements; but i could not find one so I decided to build it myself. The intent behind the design was to have all the foundational sections of most websites, such as Header, Body, Footer, Buttons. Then having an interface on the site where you can style those sections. During development I found that the site didn't have enough room to fit the interface so I created a Sidebar to host the form and give another section to style.
In the future I would like to get rid of the form entirely and make editing the elements done by clicking on them. After clicking a small div would pop up with the elements values and the user could edit the colors there. I think that this would take a lot of bulk out of the application and make things look a little smoother.
