<template>
  <v-alert dismissible color="error" @click="onClose" :value="true">
      {{ errorMessage }}
    </v-alert>
</template>

<script>
export default {
    props: ['errorMessage'],
    methods: {
        onClose() {
            this.$emit('dismissed')
        }
    }
}
</script>


