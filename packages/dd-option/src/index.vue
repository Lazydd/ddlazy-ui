<template>
    <div class="dd-option" />
</template>

<script>
export default {
    name: "ddOption",
    props: {
        value: {},
        label: {},
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
