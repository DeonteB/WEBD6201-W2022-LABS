"use strict";
(function()
{
        //check if use ris logged in
        if(!sessionStorage.getItem("user"))
        {
            location.href = "login.html";
        }
})();