<template>
  <div class="connexion">
    <div class="title">
      <h1 class="">SING IN</h1>
    </div>
    <div class="content">
      <div class="content__form">
        <div class="content__form-input">
          <div class="content__label-input">
            <label for="mail" class="label-connexion">Email</label>
            <a-input
              id="mail"
              class="input-connexion"
              placeholder="Your email..."
            />
          </div>
          <div class="content__label-input">
            <label for="password" class="label-connexion">Password</label>
            <a-input-password
              class="input-connexion"
              placeholder="Your password"
            />
          </div>
          <div class="container-btn">
            <button class="btn-connexion">Connexion</button>
            <p class="info">
              If you don't have a acount, please
              <router-link to="/signUp">Sing Up here</router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="content__img">
        <figure>
          <img
            src="../../assets/connexion.jpg"
            alt="image de voiture pour le connexion"
            class="img-connexion"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConnexionComponent",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Balinese:wght@700&display=swap");
.connexion {
  margin: auto;
  background: #ffffff;
  min-height: 650px;
  width: 1250px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
}
h1 {
  margin: 0;
}
.container-btn {
  display: block;
  text-align: center;
  margin-top: 25px;
}

.title {
  text-align: center;
  margin-top: 0.5em;
  font-family: "Noto Sans Balinese", sans-serif;
}

h1 {
  color: #a33100;
  font-size: 36px;
}

.input-connexion {
  width: 330px;
  height: 40px;
  background: #f5f9f9;
  border-radius: 10px;
}

.label-connexion {
  font-weight: bold;
  font-size: 18px;
}

.btn-connexion {
  color: #ffffff;

  width: 147px;
  height: 50px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #a33100;

  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

.img-connexion {
  width: 100%;
  height: 600px;
  border-radius: 10px;
  transform: scaleX(-1);
}

.info {
  margin-top: 30px;
  font-style: italic;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 100px;

  &__form,
  &__img {
    margin: 0px 20px 20px 20px;
    width: 450px;
    height: 600px;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  &__form {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  &__form-input {
    height: 300px;
    margin: auto auto;
  }

  &__img {
    flex-grow: 1;

    @media screen and (max-width: 1242px) {
      display: none;
    }
  }

  &__label-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 18px;
  }
}
</style>
