//If else statement
let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

//output
console.log("Access Level: ", accessLevel);

//if else nested statement
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, admin!";
    } else {
        userMessage = "Welcome, user!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

//output
console.log("Message: ", userMessage);

//Switch statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "blaa";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

//output
console.log("User Category: ", userCategory);