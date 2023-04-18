const ListItem = (props) => {
  let tickClass = '';
  if (props.done) {
    tickClass = ' btn-tick--on';
  }

  return `
    <div class="list-item">
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__body">
        <div class="list-item__product">${props.product}</div>
        <div class="list-item__amount">${props.amount}</div>
      </div>
    </div>
  `;
};