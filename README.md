# Lab 3, Add Images

### Artical Section

You can add images to your website by using the `img` tag.

The `img` tag uses the `src` attribute to point to a specific image's URL.

An example of this would be:

```
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

Note: The `img` tag is a self-closing tag. That means there's no ending tag for `img` element.

Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.

The `img` element also has an `alt` attribute. The `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

Note: If the image is purely decorative, using an empty `alt` attribute is a best practice.

Let's add an alt attribute to our img example above:

```
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="A business cat wearing a necktie.">
```

### DIY Section

Let's add an image to our website.

Create an `img` element.

Set the `src` attribute that points to this URL:

```
https://bit.ly/fcc-relaxing-cat
```

Finally, give your `img` element an `alt` attribute with some kind of text that's applicable.

- Your page should have an *img* element
- Your image element should have a `src` attribute that points to the kitten image
- Your image element's `alt` attribute should have a text