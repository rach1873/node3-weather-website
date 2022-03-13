const request = require('request')

const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFjaDE4NzMiLCJhIjoiY2t6bHhhYjBuMDVldjJubXo1YW1jamVqdCJ9.mCiBaoQNQTjqgaW8cE6lkg'

    request({url:url,json:true},(error,response)=>{
        if(error) {
            callback('Uanble to connect to location services',undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try again', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            
            })
        }
    })
}

module.exports = geocode