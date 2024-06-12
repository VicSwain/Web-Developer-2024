var database = [
  {
    userName: "Huracan",
    password: "Pass123!",
  },
  {
    userName: "Vic",
    password: "Vic123!",
  },
  {
    userName: "Britt",
    password: "Britt123!",
  },
  {
    userName: "Atlas",
    password: "Atlas123!",
  },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsFeed = [
  {
    userName: "Huracan",
    timeline: "DnB DnB",
  },
  {
    userName: "Kvlypso",
    timeline: "More DnB",
  },
  {
    userName: "Erostoria",
    timeline: "Neurofunk DnB",
  },
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");


function isUserValid(user, pass) {
    for (let index = 0; index < database.length; index++) {
      if (
        database[index].userName === user &&
        database[index].password === pass
      ) {
        return true;
      }
    }
    return false;
  }
  

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    alert("Signed In");
    console.log(newsFeed);
  } else {
    alert("Wrong username or password");
  }
}


signIn(userNamePrompt, passwordPrompt);
