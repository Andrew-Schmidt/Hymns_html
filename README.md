# Hymns_html

# Purpose
This script has been written with the intention of being used for church services. Further more the output of this script will follow the 1941 lutheran hymnal order of service.

# Requirements
This script has very minimal requirements that can be made more complex. The simplest configuration I plan to have is a smart device and a speaker, until then though this is what you will need these items.
  * a smart device
  * a router
  * a pc, laptop, or a raspberry pi

# Configuration
This webpage will be hosted on a local server on the pc/laptop connected to the router. The page can be accessed through a smart device, I recomend a tablet. An important thing to keep in mind is that what this repo has to offer in terms of content is minimal, if you would like to use this repo I can send you  all of the hymns @mightyfortressluthrenchurch@gmail.com. I only don't have them here due to size limitations. 

# Getting started
Get started you will need to clone this repo and host it on a machine running server software such as apache 2 in my case. connect this machine to the router either through ethernet or wifi. Now that you have the repo cloned and the machine set up you will need to move the repo to the /var/www/html directory. This will ensure that the default page is the website. Test this by going to a new browser tab and typing localhost into the search bar. you should see this page
// insert home page picture here //
Now that you have succesfully opened the local host, open the terminal and type ifconfig, look for the eth0 or wlp and write down that ip address. On a separate device, connect to the network, open a browser and in the search bar type that ip address.
# Using the page
Now that you have the page loaded, you are ready to input your hymns and date. input the hymn numbers into the first four fields and the date in the last field. The hymns will have no influence over the service where as the date will determine the type of service. Here are the different types of services.
* pg. 5 order of service: day of the week is equal to sunday
* pg. 12 order of service: day of the week is equal to sunday and is the last sunday of the month
* pg. 41 order of service: day of week is not sunday
