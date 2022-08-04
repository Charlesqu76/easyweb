


import Components from './components';
import Exhibition from './exhibition';
import Config from './config'

const stores = {
    components: new Components(),
    exhibition: new Exhibition(),
    config: new Config(),
}

export default stores;