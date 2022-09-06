app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  template:
  /*html*/
  `
    <div class="review-container">
      <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            <p>
              {{ review.name }} just gave this a {{ review.rating }} stars rating!
            </p>
            <p>
              '{{ review.review }}'
            </p>
            <hr />
          </li>
        </ul>
    </div>
  `
})