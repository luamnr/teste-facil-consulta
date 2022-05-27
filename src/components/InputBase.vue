<template>
    <b-form-group class="inputComp" :label="this.label">
        <slot/>
    </b-form-group>

</template>

<script>
export default {
    name: "InputBase",
    props: [
        "label"
    ]
}

</script>

<style>
    .inputComp{
        background-color: #fff;    
    }
    .form-control{
        border-color: #483698 !important;
        box-shadow: none !important;
    }


</style>