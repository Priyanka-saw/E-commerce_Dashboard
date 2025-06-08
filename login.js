    let isLogin = true;

    function toggleForm() {
      isLogin = !isLogin;

      document.getElementById('formTitle').textContent = isLogin ? "Login" : "Sign Up";
      document.querySelector('.btn').textContent = isLogin ? "Login" : "Sign Up";
      document.getElementById('groupEmail').classList.toggle('hidden');
      document.getElementById('toggleText').textContent = isLogin
        ? "Don't have an account?" : "Already have an account?";
      document.querySelector('.switch button').textContent = isLogin ? "Sign Up" : "Login";

      clearErrors();
    }

    function clearErrors() {
      document.getElementById('userError').textContent = "";
      document.getElementById('emailError').textContent = "";
      document.getElementById('passError').textContent = "";
    }

    function submitForm() {
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email')?.value.trim();
      const password = document.getElementById('password').value.trim();

      clearErrors();

      if (!username) {
        document.getElementById('userError').textContent = "Username is required";
        return;
      }

      if (!password || password.length < 6) {
        document.getElementById('passError').textContent = "Password must be at least 6 characters";
        return;
      }

      if (!isLogin && (!email || !email.includes("@"))) {
        document.getElementById('emailError').textContent = "Valid email is required";
        return;
      }

      if (isLogin) {
        const user = JSON.parse(localStorage.getItem(username));
        if (!user || user.password !== password) {
          alert("Invalid credentials");
        } else {
          alert("Login successful!");
          window.location.href = "index.html";
        }
      } else {
        if (localStorage.getItem(username)) {
          alert("User already exists!");
        } else {
          const userData = { username, email, password };
          localStorage.setItem(username, JSON.stringify(userData));
          alert("Sign-up successful! You can now login.");
          toggleForm();
        }
      }
    }