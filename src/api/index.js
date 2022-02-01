export async function callBackend({
  url,
  method,
  body,
  constants,
  dispatch,
  isFile,
}) {
  const { REQUEST, SUCCESS, FAILURE } = constants;
  try {
    //   * Set loading
    dispatch({ type: REQUEST });
    // * Call backend
    const response = await fetch(url, {
      method: method,
      body: method === "GET" ? null : JSON.stringify(body),
      headers: {
        "Content-Type": isFile ? "multipart/form-data" : "application/json",
      },
    });
    // * Get backend data
    const data = await response.json();

    dispatch({ type: SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error.message });
    throw error.response?.data ? error.response.data : error.message;
  }
}
// https://app-cines.herokuapp.com/api/movie/get
// if(isFile){
//     return "multipart/form-data"
// }else{
//     return "application/json"
// }

// isFile ? "multipart/form-data" : "application/json"
