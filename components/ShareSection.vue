<template>
  <section class="text-gray-600 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h2 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
          Compartilhe essa página com sua base de contatos e contribua na realoção de profissionais altamente capacitados
        </h2>
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=https://layoffvd.com.br"
          target="_blank"
          class="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0"
        >
          <span class="inline-block">Compartilhar</span>
          <VectorIcon
            class="inline-block mb-1 ml-2"
            type="linkedin"
          />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import VectorIcon from '~/components/VectorIcon.vue'
export default {
  components: {
    VectorIcon
  }
}
</script>
