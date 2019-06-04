const noneFunction = () => {}

const request = (url, meta, handleData = noneFunction, handleOk = noneFunction, handleFail = noneFunction) => {
  return fetch(url, meta)
    .then((response) => {
      if (response.ok) {
        handleOk(response)
        return response.json()
      } else if (response.status === 401 || response.status === 404 || response.status === 500) {
        handleFail(response)
        return response.json()
      }
    })
    .then((data) => {
      handleData(data)
    })
    .catch((error) => { console.error(error) })
}

const get = (url, handleData = noneFunction, handleOk = noneFunction, handleFail = noneFunction) => {
  request(
    url,
    {
      method: "get"
    },
    handleData,
    handleOk,
    handleFail)
}

const getHeader = (additional = {}) => {
  let header
  if (additional !== undefined && additional !== null) {
    header = additional
  }
  header['Accept'] = 'application/json'
  header['Content-type'] = 'application/json'
  header['Accept-Language'] = 'pt-br'
  return header
}

const postData = (url, data, handleData = noneFunction, handleOk = noneFunction, handleFail = noneFunction) => {
  request(
    url,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: getHeader() 
    },
    handleData,
    (response) => {
      handleOk(response)
    },
    (response) => {
      handleFail(response)
    }
  )
}

export { postData, get }
