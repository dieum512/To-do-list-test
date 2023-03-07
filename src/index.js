/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */

import './style.css';

import { dragDrop } from './dragtask.js';
import { update } from './update.js';
import {
  clearCompleted, addTodo, editTask, removeElement,
} from './addandremove.js';

export const form = document.querySelector('#form');
export const list = document.querySelector('.to-do-list');
export const clear = document.querySelector('.clear-btn');
export const arr = JSON.parse(localStorage.getItem('List')) || [];

document.querySelector('.refresh').addEventListener('click', () => {
  location.reload();
});

arr.forEach((task) => {
  list.innerHTML += `
  <li class="item" draggable="true">
    <div class="check">
      <input type="checkbox" class="check-box" name="checkbox" id= "${
  task.index
}" ${task.completed ? 'checked' : ''}>
      <form id="edit-form">
        <input type="text" class="text ${
  task.completed
}" id= ${task.index} value="${task.name}">
      </form>
    </div>
    <i class="fa-solid fa-trash trash"></i>
  </li>`;
});

export const editForm = document.querySelectorAll('#edit-form');
export const editFormArr = Array.from(editForm);
export const editInput = document.querySelectorAll('.text');
export const editInputArr = Array.from(editInput);

export const trash = document.querySelectorAll('.trash');
export const task = document.querySelectorAll('.item');

editTask();
window.addEventListener('load', () => {
  addTodo();
  dragDrop();
  update();
});

clearCompleted();
removeElement(task, trash);