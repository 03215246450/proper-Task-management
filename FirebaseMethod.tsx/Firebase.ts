import database from "@react-native-firebase/database"

export const AddDataOrPostData = (nodeName: string, body: any) => {
  return new Promise((resolve, reject) => {
    body.id = database().ref(nodeName).push().key
    database().ref(`${nodeName}/${body.id}`).set(body).then(() => {
      resolve(body)
    }).catch((error) => {
      reject(error)
    })
  })
}


export const GetData = (nodeName: string, id?: any) => {
  return new Promise((resolve, reject) => {
    database().ref(`${nodeName}/${id ? id : ""}`).once("value", (data) => {
      if (data.exists()) {
        resolve(Object.values(data.val()))
        // console.log(data.val());
      }
      reject("No data found")
    })
  })
}


export const DelData = (nodeName: string, id: any) => {
  return new Promise((resolve, reject) => {
    database().ref(`${nodeName}/${id ? id : ""}`).remove().then((res) => {
      resolve("Data deleted Successfully")
      console.log(res);
    }).catch((err) => {
      reject("Data Not Found")
      console.log(err);
    })
  })
}


export const UpdateData = (nodeName: string, id: any, body: any) => {
  return new Promise((resolve, reject) => {
      database().ref(`${nodeName}/${id}`).set(body).then(() => {
          resolve(body)
      }).catch((error) => {
          reject(error)
      })
  })
}

