'use strict';

const searchInput = document.getElementById('searchInput'); 
const emailModalInput = document.getElementById('emailModalInput');
const passwordModalInput = document.getElementById('passwordModalInput');
const list = document.getElementById('list');
const table = document.getElementById('table');
const addButton = document.getElementById('addButton');
const modalBody = document.getElementById('modal-body');


let editingEmail, editingPassword = null; 
let id = 1; 

function add() {
  const emailText = emailModalInput.value;
  const passwordText = passwordModalInput.value

  if(emailText.trim() !== '' || passwordText.trim() !== '') {

      const newRow = document.createElement('tr');
      const idCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const passwordCell = document.createElement('td');
      const actionsCell = document.createElement('td');
      const deleteBtn = document.createElement('button');
      const editBtn = document.createElement('button');

      idCell.textContent = id++;

      emailCell.classList.add('email-text');
      emailCell.textContent = emailText;
      passwordCell.classList.add('password-text');
      passwordCell.textContent = passwordText;
      deleteBtn.textContent = 'Deletar';
      deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'me-2');
      editBtn.textContent = 'Editar';
      editBtn.classList.add('btn', 'btn-primary', 'btn-sm');

      editBtn.addEventListener('click', edit);
      deleteBtn.addEventListener('click', drop);

      actionsCell.appendChild(deleteBtn);
      actionsCell.appendChild(editBtn);
      newRow.appendChild(idCell);
      newRow.appendChild(emailCell);
      newRow.appendChild(passwordCell);
      newRow.appendChild(actionsCell);
      list.appendChild(newRow);

    };

    if (emailText.trim() === '' || passwordText.trim() === '') {
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('alert', 'alert-danger');
      alertDiv.setAttribute('role', 'alert');
      alertDiv.textContent = 'Preencha os campos!';
      modalBody.insertBefore(alertDiv, modalBody.firstChild);
      setTimeout(() => {
        alertDiv.remove();
      }, 1000);
      return; 
    };

    emailModalInput.value = '';
    passwordModalInput.value = '';
    const modal = bootstrap.Modal.getInstance(document.getElementById('inputModal'));
    modal.hide();   

  };

function drop() {
  const row = event.target.closest('tr');
  row.remove();
}

function edit(event) {
  const row = event.target.closest('tr');
  const idCell = row.querySelector('td:first-child');
  const emailCell = row.querySelector('.email-text');
  const passwordCell = row.querySelector('.password-text');

  emailModalInput.value = emailCell.textContent;
  passwordModalInput.value = passwordCell.textContent;

  editingEmail = emailCell.textContent;
  editingPassword = passwordCell.textContent;

  const modalTitle = document.getElementById('modalLabel');
  modalTitle.textContent = 'Edite seu Email e Senha';

  addButton.removeEventListener('click', add);
  addButton.addEventListener('click', saveEdit)

}

function saveEdit(event) {
  const row = event.target.closest('tr');
  const editedEmail = emailModalInput.value;
  const editedPassword = passwordModalInput.value;

  if(editedEmail.trim() !== '' || editedPassword !== '') {
    const emailCell = row.querySelector('.email-text');
    const passwordCell = row.querySelector('.password-text');

    emailCell.textContent = editedEmail;
    passwordCell.textContent = editedPassword;
  }

  emailModalInput.value = '';
  passwordModalInput.value = '';
  editingEmail = null;
  editingPassword = null;

  const modalTitle = document.getElementById('modalLabel');
  modalTitle.textContent = 'Novo Email';

  addButton.removeEventListener('click', saveEdit);
  addButton.addEventListener('click', add);

  const modal = bootstrap.Modal.getInstance(document.getElementById('inputModal'));
  modal.hide(); 
  
}


