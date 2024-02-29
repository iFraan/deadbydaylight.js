import { API } from "./src/index";
const token = 'your-steam-token';

const test = async () => {

    try {
        const user = await API.fetchUser('iFraan_', token)
        console.log('User:', user.info())
        console.log('Stats:', user.stats())
        console.log('Killer:', user.killer())
        console.log('Survivor:', user.survivor())
        console.log('Data:', user.data())
    } catch (e) {
        console.log(e)
    }

}

test();