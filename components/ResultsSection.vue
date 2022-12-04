<template>
  <section class="text-gray-600 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Resultados conquistados
        </h2>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Esse foi o time que proporcionou grandes resultados e autoridade para a empresa.
        </p>
      </div>
      <div class="flex flex-wrap -m-4 text-center">
        <div
          v-for="(result, key) in results"
          :key="key"
          class="p-4 md:w-1/4 sm:w-1/2 w-full"
        >
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <VectorIcon
              style="font-size:50px;height:60px;"
              class="text-red-500 w-12 h-12 mb-3 inline-block"
              :type="result.icon"
            />
            <h2 class="title-font font-medium text-3xl text-gray-900">
              {{ result.title }}
            </h2>
            <p class="leading-relaxed">
              {{ result.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
import VectorIcon from '~/components/VectorIcon.vue'

export default {
  components: {
    VectorIcon
  },
  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>
