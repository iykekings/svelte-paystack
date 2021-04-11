<script>
  import Paystack from "./Paystack.svelte";
  import Button from "./customButton.svelte"

  let config = {
    key: "pk_test_a869b0564dc0763418d5cfb3b3b7a2590b1312c6",
    email: "iykekings36@gmail.com",
    amount: 10000,
    withSlot: false,
    currency: "NGN",
    embed: false,
    value: "Pay NGN100",
    disabled: false,
    callback: function(response) {
      alert(
        "successfully subscribed. transaction ref is " + response.reference
      );
    },
    onClose: function() {
      alert("window closed");
    }
  };
</script>

<style>
  #paystack {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  }
</style>

<section id="paystack">
  <Paystack let:usePayInline {config}>
    <Button action={usePayInline}/>
  </Paystack>
</section>
