// получим промис и вернем в формате json
const postData = async (url, data) => {
    const res = await fetch(url,{
        method: "POST",
            headers: {
                'Content-type': 'aplication/json'
            },
            body : data
    });
    return await res.json();
};

  // получение данных с сервера  (делаем запрос дожидаемся окончания и трансформируем в json)
  const getResource = async (url) => {
    const res = await fetch(url);
  // проверяем запрос что все хорошо прошло
    if (!res.ok){
       throw new Error(`Could not fetch ${url}, status: ${res.status}`) ;
    }
        
    return await res.json();
};







export {postData};
export {getResource};