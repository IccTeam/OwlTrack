// https://api.whatsapp.com/send/?phone=+{{+6283848301116}}&text=%20{{Hello Mr,OwlBird05}}

var yourNumber = "{{+6283848301116}}"
var yourMessage = "{{hello Mr,OwlBird05}}"

// %20 mean space in link
// If you already had an array then you just join them with '%20'
// easy right


function getLinkWhatsapp(number, message) {
  number = yourNumber
  message = yourMessage.split('').join('%20')

  return console.log('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
}

getLinkWhatsapp()
