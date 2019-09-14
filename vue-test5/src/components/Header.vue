<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Нэмэгдсэн эшлэл</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" area-valuenow="40" area-valuemin="0" area-valuemax="100"
                    :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                    {{ quoteCount }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['quoteCount', 'maxQuotes']
    }
</script>

<style>

</style>