app.component('review-form', {
  template: 
  /* html */
  `
    <form class="review-form" @submit.prevent="handleSubmit">
      <h3>Leave a review</h3>
      <div class="row">
        <p>Name:</p>
        <input type="text" v-model="name" />
      </div>
      <div class="row">
        <p>Review:</p>
        <textarea v-model="review"></textarea>
      </div>
      <div class="row">
        <p>Rating:</p>
        <select v-model="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </div>
      <button class="button">Cast review</button>
    </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods: {
    handleSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null) {
        alert('Please fill out every field!')
        return
      }

      let reviews = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }

      this.$emit('submitTrigger', reviews)
    }
  }
})