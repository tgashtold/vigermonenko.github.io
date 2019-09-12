import { createAction } from 'redux-actions';


const createRequestActions = (actionName) => ({
  request: createAction(actionName),
  success: createAction(`${actionName}_SUCCEEDED`),
  failed: createAction(`${actionName}_FAILED`),
});

export default createRequestActions;
