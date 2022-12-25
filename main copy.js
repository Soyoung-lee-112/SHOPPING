// TO DO LIST
// 사용자가 텍스트를 추가할 수 있다.
// plus 버튼을 클릭하거나, 엔터키를 치면 아이템을 등록한다.
// 등록한 아이템은 list에 표시 된다.
// delete 버튼 클릭 시 아이템을 삭제 한다.

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

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

function createItem(text) { 
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    deleteBtn.addEventListener('click', () => { 
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);
    
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
    
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => { 
    if (event.key === 'Enter') { 
        onAdd();
    }
})