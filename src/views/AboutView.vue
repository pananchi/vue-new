<script setup>

</script>

<template>
  <div>
    <h2>About Page</h2>
    <hr>
    <RouterLink :to="{ name: 'team1' }" activeClass="active">Team1</RouterLink> |
    <RouterLink :to="{ name: 'team2' }" activeClass="active">Team2</RouterLink> |

    <RouterView />
  </div>
</template>

<style lang="css" scoped>
.active {
  color: green;
  font-weight: 600;
  text-decoration: none;
}
</style>