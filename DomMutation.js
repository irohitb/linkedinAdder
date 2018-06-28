Mutations are just changes, Changes to markup (HTML/CSS)


Two types
1. DOM Mutation Events
2. DOM Mutation Observers

->DOM Mutation events (No longer used or supported)
Problem
*Handles Event one by one, No idea about how many more are coming
*Slow, Crashy, Fire too often

-> DOM Mutation Observer
Gives you a list of whatever happened
->Advantage
*Fast Safe and concise

Mutation summary library
*Uses DOM mutation observers
*Process Mutation that took place

//Detecting changes in URL

 /^https?:\/\/(www\.)?google\.(com|\w\w(\.\w\w)?)\/.*?[?#&]q=/;
 
