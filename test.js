const { API } = require('./index');

m = (async () => {

    try {
        const user = await API.fetchUser('iFraan_', 'yourApiKey')
        console.log('User:', user.info())
        console.log('Stats:', user.stats())
        console.log('Killer:', user.killer())
        console.log('Survivor:', user.survivor())
        console.log('Data:', user.data())
    } catch (e) {
        console.log(e)
    }

})

m()