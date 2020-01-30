 # Svelte-paystack 

 ## A svelte library for implementing paystack payment gateway

 ## Getting started

 ```html
<script>
  import Paystack from 'svelte-paystack';
  let config = {
    key: "pk_test_or_public_key",
    email: "youremail@email.com",
    amount: 10000, 
    currency: "NGN",
    embed: false,
    disabled: false,
    callback: function(response) {
      console.log(
        "successfully subscribed. transaction ref is " + response.reference
      );
    },
    onClose: function() {
      console.log("window closed");
    }
  }
</script>
<Paystack {config} />
 ```
> Configuration Options
  - For `embed: true` all Configuration options specified here by [paystack embed](https://developers.paystack.co/docs/paystack-embded#section-configuration-options) can be specified.

  - For `embed: false` all Configuration options specified here by [paystack inline](https://developers.paystack.co/docs/paystack-inline#section-configuration-options) can be specified.

  - More configs:

    ```ts
      embed: boolean // specifies if the payment form should be embedded. Defaults to false
      value: string // textContent of the button tag when embed == false. Defaults to "Pay with Paystack"
    ```

## Examples

  - ### Inline
  ![](/images/inline.png)

  - ### Embed
  ![](/images/embed.png)