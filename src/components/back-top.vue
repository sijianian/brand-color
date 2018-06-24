<template>
  <transition :name="transition">
    <div
      v-show="visible"
      class="m-back-top">
      <slot>
        <div class="m-back-top-inner"
          @click="scrollToTop">
          <i class="el-icon-arrow-up"
            :style="{
              fontSize: '20px',
              color: '#fff',
            }"/>
        </div>
      </slot>
      <slot name="other"/>
    </div>
  </transition>
</template>

<script>
const easeInOut = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b
  return (-c / 2) * (--t * (t - 2) - 1) + b
}

const setScrollTop = (el, value) => {
  const targetNode = el
  if (targetNode === window) {
    document.body.scrollTop = value
    document.documentElement.scrollTop = value
  } else {
    targetNode.scrollTop = value
  }
}

const scrollTop = (el, from = 0, to, duration = 500) => {
  if (duration <= 10) {
    setScrollTop(el, to)
    return
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
  }

  const step = Math.ceil(duration / 10)

  let currentStep = 0
  let currentTop = from
  let run = () => {
    currentTop = easeInOut(currentStep++, currentTop, to - currentTop, step)
    setScrollTop(el, currentTop)

    if (currentTop !== to) {
      window.requestAnimationFrame(run)
    } else {
      setScrollTop(el, currentTop)
    }
  }

  window.requestAnimationFrame(run)
}

export default {
  name: 'm-back-top',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400,
    },
    target: {
      type: Function,
      default() {
        return null
      },
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    realTarget() {
      return this.target() || (typeof window !== 'undefined' ? window : null)
    },
  },
  mounted() {
    this.realTarget.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    this.realTarget.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = this.getScroll(this.realTarget, true)

      this.visible = scrollTop > this.visibilityHeight
    },
    getScroll(target, top) {
      if (typeof window === 'undefined') {
        return 0
      }
      const prop = top ? 'pageYOffset' : 'pageXOffset'
      const method = top ? 'scrollTop' : 'scrollLeft'
      const isWindow = target === window
      let ret = isWindow ? target[prop] : target[method]
      // ie6,7,8 standard mode
      if (isWindow && typeof ret !== 'number') {
        ret = window.document.documentElement[method]
      }
      return ret
    },
    scrollToTop() {
      let currentTop = this.getScroll(this.realTarget, true)
      scrollTop(this.realTarget, currentTop, 0, this.duration)
      this.$emit('on-click')
    },
  },
}
</script>

<style lang="scss">
.m-back-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;

  &-inner {
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &-icon {
      transform: rotate(180deg);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
