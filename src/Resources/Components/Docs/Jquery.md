### How to Install jQuery

1. **Download jQuery**:

   - Go to the [jQuery download page](https://jquery.com/download/).
   - Choose the version you need (compressed for production or uncompressed for development).
   - Include the downloaded file in your project directory.

2. **Include jQuery in your HTML**:

   ```html
   <head>
     <script src=&quot;path/to/jquery-3.7.1.min.js&quot;></script>
   </head>
   ```

3. **Alternatively, use a CDN**:
   ```html
   <head>
     <script src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js&quot;></script>
   </head>
   ```

### jQuery Cheat Sheet

#### Basic Syntax

- **Document Ready**: Ensure the DOM is fully loaded before running scripts.
  ```javascript
  $(document).ready(function () {
  	// Your code here
  });
  ```

#### Selectors

- **Basic Selectors**:

  ```javascript
  $(&quot;p&quot;)          // Selects all <p> elements
  $(&quot;.class&quot;)     // Selects all elements with class=&quot;class&quot;
  $(&quot;#id&quot;)        // Selects the element with id=&quot;id&quot;
  ```

- **Attribute Selectors**:
  ```javascript
  $(&quot;[href]&quot;)                     // Selects all elements with an href attribute
  $(&quot;a[target='_blank']&quot;)         // Selects all <a> elements with target=&quot;_blank&quot;
  ```

#### Events

- **Common Events**:

  ```javascript
  $(&quot;button&quot;).click(function() {
    alert(&quot;Button clicked!&quot;);
  });

  $(&quot;input&quot;).on(&quot;input&quot;, function() {
    console.log($(this).val());
  });
  ```

#### Effects

- **Show/Hide**:

  ```javascript
  $(&quot;#element&quot;).hide();           // Hides the element
  $(&quot;#element&quot;).show();           // Shows the element
  $(&quot;#element&quot;).toggle();         // Toggles visibility
  ```

- **Fade**:
  ```javascript
  $(&quot;#element&quot;).fadeIn();         // Fades in the element
  $(&quot;#element&quot;).fadeOut();        // Fades out the element
  ```

#### DOM Manipulation

- **Content Manipulation**:

  ```javascript
  $(&quot;#element&quot;).text(&quot;New text&quot;); // Sets text content
  $(&quot;#element&quot;).html(&quot;<b>Bold</b>&quot;); // Sets HTML content
  ```

- **Class Manipulation**:
  ```javascript
  $(&quot;#element&quot;).addClass(&quot;newClass&quot;); // Adds a class
  $(&quot;#element&quot;).removeClass(&quot;oldClass&quot;); // Removes a class
  $(&quot;#element&quot;).toggleClass(&quot;active&quot;); // Toggles a class
  ```

#### AJAX

- **Basic AJAX Request**:
  ```javascript
  $.ajax({
    url: &quot;https://api.example.com/data&quot;,
    method: &quot;GET&quot;,
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.error(error);
    }
  });
  ```

#### Utility Functions

- **Each**: Iterate over a jQuery collection.

  ```javascript
  $(&quot;li&quot;).each(function(index, element) {
    console.log(index, $(element).text());
  });
  ```

- **No Conflict**: Avoid conflicts with other libraries.
  ```javascript
  var jq = $.noConflict();
  jq(document).ready(function() {
    jq(&quot;#element&quot;).text(&quot;Hello, jQuery!&quot;);
  });
  ```
