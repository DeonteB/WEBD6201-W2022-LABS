(function (core) {

    class Contact
{
    // public properties (getters and setters)
    get FullName()
    {
        return this.m_fullName;
    }

    set FullName(full_name)
    {
        this.m_fullName = full_name;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contact_number)
    {
        this.m_contactNumber = contact_number;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }


    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }
// constructor 
    constructor(fullName = "", contactNumber = "", emailAddress = "")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    //public utility methods

    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
        console.error("One or more properties of the Contact Object are missing or invalid");
        return null;
    }

    deserialize(data) // assume that data is in a comma-separted format (string array of properties)
    {
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    // public overide
    toString()
    {
        return `Full Name     : ${this.FullName}\nContact Number: ${this.ContactNumber}\nEmail Address  : ${this.EmailAddress}`;
    }

}





    core.Contact = Contact;
})(core || (core = {}));
