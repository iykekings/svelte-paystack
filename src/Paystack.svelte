<script>
  import { onMount } from "svelte";
  let paystackReady = false;
  let mounted = false;
  export let config = {};

  onMount(() => {
    // The payment-form is ready.
    mounted = true;
    if (paystackReady) {
      loadPaystack();
    }
  });
  function payInline() {
    var handler = PaystackPop.setup(config);
    handler.openIframe();
  }
  function paystackLoaded() {
    // Paystack Loaded
    paystackReady = true;
    if (mounted) {
      loadPaystack();
    }
  }

  function loadPaystack() {
    if (config.embed) {
      config.container = "paystackEmbedContainer";
    }
    PaystackPop.setup(config);
  }
</script>

<svelte:head>
  <script src="https://js.paystack.co/v1/inline.js" on:load={loadPaystack}>

  </script>
</svelte:head>
{#if config.embed}
  <div id="paystackEmbedContainer" />
{:else}
  <button type="button" disabled={config.disabled} on:click={payInline}>
    {config.value || 'Pay with Paystack'}
  </button>
{/if}
