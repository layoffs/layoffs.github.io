<template>
  <section id="profissionais">
    <div class="text-gray-700 body-font border-t border-gray-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
            Os profissionais impactados
          </h2>
          <h3 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Especialistas em SEO, tecnologia, mídias digitais, parcerias e mais...
          </h3>
        </div>
        <div v-if="false" class="mb-10 text-center">
          <span v-for="(teamLabel, key) in teams" :key="key">
            <span
              :style="(selectedTeams.includes(teamLabel.name) ? 'border:3px solid red;' : '')"
              class="text-xs cursor-pointer font-semibold inline-block py-1 px-2 uppercase rounded uppercase last:mr-0 mr-1 text-gray-600 bg-gray-200"
              @click="toggleTeam(teamLabel)"
            >
              {{ teamLabel.name }}
            </span>
          </span>
        </div>
        <div class="md:flex md:flex-wrap md:-m-4">
          <div
            v-for="(person, key) in team"
            :key="key"
            :class="(selectedTeams.includes(person.team) || selectedTeams.length === 0) ? 'p-4 lg:w-1/2' : ''"
          >
            <PersonCard
              v-if="(selectedTeams.includes(person.team) || selectedTeams.length === 0)"
              :person="person"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    team: {
      type: Array,
      required: true
    }
  },
  data () {
    const teams = this.team.reduce((teams, person) => {
      const team = teams.find(x => x.name === person.team) || null
      if (team === null) {
        teams.push({ name: person.team })
      }
      return teams
    }, []).sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1)

    return {
      teams,
      selectedTeams: []
    }
  },
  methods: {
    test (team) {
		console.log(team) // eslint-disable-line
    },
    toggleTeam (team) {
      this.selectedTeams.includes(team.name)
        ? this.selectedTeams.splice(this.selectedTeams.findIndex(itemTeam => itemTeam.name === team.name), 1)
        : this.selectedTeams.push(team.name)
    }
  }
}
</script>
