// copy.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';

    const button = document.createElement('button');
    button.innerText = '复制';
    button.className = 'btn btn-sm btn-outline-secondary copy-btn';
    button.style.position = 'absolute';
    button.style.top = '5px';
    button.style.right = '5px';
    button.style.zIndex = '10';

    button.addEventListener('click', () => {
      const text = block.innerText;
      navigator.clipboard.writeText(text).then(() => {
        button.innerText = '已复制';
        setTimeout(() => (button.innerText = '复制'), 1500);
      });
    });

    const pre = block.parentElement;
    pre.parentElement.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(button);
  });
});
