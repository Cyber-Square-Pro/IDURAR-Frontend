import * as actionTypes from './types';
import { request } from '@/request';

export const crud = {
  resetState:
    (props = {}) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.RESET_STATE,
      });
    },
  resetAction:
    ({ actionType }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.RESET_ACTION,
        keyState: actionType,
        payload: null,
      });
    },
  currentItem:
    ({ data }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.CURRENT_ITEM,
        payload: { ...data },
      });
    },
  currentAction:
    ({ actionType, data }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.CURRENT_ACTION,
        keyState: actionType,
        payload: { ...data },
      });
    },
  list:
    ({ entity, options = { page: 1, items: 1 } }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'list',
        payload: null,
      });
      let data = await request.list({ entity, options });

      if (data.success === true) {
        console.log(data.result)
        console.log(data.pagination.count);
        const result = {
          items: data.result,
          pagination: {
            current: parseInt(data.pagination.page, 10),
            pageSize: options?.items,
            total: parseInt(data.pagination.count, 10),
          },
        };
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'list',
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'list',
          payload: null,
        });
      }
    },
  create:
    ({ entity, jsonData }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'create',
        payload: null,
      });

      let data = await request.create({ entity, jsonData });
      console.log('insid request action', jsonData);

      if (data.success === true) {
        console.log("success fully added lead "+data)
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'create',
          payload: data.result,
        });

        dispatch({
          type: actionTypes.CURRENT_ITEM,
          payload: data.result,
        });
      } else {
        console.log(' failed adding lead ' + data);
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'create',
          payload: null,
        });
      }
    },
  upload:
    ({ entity, jsonData }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'upload',
        payload: null,
      });
      console.log(jsonData)
      let data = await request.upload({ entity, jsonData });
      console.log('inside uploadaction', data, data.result);
      if (data.success === true) {
        console.log(data);
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'upload',
          payload: data.result,
        });

        dispatch({
          type: actionTypes.CURRENT_ITEM,
          payload: data.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'upload',
          payload: null,
        });
      }
    },
  read:
    ({ entity, id }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'read',
        payload: null,
      });

      let data = await request.read({ entity, id });

      if (data.success === true) {
        dispatch({
          type: actionTypes.CURRENT_ITEM,
          payload: data.result,
        });
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'read',
          payload: data.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'read',
          payload: null,
        });
      }
    },
  update:
    ({ entity, id, jsonData }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'update',
        payload: null,
      });

      let data = await request.update({ entity, id, jsonData });

      if (data.success === true) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'update',
          payload: data.result,
        });
        dispatch({
          type: actionTypes.CURRENT_ITEM,
          payload: data.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'update',
          payload: null,
        });
      }
    },

  delete:
    ({ entity, id }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'delete',
        payload: null,
      });

      let data = await request.delete({ entity, id });

      if (data.success === true) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'delete',
          payload: data.result,
        });
        dispatch({
          type: actionTypes.RESET_ACTION,
          keyState: 'delete',
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'delete',
          payload: null,
        });
      }
    },

  search:
    ({ entity, options = {} }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'search',
        payload: null,
      });

      let data = await request.search({ entity, options });

      if (data.success === true) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'search',
          payload: data.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'search',
          payload: null,
        });
      }
    },
};
