import * as UploadApi from '../api/UploadRequest.js'
export const uploadImage = (data) => async(dispatch) => {
    try {
        await UploadApi.uploadImage(data)
    }catch(error) {
        console.log(error)
    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" });
    try {
      UploadApi.uploadPost(data).then((res)=>console.log(res))
      // dispatch({ type: "UPLOAD_SUCCESS", data: post});
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPLOAD_FAILED" });
    }
  };