import React from 'react';
import './stores-list.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStoresList } from '../../redux/stores/stores.selectors';
import StoreInfo from '../../components/store-info/store-info.component';

const StoresList = ({ storesList }) => (
    <div className='store-list'>
        <h2 className='header-text'>Stores List</h2>
        {storesList.map((store, index) => (
            <StoreInfo key={index} store={store} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    storesList: selectStoresList
});

export default connect(mapStateToProps)(StoresList);