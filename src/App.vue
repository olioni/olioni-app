<template>
  <create_card_form @close-create-card-form="closeCreateCardForm" v-if="show_create_card_form"/>
  <edit_card_form @close-edit-card-form="closeEditCardForm" :cardObj="cardObj" v-if="show_edit_card_form"/>
  <cards_dashboard @show-create-card-form="showCreateCardForm" @show-edit-card-form="showEditCardForm"/>
</template>

<script>
import cards_dashboard from './components/cards_dashboard.vue'
import create_card_form from './components/create_card_form.vue'
import edit_card_form from './components/edit_card_form.vue'

export default {
  name: 'App',
  components: {
    cards_dashboard,
    create_card_form,
    edit_card_form
  },
  data() {
    return {
      show_create_card_form: false,
      show_edit_card_form: false,

      cardObj: null
    }
  },
  methods: {
    showCreateCardForm() {
      this.show_create_card_form = true
    },
    closeCreateCardForm() {
      this.show_create_card_form = false
    },
    showEditCardForm(item) {
      this.show_edit_card_form = true

      this.cardObj = item
    },
    closeEditCardForm() {
      this.show_edit_card_form = false
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

</style>
