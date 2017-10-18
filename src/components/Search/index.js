import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {
        myInput: store.search.myInput
    };
}

export default connect(mapStoreToProps)(Search);