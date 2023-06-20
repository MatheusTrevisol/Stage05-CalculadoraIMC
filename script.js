/* variáveis */
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* Funções */

/* Modal */
// Estruturação de dados do modal 
const Modal = {
    modal: document.querySelector('.modal-wrapper'),
    spanIMC: document.querySelector('#spanIMC'),
    modalBtnClose: document.querySelector('.close'),

    open() {
        Modal.modal.classList.add('open');
    },
    close() {
        Modal.modal.classList.remove('open');
    }
}

Modal.modalBtnClose.onclick = () => {
    Modal.close()
}

/* Form */
form.onsubmit = (e) => {
    e.preventDefault(); 
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = calculateIMC(weight, height);    
    Modal.spanIMC.innerText = result;

    Modal.open()
}

/* Cálculo IMC */
function calculateIMC(weight, height) {
    if((weight || height) != Number) {

    }

    return (weight / ((height / 100)) ** 2).toFixed(2);
}
