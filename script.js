// 메뉴 전환 함수
function showSection(id) {
  document.querySelectorAll('.content').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// 차트 초기화
window.onload = function () {
  showSection('chart');
  new Chart(document.getElementById("dnaChart"), {
    type: 'bar',
    data: {
      labels: ['A', 'T', 'G', 'C'],
      datasets: [{
        label: 'DNA 구성 비율',
        data: [25, 25, 30, 20],
        backgroundColor: ['#4dc9f6', '#f67019', '#f53794', '#537bc4']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
