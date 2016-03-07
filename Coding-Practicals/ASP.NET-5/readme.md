##ASP.NET 5 App

Despite the recent release of ASP.NET Core 1.0, I found it valuable to still do a few practicals on ASP.NET 5 as it is a more mature platform at the time of this writing. It will also ease my learning curve when switching to Core 1.0 down the line. The project below is a blog engine site created with ASP.NET 5 and MVC 6 with Entity Framework connected as the database. Along the process of implementation, I found that tag helpers are more useful in the case of creating more customized HTML that Razor picks up at runtime to dynamically render HTML forms.

Some things I coded and spent time learning includes:

* Installing Bower, NPM, and Gulp in Visual Studio to leverage external dependencies in the Dependencies node.
* Modifying gulpfile.js to understand its basic processing pipeline
* Setting up Tasks and Bindings in Task Runner Explorer to optimize development workflow
* Using  *Microsoft.AspNet.Server.WebListener* web command to link to stand-alone custom localhost server
* Experiment using HTML helpers vs. tag helpers to generate HTML form fields
* Add datacontext class to represent database using Entity Framework

