<template>
    <p>Welcome to the profile page</p>
</template>

<script>

definePageMeta({
    layout: "sidebar",
    middleware: ["auth"]
})

</script>