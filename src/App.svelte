<script>
  import { onMount } from "svelte";
  let paystackReady = false;
  let mounted = false;

  onMount(() => {
    // The payment-form is ready.
    mounted = true;
    if (paystackReady) {
      loadPaystack();
    }
  });

  function paystackLoaded() {
    // Paystack Loaded
    paystackReady = true;
    if (mounted) {
      loadPaystack();
    }
  }

  function loadPaystack() {
    PaystackPop.setup({
      key: "pk_test_a869b0564dc0763418d5cfb3b3b7a2590b1312c6",
      email: "iykekings36@gmail.com",
      amount: 10000,
      container: "paystackEmbedContainer",
      callback: function(response) {
        alert(
          "successfully subscribed. transaction ref is " + response.reference
        );
      }
    });
  }
</script>

<style>
  #paystack {
    width: 60%;
  }
</style>

<svelte:head>
  <script src="https://js.paystack.co/v1/inline.js" on:load={loadPaystack}>

  </script>
</svelte:head>
<section id="paystack">
  <div id="paystackEmbedContainer" />
</section>
