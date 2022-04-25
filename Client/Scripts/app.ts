// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function

"use strict";
(function()
{
    function AuthGuard(): void
    {
        let protected_routes = [
            "/contact-list",
            "/edit"
        ];
    
        if(protected_routes.indexOf(location.pathname) > -1)
        {
            // check if user is logged in
            if(!sessionStorage.getItem("user"))
            {
                // if not...change the active link to "login"
                location.href = "/login";
            }
        }
    }

    function DisplayHome(): void
    {
        console.log("Home Page");
        $("#AboutUsButton").on("click", () => 
        {
            location.href = "/about";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">Hi, this website showcases my projects as well as work I have done in the past.
        
        My main goal is to create amazing projects and show case them.</p>`);


        $("main").append(`
        <article>
            <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
            </article>`);
    }

    function DisplayAboutPage(): void
    {
        console.log("About Us Page");

        $("body").append(`<article class="container">
        <img src="../Assets/images/DBgoat.png" alt="Deonte logo" width="100" height="100" />
        </article>`);
        $("body").append(`<article class="container">
        <h4> Learn More About Deonte Bayliss
        </h4>
        </article>`);
       
        $("body").append(`<article class="container">
        <img src="../Assets/images/Deonte.jfif" alt="Deonte" width="150" height="150" />
        </article>`);
       

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3"> In this section you can learn more about me.
        </p>
        </article>`);
        $("body").append(`<article class="container">
        <h5> About - Deonte 
        </h5>
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">Deonte is a Computer Programming student at Durham college. 
        I have been taking Computer programming for over a year and have learned many new things. 
        I have taking classes in C++, C#, HTML, Python, and much more. During this time, I developed my skills by doing labs and ices to get better and better at what I do.

        </p>
        </article>`);
    }

    function DisplayProjectsPage(): void
    {
        console.log("Our Projects Page");

        
        $("main").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">This page features Deonte's past projects.

        </p>
        </article>`);
        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        Deonte's first project is poster made for a film festival back in 2019, it was a project that had to work on with aluCine. 
        During this time I had to design a graphic that would be used for all advertisement media. I made this poster using adobe photoshop and adobe illustrator.
        From this art work I was able to make more such as a small animation were parts poster come alive and much more.

        </p>
        </article>`);

        $("body").append(`
        <article class="container">
        <h5> Deonte's Projects</h5>
        <img src="../Assets/images/Alucine2019poster.jpg" alt="aluCine Poster" width="450" height="600" />
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        The second project that Deonte has is of C++, it is a lab project that demonstrates the use of my C++ skills.
        This is a program which takes the scores of three archers for a total of four rounds and out puts them, for every round. 
        At the end of the program, it tells you the overall average. 
        This program also has validation checks to make sure the user puts in a whole number and does not input anything else that would be wrong like letters.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <img src="../Assets/images/Lab1.jpg" alt="Lab Screenshot" width="650" height="400" />
        </article>`);


        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        The Third project that I have done is of C++, it is a lab project that demonstrates the use of my C++ skills.
        This is a program is a text reader, was program to read and write a file. For the demo I created a file that had information in it,
        Then I wrote code to change how the text would be format and look in another file. 
        This program also has validation checks to make sure the user puts has a file to open and a file to write to.

        </p>
        </article>`);
        
        $("body").append(`<article class="container">
        <img src="../Assets/images/Lab6.jpg" alt="Lab Screenshot" width="650" height="400" />
        </article>`);


    }

    function DisplayServicesPage(): void
    {
        console.log("Our Services Page");
        
        $("body").append(`<article class="container">
        <h4> Deonte's Skills and Servirces I Offer You!
        </h4>
        </article>`);

        $("main").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">What I can do for you.
        Some services I can offer you are Photography, Graphic Design, Html, JS, PHP, C#, C++ and much more. Each services was gained from the skills listed down below. 
        

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">This page features Deonte's skill sets.
        Each skill has helped me in many ways, whether it be for school or for a job our skills have made a good impact in our lives. Each skill has been gained and practiced.
        These are the skills we can offer and do for you.

        </p>
        </article>`);


        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">My two skills that I think are the best that I would like to showcase are photography and
        graphic design.
        Deontes first skill is photography, I started doing photography when I was younger it quickly became one of my favorite pass times. 
        It got to the point were I was skilled enough to get a job doing it. One of my first jobs was taking pictures at a company for their events and products.
        Photography is one of my best skills as it has lead to me deveopling more skills like editing on adobe softwares and being able to create graphics like icons. 
        If you have a need for a photographer I am your guy, I can edit, I can color correct and much more. You need somthing done regrading photography I'm your guy.

        </p>
        </article>`);
        
        $("body").append(`<article class="container">
        <h5> Photography - Deonte
        </h5><img src="../Assets/images/DSC00089.jpg" alt="Photo of butterfly" width="350" height="400" />
        </article>`);

       
     

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">Deontes' second skill is graphic design, I am able to design lots of graphics and have working expreince doing so.
        This is a skill that can also be transfered into helping design images and icons for sites and even images. I can help code your website and build images that go along with it.
        As a service I'm ready to design anything you need for you websites, logos, postcards, and much more.
      
        </p>
        </article>`);

        $("body").append(`<article class="container">
        <h5> Graphic Design - Deonte
        </h5><img src="../Assets/images/GDone.png" alt="Design of Whale" width="350" height="400" />
        </article>`);
    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName: string, contactNumber: string, emailAddress: string)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();
                
            localStorage.setItem(key, contact.serialize());
        }
    }

    /**
     * This method validates an input text field in the form and displays
     * an error in the message area
     *
     * @param {string} input_field_ID
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
    function ValidateField(input_field_ID: string, regular_expression: RegExp, error_message: string)
    {
        let messageArea = $("#messageArea").hide();
        
        $("#" + input_field_ID).on("blur", function()
        {
            let inputFieldText: string = $(this).val() as string;

            if(!regular_expression.test(inputFieldText))
            {
                $(this).trigger("focus").trigger("select"); 
                messageArea.addClass("alert alert-danger").text(error_message).show(); 
            }
            else
            {
                messageArea.removeAttr("class").hide();
            }
        });
    }

    function ContactFormValidation()
    {
        ValidateField("fullName", /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]{1,})+([\s,-]([A-Z][a-z]{1,}))*$/,"Please enter a valid Full Name.");
        ValidateField("contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please enter a valid Contact Number.");
        ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");
    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        $("a[data='contact-list']").off("click");
        $("a[data='contact-list']").on("click", function()
        {
            location.href = "/contact-list";
        });

        ContactFormValidation();
        
        let sendButton = document.getElementById("sendButton") as HTMLElement;
        let subscribeCheckbox = document.getElementById("subscribeCheckbox") as HTMLInputElement;

        sendButton.addEventListener("click", function()
        {
            if(subscribeCheckbox.checked)
            { 
                let fullName = document.forms[0].fullName.value as string;
                let contactNumber = document.forms[0].contactNumber.value as string;
                let emailAddress = document.forms[0].emailAddress.value as string;

                AddContact(fullName, contactNumber, emailAddress);
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        $("a.delete").on("click", function(event)
        {
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
               // refresh after deleting
                location.href = "/contact-list";
            }
        });
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();
    }

    function CheckLogin()
    {
        // if user is logged in, then...
        if(sessionStorage.getItem("user"))
        {
            // swap out the login link for logout
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );

            $("#logout").on("click", function()
            {
                // perform logout
                sessionStorage.clear();

                // swap out the logout link for login
                $("#login").html(
                    `<a class="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i> Login</a>`
                );

                // redirect back to login page
                location.href = "/login";
            });
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");

        //TODO: implement some data entry validation
    }

    function Display404()
    {

    }

    function Start()
    {
        console.log("App Started!!");

        let page_id = $("body")[0].getAttribute("id");

        switch (page_id)
        {
          case "home": 
            DisplayHome();
            break;
          case "about": 
            DisplayAboutPage();
            break;
          case "projects":
            DisplayProjectsPage();
            break;
          case "services":
            DisplayServicesPage();
            break;
          case "contact-list": 
            DisplayContactListPage();
            break;
          case "contact": 
            DisplayContactPage();
            break;
          case "edit": 
            DisplayEditPage();
            break;
        case "add": 
            DisplayEditPage();
            break;
          case "login": 
            DisplayLoginPage();
            break;
          case "register": 
            DisplayRegisterPage();
            break;
          case "404": 
            Display404();
            break;
        }
    }
    
    window.addEventListener("load", Start);

})();