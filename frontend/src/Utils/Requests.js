const noneFunction = () => {}

const request = (url, meta, handleData = noneFunction, handleOk = noneFunction, handleFail = noneFunction) => {
  fetch(url, meta)
    .then((response) => {
      if (response.ok) {
        handleOk(response)
        return response.json()
      } else if (response.status === 401 || response.status === 500) {
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

const post = (url, data, handleData = noneFunction, handleOk = noneFunction, handleFail = noneFunction) => {
  request(
    url,
    {
      method: "post",
      body: JSON.stringfy(data)
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

