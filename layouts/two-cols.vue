<template>
  <div class="slidev-layout two-cols">
    <div class="col-left">
      <slot />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style>
.slidev-layout.two-cols {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 3rem !important;
}
</style>
