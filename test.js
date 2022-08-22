const { API } = require('./index');

m = (async () => {

    try {
        const user = await API.fetchUser('iFraan_', '12E3CE89F2DEC24C99E573FC79579E90')
        // console.log('User:', user.info())
        console.log('Stats:', user.stats())
        // console.log('Weapons:', user.weapons())
        // console.log('Maps:', user.maps())
        console.log(user.raw)
    } catch (e) {
        console.log(e)
    }

})

m()