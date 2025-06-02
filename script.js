<<<<<<< HEAD
  // שמירת הדיווח
  document.getElementById('reportForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // קריאה לערכים
    const survivedToEnd = document.querySelector('[name="survivedToEnd"]')?.value || '';
    const lastHider = document.querySelector('[name="lastHider"]')?.value || '';
    const caughtCount = parseInt(document.querySelector('[name="caughtCount"]')?.value || '0');

    // חישוב ניקוד
    let points = 0;
    if (survivedToEnd === 'yes') points += 10;
    if (lastHider === 'yes') points += 10;
    if (!isNaN(caughtCount)) points += caughtCount;

    // איסוף כל הנתונים
    const formData = {
      playerName: document.getElementById('playerName').value,
      discordName: document.getElementById('discordName').value,
      roundNumber: document.getElementById('roundNumber').value,
      role: document.getElementById('role').value,
      survivedToEnd: survivedToEnd,
      top10: document.querySelector('[name="top10"]')?.value || '',
      lastHider: lastHider,
      caughtCount: caughtCount,
      mostCatches: document.querySelector('[name="mostCatches"]')?.value || '',
      proofLink: document.getElementById('proofLink').value,
      notes: document.getElementById('notes').value,
      date: new Date().toLocaleString(),
      points: points
    };

    // שמירה ב-localStorage
    let reports = JSON.parse(localStorage.getItem('reports') || '[]');
    reports.push(formData);
    localStorage.setItem('reports', JSON.stringify(reports));

    // הודעה למשתמש
    alert(`📄 הדיווח נשמר בהצלחה!\n✅ צברת ${points} נקודות`);

    this.reset();

    // הסתרת שדות מותנים אחרי שליחה
    document.getElementById('hiderSection').style.display = 'none';
    document.getElementById('seekerSection').style.display = 'none';
  });

  // שינוי תפקיד - הצגת שדות מתאימים
  document.getElementById('role').addEventListener('change', function () {
    const role = this.value;
    const hiderSection = document.getElementById('hiderSection');
    const seekerSection = document.getElementById('seekerSection');

    if (role === 'hider') {
      hiderSection.style.display = 'block';
      seekerSection.style.display = 'none';
    } else if (role === 'seeker') {
      hiderSection.style.display = 'none';
      seekerSection.style.display = 'block';
    } else {
      hiderSection.style.display = 'none';
      seekerSection.style.display = 'none';
    }
  });

  
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    dx: Math.random() * 0.5 - 0.25,
    dy: Math.random() * 0.5 - 0.25,
    color: `hsla(${Math.random() * 360}, 70%, 60%, 0.6)`
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let p of particles) {
    p.x += p.dx;
    p.y += p.dy;

    // גבולות המסך
    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();



document.getElementById('proofFile').addEventListener('change', function () {
  const file = this.files[0];
  const display = document.getElementById('fileNameDisplay');
  if (file) {
    display.textContent = file.name;
  } else {
    display.textContent = '';
  }
});

// שמירת הדיווח
document.getElementById('reportForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fileInput = document.getElementById('proofFile');
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const proofData = reader.result;

    // קריאה לערכים
    const survivedToEnd = document.querySelector('[name="survivedToEnd"]')?.value || '';
    const lastHider = document.querySelector('[name="lastHider"]')?.value || '';
    const caughtCount = parseInt(document.querySelector('[name="caughtCount"]')?.value || '0');

    // חישוב ניקוד
    let points = 0;
    if (survivedToEnd === 'yes') points += 10;
    if (lastHider === 'yes') points += 10;
    if (!isNaN(caughtCount)) points += caughtCount;

    const formData = {
      playerName: document.getElementById('playerName').value,
      discordName: document.getElementById('discordName').value,
      roundNumber: document.getElementById('roundNumber').value,
      role: document.getElementById('role').value,
      survivedToEnd: survivedToEnd,
      top10: document.querySelector('[name="top10"]')?.value || '',
      lastHider: lastHider,
      caughtCount: caughtCount,
      mostCatches: document.querySelector('[name="mostCatches"]')?.value || '',
      proofData: proofData,
      notes: document.getElementById('notes').value,
      date: new Date().toLocaleString(),
      points: points
    };

    let reports = JSON.parse(localStorage.getItem('reports') || '[]');
    reports.push(formData);
    localStorage.setItem('reports', JSON.stringify(reports));

    alert(`📄 הדיווח נשמר בהצלחה!\n✅ צברת ${points} נקודות`);

    fileInput.value = '';
    document.getElementById('fileNameDisplay').textContent = '';
    e.target.reset();

    document.getElementById('hiderSection').style.display = 'none';
    document.getElementById('seekerSection').style.display = 'none';
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    reader.onload(); // קריאה עם undefined כדי להכניס דיווח גם בלי קובץ
  }
});
=======
  // שמירת הדיווח
  document.getElementById('reportForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // קריאה לערכים
    const survivedToEnd = document.querySelector('[name="survivedToEnd"]')?.value || '';
    const lastHider = document.querySelector('[name="lastHider"]')?.value || '';
    const caughtCount = parseInt(document.querySelector('[name="caughtCount"]')?.value || '0');

    // חישוב ניקוד
    let points = 0;
    if (survivedToEnd === 'yes') points += 10;
    if (lastHider === 'yes') points += 10;
    if (!isNaN(caughtCount)) points += caughtCount;

    // איסוף כל הנתונים
    const formData = {
      playerName: document.getElementById('playerName').value,
      discordName: document.getElementById('discordName').value,
      roundNumber: document.getElementById('roundNumber').value,
      role: document.getElementById('role').value,
      survivedToEnd: survivedToEnd,
      top10: document.querySelector('[name="top10"]')?.value || '',
      lastHider: lastHider,
      caughtCount: caughtCount,
      mostCatches: document.querySelector('[name="mostCatches"]')?.value || '',
      proofLink: document.getElementById('proofLink').value,
      notes: document.getElementById('notes').value,
      date: new Date().toLocaleString(),
      points: points
    };

    // שמירה ב-localStorage
    let reports = JSON.parse(localStorage.getItem('reports') || '[]');
    reports.push(formData);
    localStorage.setItem('reports', JSON.stringify(reports));

    // הודעה למשתמש
    alert(`📄 הדיווח נשמר בהצלחה!\n✅ צברת ${points} נקודות`);

    this.reset();

    // הסתרת שדות מותנים אחרי שליחה
    document.getElementById('hiderSection').style.display = 'none';
    document.getElementById('seekerSection').style.display = 'none';
  });

  // שינוי תפקיד - הצגת שדות מתאימים
  document.getElementById('role').addEventListener('change', function () {
    const role = this.value;
    const hiderSection = document.getElementById('hiderSection');
    const seekerSection = document.getElementById('seekerSection');

    if (role === 'hider') {
      hiderSection.style.display = 'block';
      seekerSection.style.display = 'none';
    } else if (role === 'seeker') {
      hiderSection.style.display = 'none';
      seekerSection.style.display = 'block';
    } else {
      hiderSection.style.display = 'none';
      seekerSection.style.display = 'none';
    }
  });

  
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    dx: Math.random() * 0.5 - 0.25,
    dy: Math.random() * 0.5 - 0.25,
    color: `hsla(${Math.random() * 360}, 70%, 60%, 0.6)`
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let p of particles) {
    p.x += p.dx;
    p.y += p.dy;

    // גבולות המסך
    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();



document.getElementById('proofFile').addEventListener('change', function () {
  const file = this.files[0];
  const display = document.getElementById('fileNameDisplay');
  if (file) {
    display.textContent = file.name;
  } else {
    display.textContent = '';
  }
});

// שמירת הדיווח
document.getElementById('reportForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fileInput = document.getElementById('proofFile');
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const proofData = reader.result;

    // קריאה לערכים
    const survivedToEnd = document.querySelector('[name="survivedToEnd"]')?.value || '';
    const lastHider = document.querySelector('[name="lastHider"]')?.value || '';
    const caughtCount = parseInt(document.querySelector('[name="caughtCount"]')?.value || '0');

    // חישוב ניקוד
    let points = 0;
    if (survivedToEnd === 'yes') points += 10;
    if (lastHider === 'yes') points += 10;
    if (!isNaN(caughtCount)) points += caughtCount;

    const formData = {
      playerName: document.getElementById('playerName').value,
      discordName: document.getElementById('discordName').value,
      roundNumber: document.getElementById('roundNumber').value,
      role: document.getElementById('role').value,
      survivedToEnd: survivedToEnd,
      top10: document.querySelector('[name="top10"]')?.value || '',
      lastHider: lastHider,
      caughtCount: caughtCount,
      mostCatches: document.querySelector('[name="mostCatches"]')?.value || '',
      proofData: proofData,
      notes: document.getElementById('notes').value,
      date: new Date().toLocaleString(),
      points: points
    };

    let reports = JSON.parse(localStorage.getItem('reports') || '[]');
    reports.push(formData);
    localStorage.setItem('reports', JSON.stringify(reports));

    alert(`📄 הדיווח נשמר בהצלחה!\n✅ צברת ${points} נקודות`);

    fileInput.value = '';
    document.getElementById('fileNameDisplay').textContent = '';
    e.target.reset();

    document.getElementById('hiderSection').style.display = 'none';
    document.getElementById('seekerSection').style.display = 'none';
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    reader.onload(); // קריאה עם undefined כדי להכניס דיווח גם בלי קובץ
  }
});
>>>>>>> 09e79a4e3b59baa43e23b27255a07c60776ccf1e
