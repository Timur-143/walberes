function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
  
    if (!username || !password) {
      document.getElementById('regMessage').innerHTML = '<span class="error">Заполните все поля!</span>';
      return;
    }
  
    // Проверка, если пользователь уже зарегистрирован
    if (localStorage.getItem(username)) {
      document.getElementById('regMessage').innerHTML = '<span class="error">Пользователь уже существует!</span>';
      return;
    }
  
    localStorage.setItem(username, password);
    document.getElementById('regMessage').innerText = 'Успешная регистрация!';
  }
  
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const storedPassword = localStorage.getItem(username);
  
    if (storedPassword === password) {
      document.getElementById('loginMessage').innerText = 'Успешный вход!';
    } else {
      document.getElementById('loginMessage').innerHTML = '<span class="error">Неверный логин или пароль!</span>';
    }
  }
  