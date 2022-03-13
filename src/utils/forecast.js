const request = require('request')
const forecast = (latitude,longitude,callback) => {
const url = 'http://api.weatherstack.com/current?access_key=7239db7f58cee7aa14bd6a73645fc797&query=' + latitude + ',' + longitude + '&units=f'

    request({url:url,json:true}, (error,response)=>{
        if(error) {
            callback('Unable to connect to weather services',undefined)

        } else if (response.body.error) {
            callback('Unable to find location',undefined)

        } else {
            callback(undefined,'It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + '% chance of rain')

        }
    })

}

module.exports = forecast