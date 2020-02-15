
import { createSelector } from 'reselect';


const makeSpectacleForm = () => state => state.get('productHuntStore');

const makeProductHuntSelector = () => createSelector(
  makeSpectacleForm(),
  substate => substate.toJS(),
);

export {
  makeProductHuntSelector,
};
