                                    // Day#01 //
                                    // Anas, 24/4/24
            // This is a program to print my name in upper and lower case letters

//  let name: string = "Anas Iqbal";
//  console.log(name);
//  console.log(name.toLowerCase());
//  console.log(name.toUpperCase());
//  console.log(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase());
 
                                   // Day#02 // 
                                   // Anas, 24/4/24
                 //   This is a program to print a variable within a string

// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
// let famousPerson: string = 'Albert Einstein';
// let message: string = '"A person who never made a mistake never tried anything new."';
// console.log(`${famousPerson} once said, ${message}`);
// let name = "     Anas Iqbal     ";
// console.log(name);
// console.log(name.trim());

                                   // Day#03 //
                                   // Anas, 24/4/24
            // This is a program to print your fav. num in diff. lines using diff. operations

// console.log(2+2+2+2);
// console.log(12-2-2-0);
// console.log(2*2*2);
// console.log(32/2/2);
// let favoriteNumber: number = 8
// console.log(`"My favorite number is = ${favoriteNumber}"`)

                                   // Day#04 //
                                  // Anas, 26/4/24
         //   This program is to print your friends names and access them one by one

        //  let names: string[] = ["Hassan", "Affan", "Aliasar"];
        //  for (let i = 0; i < names.length; i++) {
        //      console.log(names[i]);
        //  }

        //  let names: string[] = ["Alice", "Bob", "Charlie"];
        //  for (let name of names) {
        //      console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
        //  }
                                    // Day#05 //
                                  // Anas, 26/4/24

// let transports: string[] = ["Supra", "GTR", "Evo"];

// transports.forEach(transport => {
//     console.log(`I would like to own a ${transport}.`);
// });                                  

// let guests: string[] = ["Khala", "Mamoo", "Chachoo"];

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });

// let unableToAttend = "Mamoo";
// console.log(`${unableToAttend} can't make it to dinner.`);

// // Replace the guest
// let newGuest = "Phuppi";
// guests[guests.indexOf(unableToAttend)] = newGuest;

// // New invitations
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });

                                    // Day#06 //
                                  // Anas, 26/4/24
                //   This program is to add more guests to dinner invitation                                  

// let guests: string[] = ["Hassan", "Affan", "Aliasar"];
// // console.log("Great news! I found a bigger dinner table!");

// // // Adding more guests
// guests.unshift("Asfand"); // Adding new guest at the beginning of the array
// guests.splice(guests.length / 2, 0, "Molana"); // Adding new guest in the middle of the array
// guests.push("Aaliyan"); // Adding new guest at the end of the array

// // guests.forEach(guest => {
// //     console.log(`Dear ${guest}, would you like to join me for dinner?`); 
// // }); 

// console.log("Unfortunately, I can only invite two people for dinner.");

// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// } 

// // New invitations

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });

// guests.splice(0, guests.length); // Removes all elements
// console.log(guests); // Shows an empty list

// let places: string[] = ["Japan", "Germany", "Canada", "Russia", "Austrailia", "USA"]
// console.log("Original order:", places); 

// console.log("Alphabetical order:", [...places].sort()); 

// console.log("Original order:", places);

// console.log("Reverse alphabetical order:", [...places].sort().reverse());

// console.log("Original order:", places);

// places.reverse(); 
// console.log("Reversed order:", places); 

// places.reverse();
// console.log("Original order:", places); 

// places.sort();
// console.log("Alphabetical order:", places);

// places.reverse();
// console.log("Reverse alphabetical order:", places);

                                    // Day#07 //
                                    // 26/4/24
        // This program is to create a list of guests and show the length of the guests

// let guests: string[] = ["Hassan", "Affan", "Aliasar", "Asfand", "Aaliyan", "Molana", "Wali"]
// console.log(`I am inviting ${guests.length} guests to the dinner`); // Shows the length of the guests

// let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
// console.log("Countries I'd like to visit:", countries); // Shows the list of items in array

// let car: {Make: string, Name: string, Model: number, Variant:string} = {
//     Make: "Toyota",
//     Name: "Supra",
//     Model: 1998,
//     Variant: "3.0l twin-turbo 2JZ-GTE engine "
// }
// console.log(`${car.Make} ${car.Name} made in ${car.Model} with a heart of ${car.Variant}`);

