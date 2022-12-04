<template>
  <section class="text-gray-600 body-font relative border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contato
        </h2>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Para mais informações, oportunidades, sugestões entre em contato
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div v-if="(contactStatus === null)" class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Seu nome</label>
              <input
                id="name"
                v-model="name"
                minlength="3"
                type="text"
                name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Seu email</label>
              <input
                id="email"
                v-model="email"
                :pattern="emailPattern"
                minlength="3"
                type="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Sua mensagem para o time</label>
              <textarea id="message" v-model="message" minlength="3" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div class="p-2 w-full">
            <button :disabled="(isValid === false)" class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" :class="(isValid === false ? 'opacity-50 pointer-events-none' : '')" @click="sendContact()">
              <span>Enviar</span>
            </button>
          </div>
        </div>
        <div v-else-if="contactStatus === 'success' " role="alert" class="p-2 w-full">
          <p class="bg-blue-500 text-white font-bold rounded-t px-4 py-2">
            Mensagem enviada com sucesso
          </p>
          <p class="border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700">
            Aguarde contato do time em breve
          </p>
        </div>
        <div v-else-if="contactStatus === 'error' " role="alert" class="p-2 w-full">
          <p class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Ocorreu um problema ao enviar a mensagem
          </p>
          <p class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            Por favor tente novamente em breve
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      contactStatus: null,
      emailPattern: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
    }
  },
  computed: {
    isValid () {
      return this.name.length > 3 &&
				this.email.match(new RegExp(this.emailPattern)) !== null &&
				this.message.length > 3
    }
  },
  methods: {
    sendContact () {
      const data = {
        name: this.name,
        message: this.message,
        email: this.email
      }
      if (this.isValid === true) {
        fetch('https://script.google.com/macros/s/AKfycbzF8dnuJfff0fXxIYeskdFJTvWzXYHqDxHhfWNx_4vOga__WFWptJKv0VN063YIS-CGfw/exec', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
          body: JSON.stringify(data)
        }).then((res) => {
          this.contactStatus = 'success'
        }).catch(() => {
          this.contactStatus = 'error'
        })
      }
    }
  }
}
</script>
