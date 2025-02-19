document.getElementById('calculate-bmi').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 
  
    if (weight && height) {
      const bmi = (weight / (height * height)).toFixed(2);
      document.getElementById('bmi-result').textContent = `Your BMI is: ${bmi}`;
    } else {
      document.getElementById('bmi-result').textContent = 'Please enter valid values.';
    }
  });
  
  document.getElementById('add-activity').addEventListener('click', () => {
    const activity = document.getElementById('activity-input').value;
  
    if (activity) {
      const li = document.createElement('li');
      li.textContent = activity;
      document.getElementById('activity-list').appendChild(li);
      document.getElementById('activity-input').value = ''; 
    }
  });
  
  const canvas = document.getElementById('progress-chart');
  const ctx = canvas.getContext('2d');
  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [2, 4, 6, 8], 
  };
  
  function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const maxData = Math.max(...progressData.data);
    const barWidth = 50;
    const barSpacing = 20;
    const chartHeight = canvas.height - 20;
  
    progressData.data.forEach((value, index) => {
      const barHeight = (value / maxData) * chartHeight;
      const x = index * (barWidth + barSpacing) + 30;
      const y = canvas.height - barHeight;
  
      ctx.fillStyle = '#4caf50';
      ctx.fillRect(x, y, barWidth, barHeight);
  
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.fillText(progressData.labels[index], x + barWidth / 2, canvas.height - 5);
    });
  }
  
  drawChart();
  