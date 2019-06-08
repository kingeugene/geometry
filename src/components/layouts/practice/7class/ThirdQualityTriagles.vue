<template>
    <div class="container">
        <div>
            <img class="gxs-resource-image" alt="4.jpg" src="//ykl-res.azureedge.net/3213959a-a6ee-4705-b31a-559528e1893f/4.jpg" width="528" height="286">
        </div>
        <div>Используй информацию, данную на рисунке, и определи величину угла  ∡EGH , если  ∡GEF   =  41 ° .</div>
        <div>1. Назови равные треугольники:</div>
        <div>Δ E <input type="text" size="5" v-model="equalTriangles.first[0]"  >&nbsp;	<input type="text" size="5" v-model="equalTriangles.first[1]" > = Δ H <input v-model="equalTriangles.second[0]" type="text" size="5"   >&nbsp;	 <input v-model="equalTriangles.second[1]" type="text" size="5"   ></div>
        <p></p>

        <div>2. Назови угол, соответственно равный данному углу:</div>
        <div>∡GEF  = ∡ <input type="text" size="5" v-model="equalTriangles.equalAngles"></div>
        <p></p>

        <div>3. ∡EGH = <input type="text" size="5" v-model="equalTriangles.magnitudeAngle"> °</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                correct: ['FGGE', 'EHG', '41'],
                equalTriangles: {
                    first: [],
                    second: [],
                    equalAngles: '',
                    magnitudeAngle: ''

                },

            }

        }
    }
</script>

<style scoped>
    input {
        text-align: center;
        font-size: 16px;
    }
</style>
