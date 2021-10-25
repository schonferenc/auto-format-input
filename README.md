
# auto-format-input

The text entered in the input field is formatted as you type based on the specified template.

## Installation:

    npm install auto-format-input

## Usage:
> SomeFile.vue
```ruby
<template>
	<form>
		<label  for="phone">Phone Number</label>
		<input
			type="text"
			name="phone"
			placeholder="(xx) xx/ xxx-xx-xx"
			@keypress="useTemplate($event, '(xx) xx/ xxx-xx-xx', 'email')" 
		/>

		<label  for="phone">Email</label>
		<input  type="email"  name="email"  placeholder="email" />
		<button>Submit</button>
	</form>
</template>

<script>
import  useTemplate  from  'auto-format-input';

export  default  {
	name: 'MyComponent',
	methods: {
		useTemplate,
	},
}
const myColors=  require('./someLibrary/myColors');

```
## Parameters:

```ruby
useTemplate($event, tmp, focus, onlyNumbers),
```
**Four parameters can be entered:**

1. $event
2. tmp
3. focus
4. onlyNumber

### $event( Object | required )
**The event object is required, this is how the method works.**

**If an invalid parameter is specified or no parameter is specified, the following message will be displayed in the console:**
```ruby
(Error with value parameter) - invalid parameter, expects "$event" as parameter
```
### tmp​​( String| required )
**The text entered in the field will be formatted based on the `tmp` parameter.**
It takes the following form, for example: `AA xx (x) / xx-xx`
The text will be automatically completed so that where `x` is in the template, the entered value will be placed there.

**If an invalid parameter is specified or no parameter is specified, the following message will be displayed in the console:**
```ruby
(Warrning with tmp parameter) - no valid template is set'
```
### focus​​( String)
Optional value if not set does not jump to the next field.
If the `focus` parameter, if set, jumps to the specified field after filling in the field.
Searches for the next field based on the **name** attribute, if you want to jump to the next field, you must give it a **name**.

**If an invalid parameter is specified , the following message will be displayed in the console:**
```ruby
(Error with focus parameter) - there is no element with that name: "..."
```
### onlyNumber​​( Boolean)
**Optional, if not set, will only allow numbers by default.**
If set to false, all characters will be enabled.

**If an invalid parameter is specified , the following message will be displayed in the console:**
```ruby
(Error with onlyNumber parameter) - its value can only be true or false