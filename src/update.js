/* eslint-disable import/prefer-default-export */

export const update = () => {
  const checkbox = document.querySelectorAll('.check-box');

  const checkBoxArr = Array.from(checkbox);
  checkBoxArr.forEach((checktodo) => {
    checktodo.addEventListener('click', (e) => {
      const parent = e.target.parentElement;

      const editinput = parent.querySelector('.text');

      const list = JSON.parse(localStorage.getItem('List'));

      const index = list.findIndex((item) => item.index.toString() === e.target.id);
      if (e.target.checked) {
        list[index].completed = true;
        localStorage.setItem('List', JSON.stringify(list));
        editinput.style.textDecoration = 'line-through';
      } else {
        list[index].completed = false;
        localStorage.setItem('List', JSON.stringify(list));
        editinput.style.textDecoration = 'none';
      }
    });
  });
};
