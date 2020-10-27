<template>
  <div class="currencies">
    <h1>List of currencies</h1>
    <ul>
      <li
        v-for="currency in currencies"
        :key="currency"
      >
        {{currency}}
      </li>
    </ul>
    <input v-model="newCurrency">
    <button @click="addCurrency">Add Currency</button>
  </div>
</template>

<script>
export default {
  name: 'Currencies',

  data () {
    return {
      newCurrency: undefined,
      currencies: [
        'bat',
        'dot'
      ]
    }
  },

  methods: {
    addCurrency () {
      if (!this.newCurrency) {
        return
      }

      this.currencies = [
        ...this.currencies,
        this.newCurrency
      ]

      this.newCurrency = ''
    },

    getCurrencies () {
      // Récupérer les crypto-monnaies du serveur
      fetch('/api/v1/currencies')
        .then(res => res.json())
        .then(data => { this.currencies = data })
    }
  },

  created () {
    this.getCurrencies()
  }
}
</script>

<style scoped>

</style>
