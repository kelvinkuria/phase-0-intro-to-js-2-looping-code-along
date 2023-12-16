
function countDown(startingNumber) {

    if (typeof startingNumber !== 'number' || startingNumber <= 0 || !Number.isInteger(startingNumber)) {
      console.log("Please provide a positive integer as input for countDown function.");
      return;
    }
  

    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  function writeCards(namesArray) {
    let thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);
    }
  
    return thankYouMessages;
  }
  
  countDown(10);
  
:
  const names = ["Guadalupe", "Ollie", "Aki"];
  const messages = writeCards(names);
  console.log(messages);
  

  
