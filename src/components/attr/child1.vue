<template>
 <div>
    <childDomChild2 v-on="$listeners"></childDomChild2>
 </div>
</template>
<script>
import childDomChild2 from './child2';
export default {
 name:'child-dom',
}
</script>