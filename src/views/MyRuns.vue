<template>
  <div class="my-runs-page">
    <RunCreator></RunCreator>
    <b-container class="nuzzy-runs-container">
      <b-row>
        <b-col>
          <h2 id="my-runs-page-title">
            Nuzlocke Runs
          </h2>
          <b-button
            v-if="isLoggedIn"
            v-b-modal.create-run-window
            variant="outline-success">
            + Add a run
          </b-button>
          <p v-else>
            Please login or sign up to view your runs
          </p>
          <MyRunsList :runs="userRuns"></MyRunsList>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MyRunsList from '@/components/MyRunsList.vue';
import RunCreator from '@/components/RunCreator.vue';

export default {
  name: 'MyRuns',
  components: {
    MyRunsList,
    RunCreator
  },
  computed: {
    userRuns() {
      return this.$store.state.runs;
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  }
}
</script>
<style scoped>
.nuzzy-runs-container {
  text-align: left;
  margin-bottom: 15px;
}
#my-runs-page-title {
  border-bottom: black 1px solid;
  margin-bottom: 15px;
  padding-bottom: 15px;
}
</style>