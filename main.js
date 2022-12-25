// TO DO LIST
// 사용자가 텍스트를 추가할 수 있다.
// plus 버튼을 클릭하거나, 엔터키를 치면 아이템을 등록한다.
// 등록한 아이템은 list에 표시 된다.
// delete 버튼 클릭 시 아이템을 삭제 한다.

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const form = document.querySelector('.new-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    onAdd();
})
function onAdd() {
    // 1. 사용자가 입려한 텍스트를 받아옴
    // 2. 새로운 아이템을 만음 (텍스트 + 삭제 버튼)
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    // 4. 새로 추가된 아이템으로 스크롤링
    // 5. 인풋을 초기화 한다.

    const text = input.value;
    if (text === '') { 
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
   
    item.scrollIntoView({ block: 'center' });
   
    input.value = '';
    input.focus();
}
let id = 0;
function createItem(text) { 
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
     itemRow.setAttribute('data-id', id);

    itemRow.innerHTML = `
          <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
              <i class="fa-solid fa-circle-minus" data-target-id=${id}></i>
            </button>
          </div>
          <div class="item__divider"></div>
    `;
    id++;


    // deleteBtn.addEventListener('click', () => { 
    //     items.removeChild(itemRow);
    // })


    return itemRow;
    
}

// addBtn.addEventListener('click', () => {
//     onAdd();
// });

// input.addEventListener('keyup', event => { 
//     if (event.key === 'Enter') { 
//         onAdd();
//     }
// })

items.addEventListener('click', event => {
    const id = event.target.dataset.targetId;
    if (id) { 
        const toBeDeleted = document.querySelector(`.item__row[data-id='${id}']`);
       toBeDeleted.remove();
        // console.log(toBeDeleted);
    }
});