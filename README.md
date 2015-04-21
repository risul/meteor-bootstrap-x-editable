# Meteor-Bootstrap-X-Editable

Latest version of [Bootstrap X-Editable](http://vitalets.github.io/x-editable/) packaged for Meteor.
X-Editable allows you to create editable elements on your page and includes both popup and inline modes. Please try out [demo](http://vitalets.github.io/x-editable/demo-bs3.html) to see how it works.

## Installing

```bash
    meteor add risul:bootstrap-x-editable
```

## Usage

Template:

```html
<template name="hello">
  <p id="textArea" class="editable" data-type="textarea" data-placeholder="Enter text" 
    data-emptytext="Click to enter text" data-rows="4">{{textAreaContent}}</p>
</template>
```

After template is rendered:

```js
Template.hello.rendered = function() {
  $('#textArea.editable').editable({
    success: function(response, newValue) {
      //do something with newValue - usually a collection.update call
    }
  });
}
```

## Documentaion

See the official [documentation](http://vitalets.github.io/x-editable/docs.html) for more info