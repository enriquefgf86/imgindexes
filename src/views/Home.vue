<template>
  <div class="home">
    <table>
      <thead>
        <th>Dice</th>
      </thead>
      <tbody>
        <tr><router-link to="/dice/1">Dice 1</router-link></tr>
        <tr><router-link to="/dice/2">Dice 2</router-link></tr>
        <tr><router-link to="/dice/3">Dice 3</router-link></tr>
        <tr><router-link to="/dice/4">Dice 4</router-link></tr>
        <tr><router-link to="/dice/5">Dice 5</router-link></tr>
        <tr><router-link to="/dice/6">Dice 6</router-link></tr>
      </tbody>

    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
