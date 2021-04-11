# Svelte-paystack 

## A svelte library for implementing paystack payment gateway

## Getting started

> Install

```sh
  npm i svelte-paystack
```


> Use

Import Paystack component as the default export from `svelte-paystack` and pass in your paystack configuration to it as `config` prop. This configuration can be found in your paystack dashboard.

```html
<script>
  import Paystack from 'svelte-paystack';

  //import your custom-component
  import Button from 'your-path'

  let config = {
    key: "pk_test_or_public_key",
    email: "youremail@email.com",
    amount: 10000, 
    currency: "NGN",
    withSlot:true, // If you need to render a custom component to replace default button
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

//Pass custom component to paystack
<Paystack let:usePayInline {config}>

  //action props from your custom-component will receive func to invoke paystack inline, which you can attach to any event inside your custom-component.
<Button action={usePayInline}  />
  </Paystack action>
```
> Configuration Options
  - For `embed: true` all Configuration options specified here by [paystack embed](https://developers.paystack.co/docs/paystack-embded#section-configuration-options) can be specified.

  - For `embed: false` all Configuration options specified here by [paystack inline](https://developers.paystack.co/docs/paystack-inline#section-configuration-options) can be specified.

  - For `withSlot: true` works in conjunction with `embed: false`, which gives you the option of using custom component to trigger [paystack inline](https://developers.paystack.co/docs/paystack-inline#section-configuration-options) can be specified.

  - More configs:

    ```ts
      embed: boolean // specifies if the payment form should be embedded. Defaults to false
      value: string // textContent of the button tag when embed == false. Defaults to "Pay with Paystack"
    ```

## Examples

- Inline (using custom-component) to trigger [paystack inline](https://developers.paystack.co/docs/paystack-inline#section-configuration-options)
  ![](/images/custom-button.png)
 
  - Inline
  ![](/images/inline.png)

  - Embed
  ![](/images/embed.png)