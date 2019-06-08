<template>
    <div class="bodyErrors">
        <div class="contentError">
            <a href="/" id="blink1">Перейти к главной странице</a>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .contentError {width:100%;text-align:center;position:absolute;bottom:22%;left:0px;}
    .contentError a {display:inline-block;text-decoration:none }
    .contentError a:hover {opacity:0.7}
    .contentError a, .contentError a:hover {color:#000;}
    #blink1 {
        -webkit-animation: blink1 3s linear infinite;
        animation: blink1 3s linear infinite;
        font-size: 20px;
    }
    @-webkit-keyframes blink1 {
        0% { color: rgba(34, 34, 34, 1); }
        50% { color: rgba(34, 34, 34, 0); }
        100% { color: rgba(34, 34, 34, 1); }
    }
    @keyframes blink1 {
        0% { color: rgba(34, 34, 34, 1); }
        50% { color: rgba(34, 34, 34, 0); }
        100% { color: rgba(34, 34, 34, 1); }
    }
</style>
