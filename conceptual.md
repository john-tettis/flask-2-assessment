### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
	-Restful routing is the standard method of creatin API endpoints for efficient CRUD 

- What is a resource?
	- an object within a databse with a type, information, and relationships to other resources

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
	- Because an API is does not contain routes in which you can visit in your browser and receive standard html, an API is only used for its endpoints, in which it returns information, usually in json or xml.

- What does idempotent mean? Which HTTP verbs are idempotent?
	- idempotent means you can send a request an infinite amount fo times and it will have a persistent effect(it wont compound). Get, put, delete are idempotent

- What is the difference between PUT and PATCH?
	- put includes the entire record in which to be changed, while patch contains t=jus the parts of the record that need to be changed.

- What is one way encryption?
	- A method of encryption in which the original un-hashed data is never parsed - used for passwords where  an attempted password is passed through the same encryption as the original password to see if the hashes match.

- What is the purpose of a `salt` when hashing a password?
	- it adds a random aspect to the hash so that malicious internet villians cannot brute force their way through encryption as easily.

- What is the purpose of the Bcrypt module?
	- It allows us to create a system of hashing passwords with a salt for use in authorization and verification - security purposes.

- What is the difference between authorization and authentication?
	- Authentication is verifiying that a user is actually the user they are trying to sign in as(password-username relationship). Authorization is checking if a user has permission to be where they are, or doing what theyre doing.
