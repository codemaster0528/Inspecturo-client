import React from 'react'

export default function viwango() {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  var urlencoded = new URLSearchParams()
  urlencoded.append('ascout_keyValue', 'zD3BVPtyimdhrNBX5')
  urlencoded.append('regionId', '1')

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  }

  fetch('http://161.35.118.186/mkulima/gari/mkaguzi', requestOptions)
    .then(response => response.json())
    .then(result => {
      return result
    })
    .catch(error => console.log('error', error))
}
