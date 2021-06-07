<template>
  <div>
    <p>ID: {{ $route.params.id }}</p>
    <ul>
      <li>id: {{ messageDetail.id }}</li>
      <li>title: {{ messageDetail.title }}</li>
      <li>content: {{ messageDetail.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageDetails = [
        {
          id: 1,
          title: 'message001',
          content: 'content1'
        },
        {
          id: 2,
          title: 'message002',
          content: 'content2'
        },
        {
          id: 4,
          title: 'message004',
          content: 'content4'
        }
      ]

      this.allMessageDetails = allMessageDetails
      const id = +this.$route.params.id
      this.messageDetail = allMessageDetails.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value) {
      // 路由路径（params)发生了改变
      const id = +value.params.id
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }
  }
}
</script>

<style>

</style>
