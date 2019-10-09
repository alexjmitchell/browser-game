let user_name = prompt("Hello Adventurer, What is your name ?").toUpperCase()

while (user_name === "") {
  alert("Please put in a name.")
  user_name = prompt("Hello Adventurer, What is your name ?").toUpperCase()
}

alert("Let us begin" + " " + user_name)

var weapon = prompt(
  `${user_name}, please pick a weapon:` + " Sword, Axe, Mace"
).toLowerCase()

var choice = weapon

const sword = () => {
  alert("You have come across a minotaur")
  alert("You must choose: Do you Run or Fight ?")
  let runorfight = prompt("What is your Choice").toLowerCase()

  var choice = runorfight

  if (choice === "run") {
    alert(
      `${user_name} ran away from the minotaur, however without noticing ${user_name} fell down a cliff into water below. Escaping certain death, but once ${user_name} returned to the village. ${user_name} was branded a coward and exiled from the village.`
    )
  } else if (choice === "fight") {
    let dodgeorstrike = prompt("Do you Dodge or Strike ?").toLowerCase()

    var choice2 = dodgeorstrike

    if (choice2 === "dodge") {
      alert("You've dodged the first blow and counter defeating the beast")
      alert("You Win !!!!!!")
    } else if (choice2 === "strike") {
      alert(
        "You rush at the beast but lose your arm in the process, however you've defeated the beast."
      )
      alert("You Win !!!!!!!!!")
    } else {
      while (choice2 !== "dodge" || "strike") {
        alert("You've made an improper choice")
        alert("You Lose!!!!!").toUpperCase()
      }
    }
  } else {
    while (choice !== "fight" || "run") {
      alert("You've made an improper choice")
      alert("You Lose!!!!!").toUpperCase()
    }
  }
}

const axe = () => {
  alert("You have come across a Basilisk")
  alert("You must choose: Do you Run or Fight ?")
  let runorfight = prompt("Which do you Choose ?").toLowerCase()

  var choice = runorfight

  if (choice === "run") {
    alert(
      "You escape the beast and find higher ground. From the higher ground you jump on the beast and strike its neck with your axe, thus killing the beast."
    )

    alert("You Win !!!!!!!")
  } else if (choice === "fight") {
    alert(
      "You've chosen to fight, but before you can think the basilisk moves in and over powers you"
    )
    alert("game over!!!!!!".toUpperCase())
  } else {
    while (choice !== "fight" || "run") {
      alert("You've made an improper choice")
      alert("You Lose!!!!!").toUpperCase()
    }
  }
}

const mace = () => {
  alert("You have come across a Hydra")
  alert("You must choose: Do you Run , Fight, or get Help ?")

  let runfighthelp = prompt(
    "Which do you Choose" + " Run , Fight, or get help ?"
  ).toLowerCase()

  var choice = runfighthelp

  if (choice === "run") {
    alert("You cannot escape and you are defeated")
    alert("Game Over!!!!!!!").toUpperCase()
  } else if (choice === "fight") {
    let vision = prompt(
      "You've chosen to fight, but in the midst of your fight, you become plagued by a vision," +
        " do you listen to this vision: yes or no?"
    ).toLowerCase()

    choice2 = vision

    if (choice2 === "yes") {
      alert("You listen to your vision and recieve aid from the gods.")
      alert("With this new power you defeat the Hydra Easily")
      alert("You Win!!!!!!").toUpperCase()
    } else if (choice2 === "no") {
      alert(
        "The gods are angered you did not listen to their message and they strip you of all your weapons, armour, and ability"
      )
      alert("With no weapons, you are defeated.")
      alert("you lose!!!!!1").toUpperCase()
    } else {
      alert("You've choosen incorrectly, You Lose.")
    }
  } else if (choice === "get help") {
    alert(
      "You've chosen to find help. To that end you've come across a wizard."
    )
    alert(
      "With the wizard you battle the Hydra together. The wizard freezes the Hydra, thus giving you the chance to smash the Hydra to pieces"
    )
    alert("You win, Ultimate Victory :)").toUpperCase()
  } else {
    while (choice !== "fight" || "run" || "get help") {
      alert("You've made an improper choice")
      alert("You Lose!!!!!").toUpperCase()
    }
  }
}

if (choice === "sword") {
  sword()
} else if (choice === "axe") {
  axe()
} else if (choice === "mace") {
  mace()
} else {
  while (choice !== "sword" || "axe" || "mace") {
    alert("You've made an improper choice")
    alert("You Lose!!!!!").toUpperCase()
  }
}
