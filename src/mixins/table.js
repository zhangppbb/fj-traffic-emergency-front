export default {
  data() {
    return {
      tableData: {
        showData: [],
        page: {
          currentPage: 1,
          pageSize: 10,
          total: 0
        },
        loading: false
      }
    }
  },
  methods: {
    handleReset() {
      this.form = this.$options.data().form
      this.fetchData()
    }
  }
}
