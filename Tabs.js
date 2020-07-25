let hero_block = document.querySelectorAll('.hero_block');

hero_block.forEach((item) => {
   item.addEventListener('mouseover', () => { //Тут нет смысла ставить if(item), так как контент меняется и не находится 2 hero_block'а на одной странице, это же табы)
      item.children[0].classList.add('show');
   });

   item.addEventListener('mouseout', () => {
      item.children[0].classList.remove('show');
   });
});