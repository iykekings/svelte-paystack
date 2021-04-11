<script>
    export let action=()=>null;
</script>

<button class="cta" on:click={action} >
    Custom button &#129409
</button>

<style>
    .cta{
        border-radius: 50px;
       white-space: nowrap;
       text-decoration: none;
       border:0;
       /* padding: 1rem; */
       /* margin: 0.25rem; */
       cursor: pointer;
       width: 50%;
       max-width: 80%;
       padding: 1.2rem 2.5rem;
       margin-bottom: 2px;
       background-color:#FEF2B9 ;
    }
</style>