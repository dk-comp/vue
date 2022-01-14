<template>
  <div class="evaluate-rating-stars"
    :class="{
    'rating-0': rating === '0',
    'rating-1': rating === '1',
    'rating-2': rating === '2',
    'rating-3': rating === '3',
    'rating-4': rating === '4',
    'rating-5': rating === '5',
  }"
  >
    <div class="r-item"
      @click="rating = '1'"
    >
      <svg id="SVGDoc" width="18" height="17" xmlns="http://www.w3.org/2000/svg" version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"
      >
        <defs>
          <path
            d="M1536.00002,1741.00027l2.96608,5.34236l6.03275,1.1509l-4.19952,4.45255l0.76229,6.05343l-5.5616,-2.59058l-5.56171,2.59058l0.76229,-6.05343l-4.19941,-4.45255l6.03264,-1.1509l2.96619,-5.34236"
            id="Path-0"
          />
        </defs>
        <g transform="matrix(1,0,0,1,-1527,-1741)">
          <g>
            <use xlink:href="#Path-0" class="cls-1" />
          </g>
        </g>
      </svg>
    </div>
    <div class="r-item"
      @click="rating = '2'"
    >
      <svg id="SVGDoc" width="18" height="17" xmlns="http://www.w3.org/2000/svg" version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"
      >
        <defs>
          <path
            d="M1536.00002,1741.00027l2.96608,5.34236l6.03275,1.1509l-4.19952,4.45255l0.76229,6.05343l-5.5616,-2.59058l-5.56171,2.59058l0.76229,-6.05343l-4.19941,-4.45255l6.03264,-1.1509l2.96619,-5.34236"
            id="Path-0"
          />
        </defs>
        <g transform="matrix(1,0,0,1,-1527,-1741)">
          <g>
            <use xlink:href="#Path-0" class="cls-1" />
          </g>
        </g>
      </svg>
    </div>
    <div class="r-item"
      @click="rating = '3'"
    >
      <svg id="SVGDoc" width="18" height="17" xmlns="http://www.w3.org/2000/svg" version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"
      >
        <defs>
          <path
            d="M1536.00002,1741.00027l2.96608,5.34236l6.03275,1.1509l-4.19952,4.45255l0.76229,6.05343l-5.5616,-2.59058l-5.56171,2.59058l0.76229,-6.05343l-4.19941,-4.45255l6.03264,-1.1509l2.96619,-5.34236"
            id="Path-0"
          />
        </defs>
        <g transform="matrix(1,0,0,1,-1527,-1741)">
          <g>
            <use xlink:href="#Path-0" class="cls-1" />
          </g>
        </g>
      </svg>
    </div>
    <div class="r-item"
      @click="rating = '4'"
    >
      <svg id="SVGDoc" width="18" height="17" xmlns="http://www.w3.org/2000/svg" version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"
      >
        <defs>
          <path
            d="M1536.00002,1741.00027l2.96608,5.34236l6.03275,1.1509l-4.19952,4.45255l0.76229,6.05343l-5.5616,-2.59058l-5.56171,2.59058l0.76229,-6.05343l-4.19941,-4.45255l6.03264,-1.1509l2.96619,-5.34236"
            id="Path-0"
          />
        </defs>
        <g transform="matrix(1,0,0,1,-1527,-1741)">
          <g>
            <use xlink:href="#Path-0" class="cls-1" />
          </g>
        </g>
      </svg>
    </div>
    <div class="r-item"
      @click="rating = '5'"
    >
      <svg id="SVGDoc" width="18" height="17" xmlns="http://www.w3.org/2000/svg" version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"
      >
        <defs>
          <path
            d="M1536.00002,1741.00027l2.96608,5.34236l6.03275,1.1509l-4.19952,4.45255l0.76229,6.05343l-5.5616,-2.59058l-5.56171,2.59058l0.76229,-6.05343l-4.19941,-4.45255l6.03264,-1.1509l2.96619,-5.34236"
            id="Path-0"
          />
        </defs>
        <g transform="matrix(1,0,0,1,-1527,-1741)">
          <g>
            <use xlink:href="#Path-0" class="cls-1" />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EvaluateRatingStars',
  data: () => ({
    rating: '0'
  }),

}
</script>

<style scoped lang="sass">
.evaluate-rating-stars
  display: flex
  align-items: center
  width: 100%
  justify-content: space-between

  .r-item
    display: flex
    cursor: pointer
    &:not(:last-child)
      margin-right: 5px

    .cls-1
      fill: #c7c7c7
      fill-opacity: 1

  &.rating-1
    .r-item
      &:first-child
        .cls-1
          fill: #c83636
          fill-opacity: 1

  &.rating-2
    .r-item
      &:nth-child(-n+2)
        .cls-1
          fill: #c83636
          fill-opacity: 1

  &.rating-3
    .r-item
      &:nth-child(-n+3)
        .cls-1
          fill: #c83636
          fill-opacity: 1

  &.rating-4
    .r-item
      &:nth-child(-n+4)
        .cls-1
          fill: #c83636
          fill-opacity: 1

  &.rating-5
    .r-item
      &:nth-child(-n+5)
        .cls-1
          fill: #c83636
          fill-opacity: 1
</style>