# HTTP-Assistant
HTTP Assistant is an open-platform that allows client's to create and execute HTTP requests, to test the functionality and behavior of APIs. It provides a user-friendly interface for constructing requests, setting  parameters, and inspecting responses.

![chrome_screenshot_1689781605206](https://github.com/MohOdejimi/HTTP-Assistant/assets/67811733/56734a11-4be7-486b-bc5b-1ebff15cca0d)
Link to Project: https://http-assistant.vercel.app/

# How it's made: 
Tech used: HTML, CSS and Javascript.

HTML and CSS were utilized in building a well-structured markup and user-friendly interface that will provide users with a seamless and smooth engagement on the platform. Vanilla Javascript coupled with the fetch API which is a web api was used to design the functionality of the project. 
The fetch api helped in sending and recieving the HTTP requests from web servers. The request and response objects helped in locating and identifying data such as 
• size
• status
• time
• headers et cetera 
from the server and url interface. The properties and methods that are natively built into the request and response objects initiated the collection of the listed information.


# Optimizations:
To improve the efficiency and perfomance of the project, the sections that took quadratic or linearthimic time to handle and emit response were modified to run at linear time. With the new implementation the project efficiency and perfomance was increased. 

# Lessons Learned: 
Prior to building this project, I only had a solid grasp of how fetch api can be used to make GET requests to web servers. At the completion of the project, I've learnt how POST, PUT and DELETE requests can be initiated with the fetch interface and how to handle responses specific to each request.