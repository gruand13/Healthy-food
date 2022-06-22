function forms(){
// forms
const forms = document.querySelectorAll('form');
const message ={
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

// запрос на сервер
forms.forEach(item=>{
    bindPostData(item);
});
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

function bindPostData(form) {
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const statusMessage= document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText =`
        display: block;
        margin: 0 auto;
        `;
       
        form.insertAdjacentElement('afterend', statusMessage);

        

        
        //собираем все данные из формы 
        const formData = new FormData(form);
        // !!!!!! преобразуем formdata в json
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        
        postData('http://localhost:3000/requests', json)
        .then(data=>{
            console.log(data);
            showThanksModal(message.success);
            
            statusMessage.remove();
        })
        .catch(()=>{
            showThanksModal(message.failure);
        })
        .finally(()=>{
            form.reset(); //сбрасываем форму
        });
        
    });
}

function showThanksModal (message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class= "modal__content">
        <div class ="modal__close" data-close>&times;</div>
        <div class ="modal__title">${message}</div>
    
    
    </div>
    `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(()=>{
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();

    }, 4000);

}
}

module.exports = forms;