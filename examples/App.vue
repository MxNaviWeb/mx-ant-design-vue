<template>
  <div>
    <a-select mode="multiple" style="width: 100%" virtual placeholder="Please select">
      <a-select-option v-for="item of options" :key="item.value">{{ item.value }}</a-select-option>
    </a-select>
  </div>
</template>
<script>
const options = [];
for (let i = 0; i < 10000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}
export default {
  data() {
    return {
      options,
    };
  },
};
</script>
