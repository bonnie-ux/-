(() => {
  const updatedTime = document.getElementById('updatedTime');
  const dataDate = document.getElementById('dataDate');
  const year = document.getElementById('year');
  const toast = document.getElementById('toast');
  const refreshButton = document.getElementById('refreshButton');
  const exportButton = document.getElementById('exportButton');
  const amountToggle = document.getElementById('amountToggle');
  const menuButton = document.getElementById('menuButton');
  const sidebar = document.getElementById('sidebar');
  let amountsHidden = false;
  let toastTimer;

  const formatDate = (date, withTime = false) => {
    const dateText = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('/');
    if (!withTime) return dateText;
    return `${dateText} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  const showToast = (message) => {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
  };

  const setAmounts = () => {
    document.querySelectorAll('.masked-amount').forEach((node) => {
      const fullValue = node.dataset.amount || node.textContent;
      node.textContent = amountsHidden ? 'NT$ ••••••••' : (fullValue.startsWith('NT$') ? fullValue : `NT$ ${fullValue}`);
    });
    amountToggle.setAttribute('aria-pressed', String(amountsHidden));
    amountToggle.querySelector('span:last-child').textContent = amountsHidden ? '顯示金額' : '隱藏金額';
  };

  const refreshDashboard = () => {
    refreshButton.disabled = true;
    refreshButton.innerHTML = '<span>↻</span>更新中';
    refreshButton.style.opacity = '.78';
    window.setTimeout(() => {
      const now = new Date();
      updatedTime.textContent = formatDate(now, true);
      dataDate.textContent = formatDate(now);
      refreshButton.disabled = false;
      refreshButton.innerHTML = '<span>↻</span>重新整理';
      refreshButton.style.opacity = '1';
      showToast('資金總覽已更新完成');
    }, 700);
  };

  refreshButton.addEventListener('click', refreshDashboard);
  amountToggle.addEventListener('click', () => {
    amountsHidden = !amountsHidden;
    setAmounts();
    showToast(amountsHidden ? '已隱藏所有金額' : '已顯示所有金額');
  });
  exportButton.addEventListener('click', () => showToast('摘要匯出功能已準備完成（示範介面）'));

  menuButton.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (window.innerWidth > 820) return;
    if (!sidebar.classList.contains('open')) return;
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      sidebar.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.side-nav a, .primary-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.side-nav a, .primary-nav a').forEach((item) => item.classList.remove('active'));
      const href = link.getAttribute('href');
      document.querySelectorAll(`[href="${href}"]`).forEach((item) => item.classList.add('active'));
      if (window.innerWidth <= 820) {
        sidebar.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const now = new Date();
  updatedTime.textContent = formatDate(now, true);
  dataDate.textContent = formatDate(now);
  year.textContent = String(now.getFullYear());
  setAmounts();
})();
