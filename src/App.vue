<script setup>

</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="logo">
        <img src="src/assets/logo.svg" alt="Logo">
      </div>
      <div class="buttons">
        <nav>
          <ul>
<!--            buttons should be done with slot-->
            <li><a href="#">Users</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <section class="description">
        <h1>Test assignment for front-end developer</h1>
        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        <input type="button" value="Sign Up">
      </section>
      <section class="users-wrapper">
        <div class="users-wrapper__users-heading users-heading">
          <h1>Working with GET request</h1>
        </div>
        <div class="users-wrapper__users users">
          <div class="users__user user">
            <div class="user__profile-photo">
              <img src="profile.img" alt="profile-photo">
            </div>
            <div class="user__name">
              <p>Antonio Banderas</p>
            </div>
            <div class="user__description">
              <p>Work</p>
              <p>gmail</p>
              <p>phone</p>
            </div>
          </div>
        </div>
        <div class="users-wrapper__show-more-button">
          <input type="button" value="Show more">
<!--          this should be done with slot-->
        </div>
      </section>
      <section class="form-wrapper">
        <div class="form-wrapper__form-heading form-heading">
          <h1>Working with POST request</h1>
        </div>
        <div class="form-wrapper__form form">
          <form action="submit-form.php" method="post" enctype="multipart/form-data">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>

            <label>Select your position:</label>
            <input type="radio" id="fontend" name="position" value="male">
            <label for="fontend">Frontend developer</label>
            <input type="radio" id="backend" name="position" value="female">
            <label for="backend">Backend developer</label>
            <input type="radio" id="ui" name="position" value="other">
            <label for="ui">Designer</label>
            <input type="radio" id="qa" name="position" value="prefer_not_to_say">
            <label for="qa">QA</label>

            <label for="image">Upload Image:</label>
            <input type="file" id="image" name="image">

            <input type="submit" value="Submit">
          </form>
        </div>
        <div class="form-wrapper__submit-button">
          <input type="button" value="Sign up">
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>