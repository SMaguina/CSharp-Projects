# CSharp-Projects
Knockout.js demos and C# projects worked on with customized scripts written in Visual Studio

### Product Inventory Single Page Application

I was given a challenge to create a SPA (Single Page Application) of a product inventory that can display basic CRUD functionalities when products are added, removed, and updated with time tracking capabilities. 
In order to complete this, I used the Knockout.js framework and gained a comprehensive understanding of using this framework within Visual Studio. I created it as a website application in the IDE and coded the observables, view model functions, and data-bindings.
As a result, I was able to add the capability to update the product information, remove any items in the Inventory list, and add a number digit that keeps track of the amount of items in stock in real-time. So, when an item gets added or removed, the page automatically updates the amount. There is a Timestamp that is also automatically added alongside each item using the new Date property in C#.

### 24/7 Automated File Transfer Script

This project involved creating a script to solve a time efficiency problem of manually transferring files containing customer orders on a certain time each day. The challenge was finding a way to automate this process into a script where a collection of text files that are new or edited in the past 24 hours are to be copied to a certain file directory. In order to achieve this, I used C# on Visual Studio and created it as a Console Application. The functioning script begins at the 'HomeFolder' directory and transfers the files into the 'DestinationFolder' directory after passing the file check procedure within the 'for each' loop. This allows for the automation to begin if the files met the 'DateTime' requirements of being new or edited within 24 hours. The script is able to successfully execute from there without any manual intervention. 
