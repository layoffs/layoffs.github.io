<template>
  <main>
    <PageHeader/>
    <HeroSection/>
    <TeamSection :team="team" />
    <ResultsSection :results="results" />    
    <ShareSection />
    <ContactSection />    
    <PageFooter />
  </main>
</template>

<script>
import TeamSection from "~/components/TeamSection"
import HeroSection from "~/components/HeroSection.vue"
import PageFooter from "~/components/PageFooter"
import PageHeader from "~/components/PageHeader"
import ContactSection from "~/components/ContactSection"
import ShareSection from "~/components/ShareSection"
import GetDataFromSpreadsheet from "~/modules/GetDataFromSpreadsheet"

export default {
  name: 'IndexPage',
  components: {
    TeamSection,
    HeroSection,
    PageFooter,
    ContactSection,
    PageHeader,
    ShareSection
  },
  async asyncData() {
    const dateToText = (date) => {
      // 2022-06-01T03:00:00.000Z
      const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
      const [year, monthIndex] = date.match(/([0-9]{4})-([0-9]{2})/).slice(1, ).map(x => parseInt(x));
      return `${monthNames[monthIndex -1]}/${year}`;
    };

    const spreadsheetId = "1vvzVhkBfLG3XtM7be8370vauQrLu53K4HR2E4JjXTdA";
    const team = await 
      GetDataFromSpreadsheet(spreadsheetId, "layoff-novembro-2022")
      .then(peopleData => {
        return peopleData.map(person => {
          return {
            "name": person.name,
            "team": person.team,
            "since": dateToText(person.since),
            "linkedin": person.linkedin,
            "job": person.job,
            "available": person.available,
            "photo": `https://layoffvd.com.br/slides/assets/pessoas/${person.photo}`,
            "page": person.page,
            "cv": person.cv
          }
        }).filter(person => person.available === true)
      })

    const recommendations = await   
      GetDataFromSpreadsheet(spreadsheetId, "depoimentos")

    const results = await   
      GetDataFromSpreadsheet(spreadsheetId, "resultados")

    return {
      team,
      recommendations,
      results
    }
  }
}
</script>
