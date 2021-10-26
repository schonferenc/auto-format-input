
# auto-format-input

The text entered in the input field is formatted as you type based on the specified template.
## Installation:

       npm install auto-format-input

>    or

  

     yarn add auto-format-input
    
## There are two importable methods:
```ruby
template($event, template, onylNumbers);
```
```ruby
focus($event, target, after);
```

## Using the `template` and `focus` together:
> SomeFile.vue
```ruby
<template>
	<form>
	
		<label  for="phone">Phone Number</label>
		<input
			type="text"
			name="phone"
			placeholder="(xx) xx/ xxx-xx-xx"
			@keypress="[template($event, '(xx) xx/ xxx-xx-xx', true), focus($event, 'email', 18)]"
		/>
		
		<label  for="phone">Email</label>
		<input  type="email"  name="email"  placeholder="email" />
		
		<button>Submit</button>
		
	</form>
</template>

<script>
import { template, focus } from  'auto-format-input';

export  default  {
	name: 'MyComponent',
	methods: {
		template, focus,
	},
}
```
## Use only the `template`:
> SomeFile.vue
```ruby
<template>
	<form>
		<label  for="phone">Phone Number</label>
		<input
			type="text"
			name="phone"
			placeholder="(xx) xx/ xxx-xx-xx"
			@keypress="template($event, '(xx) xx/ xxx-xx-xx', true)" 
		/>
		
		<button>Submit</button>
	</form>
</template>

<script>
import { template } from  'auto-format-input';

export  default  {
	name: 'MyComponent',
	methods: {
		template,
	},
}
```
## Use only the `focus`:
> SomeFile.vue
```ruby
<template>
	<form>
		<label  for="phone">Phone Number</label>
		<input
			type="text"
			name="phone"
			placeholder="(xx) xx/ xxx-xx-xx"
			@keypress="focus($event, 'email', 'enter')" 
		/>

		<label  for="phone">Email</label>
		<input  type="email"  name="email"  placeholder="email" />
		<button>Submit</button>
	</form>
</template>

<script>
import {focus} from  'auto-format-input';

export  default  {
	name: 'MyComponent',
	methods: {
		focus,
	},
}
```
## `template` parameters:

```ruby
template($event, tmp, onlyNumbers),
```
**There are three parameters:**

1. $event
2. tmp
3. onlyNumber

### $event( Object | required )
The event object is a **required** parameter, this is how the method works. 

**If an invalid parameter is specified or no parameter is specified, the following message is displayed on the console:**
```ruby
(Error with value parameter) - invalid parameter, expects "$event" as parameter
```
### tmp​​( String| required )
The text entered in the field will be formatted based on the `tmp` parameter.
**Its format is, for example:** `"AA xx (x) / xx-xx"`.
As you type, `x` is replaced by the value you entered.
**If the template does not contain an `x` character, you have nothing to replace.**

**If an invalid parameter is specified or no parameter is specified, the following message is displayed on the console:**
```ruby
(Warrning with tmp parameter) - no valid template is set
```
### onlyNumber​​( Boolean|optional)
**Optional**, if not set, will **only allow numbers** by default.
If set to false, all characters will be enabled.

**If an invalid parameter is specified , the following message will be displayed in the console:**
```ruby
(Error with onlyNumber parameter) - expects true or false as parameter
```

## `focus` parameters:
```ruby
focus($event, target, after),
```
**There are three parameters:**

1. $event
2. target
3. after

### $event( Object | required )
The event object is a **required** parameter, this is how the method works. 

**If an invalid parameter is specified or no parameter is specified, the following message is displayed on the console:**
```ruby
(Error with value parameter) - invalid parameter, expects "$event" as parameter
```
### target​​( String| required )
**Required parameter.** You must enter the name of the element you want to focus on next.

**If an invalid parameter is specified or no parameter is specified, the following message is displayed on the console:**
```ruby
(Error with target parameter) - there is no element with that name: "${target}"
```
### after​​( String|Number|optional)
Optional parameter. 
There are two types of values: 
 - the word **"enter"**  
 -  **number**, which is the length of the text
   you can type

If the word **"enter"** is entered, it jumps to the next field after pressing the enter key.
If a **number** is specified, it will automatically jump to the next field when it reaches the specified number.
If **no value** is specified, the **enter** key takes effect.

**If an invalid parameter is specified , the following message will be displayed in the console:**
```ruby
(Error with after parameter) - expects string "enter", or a number as parameter
```